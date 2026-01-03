// Google Apps Script for StrongWill Service Registration
// Deploy as web app with "Execute as: Me" and "Anyone (even anonymous)"

function addRequest(data) {
  try {
    const sh = getSheet();
    const ts = new Date();
    const row = [ts, data.name||'', data.phone||'', data.model||'', data.problem||'', data.address||'', data.preferred_time||'', 'planned', ''];
    sh.appendRow(row);
    const rowIndex = sh.getLastRow();

    // Get technician phone from properties
    const props = PropertiesService.getScriptProperties();
    const techPhone = props.getProperty('TECH_PHONE') || '+919003203808';

    // Notification (best-effort)
    try {
      const techEmail = props.getProperty('TECH_EMAIL');
      if (techEmail) {
        MailApp.sendEmail(techEmail, 'New service request', 'New request from '+(data.name||'')+' - Phone: '+(data.phone||'')+'\nModel: '+(data.model||'')+'\nProblem: '+(data.problem||''));
      }
    } catch (e) {
      // Ignore email errors
    }

    // Return a nicely formatted success page
    const html = `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Service Request Confirmed - StrongWill</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f0f2f5; color: #333; }
          .container { max-width: 600px; margin: 40px auto; background: white; padding: 30px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); text-align: center; }
          .success-icon { font-size: 64px; margin-bottom: 20px; color: #4CAF50; }
          }
          .details p {
            margin: 8px 0;
          }
          .whatsapp-button {
            display: inline-block;
            background: #25D366;
            color: white;
            text-decoration: none;
            padding: 12px 24px;
            border-radius: 24px;
            font-weight: bold;
            margin-top: 20px;
            transition: background 0.3s;
          }
          .whatsapp-button:hover {
            background: #128C7E;
          }
          .note {
            color: #666;
            font-size: 14px;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="success-icon">✔️</div>
          <h1>Service Request Confirmed!</h1>
          
          <div class="details">
            <p><strong>Request ID:</strong> ${rowIndex}</p>
            <p><strong>Name:</strong> ${escapeHtml(data.name || '')}</p>
            <p><strong>Machine:</strong> ${escapeHtml(data.model || '')}</p>
            <p><strong>Phone:</strong> ${escapeHtml(data.phone || '')}</p>
          </div>

          <p>Your service request has been successfully registered. Our technician will contact you shortly.</p>
          
          <a href="https://wa.me/${encodeURIComponent(techPhone)}?text=${encodeURIComponent(
            'Hi, I just registered for sewing machine service. Request ID: ' + rowIndex + '\n' +
            'Name: ' + (data.name || '') + '\n' +
            'Machine: ' + (data.model || '') + '\n' +
            'Problem: ' + (data.problem || '')
          )}" class="whatsapp-button">
            📱 Contact Technician on WhatsApp
          </a>

          <p class="note">Save your Request ID: ${rowIndex} for future reference.</p>
        </div>
      </body>
    </html>`;

    return HtmlService.createHtmlOutput(html);
  } catch (err) {
    logError(err);
    // Return error in a user-friendly format
    const errorHtml = `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Error - StrongWill</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background: #f0f2f5;
          }
          .container {
            max-width: 600px;
            margin: 40px auto;
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            text-align: center;
          }
          .error-icon {
            font-size: 64px;
            color: #f44336;
            margin-bottom: 20px;
          }
          h1 {
            color: #d32f2f;
            margin-bottom: 20px;
          }
          .retry-button {
            display: inline-block;
            background: #1976d2;
            color: white;
            text-decoration: none;
            padding: 12px 24px;
            border-radius: 24px;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="error-icon">❌</div>
          <h1>Oops! Something went wrong</h1>
          <p>We couldn't process your service request. Please try again.</p>
          <p>Error: ${escapeHtml(err.message)}</p>
          <a href="javascript:history.back()" class="retry-button">Go Back and Try Again</a>
        </div>
      </body>
    </html>`;
    
    return HtmlService.createHtmlOutput(errorHtml);
  }
}

function listRequests() {
  try {
    const sh = getSheet();
    const data = sh.getDataRange().getValues();
    if (!data || data.length <= 1) return jsonResponse({ success: true, data: [] , technicianPhone: (PropertiesService.getScriptProperties().getProperty('TECH_PHONE')||PropertiesService.getScriptProperties().getProperty('technician_phone')||'')});
    const headers = data.shift();
    const propsOut = PropertiesService.getScriptProperties();
    const technicianPhone = propsOut.getProperty('TECH_PHONE') || propsOut.getProperty('technician_phone') || '';
    const rows = data.map((r, idx) => ({ row: idx+2, timestamp: r[0], name: r[1], phone: r[2], model: r[3], problem: r[4], address: r[5], preferred_time: r[6], status: (r[7]||'planned'), notes: (r[8]||'') }));
    return jsonResponse({ success: true, data: rows, technicianPhone: technicianPhone });
  } catch (err) {
    logError(err);
    return jsonResponse({ success: false, error: err.message, stack: (err.stack || '') });
  }
}

/**
 * Render a simple HTML dashboard so technicians can view and update rows
 * Usage: open the web app URL with ?view=dashboard
 */
function renderDashboard(params) {
  try {
    const sh = getSheet();
    const data = sh.getDataRange().getValues();
    const headers = data && data.length ? data[0] : ['Timestamp','Name','Phone','Model','Problem','Address','PreferredTime','Status','Notes'];
    const rows = (data && data.length>1) ? data.slice(1) : [];
    const statusFilter = (params && params.status && params.status !== 'all') ? String(params.status).toLowerCase() : null;

    let html = [];
    html.push('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">');
    html.push('<title>Technician Dashboard</title>');
    html.push('<style>body{font-family:Arial,Helvetica,sans-serif;padding:12px}table{border-collapse:collapse;width:100%}th,td{border:1px solid #ddd;padding:8px}th{background:#f7f7f7}</style>');
    html.push('</head><body>');
    html.push('<h2>Technician Dashboard</h2>');
    html.push('<form method="get" style="margin-bottom:12px">');
    html.push('<input type="hidden" name="view" value="dashboard">');
    html.push('Filter status: <select name="status"><option value="all">All</option><option value="planned">planned</option><option value="in-progress">in-progress</option><option value="completed">completed</option></select> ');
    html.push('<button type="submit">Apply</button>');
    html.push('</form>');

    html.push('<table><thead><tr>');
    html.push('<th>Row</th><th>Timestamp</th><th>Name</th><th>Phone</th><th>Model</th><th>Problem</th><th>Address</th><th>Preferred</th><th>Status</th><th>Notes</th><th>Actions</th>');
    html.push('</tr></thead><tbody>');

    for (let i=0;i<rows.length;i++) {
      const r = rows[i];
      const rowNum = i+2; // sheet row index
      const status = (r[7] || 'planned').toString();
      if (statusFilter && status.toLowerCase() !== statusFilter) continue;
      html.push('<tr>');
      html.push('<td>' + rowNum + '</td>');
      html.push('<td>' + (r[0] ? new Date(r[0]).toString() : '') + '</td>');
      html.push('<td>' + escapeHtml(r[1]) + '</td>');
      html.push('<td>' + escapeHtml(r[2]) + '</td>');
      html.push('<td>' + escapeHtml(r[3]) + '</td>');
      html.push('<td>' + escapeHtml(r[4]) + '</td>');
      html.push('<td>' + escapeHtml(r[5]) + '</td>');
      html.push('<td>' + escapeHtml(r[6]) + '</td>');
      html.push('<td>' + escapeHtml(status) + '</td>');
      html.push('<td>' + escapeHtml(r[8]) + '</td>');
      // action form to update status/notes
      html.push('<td>');
      html.push('<form method="post" style="display:inline">');
      html.push('<input type="hidden" name="action" value="update">');
      html.push('<input type="hidden" name="row" value="' + rowNum + '">');
      // Pre-select current status
      html.push('<select name="status">');
      ['planned', 'in-progress', 'completed'].forEach(s => {
        html.push('<option value="' + s + '"' + (status === s ? ' selected' : '') + '>' + s + '</option>');
      });
      html.push('</select>');
      html.push('<input type="text" name="notes" placeholder="notes" value="' + escapeHtml(r[8]) + '" style="width:120px;margin-left:6px">');
      html.push('<button type="submit">Save</button>');
      html.push('</form>');
      // whatsapp link
      const phone = r[2] ? String(r[2]).replace(/[^+0-9]/g,'') : '';
      if (phone) html.push('<a target="_blank" style="margin-left:8px" href="https://wa.me/' + encodeURIComponent(phone) + '?text=' + encodeURIComponent('Regarding service request row '+rowNum) + '">WhatsApp</a>');
      html.push('</td>');

      html.push('</tr>');
    }

    html.push('</tbody></table>');
    html.push('</body></html>');

    return HtmlService.createHtmlOutput(html.join(''));
  } catch (err) {
    logError(err);
    return jsonResponse({ success: false, error: err.message, stack: (err.stack||'') });
  }
}

function escapeHtml(s) { if (s === null || s === undefined) return ''; return String(s).replace(/[&<>\"]/g, function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }

function updateRequest(body) {
  try {
    const row = parseInt(body.row, 10);
    const status = body.status || '';
    const notes = body.notes || '';
    const sh = getSheet();
    if (isNaN(row) || row < 2) throw new Error('Invalid row');
    sh.getRange(row, 8).setValue(status); // column H = Status
    sh.getRange(row, 9).setValue(notes);
    return jsonResponse({ success: true, row: row });
  } catch (err) {
    logError(err);
    return jsonResponse({ success: false, error: err.message, stack: (err.stack || '') });
  }
}

function doPost(e) {
  var params = e.parameter || {};
  var action = params.action || '';
  if (action === 'add') {
    return addRequest(params);
  }
  // ...existing code for other actions...
  return ContentService.createTextOutput('Unsupported action');
}

// Helpers
function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function logError(err) {
  try { Logger.log('ERROR: ' + err.message + '\n' + (err.stack || '')); } catch(e) {}
}
