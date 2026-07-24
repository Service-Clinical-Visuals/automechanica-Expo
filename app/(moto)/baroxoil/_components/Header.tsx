"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import Button from "./Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

useEffect(() => {
     const handleScroll = () => {
       // Show header after scrolling half the viewport height
       if (window.scrollY > window.innerHeight / 2) {
         setIsScrolled(true);
       } else {
         setIsScrolled(false);
       }
     };
 
     handleScroll(); // Check on initial load
     window.addEventListener("scroll", handleScroll, { passive: true });
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "Product Groups", href: "#", hasDropdown: true },
    { name: "About Us", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Become a Distributor", href: "#" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 bg-[#0F2469] transition-transform duration-500 shadow-sm ${isScrolled ? 'bg-[#0F2469] shadow-lg py-4' : '-translate-y-full'}`}>
      <div className="custom-container flex items-center justify-between">
        
        {/* Left Nav */}
        <nav className="hidden xl:flex items-center xl:gap-3 2xl:gap-8 flex-1">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`odibee-sans-font font-normal header-link whitespace-nowrap transition-colors flex items-center gap-1 ${
                link.active ? "text-white " : "text-white hover:text-white"
              }`}
            >
              {link.name}
              {link.hasDropdown && <ChevronDown size={16} />}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <Link href="#" className="flex-shrink-0 z-50 flex justify-center flex-1">
          <img 
            src="/moto/baroxoil/logo.png" 
            alt="Barox Oil Logo" 
            className="h-10 md:h-12 w-auto object-contain" 
            
          />
         
        </Link>

        {/* Right Nav & Search */}
        <div className="hidden xl:flex items-center justify-end xl:gap-4 2xl:gap-5 flex-1">
          <div className="flex bg-white rounded-md overflow-hidden h-[40px]">
            <button className="instrument-sans-font font-normal flex items-center gap-1 bg-gray-100 xl:px-2 2xl:px-3 header-sublink text-gray-400 border-r border-gray-200 whitespace-nowrap">
              All categories <ChevronDown size={14} />
            </button>
            <div className="relative flex items-center">
              <input 
                type="text" 
                placeholder="Search for Products..." 
                className="instrument-sans-font font-normal xl:px-3 2xl:px-4 py-2 header-sublink outline-none xl:w-28 2xl:w-48 text-gray-700"
              />
              <Search className="absolute right-2 2xl:right-3 text-gray-400" size={16} />
            </div>
          </div>
          <Button href="#" className="whitespace-nowrap xl:!px-4 2xl:!px-8">
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="xl:hidden text-white z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 left-0 right-0 h-auto bg-[#0F2469] z-40 shadow-xl transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        } xl:hidden flex flex-col pt-24 pb-8`}
      >
        <div className="custom-container flex flex-col items-start gap-6 w-full">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`odibee-sans-font font-normal header-link transition-colors flex items-center gap-1 ${
                link.active ? "text-white " : "text-white hover:text-white"
              }`}
            >
              {link.name}
              {link.hasDropdown && <ChevronDown size={20} />}
            </Link>
          ))}
          <div className="w-full mt-4 flex flex-col gap-4">
            <div className="flex bg-white rounded-md overflow-hidden h-[45px] w-full max-w-sm">
              <button className="flex items-center justify-between px-3 header-sublink text-gray-600 border-r border-gray-200 w-1/3">
                All categories <ChevronDown size={14} />
              </button>
              <div className="relative flex items-center w-2/3">
                <input 
                  type="text" 
                  placeholder="Search for Products..." 
                  className="px-4 py-2 header-sublink text-sm outline-none w-full text-gray-700"
                />
              </div>
            </div>
            <Button 
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
