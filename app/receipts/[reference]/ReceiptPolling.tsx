"use client";

import { useEffect, useState } from "react";


type Props = {
  reference: string;
  currentStatus: string;
};

export default function ReceiptPolling({ reference, currentStatus }: Props) {
  const [status, setStatus] = useState(currentStatus);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        // Call your API route that returns payment status
        const res = await fetch(`/api/payments/${reference}`);
        if (!res.ok) throw new Error("Failed to fetch payment");

        const data = await res.json();

        if (data.status && data.status !== status) {
          setStatus(data.status);
        }
      } catch (err) {
        console.error("Error fetching payment status:", err);
      }
    }, 5000); // poll every 5 seconds

    return () => clearInterval(interval);
  }, [reference, status]);

  return (
    <p className={`mt-4 font-semibold ${status === "paid" ? "text-green-600" : "text-yellow-600"}`}>
      {status === "paid"
        ? "Payment completed successfully!"
        : `Payment is pending. Current status: ${status}`}
    </p>
  );
}
