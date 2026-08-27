"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "./Button";
import Typography from "./Typography";
import { Globe } from "lucide-react";

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
    { name: "Home", href: "#" },
    { name: "Corporate", href: "#" },
    { name: "Production", href: "#" },
    { name: "Documents", href: "#" },
    { name: "Contact", href: "#" },
    { name: "E-Catalogue", href: "#" }
  ];

  return (
    <header
      className={`fixed left-0 right-0 z-[100] transition-all duration-300 w-full flex justify-center ${isHidden ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        } ${isScrolled
          ? "top-0  backdrop-blur-md shadow-lg py-4"
          : "top-4  bg-transparent py-0"
        }`}
    >
      {/* Content Layer */}
      <div className={`relative custom-container flex items-center justify-between transition-all duration-300 ${isScrolled
        ? "px-4 lg:px-0 border border-transparent"
        : "rounded-[1.5rem] border border-white/30  bg-[#171717]/80 backdrop-blur-sm px-6 lg:px-8 py-3"
        }`}>

        {/* Logo Area */}
        <div className="flex-shrink-0 flex items-center w-auto">
          <Link href="#" className="inline-block">
            <div className="bg-primary px-5 py-2 md:px-7 md:py-2.5 rounded-full flex items-center justify-center shadow-sm w-fit">
              <img src="/moto/koneks/logo2.png" alt="KONEKS Logo" className="w-24 sm:w-28 md:w-32 lg:w-36 h-auto object-contain" />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-primary group flex flex-col"
            >
              <Typography variant="span" color={idx === 0 ? "primary" : "white"} className={`navbar transition-colors group-hover:text-primary ${idx === 0 ? "font-bold border-b border-primary" : ""}`}>
                {link.name}
              </Typography>
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Button text="Explore Products" href="#" showIcon={true} />
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
          <div className="lg:hidden absolute left-0 right-0 top-full mt-4 w-full bg-[#171717]/95 backdrop-blur-xl border border-white/20 rounded-[1.5rem] flex flex-col z-50 overflow-hidden shadow-2xl transition-all duration-300">
            <nav className="flex flex-col px-6 sm:px-8 py-4 w-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-4 border-b border-white/10 last:border-b-0"
                >
                  <Typography variant="span" color="white" className="navbar font-medium">
                    {link.name}
                  </Typography>
                </Link>
              ))}
              <div className="pt-6 pb-4 flex flex-col w-full">
                <Button text="Explore Products" href="#" showIcon={true} />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
