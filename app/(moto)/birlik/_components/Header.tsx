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
      if (window.scrollY > 10) {
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
    { name: "About Us", href: "#" },
    { name: "Our Products", href: "#" },
    { name: "Services", href: "#" },
    { name: "Blog", href: "#" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
      
      {/* Top Bar */}
      <div className={`w-full bg-[#444444] text-white transition-all duration-300 ${isScrolled ? 'hidden' : 'block'}`}>
        <div className="custom-container flex items-center justify-between py-2">
          {/* Left: Language Selector */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="/moto/birlik/flag.png" alt="UK Flag" className="h-4 w-auto" />
            <span className="manrope-font header-link font-semibold">English</span>
            <ChevronDown size={14} />
          </div>
          
          {/* Right: Top Links */}
          <div className="flex items-center gap-6">
            <Link href="#" className="manrope-font header-link font-semibold">
              Track Order
            </Link>
            <Link href="#" className="manrope-font header-link font-semibold">
              Login
            </Link>
            <Link href="#" className="manrope-font header-link font-semibold">
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`w-full transition-all duration-300 ${isScrolled ? 'py-4' : 'py-5'}`}>
        <div className="custom-container flex items-center justify-between">
          
          {/* Logo */}
          <Link href="#" className="flex-shrink-0 z-50">
            <img 
              src="/moto/birlik/logo.png" 
              alt="Birlik Conta Logo" 
              className="h-10 md:h-12 w-auto object-contain" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-8 xl:gap-12">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`manrope-font font-semibold header-link transition-colors ${
                  link.active ? "text-[#1f5dd2]" : "text-[#212121] hover:text-[#1f5dd2]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden xl:block">
            <Button href="#">
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden text-gray-800 z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
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
              className={`manrope-font font-semibold header-link transition-colors ${
                  link.active ? "text-[#1f5dd2]" : "text-[#212121] hover:text-[#1f5dd2]"
                }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex flex-col gap-4 mt-4 w-full">
            <Link href="#" className="manrope-font font-semibold header-link">Track Order</Link>
            <Link href="#" className="manrope-font font-semibold header-link">Login</Link>
            <Link href="#" className="manrope-font font-semibold header-link">Register</Link>
            <Button 
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 w-full sm:w-auto"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
