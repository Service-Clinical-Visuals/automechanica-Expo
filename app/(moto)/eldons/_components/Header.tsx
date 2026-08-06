"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import Typography from "./Typography";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change header style when scrolled down
      if (window.scrollY > 100) {
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
    { name: "About us", href: "#" },
    { name: "Products", href: "#" },
    { name: "News", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <header className={`w-full fixed left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? "top-0" : "top-4"}`}>
      <div className={`mx-auto bg-white shadow-sm transition-all duration-300 ${isScrolled ? "w-full border-b border-gray-200" : "w-[96%] border border-gray-200 rounded-2xl"}`}>
        <div className="custom-container relative flex items-center h-[70px] md:h-[80px] min-[3800px]:h-[130px] px-2 md:px-0">
          {/* Logo */}
          <Link href="#" className="flex items-center z-20 shrink-0">
            <img
              src="/moto/eldons/logo.png"
              alt="ELDON'S Logo"
              className="h-10 md:h-[52px] min-[3800px]:h-[68px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex absolute inset-x-0 justify-center z-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="transition-colors whitespace-nowrap"
                >
                  <Typography
                    variant="span"
                    className="navbar"
                    color={link.active ? "secondary" : "dark"}
                  >
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </div>
          </nav>

          {/* Right Action Button */}
          <div className="ml-auto hidden xl:flex z-20 shrink-0">
            <Button text="Get in Touch" variant="primary" href="#" className="px-6 py-2.5" />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden ml-auto z-20 text-[#1E1E1E] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={28} strokeWidth={2} /> : <Menu size={28} strokeWidth={2} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`xl:hidden absolute left-0 right-0 top-full bg-white border-b border-gray-100 shadow-xl overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "block" : "hidden"
          }`}
      >
        <nav className="flex flex-col px-6 py-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block"
            >
              <Typography
                variant="span"
                className="navbar"
                color={link.active ? "secondary" : "dark"}
              >
                {link.name}
              </Typography>
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <Button text="Get in Touch" variant="primary" href="#" className="w-full" onClick={() => setIsMobileMenuOpen(false)} />
          </div>
        </nav>
      </div>
    </header>
  );
}
