"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";

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
    { name: "Products", href: "#" },
    { name: "Laboratory", href: "#" },
    { name: "Media", href: "#" },
    { name: "Support", href: "#" },
    { name: "B2B", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 bg-white shadow-sm border-b border-gray-100 py-3 transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="custom-container">
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center">
            <img src="/moto/rexoil/logo.png" alt="logo.png" className="w-[140px] md:w-[160px] h-auto object-contain" />
        
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-4 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`header-link product-card-text font-semibold transition-colors py-2 whitespace-nowrap !exo2 underline-none ${
                  link.active
                    ? "text-[#A27F41] underline underline-offset-2"
                    : "text-black hover:text-[#A27F41] hover:underline underline-offset-2"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden xl:flex items-center">
            <div className="relative flex items-center bg-white border border-[#A27F41] rounded-full overflow-hidden px-1 py-0.5">
              <input 
                type="text" 
                placeholder="Search Here..." 
                className="bg-transparent text-black px-3 py-1 niramit outline-none w-[160px] xl:w-[180px] placeholder-gray-500 header-link"
              />
              <button className="text-black hover:text-[#A27F41] transition-colors p-1.5 flex items-center justify-center shrink-0">
                <Search size={18} strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
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

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col z-50 border-t border-gray-100">
          <nav className="flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-6 py-4 header-link font-semibold border-b border-gray-100 last:border-0 !exo2 ${
                  link.active
                    ? "text-[#A27F41]"
                    : "text-black hover:text-[#A27F41]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-6 py-5">
              <div className="relative flex items-center w-full bg-white border border-[#A27F41] rounded-full overflow-hidden px-2">
                <input 
                  type="text" 
                  placeholder="Search Here..." 
                  className="bg-transparent text-black px-4 py-2 niramit outline-none w-full placeholder-gray-500 header-link"
                />
                <button className="text-black p-2 flex items-center justify-center shrink-0 hover:text-[#A27F41]">
                  <Search size={20} strokeWidth={2} />
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
