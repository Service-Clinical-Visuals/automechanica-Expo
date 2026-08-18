"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import Button from "./Button";
import Typography from "./Typography";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About us", id: "about" },
  { name: "Product", id: "products" },
  { name: "Media", id: "media" },
  { name: "News", id: "news" },
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
        className={`top-0 left-0 w-full z-50 transition-all duration-500 transform ${isSticky || mobileMenuOpen
          ? "fixed translate-y-0 opacity-100 shadow-md bg-[#39383B]"
          : "fixed translate-y-0 bg-[#39383B]"
          }`}
      >
        <div className="h-[70px] sm:h-[80px] md:h-[90px] min-[2100px]:h-[120px] min-[3800px]:h-[160px] flex items-center relative z-10">
          <div className="custom-container flex items-center justify-between gap-4 xl:gap-5 w-full">
            <Link href="/" className="flex items-center shrink-0">
              <img
                src="/moto/auto-gh/logo1.png"
                alt="Auto GH Logo"
                className="h-10 sm:h-12 md:h-16 min-[2100px]:h-20 min-[3800px]:h-28 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navbar Links */}
            <nav className="hidden xl:flex items-center space-x-4 2xl:space-x-8 shrink-0">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <div key={link.name} className="relative flex items-center justify-center">
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleScrollTo(e, link.id)}
                      className={`relative z-10 cursor-pointer py-3 px-1 mx-2 flex flex-col items-center justify-center transition-colors ${isActive ? "text-white font-semibold" : "text-white/70 hover:text-white"
                        }`}
                    >
                      <Typography variant="span" color={isActive ? "white" : "white"} className={`navbar tracking-wide ${isActive ? "font-semibold" : ""}`}>
                        {link.name}
                      </Typography>
                    </a>
                  </div>
                );
              })}
            </nav>

            {/* Right Action: Language */}
            <div className="hidden xl:flex items-center shrink-0 bg-[#404040] rounded-sm overflow-hidden min-[3800px]:rounded-md">
              <span className="text-white/80 text-sm min-[2100px]:text-lg min-[3800px]:text-2xl font-medium cursor-pointer hover:bg-[#4A4A4A] transition-colors px-4 py-2 min-[2100px]:px-6 min-[2100px]:py-3 min-[3800px]:px-8 min-[3800px]:py-4">POL</span>
              <span className="text-white text-sm min-[2100px]:text-lg min-[3800px]:text-2xl font-bold cursor-pointer bg-[#1A1A1A] px-4 py-2 min-[2100px]:px-6 min-[2100px]:py-3 min-[3800px]:px-8 min-[3800px]:py-4">ENG</span>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="xl:hidden text-black p-2 transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-[#39383B] shadow-2xl py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-70px)] overflow-y-auto border-t border-white/10">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <div key={link.name} className="relative border-b border-white/10">
                  <a
                    href={`#${link.id}`}
                    className={`relative z-10 block navbar cursor-pointer py-4 ${isActive ? "text-white font-semibold" : "text-white/70 hover:text-white"
                      }`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    <Typography variant="span" color="white" className={`navbar ${isActive ? "font-semibold" : ""}`}>
                      {link.name}
                    </Typography>
                  </a>
                </div>
              );
            })}
            <div className="pt-6 flex items-center justify-center">
              <div className="flex items-center bg-[#404040] rounded-sm overflow-hidden">
                <span className="text-white/80 text-sm font-medium cursor-pointer hover:bg-[#4A4A4A] transition-colors px-4 py-2">POL</span>
                <span className="text-white text-sm font-bold cursor-pointer bg-[#1A1A1A] px-4 py-2">ENG</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
