"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "./Button";
import Typography from "./Typography";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
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
    { name: "Products", href: "#" },
    { name: "Know How", href: "#" },
    { name: "What's New", href: "#" },
    { name: "Markets", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <>

      <header
        className={`w-full fixed top-0 left-0 z-[100] transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white"}`}
      >
        <div className="flex flex-col  w-full">
          {/* Top Bar Layer */}
          <div className={`w-full bg-[#34414C] text-white flex justify-end items-center px-4 md:px-8 transition-all duration-300 overflow-hidden ${isScrolled ? "h-0 opacity-0" : "h-10 opacity-100"}`}>
            <div className="flex items-center gap-6 text-[13px] md:text-lg  3xl:text-xl font-primary">
              <Link href="#" className="hover:text-primary transition-colors">Catalog</Link>
              <Link href="#" className="hover:text-primary transition-colors">Client Area</Link>
              <Link href="#" className="hover:text-primary transition-colors">Careers</Link>
              <div className="flex items-center gap-2 border-l border-white/20 pl-4 cursor-pointer hover:text-primary transition-colors">
                <Typography className="text-base leading-none">🇬🇧</Typography>
                <Typography variant="h5" color="white" font="oxanium">EN</Typography>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
              </div>
            </div>
          </div>

          {/* Content Layer */}
          <div className="relative custom-container z-10 flex items-center justify-between w-full px-4 md:px-8 max-w-[1920px] mx-auto py-3 lg:py-4">
            {/* Logo Area */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="#">
                <img src="/moto/veneporte/logo.png" alt="Veneporte Logo" className="h-10 lg:h-12 w-auto max-w-[220px] lg:max-w-[200px] object-contain" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 mx-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`navbar transition-colors whitespace-nowrap ${link.active
                    ? "text-primary"
                    : "text-[#5D5D5D] hover:text-primary"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Search Box */}
            <div className="hidden xl:flex items-center">
              <div className="relative border border-gray-300 rounded overflow-hidden flex items-center bg-white px-3 py-1.5 min-w-[240px]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                <input type="text" placeholder="Search Something" className="outline-none pl-3 text-sm w-full text-gray-700 placeholder-gray-400 font-secondary" />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center">
              <button
                className="text-primary focus:outline-none p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className={`xl:hidden absolute left-0 right-0 bg-white shadow-2xl border-t border-gray-100 flex flex-col z-50 overflow-hidden transition-all duration-300 top-full`}>
            <div className="p-4 bg-gray-50 border-b border-gray-100">
              <div className="relative border border-gray-300 rounded overflow-hidden flex items-center bg-white px-3 py-2 w-full">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                <input type="text" placeholder="Search Something" className="outline-none pl-3 text-sm w-full text-gray-700 placeholder-gray-400 font-secondary" />
              </div>
            </div>
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-6 py-4 navbar border-b border-gray-50 ${link.active
                    ? "text-primary bg-gray-50/50"
                    : "text-secondary hover:bg-gray-50"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
