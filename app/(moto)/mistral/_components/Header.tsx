"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import Button from "./Button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling half the viewport height (half of banner video)
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
    { name: "Company", href: "#" },
    { name: "Products", href: "#" },
    { name: "Download", href: "#" },
    { name: "Contacts", href: "#" },
    { name: "Area Clienti", href: "#" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 shadow-md bg-white transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      {/* Top Bar */}
      <div className="bg-[#0D3374] text-white py-2 hidden md:block">
        <div className="custom-container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <img src="/moto/mistral/phone-call.png" alt="" className="w-4 h-4" />
              <span className="oswald header-sublink font-normal">+39 0331.534695</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/moto/mistral/printer.png" alt="" className="w-4 h-4" />
              <span className="oswald header-sublink font-normal">+39 0331.534678</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/moto/mistral/mail.png" alt="" className="w-4 h-4" />
              <span className="oswald header-sublink font-normal">info@campi.eu</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[1px] h-[18px] bg-white"></div>
            <span className="oswald header-sublink font-normal">Translate:</span>
            <img src="/moto/mistral/flag1.png" alt="Italy Flag" className="h-[16px] w-auto cursor-pointer" />
            <img src="/moto/mistral/flag2.png" alt="UK Flag" className="h-[16px] w-auto cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={`transition-all duration-300 ${isVisible ? 'py-4' : 'py-5'}`}>
        <div className="custom-container">
          <div className="flex items-center justify-between">
            {/* Logo Area */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="#">
                <img src="/moto/mistral/logo 1.png" alt="Mistral Logo" className="w-[150px] md:w-[160px] h-auto object-contain" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-4 xl:gap-8 oswald-font">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`header-link transition-colors py-2 whitespace-nowrap oswald ${
                    link.active
                      ? "text-[#0D3374] font-semibold"
                      : "text-[#333333] hover:text-[#0D3374] font-normal hover:font-semibold"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Register Button */}
            <div className="oswald hidden xl:flex items-center">
              <Button href="#" variant="primary">
                Register
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className=" oswald xl:hidden flex items-center gap-4">
               <Button href="#" variant="primary" >
                 Register
               </Button>
              <button 
                className="text-[#0D3374] focus:outline-none"
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
          <nav className="flex flex-col py-2 oswald-font">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-6 py-4 border-b border-gray-100 last:border-0 ${
                  link.active
                    ? "text-[#0D3374] font-bold oswald"
                    : "text-[#0D3374] hover:text-blue-800 font-semibold oswald"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Contact & Translate Info (Hidden on iPad/Desktop since Top Bar handles it) */}
            <div className="md:hidden bg-[#0D3374] text-white px-6 py-5 flex flex-col gap-4 mt-2">
              <div className="flex items-center justify-between pb-4 border-b border-white/20">
                <span className="oswald font-semibold header-sublink">Translate:</span>
                <div className="flex items-center gap-3">
                  <img src="/moto/mistral/flag1.png" alt="Italy Flag" className="h-5 w-auto cursor-pointer" />
                  <img src="/moto/mistral/flag2.png" alt="UK Flag" className="h-5 w-auto cursor-pointer" />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <img src="/moto/mistral/phone-call.png" alt="" className="w-4 h-4" />
                  <span className="oswald header-sublink font-normal">+39 0331.534695</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/moto/mistral/printer.png" alt="" className="w-4 h-4" />
                  <span className="oswald header-sublink font-normal">+39 0331.534678</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/moto/mistral/mail.png" alt="" className="w-4 h-4" />
                  <span className="oswald header-sublink font-normal">info@campi.eu</span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
