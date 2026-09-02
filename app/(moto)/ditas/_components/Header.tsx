"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#", active: true },
  { name: "About Us", href: "#" },
  { name: "Products", href: "#" },
  { name: "Technology", href: "#" },
  { name: "Governance", href: "#" },
  { name: "Investors", href: "#" },
  { name: "customers", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full bg-white h-[100px] flex items-center transition-all duration-500 ease-out ${
        isScrolled
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
    >
      <div className="custom-container flex items-center justify-between">
        {/* Logo */}
        <Link href="#">
          <img
            src="/moto/ditas/logo.png"
            alt="DİTAŞ Logo"
            className="w-[163px] h-[72px] object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={
                link.active
                  ? "nav-link-active text-[#005BAB]"
                  : "nav-link text-[#4B5563] hover:text-[#005BAB] transition-colors"
              }
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Language Button */}
        <button className="hidden xl:flex btn-shape btn-text items-center gap-2 px-6 h-[54px] bg-[#ED1C24] text-white hover:opacity-90 transition-opacity">
          Languages

          <img
            src="/moto/ditas/down.png"
            alt=""
            className="w-4 h-4 object-contain translate-y-[2px]"
          />
        </button>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-[#005BAB]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-[100px] left-0 w-full bg-white shadow-lg border-t border-gray-200 z-50">
          <div className="custom-container">
            <nav className="flex flex-col py-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={
                    link.active
                      ? "nav-link-active text-[#005BAB]"
                      : "nav-link text-[#4B5563] hover:text-[#005BAB] transition-colors"
                  }
                >
                  {link.name}
                </Link>
              ))}

              <button className="btn-shape btn-text flex items-center justify-center gap-2 px-6 h-[54px] bg-[#ED1C24] text-white w-full mt-2">
                Languages

                <img
                  src="/moto/ditas/down.png"
                  alt=""
                  className="w-4 h-4 object-contain"
                />
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}