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
    { name: "About", href: "#", active: true },
    { name: "Products", href: "#" },
    { name: "Product recommendation", href: "#" },
    { name: "Specialisations", href: "#" },
    { name: "Info & Support", href: "#" },
    { name: "Motorsport", href: "#" },
  ];

  return (
    <header 
      className={`w-full fixed top-0 left-0 z-[100] transition-all duration-300 px-5 xl:px-8 ${
        isScrolled ? "pt-0" : "pt-4 xl:pt-2 "
      }`}
    >
      <div className={`mx-auto flex items-center justify-between bg-[#0a0a0a] transition-all duration-300 ${
        isScrolled 
          ? "w-full px-4 xl:px-10 py-3 border-b border-[#ffffff]/30 shadow-2xl" 
          : "custom-container border border-[#ffffff]/30 rounded-2xl px-4 xl:px-10 py-3"
      }`}>
        
        {/* Logo Area */}
        <div className="flex-shrink-0 flex items-center">
           <Link href="#">
             <img src="/moto/kroon-oil/logo.png" alt="Kroon Oil Logo" className="h-10 xl:h-12 w-auto object-contain" />
           </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`header-link transition-colors whitespace-nowrap tracking-wide oswald-font  ${
                link.active
                  ? "text-[#FDCC0B] underline underline-offset-2 font-semibold"
                  : "text-white hover:text-[#FDCC0B] font-normal hover:underline underline-offset-2 hover:font-semibold"
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
            className="text-white focus:outline-none p-2"
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
        <div className="xl:hidden absolute top-full left-0 w-full bg-[#101010] shadow-2xl border-t border-gray-800 flex flex-col z-50">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-8  py-3 header-link oswald-font border-b border-gray-800/50 ${
                  link.active
                    ? "text-[#FFCB05] font-medium"
                    : "text-white hover:text-[#FFCB05] font-medium"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="p-6 flex gap-2">
              <Button text="Explore Products" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
