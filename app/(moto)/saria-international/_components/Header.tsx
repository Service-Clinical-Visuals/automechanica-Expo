"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
     const handleScroll = () => {
       // Show header after scrolling half the viewport height
       if (window.scrollY > window.innerHeight / 2) {
         setIsScrolled(true);
       } else {
         setIsScrolled(false);
       }
     };
 
     handleScroll(); // Check on initial load
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
    <header className={`w-full fixed top-0 left-0 z-50 bg-[#0F1724] transition-transform duration-500 shadow-sm ${isScrolled ? 'bg-[#0F1724] shadow-lg py-4' : '-translate-y-full'}`}>
      <div className="custom-container flex items-center justify-between">
        
        {/* Logo */}
        <Link href="#" className="flex-shrink-0 z-50">
          <img 
            src="/moto/saria-international/logo.png" 
            alt="LION Logo" 
            className="h-14 md:h-18 w-auto object-contain" 
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <span className="hidden oswald-font font-bold text-2xl md:text-3xl text-white">
            LION
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`lato-font font-normal header-link transition-colors ${
                link.active ? "text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden xl:flex items-center gap-6">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="px-4 py-1.5 rounded bg-[#E8E8E8] text-[#4B5563] focus:outline-none oswald-font w-48 header-link font-normal"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4B5563]" size={16} />
          </div>
          
          <div className="flex items-center gap-2 cursor-pointer text-white">
            <img src="/moto/saria-international/glob.png" alt="Language" className="h-8 w-8" />
            <span className="oswald-font header-link font-normal">EN</span>
            <img src="/moto/saria-international/dwnarrow.png" alt="Dropdown" className="h-2 w-3 " />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="xl:hidden text-white z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`absolute top-full left-0 w-full bg-[#0F1724] z-40 transition-all duration-300 ease-in-out shadow-lg overflow-hidden xl:hidden flex flex-col ${
          isMobileMenuOpen ? "opacity-100 visible max-h-[600px] py-6 border-t border-gray-800" : "opacity-0 invisible max-h-0 py-0 border-t-0 border-transparent"
        }`}
      >
        <div className="custom-container flex flex-col items-start gap-6 w-full">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`lato-font font-normal header-link transition-colors ${
                link.active ? "text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="relative w-full max-w-sm mt-2">
            <input 
              type="text" 
              placeholder="Search..." 
              className="px-4 py-2 rounded bg-[#E8E8E8] text-[#4B5563] focus:outline-none oswald-font w-full header-link font-normal"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          </div>

          <div className="flex items-center gap-2 cursor-pointer text-white mt-2">
            <img src="/moto/saria-international/glob.png" alt="Language" className="h-8 w-8" />
            <span className="oswald-font header-link font-normal">EN</span>
            <img src="/moto/saria-international/dwnarrow.png" alt="Dropdown" className="h-2 w-3" />
          </div>
        </div>
      </div>
    </header>
  );
}
