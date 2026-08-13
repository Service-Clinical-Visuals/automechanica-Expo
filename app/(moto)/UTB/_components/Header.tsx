"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, Phone, User, ShoppingCart } from "lucide-react";
import Container from "./Container";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Webshop", id: "webshop" },
  { name: "Products", id: "products" },
  { name: "About UTB", id: "about" },
  { name: "News", id: "news" },
  { name: "Marketing", id: "marketing" },
  { name: "Vaccancies", id: "vaccancies" },
  { name: "Contact", id: "contact" },
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
      <div className="h-[90px] sm:h-[100px] md:h-[80px] lg:h-[130px]  xl:h-[110px] bg-white 2xl:h-[140px] w-full shrink-0" aria-hidden="true" />
      <header
        className={`top-0 left-0 w-full block z-[100] transition-all duration-500 transform font-instrument ${isSticky || (mobileMenuOpen && !isTop)
          ? "fixed translate-y-0 opacity-100 shadow-md border-b border-gray-100 bg-[#F5F5F5]"
          : isTop
            ? "absolute translate-y-0 opacity-100 bg-[#F5F5F5]"
            : "fixed -translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        {/* Top Bar */}
        <div
          className={`bg-secondary text-white w-full block transition-all duration-300 overflow-hidden ${isTop || mobileMenuOpen ? "max-h-[100px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <Container className="flex items-center  justify-between h-auto py-2 text-xs sm:text-sm md:text-lg flex-wrap gap-y-2">
            {/* Left Info */}
            <div className="flex items-center gap-3 md:gap-6">
              <a href="tel:+31088-0202300" className="flex items-center gap-1 md:gap-2 hover:text-gray-200 transition-colors">
                <Phone size={14} className="md:w-4 md:h-4" /> <span className="hidden sm:inline">+31</span> 088-0202300
              </a>
              <a href="tel:+31088-0202300" className="flex items-center gap-1 md:gap-2 hover:text-gray-200 transition-colors hidden sm:flex">
                <Phone size={14} className="md:w-4 md:h-4" /> +31 088-0202300
              </a>
            </div>

            {/* Right Links */}
            <div className="flex items-center gap-3 md:gap-6">
              <Link href="#" className="flex items-center gap-1 md:gap-2 hover:text-gray-200 transition-colors border-r border-white/30 pr-3 md:pr-6">
                <User size={14} className="md:w-4 md:h-4" /> Login
              </Link>
              <Link href="#" className="flex items-center gap-1 md:gap-2 hover:text-gray-200 transition-colors">
                <ShoppingCart size={14} className="md:w-4 md:h-4" /> (0 items)
              </Link>
            </div>
          </Container>
        </div>

        {/* Main Navigation */}
        <div className="block relative bg-white z-10  w-full">
          <Container className="flex items-center justify-between w-full gap-4">
            {/* Logo Section (Left) */}
            <div className="flex-1 flex justify-start relative">
              <div className="absolute left-0 -top-8 sm:-top-10 lg:-top-[46px] z-20">
                <Link href="/" className="block hover:opacity-90 transition-opacity">
                  <img
                    src="/moto/UTB/logo.png"
                    alt="UTB Logo"
                    className="w-auto h-[60px] sm:h-[70px] md:h-[70px]  lg:h-[70px] xl:h-[70px] 2xl:h-[90px] object-contain object-top"
                  />
                </Link>
              </div>
            </div>

            {/* Desktop Navbar Links (Center) */}
            <div className="hidden xl:flex flex-[2]  justify-center">
              <nav className="flex items-center text-[#484848] space-x-4 2xl:space-x-8 text-lg">
                {navLinks.map((link) => {
                  const isActive = activeLink === link.id;
                  return (
                    <a
                      key={link.name}
                      href={`#${link.id}`}
                      className={`relative group transition-colors duration-200 cursor-pointer flex items-center hover:text-primary whitespace-nowrap ${isActive ? "text-primary font-bold" : ""}`}
                      onClick={(e) => handleScrollTo(e, link.id)}
                    >
                      <span>{link.name}</span>
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Right Action: Search Box (Right) */}
            <div className="flex-1 flex justify-end">
              <div className="hidden xl:flex items-center w-full max-w-[260px] 2xl:max-w-[300px] py-4 md:py-6">
                <div className="flex items-center border border-gray-300 overflow-hidden h-10 w-full focus-within:border-primary transition-colors bg-white">
                  <input
                    type="text"
                    placeholder="Search Products"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-0 outline-none text-sm text-dark placeholder-gray-400 w-full h-[90%] px-3"
                  />
                  <button className="bg-primary text-white px-6 h-full flex items-center justify-center hover:bg-primary-hover transition-colors font-medium text-sm">
                    Search
                  </button>
                </div>
              </div>

              {/* Mobile Menu Toggle Button */}
              <div className="py-4 md:py-6  xl:hidden">
                <button
                  className="text-primary p-2 hover:bg-gray-200 rounded-lg transition-colors flex items-center justify-center min-w-[44px] min-h-[44px]"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle Navigation Menu"
                >
                  {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
          </Container>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute bg-white  top-full left-0 w-full  shadow-2xl border-t border-gray-100  flex flex-col space-y-4  duration-300 max-h-[calc(100vh-70px)] overflow-y-auto text-primary font-medium">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  className={`border-b border-gray-200 mt-5 mb-5  block text-lg cursor-pointer ${isActive ? "text-secondary font-bold" : "hover:text-secondary"
                    }`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                >
                  {link.name}
                </a>
              );
            })}
            {/* Mobile Search Input */}
            <div className="pt-2 mb-5">
              <div className="flex items-center bg-white border border-gray-300 h-11 w-full rounded overflow-hidden pl-3 focus-within:border-primary transition-colors">
                <input
                  type="text"
                  placeholder="Search Products"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-0 outline-none text-sm text-dark placeholder-gray-400 w-full"
                />
                <button
                  type="button"
                  className="h-full px-5 bg-primary text-white flex items-center justify-center hover:bg-primary-hover transition-colors font-medium"
                >
                  Search
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
