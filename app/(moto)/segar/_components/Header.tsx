"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";

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
    { name: "Corporate", href: "#" },
    { name: "Product", href: "#" },
    { name: "Innovation", href: "#" },
    { name: "Contact Us", href: "#" }
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 shadow-sm bg-[#DF1222] transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="py-4">
        <div className="custom-container">
          <div className="flex items-center justify-between">
            {/* Logo Area */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="#">
                <img src="/moto/segar/logo.png" alt="SEGER Logo" className="h-full w-full object-contain header-logo" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-10 xl:gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`header-link transition-colors py-2 whitespace-nowrap roboto-font font-regular ${link.active
                    ? "text-white font-semibold"
                    : "text-white hover:text-white/80"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="hidden xl:flex items-center">
              <div className="flex items-center border border-white rounded-[4px] px-3 py-1 w-40">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent text-white placeholder-white outline-none w-full roboto-font section-text"
                />
                <Search className="text-white w-4 h-4 ml-2" strokeWidth={2} />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center gap-4">
              <button
                className="text-white focus:outline-none"
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
        <div className="xl:hidden absolute top-full left-0 w-full bg-[#DF1222] shadow-lg flex flex-col z-50 border-t border-red-800">
          <nav className="flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block border-b border-red-800 last:border-0 transition-colors hover:bg-red-700"
              >
                <div className="custom-container py-4">
                  <span className={`header-link outfit-font font-normal text-white`}>
                    {link.name}
                  </span>
                </div>
              </Link>
            ))}
            <div className="custom-container py-4">
              <div className="flex items-center border border-white rounded-[4px] px-3 py-1.5 w-full">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent text-white placeholder-white outline-none w-full outfit-font section-text"
                />
                <Search className="text-white w-4 h-4 ml-2" strokeWidth={2} />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
