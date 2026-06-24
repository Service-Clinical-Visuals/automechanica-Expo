"use client";

import { useState } from "react";
import Container from "./Container";

const navLinks = [
  { label: "Home" },
  { label: "Qualitium" },
  { label: "Products" },
  { label: "About Us" },
  { label: "Contact" },
  { label: "Choose The Oil" },
];

export default function Header() {
  const [activeNav, setActiveNav] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white shadow-sm">
      <Container>
        <div className="flex items-center h-[70px]">
          {/* Logo — flex-1 so nav stays centered */}
          <div className="flex-1 flex items-center">
            <img src="/moto/chemnaft/logo.png" alt="Chemnaft" className="h-11 w-auto" />
          </div>

          {/* Desktop Nav + CTA — grouped on the right */}
          <div className="hidden lg:flex items-center gap-15">
            <nav className="flex items-center gap-7 navlink">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => setActiveNav(link.label)}
                  className={`whitespace-nowrap transition-colors flex items-center ${
                    activeNav === link.label
                      ? "text-[#1E1E1E] border-b-2 border-[#1a2e5a]"
                      : "text-[#1E1E1E] hover:text-[#2a4a8a]"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <button
              className="bg-primary text-white text-[16px]! content-white px-6 py-0.5 hover:bg-[#162448] transition-colors shrink-0"
              style={{ clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)" }}
            >
              Our Quality Promise
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
            <button className="mt-4 bg-primary content-white font-medium py-3 hover:bg-[#162448] transition-colors">
              Our Quality Promise
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
