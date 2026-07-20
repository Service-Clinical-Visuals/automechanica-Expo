"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Transition to full width when scrolling past roughly half the banner
      if (window.scrollY > 250) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "Corporate", href: "#" },
    { name: "Product Groups", href: "#" },
    { name: "Catalogs", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className={`w-full fixed ${isScrolled ? 'top-0 left-0 right-0' : 'top-4 left-0 right-0 px-8'} z-[100] transition-all duration-300`}>
      <div className="relative">
        <div className={`absolute inset-0 bg-[#0F3D26] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.16)] transition-all duration-300 ${isScrolled ? '' : 'rounded-[25px]'}`} />
        <div className={`relative z-10 mx-auto custom-container transition-all duration-300 ${isScrolled ? '' : ''}`}>
          <div className="relative flex items-center h-[74px] md:h-[74px]">
            <Link href="#" className="flex items-center z-20">
              <img
                src="/moto/soylu/logo.png"
                alt="Soylu Logo"
                className="h-10 md:h-15 w-auto object-contain"
              />
            </Link>

            <nav className="hidden xl:flex absolute inset-x-0 justify-center z-10">
              <div className="flex items-center gap-8 text-white tracking-[0.02em] font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`transition-colors whitespace-nowrap ${link.active
                      ? "text-white font-semibold"
                      : "text-white/80 hover:text-white"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="ml-auto hidden xl:flex z-20">
              <Link
                href="#"
                className="inline-flex items-center rounded-none rounded-tr-[23px] bg-white px-5 py-2.5 text-sm font-semibold text-[#0F3D26] shadow-sm transition hover:bg-[#F5F5F5]"
              >
                B2B USER LOGIN
                <img src="/moto/soylu/Arrow.png" alt="Arrow" className="ml-2 h-4 w-auto" />
              </Link>
            </div>

            <button
              className="xl:hidden ml-auto z-20 text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={26} strokeWidth={2} /> : <Menu size={26} strokeWidth={2} />}
            </button>
          </div>
        </div>

        <div
          className={`xl:hidden absolute left-4 right-4 top-full mt-2 bg-[#0F3D26] border border-white/10 rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "block" : "hidden"
            }`}
        >
          <nav className="flex flex-col px-4 py-4 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block rounded-2xl px-4 py-3 text-base font-medium transition-colors ${link.active
                  ? "bg-white/10 text-white"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-none rounded-tr-[23px] bg-white px-6 py-3 text-sm font-semibold text-[#0F3D26]"
            >
              B2B USER LOGIN
              <img src="/moto/soylu/Arrow.png" alt="Arrow" className="ml-2 h-4 w-auto" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
