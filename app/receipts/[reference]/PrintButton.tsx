// app/receipts/[reference]/PrintButton.tsx
"use client";

export default function PrintButton() {
  return (
    <div className="mb-4 text-center print:hidden">
      <button
        onClick={() => window.print()}
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
      >
        Print Receipt
      </button>
    </div>
  );
}
