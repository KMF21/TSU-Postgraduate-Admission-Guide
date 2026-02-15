import { sanityServer } from "@/sanity/lib/serverClient";
import { notFound } from "next/navigation";
import Image from "next/image";
import PrintButton from "@/app/components/PrintButton";

type Props = {
  params: Promise<{ reference: string }>;
};

async function getPayment(reference: string) {
  return await sanityServer.fetch(
    `*[_type == "transcriptPayment" && _id == $ref][0]{
      _id,
      fullName,
      email,
      phone,
      programme,
      yearOfGraduation,
      destinationInstitution,
      amount,
      extraCharge,
      status,
      paidAt
    }`,
    { ref: reference }
  );
}

export default async function ReceiptPage({ params }: Props) {

  // ⚠️ VERY IMPORTANT LINE
  const { reference } = await params;

  const payment = await getPayment(reference);

  if (!payment) notFound();

  // Wait for webhook
  if (payment.status !== "paid") {
    return (
      <div className="max-w-xl mx-auto p-10 text-center">
        <h1 className="text-2xl font-bold text-yellow-600">
          Payment Processing
        </h1>
        <p className="mt-3 text-gray-600">
          Your payment is being confirmed by Paystack.
          This usually takes 10–30 seconds.
          Please do not close this page.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 print:p-0">
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 print:border-0 print:shadow-none">

        <div className="flex flex-col items-center mb-6">
          <Image
            src="/tsu-logo.png"
            alt="TSU Logo"
            width={100}
            height={100}
            className="mb-2"
          />

          <h1 className="text-2xl font-bold text-[#0055A4] text-center">
            Taraba State University
          </h1>

          <p className="text-sm text-gray-600 text-center">
            Postgraduate Transcript Payment Receipt
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-6">
          {[
            ["Full Name", payment.fullName],
            ["Email", payment.email],
            ["Phone Number", payment.phone],
            ["Programme", payment.programme],
            ["Year of Graduation", payment.yearOfGraduation],
            ["Destination Institution", payment.destinationInstitution],
            ["Amount Paid", `₦${Number(payment.amount).toLocaleString()}`],
            ["Transaction Reference", payment._id],
            ["Payment Date", new Date(payment.paidAt).toLocaleString()],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between border p-2 rounded">
              <span className="font-semibold">{label}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm">
          This is an official receipt for your transcript payment at Taraba State University.
        </p>

    <div className="mt-6 flex justify-center print:hidden">
  <PrintButton />
</div>
      </div>
    </div>
  );
}
