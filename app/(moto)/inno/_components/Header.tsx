"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "./Button";
import { Menu, X } from "lucide-react";

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
    { name: "About", href: "#" },
    { name: "Products", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 shadow-sm bg-white transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="py-4">
        <div className="custom-container">
          <div className="flex items-center justify-between">
            {/* Logo Area */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="#">
                <img src="/moto/inno/logo.png" alt="Inno Piston Logo" className="h-auto w-auto object-contain" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-10 xl:gap-14">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`header-link inter-font  transition-colors py-2 whitespace-nowrap ${link.active ? "inter-font text-[#000000] font-semibold" : "text-[#000000] font-regular hover:text-[#000000]"}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right: Request Quote Button */}
            <div className="hidden xl:flex items-center">
              <Button href="#">
                Request Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center gap-4">
              <button
                className="text-black focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X size={32} strokeWidth={2} />
                ) : (
                  <Menu size={32} strokeWidth={2} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col z-50 border-t border-gray-100">
          <nav className="flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block border-b border-gray-100 last:border-0 transition-colors hover:bg-gray-50"
              >
                <div className="custom-container py-4">
                  <span className={`header-link ${link.active ? "text-[#F25C27]" : "text-[#272727] hover:text-[#F25C27]"}`}>
                    {link.name}
                  </span>
                </div>
              </Link>
            ))}
            <div className="custom-container py-4">
              <Button href="#">
                Request Quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

