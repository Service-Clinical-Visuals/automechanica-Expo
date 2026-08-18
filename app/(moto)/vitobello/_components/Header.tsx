"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "./Button";
import Typography from "./Typography";
import { Globe } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Estimate banner height: aspect-video on md+, taller on mobile
      const bannerHeight = window.innerWidth >= 768 ? window.innerWidth * 0.5625 : window.innerWidth * 1.25;
      const threshold = bannerHeight * 0.8;

      if (window.scrollY > threshold) {
        setIsScrolled(true);
        setIsHidden(false);
      } else if (window.scrollY > 100) {
        setIsScrolled(false);
        setIsHidden(true);
      } else {
        setIsScrolled(false);
        setIsHidden(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About us", href: "#" },
    { name: "Download", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <header
      className={`fixed left-0 right-0 z-[100] transition-all duration-300 w-full flex justify-center ${isHidden ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        } ${isScrolled
          ? "top-0 bg-[#1E1E1E]/95  backdrop-blur-md shadow-lg py-4"
          : "top-4  bg-transparent py-0"
        }`}
    >
      {/* Content Layer */}
      <div className={`custom-container flex items-center justify-between transition-all duration-300 ${isScrolled
        ? "px-4 lg:px-0 border border-transparent"
        : "rounded-[1.5rem] border border-white/40  bg-[#1E1E1E]/80 backdrop-blur-sm px-6 lg:px-8 py-3"
        }`}>

        {/* Logo Area */}
        <div className="flex-shrink-0 flex items-center w-[45%] sm:w-[35%] md:w-[25%] lg:w-[20%] xl:w-[15%]">
          <Link href="#" className="w-full">
            <img src="/moto/vitobello/logo.png" alt="Vitobello ricambi Logo" className="w-[90%] md:w-[85%] lg:w-full h-auto object-contain" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6 xl:gap-10">
          {navLinks.map((link) => {
            const isActive = activeLink === link.name;
            const isHovered = hoveredLink === link.name;
            const isAnyHovered = hoveredLink !== null;
            
            const showOrange = isHovered || (isActive && !isAnyHovered);

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className="transition-colors flex flex-col"
              >
                <span className={`navbar transition-all pb-1 border-b-2 ${
                  showOrange 
                    ? "text-[#F37343] font-semibold border-[#F37343]" 
                    : "text-white font-regular border-transparent"
                }`}>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden xl:flex items-center gap-4">
          <Button text="Explore Products" href="#" showIcon={true} />
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden flex items-center">
          <button
            className="text-white focus:outline-none p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>


      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className={`xl:hidden absolute left-0 w-full bg-[#1E1E1E] border-b border-gray-800 flex flex-col z-50 overflow-hidden transition-all duration-300 top-full`}>
          <nav className="flex flex-col py-4 custom-container">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.name);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block py-4 border-b border-gray-800"
                >
                  <Typography variant="span" className={`navbar ${isActive ? 'text-[#F37343] font-semibold' : 'text-white'}`}>
                    {link.name}
                  </Typography>
                </Link>
              );
            })}
            <div className="py-6 flex flex-col gap-4 items-start">
              <div className="flex items-center gap-2 text-white">
                <Globe className="w-5 h-5" strokeWidth={1.5} />
                <Typography variant="span" color="white" className="navbar">English</Typography>
              </div>
              <Button text="Enter Part Number" href="#" showIcon={true} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
