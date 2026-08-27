"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "About", href: "#" },
    { name: "Products", href: "#" },
    { name: "Blogs", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1e1e1e] shadow-lg' : 'bg-[#1e1e1e]'} border-b-[2px] border-[#d9d9d9] ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
  
      <div className="custom-container">
        <div className="flex items-center justify-between h-[70px] lg:h-[80px]">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center h-full">
            <Link href="#">
              <img src="/moto/asimco/logo.png" alt="Asimco Logo" className="w-[120px] md:w-[140px] xl:w-[160px] h-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 xl:gap-8 h-full">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative h-full flex items-center header-link inter-font font-medium group ${link.active ? "text-white" : "text-white hover:text-primary transition-colors"}`}
              >
                <span>{link.name}</span>
                {/* Active/Hover Underline covering the white border */}
                <div 
                  className={`absolute bottom-[-2px] -left-4 -right-4 h-[3px] bg-[#cb1020] transition-opacity duration-300 ${link.active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} 
                />
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden xl:flex items-center">
            <Button href="#" variant="primary">
              Request Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center">
            <button 
              className="text-white focus:outline-none"
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

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-[#111111] shadow-lg border-t border-white/10 flex flex-col z-50">
          <div className="custom-container">
            <nav className="flex flex-col py-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                 className={`relative h-full flex items-center header-link inter-font font-medium group ${link.active ? "text-white" : "text-white hover:text-primary transition-colors"}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-white/10">
                <Button href="#" variant="primary" className="w-full">
                  Request Quote
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
