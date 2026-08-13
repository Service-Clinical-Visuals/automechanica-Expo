"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "./Container";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Product Categories", href: "#" },
  { label: "Environmental Management", href: "#" },
  { label: "Corporate News", href: "#" },
  { label: "Blog", href: "#" },
];

export default function Header() {
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-black">
      <Container>
        <div className="flex items-center justify-between h-[116px] gap-0 xl:gap-6">

          {/* Left: Logo */}
          <div className="flex items-center flex-shrink-0">
            <Image
              src="/moto/gand-oil/logo.png"
              alt="Gand Oil"
              width={160}
              height={44}
              className="h-full w-auto object-contain"
              priority
            />
          </div>

          {/* Center: Nav links */}
          <nav className="hidden lg:flex items-center gap-0 xl:gap-6">
            {navLinks.map((link) => {
              const isActive = activeLink === link.label;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveLink(link.label)}
                  className={`
                    px-3 py-2 content text-[18px]! transition-colors uppercase
                    ${isActive
                      ? "text-[#7ec142]! underline underline-offset-4 decoration-[#7ec142]"
                      : "text-white hover:text-[#7ec142]"
                    }
                  `}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right: Get in Touch CTA */}
          <div className="hidden lg:flex items-center gap-0 flex-shrink-0">
            <div className="flex items-center">
              <button className="bg-[#414040] content font-semibold px-6 py-3 rounded-full hover:bg-[#222] transition-colors whitespace-nowrap">
                Get in Touch
              </button>
              <Image src="/moto/gand-oil/arrow_green.png" alt="Explore" width={32} height={32} className="w-11 h-11 object-contain flex-shrink-0" />
              
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex lg:hidden text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800">
          <nav className="flex flex-col px-6 py-3 gap-0">
            {navLinks.map((link) => {
              const isActive = activeLink === link.label;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => { setActiveLink(link.label); setMenuOpen(false); }}
                  className={`
                    py-3 text-sm font-semibold tracking-wide uppercase border-b border-gray-800 transition-colors
                    ${isActive ? "text-[#7ec142]" : "text-white hover:text-[#7ec142]"}
                  `}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="mt-4 flex items-center gap-2">
              <button className="bg-[#1a1a1a] text-white text-sm font-semibold px-6 py-3 rounded-full border border-[#333] w-full">
                Get in Touch
              </button>
              <button className="w-12 h-12 rounded-full bg-[#7ec142] flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
