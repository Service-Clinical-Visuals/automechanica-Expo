"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // hidden right at the top, appears once user has scrolled past the header's own height
      setIsVisible(window.scrollY > 78.32);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "About Us", href: "#" },
    { name: "Our Product", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <motion.header
      initial={{ y: "-100%" }}
      animate={{ y: isVisible ? "0%" : "-100%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full bg-[#F9F9F9] h-[78.32px] flex items-center z-50 shadow-sm"
    >
      <div className="custom-container flex items-center justify-between">
        <Link href="#" className="logo-text text-[#003344]">
          AXIOM Autotech Inc.
        </Link>

        <nav className="hidden xl:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={
                link.active
                  ? "nav-link-active text-black"
                  : "nav-link text-[#444444] hover:text-[#003344] transition-colors"
              }
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:flex">
          <Button href="#" bgColor="#003344" textColor="#FFFFFF">
            Get in touch
          </Button>
        </div>

        <button
          className="xl:hidden text-[#003344]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden absolute top-[78.32px] left-0 w-full bg-[#F9F9F9] shadow-lg border-t border-gray-200 z-50"
          >
            <div className="custom-container">
              <nav className="flex flex-col py-4 gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={
                      link.active
                        ? "nav-link-active text-black"
                        : "nav-link text-[#444444] hover:text-[#003344] transition-colors"
                    }
                  >
                    {link.name}
                  </Link>
                ))}
                <Button href="#" bgColor="#003344" textColor="#FFFFFF" className="w-full mt-2">
                  Get in touch
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}