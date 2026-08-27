"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import Typography from "./Typography";

const navLinks = [
  { name: "Industrial", id: "industrial" },
  { name: "Products", id: "products" },
  { name: "News", id: "news" },
  { name: "Communication", id: "communication" },
];

const Header = () => {
  const [scrollState, setScrollState] = useState("hidden");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("industrial");

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
      if (y < 50) {
        setScrollState("top");
      } else {
        setScrollState("scrolled");
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

  const isScrolled = scrollState === "scrolled";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-primary ${isScrolled ? "shadow-lg py-0" : "py-2"
          }`}
      >
        <div className="h-[70px] sm:h-[80px] md:h-[90px] flex items-center relative z-10">
          <div className="custom-container flex items-center justify-between gap-4 xl:gap-5 w-full">

            {/* Desktop Navbar Links */}
            <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8 shrink-0 flex-1">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <div key={link.name} className="relative flex items-center justify-center">
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleScrollTo(e, link.id)}
                      className={`relative z-10 cursor-pointer py-3 px-1 flex flex-col items-center justify-center transition-colors ${isActive ? "text-white" : "text-gray-300 hover:text-white"
                        }`}
                    >
                      <span className="navbar capitalize">
                        {link.name}
                      </span>
                    </a>
                  </div>
                );
              })}
            </nav>

            {/* Logo Section */}
            <Link href="/" className="flex items-center justify-center shrink-0 flex-1">
              <img
                src="/moto/mc-filter/logo.png"
                alt="MC Filter Logo"
                className="h-8 sm:h-10 md:h-[12%] w-auto object-contain"
              />
            </Link>

            {/* Right Action: Search */}
            <div className="hidden xl:flex items-center justify-end shrink-0 flex-1">
              <div className="flex items-center bg-white rounded text-primary px-3 py-2 w-64">
                <Search className="w-5 h-5 text-primary mr-3 shrink-0" strokeWidth={2} />
                <input
                  type="text"
                  placeholder="Search for Everything"
                  className="bg-transparent outline-none text-sm placeholder-gray-500 w-full font-outfit"
                />
              </div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="xl:hidden flex flex-1 justify-end">
              <button
                className="text-white p-2 transition-colors focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
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
                    className={`relative z-10 block navbar cursor-pointer py-4 capitalize ${isActive ? "text-white" : "text-gray-300 hover:bg-white/5"
                      }`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    {link.name}
                  </a>
                </div>
              );
            })}
            <div className="pt-6 w-full">
              <div className="flex items-center bg-white rounded text-primary px-3 py-3 w-full">
                <Search className="w-5 h-5 text-gray-500 mr-2 shrink-0" strokeWidth={2} />
                <input
                  type="text"
                  placeholder="Search for Everything"
                  className="bg-transparent outline-none text-sm placeholder-gray-500 w-full font-outfit"
                />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
