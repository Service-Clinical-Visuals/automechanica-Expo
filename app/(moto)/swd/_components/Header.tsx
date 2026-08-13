"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "./Button";
import Typography from "./Typography";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling half the viewport height
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
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products", hasDropdown: true },
    { name: "Partner", href: "#partner" },
    { name: "Oil Finder", href: "#oil-finder" },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-500 w-full bg-white py-2 md:py-2 px-4 sm:px-4 md:px-12 lg:px-8 flex items-center justify-between ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
    >
      {/* Content Layer */}
      <div className="w-full flex items-center justify-between">

        {/* Logo Area */}
        <div className="flex-shrink-0 flex items-center w-[140px] md:w-[170px] lg:w-[200px] min-[1500px]:w-[240px] min-[2100px]:w-[310px] min-[3800px]:w-[440px]">
          <Link href="#" className="w-full block">
            <img src="/moto/swd/logo.png" alt="Swd Rheinol Logo" className="w-full h-auto object-contain" />
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
                  className={`navbar transition-colors font-secondary text-[16px] lg:text-[17px] ${isActive ? "font-semibold text-[#2D3B6F]" : "font-medium text-[#374151]"}`}
                >
                  {link.name}
                </span>
                {link.hasDropdown && (
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 group-hover:rotate-180 ${isActive ? "text-[#2D3B6F]" : "text-[#374151]"}`} />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden xl:flex items-center gap-4 lg:gap-6">
          <Button text="Contact Us" href="#contact" showIcon={true} variant="primary" />

          {/* Country/Language Indicator */}
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity pl-2 border-l border-gray-200">
            <svg className="w-6 h-6 rounded-full overflow-hidden shadow-sm shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="8" fill="#000000" />
              <rect y="8" width="24" height="8" fill="#DD0000" />
              <rect y="16" width="24" height="8" fill="#FFCE00" />
            </svg>
            <span className="font-semibold text-sm md:text-base text-[#2D3B6F] font-secondary">DE</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden flex items-center">
          <button
            className="text-[#2D3B6F] focus:outline-none p-2"
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
        <div className="xl:hidden absolute left-0 w-full bg-white border-b border-gray-200 flex flex-col z-50 overflow-hidden transition-all duration-300 top-full shadow-lg">
          <nav className="flex flex-col py-4 custom-container px-4">
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
                  <span className={`navbar font-secondary text-base ${isActive ? "font-bold text-[#2D3B6F]" : "text-[#374151]"}`}>
                    {link.name}
                  </span>
                  {link.hasDropdown && (
                    <ChevronDown className={`w-5 h-5 ${isActive ? "text-[#2D3B6F]" : "text-gray-400"}`} />
                  )}
                </Link>
              );
            })}
            <div className="py-6 flex flex-col gap-4 items-start w-full">
              <Button text="Contact Us" href="#contact" showIcon={true} variant="primary" />
              <div className="flex items-center gap-2 pt-2">
                <svg className="w-6 h-6 rounded-full overflow-hidden shadow-sm shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="8" fill="#000000" />
                  <rect y="8" width="24" height="8" fill="#DD0000" />
                  <rect y="16" width="24" height="8" fill="#FFCE00" />
                </svg>
                <span className="font-semibold text-base text-[#2D3B6F] font-secondary">DE</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
