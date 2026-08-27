"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "./Button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#", active: true },
    { name: "Brands", href: "#" },
    { name: "Products", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Support", href: "#" },
    { name: "News", href: "#" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-[100] transition-all duration-500 ${isScrolled ? "pt-0" : "pt-2 lg:pt-4"
        }`}
    >
      <div className="relative flex justify-center w-full">

        {/* Background Layer */}
        <div className="absolute inset-0 flex justify-center pointer-events-none z-0">
          <div className={`bg-white transition-all duration-500 border border-gray-100/50 h-full ${isScrolled ? "w-full rounded-none shadow-md" : "w-[96%] lg:w-[94%] rounded-full shadow-lg"
            }`}></div>
        </div>

        {/* Content Layer */}
        <div className={`relative z-10 flex items-center justify-between transition-all duration-500 w-full custom-container ${isScrolled ? "py-3" : "py-3 lg:py-4"
          }`}>
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center lg:pl-6">
            <Link href="#">
              <img src="/moto/metelli-group/footer-logo.png" alt="Metelli Group Logo" className="h-10 lg:h-12 w-auto max-w-[220px] lg:max-w-[200px] object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`navbar transition-colors py-2 border-b-2  whitespace-nowrap ${link.active
                  ? "text-primary border-primary text-primary font-normal"
                  : "text-[#5D5D5D] hover:text-primary border-transparent hover:text-primary"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden xl:flex items-center xl:pr-2">
            <Button text="Get In Touch" variant="primary" href="#" className="scale-90 2xl:scale-100 origin-right" />
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center pr-4">
            <button
              className="text-primary focus:outline-none p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className={`xl:hidden absolute left-4 right-4 bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col z-50 overflow-hidden transition-all duration-300 ${isScrolled ? "top-[70px]" : "top-[90px]"}`}>
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-6 py-4 navbar border-b border-gray-50 ${link.active
                  ? "text-primary bg-gray-50/50"
                  : "text-[#4A4A4A] hover:bg-gray-50"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="p-6">
              <div className="flex justify-center">
                <Button text="Get In Touch" variant="primary" href="#" />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
