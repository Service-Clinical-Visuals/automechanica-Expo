"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Typography from "./Typography";

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
    { name: "About Us", href: "#" },
    { name: "Products", href: "#" },
    { name: "Industry", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 shadow-sm bg-[#1e1e1e] transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="py-3">
        <div className="custom-container">
          <div className="flex items-center justify-between">
            {/* Logo Area */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="#">
                <img src="/moto/proquisur-sl/logo.png" alt="Proquisur Logo" className="responsive-logo object-contain" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors py-2 whitespace-nowrap manrope ${link.active
                    ? "header-link font-bold text-[#6FB420] !text-[#6FB420]"
                    : "font-medium text-white !text-white"
                    }`}
                >
                  <Typography variant="span" color="none">{link.name}</Typography>
                </Link>
              ))}
            </nav>

            {/* Language Selector Box */}
            <div className="hidden xl:flex items-center gap-2 border border-white rounded px-3 py-1.5 cursor-pointer hover:border-[#6FB420] transition-colors">
              <span className="text-white text-sm manrope font-semibold">ENG</span>
              <img src="https://flagcdn.com/w20/gb.png" alt="UK Flag" className="w-5 h-auto rounded-sm" />
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center gap-4">
              <button
                className="text-white focus:outline-none"
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
        <div className="xl:hidden absolute top-full left-0 w-full bg-[#1e1e1e] shadow-lg flex flex-col z-50 border-t border-gray-700">
          <nav className="flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block border-b border-gray-700 last:border-0 transition-colors hover:bg-gray-800"
              >
                <div className="custom-container py-4">
                  <Typography variant="span" color="none" className={link.active
                    ? "header-link font-bold text-white !text-white manrope"
                    : "text-white text-[16px] !text-white font-medium manrope"
                  }>
                    {link.name}
                  </Typography>
                </div>
              </Link>
            ))}
            <div className="custom-container py-6">
              <div className="flex items-center gap-2 border border-white rounded px-4 py-2 cursor-pointer w-fit">
                <span className="text-white text-sm manrope font-semibold">ENG</span>
                <img src="https://flagcdn.com/w20/gb.png" alt="UK Flag" className="w-5 h-auto rounded-sm" />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
