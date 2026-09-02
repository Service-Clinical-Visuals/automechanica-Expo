"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "History", id: "history" },
  { name: "Products", id: "products" },
  { name: "Dates", id: "dates" },
  { name: "Contact", id: "contact" },
];

const Header = () => {
  const [scrollState, setScrollState] = useState("top");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveLink(id);
    const el = document.getElementById(id);
    if (el) {
      // Offset by header height
      const headerOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollState("scrolled");
      } else {
        setScrollState("top");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isScrolled = scrollState === "scrolled";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white ${
          isScrolled ? "shadow-md py-1" : "py-2"
        }`}
      >
        <div className="custom-container flex items-center justify-between gap-4 xl:gap-5 w-full">
          {/* Logo Section */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/moto/koch/logo.png"
              alt="Koch Logo"
              className="h-12 sm:h-16 md:h-[75px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Navbar Links */}
          <nav className="hidden xl:flex items-center space-x-2 2xl:space-x-6 shrink-0">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`navbar px-2 py-2 transition-colors relative group ${
                    isActive ? "text-primary font-bold" : "text-gray-500 hover:text-primary"
                  }`}
                >
                  {link.name}
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary transition-transform origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`} 
                  />
                </a>
              );
            })}
          </nav>

          {/* Right Action: Language Button */}
          <div className="hidden xl:flex items-center shrink-0">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-md px-4 py-2 cursor-pointer shadow-sm hover:bg-gray-50 transition-colors">
              <span className="text-lg leading-none">🇪🇸</span>
              <span className="navbar text-gray-700">Languages</span>
              <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="xl:hidden text-gray-800 p-2 transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-70px)] overflow-y-auto border-t border-gray-100">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  className={`block navbar py-3 border-b border-gray-100 ${
                    isActive ? "text-primary font-bold" : "text-gray-600 hover:text-primary"
                  }`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-4 flex flex-col items-start gap-4">
               <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-md px-4 py-2 w-full justify-center shadow-sm">
                  <span className="text-lg leading-none">🇪🇸</span>
                  <span className="navbar text-gray-700">Languages</span>
                  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
