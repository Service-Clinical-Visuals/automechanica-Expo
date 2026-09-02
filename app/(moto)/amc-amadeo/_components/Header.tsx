"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "./Button";

const links = [
  { name: "Home", href: "#", active: true },
  { name: "About", href: "#", active: false },
  { name: "Manufacturing", href: "#", active: false },
  { name: "Aftermarket", href: "#", active: false },
  { name: "3D Modelling", href: "#", active: false },
  { name: "News", href: "#", active: false },
  { name: "Contact", href: "#", active: false },
];

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

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
       <header className={`w-full fixed top-0 left-0 z-50 transition-transform duration-500 py-4 bg-white shadow-md ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="custom-container flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex-shrink-0">
          <img 
            src="/moto/amc-amadeo/logo.png" 
            alt="AMC Logo" 
            className="w-[70px] sm:w-[90px] xl:w-[100px] h-auto object-contain" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`header-link oswald transition-colors ${
                link.active 
                  ? "text-primary font-medium" 
                  : "text-primary-3 font-normal hover:font-medium hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Section (Language Button + Mobile Menu Toggle) */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Languages Button */}
          <Button className="flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-6 md:py-2.5">
            <img src="/moto/amc-amadeo/glob.png" alt="Globe" className="w-6 h-6 object-contain brightness-0 invert" />
            <span className="oswald btn-text font-medium">Languages</span>
            <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
          </Button>

          {/* Mobile Menu Button */}
          <button 
            className="xl:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 py-4 px-6 flex flex-col gap-4">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`header-link oswald transition-colors ${
                link.active 
                  ? "text-primary font-medium" 
                  : "text-primary-3 font-normal hover:font-medium hover:text-primary"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
