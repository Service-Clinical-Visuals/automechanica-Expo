"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
    { name: "About", href: "#" },
    { name: "Products", href: "#" },
    { name: "News", href: "#" },
    { name: "Contacts", href: "#" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 bg-[#111111] shadow-sm transition-transform duration-500 ${
        isVisible ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between gap-6 h-[80px] py-2">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img src="/moto/zeta-erre/logo.png" alt="Zeta-Erre" className="h-9 w-auto object-contain self-center" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex navlink items-center gap-7 2xl:gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`whitespace-nowrap transition-opacity hover:text-white! ${
                  link.active ? "text-white! font-semibold!" : "text-white/70!"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA button - Desktop */}
          <div className="hidden xl:flex items-center shrink-0">
            <Link
              href="#"
              className="navlink text-[#111111]! font-medium! bg-primary hover:bg-[#e0961c] px-6 py-1.5 transition-colors whitespace-nowrap"
            >
              Request Quote
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
        <div className={`xl:hidden ${isVisible ? "-translate-y-full" : "translate-y-0"} absolute top-full left-0 w-full bg-[#1A1A1A] shadow-lg flex flex-col z-50 border-t border-white/10 max-h-[80vh] overflow-y-auto`}>
          <nav className="flex flex-col py-2 navlink">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-6 py-3 text-[15px] border-b border-white/10 last:border-0 ${
                  link.active ? "text-white! font-bold!" : "text-white/70!"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="px-6 pb-4 pt-2 xl:hidden flex items-center gap-6">
            <Link
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="navlink text-[#111111]! font-medium! bg-primary hover:bg-[#e0961c] px-6 py-1.5 transition-colors whitespace-nowrap"
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
