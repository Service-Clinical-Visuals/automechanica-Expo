"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Container from "./Container";

const navLinks = [
  { label: "Home" },
  { label: "About us" },
  { label: "Products" },
  { label: "News" },
  { label: "Contact Us" },
];

export default function Header() {
  const [activeNav, setActiveNav] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "pt-0" : "pt-3 sm:pt-4"}`}>
      <Container className={`!px-0 transition-all duration-300 ${isScrolled ? "!max-w-full" : "!max-w-[95%]"}`}>
        <div className={`bg-white overflow-hidden transition-all duration-300 ${isScrolled ? "rounded-none border-b border-gray-300 shadow-sm" : "rounded-tl-[36px] rounded-br-[36px] rounded-tr-none rounded-bl-none border border-gray-300"}`}>
          <div className="flex items-center h-[64px] sm:h-[72px] px-4 sm:px-6 lg:px-10">
            {/* Logo */}
            <div className="flex items-center shrink-0">
              <img src="/moto/ftaza/logo.png" alt="FTAZA INDUSTRIAL" className="h-auto w-auto" />
            </div>

            {/* Desktop Nav — centered in the remaining space */}
            <nav className="hidden lg:flex flex-1 items-center justify-center gap-4 xl:gap-8 ml-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => setActiveNav(link.label)}
                  className={`font-oswald whitespace-nowrap tracking-wide text-[17px] transition-colors ${activeNav === link.label
                    ? "text-[#062AAA] font-semibold  underline underline-offset-4 decoration-2 decoration-[#062AAA]"
                    : "text-[#4A4A4A] hover:text-[#062AAA] font-regular "
                    }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <button
              type="button"
              aria-label="Contact"
              className="hidden lg:flex font-oswald font-regular text-[17px] items-center bg-[#062AAA] justify-center px-6 py-2 text-white hover:bg-blue-800 transition-colors ml-auto"
            >
              Get in Touch
              <ArrowRight size={18} className="ml-2" />
            </button>

            {/* Mobile hamburger */}
            <div className="flex lg:hidden items-center ml-auto">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-black p-1"
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="lg:hidden border-t border-gray-100 bg-white">
              <nav className="flex flex-col px-6 py-4 gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => { setActiveNav(link.label); setMenuOpen(false); }}
                    className={`font-oswald text-left py-3 text-[17px] font-semibold tracking-wide border-b border-gray-100 transition-colors ${activeNav === link.label
                      ? "text-[#062AAA]"
                      : "text-gray-700 hover:text-[#062AAA]"
                      }`}
                  >
                    {link.label}
                  </button>
                ))}
                <div className="mt-4 flex items-center overflow-hidden">
                  <button
                    type="button"
                    className="flex w-full font-oswald font-medium text-[17px] items-center bg-[#062AAA] justify-center px-6 py-3 text-white hover:bg-blue-800 transition-colors"
                  >
                    Get in Touch
                    <ArrowRight size={18} className="ml-2" />
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
