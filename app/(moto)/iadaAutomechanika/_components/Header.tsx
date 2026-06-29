"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
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
    { name: "Home", href: "/iadaAutomechanika" },
    { name: "Categories", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Catalogs", href: "#" },
  ];

  return (
    <>
      <div className={`w-full transition-all duration-700 ${headerState === "scrolled" ? "h-20 md:h-24" : "h-[88px] md:h-[104px]"}`}></div>
      
      <header 
        className={`w-full z-50 transition-all duration-700 ease-in-out fixed left-0 ${
          headerState === "hidden" ? "-translate-y-[150%] opacity-0" : "translate-y-0 opacity-100"
        } ${headerState === "scrolled" ? "top-0 bg-white shadow-md border-b border-gray-100" : "top-4 bg-transparent"}`}
      >
        <div className="custom-container">
          <div className={`flex items-center justify-between transition-all duration-700 ease-in-out ${
            headerState === "scrolled" 
              ? "h-20 md:h-24 px-0" 
              : "bg-white shadow-md rounded-full border border-gray-200 px-6 md:px-10 h-20 md:h-24"
          }`}>
          
          {/* Logo Area */}
          <Link href="/iadaAutomechanika" className="flex items-center">
            {/* Space for image */}
            <div className="w-48 h-16 flex items-center justify-start overflow-hidden">
             <img src="/moto/iadaAutomechanika/logo.png" alt="Iada Automechanika" className="w-full h-full object-contain" />
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base md:text-lg font-normal transition-colors amaranth ${
                  link.name === "Home"
                    ? "text-[#C00027] underline underline-offset-4 decoration-[#C00027] decoration-2"
                    : "text-[#1e1e1e] hover:text-[#C00027] hover:underline hover:underline-offset-4 hover:decoration-[#C00027] hover:decoration-2"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden xl:flex items-center">
             <Button href="#">Schedule Eval</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center z-50">
            <button className="text-gray-800 p-2" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="xl:hidden absolute top-[calc(100%+0.5rem)] left-0 w-full px-4 sm:px-6 md:px-8 z-40">
            <div className="bg-white border border-gray-200 shadow-xl rounded-2xl p-6 flex flex-col gap-4">
              
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-md md:text-lg font-normal transition-colors pb-2 border-b border-gray-100 last:border-b-0 !amaranth${
                      link.name === "Home"
                        ? "text-[#C00027] amaranth font-normal"
                        : "text-[#1e1e1e] hover:text-[#C00027] amaranth font-normal"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              
              <div className="pt-2">
                 <Button href="#" onClick={() => setIsMenuOpen(false)} className="w-full">Schedule Eval</Button>
              </div>

            </div>
          </div>
        )}
      </div>
    </header>
    </>
  );
}
