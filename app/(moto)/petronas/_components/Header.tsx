"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "./Button";
import Typography from "./Typography";
import { ChevronDown, Search } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Estimate banner height: aspect-video on md+, taller on mobile
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
    { name: "Home", href: "#", hasDropdown: false },
    { name: "For Business", href: "#", hasDropdown: true },
    { name: "For Consumer", href: "#", hasDropdown: true },
    { name: "Our Brands", href: "#", hasDropdown: true },
    { name: "Our Company", href: "#", hasDropdown: true }
  ];

  return (
    <header
      className={`fixed left-0 right-0 z-[100] transition-all duration-300 w-full flex justify-center ${isHidden ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        } ${isScrolled
          ? "top-0 bg-[#111111] py-4"
          : "top-4 bg-transparent py-0"
        }`}
    >
      {/* Content Layer */}
      <div className={`relative custom-container flex items-center justify-between transition-all duration-300 ${isScrolled
        ? "px-4 lg:px-0 border border-transparent"
        : "rounded-full border border-white/30 bg-[#111111] px-6 lg:px-8 py-3 min-[2000px]:px-16 min-[2000px]:py-5 min-[3800px]:px-24 min-[3800px]:py-8"
        }`}>

        {/* Logo Area */}
        <div className="flex-shrink-0 flex items-center w-auto">
          <Link href="#" className="inline-block">
            <div className="flex items-center justify-center w-fit">
              <img src="/moto/petronas/logo.png" alt="PETRONAS Logo" className="w-24 sm:w-28 md:w-32 lg:w-50 min-[2000px]:w-60 min-[3800px]:w-70 h-auto object-contain" />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10 min-[2000px]:gap-16 min-[3800px]:gap-24">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-primary group flex items-center gap-1 min-[2000px]:gap-2 min-[3800px]:gap-3"
            >
              <Typography variant="navbar" color="white" className={`transition-colors group-hover:text-primary ${idx === 0 ? "font-bold border-b border-white" : ""}`}>
                {link.name}
              </Typography>
              {link.hasDropdown && (
                <ChevronDown className="w-4 h-4 min-[2000px]:w-6 min-[2000px]:h-6 min-[3800px]:w-10 min-[3800px]:h-10 text-primary transition-colors" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4 min-[2000px]:gap-8 min-[3800px]:gap-12">
          <button className="flex items-center gap-3 bg-primary hover:bg-primary-hover transition-colors rounded-full px-6 py-2.5 min-[2000px]:px-10 min-[2000px]:py-4 min-[3800px]:px-16 min-[3800px]:py-6">
            <span className="text-white font-medium text-sm lg:text-base min-[2000px]:text-xl min-[3800px]:text-3xl">Product Search...</span>
            <Search className="w-5 h-5 min-[2000px]:w-7 min-[2000px]:h-7 min-[3800px]:w-12 min-[3800px]:h-12 text-white" strokeWidth={2.5} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            className="text-white focus:outline-none p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full mt-4 w-full bg-secondary/95 backdrop-blur-xl border border-white/20 rounded-3xl flex flex-col z-50 overflow-hidden shadow-2xl transition-all duration-300">
            <nav className="flex flex-col px-6 sm:px-8 py-4 w-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-4 border-b border-white/10 last:border-b-0 flex items-center justify-between"
                >
                  <Typography variant="navbar" color="white" className="font-medium">
                    {link.name}
                  </Typography>
                  {link.hasDropdown && (
                    <ChevronDown className="w-5 h-5 text-white" />
                  )}
                </Link>
              ))}
              <div className="pt-6 pb-4 flex flex-col w-full">
                <button className="flex items-center justify-between bg-primary hover:bg-primary-hover transition-colors rounded-full px-6 py-3">
                  <span className="text-white font-medium text-base">Product Search...</span>
                  <Search className="w-5 h-5 text-white" strokeWidth={2.5} />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
