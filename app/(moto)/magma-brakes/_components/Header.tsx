"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import Typography from "./Typography";
import Button from "./Button";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Catalog", id: "catalog" },
  { name: "Products", id: "products" },
  { name: "About Us", id: "about" },
  { name: "Contact", id: "contact" },
  { name: "Downloads", id: "downloads" },
];

const Header = () => {
  const [scrollState, setScrollState] = useState("top");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLink, setActiveLink] = useState("home");
  const pathname = usePathname();

  // Scroll spy or click handler
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
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          // Show sticky header after scrolling past 80% of the viewport
          const threshold = typeof window !== "undefined" ? window.innerHeight * 0.8 : 800;

          if (y < 150) {
            setScrollState((prev) => (prev !== "top" ? "top" : prev));
          } else if (y < threshold) {
            setScrollState((prev) => (prev !== "hidden" ? "hidden" : prev));
          } else {
            setScrollState((prev) => (prev !== "sticky" ? "sticky" : prev));
          }
          ticking = false;
        });
        ticking = true;
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

  const isTop = scrollState === "top";
  const isHidden = scrollState === "hidden";
  const isSticky = scrollState === "sticky";

  return (
    <header
      className={`w-full z-50 transition-all duration-500 flex justify-center ${isTop
        ? "relative my-3 md:my-2.5 opacity-100 translate-y-0"
        : isHidden && !mobileMenuOpen
          ? "fixed top-0 left-0 -translate-y-full opacity-0 pointer-events-none"
          : "fixed top-0 left-0 translate-y-0 opacity-100 z-60 bg-white shadow-md "
        }`}
    >
      <div className="custom-container">
        {/* Main Navigation Bar */}
        <div className="h-[70px] sm:h-[80px] md:h-[80px] flex items-center relative z-10 bg-white pl-4 lg:pl-8 overflow-hidden">



          <div className="flex items-center justify-between w-full relative z-10 pr-4 lg:pr-0">
            {/* Logo Section */}
            <Link href="/magma-brakes" className="flex items-center shrink-0 w-[200px]">
              <img
                src="/moto/magma-brakes/logo.png"
                alt="Magma Brakes Logo"
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
              />
            </Link>

            <div className="flex items-center gap-6 xl:gap-10">
              {/* Desktop Navbar Links */}
              <nav className="hidden lg:flex items-center space-x-2 xl:space-x-6">
                {navLinks.map((link, idx) => {
                  const isActive = activeLink === link.id;
                  return (
                    <a
                      key={link.name}
                      href={`#${link.id}`}
                      className="relative group flex justify-center transition-colors duration-200 cursor-pointer"
                      onClick={(e) => handleScrollTo(e, link.id)}
                    >
                      {isActive ? (
                        <div className=" px-2 flex items-center">
                          <Typography
                            variant="h6"
                            color="primary"
                            weight="normal"
                            className="relative z-10 leading-none tracking-wide font-teko  text-[var(--color-primary)] underline decoration-2 underline-offset-4"
                          >
                            {link.name}
                          </Typography>
                        </div>
                      ) : (
                        <div className=" flex items-center">
                          <Typography
                            variant="h6"
                            color="dark"
                            weight="normal"
                            className="leading-none tracking-wide hover:text-[var(--color-primary)] hover:underline transition-colors font-teko "
                          >
                            {link.name}
                          </Typography>
                        </div>
                      )}
                    </a>
                  );
                })}
              </nav>

              {/* Right CTA / Mobile Toggle */}
              <div className="flex items-center gap-4 pr-0 lg:pr-6">
                <div className="hidden md:block">
                  <Button text="GET IN TOUCH" showIcon={false} />
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                  className="lg:hidden text-[#111111] p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle Navigation Menu"
                >
                  {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute z-90 top-full left-0 w-full bg-white shadow-2xl border-t border-gray-900 py-6 px-6 flex flex-col space-y-4 animate-in slide-in-from-top duration-300 max-h-[calc(100vh-70px)] sm:max-h-[calc(100vh-80px)] md:max-h-[calc(100vh-90px)] overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <a
                key={link.name}
                href={`#${link.id}`}
                className={`border-b border-gray-800 pb-3 block font-teko text-lg tracking-widest cursor-pointer uppercase ${isActive ? "text-[var(--color-primary)]" : "text-white hover:text-[var(--color-primary)]"
                  }`}
                onClick={(e) => handleScrollTo(e, link.id)}
              >
                {link.name}
              </a>
            );
          })}
          {/* Mobile Search Input */}
          <div className="pt-2">
            <div className="flex items-center bg-[#222222] border border-gray-800 pl-4 h-11 w-full rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-0 outline-none text-sm text-white placeholder-gray-400 w-full font-teko"
              />
              <button
                type="button"
                className="h-full px-5 bg-[var(--color-primary)] text-white flex items-center justify-center hover:bg-[var(--color-primary-hover)] transition-colors"
              >
                <Search size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
