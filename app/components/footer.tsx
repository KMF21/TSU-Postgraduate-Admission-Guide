// app/components/Footer.tsx

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            TSU Postgraduate Guide
          </h3>
          <p className="text-sm">
            Your verified source for postgraduate admission information at
            Taraba State University. Navigate the application process, explore
            programmes, and stay updated with official announcements.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#academic-portfolio" className="hover:text-green-600">
                Programmes
              </Link>
            </li>
            <li>
              <Link
                href="#admission-requirements"
                className="hover:text-green-600"
              >
                Admission Requirements
              </Link>
            </li>
            <li>
              <Link
                href="#application-process"
                className="hover:text-green-600"
              >
                Application Process
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-green-600">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="text-sm space-y-2">
            <li>
              Email:{" "}
              <a
                href="mailto:tsupgs@tsuniversity.edu.ng"
                className="hover:text-green-600"
              >
                tsupgs@tsuniversity.edu.ng
              </a>
            </li>
            <li>
              Address: Secretary, College of Postgraduate Studies, PMB 1167,
              Jalingo
            </li>
            <li>Phone: +234 812 635 6342</li>
          </ul>
        </div>

        {/* Social / Community */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
          <p className="text-sm mb-4">
            Join our WhatsApp admission community for updates and support.
          </p>
          <Link
            href="https://chat.whatsapp.com/your-group-link"
            target="_blank"
            className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded transition"
          >
            Join WhatsApp
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} TSU Postgraduate Admissions Guide. All
        rights reserved.
      </div>
      <div className="  text-center text-sm  text-green-600">
        <Link
          href="https://www.facebook.com/profile.php?id=61574581064359"
          target="_blank"
          className="hover:text-gray-400"
        >
          Built and Maintained by KMFenterprise
        </Link>
      </div>
    </footer>
  );
}
