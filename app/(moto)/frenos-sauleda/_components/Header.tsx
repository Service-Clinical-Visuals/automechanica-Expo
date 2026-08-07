"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header only after scrolling half the viewport height
      if (window.scrollY > window.innerHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Check initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/frenos-sauleda" },
    { name: "About Us", href: "/frenos-sauleda/about" },
    { name: "Products", href: "/frenos-sauleda/products" },
    { name: "Media", href: "/frenos-sauleda/media" },
    { name: "Contact Us", href: "/frenos-sauleda/contact" },
  ];

  return (
    <>
      <header 
        className={`w-full bg-white shadow-md fixed top-0 left-0 z-[100] transition-all duration-500 py-5 ${
          isVisible ? "translate-y-0" : "-translate-y-full "
        }`}
      >
        <div className="custom-container px-6 lg:px-16" data-aos="fade-down">
          <div className="w-full flex items-center justify-between">
            {/* Logo */}
            <Link href="/frenos-sauleda" className="flex-shrink-0 z-50 flex items-center">
              <img
                src="/moto/frenos-sauleda/logo.png"
                alt="Frenos Sauleda Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-8 2xl:gap-12 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.name === "Home" && pathname === "/frenos-sauleda");
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`header-link transition-colors font-normal sora tracking-wide ${
                      isActive
                        ? "text-[var(--color-primary)] font-semibold"
                        : "text-[#202020] hover:text-[var(--color-primary)]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Language Selector */}
            <div className="hidden xl:flex items-center">
              <button className="flex items-center gap-2 border border-gray-300 rounded px-3 py-1.5 hover:border-[var(--color-primary)] transition-colors text-[#333333]">
                <img src="/moto/frenos-sauleda/flag.png" alt="English" className="w-5 h-auto rounded-sm" />
                <span className="font-medium sora header-link">ENG</span>
                <ChevronDown size={16} />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="xl:hidden text-[#333333] z-50 p-2 flex items-start"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } xl:hidden flex flex-col pt-28 pb-6 overflow-y-auto shadow-2xl`}
      >
        <div className="custom-container flex flex-col items-start px-8 gap-6 w-full">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.name === "Home" && pathname === "/frenos-sauleda");
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`header-link transition-colors font-normal sora tracking-wide ${
                      isActive
                        ? "text-[var(--color-primary)] font-semibold"
                        : "text-[#202020] hover:text-[var(--color-primary)]"
                    }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="mt-8 flex items-center gap-2 border border-gray-300 rounded px-3 py-2 w-fit">
            <img src="/moto/frenos-sauleda/flag.png" alt="English" className="w-5 h-auto rounded-sm" />
            <span className="font-medium sora header-link">ENG</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>
    </>
  );
}
