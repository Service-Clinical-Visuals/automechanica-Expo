"use client";

import React, { useState } from "react";
import Container from "./Container";
import { Send, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about-us" },
  { label: "Products", id: "products", hasChevron: true },
  { label: "News", id: "news" },
  { label: "Contact", id: "contact" },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else if (id === "home") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative" id="contact">
      {/* Background image + dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/moto/speedcar/footerbg.png')" }}
      />
      <div className="absolute inset-0 bg-[#1A1A1A]/90" />

      {/* Content */}
      <div className="relative z-10 pt-14 pb-4">
        <Container>
          {/* Main grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[30fr_20fr_25fr_25fr] gap-10 xl:gap-8 mb-10">

            {/* Col 1: Logo + description */}
            <div className="flex flex-col gap-5 items-start">
              <img
                src="/moto/speedcar/logo2.png"
                alt="SpeedCar Logo"
                className="h-16 w-auto object-contain"
              />
              <p className="content-white tracking-[0%]! leading-[24px]!">
                Speed Car SP specializes in high-quality automotive chemicals,
                lubricants, and industrial solutions. We are dedicated to
                delivering reliable products, innovative technology, and
                exceptional service to customers across multiple industries.
              </p>
            </div>

            {/* Col 2: Quick Links */}
            <div className="xl:pl-8">
              <h4 className="content-white text-[20px]! font-semibold underline underline-offset-4 decoration-white/60 mb-5">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleScrollTo(link.id)}
                      className="content-white text-[16px]! hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      {link.label}
                      {link.hasChevron && (
                        <span className="text-[10px]">▾</span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Contact */}
            <div>
              <h4 className="content-white text-[20px]! font-semibold underline underline-offset-4 decoration-white/60 mb-5">
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-white/80 shrink-0 mt-2" />
                  <span className="content-white text-[16px]! text-white/80">
                    Jeleńska 38A, 13-230 Lidzbark<br />
                    tel. +48 501 110 544
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-white/80 shrink-0" />
                  <a
                    href="tel:+48501110544"
                    className="content-white text-[16px]! hover:text-white transition-colors"
                  >
                    +48 501 110 544
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Newsletter */}
            <div>
              <h4 className="content-white text-[20px]! font-semibold underline underline-offset-4 decoration-white/60 mb-5">
                Subscribe for Newsletter
              </h4>
              <div className="flex h-11 w-full max-w-xs">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white px-3 text-sm font-albert text-dark outline-none placeholder-gray-400"
                />
                <button className="bg-primary text-white px-4 flex items-center justify-center hover:bg-primary/90 transition-colors shrink-0">
                  <Send size={16} />
                </button>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-white/80 pt-4 text-center">
            <p className="content-white font-medium text-white/70">
              © 2026 speedcaroil.pl &nbsp;|&nbsp; All Rights Reserved
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
