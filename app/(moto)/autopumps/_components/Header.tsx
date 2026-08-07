"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AutopumpsButton from "./AutopumpsButton";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerState, setHeaderState] = useState<"top" | "scrolled">("top");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setHeaderState("scrolled");
      } else {
        setHeaderState("top");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/autopumps" },
    { name: "About us", href: "/autopumps/about" },
    { name: "Products", href: "/autopumps/products" },
    { name: "Quality", href: "/autopumps/quality" },
    { name: "New Developments", href: "/autopumps/developments" },
    { name: "Events", href: "/autopumps/events" },
    { name: "Contact", href: "/autopumps/contact" },
  ];

  return (
    <>
      <header
        className={`w-full z-50 transition-all duration-300 ${
          headerState === "scrolled"
            ? "fixed top-0 left-0 bg-white shadow-md py-3 animate-in slide-in-from-top"
            : "absolute top-0 left-0 pt-2"
        }`}
      >
        <div className={`mx-auto ${headerState === "scrolled" ? "px-6 xl:px-28" : "custom-container"}`} data-aos="fade-down">
          <div
            className={`w-full flex items-center justify-between relative transition-all duration-300 ${
              headerState === "scrolled"
                ? "bg-transparent rounded-none border-none"
                : "bg-white border border-gray-200 rounded-[24px] px-6 py-2 shadow-sm"
            }`}
          >
            {/* Logo */}
            <Link href="/autopumps" className="flex-shrink-0 z-50 flex items-center">
              <img
                src="/moto/autopumps/logo.png"
                alt="Autopumps Logo"
                className="h-14 md:h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.name === "Home" && pathname === "/autopumps");
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`header-link transition-colors pb-1  tracking-wide ${
                      isActive
                        ? "text-[#c91a1d] border-b-2 border-[#c91a1d] font-semibold"
                        : "text-gray-600 hover:text-[#c91a1d] hover:border-b-2 hover:border-[#c91a1d]/50 hover:font-semibold"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Contact Button */}
            <div className="hidden xl:block">
              <AutopumpsButton href="/autopumps/contact" variant="primary">
                Get in Touch
              </AutopumpsButton>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="xl:hidden text-[#064da1] z-50 p-2 flex items-start"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
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
        } xl:hidden flex flex-col pt-32 pb-6 overflow-y-auto shadow-2xl`}
      >
        <div className="custom-container flex flex-col items-start px-8 gap-6 w-full">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.name === "Home" && pathname === "/autopumps");
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`header-link transition-colors pb-1  tracking-wide ${
                  isActive
                    ? "text-[#c91a1d] border-b-2 border-[#c91a1d] font-semibold"
                    : "text-gray-600 hover:text-[#c91a1d] hover:border-b-2 hover:border-[#c91a1d]/50 hover:font-semibold"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="mt-8 w-full">
            <AutopumpsButton href="/autopumps/contact" variant="primary" className="w-full">
              Get in Touch
            </AutopumpsButton>
          </div>
        </div>
      </div>
    </>
  );
}
