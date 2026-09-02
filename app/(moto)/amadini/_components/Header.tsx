"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AmadiniButton from "./AmadiniButton";
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
    { name: "Amadini", href: "/amadini" },
    { name: "About us", href: "/amadini/about" },
    { name: "Catalog", href: "/amadini/catalog" },
    { name: "News", href: "/amadini/news" },
    { name: "Previous Website", href: "/amadini/previous-website" },
  ];

  return (
    <>
      <header
        className={`w-full z-50 transition-all duration-300 ${
          headerState === "scrolled"
            ? "fixed top-0 left-0 bg-[#005484] shadow-md py-3 animate-in slide-in-from-top"
            : "absolute top-0 left-0 pt-0"
        }`}
      >
        <div className={`mx-auto ${headerState === "scrolled" ? "px-4 md:px-16" : "custom-container pt-2"}`} data-aos="fade-down">
          <div
            className={`w-full flex items-center justify-between relative transition-all duration-300 ${
              headerState === "scrolled"
                ? "bg-transparent rounded-none"
                : "bg-[#005484] rounded-2xl px-4 md:px-12 py-3 md:py-4 shadow-sm"
            }`}
          >
            {/* Logo */}
            <Link href="/amadini" className="flex-shrink-0 z-50 flex items-center">
              <img
                src="/moto/amadini/logo.png"
                alt="Amadini Logo"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-8 xl:gap-10 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`header-link transition-colors pb-[2px] ${
                      isActive
                        ? "text-white font-semibold border-b-2 border-white"
                        : "text-white/90 font-normal hover:text-white hover:border-b-2 hover:border-white/50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Contact Button */}
            <div className="hidden xl:block">
              <AmadiniButton href="/amadini/products" variant="secondary">
                View All Products
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13L13 1M13 1V13M13 1H1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </AmadiniButton>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="xl:hidden text-white z-50 p-2 flex items-start"
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
        className={`fixed inset-0 bg-[#005484] z-40 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } xl:hidden flex flex-col pt-24 pb-6 overflow-y-auto shadow-2xl`}
      >
        <div className="custom-container flex flex-col items-start px-4 md:px-16 gap-6 w-full">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`header-link text-xl transition-colors pb-[2px] ${
                  isActive
                    ? "text-white font-semibold border-b-2 border-white inline-block"
                    : "text-white/80 font-normal hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="mt-8">
            <AmadiniButton href="/amadini/products" variant="secondary" className="w-full">
              View All Products
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 13L13 1M13 1V13M13 1H1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </AmadiniButton>
          </div>
        </div>
      </div>
    </>
  );
}
