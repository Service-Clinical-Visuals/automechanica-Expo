"use client";

import { useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import Container from "./Container";

const navLinks = [
  { label: "Homepage" },
  { label: "Methodology" },
  { label: "Products" },
  { label: "Packaging" },
  { label: "Our Strength" },
  { label: "Our Experts" },
  { label: "History" },
];

export default function Header() {
  const [activeNav, setActiveNav] = useState("Homepage");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full pt-3 sm:pt-4">
      <Container className="!px-0 !max-w-[95%]">
        <div className="rounded-2xl bg-white shadow-lg">
          <div className="flex items-center h-[64px] sm:h-[80px] px-4 sm:px-4 lg:px-12.5">
            {/* Logo */}
            <div className="flex items-center shrink-0">
              <img src="/moto/seld-production/logo.png" alt="InterCar" className="h-10 md:h-12 xl:h-15 w-auto" />
            </div>

            {/* Desktop Nav — centered in the remaining space */}
            <nav className="hidden lg:flex flex-1 items-center justify-center gap-1.5 xl:gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => setActiveNav(link.label)}
                  className={`navlink whitespace-nowrap tracking-wide transition-colors ${
                    activeNav === link.label
                      ? "text-primary! underline underline-offset-3 decoration-1 decoration-primary"
                      : "hover:text-primary!"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>


            <button
              type="button"
              aria-label="Search"
              className="hidden lg:flex heading-white font-medium! rounded-br-[24px] rounded-tl-[24px] text-[20px]! items-center bg-primary justify-center px-8 py-2.5 text-white hover:text-primary! hover:bg-black/10 transition-colors"
            >
              Get In Touch
              <ArrowRight size={24} className="ml-1" />
            </button>

            {/* Mobile hamburger */}
            <div className="flex navlink lg:hidden items-center ml-auto">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-black p-1"
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="lg:hidden border-t border-white/10">
              <nav className="navlink flex flex-col px-6 py-4 gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => { setActiveNav(link.label); setMenuOpen(false); }}
                    className={`navlink text-left py-3 text-sm font-semibold tracking-wide border-b border-white/10 transition-colors ${
                      activeNav === link.label
                        ? "text-primary!"
                        : "hover:text-primary!"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <div className="mt-4 flex items-center rounded-sm overflow-hidden">
                  <button
                    type="button"
                    className="flex lg:hidden heading-white font-medium! rounded-br-[24px] rounded-tl-[24px] text-[20px]! items-center bg-primary justify-center px-8 py-2.5 text-white hover:bg-black/10 transition-colors"
                  >
                    Get In Touch
                    <ArrowRight size={24} className="ml-1" />
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
