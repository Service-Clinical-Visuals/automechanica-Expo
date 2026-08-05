"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import Typography from "./Typography";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about" },
  { name: "Catalog", id: "catalog" },
  { name: "Services", id: "services" },
  { name: "News", id: "news" },
  { name: "Contact", id: "contact" },
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

      if (y < 50) {
        setScrollState("top");
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
        className={`top-0 left-0 w-full z-50 transition-all duration-300 transform bg-white ${isSticky || mobileMenuOpen ? "fixed translate-y-0 shadow-md" : "absolute translate-y-0"
          }`}
      >
        <div className="h-[70px] sm:h-[80px] md:h-[90px] lg:h-[100px] min-[2500px]:h-[150px] min-[3800px]:h-[200px] flex items-center relative z-10 border-b border-gray-100">
          <div className="custom-container flex items-center justify-between gap-4 xl:gap-5 w-full h-full">
            {/* Logo Section */}
            <Link href="/" className="flex items-center shrink-0 h-full ">
              <img
                src="/moto/gameroil/logo.png"
                alt="Gameroil Logo"
                className="w-[140px] sm:w-[160px] md:w-[200px] lg:w-[240px] min-[2500px]:w-[500px] min-[3800px]:w-[700px] h-auto object-contain"
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
                      className={`relative z-10 cursor-pointer py-3 px-1 mx-2 flex flex-col items-center justify-center transition-colors ${isActive ? "text-primary font-medium" : "text-gray-600 hover:text-primary"
                        }`}
                    >
                      <span className="navbar tracking-wide">
                        {link.name}
                      </span>
                      {isActive && (
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary" />
                      )}
                    </a>
                  </div>
                );
              })}
            </nav>

            {/* Right Action: Search Bar */}
            <div className="hidden xl:flex items-center shrink-0">
              <div className="flex items-center bg-white border border-gray-200 rounded-full pl-4 pr-1 py-1 min-[2500px]:pl-6 min-[2500px]:pr-1.5 min-[2500px]:py-1.5 min-[3800px]:pl-8 min-[3800px]:pr-2 min-[3800px]:py-2 shadow-sm w-[280px] min-[2500px]:w-[450px] min-[3800px]:w-[650px]">
                <input
                  type="text"
                  placeholder="Search for products"
                  className="bg-transparent outline-none text-gray-700 text-sm min-[2500px]:text-xl min-[3800px]:text-3xl w-full font-secondary"
                />
                <button className="bg-primary text-white p-2 min-[2500px]:p-3 min-[3800px]:p-4 rounded-full hover:bg-primary-hover transition-colors shrink-0">
                  <Search className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-10 min-[3800px]:h-10" strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="xl:hidden text-gray-800 p-2 transition-colors focus:outline-none"
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
                    className={`relative z-10 block navbar cursor-pointer py-4 ${isActive ? "text-primary" : "text-gray-700 hover:text-primary"
                      }`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    {link.name}
                  </a>
                </div>
              );
            })}
            <div className="pt-6 flex flex-col w-full">
              <div className="flex items-center bg-white border border-gray-200 rounded-full pl-4 pr-1 py-1 shadow-sm w-full">
                <input
                  type="text"
                  placeholder="Search for products"
                  className="bg-transparent outline-none text-gray-700 text-sm w-full font-secondary"
                />
                <button className="bg-primary text-white p-2 rounded-full hover:bg-primary-hover transition-colors shrink-0">
                  <Search className="w-4 h-4" strokeWidth={2.5} />
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
