import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { client } from "@/sanity/lib/client";
import nodemailer from "nodemailer";

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY!;
const FROM_EMAIL = process.env.FROM_EMAIL!;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD!; // app password if Gmail

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { reference } = req.body;

  try {
    // 1. Verify payment with Paystack
    const verifyRes = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: { Authorization: `Bearer ${PAYSTACK_SECRET_KEY}` },
    });

    const paymentData = verifyRes.data.data;

    if (!paymentData.status || paymentData.status !== "success") {
      return res.status(400).json({ error: "Payment not successful" });
    }

    // 2. Update Sanity record
    await client.patch(reference)
      .set({
        status: "success",
        paidAt: new Date().toISOString(),
      })
      .commit();

    // 3. Send receipt email via Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // or any SMTP
      auth: {
        user: FROM_EMAIL,
        pass: EMAIL_PASSWORD,
      },
    });

  const emailHtml = `
<div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
  <!-- Header with TSU Logo -->
  <div style="text-align: center; margin-bottom: 20px;">
    <img src="https://your-domain.com/tsu-logo.png" alt="TSU Logo" style="width: 120px; margin-bottom: 10px;" />
    <h2 style="margin: 0; color: #0055A4;">Taraba State University</h2>
    <p style="margin: 4px 0 0 0; font-size: 14px; color: #555;">Postgraduate Transcript Payment Receipt</p>
  </div>

  <!-- Payment Details Table -->
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
    <tbody>
      <tr>
        <td style="padding: 8px; font-weight: bold; border: 1px solid #ddd;">Full Name</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${paymentData.customer.name}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold; border: 1px solid #ddd;">Email</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${paymentData.customer.email}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold; border: 1px solid #ddd;">Phone Number</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${paymentData.customer.phone}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold; border: 1px solid #ddd;">Programme</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${paymentData.metadata.programme || "-"}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold; border: 1px solid #ddd;">Year of Graduation</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${paymentData.metadata.yearOfGraduation || "-"}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold; border: 1px solid #ddd;">Destination Institution</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${paymentData.metadata.destinationInstitution || "-"}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold; border: 1px solid #ddd;">Amount Paid</td>
        <td style="padding: 8px; border: 1px solid #ddd;">₦${(paymentData.amount / 100).toLocaleString()}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold; border: 1px solid #ddd;">Transaction Reference</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${paymentData.reference}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold; border: 1px solid #ddd;">Payment Date</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${new Date(paymentData.paidAt).toLocaleString()}</td>
      </tr>
    </tbody>
  </table>

  <!-- Footer -->
  <p style="font-size: 12px; color: #555; text-align: center;">
    This is an official receipt for your transcript payment at Taraba State University. <br/>
    Keep this email for your records.
  </p>
</div>
`;


    await transporter.sendMail({
      from: FROM_EMAIL,
      to: paymentData.customer.email,
      subject: `TSU Transcript Payment Receipt - ${paymentData.reference}`,
      html: emailHtml,
    });

    res.status(200).json({ message: "Payment verified and receipt sent" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Verification failed" });
  }
}
