"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Header appears after user starts scrolling down
      if (window.scrollY > 80) {
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
    { name: "About Us", href: "#about", active: false },
    { name: "Product", href: "#products", active: false },
    { name: "Corporate", href: "#corporate", active: false },
    { name: "News", href: "#news", active: false },
    { name: "Contact Us", href: "#contact", active: false },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full ${
        isScrolled
          ? "translate-y-0 opacity-100 bg-white/95 backdrop-blur-md shadow-md py-3.5 border-b border-gray-100"
          : "-translate-y-full opacity-0 pointer-events-none py-4"
      }`}
    >
      <div className="custom-container flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex-shrink-0 inline-flex items-center select-none h-10 md:h-12 xl:h-18 w-auto">
          <img
            src="/moto/temel/temel-logo.png"
            alt="Temel Conta Logo"
            className="h-full w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`navbar transition-colors ${
                link.active
                  ? "text-[#DD6D2D] font-semibold"
                  : "text-[#202020] hover:text-[#DD6D2D]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Search Bar on Right */}
        <div className="hidden lg:flex items-center">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-48 xl:w-56 pl-4 pr-9 py-1.5 rounded-md border border-[#DD6D2D]/40 focus:border-[#DD6D2D] focus:outline-none focus:ring-1 focus:ring-[#DD6D2D] text-[#202020] placeholder:text-gray-400 transition-all font-secondary"
            />
            <button
              type="button"
              className="absolute right-2.5 text-[#DD6D2D] hover:opacity-80 transition-opacity"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            type="button"
            className="p-2 text-[#202020] hover:text-[#DD6D2D] focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-6 shadow-xl flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {/* Mobile Search */}
          <div className="relative flex items-center w-full mb-2">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2 rounded-md border border-[#DD6D2D]/40 focus:border-[#DD6D2D] focus:outline-none text-[#202020]"
            />
            <button type="button" className="absolute right-3 text-[#DD6D2D]">
              <Search className="w-4 h-4" />
            </button>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`navbar py-2 border-b border-gray-100 last:border-0 ${
                link.active ? "text-[#DD6D2D] font-semibold" : "text-[#202020]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
