"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

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
    { name: "Product", href: "#" },
    { name: "Our Brand", href: "#" },
    { name: "News", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className={`w-full bg-white shadow-sm fixed top-0 left-0 z-[100] transition-transform duration-500 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="custom-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link href="#">
              <img src="/moto/durandProduction/icon.png" alt="Durand Production" className="h-10 lg:h-12 xl:h-14 w-auto object-contain" />
            </Link>
            <div className="flex flex-col justify-center text-[#000814] font-semibold leading-[1.1] font-paragraph text-[15px] md:text-[17px]">
              <span>The Expert Of</span>
              <span>Automotive Fluids</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 lg:gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm md:text-md lg:text-lg xl:text-xl heading font-medium tracking-widest transition-colors  ${
                  link.active
                    ? "text-[#FF131C]"
                    : "text-[#000814] hover:text-[#FF131C]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              className="text-[#1a1a1a] focus:outline-none"
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
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col z-50">
          <nav className="flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-6 py-4 text-xl heading font-medium  border-b border-gray-50 last:border-0 ${
                  link.active
                    ? "text-[#FF131C] bg-gray-50"
                    : "text-[#000814] hover:text-[#FF131C] hover:bg-gray-50"
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
