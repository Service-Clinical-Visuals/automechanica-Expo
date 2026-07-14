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
    { name: "Car parts & services", href: "#" },
    { name: "Diesel particulate filter", href: "#" },
    { name: "Catalyst", href: "#" },
    { name: "About us", href: "#" },
  ];

  return (
    <header 
      className={`w-full fixed top-0 left-0 z-[100] transition-all duration-300 ${
        isScrolled ? "pt-0" : "pt-4 xl:pt-3"
      }`}
    >
      <div 
        className={`mx-auto flex items-center justify-between bg-white transition-all duration-300 px-8 ${
          isScrolled 
            ? "w-full px-4 xl:px-25 py-3 border-b border-gray-200 shadow-sm" 
            : "custom-container border border-gray-200 shadow-sm rounded-t-3xl px-4 xl:px-20 py-3"
        }`}
        data-aos="fade-down"
      >
        
        {/* Logo Area */}
        <div className="flex-shrink-0 flex items-center">
           <Link href="#">
             <img src="/moto/ahg/logo.png" alt="AHG Logo" className="h-12 xl:h-14 w-auto object-contain" />
           </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`header-link transition-colors whitespace-nowrap tracking-wide oswald-font font-normal ${
                link.active
                  ? "text-[#00A1FF] underline underline-offset-4 decoration-2"
                  : "text-[#212121] hover:text-[#00A1FF] hover:underline underline-offset-4 decoration-2"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden xl:flex items-center gap-2">
         <Button text="Explore Products" />
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden flex items-center">
          <button 
            className="text-[#212121] focus:outline-none p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={28} strokeWidth={2} />
            ) : (
              <Menu size={28} strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col z-50">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-8 py-3 header-link oswald-font border-b border-gray-100 ${
                  link.active
                    ? "text-[#00A1FF] font-medium"
                    : "text-[#212121] hover:text-[#00A1FF] font-medium"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-8 py-6 flex gap-2">
              <Button text="Explore Products" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
