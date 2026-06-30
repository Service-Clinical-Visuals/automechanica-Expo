"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling half the viewport height (half banner)
      if (window.scrollY > window.innerHeight / 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Check initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "About Us", href: "#" },
    { name: "Products", href: "#" },
    { name: "Contact", href: "#" },
    { name: "News", href: "#" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-[100] transition-all duration-500 bg-white shadow-md ${isScrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
      <div className="custom-container">
        <div className="flex items-center justify-between py-4 lg:py-6">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="flex flex-col">
             <img src="/moto/bluechem/icon.png" alt="Logo"  className="object-contain" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`nav-link font-normal transition-colors py-2 whitespace-nowrap oswald  ${
                  link.active
                    ? "text-[#0E4194]"
                    : "text-black hover:text-[#0E4194]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden xl:flex items-center">
            <Link href="#contact" className="bg-[#0E4194] hover:bg-[#0a3170] text-white px-8 py-2.5 transition-colors oswald  shadow-sm btn-text">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button 
              className="text-black focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
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
                className={`block px-6 py-4 font-semibold border-b border-gray-100 last:border-0 oswald  nav-link ${
                  link.active
                    ? "text-[#0E4194]"
                    : "text-black hover:text-[#0E4194]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-6 py-5">
              <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#0E4194] hover:bg-[#0a3170] text-white px-8 py-3 w-full text-center block transition-colors oswald uppercase btn-text">
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
