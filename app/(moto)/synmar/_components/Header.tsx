"use client";

import { useState } from "react";

const navLinks = [
  { label: "HOME" },
  { label: "COMPANY" },
  { label: "PRODUCTS" },
  { label: "SERVICE" },
  { label: "CONTACT" },
  { label: "OIL ADVISOR" },
];

export default function Header() {
  const [activeNav, setActiveNav] = useState("HOME");
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#1a1a1a] border-b border-[#2a2a2a] navbar twok">
      <div className="max-w-[90%] mx-auto flex items-center justify-between h-[78px]">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/moto/synmar/logo.png" alt="Synmar" className="h-11.5 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => setActiveNav(link.label)}
              className={`transition-colors whitespace-nowrap content-white ${
                activeNav === link.label
                  ? "text-[#c9a84c] border-b-2 border-[#c9a84c] pb-0.5"
                  : "text-white hover:text-[#c9a84c]"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop right actions */}
        <div className="hidden lg:flex items-center shrink-0 gap-0.75">
          {/* Search */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="flex items-center justify-center bg-[#c9a84c] text-white hover:brightness-90 transition-all"
            style={{ width: "46px", height: "45px", transform: "skewX(-12deg)" }}
            aria-label="Search"
          >
            <span style={{ transform: "skewX(12deg)", display: "flex" }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
          </button>

          {/* Become A Distributor */}
          <button
            className="flex items-center justify-center bg-[#c9a84c] content-white hover:brightness-90 transition-all"
            style={{ height: "45px", padding: "0 24px", transform: "skewX(-12deg)" }}
          >
            <span style={{ transform: "skewX(12deg)" }}>Become A Distributor</span>
          </button>

          {/* Globe / Language */}
          <button
            className="flex items-center justify-center bg-[#c9a84c] text-white hover:brightness-90 transition-all"
            style={{ width: "46px", height: "45px", transform: "skewX(-12deg)" }}
            aria-label="Language"
          >
            <span style={{ transform: "skewX(12deg)", display: "flex" }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </span>
          </button>
        </div>

        {/* Mobile right: search + hamburger */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-[#c9a84c] hover:text-white transition-colors"
            aria-label="Search"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white hover:text-[#c9a84c] transition-colors p-1"
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

      {/* Search bar (expandable) */}
      {searchOpen && (
        <div className="bg-[#111] border-t border-[#2a2a2a] px-6 py-3">
          <input
            autoFocus
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent text-white text-sm outline-none placeholder-gray-500"
          />
        </div>
      )}

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#1a1a1a] border-t border-[#2a2a2a]">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => { setActiveNav(link.label); setMenuOpen(false); }}
                className={`text-left py-3 text-sm border-b border-[#2a2a2a] transition-colors ${
                  activeNav === link.label
                    ? "text-[#c9a84c]"
                    : "text-white hover:text-[#c9a84c]"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button className="mt-4 bg-[#c9a84c] text-white text-[11px] font-bold tracking-wider py-3 hover:brightness-90 transition-all">
              Become A Distributor
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
