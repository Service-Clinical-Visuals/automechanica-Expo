"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "Products", href: "#products", active: false },
    { name: "Catalogue", href: "#catalogue", active: false },
    { name: "Blog", href: "#blog", active: false },
    { name: "Contact Us", href: "#contact", active: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[var(--color-primary)] shadow-md transition-all duration-300">
      <div className="custom-container flex items-center justify-between py-3.5 sm:py-4 xl:py-6">
        {/* CTR Logo */}
        <Link href="#" className="flex-shrink-0 inline-flex items-center select-none h-7 sm:h-9 md:h-10 w-auto">
          <img
            src="/moto/ctr/ctr-logo.png"
            alt="CTR Logo"
            className="h-full w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-base transition-colors font-primary duration-200 ${
                link.active
                  ? "text-white font-bold"
                  : "text-white/95 font-medium hover:text-white hover:opacity-85"
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
              className="w-48 xl:w-56 pl-4 pr-10 py-1.5 rounded-lg border border-white bg-transparent text-white placeholder:text-white/90 text-sm focus:outline-none focus:ring-1 focus:ring-white transition-all font-secondary"
            />
            <button
              type="button"
              className="absolute right-3 text-white hover:opacity-80 transition-opacity"
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
            className="p-2 text-white hover:opacity-80 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[var(--color-primary)] border-t border-white/20 px-6 py-6 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {/* Mobile Search */}
          <div className="relative flex items-center w-full mb-2">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2 rounded-lg border border-white bg-transparent text-white placeholder:text-white/90 text-sm focus:outline-none focus:ring-1 focus:ring-white"
            />
            <button type="button" className="absolute right-3 text-white">
              <Search className="w-4 h-4" />
            </button>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-2 text-base font-primary border-b border-white/10 last:border-0 ${
                link.active ? "text-white font-bold" : "text-white/90 font-medium"
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
