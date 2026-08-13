"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Company", id: "about" },
  { name: "Products", id: "products" },
  { name: "Catalogues", id: "catalogues" },
  { name: "Communication", id: "communication" },
  { name: "Careers", id: "careers" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveLink(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white ${
          isScrolled ? "shadow-md py-2" : "py-4"
        }`}
      >
        <div className="custom-container flex items-center justify-between gap-4 w-full">
          {/* Logo Section */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/moto/lpr-srl/logo.png"
              alt="LPR Logo"
              className="h-12 sm:h-14 lg:h-16 min-[2100px]:h-28 min-[3800px]:h-40 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navbar Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-4 shrink-0">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <div key={link.name} className="relative flex items-center justify-center">
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className={`relative z-10 cursor-pointer py-2 px-2 flex flex-col items-center justify-center transition-colors navbar ${
                      isActive ? "text-primary" : "text-gray-700 hover:text-primary"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary" />
                    )}
                  </a>
                </div>
              );
            })}
          </nav>

          {/* Right Action: Search & Flags */}
          <div className="hidden xl:flex items-center shrink-0 gap-4 min-[2100px]:gap-8 min-[3800px]:gap-12">
            
            {/* Search Bar */}
            <div className="flex items-center border border-gray-100 shadow-md rounded-full pl-4 pr-1 py-1 bg-white min-[2100px]:py-2 min-[2100px]:pl-6 min-[2100px]:pr-2 min-[3800px]:py-3 min-[3800px]:pl-10 min-[3800px]:pr-3 shrink-0">
              <input 
                type="text" 
                placeholder="Search LPM,OEM,OES" 
                className="outline-none text-sm w-44 2xl:w-48 min-[2100px]:text-xl min-[2100px]:w-72 min-[3800px]:text-3xl min-[3800px]:w-96 text-gray-700 placeholder-gray-500 bg-transparent shrink-0" 
              />
              <div className="bg-[#78c193] rounded-full p-2 min-[2100px]:p-3 min-[3800px]:p-4 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity shrink-0">
                <Search className="w-4 h-4 min-[2100px]:w-6 min-[2100px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 text-white" strokeWidth={2.5} />
              </div>
            </div>

            {/* Flags */}
            <div className="flex items-center gap-4 min-[2100px]:gap-6 min-[3800px]:gap-8 shrink-0">
              {/* Italian Flag SVG */}
              <svg viewBox="0 0 3 2" className="w-6 h-4 min-[2100px]:w-10 min-[2100px]:h-7 min-[3800px]:w-14 min-[3800px]:h-9 shadow-sm rounded-sm cursor-pointer hover:opacity-80 transition-opacity shrink-0">
                <rect width="1" height="2" fill="#009246"/>
                <rect width="1" height="2" x="1" fill="#ffffff"/>
                <rect width="1" height="2" x="2" fill="#ce2b37"/>
              </svg>
              
              {/* Divider */}
              <div className="w-[1px] h-6 min-[2100px]:h-8 min-[3800px]:h-12 bg-gray-300 shrink-0"></div>

              {/* UK Flag SVG */}
              <svg viewBox="0 0 60 30" className="w-6 h-4 min-[2100px]:w-10 min-[2100px]:h-7 min-[3800px]:w-14 min-[3800px]:h-9 shadow-sm rounded-sm opacity-50 cursor-pointer hover:opacity-100 transition-opacity shrink-0">
                <clipPath id="s">
                  <path d="M0,0 v30 h60 v-30 z"/>
                </clipPath>
                <clipPath id="t">
                  <path d="M30,15 h30 v15 z v-15 h-30 z h-30 v-15 z v15 h30 z"/>
                </clipPath>
                <g clipPath="url(#s)">
                  <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                  <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                  <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
                  <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                  <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
                </g>
              </svg>
            </div>

          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="xl:hidden text-primary p-2 transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={32} className="w-8 h-8 min-[2100px]:w-10 min-[2100px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14" /> : <Menu size={32} className="w-8 h-8 min-[2100px]:w-10 min-[2100px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col space-y-4 max-h-[calc(100vh-70px)] overflow-y-auto border-t border-gray-100">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;
              return (
                <div key={link.name} className="relative border-b border-gray-100">
                  <a
                    href={`#${link.id}`}
                    className={`relative z-10 block navbar cursor-pointer py-4 ${
                      isActive ? "text-primary" : "text-gray-700 hover:text-primary"
                    }`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                  >
                    {link.name}
                  </a>
                </div>
              );
            })}
            
            <div className="pt-4 flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <svg width="24" height="16" viewBox="0 0 3 2" className="shadow-sm rounded-sm">
                    <rect width="1" height="2" fill="#009246"/>
                    <rect width="1" height="2" x="1" fill="#ffffff"/>
                    <rect width="1" height="2" x="2" fill="#ce2b37"/>
                  </svg>
                  
                  {/* Divider */}
                  <div className="w-[1px] h-6 bg-gray-300 shrink-0"></div>

                  <svg width="24" height="16" viewBox="0 0 60 30" className="shadow-sm rounded-sm opacity-50">
                    <clipPath id="sm">
                      <path d="M0,0 v30 h60 v-30 z"/>
                    </clipPath>
                    <clipPath id="tm">
                      <path d="M30,15 h30 v15 z v-15 h-30 z h-30 v-15 z v15 h30 z"/>
                    </clipPath>
                    <g clipPath="url(#sm)">
                      <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#tm)" stroke="#C8102E" strokeWidth="4"/>
                      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
                    </g>
                  </svg>
               </div>
               
               <div className="flex items-center border border-gray-100 rounded-full pl-3 pr-1 py-1 shadow-md bg-white w-[60%]">
                <input type="text" placeholder="Search LPM,OEM,OES" className="outline-none text-sm w-full placeholder-gray-500 bg-transparent text-gray-800" />
                <div className="bg-[#78c193] rounded-full p-2 ml-2 flex items-center justify-center">
                  <Search className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
              </div>
            </div>

          </div>
        )}
      </header>
    </>
  );
};

export default Header;
