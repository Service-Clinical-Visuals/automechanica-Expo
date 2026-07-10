"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerState, setHeaderState] = useState<"top" | "hidden" | "scrolled">("hidden");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 50) {
        setHeaderState("top");
      } else if (scrollY < window.innerHeight / 2) {
        setHeaderState("hidden");
      } else {
        setHeaderState("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "Company", href: "#" },
    { name: "Products", href: "#" },
    { name: "Online Catalog", href: "#" },
    { name: "Quality", href: "#" },
  ];

  return (
    <>
      {/* Spacer so content doesn't jump */}
      <div className={`w-full transition-all duration-700 bg-[#008F33] ${headerState === "scrolled" ? "h-[72px] lg:h-[88px]" : "h-[72px] lg:h-[88px]"}`}></div>

      <header 
        className={`w-full z-50 transition-all duration-700 ease-in-out fixed left-0 ${
          headerState === "hidden" ? "-translate-y-[150%] opacity-0" : "translate-y-0 opacity-100"
        } ${headerState === "scrolled" ? "top-0" : "top-5  bg-transparent"}`}
      >
        <div className={headerState === "scrolled" ? "w-full" : "custom-container mx-auto"}>
          <div className={`flex items-center justify-between transition-all duration-700 ease-in-out mx-auto ${
            headerState === "scrolled" 
              ? "bg-white shadow-md border-b border-gray-100 px-6 lg:px-30 h-[72px] lg:h-[88px] w-full rounded-none" 
              : "bg-white shadow-md rounded-2xl px-6 lg:px-20 h-[72px] lg:h-[88px] w-full"
          }`}>
            
            {/* Logo Area */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="#">
                <img src="/moto/muller-filter/logo1.png" alt="Muller Filter Logo" className="w-[50px] md:w-[60px] lg:w-[70px] h-auto object-contain" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-6 2xl:gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`header-link whitespace-nowrap font-semibold transition-colors font-chakra  ${
                    link.active ? "!text-[#008F33]" : "text-[#333333] hover:text-[#008F33]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Contact Button */}
            <div className="hidden xl:flex items-center">
              <Button href="#" variant="primary" className="px-10 py-2.5 ">
                Get in Touch
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center gap-3">
               <Button href="#" variant="primary" className="text-xs px-4 py-2 rounded-lg" >
                 Get in Touch
               </Button>
              <button 
                className="text-[#008F33] focus:outline-none p-1"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <X size={26} strokeWidth={2.5} />
                ) : (
                  <Menu size={26} strokeWidth={2.5} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="xl:hidden absolute top-[calc(100%+0.5rem)] left-4 right-4 bg-white shadow-xl rounded-xl flex flex-col z-50 border border-gray-100 max-w-full">
              <nav className="flex flex-col py-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-6 py-4 border-b border-gray-50 last:border-0 ${
                      link.active
                        ? "text-[#008F33] font-bold"
                        : "text-gray-700 hover:text-[#008F33] font-semibold"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
