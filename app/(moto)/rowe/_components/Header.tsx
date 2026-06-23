"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, ShoppingBag, Globe, Phone, Mail } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "Distributors", href: "#", hasDropdown: true },
    { name: "Private Customers", href: "#", hasDropdown: true },
    { name: "Workshops", href: "#", hasDropdown: true },
    { name: "Industry", href: "#", hasDropdown: true },
    { name: "About ROWE", href: "#", hasDropdown: true },
    { name: "Sustainability", href: "#", hasDropdown: false },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-[100] transition-all duration-300 bg-white shadow-sm`}>
      {/* Top Red Bar */}
      <div className="w-full bg-[#e61919] text-white py-2 hidden md:block">
        <div className="custom-container flex justify-between items-center text-[13px] font-medium">
          <div className="flex items-center gap-6">
            <a href="tel:+49624159060" className="flex items-center gap-2 hover:opacity-80">
               <img src="/moto/rowe/phone.png" className="w-4 h-4"></img>
              +49 6241 5906 0
            </a>
            <a href="mailto:info@rowe-oil.com" className="flex items-center gap-2 hover:opacity-80">
               <img src="/moto/rowe/mail.png" className="w-4 h-4"></img>
              info@rowe-oil.com
            </a>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:opacity-80">Contact</Link>
            <Link href="#" className="hover:opacity-80">Distributor Locator</Link>
            <Link href="#" className="flex items-center gap-2 hover:opacity-80">
            
              <img src="/moto/rowe/mdi_oil.png"></img>
              Oil finder
            </Link>
            <div className="flex items-center gap-1 cursor-pointer hover:opacity-80 border-l border-white/30 pl-4 ml-2">
              <img src="/moto/rowe/globe.png" className="w-6 h-6"></img> <span>EN</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="custom-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo Area */}
          <div className="flex-shrink-0">
            <Link href="#">
              <img src="/moto/rowe/logo.png" alt="ROWE" className="h-8 lg:h-10 w-auto object-cover" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-2 xl:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[13px] xl:text-[15px] !font-dm-sans font-semibold transition-colors flex items-center gap-1.5 ${
                  link.active
                    ? "text-[#e61919]"
                    : "text-gray-800 hover:text-[#e61919]"
                }`}
              >
                {link.name}
                {link.hasDropdown && (
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="hidden xl:flex items-center gap-5">
            <button className="text-gray-800 hover:text-[#e61919] transition-colors">
              <ShoppingBag size={20} strokeWidth={1.5} />
            </button>
            <button className="text-gray-800 hover:text-[#e61919] transition-colors">
              <Search size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-4">
            <button className="text-gray-800">
              <Search size={20} />
            </button>
            <button 
              className="text-gray-800 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col z-50 max-h-[80vh] overflow-y-auto">
          {/* Top Bar Info for Mobile */}
          <div className="bg-gray-50 px-6 py-4 flex flex-col gap-3 text-sm text-gray-600 border-b border-gray-100">
             <a href="tel:+49624159060" className="flex items-center gap-2"><Phone size={14} /> +49 6241 5906 0</a>
             <a href="mailto:info@rowe-oil.com" className="flex items-center gap-2"><Mail size={14} /> info@rowe-oil.com</a>
          </div>
          <nav className="flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-6 py-4 text-base font-semibold border-b border-gray-50 last:border-0 flex justify-between items-center ${
                  link.active ? "text-[#e61919]" : "text-gray-800"
                }`}
              >
                {link.name}
                {link.hasDropdown && (
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
