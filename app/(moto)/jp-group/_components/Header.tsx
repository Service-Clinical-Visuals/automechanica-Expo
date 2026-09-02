"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import Typography from "./Typography";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Company", id: "about" },
  { name: "Product", id: "products" },
  { name: "News", id: "news" },
  { name: "Contact Us", id: "contact" },
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
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="custom-container h-[70px] sm:h-[80px] md:h-[90px] flex items-center justify-between gap-4 xl:gap-5 w-full">
        {/* Logo Section */}
        <Link href="/" className="flex items-center shrink-0 h-[60%] sm:h-[50%] min-[3800px]:h-[70%]">
          <img
            src="/moto/jp-group/logo.png"
            alt="JP Group Logo"
            className="h-full w-auto object-contain"
          />
        </Link>

        {/* Desktop Navbar Links */}
        <nav className="hidden xl:flex items-center space-x-8 shrink-0">
          {navLinks.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <a
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => handleScrollTo(e, link.id)}
                className="cursor-pointer transition-opacity hover:opacity-80"
              >
                <Typography
                  variant="span"
                  color={isActive ? "primary" : "dark"}
                  className={`navbar ${isActive ? "font-semibold" : "font-medium"}`}
                >
                  {link.name}
                </Typography>
              </a>
            );
          })}
        </nav>

        {/* Right Action: Search */}
        <div className="hidden xl:flex items-center shrink-0">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="border min-[2500px]:border-2 min-[3800px]:border-4 border-primary/50 focus:border-primary rounded px-4 min-[2500px]:px-6 min-[3800px]:px-8 py-1.5 min-[2500px]:py-2.5 min-[3800px]:py-4 text-sm min-[2500px]:text-2xl min-[3800px]:text-4xl outline-none w-[200px] min-[2500px]:w-[300px] min-[3800px]:w-[450px]"
            />
            <Search className="absolute right-3 min-[2500px]:right-5 min-[3800px]:right-8 w-4 h-4 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 text-dark" />
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="xl:hidden text-dark p-2 transition-colors focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-70px)] overflow-y-auto border-t border-gray-100">
          {navLinks.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <a
                key={link.name}
                href={`#${link.id}`}
                className="block py-2"
                onClick={(e) => handleScrollTo(e, link.id)}
              >
                <Typography
                  variant="span"
                  color={isActive ? "primary" : "dark"}
                  className={`navbar ${isActive ? "font-semibold" : "font-medium"}`}
                >
                  {link.name}
                </Typography>
              </a>
            );
          })}
          <div className="pt-4 relative flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="border border-primary/50 focus:border-primary rounded px-4 py-2 text-sm outline-none w-full"
            />
            <Search className="absolute right-3 w-4 h-4 text-dark" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
