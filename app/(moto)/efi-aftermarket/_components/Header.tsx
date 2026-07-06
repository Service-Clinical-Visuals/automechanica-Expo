"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import Button from "./Button";
import Typography from "./Typography";
import Container from "./Container";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Our Ranges", id: "our-ranges" },
  { name: "Resources", id: "resources" },
  { name: "News", id: "news" },
  { name: "Discover Our Company", id: "about" },
  { name: "Our Other Plants", id: "plants" },
  { name: "Careers", id: "careers" },
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
      el.scrollIntoView({ behavior: "smooth" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const threshold = typeof window !== "undefined" ? window.innerHeight : 820;

      if (y < 150) {
        setScrollState("top");
      } else if (y < threshold) {
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

  const isTop = scrollState === "top";
  const isSticky = scrollState === "sticky";

  return (
    <>
      <div className="h-[110px] sm:h-[118px] md:h-[140px] w-full shrink-0" aria-hidden="true" />
      <header
        className={`top-0 left-0 w-full z-50 transition-all duration-500 transform ${isTop
          ? "absolute translate-y-0 opacity-100"
          : (isSticky || mobileMenuOpen)
            ? "fixed translate-y-0 opacity-100 shadow-md border-b border-gray-100 bg-white"
            : "fixed -translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        {/* 1. Black Top Bar */}
        <div
          className={`bg-[var(--color-secondary)] text-white transition-all duration-300 overflow-hidden relative w-full ${isTop || mobileMenuOpen ? "h-10 sm:h-12 opacity-100" : "h-0 opacity-0"
            }`}
        >
          <Container className="flex items-center h-full relative w-full">
            {/* Centered Text */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 sm:gap-8 whitespace-nowrap w-full sm:w-auto justify-center px-4">
              <div className="navbar ">
                Aftermarket Activity
              </div>
              <div className="hidden na md:block  ">
                Industrialization of innovative projects
              </div>
            </div>

            {/* Right-aligned Search */}
            <div className="ml-auto hidden sm:flex items-center border-b border-white pb-1 w-35 md:w-[20%] z-10">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent border-none outline-none text-xs md:text-sm text-white placeholder-white w-full"
              />
              <Search className="w-3.5 h-3.5 md:w-5 md:h-5 text-white shrink-0 cursor-pointer transition-colors" />
            </div>
          </Container>
        </div>

        {/* 2. Main Navigation Bar */}
        <div className="h-[70px] sm:h-[80px] md:h-[95px] flex items-center relative z-10 bg-white">
          <Container className="flex items-center justify-between gap-4 lg:gap-8 w-full">
            {/* Logo Section */}
            <Link href="/" className="flex items-center shrink-0">
              <img
                src="/moto/efi-aftermarket/logo.png"
                alt="EFI Aftermarket Logo"
                className="h-10 sm:h-12 md:h-20 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navbar Links */}
            <nav className="hidden xl:flex items-center space-x-8 shrink-0">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className="relative group transition-colors duration-200 cursor-pointer py-2"
                  >
                    <Typography
                      variant="p"
                      color="dark"
                      className={`navbar  transition-colors ${isActive ? "text-[var(--color-primary)]" : "text-black hover:text-[var(--color-primary)]"}`}
                    >
                      {link.name}
                    </Typography>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--color-primary)]" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action: Button */}
            <div className="hidden lg:flex items-center shrink-0">
              <Button text="Contact Us" variant="primary" className="py-2.5 px-6" />
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="xl:hidden text-gray-800 p-2 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </Container>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-70px)] overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  className={`border-b border-gray-50 pb-3 block navbar font-medium cursor-pointer ${isActive ? "text-[var(--color-primary)]" : "text-gray-600 hover:text-[var(--color-primary)]"
                    }`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2">
              <Button text="Contact Us" variant="primary" className="w-full" />
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
