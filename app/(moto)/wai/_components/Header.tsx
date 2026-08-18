"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, User } from "lucide-react";
import Typography from "./Typography";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Products", id: "products" },
  { name: "Components", id: "components" },
  { name: "Markets", id: "markets" },
  { name: "Resources", id: "resources" },
  { name: "Company", id: "company" },
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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 transform bg-white shadow-md ${
          isSticky || mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="h-[70px] sm:h-[80px] md:h-[90px] flex items-center relative z-10">
          <div className="custom-container flex items-center justify-between gap-4 xl:gap-5 w-full">
            {/* Logo Section */}
            <Link href="/" className="flex items-center shrink-0">
              <img
                src="/moto/wai/logo.png"
                alt="WAI Logo"
                className="h-10 sm:h-12 md:h-14 w-auto object-contain"
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
                      className={`relative z-10 cursor-pointer py-3 px-1 mx-2 flex flex-col items-center justify-center transition-colors ${
                        isActive ? "text-primary font-bold" : "text-dark hover:text-primary"
                      }`}
                    >
                      <Typography variant="span" className="navbar">
                        {link.name}
                      </Typography>
                      {isActive && (
                        <div className="absolute bottom-1 left-0 w-full h-[2px] bg-primary" />
                      )}
                    </a>
                  </div>
                );
              })}
            </nav>

            {/* Right Action: Search and Sign In */}
            <div className="hidden xl:flex items-center shrink-0 gap-6">
              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 hover:border-gray-400 transition-colors cursor-pointer">
                <Search className="w-4 h-4 text-gray-500 mr-2" strokeWidth={2.5} />
                <Typography variant="span" color="muted" className="text-sm">
                  Part No., OE & Interchange
                </Typography>
              </div>
              <div className="flex items-center gap-2 cursor-pointer text-dark hover:text-primary transition-colors">
                <User className="w-5 h-5" strokeWidth={2} />
                <Typography variant="span" className="font-bold text-sm">
                  Sign In
                </Typography>
              </div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="xl:hidden text-dark p-2 transition-colors focus:outline-none hover:text-primary"
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
                    className={`relative z-10 block cursor-pointer py-4 ${
                      isActive ? "text-primary font-bold" : "text-dark hover:text-primary"
                    }`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    <Typography variant="span" className="navbar">
                      {link.name}
                    </Typography>
                  </a>
                </div>
              );
            })}
            <div className="pt-6 flex flex-col gap-4">
              <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 cursor-pointer">
                <Search className="w-5 h-5 text-gray-500 mr-3" strokeWidth={2.5} />
                <Typography variant="span" color="muted">
                  Part No., OE & Interchange
                </Typography>
              </div>
              <div className="flex items-center gap-3 cursor-pointer text-dark py-2">
                <User className="w-6 h-6" strokeWidth={2} />
                <Typography variant="span" className="font-bold">
                  Sign In
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
