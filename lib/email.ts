import nodemailer from "nodemailer";

export async function sendReceiptEmail({
  to,
  fullName,
  reference,
  programme,
  amount,
  paidAt,
  receiptUrl,
}: {
  to: string;
  fullName: string;
  reference: string;
  programme: string;
  amount: number;
  paidAt: string;
  receiptUrl: string;
}) {
  // Use Gmail SMTP for dev/testing
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const htmlContent = `
    <h2>Taraba State University – Transcript Payment Receipt</h2>
    <p><strong>Student:</strong> ${fullName}</p>
    <p><strong>Programme:</strong> ${programme}</p>
    <p><strong>Reference:</strong> ${reference}</p>
    <p><strong>Amount Paid:</strong> ₦${amount.toLocaleString()}</p>
    <p><strong>Date:</strong> ${paidAt}</p>
    <p>You can view your printable receipt <a href="${receiptUrl}">here</a>.</p>
    <p>Thank you for your payment.</p>
  `;

  await transporter.sendMail({
    from: `"TSU PG Admissions" <${process.env.EMAIL_USER}>`,
    to,
    subject: `Transcript Payment Receipt - ${reference}`,
    html: htmlContent,
  });
}
