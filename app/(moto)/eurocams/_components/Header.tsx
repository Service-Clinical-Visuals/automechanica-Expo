"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import Typography from "./Typography";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [headerState, setHeaderState] = useState("top"); // "top", "hidden", "visible"

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      if (scrollY < 50) {
        setHeaderState("top");
      } else if (scrollY >= 50 && scrollY < heroHeight * 0.8) {
        setHeaderState("hidden");
      } else {
        setHeaderState("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "Products", href: "#" },
    { name: "Quality", href: "#" },
    { name: "Support", href: "#" },
    { name: "Parts Catalogue", href: "#" },
  ];

  let headerClasses = `w-full  z-50 transition-all duration-500 flex justify-center ${headerState === "top"
    ? "absolute  top-4 lg:top-6 left-0 right-0 opacity-100"
    : headerState === "hidden" && !isOpen
      ? "fixed top-0 left-0 right-0 -translate-y-full opacity-0 pointer-events-none"
      : "fixed top-0 left-0 right-0 translate-y-0 opacity-100 z-[60] bg-[#111111] shadow-md"
    }`;

  return (
    <header className={headerClasses}>
      <div className={`custom-container bg-[#101010] relative p-3 md:p-5 flex items-center justify-between py-4 ${headerState === 'top' ? 'lg:bg-transparent' : ''}`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <img src="/moto/eurocams/icon.png" alt="Eurocams" className="h-8 md:h-10 xl:h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 ">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`navbar capitalize transition-colors hover:text-primary ${link.active ? "text-primary" : "text-white"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Button */}
        <div className="hidden lg:block">
          <Button text="Get in Touch" href="#" variant="primary" showIcon={true} />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white hover:text-primary z-50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div
          className={`absolute top-full left-0 w-full bg-[#101010] shadow-lg flex flex-col lg:hidden overflow-hidden transition-all duration-300 ease-in-out origin-top z-40 ${isOpen ? "max-h-[600px] opacity-100 border-t border-gray-700" : "max-h-0 opacity-0"}`}
        >
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`navbar py-3.5 border-b border-gray-700 last:border-none transition-colors ${link.active ? "text-primary" : "text-white hover:text-primary"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 pb-2">
              <Button text="Get in Touch" href="#" variant="primary" showIcon={true} className="w-full justify-center" onClick={() => setIsOpen(false)} />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
