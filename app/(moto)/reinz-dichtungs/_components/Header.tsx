"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling half the viewport height
      if (window.scrollY > window.innerHeight / 2) {
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
    { name: "About", href: "#" },
    { name: "Products", href: "#" },
    { name: "News", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 py-3 bg-[#1a1a1a] ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
 
      <div className="custom-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#">
              <img src="/moto/reinz-dichtungs/logo.png" alt="Reinz-Dichtungs Logo" className="w-[100px] md:w-[140px] xl:w-[160px] h-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`header-link font-poppins ${link.active ? "text-white font-semibold"  : "text-gray-300 hover:text-white font-medium hover:font-semibold transition-colors"}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden xl:flex items-center">
            <Button href="#" variant="primary">
              Request Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center">
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

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-[#1a1a1a] shadow-lg border-t border-gray-800 flex flex-col z-50">
          <div className="custom-container">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                   className={`header-link font-poppins ${link.active ? "text-white font-semibold"  : "text-gray-300 hover:text-white font-medium hover:font-semibold transition-colors"}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="py-4">
                <Button href="#" variant="primary" className="w-full">
                  Request Quote
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
