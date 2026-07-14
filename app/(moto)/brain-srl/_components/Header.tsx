"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Typography from "./Typography";
import { Phone, Mail, ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky header after scrolling past roughly the viewport height
      if (window.scrollY > window.innerHeight - 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftNavLinks = [
    { name: "Home", href: "#", active: true },
    { name: "Who We Are", href: "#" },
    { name: "Technology", href: "#" },
  ];

  const rightNavLinks = [
    { name: "Products", href: "#", hasDropdown: true },
    { name: "News", href: "#" },
    { name: "Catalogs", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const renderNavLinks = (links: any[]) => (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`flex items-center gap-1  transition-colors whitespace-nowrap ${link.active ? "text-primary" : "text-[##333333] hover:text-primary"
            }`}
        >
          <Typography variant="navbar" color="none" font="lato" className="tracking-tight">
            {link.name}
          </Typography>
          {link.hasDropdown && <ChevronDown size={14} className="mt-0.5" />}
        </Link>
      ))}
    </>
  );

  return (
    <>
      {/* STATIC HEADER (Normal Flow) */}
      <header className="w-full relative z-[100] bg-white">
        <div className="flex flex-col w-full">
          {/* Top Bar Layer */}
          <div className="w-full bg-[#192B3C] text-white flex justify-center items-center px-4 md:px-8 py-2 transition-all duration-300">
            <div className="flex items-center gap-6 md:gap-10 text-sm md:text-base font-secondary">
              <div className="flex items-center gap-2 hover:text-gray-300 transition-colors cursor-pointer">
                <Phone size={16} />
                <Typography variant="p" font="bebas" color="white"  >00.39.0422.493176</Typography>
              </div>
              <div className="flex items-center gap-2 hover:text-gray-300 transition-colors cursor-pointer">
                <Mail size={16} />
                <Typography variant="p" font="bebas" color="white">COMMERCIALE@BRAINKAT.IT</Typography>
              </div>
            </div>
          </div>

          {/* Content Layer */}
          <div className="relative custom-container z-10 flex items-center justify-between w-full px-4 md:px-8 max-w-[1920px] mx-auto py-3 lg:py-4">

            {/* Desktop Left Navigation */}
            <nav className="hidden xl:flex items-center gap-8 w-1/3 justify-end pr-8">
              {renderNavLinks(leftNavLinks)}
            </nav>

            {/* Logo Area (Center) */}
            <div className="flex-shrink-0 flex items-center justify-center w-auto xl:w-1/3">
              <Link href="#">
                <img src="/moto/brain-srl/logo.png" alt="Brain Logo" className="h-12 md:h-16 w-auto object-contain" />
              </Link>
            </div>

            {/* Desktop Right Navigation */}
            <nav className="hidden xl:flex items-center gap-8 w-1/3 justify-start pl-8">
              {renderNavLinks(rightNavLinks)}
            </nav>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center">
              <button
                className="text-primary focus:outline-none p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && !isSticky && (
          <div className="xl:hidden absolute left-0 right-0 bg-white shadow-[0_10px_20px_rgba(0,0,0,0.1)] flex flex-col z-50 top-full pb-4 pt-2">
            <nav className="flex flex-col">
              {[...leftNavLinks, ...rightNavLinks].map((link: any) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between px-6 py-2.5 w-full bg-white transition-colors group"
                >
                  <Typography variant="navbar" color="dark" font="lato" weight="normal" className="uppercase tracking-wide group-hover:text-primary transition-colors">
                    {link.name}
                  </Typography>
                  {link.hasDropdown && <ChevronDown size={14} className="text-gray-500" />}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* STICKY HEADER (Appears after scroll) */}
      <header
        className={`w-full fixed top-0 left-0 z-[100] bg-white shadow-md transition-transform duration-500 ${isSticky ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="flex flex-col w-full">
          {/* Content Layer (No Top Bar) */}
          <div className="relative custom-container z-10 flex items-center justify-between w-full px-4 md:px-8 max-w-[1920px] mx-auto py-3 lg:py-4">

            {/* Desktop Left Navigation */}
            <nav className="hidden xl:flex items-center gap-8 w-1/3 justify-end pr-8">
              {renderNavLinks(leftNavLinks)}
            </nav>

            {/* Logo Area (Center) */}
            <div className="flex-shrink-0 flex items-center justify-center w-auto xl:w-1/3">
              <Link href="#">
                <img src="/moto/brain-srl/logo.png" alt="Brain Logo" className="h-10 lg:h-12 w-auto object-contain" />
              </Link>
            </div>

            {/* Desktop Right Navigation */}
            <nav className="hidden xl:flex items-center gap-8 w-1/3 justify-start pl-8">
              {renderNavLinks(rightNavLinks)}
            </nav>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center">
              <button
                className="text-primary focus:outline-none p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && isSticky && (
          <div className="xl:hidden absolute left-0 right-0 bg-white shadow-[0_10px_20px_rgba(0,0,0,0.1)] flex flex-col z-50 top-full pb-4 pt-2">
            <nav className="flex flex-col">
              {[...leftNavLinks, ...rightNavLinks].map((link: any) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between px-6 py-2.5 w-full bg-white transition-colors group"
                >
                  <Typography variant="navbar" color="dark" font="lato" weight="normal" className="uppercase tracking-wide group-hover:text-primary transition-colors">
                    {link.name}
                  </Typography>
                  {link.hasDropdown && <ChevronDown size={14} className="text-gray-500" />}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
