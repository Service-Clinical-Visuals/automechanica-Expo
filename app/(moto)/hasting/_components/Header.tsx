"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Typography from "./Typography";
import { ChevronDown, Menu, X, Search } from "lucide-react";

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

  const topNavLinks = [
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Web Catalog", href: "#" },
    { name: "Hastings Performance", href: "#" },
    { name: "Hastings European Headquarters", href: "#" },
    { name: "Inventory Availability", href: "#" },
  ];

  const mainNavLinks = [
    { name: "Piston Rings", href: "#" },
    { name: "Aftermarket", href: "#" },
    { name: "OEM", href: "#" },
    { name: "Tough Guy Tech Support", href: "#" },
    { name: "Catalogs & Cross Reference", href: "#" },
    { name: "Where to Buy", href: "#" },
  ];

  const renderMainNavLinks = () => (
    <>
      {mainNavLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="flex items-center gap-1 transition-colors whitespace-nowrap text-white hover:text-secondary"
        >
          <Typography variant="navbar" color="none" className="tracking-wide text-white group-hover:text-secondary">
            {link.name}
          </Typography>
        </Link>
      ))}
    </>
  );

  return (
    <>
      {/* STATIC HEADER (Normal Flow) */}
      <header className="w-full relative z-[100] bg-primary">
        <div className="flex flex-col w-full">
          {/* Top Bar Layer (White) */}
          <div className="hidden xl:flex w-full bg-white text-gray-800 justify-center px-4 md:px-8 py-2 transition-all duration-300 border-b border-gray-100">
            <div className="custom-container max-w-[1920px] flex items-center justify-between navbar">
              <nav className="flex items-center gap-6">
                {topNavLinks.map(link => (
                  <Link key={link.name} href={link.href} className="hover:text-primary transition-colors whitespace-nowrap font-secondary">
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-6">
                {/* Language Selector */}
                <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors font-secondary">
                  <div className="text-2xl leading-none min-[3800px]:text-3xl">🇬🇧</div>
                  <span>English</span>
                </div>
                {/* Search */}
                <div className="cursor-pointer hover:text-primary transition-colors">
                  <Search size={20} strokeWidth={2} className="min-[3800px]:w-10 min-[3800px]:h-10" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Layer (Primary Blue) */}
          <div className="w-full bg-primary py-4 lg:py-6">
            <div className="custom-container flex items-center justify-between">
              {/* Logo Area (Left) */}
              <div className="flex-shrink-0 flex items-center justify-start">
                <Link href="#">
                  <img src="/moto/hasting/logo.png" alt="Hastings Logo" className="h-10 md:h-12 w-auto object-contain" />
                </Link>
              </div>

              {/* Desktop Right Navigation */}
              <nav className="hidden xl:flex items-center gap-8 justify-end">
                {renderMainNavLinks()}
              </nav>

              {/* Mobile Menu Button & Search */}
              <div className="xl:hidden flex items-center gap-4">
                <Search size={24} className="text-white cursor-pointer" />
                <button
                  className="text-white focus:outline-none p-2 -mr-2"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && !isSticky && (
          <div className="xl:hidden absolute left-0 right-0 bg-primary shadow-[0_10px_20px_rgba(0,0,0,0.2)] flex flex-col z-50 top-full pb-4 pt-2 border-t border-white/10">
            <nav className="flex flex-col">
              {[...mainNavLinks, ...topNavLinks].map((link: any) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between px-6 py-3 w-full border-b border-white/5 transition-colors group"
                >
                  <Typography variant="navbar" color="none" className="tracking-wide text-white group-hover:text-secondary transition-colors">
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* STICKY HEADER (Appears after scroll) */}
      <header
        className={`w-full fixed top-0 left-0 z-[100] bg-primary shadow-lg transition-transform duration-500 ${isSticky ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="flex flex-col w-full">
          {/* Content Layer (No Top Bar) */}
          <div className="w-full bg-primary py-3 lg:py-4 shadow-md">
            <div className="custom-container flex items-center justify-between">
              {/* Logo Area (Left) */}
              <div className="flex-shrink-0 flex items-center justify-start">
                <Link href="#">
                  <img src="/moto/hasting/logo.png" alt="Hastings Logo" className="h-8 md:h-10 w-auto object-contain" />
                </Link>
              </div>

              {/* Desktop Right Navigation */}
              <nav className="hidden xl:flex items-center gap-8 justify-end">
                {renderMainNavLinks()}
              </nav>

              {/* Mobile Menu Button */}
              <div className="xl:hidden flex items-center gap-4">
                <Search size={24} className="text-white cursor-pointer" />
                <button
                  className="text-white focus:outline-none p-2 -mr-2"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && isSticky && (
          <div className="xl:hidden absolute left-0 right-0 bg-primary shadow-[0_10px_20px_rgba(0,0,0,0.2)] flex flex-col z-50 top-full pb-4 pt-2 border-t border-white/10">
            <nav className="flex flex-col">
              {[...mainNavLinks, ...topNavLinks].map((link: any) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between px-6 py-3 w-full border-b border-white/5 transition-colors group"
                >
                  <Typography variant="navbar" color="none" className="tracking-wide text-white group-hover:text-secondary transition-colors">
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
