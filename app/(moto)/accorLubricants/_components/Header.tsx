"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "./Button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Transition to full width when scrolling past roughly half the banner
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
    { name: "Home", href: "#", active: true },
    { name: "News", href: "#" },
    { name: "Ranges", href: "#" },
    { name: "Documents", href: "#" },
    { name: "Accor", href: "#" },
     { name: "Contacts", href: "#" },
  ];

  return (
    <header 
      className={`w-full fixed top-0 left-0 z-[100] transition-all duration-500 ${
        isScrolled ? "pt-0" : "pt-2 lg:pt-3"
      }`}
    >
      <div className="relative flex justify-center w-full">
        
        {/* Background Layer */}
        <div className="absolute inset-0 flex justify-center pointer-events-none z-0">
          <div className={`bg-white transition-all duration-500 border border-gray-100/50 h-full ${
            isScrolled ? "w-full rounded-none shadow-md" : "w-[96%] rounded-2xl shadow-xl"
          }`}></div>
        </div>

        {/* Content Layer (calculates 90% relative to full screen w-full parent) */}
        <div className={`relative z-10 flex items-center justify-between transition-all duration-500 w-full custom-container ${
          isScrolled ? "py-3" : "py-3 lg:py-4"
        }`}>
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center">
             <Link href="#">
               <img src="/moto/accorLubricants/icon.png" alt="ACCOR Logo" className="h-8 lg:h-12 w-auto object-contain" />
             </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[16px]  text-[#1e1e1e] exo2 font-bold transition-colors py-2 border-b-2 ${
                  link.active
                    ? "font-extrabold border-black"
                    : "font-medium hover:text-black border-transparent"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Button href="#">Explore Products</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              className="text-gray-800 focus:outline-none p-2"
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
        <div className={`lg:hidden absolute left-4 right-4 bg-white rounded-xl shadow-2xl border border-gray-100 flex flex-col z-50 overflow-hidden transition-all duration-300 ${isScrolled ? "top-[70px]" : "top-[90px]"}`}>
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-6 py-4 text-base font-[family-name:var(--font-exo2)] font-bold border-b border-gray-50 ${
                  link.active
                    ? "text-[var(--color-primary)] bg-red-50"
                    : "text-gray-800 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="p-6">
              <div className="flex justify-center">
                <Button href="#">Get In touch with Us</Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
