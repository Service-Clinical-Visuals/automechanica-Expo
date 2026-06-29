"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import Button from "./Button";
import Typography from "./Typography";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about-us" },
  { name: "Products", id: "products" },
  { name: "Blog", id: "blog" },
  { name: "Contact", id: "footer" },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
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
      // Show sticky header after scrolling past 150px
      if (y > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out transform ${
          isVisible || mobileMenuOpen
            ? "translate-y-0 opacity-100 shadow-md border-b border-gray-100 bg-white"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-[80px] flex items-center relative z-10 bg-white w-full">
          <Container className="flex items-center justify-between gap-4 w-full">
            {/* Logo Section (SVG reproduction of K2 Logo) */}
            <Link 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActiveLink("home");
              }}
              className="flex items-center shrink-0 hover:opacity-90 transition-opacity"
            >
              <img src="/moto/melle-sp/k2-logo.png" alt="K2 Logo" className="h-12 sm:h-14" />
            </Link>

            {/* Desktop Navbar Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-4 shrink-0 font-medium">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    className="relative py-2 px-3 xl:px-4 cursor-pointer group"
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    <Typography
                      as="span"
                      variant="h6"
                      weight="bold"
                      color="none"
                      className={`tracking-wider transition-colors font-montserrat ${
                        isActive ? "text-primary" : "text-dark hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </Typography>
                  </a>
                );
              })}
            </nav>

            {/* Right Action: Explore K2 Button */}
            <div className="hidden lg:block shrink-0">
              <Button
                text="Explore K2"
                variant="primary"
                href="#products"
                className="py-2.5 px-6 font-montserrat rounded-md shadow-none hover:shadow-md"
              />
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden text-dark p-2 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </Container>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 py-6 px-6 flex flex-col space-y-4 animate-in slide-in-from-top duration-300 max-h-[calc(100vh-80px)] overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  className={`border-b border-gray-100 pb-3 block font-montserrat text-lg font-bold tracking-wider cursor-pointer uppercase ${
                    isActive ? "text-primary" : "text-dark hover:text-primary"
                  }`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                >
                  {link.name}
                </a>
              );
            })}
            {/* Mobile Explore K2 Button */}
            <div className="pt-2">
              <Button
                text="Explore K2"
                variant="primary"
                href="#products"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3"
              />
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
