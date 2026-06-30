"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, Facebook, Instagram, Youtube, Linkedin, Search } from "lucide-react";
import Button from "./Button";
import Typography from "./Typography";
import Container from "./Container";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Products", id: "products" },
  { name: "Technology, Innovations And Design", id: "technology" },
  { name: "About Us", id: "about" },
  { name: "Contact", id: "footer" },
];

const Header = () => {
  const [scrollState, setScrollState] = useState("top");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLink, setActiveLink] = useState("home");
  const pathname = usePathname();

  // Scroll spy or click handler
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
      // Show sticky header after scrolling past the full height of the Hero section (100vh)
      const threshold = typeof window !== "undefined" ? window.innerHeight : 820;

      if (y < 150) {
        setScrollState("top");
      } else if (y < threshold) {
        setScrollState("hidden");
      } else {
        setScrollState("sticky");
      }
    };

    handleScroll(); // Initial check
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
      {/* Spacer to push content down so header doesn't overlay the hero section initially */}
      <div className="h-[110px]  mt-[-0.3vh] sm:h-[118px] md:h-[118px] xl:h-[120px] w-full shrink-0" aria-hidden="true" />
      <header
        className={`top-0 left-0 w-full z-50 transition-all duration-500 transform ${isTop || mobileMenuOpen
          ? "absolute translate-y-0 opacity-100"
          : isSticky
            ? "fixed -translate-y-1 opacity-100 shadow-md "
            : "fixed -translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        {/* 1. Black Top Bar */}
        <div
          className={`bg-[#181818] text-[#cccccc] border-b border-[#2a2a2a] transition-all duration-300 overflow-hidden ${isTop || mobileMenuOpen ? "h-10 opacity-100" : "h-0 opacity-0"
            }`}
        >
          <Container className="flex font-manrope items-center justify-between leading-relaxed tracking-wide h-full text-[10px] sm:text-xs md:text-sm lg:text-[16px]">
            {/* Contact Details */}
            <div className="flex items-center gap-3 sm:gap-6 md:gap-8">
              <a
                href="tel:+38622302880"
                className="flex items-center gap-1 sm:gaptext-white transition-colors"
              >
                <Phone className="w-5 h-5 shrink-0" />
                <span className="whitespace-nowrap text-white ">+386 2 230 28 80</span>
              </a>
              <a
                href="mailto:Info@Mapetrol.Si"
                className="hidden min-[380px]:flex items-center gap-1 sm:gap-2 text-white transition-colors"
              >
                <Mail className="w-5 h-5 shrink-0" />
                <span className="whitespace-nowrap">Info@Mapetrol.Si</span>
              </a>
            </div>

            {/* Right Side Info */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <a href="#" className="text-white transition-colors">
                LOGIN
              </a>
              <div className="w-[1px] h-3.5 bg-gray-600"></div>
              <div className="flex items-center gap-1 text-white transition-colors cursor-pointer">
                EN
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
              </div>
            </div>
          </Container>
        </div>

        {/* 2. Main Navigation Bar */}
        <div className="h-[70px] sm:h-[80px] md:h-[75px] flex items-center relative z-10 bg-[#272727]">
          <Container className="flex items-center justify-between gap-4 lg:gap-8 w-full">
            {/* Logo Section */}
            <Link href="/mapetrol" className="flex items-center shrink-0">
              <img
                src="/moto/mapetrol/logo.png"
                alt="Mapetrol Logo"
                className="h-6 sm:h-8 md:h-8 xl:h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navbar Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-6 shrink-0 font-orbitron">
              {navLinks.map((link) => {
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    className="relative group transition-colors duration-200 cursor-pointer flex items-center gap-1"
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    <div className="py-2 px-1 flex items-center justify-center">
                      <Typography
                        variant="h6"
                        color="white"
                        className="font-orbitron navbar tracking-wide hover:text-gray-300 transition-colors"
                      >
                        {link.name}
                      </Typography>
                    </div>
                    {link.name === 'Products' && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5"><path d="m6 9 6 6 6-6" /></svg>
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action: Search Box */}
            <div className="hidden lg:flex items-center w-[180px] lg:w-[220px] xl:w-[260px] 2xl:w-[280px] shrink-0">
              <div className="flex items-center bg-[#606060] pl-3 pr-2 overflow-hidden h-[34px] xl:h-[40px] w-full border border-gray-500 rounded-sm">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-0 font-orbitron outline-none text-[13px] xl:text-[15px] text-white placeholder-gray-300 w-full h-full"
                />
                <button
                  type="button"
                  className="h-full flex items-center justify-center text-white opacity-90 hover:opacity-100 transition-opacity"
                >
                  <Search size={16} strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden text-white p-2 hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </Container>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#181818] shadow-2xl border-t border-[#3a3a3a] py-6 px-6 flex flex-col space-y-4 animate-in slide-in-from-top duration-300 max-h-[calc(100vh-70px)] sm:max-h-[calc(100vh-80px)] md:max-h-[calc(100vh-90px)] overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  className={`border-b border-[#3a3a3a] pb-3 block font-orbitron text-sm md:text-base font-medium tracking-wide cursor-pointer ${isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                >
                  {link.name.toUpperCase()}
                </a>
              );
            })}
            {/* Mobile Search Input */}
            <div className="pt-2">
              <div className="flex items-center bg-[#2a2a2a] border border-[#484848] pl-4 h-11 w-full rounded-md overflow-hidden">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent font-orbitron border-0 outline-none text-sm text-white placeholder-gray-400 w-full"
                />
                <button
                  type="button"
                  className="h-full px-5 bg-[#484848] text-white flex items-center justify-center hover:bg-[#5a5a5a] transition-colors"
                >
                  <Search size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
