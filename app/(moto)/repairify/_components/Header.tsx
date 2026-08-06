"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

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

  const links = [
    { name: "Home", path: "#" },
    { name: "About", path: "#about" },
    { name: "Products", path: "#products" },
    { name: "News", path: "#news" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <>
       <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 py-3 bg-[#111111] ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="custom-container flex items-center justify-between">
        {/* Logo */}
        <Link href="/repairify" className="flex items-center gap-2 z-50">
          <img src="/moto/repairify/logo.png" alt="Repairify" className="h-8 md:h-10 lg:h-15 w-auto object-contain" />
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`inter-font header-link transition-colors font-normal ${
                link.name === "Home" ? "text-white font-bold" : "text-white "
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:block">
          <Button href="#quote" className="px-6 py-2.5">
            Request Quote
          </Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="lg:hidden text-white z-50 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

    </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#111111] z-40 transition-transform duration-300 lg:hidden flex flex-col items-start justify-start pt-20 gap-8 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-start px-8 gap-8 text-left w-full">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
             className={`inter-font header-link transition-colors font-normal ${
                link.name === "Home" ? "text-white font-bold" : "text-white "
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="mt-4 px-8 w-full flex justify-start">
          <Button href="#quote" className="px-8 py-3" onClick={() => setIsMobileMenuOpen(false)}>
            Request Quote
          </Button>
        </div>
      </div>
    </>
  );
}
