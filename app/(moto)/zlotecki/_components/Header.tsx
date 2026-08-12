"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import Typography from "./Typography";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about" },
  { name: "Offer", id: "offer" },
  { name: "Quality", id: "quality" },
  { name: "News", id: "news" },
  { name: "Product Verifications", id: "product-verifications" },
  { name: "Downloads", id: "downloads" },
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
          ? "fixed translate-y-0 opacity-100 shadow-sm bg-white"
          : "fixed -translate-y-full opacity-0"
          }`}
      >
        <div className="h-[70px] sm:h-[80px] md:h-[90px] min-[3800px]:h-[140px] flex items-center relative z-10 border-b border-gray-100">
          <div className="custom-container flex items-center justify-between gap-4 xl:gap-5 min-[3800px]:gap-12 w-full">
            {/* Logo Section */}
            <Link href="/" className="flex items-center shrink-0">
              <img
                src="/zlotecki/logo.png"
                alt="Zlotecki Logo"
                className="h-10 sm:h-12 md:h-14 min-[3800px]:h-24 w-auto object-contain"
                onError={(e) => { e.currentTarget.src = "/moto/ampro/logo.png"; }}
              />
            </Link>

            {/* Desktop Navbar Links */}
            <nav className="hidden xl:flex items-center space-x-2 2xl:space-x-3 min-[3800px]:space-x-8 shrink-0">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <div key={link.name} className="relative flex items-center justify-center">
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleScrollTo(e, link.id)}
                      className={`relative z-10 cursor-pointer py-3 px-1 mx-2 flex flex-col items-center justify-center transition-colors ${isActive ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                        }`}
                    >
                      <span className="navbar tracking-wide">
                        {link.name}
                      </span>
                      {isActive && (
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary min-[3800px]:h-[4px]" />
                      )}
                    </a>
                  </div>
                );
              })}
            </nav>

            {/* Right Action: Composite Buttons */}
            <div className="hidden xl:flex items-center shrink-0 gap-[1px]">
              {/* PL Button */}
              <a href="#" className="flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary-hover transition-colors px-4 py-2.5 min-[3800px]:px-8 min-[3800px]:py-5 rounded-tl-[16px] min-[3800px]:rounded-tl-[32px]">
                {/* Fallback EU Text if image doesn't exist */}
                <div className="flex items-center justify-center bg-blue-700 w-5 h-5 rounded-full text-[8px] min-[3800px]:w-10 min-[3800px]:h-10 min-[3800px]:text-[16px] font-bold overflow-hidden border border-white/20">
                  <img src="/zlotecki/eu.png" alt="EU" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                </div>
                <span className="button text-sm min-[3800px]:text-2xl">PL</span>
              </a>
              {/* Contacts Button */}
              <a href="#contacts" className="flex items-center justify-center bg-primary text-white hover:bg-primary-hover transition-colors px-6 py-2.5 min-[3800px]:px-12 min-[3800px]:py-5 rounded-br-[16px] min-[3800px]:rounded-br-[32px]">
                <span className="button text-sm min-[3800px]:text-2xl">Contacts</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="xl:hidden text-primary p-2 transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-70px)] overflow-y-auto border-t border-gray-100">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <div key={link.name} className="relative border-b border-gray-100">
                  <a
                    href={`#${link.id}`}
                    className={`relative z-10 block navbar cursor-pointer py-4 ${isActive ? "text-primary font-semibold" : "text-foreground hover:bg-gray-50"
                      }`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    {link.name}
                  </a>
                </div>
              );
            })}
            <div className="pt-6 flex items-center justify-center gap-[1px]">
              <a href="#" className="flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary-hover px-4 py-3 rounded-tl-[16px]">
                <span className="button text-sm">PL</span>
              </a>
              <a href="#contacts" className="flex items-center justify-center bg-primary text-white hover:bg-primary-hover px-6 py-3 rounded-br-[16px]">
                <span className="button text-sm">Contacts</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
