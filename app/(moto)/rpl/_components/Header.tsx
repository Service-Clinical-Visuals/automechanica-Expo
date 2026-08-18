"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import Typography from "./Typography";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about" },
  { name: "Products", id: "products" },
  { name: "Contact", id: "contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveLink(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white ${isScrolled || mobileMenuOpen ? "shadow-md" : "shadow-sm"
          }`}
      >
        <div className="h-[80px] md:h-[90px] min-[3800px]:h-[160px] flex items-center relative z-10">
          <div className="custom-container flex items-center justify-between w-full relative">
            
            {/* Logo Section */}
            <Link href="/" className="flex items-center shrink-0 relative z-20">
              <img
                src="/moto/rpl/logo.png"
                alt="RPL Logo"
                className="h-10 md:h-12 min-[3800px]:h-24 w-auto object-contain"
                onError={(e) => {
                  // Fallback in case logo doesn't exist yet
                  (e.target as HTMLImageElement).src = "/moto/ampro/logo.png";
                }}
              />
            </Link>

            {/* Desktop Navbar Links - Centered */}
            <nav className="hidden xl:flex items-center space-x-8 min-[3800px]:space-x-16 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <div key={link.name} className="relative flex items-center justify-center">
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleScrollTo(e, link.id)}
                      className={`navbar cursor-pointer transition-colors ${isActive ? "text-primary font-bold" : "text-gray-600 hover:text-primary"
                        }`}
                    >
                      {link.name}
                    </a>
                  </div>
                );
              })}
            </nav>

            {/* Right Action: Search Bar */}
            <div className="hidden xl:flex items-center shrink-0 relative z-20">
              <div className="relative flex items-center border border-primary/30 rounded-full px-5 py-2.5 min-[3800px]:px-10 min-[3800px]:py-5 min-[3800px]:border-[3px] bg-white group hover:border-primary transition-colors">
                <input
                  type="text"
                  placeholder="Search for Products"
                  className="bg-transparent outline-none navbar text-primary placeholder:text-gray-400 w-[200px] min-[3800px]:w-[400px]"
                />
                <Search className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 text-primary ml-2 cursor-pointer" />
              </div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="xl:hidden text-primary p-2 transition-colors focus:outline-none relative z-20"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto border-t border-gray-100">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <div key={link.name} className="relative border-b border-gray-100">
                  <a
                    href={`#${link.id}`}
                    className={`relative z-10 block navbar cursor-pointer py-4 ${isActive ? "text-primary font-bold" : "text-gray-600 hover:bg-gray-50"
                      }`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    {link.name}
                  </a>
                </div>
              );
            })}
            
            {/* Mobile Search */}
            <div className="pt-4 pb-2">
              <div className="relative flex items-center border border-primary/30 rounded-full px-4 py-3 bg-white">
                <input
                  type="text"
                  placeholder="Search for Products"
                  className="bg-transparent outline-none navbar text-primary placeholder:text-gray-400 w-full"
                />
                <Search className="w-5 h-5 text-primary ml-2 shrink-0" />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
