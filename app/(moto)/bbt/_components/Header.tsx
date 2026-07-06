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
      // Header becomes visible after scrolling half the viewport height (half of banner)
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
    { name: "About us", href: "#" },
    { name: "Products", href: "#" },
    { name: "Downloads", href: "#" },
    { name: "Career", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Product finder", href: "#" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 bg-[#0c3274] shadow-md transition-transform duration-500 py-3 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="custom-container">
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="#">
              <img src="/moto/bbt/logo1.png" alt="BBT Logo" className="w-[80px] md:w-[120px] h-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-4 xl:gap-6 oswald-font">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`header-link transition-colors py-2 whitespace-nowrap ${
                  link.active
                    ? "text-white underline underline-offset-4 border-white font-medium"
                    : "text-gray-200 hover:text-white font-semobold hover:underline underline-offset-4 "
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden xl:flex items-center">
            <Button href="#" variant="outline-white">
              Know More About Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-4">
             <Button href="#" variant="outline-white" >
               Know More
             </Button>
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

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-[#0c3274] shadow-lg flex flex-col z-50 border-t border-blue-800">
          <nav className="flex flex-col py-2 oswald-font">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-6 py-4 border-b border-blue-800 last:border-0 ${
                  link.active
                    ? "text-white font-bold"
                    : "text-gray-200 hover:text-white font-medium"
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
