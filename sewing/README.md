Service registration - setup and deployment

What this provides
- `service_registration.html` - customer-facing form. Submits JSON to a Google Apps Script web app.
- `technician_dashboard.html` - simple dashboard that lists complaints and allows updating status.
- `apps_script/Code.gs` - Google Apps Script server code to store requests in a Google Sheet and support listing/updating.

Quick setup
1. Create a new Google Sheet in your Google Drive. Name it anything (for example 'Sewing_Service_Request').
2. In the Google Sheet, go to Extensions → Apps Script. In the Apps Script project, delete any starter code and paste the contents of `apps_script/Code.gs` into `Code.gs`.
3. Save the Apps Script project.
4. In the Apps Script editor, open Project Settings (gear icon) and add a Script Property `TECH_EMAIL` with the technician's email if you want email notifications.
5. Deploy the script as a Web App: Click 'Deploy' → 'New deployment' → select 'Web app'.
   - Execute as: Me
   - Who has access: Anyone (or Anyone with the link) — note this allows the public to POST; if you need restrictions, choose a suitable option and adjust accordingly.
6. Copy the Web App URL from the deployment dialog. It will look like:
https://script.google.com/macros/s/AKfycbwKImAk3l74ee3csubh9A6d0jBuXxmsLBzaU8_ClM8i_16O37lnPLfiM06mWgbwlB5hfQ/exec
Wire the HTML pages
1. Open `service_registration.html` and `technician_dashboard.html` in this folder.
2. Replace the placeholder `REPLACE_WITH_YOUR_APPS_SCRIPT_WEBAPP_URL` with the Web App URL you copied.

Testing
- Open `service_registration.html` in a browser (you can host on GitHub Pages or open locally). Fill and submit the form. The Apps Script will append rows to the sheet and return JSON.
- Open `technician_dashboard.html` and click Refresh to list items.

Notes and security
- If you set 'Who has access' to 'Anyone', the web app can be used by anyone who knows the URL. Consider restricting access to Google accounts if appropriate.
- For WhatsApp notifications we provide a 'tap to message' link in the UI; sending automated WhatsApp messages requires third-party APIs and is not included here.
- This solution stores data in Google Sheets; if you prefer GitHub storage, you'd need a server (or GitHub Actions) and a secure token — not recommended for public client-side form submissions.

Optional improvements
- Add basic CAPTCHA to avoid spam.
- Add server-side validation and rate-limiting.
- Use Google Identity to restrict technician dashboard access.
