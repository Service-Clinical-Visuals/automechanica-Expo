"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
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
    { name: "Home", href: "#" },
    { name: "Company", href: "#", hasDropdown: true },
    { name: "Online Catalogue", href: "#" },
    { name: "News", href: "#", hasDropdown: true },
    { name: "Downloads", href: "#", hasDropdown: true },
  ];

  return (
 
     <header className={`w-full fixed top-0 left-0 z-50 bg-white transition-transform duration-500 shadow-sm ${isScrolled ? 'bg-white shadow-lg py-4' : '-translate-y-full'}`}>
      <div className="custom-container flex items-center justify-between">
        
        {/* Logo */}
        <Link href="#" className="flex-shrink-0 z-50">
          <img 
            src="/moto/ijsgroup/logo.png" 
            alt="I.J.S. Group Logo" 
            className="h-14 md:h-18 w-auto object-contain" 
            
          />
         
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group flex items-center">
              <Link 
                href={link.href}
                className="sora-font font-normal header-link text-[#212121] hover:text-[#247EA3] transition-colors flex items-center gap-1"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={16} className="text-[#212121] group-hover:text-[#247EA3]" />}
              </Link>
            </div>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden lg:block">
          <Button href="#">
            Contact
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-gray-800 z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden flex flex-col pt-28 pb-8 overflow-y-auto`}
      >
        <div className="custom-container flex flex-col items-start gap-6 w-full px-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
             className="sora-font font-normal header-link text-[#212121] hover:text-[#247EA3] transition-colors flex items-center gap-1"
              >
              {link.name}
              {link.hasDropdown && <ChevronDown size={20} className="text-[#212121]" />}
            </Link>
          ))}
          <div className="w-full mt-6">
            <Button 
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
