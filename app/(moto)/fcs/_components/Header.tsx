"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Globe } from "lucide-react";
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
    { name: "Products", href: "#" },
    { name: "Tech Resources", href: "#" },
    { name: "News", href: "#" },
    { name: "Support", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Find a Part", href: "#" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 shadow-sm bg-white transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="py-1">
        <div className="custom-container">
          <div className="flex items-center justify-between">
            {/* Logo Area */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="#">
                <img src="/moto/fcs/logo.png" alt="FCS Auto Logo" className="h-auto w-auto object-contain" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-6 xl:gap-6 oswald-font">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`header-link transition-colors py-2 whitespace-nowrap oswald ${link.active
                    ? "text-[#F7941D] font-semibold"
                    : "text-[#4B5563] hover:text-[#F7941D] font-regular"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Action Icons */}
            <div className="hidden xl:flex items-center gap-2">
              <div className="flex items-center gap-2 text-[#272727]">
                <Phone size={20} className="text-[#163683]" />
                <span className="section-text font-regular oswald-font">(866) 708-4554</span>
              </div>
              <div className="border-1 border-[#E4E4E4] h-8"></div>
              <div className="flex items-center gap-2 text-[#272727]">
                <Globe size={20} className="text-[#163683]" />
                <span className="section-text font-regular oswald-font">EN</span>
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
                  <span className={`header-link oswald ${link.active
                    ? "text-[#F7941D] font-semibold"
                    : "text-[#4B5563] font-regular"
                    }`}>
                    {link.name}
                  </span>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
