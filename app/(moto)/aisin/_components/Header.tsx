"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
  
  const links = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Products", href: "#" },
    { name: "News", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <header className={`w-full bg-white shadow-sm fixed top-0 left-0 z-50 h-[80px] lg:h-[100px] flex items-center transition-transform duration-300 ease-in-out ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="custom-container w-full flex items-center justify-between h-full relative">
        <Link href="/aisin" className="flex items-center">
          <img
            src="/moto/aisin/logo.png"
            alt="Aisin Logo"
            className="object-contain w-[120px] 2xl:w-[150px] 3xl:w-[180px] 4xl:w-[220px]"
          />
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="lg:hidden p-2 text-primary focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className="hidden lg:flex items-center justify-center space-x-8 lg:space-x-12 2xl:space-x-16 absolute left-1/2 transform -translate-x-1/2">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`header-link font-manrope transition-colors ${
                link.name === "Home" ? "text-primary font-bold" : "text-[#202020] font-medium hover:text-primary hover:font-semibold"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Language Options aligned with container right edge */}
        <div className="hidden lg:flex items-center h-full ml-auto">
          <button className="header-link font-manrope font-medium text-primary px-2 h-full flex items-center justify-center hover:text-primary transition-colors">
            DUT
          </button>
          <button className="header-link font-manrope font-bold text-white bg-primary px-2 lg:px-2 h-full flex items-center justify-center transition-opacity hover:opacity-90">
            ENG
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden fixed top-[80px] left-0 w-full bg-white shadow-md flex flex-col items-start justify-start px-12 py-8 space-y-6 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`font-manrope text-lg transition-colors ${
              link.name === "Home" ? "text-primary font-bold" : "text-[#202020] font-medium hover:text-primary"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        
        {/* Mobile Language Options */}
        <div className="flex items-center space-x-4 pt-6 border-t border-gray-100 w-full justify-start ">
          <button className="font-manrope font-bold text-gray-500 py-2 hover:text-primary transition-colors">
            DUT
          </button>
          <button className="font-manrope font-bold text-white bg-primary px-6 py-2 rounded-sm">
            ENG
          </button>
        </div>
      </div>

 
    </header>
  );
}
