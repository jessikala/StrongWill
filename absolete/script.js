async function generateCertificate() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: 'landscape', unit: 'pt', format: 'a4' });
  const name = document.getElementById('studentName').value;
  const project = document.getElementById('projectTitle').value;
  const duration = document.getElementById('duration').value;
  const issueDate = document.getElementById('issueDate').value;

  // Background
  doc.setFillColor(224, 231, 255);
  doc.rect(0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight(), 'F');

  // Border
  doc.setDrawColor(55, 48, 163);
  doc.setLineWidth(4);
  doc.rect(30, 30, doc.internal.pageSize.getWidth()-60, doc.internal.pageSize.getHeight()-60, 'D');

  // Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(36);
  doc.setTextColor(55, 48, 163);
  doc.text('Certificate of Internship', doc.internal.pageSize.getWidth()/2, 110, { align: 'center' });

  // Subtitle
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(18);
  doc.setTextColor(51, 65, 85);
  doc.text('This is to certify that', doc.internal.pageSize.getWidth()/2, 170, { align: 'center' });

  // Name
  doc.setFont('times', 'bolditalic');
  doc.setFontSize(28);
  doc.setTextColor(34, 197, 94);
  doc.text(name, doc.internal.pageSize.getWidth()/2, 210, { align: 'center' });

  // Body
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(18);
  doc.setTextColor(51, 65, 85);
  doc.text('has successfully completed the internship on', doc.internal.pageSize.getWidth()/2, 250, { align: 'center' });

  // Project
  doc.setFont('times', 'italic');
  doc.setFontSize(22);
  doc.setTextColor(55, 48, 163);
  doc.text(project, doc.internal.pageSize.getWidth()/2, 290, { align: 'center' });

  // Duration
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(16);
  doc.setTextColor(51, 65, 85);
  doc.text(`Duration: ${duration}`, doc.internal.pageSize.getWidth()/2, 340, { align: 'center' });

  // Issue Date
  doc.text(`Issued on: ${issueDate}`, doc.internal.pageSize.getWidth()/2, 370, { align: 'center' });

  // Signature
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(55, 48, 163);
  doc.text('StrongWill Team', doc.internal.pageSize.getWidth()-180, doc.internal.pageSize.getHeight()-80);

  // Logo (optional, if you have a base64 image, you can add it here)
  // doc.addImage('data:image/png;base64,...', 'PNG', x, y, width, height);

  doc.save("certificate.pdf");
}
