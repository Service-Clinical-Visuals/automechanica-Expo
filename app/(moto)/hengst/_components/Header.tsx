"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Search, Globe, ChevronDown, ShoppingCart } from "lucide-react";
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
    { name: "Product", href: "#" },
    { name: "News", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 bg-white border-b border-gray-100 transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <Container>
        <div className="flex items-center justify-between gap-6 py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img src="/moto/hengst/logo.png" alt="Hengst Filtration" className="w-[130px] md:w-[150px] h-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden navlink lg:flex items-center gap-5 xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="border-b-1 whitespace-nowrap transition-colors"
                style={{
                  color: link.active ? "002880" : "#1A1A1A",
                  borderColor: link.active ? "002880" : "transparent",
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Search + Actions */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-3">
            <div className="flex items-stretch">
              <input
                type="text"
                placeholder="Search Product"
                className="content w-45 xl:w-64 border border-gray-300 px-4 py-2 text-sm! text-[#484848]! placeholder:text-gray-400 focus:outline-none focus:border-[#1B4B91]"
              />
              <button
                type="button"
                aria-label="Search"
                className="flex items-center justify-center w-10 text-white bg-primary transition-colors"
              >
                <Search size={18} />
              </button>
            </div>

            <button
              type="button"
              aria-label="Select language"
              className="flex items-center justify-center gap-1 w-12 h-[38px] text-white bg-primary transition-colors"
            >
              <Globe size={18} />
              <ChevronDown size={12} />
            </button>

            <Link
              href="#"
              aria-label="Cart"
              className="flex items-center bg-primary justify-center w-10 h-[38px] text-white transition-colors"
            >
              <ShoppingCart size={18} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <Link
              href="#"
              aria-label="Cart"
              className="flex items-center justify-center w-9 h-9 text-white bg-primary"
            >
              <ShoppingCart size={16} />
            </Link>
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
                className="block px-6 py-3 text-[15px] font-medium border-b border-gray-100 last:border-0"
                style={{ color: link.active ? "#002880" : "#1A1A1A" }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-stretch px-6 pb-4">
            <input
              type="text"
              placeholder="Search Product"
              className="flex-1 border border-gray-300 px-4 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
            />
            <button
              type="button"
              aria-label="Search"
              className="flex items-center justify-center w-10 text-white"
              style={{ backgroundColor: "#002880" }}
            >
              <Search size={18} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
