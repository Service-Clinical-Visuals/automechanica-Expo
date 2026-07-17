"use client";

import { useState } from "react";
import Container from "./Container";
import Button from "./Button";

const navLinks = [
  { label: "Home" },
  { label: "About Us" },
  { label: "Products And Quality" },
  { label: "News And Events" },
  { label: "Contacts" },
];

export default function Header() {
  const [activeNav, setActiveNav] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-[20px] z-50 w-full">
      <Container className="border border-[#00000040] bg-white rounded-full shadow-sm">
        <div className="flex items-center justify-between h-[70px] px-4 sm:px-8 md:px-10 lg:px-[40px]">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/moto/euroricambi/logo.png" alt="Euroricambi Group" className="h-10 w-auto" />
          </div>

          {/* Desktop Nav — centered */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-3 xl:gap-7 text-[#1A1A1A]!">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => setActiveNav(link.label)}
                className={`navlink whitespace-nowrap transition-colors ${
                  activeNav === link.label
                    ? "text-[#183A59]! border-b-2 border-primary font-bold!"
                    : "text-[#1E1E1E] hover:text-[#10355F]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Discover More button */}
          <div className="hidden navlink text-white! lg:flex items-center">
            <Button
              text="Discover More"
              variant="secondary"
              showIcon
              className="rounded-sm px-5 py-2.5 font-medium!"
            />
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
          <div className="mt-4 flex navlink text-white! lg:hidden items-center">
            <Button
              text="Discover More"
              variant="secondary"
              showIcon
              className="rounded-sm px-5 py-2.5 font-medium!"
            />
          </div>
          </nav>
        </div>
      )}
    </header>
  );
}
