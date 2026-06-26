"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search } from "lucide-react"; // Assuming lucide-react is installed, common in these projects

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling half the viewport height (half banner)
      if (window.scrollY > window.innerHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Check initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "About Us", href: "#" },
    { name: "Products", href: "#" },
    { name: "Academy", href: "#" },
    { name: "News", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-[100] transition-all duration-500 bg-black/90 backdrop-blur-md shadow-lg ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
      <div className="custom-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo Area */}
          <div className="flex-shrink-0">
            <img src="/moto/ardeca/logo.png" alt="Ardeca Lubricants" className="w-[140px] lg:w-[150px] xl:w-[180px] h-auto object-contain" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm md:text-[14px] xl:text-[16px] oxanium font-semibold transition-colors py-2 whitespace-nowrap ${
                  link.active
                    ? "text-[#CE0E2D]"
                    : "text-white hover:text-[#CE0E2D]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center">
            <div className="relative flex items-center bg-white p-1">
              <input 
                type="text" 
                placeholder="Search Product" 
                className="bg-transparent text-black px-3 py-1 text-sm md:text-[14px] xl:text-[15px] 4xl:text-[24px] outline-none w-[200px] xl:w-[250px] 4xl:w-[300px] chakra-petch placeholder-gray-400"
              />
              <button className="bg-[#CE0E2D] hover:bg-[#a50b24] transition-colors w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-md shrink-0">
                <Search size={16} className="text-white" strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              className="text-white focus:outline-none"
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
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 shadow-lg flex flex-col z-50 border-t border-gray-800">
          <nav className="flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-6 py-4 text-base font-semibold border-b border-gray-800 last:border-0 ${
                  link.active
                    ? "text-[#CE0E2D]"
                    : "text-white hover:text-[#CE0E2D]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-6 py-5">
              <div className="relative flex items-center w-full bg-white p-1">
                <input 
                  type="text" 
                  placeholder="Search Product" 
                  className="bg-transparent text-black px-4 py-2.5 text-base outline-none w-full chakra-petch placeholder-gray-400"
                />
                <button className="bg-[#CE0E2D] hover:bg-[#a50b24] transition-colors w-10 h-10 flex items-center justify-center rounded-md shrink-0">
                  <Search size={18} className="text-white" strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
