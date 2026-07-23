"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Globe } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling half the viewport height
      if (window.scrollY > window.innerHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "About", href: "#" },
    { name: "Products", href: "#" },
    { name: "Contact", href: "#" },
    { name: "News", href: "#" },
  ];

  return (
    <header className={`w-full fixed p-2 top-0 left-0 z-50 shadow-sm bg-white transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="py-2">
        <div className="custom-container">
          <div className="flex items-center justify-between">
            {/* Logo Area */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="#">
                <img src="/moto/badenex/logo.png" alt="Explorlube Logo" className="header-logo object-contain" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-6 xl:gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`header-link oswald-font transition-colors whitespace-nowrap font-medium border-b-2 ${link.active
                    ? "text-[#034EA2] border-[#034EA2]"
                    : "text-[#4B5563] border-transparent hover:text-[#034EA2] hover:border-[#034EA2]"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Contact & Language */}
            <div className="hidden xl:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <img src="/moto/badenex/h-phone.png" alt="Phone" className="w-4 h-4 min-[2560px]:w-6 min-[2560px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8" />
                <span className="header-link font-semibold oswald-font text-[#4B5563]">+4978147443134</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:opacity-80">
                <img src="/moto/badenex/h-A.png" alt="Language" className="w-5 h-5 min-[2560px]:w-7 min-[2560px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9" />
                <span className="header-link font-semibold oswald-font text-[#4B5563]">EN</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className=" xl:hidden flex items-center gap-4">
              <button
                className="text-black focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X size={32} strokeWidth={2} />
                ) : (
                  <Menu size={32} strokeWidth={2} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col z-50 border-t border-gray-100">
          <nav className="flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block border-b border-gray-100 last:border-0 transition-colors hover:bg-gray-50"
              >
                <div className="custom-container py-4">
                  <span className={`header-link ${link.active
                    ? "text-[#00529B] font-medium"
                    : "text-black hover:text-[#00529B] font-medium"
                    }`}>
                    {link.name}
                  </span>
                </div>
              </Link>
            ))}
            <div className="custom-container py-6 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#00529B]" />
                <span className="font-semibold text-gray-800 text-sm">+4978147443134</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#00529B]" />
                <span className="font-semibold text-gray-800 text-sm">EN</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
