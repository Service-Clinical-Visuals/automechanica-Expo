"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "./Button";
import { Menu, X, ChevronDown, Search } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
    { name: "Home", href: "#", active: true },
    { name: "About Us", href: "#" },
    { name: "Corporate", href: "#" },
    { name: "Products", href: "#" },
    { name: "Departments", href: "#" },
    { name: "Media", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 shadow-sm bg-white transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="py-4">
        <div className="custom-container">
          <div className="flex items-center justify-between">
            {/* Logo and Language Area */}
            <div className="flex items-center gap-6">
              {/* Logo */}
              <Link href="#">
                <img src="/moto/orijin/logo.png" alt="Orjin Automotive Logo" className="h-auto w-auto object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span class="font-bold text-xl text-[#333]">Orjin Automotive</span>' }}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`header-link oswald-font transition-colors py-2 whitespace-nowrap font-regular ${link.active ? "text-[#F39200] oswald-font border-b-[2px] border-[#F39200]" : "oswald-font text-[#4B5563] hover:text-[#F39200]"}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right: Detailed Product Search & Language */}
            <div className="hidden xl:flex items-center gap-4">
              <button className="flex items-center gap-3 px-4 py-2 rounded-[10px] text-[#4B5563] hover:bg-gray-50 transition-colors shadow-[0px_3px_8px_0px_#0000003D]">
                <span className="section-text rubik-font text-[#4B5563] font-regular">Detailed Product Search</span>
                <Search size={17} className="text-[#F39200]" />
              </button>

              {/* Language Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1.5 text-[#4B5563] hover:text-[#F39200] transition-colors focus:outline-none">
                  <img src="/moto/orijin/flag.png" alt="English" className="w-auto h-auto object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span class="text-sm font-semibold">EN</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>' }} />
                  <ChevronDown size={18} className="text-[#F39200]" />
                </button>
              </div>
            </div>


            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center gap-4">
              <button
                className="text-black focus:outline-none"
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
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col z-50 border-t border-gray-100">
          <nav className="flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block border-b border-gray-100 last:border-0 transition-colors hover:bg-gray-50"
              >
                <div className="custom-container py-4">
                  <span className={`header-link ${link.active ? "text-[#F39200]" : "text-[#272727] hover:text-[#F39200]"}`}>
                    {link.name}
                  </span>
                </div>
              </Link>
            ))}
            <div className="custom-container py-4">
              <button className="flex items-center gap-3 w-full px-4 py-2 border border-gray-300 rounded-[5px] text-gray-600">
                <span className="text-sm">Detailed Product Search</span>
                <Search size={18} className="text-[#F39200] ml-auto" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

