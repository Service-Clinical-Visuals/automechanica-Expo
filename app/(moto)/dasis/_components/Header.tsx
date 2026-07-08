"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Container from "./Container";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileItem, setOpenMobileItem] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "Shop", href: "#" },
    {
      name: "About DASIS",
      href: "#",
      children: [
        { name: "Company Profile", href: "#" },
        { name: "Certificates", href: "#" },
        { name: "Careers", href: "#" },
      ],
    },
    {
      name: "Portfolio",
      href: "#",
      children: [
        { name: "Radiators", href: "#" },
        { name: "Condensers", href: "#" },
        { name: "Intercoolers", href: "#" },
      ],
    },
    { name: "logistics", href: "#" },
    {
      name: "Repair Request",
      href: "#",
      children: [
        { name: "Submit a Request", href: "#" },
        { name: "Track Request", href: "#" },
      ],
    },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 bg-white transition-transform duration-500 ${isVisible ? "translate-y-0" : "translate-y-[-45px]" }`}>
      <div className={`h-[45px] bg-primary`}/>

      <div className="bg-[#F2F3F7]">
        <Container>
          <div className="flex items-center justify-between gap-6 py-3 h-[85px]">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <img src="/moto/dasis/logo.png" alt="DASIS" className="w-[150px] md:w-[190px] h-auto object-contain" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex navlink items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group py-4">
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 whitespace-nowrap transition-colors"
                    style={{ color: link.active ? "#24318A" : "#1A1A1A" }}
                  >
                    {link.name}
                    {link.children && <ChevronDown size={14} strokeWidth={2.5} />}
                  </Link>

                  {link.children && (
                    <div className="absolute left-0 top-full hidden group-hover:block min-w-[220px] pt-0">
                      <div className="bg-white shadow-lg border-t-2 border-primary py-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-[#1A1A1A] hover:bg-gray-50 hover:text-primary transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Contact Button - Desktop */}
            <Link
              href="#"
              className="hidden rounded-tr-[16px] rounded-bl-[16px] heading-white font-normal! text-[24px]! leading-[150%]! py-2 px-10 lg:flex items-center justify-center bg-primary uppercase hover:bg-primary/90 transition-colors shadow-md"
            >
              Contact
            </Link>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              <button
                className="text-black focus:outline-none"
                onClick={() => {
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                  setOpenMobileItem(null);
                }}
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
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col z-50 border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col py-2 navlink">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-100 last:border-0">
                {link.children ? (
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobileItem(openMobileItem === link.name ? null : link.name)
                    }
                    className="w-full flex items-center justify-between px-6 py-3 text-[15px] uppercase font-bold"
                    style={{ color: link.active ? "#24318A" : "#1A1A1A" }}
                  >
                    {link.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${openMobileItem === link.name ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-6 py-3 text-[15px] uppercase font-bold"
                    style={{ color: link.active ? "#24318A" : "#1A1A1A" }}
                  >
                    {link.name}
                  </Link>
                )}
                {link.children && openMobileItem === link.name && (
                  <div className="bg-gray-50 pb-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-10 py-2 text-sm text-[#484848]"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="px-6 pb-4 pt-2">
            <Link
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-tr-[16px] rounded-bl-[16px] heading-white font-normal! text-[24px]! leading-[150%]! py-2 px-10 items-center justify-center bg-primary uppercase hover:bg-primary/90 transition-colors shadow-md"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
