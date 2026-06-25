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
    { name: "HOME PAGE", href: "#", active: true },
    { name: "CORPORATE", href: "#" },
    { name: "PRODUCTS", href: "#" },
    { name: "LABORATORY", href: "#" },
    { name: "GALLERY", href: "#" },
    { name: "CONTACT", href: "#" },
  ];

  let headerClasses = "fixed top-0 left-0 w-full z-50 transition-all duration-300 ";
  if (headerState === "top") {
    headerClasses += "translate-y-0 bg-white shadow-sm";
  } else if (headerState === "hidden") {
    headerClasses += "-translate-y-full bg-white shadow-none";
  } else if (headerState === "visible") {
    headerClasses += "translate-y-0 bg-white shadow-md";
  }

  return (
    <header className={headerClasses}>
      <div className="custom-container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 z-50">
          <img src="/moto/ari-oil/logo.png" alt="ARI OIL" className="h-8 md:h-10 xl:h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 ">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`navbar font-oswald font-semibold text-[14px] xl:text-[15px] tracking-wide uppercase transition-colors hover:text-secondary ${link.active ? "text-secondary" : "text-gray-700"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Button */}
        <div className="hidden lg:block">
          <Button text="Schedule Eval" href="#" variant="primary" />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-primary z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div 
          className={`absolute top-full left-0 w-full bg-white shadow-lg flex flex-col lg:hidden overflow-hidden transition-all duration-300 ease-in-out origin-top ${isOpen ? "max-h-[600px] opacity-100 border-t border-gray-100" : "max-h-0 opacity-0"}`}
        >
          <nav className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-oswald font-medium text-[1.1rem] tracking-wide uppercase py-3.5 border-b border-gray-100 last:border-none transition-colors ${link.active ? "text-secondary" : "text-primary hover:text-secondary"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 pb-2">
              <Button text="Schedule Eval" href="#" variant="primary" className="w-full justify-center" onClick={() => setIsOpen(false)} />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
