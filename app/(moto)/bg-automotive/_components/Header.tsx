"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import Typography from "./Typography";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling half the viewport height
      if (window.scrollY > window.innerHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "Company", href: "#" },
    { name: "Products", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 shadow-sm bg-white transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="py-2">
        <div className="custom-container">
          <div className="flex items-center justify-between">
            {/* Logo Area */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="#">
                <img src="/moto/bg-automotive/bga-logo 1.png" alt="BGA Logo" className="w-[70px] md:w-[70px] h-auto object-contain" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-6 xl:gap-10 dmsans-font">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`header-link transition-colors py-2 whitespace-nowrap dmsans ${link.active
                    ? "text-[#2E6C36] font-bold border-b-[3px] border-[#2E6C36] pb-1"
                    : "text-[#333333] hover:text-[#2E6C36] font-medium hover:font-bold hover:border-b-[3px] hover:border-[#2E6C36] hover:pb-1"
                    }`}
                >
                  <Typography variant="span">{link.name}</Typography>
                </Link>
              ))}
            </nav>

            {/* Request Quote Button */}
            <div className=" hidden xl:flex items-center">
              <Button href="#" variant="primary" className="!bg-[#2E6C36] hover:!bg-[#1F4D24] !font-sans !font-medium !rounded-md !px-5 !py-2.5">
                Open Trade Account
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className=" xl:hidden flex items-center gap-4">
              <button
                className="text-black focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X size={32} strokeWidth={2} />
                ) : (
                  <Menu size={32} strokeWidth={2} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col z-50 border-t border-gray-100">
          <nav className="flex flex-col py-2 dmsans-font">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block border-b border-gray-100 last:border-0 transition-colors hover:bg-gray-50"
              >
                <div className="custom-container py-4">
                  <Typography variant="span" className={`header-link ${link.active
                    ? "text-[#2E6C36] font-bold dmsans"
                    : "text-[#333333] hover:text-[#2E6C36] font-semibold dmsans"
                    }`}>
                    {link.name}
                  </Typography>
                </div>
              </Link>
            ))}
            <div className="custom-container py-6">
              <Button href="#" variant="primary" className="w-full flex justify-center items-center !bg-[#2E6C36] hover:!bg-[#1F4D24] !font-sans !font-medium !rounded-md">
                Open Trade Account
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
