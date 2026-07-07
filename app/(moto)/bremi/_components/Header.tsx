"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import HexagonButton from "./HexagonButton";

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
    { name: "Products", href: "#" },
    { name: "Online Catalog", href: "#" },
    { name: "Contact", href: "#" },
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
          <div className={`bg-black transition-all duration-500 border border-gray-800 h-full ${
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
               <img src="/moto/bremi/logo1.png" alt="Bremi Logo" className="h-8 lg:h-12 w-auto object-contain" />
             </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`header-link transition-colors whitespace-nowrap tracking-wide  ${
                  link.active
                    ? "text-[#E72E39] font-bold underline-offset-4 underline underline-[#E72E39]"
                    : "text-white hover:text-[#E72E39] font-medium hover:underline-offset-4 hover:underline hover-[#E72E39] hover:font-bold"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden xl:flex items-center">
            <HexagonButton type="search" className="w-[120px] xl:w-[150px]" />
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
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className={`xl:hidden absolute left-4 right-4 bg-black rounded-xl shadow-2xl border border-gray-800 flex flex-col z-50 overflow-hidden transition-all duration-300 ${isScrolled ? "top-[70px]" : "top-[90px]"}`}>
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-6 py-4 header-link  border-b border-gray-800 ${link.active
                    ? "text-[#E72E39] font-bold underline-offset-4 underline underline-[#E72E39]"
                    : "text-white hover:text-[#E72E39] font-medium hover:underline-offset-4 hover:underline hover-[#E72E39] hover:font-bold"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="p-6 ">
              <HexagonButton type="search" containerClassName="w-full" className="w-full text-[#ffffff]/52 header-link" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
