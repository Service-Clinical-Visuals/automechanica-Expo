"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
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
    { name: "Contact", href: "#" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 bg-[#F1F1F1] border-border transition-transform duration-500 ${
        isVisible ? "-translate-y-full" : "translate-y-0"
      }`}
    >

      <Container>
        <div className="flex items-center justify-between gap-6 h-[80px]">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img src="/moto/zimmermann/logo.png" alt="Zimmermann" className="w-[150px] xl:w-[260px] h-auto object-contain self-center" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex navlink items-center gap-8 2xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`whitespace-nowrap transition-colors hover:text-primary ${
                  link.active ? "text-primary" : "text-[#1A1A1A]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Request Quote - Desktop */}
          <div className="hidden heading xl:flex items-center shrink-0">
            <Link
              href="#"
              className="bg-secondary hover:bg-secondary-hover text-white! text-[16px]! tracking-[0px]! leading-[24px]! uppercase px-6 py-2.5 rounded transition-colors whitespace-nowrap"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-4">
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
        <div className={`xl:hidden ${isVisible ? "-translate-y-full" : "translate-y-0"} absolute top-full left-0 w-full bg-white shadow-lg flex flex-col z-50 border-t border-gray-100 max-h-[80vh] overflow-y-auto`}>
          <nav className="flex flex-col py-2 navlink">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-6 py-3 text-[15px] uppercase font-bold border-b border-gray-100 last:border-0 ${
                  link.active ? "text-secondary" : "text-[#1A1A1A]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="px-6 pb-4 pt-2 heading xl:hidden flex">
            <Link
              href="#"
              className="bg-secondary hover:bg-secondary-hover text-white! text-[16px]! tracking-[0px]! leading-[24px]! uppercase px-6 py-2.5 rounded transition-colors whitespace-nowrap"
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
