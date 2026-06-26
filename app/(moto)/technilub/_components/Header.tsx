"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "./Container";
import { MdArrowDropDown } from "react-icons/md";

const navLinks = [
  { label: "Technilub", hasDropdown: true },
  { label: "Our Domains", hasDropdown: true },
  { label: "Our products", hasDropdown: true },
  { label: "News", hasDropdown: false },
  { label: "Buyers Guide", hasDropdown: false },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-secondary">
      <Container>
        <div className="flex items-center justify-between h-[96px] gap-6">

          {/* Left: Nav links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                className="flex items-center gap-1 px-3 py-2 text-white content-white whitespace-nowrap hover:text-gray-300 transition-colors"
              >
                {link.label}
                {link.hasDropdown && (
                 <MdArrowDropDown />
                )}
              </button>
            ))}
          </nav>

          {/* Center: Logo */}
          <div className="flex items-center justify-center flex-shrink-0">
            <Image
              src="/moto/technilub/logo.png"
              alt="Technilub"
              width={160}
              height={48}
              className="h-15 w-auto object-contain"
              priority
            />
          </div>

          {/* Right: Search bar */}
          <div className="hidden lg:flex items-center">
            <div className="flex bg-white items-center overflow-hidden p-0.5">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className=" text-gray-700 text-sm px-3 py-2 w-55 outline-none placeholder-gray-400"
              /> 
              <button className="bg-[#1e3a8a] hover:bg-[#162d6e] transition-colors flex items-center justify-center">
                <Image src="/moto/technilub/search.png" alt="Search" width={16} height={16} className="w-11 h-9 object-contain" />
              </button>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex lg:hidden text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
      </Container>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#111111] border-t border-gray-700">
          <nav className="flex flex-col px-6 py-3 gap-0">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between text-left py-3 text-sm text-white border-b border-gray-800 hover:text-gray-300 transition-colors"
              >
                {link.label}
                {link.hasDropdown && (
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="white" className="opacity-70">
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                )}
              </button>
            ))}
            <div className="flex items-center mt-4 border border-[#c8102e] overflow-hidden">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-white text-gray-700 text-sm px-3 py-2 outline-none placeholder-gray-400"
              />
              <button className="bg-[#1e3a8a] px-3 py-2 flex items-center justify-center">
                <Image src="/moto/technilub/search.png" alt="Search" width={16} height={16} className="w-4 h-4 object-contain" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
