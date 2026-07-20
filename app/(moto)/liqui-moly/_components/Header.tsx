"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import Button from "./Button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling half the viewport height
      if (window.scrollY > window.innerHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll(); // Check on initial load
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "About", href: "#" },
    { name: "Products", href: "#" },
    { name: "For Drivers", href: "#" },
    { name: "For Partners", href: "#" },
    { name: "Press", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 bg-white transition-transform duration-500 shadow-sm ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="py-4">
        <div className="custom-container">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-10 xl:gap-20 ">
            
            {/* Logo Area */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="#">
                <img src="/moto/liqui-moly/logo.png" alt="Liqui Moly Logo" className="w-[120px] md:w-[140px] h-auto object-contain" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-4 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`header-link transition-colors py-2 whitespace-nowrap ${
                    link.active
                      ? "text-[var(--color-secondary)] font-semibold underline underline-offset-4 decoration-[var(--color-secondary)]"
                      : "text-[var(--color-third)] hover:text-[var(--color-secondary)] font-normal hover:underline underline-offset-4 decoration-[var(--color-secondary)] hover:font-semibold"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            </div>

            {/* Right Side Actions */}
            <div className="hidden xl:flex items-center gap-4">
              {/* Search Box */}
              <div className="relative flex items-center bg-gray-100 rounded-[4px] px-3 py-2 w-[350px]">
                <img src="/moto/liqui-moly/search.png" alt="Search" className="w-3 h-3 mr-2" />
                <input 
                  type="text" 
                  placeholder="Motor Oils, additives, vehicle maintenance..." 
                  className="header-links bg-transparent border-none outline-none search-text text-[var(--color-third)] w-full placeholder-gray-400"
                />
              </div>

              {/* Oil Guide Button */}
              <Button variant="secondary" icon="/moto/liqui-moly/drop.png">
                Oil guide
              </Button>

              {/* Language Selector */}
              <div className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-[var(--color-primary)] transition-colors ml-1">
                <img src="/moto/liqui-moly/glob.png" alt="Globe" className="w-6 h-6 object-contain" />
                <span className="font-semibold lang-text">EN</span>
                <img src="/moto/liqui-moly/arow.png" alt="Arrow Down" className="w-3 h-3 object-contain " />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center gap-3">
              <div className="hidden sm:block">
                <Button variant="secondary" icon="/moto/liqui-moly/drop.png">
                  Oil guide
                </Button>
              </div>
              <button 
                className="text-[var(--color-primary)] focus:outline-none"
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
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col z-50 border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <div className="p-4 bg-gray-50 border-b border-gray-100">
             {/* Mobile Search Box */}
             <div className="relative flex items-center bg-gray-200 rounded-[4px] px-3 py-3 w-full">
                <img src="/moto/liqui-moly/search.png" alt="Search" className="w-3 h-3 mr-2" />
                <input 
                  type="text" 
                  placeholder="Motor Oils, additives, vehicle maintenance..." 
                  className="header-links bg-transparent border-none outline-none search-text text-[var(--color-third)] w-full placeholder-gray-400"
                />
              </div>
          </div>
          
          <nav className="flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-6 py-4 border-b border-gray-100 last:border-0 ${
                 link.active
                      ? "text-[var(--color-secondary)] font-semibold underline underline-offset-4 decoration-[var(--color-secondary)]"
                      : "text-[var(--color-third)] hover:text-[var(--color-secondary)] font-normal hover:underline underline-offset-4 decoration-[var(--color-secondary)] hover:font-semibold"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="p-6 sm:hidden border-t border-gray-100">
              <Button variant="secondary" className="w-full justify-center" icon="/moto/liqui-moly/drop.png">
                Oil guide
              </Button>
            </div>
            
            <div className="px-6 py-4 flex items-center gap-2 border-t border-gray-100 text-gray-700">
               <img src="/moto/liqui-moly/glob.png" alt="Globe" className="w-6 h-6 object-contain" />
               <span className="font-semibold lang-text">English (EN)</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
