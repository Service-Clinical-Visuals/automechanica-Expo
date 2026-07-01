"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/magma-brakes" },
    { name: "Catalog", href: "#" },
    { name: "Our Products", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Downloads", href: "#" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'translate-y-0 opacity-100 bg-white shadow-md' : '-translate-y-full opacity-0 pointer-events-none'}`}>
      <div className="custom-container h-[80px] md:h-[100px] flex items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/magma-brakes" className="flex items-center shrink-0" data-aos="fade-right">
          <img
            src="/moto/magma-brakes/logo.png"
            alt="Magma Brakes Logo"
            className="h-12 md:h-16 object-contain"
          />
        </Link>

        {/* Right Side: Navigation + CTA */}
        <div className="flex items-center gap-6 xl:gap-10">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" data-aos="fade-down" data-aos-delay="100">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#111111] tracking-wider font-teko navbar hover:text-[var(--color-primary)] hover:underline transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right CTA / Mobile Toggle */}
          <div className="flex items-center gap-4" data-aos="fade-left">
            <div className="hidden md:block">
              <Button text="GET IN TOUCH" showIcon={false} />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-[#111111] p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-[80px] md:top-[100px] left-0 w-full bg-white shadow-lg transition-all duration-300 origin-top ${isMobileMenuOpen ? "scale-y-100 opacity-100 visible" : "scale-y-0 opacity-0 invisible"
          }`}
      >
        <div className="flex flex-col px-6 py-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#111111] font-oswald uppercase navbar font-bold border-b border-gray-100 pb-2 hover:text-[var(--color-primary)] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 md:hidden">
            <Button text="GET IN TOUCH" showIcon={false} className="w-full" />
          </div>
        </div>
      </div>
    </header>
  );
}
