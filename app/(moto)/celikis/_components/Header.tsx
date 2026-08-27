"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X,  } from "lucide-react";
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
    { name: "Technologies", href: "#" },
    { name: "News & Event", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-transform duration-500 py-2 bg-white shadow-md ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="custom-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#">
              <img src="/moto/celikis/logo.png" alt="Celikis Logo" className="w-[120px] md:w-[140px] xl:w-[160px] h-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`header-link  ${link.active ? "text-[#005CA9] font-bold underline underline-offset-3" : "text-[#4B5563] hover:text-[#005CA9] font-semibold hover:font-bold hover:underline hover:underline-offset-3"}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden xl:flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer text-[#333333] hover:text-primary transition-colors">
              <img src="/moto/celikis/globe.png" alt="setting" className="w-8 h-8 flex-shrink-0 mt-0.5" />
              <span className="font-semibold header-links text-[#4B5563]">EN</span>
              <img src="/moto/celikis/dwnarrow.png" alt="setting" className="w-4 h-2 flex-shrink-0" />
            </div>
            
            <Button href="#" variant="primary">
              Login
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center">
            <button 
              className="text-primary focus:outline-none"
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
                  className={`block py-4 border-b border-gray-50 last:border-0 ${
                    link.active ? "text-primary font-bold" : "text-[#333333] font-medium"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="py-4 flex items-center justify-between border-t border-gray-100">
                <div className="flex items-center gap-2 text-[#333333]">
                  <img src="/moto/celikis/globe.png" alt="setting" className="w-8 h-8 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold header-links text-[#4B5563]">EN</span>
                  <img src="/moto/celikis/dwnarrow.png" alt="setting" className="w-4 h-2 flex-shrink-0" />
                </div>
              </div>
              <div className="py-4">
                <Button href="#" variant="primary" className="w-full">
                  Login
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
