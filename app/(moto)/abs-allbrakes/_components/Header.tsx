"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import Typography from "./Typography";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Company", id: "company" },
  { name: "Products", id: "products" },
  { name: "Supply Chain", id: "supply-chain" },
  { name: "FAQ", id: "faq" },
  { name: "Blog", id: "blog" },
  { name: "Careers", id: "careers" },
];

const Header = () => {
  const [scrollState, setScrollState] = useState("top");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
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
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          const threshold = typeof window !== "undefined" ? window.innerHeight * 0.8 : 800;

          if (y < 80) {
            setScrollState((prev) => (prev !== "top" ? "top" : prev));
          } else if (y < threshold) {
            setScrollState((prev) => (prev !== "hidden" ? "hidden" : prev));
          } else {
            setScrollState((prev) => (prev !== "sticky" ? "sticky" : prev));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
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

  const isTop = scrollState === "top";
  const isHidden = scrollState === "hidden";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isTop
        ? "translate-y-0 opacity-100"
        : isHidden && !mobileMenuOpen
          ? "-translate-y-full pointer-events-none opacity-0"
          : "translate-y-0 opacity-100"
        }`}
    >
      {/* 
        Header Wrapper: 
        Boxed (custom-container) when at top, Full-width when scrolled/sticky.
      */}
      <div className={`mx-auto transition-all duration-500 ${isTop ? "custom-container pt-4" : "w-full px-0"}`}>
        <div
          className={`w-full relative z-10 flex items-center bg-[#1c1c1c] transition-all duration-500 shadow-2xl
          ${isTop ? "h-[70px] sm:h-[80px] md:h-[88px] rounded-2xl" : "h-[60px] sm:h-[68px] rounded-none"}
        `}
        >
          <div className={`flex items-center justify-between h-full relative z-10 transition-all duration-500 mx-auto w-full
            ${isTop ? "pr-4 lg:pr-6 pl-20 sm:pl-28 lg:pl-32" : "custom-container pr-4 lg:pr-6 pl-16 sm:pl-20 lg:pl-24"}
          `}>
            {/*
              Logo Section
              Fits normally inside the header. No overlapping.
            */}
            <div
              className={`absolute transition-all duration-500 ease-in-out z-50 top-1/2 -translate-y-1/2
              ${isTop
                  ? "left-4 sm:left-6 lg:left-8 w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
                  : "left-4 sm:left-6 lg:left-8 w-[40px] h-[40px] md:w-[60px] md:h-[70px]"
                }
            `}
            >
              <Link
                href="/abs-allbrakes"
                className="block relative w-full h-full hover:scale-105 transition-transform duration-300"
              >
                <img
                  src="/moto/abs-allbrakes/logo.png"
                  alt="ABS Logo"
                  className="absolute inset-0 w-full h-full  object-contain"
                />
              </Link>
            </div>

            {/* Centered Desktop Navbar Links */}
            <nav className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-2 xl:space-x-8">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className="group relative px-2 py-1 flex flex-col items-center justify-center cursor-pointer"
                  >
                    <Typography
                      variant="h5"
                      color={isActive ? "primary" : "white"}
                      weight="bold"
                      className={`leading-none tracking-wide font-oswald transition-colors 
                        ${isActive
                          ? "underline underline-offset-4 decoration-2"
                          : "hover:text-[var(--color-primary)]"
                        }
                      `}
                    >
                      {link.name}
                    </Typography>
                  </a>
                );
              })}
            </nav>

            {/* Right Action: Slanted Search Box resembling a button */}
            <div className="hidden lg:flex items-center ml-auto">
              <div className="relative flex items-center bg-[var(--color-primary)] h-[38px] md:h-[44px] px-4 transform -skew-x-[20deg] shadow-md group">
                <div className="relative z-10 flex items-center justify-between w-[160px] xl:w-[200px] transform skew-x-[20deg]">
                  <input
                    type="text"
                    placeholder="Search Here..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-0 font-oswald outline-none text-[14px] xl:text-[15px] text-white placeholder-white w-full h-full tracking-wider"
                  />
                  <button className="shrink-0 text-white hover:scale-110 transition-transform ml-2">
                    <Search size={22} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden self-center text-white p-2 hover:bg-white/10 rounded-lg transition-colors mr-4"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute z-40 top-[70px] left-0 w-full bg-[#1c1c1c] shadow-2xl border-t border-gray-800 py-6 px-6 flex flex-col space-y-4 animate-in slide-in-from-top duration-300 max-h-[calc(100vh-70px)] overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <a
                key={link.name}
                href={`#${link.id}`}
                className={`border-b border-gray-800 pb-3 block font-oswald text-lg tracking-widest cursor-pointer uppercase ${isActive ? "text-[var(--color-primary)] underline underline-offset-4" : "text-white hover:text-[var(--color-primary)]"
                  }`}
                onClick={(e) => handleScrollTo(e, link.id)}
              >
                {link.name}
              </a>
            );
          })}
          {/* Mobile Search Input */}
          <div className="pt-2">
            <div className="flex items-center bg-[#111111] border border-gray-800 pl-4 h-11 w-full rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Search Here..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-0 outline-none text-sm text-white placeholder-gray-400 w-full font-lato"
              />
              <button
                type="button"
                className="h-full px-5 bg-[var(--color-primary)] text-white flex items-center justify-center hover:bg-[var(--color-primary-hover)] transition-colors"
              >
                <Search size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;