"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";

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

  const leftLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "News", href: "#" },
    { name: "Brands", href: "#" },
    { name: "Certifications", href: "#" },
  ];

  const rightLinks = [
    { name: "Facilities", href: "#" },
    { name: "Countries", href: "#" },
    { name: "Our Laboratory", href: "#" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-transform duration-500 py-4 bg-[#0d0f1c] border-b border-gray-800/50 ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="custom-container flex items-center justify-between">
        
        {/* Left Navigation */}
        <nav className="hidden xl:flex flex-1 items-center justify-start space-x-6 xl:space-x-10">
          {leftLinks.map((link, index) => (
            <Link key={index} href={link.href} className="oswald header-link font-semibold text-white">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <div className="flex-shrink-0 mx-4 flex justify-center">
          <Link href="/strong-enerji">
            <img
              src="/moto/strong-enerji/logo.png"
              alt="Strong Enerji Logo"
              className="h-14 sm:h-16 md:h-20 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Right Navigation & Actions */}
        <div className="hidden xl:flex flex-1 items-center justify-end space-x-6 xl:space-x-10">
          <nav className="flex items-center space-x-6 xl:space-x-10">
            {rightLinks.map((link, index) => (
              <Link key={index} href={link.href} className="oswald header-link font-semibold text-white">
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-2">
            <button className="flex items-center justify-center bg-gray-200 text-black px-2 py-1 header-link font-semibold gap-1 rounded">
              <img src="/moto/strong-enerji/flag.png" alt="TR Flag" className="h-4 md:h-5 w-auto object-contain" />
              <span className="oswald header-link font-semibold">TR</span>
            </button>
            <button className="flex items-center justify-center bg-gray-200 text-black p-1 rounded">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Actions */}
        <div className="xl:hidden flex flex-1 justify-end items-center space-x-3">
          <button className="flex items-center justify-center bg-gray-200 text-black px-1.5 py-1 text-xs font-semibold gap-1 rounded">
            <img src="/moto/strong-enerji/flag.png" alt="TR Flag" className="h-3 w-auto object-contain" />
            <span className="oswald font-semibold">TR</span>
          </button>
          <button 
            className="text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-[#0d0f1c] border-b border-gray-800/50 py-4 shadow-xl">
          <div className="custom-container px-4 flex flex-col w-full">
            {[...leftLinks, ...rightLinks].map((link, index) => (
              <Link 
                key={index} 
                href={link.href} 
                className="oswald header-link font-semibold text-white w-full py-3 border-b border-gray-800/50 hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pt-6 pb-2 w-full">
              <button className="flex items-center justify-center bg-gray-200 text-black p-2 rounded w-full">
                <Search size={20} className="mr-2" />
                <span className="oswald font-semibold">Search</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
