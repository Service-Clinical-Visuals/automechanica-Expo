"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, Globe, MapPin } from "lucide-react";

import Button from "./Button";
import Typography from "./Typography";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Products", id: "products" },
  { name: "Quality", id: "quality" },
  { name: "Workshops", id: "workshops" },
  { name: "Wholesale", id: "wholesale" },
  { name: "About Us", id: "about" },
];

const Header = () => {
  const [scrollState, setScrollState] = useState("top");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
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
      <div className="h-[90px] lg:h-[95px] xl:h-[100px] 2xl:h-[125px] min-[3800px]:h-[160px] w-full shrink-0" aria-hidden="true" />
      <header
        className={`top-0 left-0 w-full block z-[999] transition-all duration-500 transform ${isSticky || (mobileMenuOpen && !isTop)
          ? "fixed translate-y-0 opacity-100 shadow-md bg-[var(--color-primary)]"
          : isTop
            ? "absolute translate-y-0 opacity-100"
            : "fixed -translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        {/* Top Bar */}
        <div
          className={`bg-white text-black w-full block transition-all duration-300 overflow-hidden ${isTop || mobileMenuOpen ? "max-h-[100px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="custom-container flex font-oswald items-center justify-between h-auto py-2.5 ">
            {/* Left Links */}
            <div className="hidden md:flex items-center gap-3 sm:gap-6 md:gap-10">
              <Typography variant="span" weight="normal" className="font-oswald">
                <Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Content Hub</Link>
              </Typography>
              <Typography variant="span" weight="normal" className="font-oswald">
                <Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Press</Link>
              </Typography>
              <Typography variant="span" weight="normal" className="font-oswald">
                <Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Career</Link>
              </Typography>
              <Typography variant="span" weight="normal" className="font-oswald">
                <Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Newsletter</Link>
              </Typography>
            </div>

            {/* Right Links */}
            <div className="flex items-center justify-end w-full md:w-auto gap-4 sm:gap-6">
              <div className="flex items-center gap-3 pl-4">
                <button className="flex items-center justify-center w-8 h-8 bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-colors">
                  <Search size={18} />
                </button>
                <button className="flex items-center justify-center w-8 h-8 bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-colors">
                  <Globe size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="block relative z-10 bg-[var(--color-primary)] w-full">
          <div className="custom-container  flex items-center justify-between gap-4 xl:gap-6 w-full py-2 md:py-2.5">
            {/* Logo Section */}
            <Link href="/" className="flex items-center shrink-0 rounded-xl p-1 hover:opacity-90 transition-opacity">
              <img
                src="/moto/meyle/logo.png"
                alt="Meyle Logo"
                className="h-8 sm:h-10 md:h-10 xl:h-10 2xl:h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>

            {/* Desktop Navbar Links */}
            <nav className="hidden xl:flex items-center text-white space-x-2 xl:space-x-4 2xl:space-x-8 shrink-0 font-oswald font-normal">
              {navLinks.map((link) => {
                const isActive = activeLink === link.id;
                return (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    className={`navbar relative group text-white 2xl:text-lg transition-colors duration-200 cursor-pointer flex items-center gap-3 md:gap-2 hover:text-gray-300 ${isActive ? "font-semibold" : ""}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    <span className="font-oswald ">{link.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right Action: Button */}
            <div className="hidden xl:flex items-center shrink">
              <Button text="Learn More Us" href="#about" showIcon={true} />
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="xl:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors shrink-0 flex items-center justify-center min-w-[44px] min-h-[44px]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-[var(--color-primary)] shadow-2xl border-t border-gray-700 py-6 px-6 flex flex-col space-y-4 animate-in slide-in-from-top duration-300 max-h-[calc(100vh-70px)] sm:max-h-[calc(100vh-80px)] md:max-h-[calc(100vh-90px)] overflow-y-auto font-albert text-white font-medium">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  className={`border-b border-gray-700 pb-3 block text-lg cursor-pointer flex justify-between ${isActive ? "font-bold" : "hover:text-gray-300"
                    }`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                >
                  {link.name}
                </a>
              );
            })}

            <div className="pt-4 flex flex-col gap-3 text-sm text-white/90">
              <Link href="#" className="hover:text-white">Content Hub</Link>
              <Link href="#" className="hover:text-white">Press</Link>
              <Link href="#" className="hover:text-white">Career</Link>
              <Link href="#" className="hover:text-white">Newsletter</Link>
            </div>

            <div className="pt-4">
              <Button text="Learn More Us" href="#about" showIcon={true} />
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
