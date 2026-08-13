"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Product", id: "products" },
  { name: "Blogs", id: "news" },
  { name: "Contact", id: "contact" },
];

const Header = () => {
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
      <header className="sticky top-0 left-0 w-full z-50 bg-secondary shadow-md transition-all duration-300">
        <div className="h-[70px] sm:h-[80px] md:h-[90px] flex items-center relative z-10">
          <div className="custom-container flex items-center justify-between gap-4 xl:gap-5 w-full">
            {/* Logo Section */}
            <Link href="/" className="flex items-center shrink-0">
              <img
                src="/moto/donmez/logo.png"
                alt="Donmez Logo"
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
                      className={`relative z-10 cursor-pointer py-3 px-2 mx-2 flex flex-col items-center justify-center transition-colors ${isActive ? "text-primary font-medium" : "text-white hover:text-primary"
                        }`}
                    >
                      <span className="navbar tracking-wide">
                        {link.name}
                      </span>
                    </a>
                  </div>
                );
              })}
            </nav>

            {/* Right Action: Button */}
            <div className="hidden xl:flex items-center shrink-0">
              <Button text="Request Quote" variant="primary" href="#contact" />
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="xl:hidden text-white p-2 transition-colors focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-secondary shadow-2xl py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-70px)] overflow-y-auto border-t border-white/10">
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
            <div className="pt-6 flex justify-center">
               <Button text="Request Quote" variant="primary" href="#contact" />
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
