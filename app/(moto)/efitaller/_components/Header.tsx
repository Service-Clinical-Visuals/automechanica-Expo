"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

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
    { name: "Corporate", href: "#" },
    { name: "Support & Warranty", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 shadow-sm bg-white transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="py-4">
        <div className="custom-container">
          <div className="flex items-center justify-between">
            {/* Logo Area */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="#">
                <img src="/moto/efitaller/logo.png" alt="Efitaller Logo" className="h-auto w-auto object-contain" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-10 xl:gap-14 sora-font">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`header-link transition-colors py-2 whitespace-nowrap inter ${link.active
                    ? "text-black font-bold"
                    : "text-[#404040] hover:text-black font-normal hover:font-bold"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Request Quote Button */}
            <div className=" hidden xl:flex items-center">
              <Button href="#" variant="outline" className="btn-text font-semibold">
                Equipment Advisor
              </Button>
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
          <nav className="flex flex-col py-2 inter-font">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block border-b border-gray-100 last:border-0 transition-colors hover:bg-gray-50"
              >
                <div className="custom-container py-4">
                  <span className={`header-link ${link.active
                    ? "text-black font-bold inter"
                    : "text-[#404040] hover:text-black font-normal inter"
                    }`}>
                    {link.name}
                  </span>
                </div>
              </Link>
            ))}
            <div className="custom-container py-6">
              <Button href="#" variant="outline" className="w-full flex justify-center items-center btn-text font-semibold">
                Equipment Advisor
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
