"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Typography from "./Typography";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
    { name: "Home", href: "#", active: true },
    { name: "About us", href: "#" },
    { name: "Product", href: "#" },
    { name: "Technical Information", href: "#" },
    { name: "Media", href: "#" },
    { name: "Blogs", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 shadow-sm bg-white border-b border-gray-100 transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="py-2">
        <div className="custom-container">
          <div className="flex items-center justify-between gap-4">
            {/* Logo Area */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="#" className="flex items-center shrink-0">
                <img src="/moto/yavuzsan-otomotiv/logo.png" alt="Yavuzsan Logo" className="h-auto sm:h-auto md:h-auto w-auto object-contain" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-5 2xl:gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors py-1.5 whitespace-nowrap oswald text-[15px] 2xl:text-[16px] relative ${link.active
                    ? "header-link font-regular text-[#E30613] !text-[#E30613] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#E30613]"
                    : "font-medium font-regular text-[#4B5563] hover:text-[#E30613]"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Actions: Login/Register & Language Selector */}
            <div className="hidden xl:flex items-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-[#0F5AA6] hover:bg-[#0c4885] text-white font-medium text-[15px] px-5 h-[50px] min-h-[50px] rounded-md transition-all duration-300 oswald shadow-sm"
              >
                <img src="/moto/yavuzsan-otomotiv/contact.png" alt="User" className="w-4 h-4 object-contain brightness-0 invert shrink-0" />
                <span>Login/Register</span>
              </Link>

              {/* Language Selector Box */}
              <div className="flex items-center gap-1.5 cursor-pointer py-1.5 px-2.5 rounded hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
                <div className="w-6 h-6 rounded-full bg-[#ED1C24] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <img src="/moto/yavuzsan-otomotiv/map.png" alt="Globe" className="w-3.5 h-3.5 object-contain brightness-0 invert shrink-0" />
                </div>
                <span className="text-[#202020] text-sm oswald font-semibold">EN</span>
                <img src="/moto/yavuzsan-otomotiv/dwnarrow.png" alt="Dropdown" className="w-3 h-2 object-contain shrink-0" />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center gap-3">
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-1.5 bg-[#0F5AA6] text-white font-medium text-xs px-3 h-[38px] rounded-md oswald"
              >
                <img src="/moto/yavuzsan-otomotiv/contact.png" alt="User" className="w-3.5 h-3.5 object-contain brightness-0 invert shrink-0" />
                <span>Login</span>
              </Link>
              <button
                className="text-[#202020] focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <X size={28} strokeWidth={2} />
                ) : (
                  <Menu size={28} strokeWidth={2} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-xl flex flex-col z-50 border-t border-gray-100 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block border-b border-gray-100 last:border-0 transition-colors hover:bg-gray-50"
              >
                <div className="custom-container py-3.5">
                  <Typography
                    variant="span"
                    color="none"
                    className={
                      link.active
                        ? "font-semibold text-[#ED1C24] !text-[#ED1C24] oswald text-base"
                        : "text-[#202020] text-base !text-[#202020] font-medium oswald"
                    }
                  >
                    {link.name}
                  </Typography>
                </div>
              </Link>
            ))}
            <div className="custom-container py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-gray-100 mt-2">
              <Link
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-[#0F5AA6] text-white font-medium text-sm px-4 h-[50px] min-h-[50px] rounded-md oswald w-full sm:w-auto"
              >
                <img src="/moto/yavuzsan-otomotiv/contact.png" alt="User" className="w-4 h-4 object-contain brightness-0 invert shrink-0" />
                <span>Login / Register</span>
              </Link>
              <div className="flex items-center gap-2 border border-gray-200 rounded px-3 py-2 cursor-pointer w-fit bg-gray-50">
                <div className="w-5 h-5 rounded-full bg-[#ED1C24] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <img src="/moto/yavuzsan-otomotiv/map.png" alt="Globe" className="w-3 h-3 object-contain brightness-0 invert shrink-0" />
                </div>
                <span className="text-[#202020] text-sm oswald font-semibold">EN</span>
                <img src="/moto/yavuzsan-otomotiv/dwnarrow.png" alt="Dropdown" className="w-3 h-2 object-contain shrink-0" />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
