"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

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
    { name: "About", href: "#", active: false },
    { name: "Products", href: "#", active: false },
    { name: "Blog", href: "#", active: false },
    { name: "Contact", href: "#", active: false },
  ];

  return (
  
    <header className={`w-full fixed top-0 left-0 z-50 bg-[#111111] transition-transform duration-500 shadow-sm ${isScrolled ? 'bg-[#111111] shadow-lg py-4' : '-translate-y-full'}`}>
      <div className="custom-container flex items-center justify-between">
        
        {/* Logo */}
        <Link href="#" className="flex-shrink-0 z-50">
          <img 
            src="/moto/unil-lubricants/logo.png" 
            alt="Unil Lubricants" 
            className="h-14 md:h-18 w-auto object-contain"
            
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8 2xl:gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`lato-font font-semibold header-link transition-colors ${
                link.active ? "text-[#ED3024]" : "text-white hover:text-[#ED3024]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden xl:block">
          <Button href="#" className="py-2.5 px-6">
            Visit Shop
          </Button>
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
        className={`absolute top-full left-0 w-full bg-[#111111] z-40 transition-all duration-300 ease-in-out shadow-lg overflow-hidden xl:hidden flex flex-col ${
          isMobileMenuOpen ? "opacity-100 visible max-h-[500px] py-6 border-t border-gray-800" : "opacity-0 invisible max-h-0 py-0 border-t-0 border-transparent"
        }`}
      >
        <div className="custom-container flex flex-col items-start gap-6 w-full">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`lato-font font-semibold header-link transition-colors ${
                link.active ? "text-[#ED3024]" : "text-white hover:text-[#ED3024]"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="mt-2">
            <Button href="#" className="py-2.5 px-6">
              Visit Shop
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
