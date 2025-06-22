async function generateCertificate() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const name = document.getElementById('studentName').value;
  const project = document.getElementById('projectTitle').value;
  const duration = document.getElementById('duration').value;
  const issueDate = document.getElementById('issueDate').value;

  doc.setFontSize(20);
  doc.text("Certificate of Internship", 70, 30);
  doc.setFontSize(12);
  doc.text(`This is to certify that`, 20, 50);
  doc.text(`${name}`, 20, 60);
  doc.text(`has successfully completed the internship on`, 20, 70);
  doc.text(`${project}`, 20, 80);
  doc.text(`Duration: ${duration}`, 20, 90);
  doc.text(`Issued on: ${issueDate}`, 20, 100);
  doc.text("StrongWill Team", 20, 120);
  doc.save("certificate.pdf");
}
