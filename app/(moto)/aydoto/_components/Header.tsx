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
    { name: "Heritage & Roadmap", href: "#" },
    { name: "Our Passion", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Log-In", href: "#" },
    { name: "Media&News", href: "#" },
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
        <div className="custom-container h-full" data-aos="fade-up" >
          <div
            className={`w-full flex items-center justify-between transition-all duration-300 ${
              headerState === "scrolled"
                ? "bg-transparent rounded-none px-4 md:px-14 lg:px-14"
                : "bg-white rounded-full px-4 md:px-16 lg:px-16 py-2.5 shadow-[0_4px_25px_rgba(0,0,0,0.06)] border-1 border-gray-300"
            }`}
          >
            {/* Logo */}
            <Link href="#" className="flex-shrink-0 z-50 flex items-center">
              <img
                src="/moto/aydoto/logo.png"
                alt="AYD Logo"
                className="h-9 md:h-11 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
              {navLinks.map((link) => {
                const isActive = link.name === "Home";
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`oswald-font header-link transition-colors tracking-wide pb-[2px] ${
                      isActive
                        ? "text-[#01195d] font-bold underline underline-offset-2 decoration-2 decoration-[#01195d]"
                        : "text-[#1e1e1e] font-normal hover:text-[#01195d] hover:underline hover:underline-offset-2 hover:decoration-2"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Contact Button */}
            <div className="hidden xl:block">
              <Button href="#">Get in Touch</Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="xl:hidden text-[#01195d] z-50 p-2 flex items-center"
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
        } xl:hidden flex flex-col pt-32 pb-8 overflow-y-auto shadow-2xl`}
      >
        <div className="custom-container flex flex-col items-start gap-6 w-full px-8 md:px-16">
          {navLinks.map((link) => {
            const isActive = link.name === "Home";
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`oswald-font header-link transition-colors tracking-wide pb-1 ${
                  isActive
                    ? "text-[#01195d] font-bold underline underline-offset-8 decoration-2 decoration-[#01195d]"
                    : "text-[#1a1a1a] font-medium hover:text-[#01195d]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="mt-8 w-full">
            <Button href="#" className="w-full">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
