"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Container from "./Container";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About Us", id: "about-us" },
  { name: "Products", id: "products" },
  { name: "News", id: "news" },
  { name: "Contact", id: "contact" }
]

const Header = () => {
  const [scrollState, setScrollState] = useState("top");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      <div className="h-[85px] w-full shrink-0" aria-hidden="true" />
      <header
        className={`top-0 left-0 w-full block z-70 transition-all duration-500 transform ${isSticky || (mobileMenuOpen && !isTop)
          ? "fixed translate-y-0 opacity-100 shadow-md border-b border-gray-100 bg-white"
          : isTop
            ? "absolute translate-y-0 opacity-100"
            : "fixed -translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        {/* Main Navigation */}
        <div className="relative z-10 bg-white w-full h-[85px]! flex items-center">
          <Container className="flex items-center justify-between gap-4 xl:gap-6 w-full">
            {/* Logo Section */}
            <Link href="/" className="flex items-center shrink-0 rounded-xl p-1 hover:opacity-90 transition-opacity">
              <img
                src="/moto/speedcar/logo.png"
                alt="Eurol Logo"
                className="h-15 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navbar Links */}
            <nav className="hidden xl:flex content items-center space-x-2 xl:space-x-4 2xl:space-x-8 shrink-0 font-medium">
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

            {/* Right Action: Call Us Now */}
            <div className="hidden xl:flex items-center gap-3 shrink-0">
              <img
                src="/moto/speedcar/phone.png"
                alt="Phone"
                className="h-10 w-10 object-contain"
              />
              <div className="flex flex-col leading-tight!">
                <span className="text-[16px]! content">Call Us Now</span>
                <a
                  href="tel:+48501110544"
                  className="text-[18px]! font-medium content"
                >
                  +48 501 110 544
                </a>
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
          <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 py-6 px-6 flex flex-col space-y-4 animate-in slide-in-from-top duration-300 max-h-[calc(100vh-70px)] sm:max-h-[calc(100vh-80px)] md:max-h-[calc(100vh-90px)] overflow-y-auto text-primary font-medium">
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
            {/* Mobile Call Us Now */}
            <div className="pt-2 flex items-center gap-3">
              <img
                src="/moto/speedcar/phone.png"
                alt="Phone"
                className="h-9 w-9 object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-xs text-[#484848]">Call Us Now</span>
                <a
                  href="tel:+48501110544"
                  className="text-base font-bold text-[#484848] hover:text-primary transition-colors"
                >
                  +48 501 110 544
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
