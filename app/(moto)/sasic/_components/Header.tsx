"use client";

import { useState } from "react";

const navLinks = [
  { label: "Home" },
  { label: "Sasic" },
  { label: "Products" },
  { label: "E-Catalogue" },
  { label: "Value" },
];

function FrenchFlag() {
  return (
    <span className="inline-flex overflow-hidden rounded-sm" style={{ width: 21, height: 16 }}>
      <span className="flex-1 bg-[#002395]" />
      <span className="flex-1 bg-white" />
      <span className="flex-1 bg-[#ED2939]" />
    </span>
  );
}

export default function Header() {
  const [activeNav, setActiveNav] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full bg-[#1A1A1A]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 10px)",
      }}
    >
      <div className="flex items-center h-[85px] px-4 sm:px-8 md:px-10 lg:px-[100px]">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/moto/sasic/logo.png" alt="Sasic" className="h-[57px]! w-auto" />
        </div>

        {/* Desktop Nav — centered */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-12 navlink">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => setActiveNav(link.label)}
              className={`whitespace-nowrap uppercase text-white heading text-[20px]! transition-colors ${
                activeNav === link.label
                  ? "text-primary!"
                  : "text-white! hover:text-[#F2A93B]!"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right side: language selector + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="flex items-center gap-1.5 bg-white rounded-md px-3 py-1.5 font-semibold text-[#1A1A1A] hover:bg-gray-100 transition-colors">
            <FrenchFlag />
            <span className="heading text-[20px]! text-[#F7C41F]!">FR</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <button className="whitespace-nowrap heading text-[20px]! font-normal! uppercase bg-primary hover:bg-[#e09a2c] transition-colors rounded-md px-5 py-1.5 text-sm font-bold text-[#1A1A1A]">
            Get in touch
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex lg:hidden items-center ml-auto">
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
        <div className="lg:hidden bg-[#1A1A1A] border-t border-white/10 shadow-md">
          <nav className="navlink flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => { setActiveNav(link.label); setMenuOpen(false); }}
                className={`uppercase text-left py-3 heading text-[20px]! border-b border-white/10 transition-colors ${
                  activeNav === link.label
                    ? "text-[#F2A93B]! font-semibold"
                    : "text-white! hover:text-[#F2A93B]!"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="mt-4 flex items-center justify-center gap-4">
              <button className="flex items-center gap-1.5 bg-white rounded-md px-3 py-1.5 text-[#1A1A1A]">
                <FrenchFlag />
                <span className=" heading text-[20px]!">FR</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <button className="uppercase bg-primary! heading text-[20px]! rounded-md px-5 py-1.5 text-sm font-bold text-[#1A1A1A]">
                Get in touch
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
