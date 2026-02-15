// app/receipts/[reference]/layout.tsx
import { Navbar } from "@/app/components/Navbar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ReceiptLayout({ children }: Props) {
  return (
    <html lang="en">
     
      <body className="bg-gray-100">
        {children}
      </body>
    </html>
  );
}
