"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import Container from "./Container";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "About Us", href: "#" },
    { name: "Products", href: "#" },
    { name: "Workshops", href: "#" },
    { name: "News", href: "#" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 bg-white transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="h-1.5 bg-[#22222E]" />

      <Container>
        <div className="flex items-center justify-between gap-6 py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img src="/moto/ifa/logo.png" alt="IFA" className="w-[160px] md:w-[190px] h-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex navlink items-center gap-3 xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="whitespace-nowrap uppercase transition-colors"
                style={{ color: link.active ? "#002880" : "#1A1A1A" }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Search */}
          <div className="hidden lg:flex items-stretch gap-3">
            <input
              type="text"
              placeholder="Search product"
              className="content w-45 xl:w-64 border-1 shadow-[#0000003D] shadow-md px-4 py-2 text-sm! text-[#484848]! placeholder:text-gray-400 focus:outline-none focus:border-primary"
            />
            <button
              type="button"
              aria-label="Search"
              className="flex items-center justify-center shadow-[#0000003D] shadow-md w-11 -ml-px transition-colors hover:bg-primary hover:text-white"
            >
              <Search size={18} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              className="text-black focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X size={28} strokeWidth={2} />
              ) : (
                <Menu size={28} strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col z-50 border-t border-gray-100">
          <nav className="flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-6 py-3 text-[15px] uppercase font-bold border-b border-gray-100 last:border-0"
                style={{ color: link.active ? "#002880" : "#1A1A1A" }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-stretch px-6 pb-4">
            <input
              type="text"
              placeholder="Search product"
              className="flex-1 border border-gray-300 px-4 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
            />
            <button
              type="button"
              aria-label="Search"
              className="flex items-center justify-center w-10 border border-primary text-primary -ml-px"
            >
              <Search size={18} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
