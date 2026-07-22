"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerState, setHeaderState] = useState<"top" | "scrolled">("top");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = window.innerHeight / 2;
      
      if (scrollY > threshold) {
        setHeaderState("scrolled");
      } else {
        setHeaderState("top");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // init
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "EU Projects", href: "#" },
    { name: "Our Products", href: "#" },
    { name: "ODMS", href: "#" },
    { name: "Latest News", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <>
      <header 
        className={`w-full z-50 transition-all duration-300 ${
          headerState === "scrolled" 
            ? "fixed top-0 left-0 bg-white shadow-md py-3 animate-in slide-in-from-top" 
            : "absolute top-0 left-0 pt-4 md:pt-6"
        }`}
      >
        <div className="custom-container h-full">
          {/* Header Container */}
          <div 
            className={`w-full flex items-center justify-between transition-all duration-300 ${
              headerState === "scrolled"
                ? "bg-transparent rounded-none px-4 md:px-8 lg:px-12"
                : "bg-white rounded-3xl px-4 md:px-8 lg:px-12 py-2 drop-shadow-lg border border-gray-100"
            }`}
          >
            
            {/* Logo */}
            <Link href="#" className={`flex-shrink-0 z-50 flex items-center`}>
              <img 
                src="/moto/amboils/logo.png" 
                alt="AMB Oils Logo" 
                className="h-10 md:h-14 w-auto object-contain" 
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-5 2xl:gap-7">
              {navLinks.map((link) => {
                const isActive = link.name === "Home"; // TODO: Update to use usePathname() when real routes are added
                return (
                  <Link 
                    key={link.name}
                    href={link.href}
                    className={`teko-font header-link transition-colors tracking-wide pb-[2px] ${
                      isActive 
                        ? "text-[#212121] font-semibold underline underline-offset-4" 
                        : "text-[#212121] font-medium hover:text-[#C99843] hover:underline hover:underline-offset-4"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Contact Button */}
          <div className="hidden xl:block">
            <Button href="#" className="font-normal!">
              Explore Products
            </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className={`xl:hidden text-[#212121] z-50 p-2 flex items-center ${headerState === "scrolled" ? "" : "pr-6"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } xl:hidden flex flex-col pt-32 pb-8 overflow-y-auto`}
      >
        <div className="custom-container flex flex-col items-start gap-6 w-full px-16">
          {navLinks.map((link) => {
            const isActive = link.name === "Home";
            return (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`teko-font header-link transition-colors tracking-wide pb-[2px] ${
                        isActive 
                          ? "text-[#212121] font-semibold underline underline-offset-4" 
                          : "text-[#212121] font-medium hover:text-[#C99843] hover:underline hover:underline-offset-4"
                      }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="   mt-auto w-full">
            <Button href="#" className="font-normal!">
              Explore Products
            </Button>
            </div>
        </div>
      </div>
    </>
  );
}
