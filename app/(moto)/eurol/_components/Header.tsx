"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, Globe, MapPin } from "lucide-react";
import Container from "./Container";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Product Range", id: "product-range" },
  { name: "Markets", id: "markets" },
  { name: "Specialty", id: "specialty" },
  { name: "Cases", id: "cases" },
  { name: "Services", id: "services" },
  { name: "Product Advisors", id: "product-advisors" },
  { name: "Points of Sales", id: "points-of-sales" },
];

const Header = () => {
  const [scrollState, setScrollState] = useState("top");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLink, setActiveLink] = useState("home");
  const pathname = usePathname();

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
      <div className="h-[110px] eurol-root sm:h-[118px] md:h-[100px] lg:[120px] xl:h-[130px] 2xl:h-[160px] w-full shrink-0" aria-hidden="true" />
      <header
        className={`top-0 left-0 w-full block z-50  transition-all duration-500 transform ${isSticky || (mobileMenuOpen && !isTop)
          ? "fixed translate-y-0 opacity-100 2xl:mb-15 shadow-md border-b border-gray-100 bg-white"
          : isTop
            ? "absolute translate-y-0 opacity-100"
            : "fixed -translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        {/* Top Bar */}
        <div
          className={`bg-primary text-white w-full block transition-all duration-300 overflow-hidden ${isTop || mobileMenuOpen ? "max-h-[100px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <Container className="flex font-albert items-center justify-between h-auto py-2.5 text-[10px] sm:text-xs md:text-md 2xl:text-lg">
            {/* Left Links */}
            <div className="hidden md:flex items-center gap-3 sm:gap-6 md:gap-10">
              <Link href="#" className="hover:text-gray-300 transition-colors">News</Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">Fanzone</Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">Brand Portal</Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">About Eurol</Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">Contact</Link>
            </div>

            {/* Right Links */}
            <div className="flex items-center justify-end w-full md:w-auto gap-4 sm:gap-6">
              <Link href="#" className="hover:text-gray-300 transition-colors">Login</Link>
              <div className="flex items-center gap-3 border-l border-white pl-4">
                <button className="flex items-center gap-1 hover:text-gray-300">
                  <Globe size={14} /> EN ▾
                </button>
                <div className="w-px h-10 bg-white"></div>
                <button className="flex items-center gap-1 hover:text-gray-300">
                  <MapPin size={14} /> IN ▾
                </button>
              </div>
            </div>
          </Container>
        </div>

        {/* Main Navigation */}
        <div className="block relative z-10 bg-white w-full">
          <Container className="flex items-center justify-between gap-4 xl:gap-6 w-full py-4 sm:py-5 md:py-5">
            {/* Logo Section */}
            <Link href="/" className="flex items-center shrink-0  rounded-xl p-1 hover:opacity-90 transition-opacity">
              <img
                src="/moto/eurol/logo.png"
                alt="Eurol Logo"
                className="h-8 sm:h-10 md:h-10 xl:h-10 2xl:h-15 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navbar Links */}
            <nav className="hidden xl:flex  items-center text-[#484848] space-x-2 xl:space-x-4 2xl:space-x-8 shrink-0 font-albert font-medium text-sm 2xl:text-md  ">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    className={`relative group text-[#484848] 2xl:text-lg transition-colors duration-200 cursor-pointer flex items-center gap-3 md:gap-2 hover:text-primary ${isActive ? "text-primary font-semibold" : ""}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    <span>{link.name}</span>
                    {/* Only show caret for items that typically have dropdowns in such designs */}
                    {["Product Range", "Markets", "Specialty", "Services", "Product Advisors"].includes(link.name) && (
                      <span className="text-[10px]">▾</span>
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action: Search Box */}
            <div className="hidden xl:flex items-center w-[160px] xl:w-[180px] 2xl:w-[240px] shrink">
              <div className="flex items-center bg-white border border-[#112C63] overflow-hidden h-10 w-full  pl-3 focus-within:border-primary transition-colors">
                <input
                  type="text"
                  placeholder="Search for everything"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent  border-0 font-albert outline-none text-sm text-dark placeholder-gray-400 w-full h-[90%]"
                />
                <button className="bg-secondary text-black px-3 h-full flex items-center justify-center hover:bg-secondary-hover transition-colors">
                  <Search size={16} />
                </button>
              </div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="xl:hidden text-primary p-2 hover:bg-gray-50 rounded-lg transition-colors shrink-0 flex items-center justify-center min-w-[44px] min-h-[44px]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </Container>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 py-6 px-6 flex flex-col space-y-4 animate-in slide-in-from-top duration-300 max-h-[calc(100vh-70px)] sm:max-h-[calc(100vh-80px)] md:max-h-[calc(100vh-90px)] overflow-y-auto font-albert text-primary font-medium">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  className={`border-b border-gray-100 pb-3 block text-lg cursor-pointer flex justify-between ${isActive ? "text-secondary font-bold" : "hover:text-secondary"
                    }`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                >
                  {link.name}
                  {["Product Range", "Markets", "Specialty", "Services", "Product Advisors"].includes(link.name) && (
                    <span className="text-[12px] opacity-50">▾</span>
                  )}
                </a>
              );
            })}
            {/* Mobile Search Input */}
            <div className="pt-2">
              <div className="flex items-center bg-white border border-gray-300 h-11 w-full rounded overflow-hidden pl-3 focus-within:border-primary transition-colors">
                <input
                  type="text"
                  placeholder="Search for everything"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-0 outline-none text-sm text-dark placeholder-gray-400 w-full"
                />
                <button
                  type="button"
                  className="h-full px-5 bg-secondary text-white flex items-center justify-center hover:bg-secondary-hover transition-colors"
                >
                  <Search size={18} />
                </button>
              </div>
            </div>

            <div className="pt-4 flex flex-col gap-3 text-sm">
              <Link href="#" className="hover:text-secondary">News</Link>
              <Link href="#" className="hover:text-secondary">Fanzone</Link>
              <Link href="#" className="hover:text-secondary">Brand Portal</Link>
              <Link href="#" className="hover:text-secondary">About Eurol</Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
