"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling half the viewport height (half of banner video)
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
    { name: "Home", href: "#" },
    { name: "Company", href: "#" },
    { name: "Quality", href: "#" },
    { name: "Products", href: "#" },
    { name: "Private Label", href: "#" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 shadow-md bg-white border-b-2 border-[#0D99FF] transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Top Bar */}
      <div className="bg-[#363636] text-white py-2 hidden md:block">
        <div className="custom-container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-white" />
              <span className="oswald header-sublink font-normal">+49 421 22 300 – 90</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-white" />
              <span className="oswald header-sublink font-normal">info@leprinxol.de</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src="/moto/leprinxol/flag-uk.png" alt="English" className="h-[14px] w-auto" />
            <span className="oswald header-sublink font-normal">EN</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="py-3">
        <div className="custom-container">
          <div className="flex items-center justify-between">
            {/* Logo Area */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="#">
                <img src="/moto/leprinxol/logo.png" alt="Leprinxol Logo" className="w-[140px] md:w-[150px] h-auto object-contain" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-6 xl:gap-8 oswald-font">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="header-link transition-colors py-2 whitespace-nowrap oswald text-[#333333] hover:text-[#004F9F] font-normal"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Get In Touch Button */}
            <div className="oswald hidden xl:flex items-center">
              <Link
                href="#"
                className="inline-flex items-center justify-center font-normal transition-all duration-300 oswald-font px-8 py-2.5 btn-text rounded-md bg-[#004F9F] text-white hover:bg-[#003d7a] shadow-[3px_4px_8px_rgba(0,0,0,0.35)]"
              >
                GET IN TOUCH
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="oswald xl:hidden flex items-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center justify-center font-normal transition-all duration-300 oswald-font px-6 py-2 btn-text rounded-md bg-[#004F9F] text-white hover:bg-[#003d7a] shadow-[3px_4px_8px_rgba(0,0,0,0.35)]"
              >
                GET IN TOUCH
              </Link>
              <button
                className="text-[#004F9F] focus:outline-none"
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
          <nav className="flex flex-col py-2 oswald-font">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-6 py-4 border-b border-gray-100 last:border-0 text-[#333333] hover:text-[#004F9F] font-semibold oswald"
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Contact & Language Info (Hidden on iPad/Desktop since Top Bar handles it) */}
            <div className="md:hidden bg-[#363636] text-white px-6 py-5 flex flex-col gap-4 mt-2">
              <div className="flex items-center justify-between pb-4 border-b border-white/20">
                <span className="oswald font-semibold header-sublink">Language:</span>
                <div className="flex items-center gap-2">
                  <img src="/moto/leprinxol/flag-uk.png" alt="English" className="h-4 w-auto" />
                  <span className="oswald header-sublink font-normal">EN</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-white" />
                  <span className="oswald header-sublink font-normal">+49 421 22 300 – 90</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-white" />
                  <span className="oswald header-sublink font-normal">info@leprinxol.de</span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
