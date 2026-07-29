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
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Product Catalog", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Oilfinder", href: "#" },
  ];

  return (
    <>
      <header
        className={`w-full z-50 transition-all duration-300 ${
          headerState === "scrolled"
            ? "fixed top-0 left-0 bg-white shadow-md py-3 animate-in slide-in-from-top "
            : "absolute top-0 left-0 pt-4 md:pt-6"
        }`}
      >
        <div className="custom-container h-full" data-aos="fade-down">
          <div
            className={`w-full flex items-center justify-between relative transition-all duration-300 ${
              headerState === "scrolled"
                ? "bg-transparent rounded-none px-4 md:px-14 lg:px-14"
                : "bg-white rounded-full px-4 md:px-10 lg:px-12 py-2.5 shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-gray-200"
            }`}
          >
            {/* Logo */}
            <Link href="#" className="flex-shrink-0 z-50 flex items-center">
              <img
                src="/moto/jb-germanoil/logo.png"
                alt="JB Germanoil Logo"
                className="h-8 md:h-11 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-10 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => {
                const isActive = link.name === "Home";
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`aldrich-font header-link transition-colors pb-[2px] ${
                      isActive
                        ? "text-[#183A59] font-normal underline underline-offset-4 decoration-2 decoration-[#183A59]"
                        : "text-[#1e1e1e] font-normal hover:text-[#183A59] hover:underline hover:underline-offset-4 hover:decoration-2"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Contact Button */}
            <div className="hidden lg:block">
              <Button href="#">Product Search...</Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-[#1a1a1a] z-50 p-2 flex items-center"
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
        } lg:hidden flex flex-col pt-32 pb-8 overflow-y-auto shadow-2xl`}
      >
        <div className="custom-container flex flex-col items-start gap-6 w-full ">
          {navLinks.map((link) => {
            const isActive = link.name === "Home";
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`aldrich-font header-link transition-colors pb-[2px] px-4 md:px-14 lg:px-14${
                      isActive
                        ? "text-[#183A59] font-normal underline underline-offset-4 decoration-2 decoration-[#183A59]"
                        : "text-[#1e1e1e] font-normal hover:text-[#183A59] hover:underline hover:underline-offset-4 hover:decoration-2"
                    }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="mt-8 w-full px-4 md:px-14 lg:px-14">
            <Button href="#" className="w-full">
              Product Search...
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
