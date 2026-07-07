"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import Typography from "./Typography";
import Container from "./Container";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about" },
  { name: "Product", id: "product" },
  { name: "Automotive", id: "automotive" },
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
          ? "fixed translate-y-0 opacity-100 shadow-md bg-primary ]"
          : "fixed -translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        <div className="h-[60px] sm:h-[70px] md:h-[85px] flex items-center relative z-10">
          <Container className="flex items-center justify-between gap-4 lg:gap-8 w-full">
            {/* Logo Section */}
            <Link href="/" className="flex items-center shrink-0">
              <img
                src="/moto/tesla/logo1.png"
                alt="Tesla Logo"
                className="h-7 sm:h-8 md:h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navbar Links */}
            <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-10 shrink-0">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <div key={link.name} className="relative flex items-center justify-center">
                    {isActive && (
                      <div className="absolute inset-0 bg-white skew-x-[-20deg] transform scale-y-80 shadow-sm" />
                    )}
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleScrollTo(e, link.id)}
                      className={`relative z-10 cursor-pointer py-1.5 px-4 flex items-center justify-center ${isActive ? "text-[var(--color-primary)]" : "text-white hover:text-gray-200"
                        }`}
                    >
                      <span
                        className="navbar font-semibold transition-colors"
                        style={{ fontFamily: 'var(--font-iceland)' }}
                      >
                        {link.name}
                      </span>
                    </a>
                  </div>
                );
              })}
            </nav>

            {/* Right Action: Search */}
            <div className="hidden xl:flex items-center shrink-0">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search Product"
                  className="px-4 py-2 outline-none text-black font-urbanist w-[200px] rounded-md bg-white"
                />
                <button className="bg-white px-3 py-2 flex items-center justify-center rounded-md hover:bg-gray-50 transition-colors">
                  <Search className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="xl:hidden text-white p-2 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </Container>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-[var(--color-primary)] shadow-2xl py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-70px)] overflow-y-auto border-t border-white/20">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <div key={link.name} className="relative">
                  {isActive && (
                    <div className="absolute inset-0 bg-white skew-x-[-15deg] rounded-sm shadow-sm" />
                  )}
                  <a
                    href={`#${link.id}`}
                    className={`relative z-10 block navbar font-semibold cursor-pointer p-3 ${isActive ? "text-[var(--color-primary)] pl-6" : "text-white hover:bg-white/10 rounded-md"
                      }`}
                    style={{ fontFamily: 'var(--font-iceland)' }}
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    {link.name}
                  </a>
                </div>
              );
            })}
            <div className="pt-4 flex gap-2">
              <input
                type="text"
                placeholder="Search Product"
                className="px-4 py-3 outline-none text-black font-urbanist w-full rounded-md bg-white"
              />
              <button className="bg-white px-4 py-3 flex items-center justify-center rounded-md hover:bg-gray-50 transition-colors">
                <Search className="w-6 h-6 text-primary" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
