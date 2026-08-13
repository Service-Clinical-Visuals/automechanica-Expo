"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Container from "./Container";

const navLinks = [
  { label: "HOME" },
  { label: "COMPANY" },
  { label: "ACTIVITIES" },
  { label: "CSR" },
  { label: "MEDIA" },
  { label: "CATALOG" },
  { label: "CONTACTS" },
];

export default function Header() {
  const [activeNav, setActiveNav] = useState("HOME");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full pt-3 sm:pt-4">
      <Container className="!px-0 !max-w-[95%]">
        <div className="rounded-2xl bg-black shadow-lg">
          <div className="flex items-center h-[64px] sm:h-[80px] px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <div className="flex items-center shrink-0">
              <img src="/moto/intercar/logo.png" alt="InterCar" className="h-8 sm:h-9 w-auto" />
            </div>

            {/* Desktop Nav — centered in the remaining space */}
            <nav className="hidden navlink lg:flex flex-1 items-center justify-center gap-6 xl:gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => setActiveNav(link.label)}
                  className={`whitespace-nowrap text-sm font-semibold tracking-wide transition-colors ${
                    activeNav === link.label
                      ? "text-[#00913F] underline underline-offset-3 decoration-1 decoration-[#009240]"
                      : "text-white hover:text-[#009240]"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop Search */}
            <div className="hidden navlink lg:flex items-center bg-secondary rounded-sm overflow-hidden shrink-0">
              <input
                type="text"
                placeholder="Search Here..."
                className="bg-transparent text-white placeholder-white/80 text-sm px-4 py-2.5 outline-none w-36 xl:w-44"
              />
              <button
                type="button"
                aria-label="Search"
                className="flex items-center justify-center px-3 py-2.5 text-white hover:bg-black/10 transition-colors"
              >
                <Search size={16} />
              </button>
            </div>

            {/* Mobile hamburger */}
            <div className="flex navlink lg:hidden items-center ml-auto">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white p-1"
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
                    className={`text-left py-3 text-sm font-semibold tracking-wide border-b border-white/10 transition-colors ${
                      activeNav === link.label
                        ? "text-[#00913F]"
                        : "text-white hover:text-[#00913F]"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <div className="mt-4 flex items-center bg-secondary rounded-sm overflow-hidden">
                  <input
                    type="text"
                    placeholder="Search Here..."
                    className="bg-transparent text-white placeholder-white/80 text-sm px-4 py-2.5 outline-none flex-1"
                  />
                  <button
                    type="button"
                    aria-label="Search"
                    className="flex items-center justify-center px-3 py-2.5 text-white hover:bg-black/10 transition-colors"
                  >
                    <Search size={16} />
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
