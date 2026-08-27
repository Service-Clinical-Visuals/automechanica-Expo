"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Search, ArrowRight } from "lucide-react";
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
    { name: "Cross References", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 bg-white border-border transition-transform duration-500 ${
        isVisible ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between gap-6 py-4">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img src="/moto/eurolub/logo.png" alt="Eurolub" className="w-[120px] xl:w-[200px] h-auto object-contain self-center" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex navlink items-center gap-6 2xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`whitespace-nowrap transition-colors hover:text-secondary ${
                  link.active ? "text-secondary underline underline-offset-8 decoration-2" : "text-[#1A1A1A]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Search + Dealer portal - Desktop */}
          <div className="hidden xl:flex items-center gap-6 shrink-0">
            <div className="flex items-center gap-2 bg-[#F2F3F7] rounded-lg pl-4 pr-5 py-2.5 w-[230px] 2xl:w-[270px]">
              <Search size={16} className="text-secondary shrink-0" />
              <input
                type="text"
                placeholder="Looking for engine oils..."
                className="bg-transparent navlink outline-none text-[15px]! text-[#4B5563]! placeholder:text-[#4B5563]! w-full"
              />
            </div>

            <Link
              href="#"
              className="group flex navlink items-center text-[14px]! gap-2 text-[#4B5563]! whitespace-nowrap font-medium"
            >
              Go to the dealer portal
              <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
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

          <div className="px-6 pb-4 pt-2 flex flex-col gap-4">
           <div className="flex items-center gap-2 bg-[#F2F3F7] rounded-lg pl-4 pr-5 py-2.5 w-[230px] xl:w-[270px]">
              <Search size={16} className="text-secondary shrink-0" />
              <input
                type="text"
                placeholder="Looking for engine oils..."
                className="bg-transparent navlink outline-none text-[15px]! text-[#4B5563]! placeholder:text-[#4B5563]! w-full"
              />
            </div>

            <Link
              href="#"
              className="group flex navlink items-center text-[14px]! gap-2 text-[#4B5563]! whitespace-nowrap font-medium"
            >
              Go to the dealer portal
              <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
