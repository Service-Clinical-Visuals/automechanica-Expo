"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling half the viewport height (half of banner video)
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
    { name: "About Us", href: "#", hasDropdown: true },
    { name: "Products", href: "#", hasDropdown: true },
    { name: "Resources", href: "#", hasDropdown: true },
    { name: "News", href: "#" },
  ];

  return (
    <header className={`w-full fixed top-0 left-0 z-50 bg-white shadow-sm transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      
      {/* Background Red Bar - touches right edge of screen */}
      <div 
        className="absolute top-0 right-0 h-[40px] bg-[#E10600] hidden md:block z-0"
        style={{ width: "60vw", clipPath: "polygon(0 0, 100% 0, 100% 100%, 60px 100%)" }}
      ></div>

      <div className="custom-container relative h-[80px] md:h-[140px] flex items-center justify-between z-10">
        
        {/* Top Right Red Bar Content */}
        <div className="absolute top-0 right-0 h-[40px] flex justify-end items-center z-10 hidden md:flex">
          <div className="flex items-center gap-6 xl:gap-10">
            <div className="flex items-center gap-2">
              <img src="/moto/alcofilter/phone.png" alt="Phone" className="w-4 h-4 object-contain brightness-0 invert" />
              <span className="oswald-font text-white header-sublink font-medium">+357-22-467667</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/moto/alcofilter/mail.png" alt="Mail" className="w-4 h-4 object-contain brightness-0 invert" />
              <span className="oswald-font text-white header-sublink font-medium">marketing@alcofilters.com</span>
            </div>
            <div className="flex items-center gap-2 pl-4 xl:pl-6">
              <div className="border border-white flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-white/10 transition-colors">
                <img src="/moto/alcofilter/flag.png" alt="Flag" className="h-[20px] w-auto" />
                <img src="/moto/alcofilter/dwnarrow.png" alt="Dropdown" className="w-[20px] h-auto " />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex items-center justify-between w-full h-full relative z-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center h-full">
            <Link href="#" className="h-full flex items-center">
              {/* If logo has red background in image, just use it, else apply bg */}
              <img src="/moto/alcofilter/logo.png" alt="Alco Logo" className="h-[60px] md:h-[120px] w-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation & Search */}
          <div className="hidden xl:flex items-center justify-between flex-1 pl-12 h-full pt-[50px]">
            
            {/* Centered Links */}
            <div className="flex-1 flex justify-center">
              <nav className="flex items-center gap-6 xl:gap-10 oswald-font">
              {navLinks.map((link) => (
                <div key={link.name} className="flex items-center gap-1.5 group cursor-pointer">
                  <Link
                    href={link.href}
                    className={`header-link transition-colors whitespace-nowrap oswald-font tracking-wide font-medium ${
                      link.active
                        ? "text-[#E10600] "
                        : "text-gray-800 hover:text-[#E10600] hover:font-semibold "
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                   
                    <img src="/moto/alcofilter/dwnarrow1.png" alt="Alco Logo" className="h-[20px] w-auto object-contain" />
                  )}
                </div>
              ))}
              </nav>
            </div>

            {/* Search */}
            <div className="flex items-center border border-[#E10600]/40 h-[38px] overflow-hidden ml-4">
              <input 
                type="text" 
                placeholder="Search" 
                className="px-3 h-full outline-none oswald-font header-link font-medium text-black placeholder:text-black w-[150px] xl:w-[200px]"
              />
              <button className="bg-[#E10600] w-[38px] h-[38px] flex items-center justify-center hover:bg-[#b30500] transition-colors">
                <img src="/moto/alcofilter/search.png" alt="Search" className="w-[18px] h-[18px] brightness-0 invert" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-4 z-20">
            <button 
              className="text-[#E10600] focus:outline-none"
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

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col z-50 border-t border-gray-100">
          <nav className="flex flex-col py-2 oswald-font">
            {navLinks.map((link) => (
              <div key={link.name} className="flex items-center justify-between px-6 border-b border-gray-100 last:border-0">
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-4 w-full ${
                    link.active
                      ? "text-[#E10600] font-bold oswald-font"
                      : "text-black hover:text-[#E10600] font-bold oswald-font"
                  }`}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <img src="/moto/alcofilter/dwnarrow1.png" alt="Alco Logo" className="h-[20px] w-auto object-contain" />
                )}
              </div>
            ))}
            
            {/* Mobile Contact Info */}
            <div className="md:hidden bg-[#E10600] text-white px-6 py-5 flex flex-col gap-4 mt-2">
              <div className="flex items-center justify-between pb-4 border-b border-white/20">
                <span className="oswald-font font-semibold header-sublink">Translate:</span>
                <div className="flex items-center gap-2">
                  <img src="/moto/alcofilter/flag.png" alt="Flag" className="h-4 w-auto" />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <img src="/moto/alcofilter/phone.png" alt="" className="w-4 h-4 brightness-0 invert" />
                  <span className="oswald-font header-sublink font-normal">+357-22-467667</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="/moto/alcofilter/mail.png" alt="" className="w-4 h-4 brightness-0 invert" />
                  <span className="oswald-font header-sublink font-normal">marketing@alcofilters.com</span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
