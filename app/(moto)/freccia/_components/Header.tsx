"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "./Button";
import Typography from "./Typography";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Company", id: "about" },
  { name: "Product", id: "products" },
  { name: "Service", id: "service" },
  { name: "Contact Us", id: "contact" },
];

const Header = () => {
  const [scrollState, setScrollState] = useState("hidden");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveLink(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const threshold = typeof window !== "undefined" ? window.innerHeight - 100 : 820;

      if (y < threshold) {
        setScrollState("hidden");
      } else {
        setScrollState("sticky");
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

  const isSticky = scrollState === "sticky";

  return (
    <>
      <header
        className={`top-0 left-0 w-full z-50 transition-all duration-500 transform bg-white shadow-sm ${isSticky || mobileMenuOpen
          ? "fixed translate-y-0 opacity-100"
          : "fixed -translate-y-full opacity-0"
          }`}
      >
        <div className="h-[70px] sm:h-[80px] md:h-[90px] flex items-center relative z-10">
          <div className="custom-container flex items-center justify-between w-full">
            {/* Logo Section */}
            <Link href="/" className="flex items-center shrink-0 w-[20%]">
              <img
                src="/moto/freccia/logo.png"
                alt="Freccia Logo"
                className="h-8 sm:h-10 md:h-14 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navbar Links */}
            <nav className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-10 w-[60%]">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <div key={link.name} className="relative flex items-center justify-center">
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleScrollTo(e, link.id)}
                      className={`relative z-10 cursor-pointer py-2 flex flex-col items-center justify-center transition-colors ${isActive ? "text-secondary" : "text-dark hover:text-secondary"
                        }`}
                    >
                      <Typography variant="span" className="navbar">
                        {link.name}
                      </Typography>
                      {isActive && (
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary" />
                      )}
                    </a>
                  </div>
                );
              })}
            </nav>

            {/* Right Action: Language + Buy Online */}
            <div className="hidden lg:flex items-center justify-end shrink-0 gap-4 w-[20%]">
              <div className="flex items-center gap-2 border border-primary px-3 py-1.5 rounded-md cursor-pointer hover:bg-gray-50 transition-colors">
                <span className="text-lg">🇬🇧</span>
                <ChevronDown className="w-4 h-4 text-primary" />
              </div>
              <Button text="Buy Online" showIcon={false} className="py-2.5 px-6 !rounded-md" />
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden text-primary p-2 transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-70px)] overflow-y-auto border-t border-gray-100">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <div key={link.name} className="relative border-b border-gray-100 pb-2">
                  <a
                    href={`#${link.id}`}
                    className={`relative z-10 block cursor-pointer py-2 ${isActive ? "text-secondary font-bold" : "text-dark hover:text-secondary"
                      }`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    <Typography variant="span" className="navbar">
                      {link.name}
                    </Typography>
                  </a>
                </div>
              );
            })}
            <div className="pt-4 flex flex-col gap-4">
              <div className="flex items-center gap-2 border border-primary w-max px-3 py-1.5 rounded-md cursor-pointer">
                <span className="text-lg">🇬🇧</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
              <Button text="Buy Online" showIcon={false} />
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
