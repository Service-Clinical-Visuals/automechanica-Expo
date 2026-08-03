"use client";

import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "News", href: "#news" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact Us", href: "#contact" },
  ];

  const productLinks = [
    { label: "Cylinder Head Gasket", href: "#cylinder-head-gasket" },
    { label: "Valve Cover Gasket", href: "#valve-cover-gasket" },
    { label: "Oil Pump Gasket", href: "#products" },
    { label: "Exhaust Pipe Gasket", href: "#products" },
  ];

  return (
    <footer className="w-full bg-[#282828] text-white overflow-hidden" style={{ color: "#FFFFFF" }}>
      {/* Top Main Footer */}
      <div className="custom-container py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: Brand Logo & Description */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <Link href="/temel" className="inline-block">
              <Logo isDark={true} className="h-10 md:h-12 w-auto" />
            </Link>

            <p className="!text-white text-xs sm:text-sm font-secondary leading-relaxed mt-2" style={{ color: "#FFFFFF" }}>
              Temel Conta is a leading manufacturer of high-quality gasket and sealing solutions, serving the automotive and industrial sectors. With decades of experience and advanced production technologies, the company delivers reliable products designed for durability, precision, and consistent engine performance.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 lg:pl-4 flex flex-col gap-4">
            <h4 className="!text-white font-primary font-semibold text-base tracking-wide" style={{ color: "#FFFFFF" }}>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm font-secondary !text-white" style={{ color: "#FFFFFF" }}>
              {quickLinks.map((link, idx) => (
                <li key={idx} style={{ color: "#FFFFFF" }}>
                  <Link
                    href={link.href}
                    className="!text-white hover:!text-[var(--color-primary)] transition-colors duration-200"
                    style={{ color: "#FFFFFF" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="!text-white font-primary font-semibold text-base tracking-wide" style={{ color: "#FFFFFF" }}>
              Products
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm font-secondary !text-white" style={{ color: "#FFFFFF" }}>
              {productLinks.map((prod, idx) => (
                <li key={idx} style={{ color: "#FFFFFF" }}>
                  <Link
                    href={prod.href}
                    className="!text-white hover:!text-[var(--color-primary)] transition-colors duration-200"
                    style={{ color: "#FFFFFF" }}
                  >
                    {prod.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="!text-white font-primary font-semibold text-base tracking-wide" style={{ color: "#FFFFFF" }}>
              Contact
            </h4>
            <div className="flex flex-col gap-3.5 text-xs sm:text-sm font-secondary !text-white" style={{ color: "#FFFFFF" }}>
              <div className="flex items-start gap-3 !text-white" style={{ color: "#FFFFFF" }}>
                <MapPin className="w-4 h-4 !text-white shrink-0 mt-0.5" />
                <span className="leading-snug !text-white" style={{ color: "#FFFFFF" }}>
                  Atatürk Caddesi No:162 Tunç Han 35210 İzmir-TÜRKİYE
                </span>
              </div>

              <div className="flex items-center gap-3 !text-white" style={{ color: "#FFFFFF" }}>
                <Phone className="w-4 h-4 !text-white shrink-0" />
                <a
                  href="tel:+902324361081"
                  className="!text-white hover:!text-[var(--color-primary)] transition-colors"
                  style={{ color: "#FFFFFF" }}
                >
                  +90 232 436 10 81
                </a>
              </div>

              <div className="flex items-center gap-3 !text-white" style={{ color: "#FFFFFF" }}>
                <Mail className="w-4 h-4 !text-white shrink-0" />
                <a
                  href="mailto:info@temelconta.com.tr"
                  className="!text-white hover:!text-[var(--color-primary)] transition-colors"
                  style={{ color: "#FFFFFF" }}
                >
                  info@temelconta.com.tr
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="w-full border-t border-white/20">
        <div className="custom-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-secondary !text-white" style={{ color: "#FFFFFF" }}>
          <p className="text-center sm:text-left !text-white" style={{ color: "#FFFFFF" }}>
            © Copyright 2024 Temel Conta Sanayi ve Ticaret A.Ş.
          </p>

          <div className="flex items-center gap-6 text-center !text-white" style={{ color: "#FFFFFF" }}>
            <Link href="#privacy" className="!text-white hover:!text-[var(--color-primary)] transition-colors" style={{ color: "#FFFFFF" }}>
              Privacy Policy
            </Link>
            <Link href="#terms" className="!text-white hover:!text-[var(--color-primary)] transition-colors" style={{ color: "#FFFFFF" }}>
              Terms &amp; Conditions
            </Link>
            <Link href="#sitemap" className="!text-white hover:!text-[var(--color-primary)] transition-colors" style={{ color: "#FFFFFF" }}>
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
