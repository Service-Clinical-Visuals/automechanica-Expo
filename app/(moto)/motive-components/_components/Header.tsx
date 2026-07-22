"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import Button from "./Button";
import Typography from "./Typography";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Products", id: "products" },
  { name: "New Development", id: "development" },
  { name: "Quality", id: "quality" },
  { name: "News", id: "news" },
  { name: "Contact", id: "contact" },
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
        <div className="h-[70px] sm:h-[80px] md:h-[90px] 2xl:h-[100px] flex items-center relative z-10">
          <div className="custom-container flex items-center justify-between gap-4 xl:gap-8 2xl:gap-12 w-full">
            {/* Logo Section */}
            <Link href="/" className="flex items-center shrink-0">
              <img
                src="/moto/motive-components/logo1.png"
                alt="Motive Components Logo"
                className="h-8 sm:h-10 md:h-11 lg:h-12 2xl:h-16 w-auto object-contain transition-all duration-300"
              />
            </Link>

            {/* Desktop Navbar Links */}
            <nav className="hidden xl:flex items-center space-x-2 2xl:space-x-6 shrink-0">
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
                      <Typography variant="p" color={isActive ? "secondary" : "white"} className="navbar transition-colors group-hover:text-secondary">
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

            {/* Right Action: E-CAT & Language */}
            <div className="hidden xl:flex items-center shrink-0 gap-6 2xl:gap-8">
              <Button text="E-CAT" href="#" showIcon={false} className="!py-2 !px-6 2xl:!py-3 2xl:!px-8 rounded-md 2xl:text-lg" />
              
              <div className="flex items-center gap-1 cursor-pointer text-white hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-secondary 2xl:w-6 2xl:h-6"><path d="M5 8l6 6"/><path d="M4 14l6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="M22 22l-5-10-5 10"/><path d="M14 18h6"/></svg>
                <Typography variant="p" color="white" className="font-bold text-sm 2xl:text-base tracking-wide group-hover:text-secondary">
                  EN
                </Typography>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 text-secondary 2xl:w-5 2xl:h-5"><path d="m6 9 6 6 6-6"/></svg>
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
            {/* Mobile Nav Right Action */}
            <div className="pt-6 flex flex-col items-center gap-4 border-t border-white/10 mt-2">
               <Button text="E-CAT" href="#" showIcon={false} className="w-full justify-center !py-3 rounded-md" />
               <div className="flex items-center gap-2 cursor-pointer text-white mt-4">
                  <Typography variant="p" color="white" className="font-bold text-lg tracking-wide">
                    LANGUAGE: EN
                  </Typography>
               </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
