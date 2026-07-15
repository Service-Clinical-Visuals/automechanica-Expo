"use client";

import { useState } from "react";
import Container from "./Container";

const navLinks = [
  { label: "Home" },
  { label: "Products" },
  { label: "Shop" },
  { label: "Career" },
  { label: "About Us" },
];

export default function Header() {
  const [activeNav, setActiveNav] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-[20px] z-50 w-full">
      <Container className="border-1 bg-[#121212] border-[#FFFFFF40] rounded-[16px]">
        <div className="flex items-center h-[75px] px-4 sm:px-8 md:px-14 lg:px-[60px]">
          {/* Logo */}
          <div className="flex-1 flex items-center">
            <img src="/moto/lrt/logo.png" alt="LRT Automotive" className="h-12 w-auto" />
          </div>

          {/* Desktop Nav — centered */}
          <nav className="hidden lg:flex items-center gap-8 navlink">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => setActiveNav(link.label)}
                className={`whitespace-nowrap pb-1 transition-colors ${
                  activeNav === link.label
                    ? "text-white border-b border-white"
                    : "text-[#B0B0B0] hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Contact Us */}
          <div className="hidden lg:flex flex-1 justify-end">
            <button className="flex navlink text-[18px]! font-bold! text-black! items-center gap-2 bg-white rounded-full pl-5 pr-1.5 py-1.5 hover:opacity-90 transition-opacity">
              <span>Contact Us</span>
              <img src="/moto/lrt/arrowup.png" alt="" className="h-6.5 w-6.5" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center">
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
      </Container>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#121212] border-t border-[#2a2a2a] shadow-md rounded-b-[16px]">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => { setActiveNav(link.label); setMenuOpen(false); }}
                className={`navlink text-left py-3 text-sm border-b border-[#2a2a2a] transition-colors ${
                  activeNav === link.label
                    ? "text-white font-semibold"
                    : "text-[#B0B0B0] hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="mt-4 flex justify-center">
              <button className="flex navlink text-[18px]! font-bold! text-black! items-center gap-2 bg-white rounded-full pl-5 pr-1.5 py-1.5">
                <span>Contact Us</span>
                <img src="/moto/lrt/arrowup.png" alt="" className="h-6.5 w-6.5" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
