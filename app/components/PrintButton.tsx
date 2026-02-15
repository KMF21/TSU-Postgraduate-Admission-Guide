// app/components/PrintButton.tsx
"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="px-6 py-2 bg-[#0055A4] text-white rounded shadow hover:bg-blue-700"
    >
      Print Receipt
    </button>
  );
}
