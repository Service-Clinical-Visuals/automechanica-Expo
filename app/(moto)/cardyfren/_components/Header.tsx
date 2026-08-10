"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
    { name: "Product", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
     <header className={`w-full fixed top-0 left-0 z-50 transition-transform duration-500 py-2 bg-[#111111] border-b border-gray-800 ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="custom-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/cardyfren">
              <img
                src="/moto/cardyfren/logo.png"
                alt="Cardyfren Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-12">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`header-link transition-colors ${link.active ? "text-[#28b7ff] font-bold " : "text-white hover:text-[#28b7ff] font-normal hover:font-semibold"}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-text bg-[#28b7ff] hover:bg-[#1fa1e6] text-white px-6 py-2.5 rounded transition-colors font-bold">
              Request quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#28b7ff] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute left-0 w-full bg-[#111111] border-b border-gray-800 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pt-4 pb-8 flex flex-col space-y-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block header-link transition-colors ${link.active ? "text-[#28b7ff] font-bold" : "text-white hover:text-[#28b7ff] font-normal"}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Button className="w-full btn-text bg-[#28b7ff] hover:bg-[#1fa1e6] text-white px-6 py-3 rounded transition-colors font-bold">
              Request quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
