// app/receipts/[reference]/page.tsx
import { sanityServer } from "@/sanity/lib/serverClient";
import { notFound } from "next/navigation";
import ReceiptPolling from "./ReceiptPolling";
import Logo from "../../assets/tsu_logo1.png";
import Image from "next/image";
import PrintButton from "./PrintButton";

type Props = { params: Promise<{ reference: string }> };

export default async function ReceiptPage({ params }: Props) {
  // Unwrap async params in Next 15+
  const { reference } = await params;

  if (!reference) notFound();

  // Fetch payment server-side
  const payment = await sanityServer.fetch(
    `*[_type == "transcriptPayment" && _id == $ref][0]{
      _id, fullName, matricNumber, email, phone,
      programme, yearOfGraduation, destinationInstitution,
      extraCharge, amount, status, paidAt
    }`,
    { ref: String(reference) }
  );

  if (!payment) notFound();

  return (
    <div className="max-w-3xl mx-auto p-6 print:p-0 md:mt-10">
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 print:border-0 print:shadow-none">
        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <Image src={Logo} alt="TSU Logo" width={100} height={100} />
          <h1 className="text-2xl font-bold text-[#0055A4] mt-2 text-center">
            Taraba State University
          </h1>
          <p className="text-sm text-gray-600 text-center">
            Postgraduate Transcript Payment Receipt
          </p>
        </div>

        {/* Print Button */}
        <div className="mb-4 text-center print:hidden">
       <PrintButton />
        </div>

        {/* Payment Details */}
        <div className="grid grid-cols-1 gap-4 mb-6">
          {[
            ["Full Name", payment.fullName],
            ["Matric Number", payment.matricNumber],
            ["Email", payment.email],
            ["Phone Number", payment.phone],
            ["Programme", payment.programme],
            ["Year of Graduation", payment.yearOfGraduation],
            ["Destination Institution", payment.destinationInstitution],
            // ["Extra Charge (NGN)", `₦${payment.extraCharge?.toLocaleString() || 0}`],
            ["Amount Paid (NGN)", `₦${payment.amount.toLocaleString()}`],
            ["Transaction Reference", payment._id],
            ["Payment Status", payment.status],
            ["Payment Date", payment.paidAt ? new Date(payment.paidAt).toLocaleString() : "Pending"],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between border p-2 rounded">
              <span className="font-semibold">{label}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>

        {/* Payment Pending Polling */}
        {payment.status !== "paid" && (
          <ReceiptPolling reference={payment._id} currentStatus={payment.status} />
        )}
      </div>
    </div>
  );
}
