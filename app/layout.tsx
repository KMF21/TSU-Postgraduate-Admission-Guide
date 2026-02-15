import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { AnalyticsProvider } from "./components/AnalyticsProvider";
import { Footer } from "./components/footer";

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
  authors: [{ name: "TSU Postgraduate Admissions Guide" }],
  creator: "TSU Postgraduate Admissions Guide",
  publisher: "TSU Postgraduate Admissions Guide",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "TSU Postgraduate Admissions Guide | 2025/2026",
    description:
      "Verified postgraduate admission information for Taraba State University. Find PGD, MSc, and PhD programmes, requirements, and official application guidance.",
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

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {GA_ID && (
          <>
            {/* Google Analytics */}
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${inter.variable} ${merriweather.variable} font-body bg-[#FAF9F6] text-[#333333]`}
      >
        <AnalyticsProvider />
        <Navbar />
        {children}
         <Footer />
      </body>
    </html>
  );
}
