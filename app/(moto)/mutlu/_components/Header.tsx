"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Button from "./Button";
import Typography from "./Typography";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
    { name: "About", href: "#" },
    { name: "Products", href: "#" },
    { name: "Battery World", href: "#" },
    { name: "Why Mutlu Battery?", href: "#" },
    { name: "Our Sales Points", href: "#" },
  ];

  return (
    <header
      className={`fixed left-0 right-0 z-[100] transition-all duration-300 w-full flex justify-center ${isHidden ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        } ${isScrolled
          ? "top-0 py-0 bg-primary shadow-lg"
          : "top-0 py-4 min-[2500px]:py-6 min-[3800px]:py-8"
        }`}
    >
      <div className={`custom-container flex items-center justify-between transition-all duration-300 py-3 min-[2500px]:py-5 min-[3800px]:py-8 px-6 lg:px-8 min-[2500px]:px-12 min-[3800px]:px-16 ${isScrolled ? "" : "bg-primary rounded-[1rem] md:rounded-[1.5rem] min-[2500px]:rounded-[2rem] min-[3800px]:rounded-[3rem] shadow-lg"
        }`}>

        <div className="flex-shrink-0 flex items-center w-[40%] sm:w-[30%] md:w-[20%] lg:w-[15%] 2xl:w-[12%] min-[2500px]:w-[10%] min-[3800px]:w-[8%]">
          <Link href="#" className="w-full flex items-center justify-start">
            <img src="/moto/mutlu/logo.png" alt="Mutlu Logo" className="w-[80%] md:w-[70%] h-auto object-contain brightness-0 invert" />
          </Link>
        </div>

        <nav className="navbar hidden xl:flex items-center gap-4 xl:gap-8 2xl:gap-10 min-[2500px]:gap-16 min-[3800px]:gap-24">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors hover:opacity-80 group flex flex-col"
            >
              <div className="navbar text-white group-hover:opacity-80">
                {link.name}
              </div>
            </Link>
          ))}
        </nav>

        <div className="hidden xl:flex items-center">
          <Button text="Get In Touch" href="#" showIcon={true} variant="secondary" />
        </div>

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

      {isMobileMenuOpen && (
        <div className={`xl:hidden absolute left-0 w-full bg-primary border-t border-white/20 flex flex-col z-50 overflow-hidden transition-all duration-300 top-full shadow-xl`}>
          <nav className="navbar flex flex-col py-4 custom-container">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-4 border-b border-white/20"
              >
                <Typography variant="p" color="white" className="navbar">
                  {link.name}
                </Typography>
              </Link>
            ))}
            <div className="py-6 flex flex-col gap-4 items-start">
              <Button text="Get In Touch" href="#" showIcon={true} variant="secondary" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
