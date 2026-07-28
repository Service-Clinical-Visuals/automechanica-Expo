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
    { name: "About us", href: "#" },
    { name: "Products", href: "#" },
    { name: "Quality", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
   
    <header className={`w-full fixed top-0 left-0 z-50 bg-white transition-transform duration-500 shadow-sm ${isScrolled ? 'bg-white shadow-lg py-6' : '-translate-y-full'}`}>
      <div className="custom-container flex items-center justify-between">
        
        {/* Logo */}
        <Link href="#" className="flex-shrink-0 z-50">
          <img 
            src="/moto/mannol/log.png" 
            alt="MANNOL Logo" 
            className="h-8 md:h-8 w-auto object-contain" 
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <span className="hidden sora-font font-bold text-2xl md:text-3xl text-[#FFC107]">
            MANNOL
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8 xl:gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`poppins-font font-normal header-link transition-colors ${
                link.active ? "text-[#FCC917] font-semibold" : "text-[#000000] hover:text-[#FCC917] hover:font-semibold"
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
          className="xl:hidden text-[#121212] z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } xl:hidden flex flex-col pt-32 pb-8 overflow-y-auto`}
      >
        <div className="custom-container flex flex-col items-start gap-8 w-full">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`poppins-font font-normal header-link transition-colors text-xl md:text-2xl  ${
                  link.active ? "text-[#FCC917] font-semibold" : "text-[#000000] hover:text-[#FCC917] hover:font-semibold"
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            href="#"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4"
          >
            Request Quote
          </Button>
        </div>
      </div>
    </header>
  );
}
