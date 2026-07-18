
"use client";

import { useState, useEffect } from "react";
import Button from "./Button";

const navLinks = [
  { label: "Home" },
  { label: "About Us" },
  { label: "Products" },
  { label: "Distributors" },
  { label: "News" },
  { label: "Contact" },
];

export default function Header() {
  const [activeNav, setActiveNav] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerState, setHeaderState] = useState<"top" | "hidden" | "scrolled">("top");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 50) {
        setHeaderState("top");
      } else if (scrollY < window.innerHeight / 2) {
        setHeaderState("hidden");
      } else {
        setHeaderState("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Spacer so content doesn't jump */}
      <div className="w-full h-[70px]" />

      <header
        className={`w-full z-50 transition-all duration-700 ease-in-out fixed left-0 ${
          headerState === "hidden" ? "-translate-y-[150%] opacity-0" : "translate-y-0 opacity-100"
        } ${headerState === "scrolled" ? "top-0" : "top-5 bg-transparent"}`}
      >
        <div className={headerState === "scrolled" ? "w-full" : "custom-container mx-auto"}>
          <div
            className={`flex items-center transition-all duration-700 ease-in-out mx-auto ${
              headerState === "scrolled"
                ? "bg-white shadow-md border-b border-gray-100 px-6 lg:px-12 h-[70px] w-full rounded-none"
                : "bg-white shadow-md rounded-2xl px-6 lg:px-10 h-[70px] w-full"
            }`}
          >
            {/* Logo — flex-1 balances the CTA's flex-1 so nav stays centered */}
            <div className="flex-1 flex items-center">
              <img src="/moto/north-sea/logo.png" alt="North Sea" className="h-11 w-auto" />
            </div>

            {/* Desktop Nav — centered between logo and CTA */}
            <nav className="hidden lg:flex items-center gap-7 navlink">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => setActiveNav(link.label)}
                  className={`whitespace-nowrap transition-colors flex items-center ${
                    activeNav === link.label
                      ? "text-[#1a2e5a] font-bold border-b-2 border-[#1a2e5a]"
                      : "text-[#1E1E1E] hover:text-[#2a4a8a]"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA — flex-1 so nav stays centered */}
            <div className="flex-1 hidden lg:flex items-center justify-end">
              <Button text="Request a Demo" variant="secondary" showIcon className="px-6 py-2.5 rounded-full shrink-0" />
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

          {/* Mobile menu */}
          {menuOpen && (
            <div className="lg:hidden absolute top-[calc(100%+0.5rem)] left-4 right-4 bg-white shadow-xl rounded-xl flex flex-col z-50 border border-gray-100 max-w-full">
              <nav className="flex flex-col px-6 py-4 gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => { setActiveNav(link.label); setMenuOpen(false); }}
                    className={`navlink text-left py-3 text-sm border-b border-gray-100 last:border-0 transition-colors ${
                      activeNav === link.label
                        ? "text-[#1a2e5a] font-bold"
                        : "text-[#1a2e5a] hover:text-[#2a4a8a]"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <Button text="Request a Demo" variant="secondary" showIcon className="mt-4 rounded-full" />
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
