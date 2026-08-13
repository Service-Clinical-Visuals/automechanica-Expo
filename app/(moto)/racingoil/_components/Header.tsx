"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = window.innerWidth >= 768 ? window.innerWidth * 0.5625 : window.innerWidth * 1.25;
      const threshold = bannerHeight * 0.8;

      if (window.scrollY > threshold) {
        setIsScrolled(true);
        setIsHidden(false);
      } else if (window.scrollY > 100) {
        setIsScrolled(false);
        setIsHidden(true);
      } else {
        setIsScrolled(false);
        setIsHidden(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className={`fixed top-0 left-0 w-full z-[100] flex justify-center transition-all duration-300 ${isScrolled ? "" : "mt-4 px-4"}`}>
      <header
        className={`transition-all duration-500 w-full bg-white py-2 md:py-3 px-10 sm:px-10 md:px-12 flex items-center justify-between shadow-sm ${isScrolled
            ? "border-b border-gray-200"
            : "ml-10 mr-10 border border-gray-200 rounded-full"
          } ${!isHidden ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"}`}
      >
        {/* Content Layer */}
        <div className="w-full flex items-center justify-between">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center w-[120px] md:w-[150px]">
            <Link href="#" className="w-full block">
              <img src="/moto/racingoil/logo.png" alt="Hann Filter Logo" className="w-auto h-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className="transition-colors group flex items-center gap-1 cursor-pointer"
                >
                  <span
                    className={`header-link transition-colors font-primary tracking-wide text-lg ${isActive ? "font-semibold text-[#011689] underline underline-offset-4 decoration-2" : "font-medium text-[#1E1E1E] hover:text-[#011689] hover:underline hover:underline-offset-4 hover:decoration-2"}`}
                  >
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Right Actions - Button */}
          <div className="hidden xl:flex items-center">
            <Link href="#contact" className="flex items-center justify-center px-6 py-2 bg-[#011689] hover:bg-[#011066] text-white font-primary font-medium tracking-wide rounded-md transition-colors gap-2">
              Get in Touch <span className="text-xl leading-none">&rarr;</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              className="text-[#011689] focus:outline-none p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7" strokeWidth={2} />
              ) : (
                <Menu className="w-7 h-7" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute left-0 w-full bg-white border border-gray-200 rounded-2xl flex flex-col z-50 overflow-hidden transition-all duration-300 top-[calc(100%+10px)] shadow-lg">
            <nav className="flex flex-col py-4 px-4">
              {navLinks.map((link) => {
                const isActive = activeLink === link.name;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.name);
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-between py-4 border-b border-gray-100"
                  >
                    <span className={`header-link font-primary ${isActive ? "font-bold text-[#011689]" : "text-[#484848]"}`}>
                      {link.name}
                    </span>
                  </Link>
                );
              })}
              <div className="py-6 flex flex-col items-center w-full">
                <Link href="#contact" className="w-full text-center py-3 bg-[#011689] text-white font-primary font-medium rounded-lg">
                  Get in Touch &rarr;
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
