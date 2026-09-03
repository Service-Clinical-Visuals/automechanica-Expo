"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling half the viewport height
      if (window.scrollY > window.innerHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full flex flex-col fixed top-0 left-0 right-0 z-50 bg-white transition-transform duration-500 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      data-aos="fade-down"
      data-aos-duration="800">
      {/* Top Bar */}
      <div className="w-full bg-white py-2">
        <div className="custom-container flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2 sm:gap-0">
          <div className="flex gap-4 sm:gap-6 items-center">
            <a
              href="tel:+48228646700"
              className="flex items-center gap-2 group">
              <img
                src="/moto/denckermann/phone.png"
                alt="Phone"
                className="object-cover w-4 h-4 "
              />
              <span className="header-top-link font-normal text-[#122337] group-hover:text-[var(--color-secondary)] transition-colors oswald">
                +48 22 864 67 00
              </span>
            </a>
            <a
              href="mailto:biuro@denckermann.pl"
              className="flex items-center gap-2 group">
              <img
                src="/moto/denckermann/mail.png"
                alt="Email"
                className="object-cover w-4 h-4"
              />
              <span className="header-top-link font-normal text-[#122337] group-hover:text-[var(--color-secondary)] transition-colors oswald">
                biuro@denckermann.pl
              </span>
            </a>
          </div>

          <div className="flex gap-4 xl:gap-6 items-center hidden xl:flex">
            <Link
              href="#"
              className="header-top-link font-normal text-[#122337] hover:text-[var(--color-secondary)] transition-colors oswald">
              Product Search Engine
            </Link>
            <Link
              href="#"
              className="header-top-link font-normal text-[#122337] hover:text-[var(--color-secondary)] transition-colors oswald">
              Distributor Zone
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full bg-[var(--color-primary)] py-4">
        <div className="custom-container flex justify-between items-center">
          {/* Logo */}
          <Link href="/denckermann" className="flex-shrink-0">
            <img
              src="/moto/denckermann/logo1.png"
              alt="Denckermann Logo"
              className="object-contain h-6 sm:h-10 w-auto"
            />
          </Link>

          {/* Nav Links */}
          <nav className="hidden xl:flex gap-4 2xl:gap-8 items-center">
            {[
              "Home",
              "About Us",
              "Products",
              "Blog",
              "Contact",
              "Downloads",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                className="header-link text-white font-normal hover:text-[var(--color-secondary)] transition-colors oswald whitespace-nowrap">
                {item}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex gap-3 items-center">
            <button className="flex items-center gap-1 sm:gap-2 bg-white px-1 sm:px-3 py-1 sm:py-2 rounded-sm">
              <img
                src="/moto/denckermann/globe.png"
                alt="Language"
                className="object-cover"
              />
              <span className="header-link font-normal text-[#122337] oswald">
                PL
              </span>
              <img
                src="/moto/denckermann/chevron-down.png"
                alt="arrow"
                className="object-cover"
              />
            </button>
            <img
              src="/moto/denckermann/certified.png"
              alt="certified"
              className="object-cover h-7 sm:h-10 w-auto"
            />

            {/* Mobile Menu Toggle Button */}
            <button
              className="xl:hidden flex flex-col justify-center items-center gap-1.5 p-2 z-50 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Mobile Menu">
              <div
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
              <div
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></div>
              <div
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`xl:hidden absolute top-full left-0 w-full bg-[var(--color-primary)] flex flex-col transition-all duration-300 overflow-hidden shadow-2xl ${isMobileMenuOpen ? "max-h-[600px] border-t border-white/10" : "max-h-0"}`}>
        <div className="flex flex-col px-6 py-4 gap-4">
          {["Home", "About Us", "Products", "Blog", "Contact", "Downloads"].map(
            (item) => (
              <Link
                key={item}
                href="#"
                className="text-white header-link font-normal hover:text-[var(--color-secondary)] transition-colors py-2 border-b border-white/10 oswald"
                onClick={() => setIsMobileMenuOpen(false)}>
                {item}
              </Link>
            ),
          )}

          <Link
            href="#"
            className="text-white header-top-link font-normal hover:text-[var(--color-secondary)] transition-colors py-2 border-b border-white/10 oswald flex items-center justify-between ">
            Product Search Engine{" "}
            <span className="text-[var(--color-secondary)]">→</span>
          </Link>
          <Link
            href="#"
            className="text-white header-top-link font-normal hover:text-[var(--color-secondary)] transition-colors py-2 border-b border-white/10 oswald flex items-center justify-between ">
            Distributor Zone{" "}
            <span className="text-[var(--color-secondary)]">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
