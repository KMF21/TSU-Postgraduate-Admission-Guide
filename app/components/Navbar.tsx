"use client";

import { useState, useEffect } from "react";
import Image from "next/image"; // Import Next.js Image
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "../assets/tsu_logo1.png";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Leadership", href: "#leadership" },
  { label: "Programmes", href: "#academic-portfolio" },
  { label: "Application Process", href: "#application-process" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 ${
        isScrolled ? "shadow-md py-1" : "py-3"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo Section */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavClick("#hero")}
        >
          <div className="relative h-12 w-12 md:h-14 md:w-14">
            <Image
              src={Logo}
              alt="TSU Logo"
              className="object-contain transition-transform group-hover:scale-105"
              priority
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className=" text-lg md:text-xl font-bold text-[#003366]">
              TSU
            </span>
            <span className="text-[10px] md:text-xs font-semibold text-[#D4AF37] tracking-widest uppercase">
              Postgraduate
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-gray-700 hover:text-[#003366] transition-colors font-medium text-sm"
            >
              {item.label}
            </button>
          ))}

          <Button
            onClick={() =>
              window.open("https://chat.whatsapp.com/your-group-link", "_blank")
            }
            className="bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full px-6 shadow-sm"
          >
            Join WhatsApp
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#003366] p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4 px-6 py-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 hover:text-[#003366] text-lg font-medium border-b border-gray-50 pb-2"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() =>
                window.open(
                  "https://chat.whatsapp.com/D1A1DtRiFN3Fr2j7iZaRYk?mode=gi_t",
                  "_blank",
                )
              }
              className="bg-[#25D366] hover:bg-[#1ebe57] text-white w-full mt-4 py-6 text-lg"
            >
              Join WhatsApp Group
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
