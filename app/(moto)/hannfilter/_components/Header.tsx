"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";

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
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-500 w-full bg-[#0000AE] py-3 md:py-4 px-4 sm:px-4 md:px-12 lg:px-20 flex items-center justify-between ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
    >
      {/* Content Layer */}
      <div className="w-full flex items-center justify-between">

        {/* Logo Area */}
        <div className="flex-shrink-0 flex items-center w-[140px] md:w-[170px] lg:w-[200px] min-[1500px]:w-[240px]">
          <Link href="#" className="w-full block">
            <img src="/moto/hannfilter/logo.png" alt="Hann Filter Logo" className="w-full h-auto object-contain" />
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
                  className={`header-link transition-colors font-primary tracking-wide ${isActive ? "font-semibold text-white" : "font-normal text-white/80 hover:text-white"}`}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Right Actions - Search Bar */}
        <div className="hidden xl:flex items-center gap-4 lg:gap-6">
          <div className="relative bg-white rounded-lg flex items-center px-4 py-2 w-[240px] md:w-[280px]">
            <input
              type="text"
              placeholder="Search For Products"
              className="section-text bg-transparent border-none outline-none w-full text-[#484848] font-secondary placeholder:text-[#484848]/60"
            />
            <Search className="w-5 h-5 text-[#0000AE] ml-2 shrink-0 cursor-pointer hover:opacity-80 transition-opacity" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden flex items-center">
          <button
            className="text-white focus:outline-none p-2"
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
                  <span className={`header-link font-primary ${isActive ? "font-bold text-[#0000AE]" : "text-[#484848]"}`}>
                    {link.name}
                  </span>
                </Link>
              );
            })}
            <div className="py-6 flex flex-col gap-4 items-start w-full">
              <div className="relative bg-gray-100 rounded-lg flex items-center px-4 py-2 w-full">
                <input
                  type="text"
                  placeholder="Search For Products"
                  className="section-text bg-transparent border-none outline-none w-full text-[#484848] font-secondary placeholder:text-[#484848]/60"
                />
                <Search className="w-5 h-5 text-[#0000AE] ml-2 shrink-0 cursor-pointer" />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
