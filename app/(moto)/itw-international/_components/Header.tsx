"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

 
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
  <header className={`w-full fixed top-0 left-0 z-50 transition-transform duration-500 py-2 bg-white shadow-md ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="custom-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#">
              <img src="/moto/itw-international/logo.png" alt="ITW International Logo" className="w-[140px] md:w-[160px] xl:w-[200px] h-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`header-link  ${link.active ? "text-[#b7262d] underline decoration-[#b7262d] decoration-2 underline-offset-4  font-bold"  : "text-[#555555] hover:text-[#b7262d] font-medium hover:font-semibold transition-colors"}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden xl:flex items-center">
            <Button href="#" variant="primary" hasArrow>
              Explore Products
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center">
            <button 
              className="text-[#1a1a1a] focus:outline-none"
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

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col z-50">
          <div className="custom-container">
            <nav className="flex flex-col py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`header-link py-2 ${link.active ? "text-[#b7262d] underline decoration-[#b7262d] decoration-2 underline-offset-4 font-bold"  : "text-[#555555] hover:text-[#b7262d] font-medium hover:font-semibold transition-colors"}`}
              >
                  {link.name}
                </Link>
              ))}
              <div className="py-4">
                <Button href="#" variant="primary" className="w-full" hasArrow>
                  Explore Products
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
