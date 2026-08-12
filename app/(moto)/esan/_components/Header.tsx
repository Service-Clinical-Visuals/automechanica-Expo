"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Typography from "./Typography";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Corporate", id: "corporate" },
  { name: "Products", id: "products" },
  { name: "Dealers", id: "dealers" },
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
            ? "fixed translate-y-0 opacity-100 shadow-md bg-white"
            : "fixed translate-y-0 bg-white"
          }`}
      >
        <div className="h-[70px] sm:h-[80px] md:h-[90px] min-[2100px]:h-[120px] min-[3800px]:h-[160px] flex items-center relative z-10 border-b border-gray-100">
          <div className="custom-container flex items-center justify-between gap-4 xl:gap-5 w-full">
            <Link href="/" className="flex items-center shrink-0">
              <img
                src="/esan/logo1.png"
                alt="ESAN Logo"
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
                      className="relative z-10 cursor-pointer py-3 px-1 mx-2 flex flex-col items-center justify-center transition-colors group"
                    >
                      <Typography
                        variant="span"
                        color={isActive ? "primary" : "dark"}
                        className={`navbar tracking-wide transition-colors duration-300 group-hover:text-primary ${isActive ? "font-semibold" : ""
                          }`}
                      >
                        {link.name}
                      </Typography>
                    </a>
                  </div>
                );
              })}
            </nav>

            {/* Right Action: Language */}
            <div className="hidden xl:flex items-center shrink-0">
              <div className="flex items-center gap-2 border border-gray-300 rounded-[4px] px-3 py-1.5 min-[2100px]:px-5 min-[2100px]:py-2.5 min-[3800px]:px-6 min-[3800px]:py-3 cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition-all">
                <span className="text-[18px] min-[2100px]:text-[24px] min-[3800px]:text-[32px] leading-none">🇬🇧</span>
                <Typography variant="span" color="dark" className="font-semibold text-sm min-[2100px]:text-lg min-[3800px]:text-2xl">
                  ENG
                </Typography>
                <ChevronDown className="w-4 h-4 min-[2100px]:w-6 min-[2100px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 text-gray-700 ml-1" />
              </div>
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
          <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-70px)] overflow-y-auto border-t border-gray-100">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <div key={link.name} className="relative border-b border-gray-100">
                  <a
                    href={`#${link.id}`}
                    className="relative z-10 block cursor-pointer py-4 group"
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    <Typography
                      variant="span"
                      color={isActive ? "primary" : "dark"}
                      className={`navbar group-hover:text-primary transition-colors ${isActive ? "font-semibold" : ""
                        }`}
                    >
                      {link.name}
                    </Typography>
                  </a>
                </div>
              );
            })}
            <div className="pt-6 flex items-center">
              <div className="flex items-center gap-2 border border-gray-300 rounded-[4px] px-4 py-2 cursor-pointer hover:bg-gray-50">
                <span className="text-[18px] leading-none">🇬🇧</span>
                <Typography variant="span" color="dark" className="font-semibold text-sm">
                  ENG
                </Typography>
                <ChevronDown className="w-4 h-4 text-gray-700 ml-1" />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
