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
    { name: "Product Categories", href: "#" },
    { name: "Resources", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Media", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <header 
      className={`fixed left-0 right-0 z-[100] transition-all duration-300 w-full flex justify-center ${
        isHidden ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      } ${
        isScrolled 
          ? "top-0 bg-[#1E1E1E]/95  backdrop-blur-md shadow-lg py-4" 
          : "top-4  bg-transparent py-0"
      }`}
    >
      {/* Content Layer */}
      <div className={`custom-container flex items-center justify-between transition-all duration-300 ${
        isScrolled 
          ? "px-4 lg:px-0 border border-transparent" 
          : "rounded-[1.5rem] border border-white/40  bg-[#1E1E1E]/80 backdrop-blur-sm px-6 lg:px-8 py-3"
      }`}>
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center w-[45%] sm:w-[35%] md:w-[25%] lg:w-[20%] xl:w-[15%]">
             <Link href="#" className="w-full">
               <img src="/moto/walker-products/walker-logo.png" alt="Walker Products Logo" className="w-[90%] md:w-[85%] lg:w-full h-auto object-contain" />
             </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                className="transition-colors hover:text-primary group flex flex-col"
              >
                <Typography variant="span" color={idx === 0 ? "white" : "white"} className={`navbar transition-colors group-hover:text-primary ${idx === 0 ? "font-bold border-b border-white" : ""}`}>
                  {link.name}
                </Typography>
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex bg-white/20 items-center justify-center w-10 h-10 rounded-full  hover:border-gray-400 transition-colors cursor-pointer text-white">
              <Globe className="w-7 h-7" strokeWidth={1.5} />
            </div>
            <Button text="Search Here..." href="#" showIcon={true} />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
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
        <div className={`lg:hidden absolute left-0 w-full bg-[#1E1E1E] border-b border-gray-800 flex flex-col z-50 overflow-hidden transition-all duration-300 top-full`}>
          <nav className="flex flex-col py-4 custom-container">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-4 border-b border-gray-800"
              >
                <Typography variant="span" color="white" className="navbar">
                  {link.name}
                </Typography>
              </Link>
            ))}
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
