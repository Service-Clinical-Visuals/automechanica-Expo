"use client";

import { useState } from "react";
import Container from "./Container";

const navLinks = [
  { label: "Home" },
  { label: "Agency" },
  { label: "Products" },
  { label: "Sectors" },
  { label: "News" },
  { label: "Contact" },
];

function ItalianFlag() {
  return (
    <span className="inline-flex overflow-hidden rounded-sm" style={{ width: 22, height: 15 }}>
      <span className="flex-1 bg-[#009246]" />
      <span className="flex-1 bg-white" />
      <span className="flex-1 bg-[#CE2B37]" />
    </span>
  );
}

export default function Header() {
  const [activeNav, setActiveNav] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-[20px] z-50 w-full">
      <Container className="border-1 bg-[#F9F9F9] border-[#00437A] rounded-[16px]">
        <div className="flex items-center h-[70px] px-4 sm:px-8 md:px-14 lg:px-[100px]">
          {/* Logo */}
          <div className="flex-1 flex items-center">
            <img src="/moto/ramoil/logo.png" alt="Ramoil" className="h-11 w-auto" />
          </div>

          {/* Desktop Nav — centered */}
          <nav className="hidden lg:flex items-center gap-7 navlink text-[#1A1A1A]!">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => setActiveNav(link.label)}
                className={`whitespace-nowrap transition-colors ${
                  activeNav === link.label
                    ? "text-[#1E1E1E] border-b-1 border-[#1a2e5a]"
                    : "text-[#1E1E1E] hover:text-[#2a4a8a]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Language selector */}
          <div className="hidden lg:flex flex-1 justify-end">
            <button className="flex items-center gap-1.5 border border-[#00437A] rounded-md px-3 py-1.5 text-sm font-medium text-[#1E1E1E] hover:bg-gray-50 transition-colors">
              <span>EN</span>
              <ItalianFlag />
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#1a2e5a] p-1"
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
      </Container>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-md">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => { setActiveNav(link.label); setMenuOpen(false); }}
                className={`navlink text-left py-3 text-sm border-b border-gray-100 transition-colors ${
                  activeNav === link.label
                    ? "text-[#1a2e5a] font-semibold"
                    : "text-[#1a2e5a] hover:text-[#2a4a8a]"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="mt-4 flex justify-center">
              <button className="flex items-center gap-1.5 border border-[#00437A] rounded-md px-3 py-1.5 text-sm font-medium text-[#1E1E1E]">
                <span>EN</span>
                <ItalianFlag />
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
