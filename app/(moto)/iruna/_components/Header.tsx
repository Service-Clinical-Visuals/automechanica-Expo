"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
    { name: "Our Brands", href: "#" },
    { name: "Trust & Innovation", href: "#" },
    { name: "Group", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 bg-white shadow-sm border-b border-gray-100 py-3 transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="custom-container">
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="#">
              {/* Space left for logo image as requested */}
              <img src="/moto/iruna/logo.png" alt="Iruna Logo" className="w-[140px] md:w-[160px] h-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-4 xl:gap-8 sora-font">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`header-link transition-colors py-2 whitespace-nowrap ${
                  link.active
                    ? "text-[#CF0A2C] font-semibold"
                    : "text-black hover:text-[#CF0A2C] hover:font-semibold"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden xl:flex items-center">
            <Link href="#" className="bg-[#CF0A2C] text-white px-8 py-2.5 font-semibold btn-text transition-colors hover:bg-[#b30824] oxanium">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-4">
             <Link href="#" className="bg-[#CF0A2C] text-white px-4 py-2 font-semibold btn-text transition-colors hover:bg-[#b30824] oxanium">
              Contact Us
            </Link>
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

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col z-50 border-t border-gray-100">
          <nav className="flex flex-col py-2 sora-font">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-6 py-4 font-semibold border-b border-gray-100 last:border-0 ${
                  link.active
                    ? "text-[#CF0A2C] font-semibold"
                    : "text-black hover:text-[#CF0A2C] hover:font-semibold"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
