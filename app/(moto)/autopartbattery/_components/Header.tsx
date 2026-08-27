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
    { name: "About", href: "#" },
    { name: "Products", href: "#" },
    { name: "News", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
     <header className={`w-full fixed top-0 left-0 z-50 bg-[#15468E] transition-transform duration-500 shadow-sm ${isScrolled ? 'bg-[#15468E] shadow-lg py-6' : '-translate-y-full'}`}>
      <div className="custom-container flex items-center justify-between">
        
        {/* Logo */}
        <Link href="#" className="flex-shrink-0 z-50 flex items-center gap-2">
          <img 
            src="/moto/autopartbattery/logo.png" 
            alt="AutoPart BATTERY Logo" 
            className="h-10 md:h-12 w-auto object-contain" 
           
          />
     
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8 xl:gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`lato-font font-bold header-link transition-colors ${
                link.active 
                  ? "text-white  hover:text-[#E11938]" 
                  : "text-white hover:text-[#E11938] "
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden xl:block">
          <Button href="#">
            Request Quote
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="xl:hidden text-white z-50 p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-[#15468e] z-40 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } xl:hidden flex flex-col pt-28 pb-8 px-6 overflow-y-auto`}
      >
        <div className="custom-container flex flex-col items-start gap-6 w-full">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              
              className={`lato-font font-bold header-link transition-colors border-b border-white/10 w-full ${
                link.active 
                  ? "text-white  hover:text-[#E11938]" 
                  : "text-white hover:text-[#E11938] "
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-6 w-full">
            <Button 
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full justify-center"
            >
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
