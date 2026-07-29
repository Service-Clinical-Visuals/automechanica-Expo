"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Container from "./Container";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= window.innerHeight / 2);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "Company", href: "#" },
    { name: "Products", href: "#" },
    { name: "Innovation & Technology", href: "#" },
    { name: "News", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 bg-[#009879] transition-transform duration-500 ${
        isVisible ? "-translate-y-full" : "translate-y-0"
      }`}
    >

      <Container>
        <div className="flex items-center justify-between gap-6 h-[90px] py-2">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img src="/moto/midac/logo.png" alt="Midac Batteries" className="h-full w-auto object-contain self-center" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex navlink items-center gap-7 2xl:gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`whitespace-nowrap text-white! transition-opacity hover:opacity-80 ${
                  link.active ? "font-bold!" : "font-normal!"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Find Battery - Desktop */}
          <div className="hidden xl:flex items-center shrink-0">
            <Link
              href="#"
              className="group navlink inline-flex border border-1 items-center gap-2 font-semibold! text-primary! bg-white hover:bg-transparent hover:border-white hover:text-white! px-6 py-2.5 rounded-xl transition-colors whitespace-nowrap"
            >
              Find Battery
              <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-4">
            <button
              className="text-white focus:outline-none"
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
        <div className={`xl:hidden ${isVisible ? "-translate-y-full" : "translate-y-0"} absolute top-full left-0 w-full bg-white shadow-lg flex flex-col z-50 border-t border-gray-100 max-h-[80vh] overflow-y-auto`}>
          <nav className="flex flex-col py-2 navlink">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-6 py-3 text-[15px] border-b border-gray-100 last:border-0 ${
                  link.active ? "text-[#009879]! font-bold!" : "text-[#1A1A1A]!"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="px-6 pb-4 pt-2 xl:hidden flex">
            <Link
              href="#"
              className="group navlink inline-flex border border-1 items-center gap-2 font-semibold! text-white! bg-primary hover:bg-white hover:border-primary hover:text-primary! px-6 py-2.5 rounded-xl transition-colors whitespace-nowrap"
            >
              Find Battery
              <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
