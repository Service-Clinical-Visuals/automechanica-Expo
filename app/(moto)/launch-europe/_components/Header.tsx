"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling half the viewport height
      if (window.scrollY > window.innerHeight / 2) {
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
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Products", href: "#" },
    { name: "News", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-transform duration-500 py-4 bg-[#111111] shadow-md ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="custom-container">
        <div className="flex items-center justify-between">
          <Link href="#">
            <img
              src="/moto/launch-europe/log.png"
              alt="Launch Europe"
              className="w-32 md:w-36 lg:w-40 h-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="lato-font header-link text-white font-semibold hover:text-[#e30613] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden xl:flex items-center ">
            <Button href="#" variant="primary" >
              Request Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <nav className="xl:hidden mt-4 flex flex-col gap-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                 className="lato-font header-link text-white font-semibold hover:text-[#e30613] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-2">
              <Button href="#" variant="primary" className="w-full">
                Request Quote
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
