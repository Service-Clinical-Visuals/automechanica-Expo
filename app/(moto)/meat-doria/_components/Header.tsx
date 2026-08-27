"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Mail, User, User2 } from "lucide-react";
import Container from "./Container";
import { TbPhoneRinging } from "react-icons/tb";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "About Us", href: "#" },
    { name: "Catalogues", href: "#" },
    { name: "Media", href: "#" },
    { name: "News", href: "#" },
    { name: "Contacts", href: "#" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#F2F3F5]">
      <Container>
        <div className="flex h-[127px] items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img src="/moto/meat-doria/logo.png" alt="Meat & Doria" className="w-[130px] md:w-[150px] h-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex navlink items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="whitespace-nowrap transition-colors"
                style={{ color: link.active ? "#24318A" : "#1A1A1A" }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact + Translate/Login - Desktop */}
          <div className="hidden lg:flex flex-col items-end justify-between gap-3 h-full py-6">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <TbPhoneRinging size={18} className="text-primary" />
                <span className="navlink font-normal!">+3901 1961 4301</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                <span className="navlink font-normal!">meat-doria@meat-doria.com</span>
              </div>
            </div>
            
            <div className="h-1 w-full border-[#1E1E1E40] border-t-1" />

            <div className="flex items-center justify-center gap-3">
              <span className="navlink tfon t-normal!">Translate:</span>
              <span className="text-[28px] leading-none">🇬🇧</span>

              <button
                  className="navlink gap-2 flex justify-between text-white! rounded-tr-[16px] rounded-bl-[16px] bg-primary pl-4 pr-2 py-1.5 transition-colors"
              >
                  Login/Register
                <span className="w-6 h-6 bg-white flex items-center justify-center rounded-tr-[9px]">
                  <User2 fill="#1C6E9F" />
                </span>
              </button>

            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              className="text-black focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X size={28} strokeWidth={2} />
              ) : (
                <Menu size={28} strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col z-50 border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col py-2 navlink">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex navlink items-center justify-between px-6 py-3 font-medium border-b border-gray-100 last:border-0"
                style={{ color: link.active ? "#24318A" : "#1A1A1A" }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="px-6 py-4 flex flex-col gap-3 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <Phone size={15} className="text-primary" />
              <span className="navlink font-normal!">+3901 1961 4301</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={15} className="text-primary" />
              <span className="navlink  font-normal!">meat-doria@meat-doria.com</span>
            </div>
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-3">
                <span className="navlink font-normal!">Translate:</span>
                <span className="text-[16px] leading-none">🇬🇧</span>
              </div>
              <button
                  className="navlink gap-2 flex justify-between text-white! rounded-tr-[16px] rounded-bl-[16px] bg-primary pl-4 pr-2 py-1.5 transition-colors"
              >
                  Login/Register
                <span className="w-6 h-6 bg-white flex items-center justify-center rounded-tr-[9px]">
                  <User2 fill="#1C6E9F" />
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
