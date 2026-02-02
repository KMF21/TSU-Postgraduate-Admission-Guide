import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    default: "TSU Postgraduate Admissions Guide | 2024/2025",
    template: "%s | TSU Postgraduate Admissions Guide",
  },
  description:
    "The TSU Postgraduate Admissions Guide is a verified, independent resource for Taraba State University postgraduate applicants. Explore PGD, MSc, and PhD programmes, admission requirements, application steps, and official 2025/2026 updates.",
  keywords: [
    "Taraba State University",
    "TSU Postgraduate",
    "TSU PG Admission",
    "TSU PGD",
    "TSU MSc",
    "TSU PhD",
    "Postgraduate Admissions Nigeria",
    "TSU 2025 2026",
    "TSU PG School",
  ],
  authors: [
    {
      name: "TSU Postgraduate Admissions Guide",
    },
  ],
  creator: "TSU Postgraduate Admissions Guide",
  publisher: "TSU Postgraduate Admissions Guide",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "TSU Postgraduate Admissions Guide | 2025/2026",
    description:
      "Verified postgraduate admission information for Taraba State University. Find PGD, MSc, and PhD programmes, requirements, and official application guidance for the 2024/2025 session.",
    type: "website",
    locale: "en_NG",
    siteName: "TSU Postgraduate Admissions Guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "TSU Postgraduate Admissions Guide | 2025/2026",
    description:
      "Your verified guide to PGD, MSc, and PhD admissions at Taraba State University for the 2025/2026 academic session.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${merriweather.variable} font-body bg-[#FAF9F6] text-[#333333]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
