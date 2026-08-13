"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Container from "./Container";
import Button from "./Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerState, setHeaderState] = useState<"top" | "hidden" | "scrolled">("top");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 50) {
        setHeaderState("top");
      } else if (scrollY < window.innerHeight / 2) {
        setHeaderState("hidden");
      } else {
        setHeaderState("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "ABOUT US", href: "#" },
    { name: "PRODUCT", href: "#" },
    { name: "EXPERTISE", href: "#" },
    { name: "QUALITY", href: "#" },
    { name: "NEWS", href: "#" },
  ];

  return (
    <>
      <div className={`w-full transition-all duration-700 ${headerState === "scrolled" ? "h-20 md:h-[90px]" : "h-[80px] md:h-[90px]"}`} aria-hidden="true"></div>
      <header
        className={`fixed left-0 w-full  z-50 transition-all duration-700 ease-in-out bg-white ${headerState === "hidden" ? "-translate-y-[150%] opacity-0" : "translate-y-0 opacity-100"
          } ${headerState === "scrolled" ? "shadow-md py-2 top-0" : "py-4 md:py-5 -top-3"}`}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img src="/moto/slider/logo.png" alt="Slider Logo" className="h-12 md:h-full md:w-full object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative font-bebas text-lg md:text-xl tracking-wide transition-colors ${link.name === "HOME"
                  ? "text-primary "
                  : "text-dark hover:text-primary"
                  }`}
              >
                {link.name}
                {link.name === "HOME" && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="hidden xl:flex items-center gap-4">
            {/* Language Selector */}
            <button className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2.5 hover:bg-gray-50 transition-colors shadow-sm">
              <span className="text-[21px] leading-none">🇬🇧</span>
              <ChevronDown size={16} className="text-gray-400" />
            </button>

            {/* Contact Button */}
            <Button text="CONTACT US" variant="primary" showIcon={false} className="!py-2.5 md:!px-15 shadow-lg !px-5 !text-lg !rounded-none" />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center gap-4">
            <button className="flex items-center gap-1 border border-gray-200 rounded-full px-3 py-1.5 shadow-sm">
              <span className="text-[14px] leading-none">🇬🇧</span>
            </button>
            <button className="text-primary p-2" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </Container>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl z-40 max-h-[calc(100vh-80px)] overflow-y-auto">
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-bebas text-xl border-b border-gray-100 pb-3 ${link.name === "HOME" ? "text-primary" : "text-dark"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <Button text="CONTACT US" variant="primary" showIcon={false} className="w-full" onClick={() => setIsMenuOpen(false)} />
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
