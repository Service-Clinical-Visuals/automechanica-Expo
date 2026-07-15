"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import Button from "./Button";
import Typography from "./Typography";

const navLinks = [
  { name: "HOME", id: "home" },
  { name: "ABOUT US", id: "about" },
  { name: "PRODUCTS", id: "products" },
  { name: "SUSTAINABILITY", id: "sustainability" },
  { name: "NEWS", id: "news" },
  { name: "MORE", id: "more" },
  { name: "CONTACT", id: "contact" },
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
          ? "fixed translate-y-0 opacity-100 shadow-md bg-primary"
          : "fixed -translate-y-full opacity-0"
          }`}
      >
        <div className="h-[70px] sm:h-[80px] md:h-[90px] flex items-center relative z-10">
          <div className="custom-container flex items-center justify-between gap-4 xl:gap-5 w-full">
            {/* Logo Section */}
            <Link href="/" className="flex items-center shrink-0">
              <img
                src="/moto/ampro/logo.png"
                alt="Ampro Logo"
                className="h-10 sm:h-12 md:h-[15%] w-auto object-contain"
              />
            </Link>

            {/* Desktop Navbar Links */}
            <nav className="hidden xl:flex items-center space-x-2 2xl:space-x-3 shrink-0">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <div key={link.name} className="relative flex items-center justify-center">
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleScrollTo(e, link.id)}
                      className={`relative z-10 cursor-pointer py-3 px-1 mx-2 flex flex-col items-center justify-center transition-colors ${isActive ? "text-secondary" : "text-white hover:text-secondary"
                        }`}
                    >
                      <span className="navbar uppercase tracking-wide">
                        {link.name}
                      </span>
                      {isActive && (
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary" />
                      )}
                    </a>
                  </div>
                );
              })}
            </nav>

            {/* Right Action: Contact */}
            <div className="hidden xl:flex items-center shrink-0 gap-5">
              <Search className="w-6 h-6 text-white hover:text-secondary cursor-pointer transition-colors" strokeWidth={2.5} />
              <div className="flex flex-col border-l border-white/30 pl-5">
                <Typography variant="h6" color="white" className="font-bold uppercase leading-tight tracking-wider">
                  CONTACT US
                </Typography>
                <Typography variant="h4" color="secondary" className="font-bold tracking-wide">
                  +49 22412326685
                </Typography>
              </div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="xl:hidden text-white p-2 transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-primary shadow-2xl py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-70px)] overflow-y-auto border-t border-white/10">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <div key={link.name} className="relative border-b border-white/5">
                  <a
                    href={`#${link.id}`}
                    className={`relative z-10 block navbar cursor-pointer py-4 ${isActive ? "text-secondary" : "text-white hover:bg-white/5"
                      }`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    {link.name}
                  </a>
                </div>
              );
            })}
            <div className="pt-6 flex flex-col items-center gap-4">
               <Typography variant="span" color="white" className="font-bold text-sm uppercase leading-tight tracking-wider text-center">
                  CONTACT US
                </Typography>
                <Typography variant="span" color="secondary" className="font-bold text-lg tracking-wide text-center">
                  +49 22412326685
                </Typography>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
