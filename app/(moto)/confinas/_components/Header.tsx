"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import Typography from "./Typography";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Products", id: "products" },
  { name: "News", id: "news" },
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
          ? "fixed translate-y-0 opacity-100 shadow-md bg-secondary"
          : "fixed -translate-y-full opacity-0"
          }`}
      >
        <div className="h-[70px] sm:h-[80px] min-[1440px]:h-[90px] flex items-center relative z-10">
          <div className="custom-container flex items-center justify-between gap-4 min-[1440px]:gap-5 w-full">
            {/* Logo Section */}
            <Link href="/" className="flex items-center shrink-0">
              <img
                src="/moto/confinas/logo.png"
                alt="FULBAT Logo"
                className="h-8 sm:h-10 min-[1440px]:h-12 min-[2100px]:h-16 min-[3800px]:h-24 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navbar Links */}
            <nav className="hidden min-[1440px]:flex items-center space-x-4 min-[1440px]:space-x-8 shrink-0">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <div key={link.name} className="relative flex items-center justify-center">
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleScrollTo(e, link.id)}
                      className={`relative z-10 cursor-pointer py-3 px-1 flex flex-col items-center justify-center transition-colors ${isActive ? "text-primary" : "text-white hover:text-primary"
                        }`}
                    >
                      <div className="navbar">
                        {link.name}
                      </div>
                    </a>
                  </div>
                );
              })}
            </nav>

            {/* Right Action: Button */}
            <div className="hidden min-[1440px]:flex items-center shrink-0">
              <Button text="Request Quote" href="#contact" showIcon={false} />
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="min-[1440px]:hidden text-white p-2 transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="min-[1440px]:hidden absolute top-full left-0 w-full bg-secondary shadow-2xl py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-70px)] overflow-y-auto border-t border-white/10">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <div key={link.name} className="relative border-b border-white/5">
                  <a
                    href={`#${link.id}`}
                    className={`relative z-10 block navbar cursor-pointer py-4 ${isActive ? "text-primary" : "text-white hover:bg-white/5"
                      }`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    {link.name}
                  </a>
                </div>
              );
            })}
            <div className="pt-6 flex flex-col items-center gap-4">
               <Button text="Request Quote" href="#contact" showIcon={false} />
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
