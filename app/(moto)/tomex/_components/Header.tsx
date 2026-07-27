"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "./Button";
import Typography from "./Typography";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

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
    { name: "Tomex", href: "#" },
    { name: "Products", href: "#" },
    { name: "Services", href: "#" },
    { name: "Quality And Technology", href: "#" },
    { name: "Distribution And Contact", href: "#" },
    { name: "Downloads", href: "#" },
  ];

  return (
    <header 
      className={`fixed left-0 right-0 z-[100] transition-all duration-300 w-full flex justify-center ${
        isHidden ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      } ${
        isScrolled 
          ? "top-0 py-4 bg-white/95 backdrop-blur-md shadow-sm" 
          : "top-4 py-0 bg-transparent"
      }`}
    >
      {/* Content Layer */}
      <div className={`custom-container flex items-center justify-between transition-all duration-300 ${
        isScrolled 
          ? "px-4 lg:px-0" 
          : "rounded-xl lg:rounded-2xl border border-gray-200 bg-white px-4 lg:px-6 py-3 shadow-sm"
      }`}>
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center w-[120px] md:w-[150px] lg:w-[180px] min-[1500px]:w-[220px] min-[2100px]:w-[290px] min-[3800px]:w-[420px]">
             <Link href="#" className="w-full block">
               <img src="/moto/tomex/logo.png" alt="Tomex Logo" className="w-full h-auto object-contain" />
             </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                className="transition-colors hover:text-primary group flex flex-col items-center"
              >
                <Typography 
                  variant="span" 
                  color="dark" 
                  className={`navbar transition-colors group-hover:text-primary relative ${idx === 0 ? "font-bold text-primary" : ""}`}
                >
                  {link.name}
                  {idx === 0 && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary"></span>
                  )}
                </Typography>
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden xl:flex items-center gap-4">
            <Button text="Explore Products" href="#products" showIcon={true} variant="primary" />
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button 
              className="text-primary focus:outline-none p-2"
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
        <div className={`xl:hidden absolute left-0 w-full bg-white border-b border-gray-200 flex flex-col z-50 overflow-hidden transition-all duration-300 top-full shadow-lg`}>
          <nav className="flex flex-col py-4 custom-container">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-4 border-b border-gray-100"
              >
                <Typography variant="span" color={idx === 0 ? "primary" : "dark"} className={`navbar ${idx === 0 ? "font-bold" : ""}`}>
                  {link.name}
                </Typography>
              </Link>
            ))}
            <div className="py-6 flex flex-col gap-4 items-start">
               <Button text="Explore Products" href="#products" showIcon={true} variant="primary" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
