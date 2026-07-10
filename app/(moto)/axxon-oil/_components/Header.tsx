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
    { name: "Private Label", href: "#" },
    { name: "News", href: "#" },
    { name: "Join Our Team", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Contacts", href: "#" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 bg-white shadow-sm transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <Container>
        <div className="flex h-[90px] items-center justify-between gap-6 py-4">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/">
              <img src="/moto/axon-oil/logo.png" alt="AxonOil" className="w-[130px] md:w-[150px] h-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex navlink items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`whitespace-nowrap transition-colors ${
                  link.active
                    ? "text-primary! font-bold! underline underline-offset-4 decoration-2"
                    : "hover:text-primary!"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Explore Products Button */}
          <Link
            href="#"
            className="hidden max-w-[180px] lg:flex items-center relative shrink-0 group bg-primary text-white pl-6 pr-16 py-1.5"
          >
            <span className="navlink text-white! whitespace-nowrap">Explore Products</span>
            <span className="absolute right-[-25px] top-1/2 -translate-y-1/2 w-11 h-12 shrink-0">
              <span className="absolute inset-[2px] bg-white [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
              <span className="absolute inset-[4.5px] bg-primary [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] flex items-center justify-center">
                <ArrowRight size={34} className="text-white transition-transform group-hover:translate-x-0.5" />
              </span>
            </span>
          </Link>

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
                className={`block px-6 py-3 text-[15px] font-semibold border-b border-gray-100 last:border-0 ${
                  link.active ? "text-primary! underline underline-offset-4" : "text-[#1A1A1A]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="px-6 py-4">
          <Link
            href="#"
            className="flex max-w-[180px] lg:hidden items-center relative shrink-0 group bg-primary text-white pl-6 pr-16 py-1.5"
          >
            <span className="navlink text-white! whitespace-nowrap">Explore Products</span>
            <span className="absolute right-[-25px] top-1/2 -translate-y-1/2 w-11 h-12 shrink-0">
              <span className="absolute inset-[2px] bg-white [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
              <span className="absolute inset-[4.5px] bg-primary [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] flex items-center justify-center">
                <ArrowRight size={34} className="text-white transition-transform group-hover:translate-x-0.5" />
              </span>
            </span>
          </Link>
          </div>
        </div>
      )}
    </header>
  );
}
