"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "Brands", href: "#" },
    { name: "Catalogs", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  const productCategories = [
    { name: "Oils", href: "#" },
    { name: "Lubricating Grease", href: "#" },
    { name: "Cooling Liquids", href: "#" },
    { name: "Other Products", href: "#" },
    { name: "Batteries", href: "#" },
  ];

  const whyChooseExxol = [
    { name: "20+ Years of Industry Experience", href: "#" },
    { name: "High-Quality Lubricant Solutions", href: "#" },
    { name: "Trusted Brands & Proven Performance", href: "#" },
    { name: "Extensive Product Portfolio", href: "#" },
    { name: "Reliable Customer Support", href: "#" },
  ];

  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="custom-container">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 mb-12">

          {/* Column 1: Logo & Info */}
          <div className="flex col-span-4 flex-col gap-6 lg:pr-4">
            <Link href="/" className="inline-block w-[45%] xl:w-[70%]">
              <img
                src="/moto/exol/logo.jpg"
                alt="EXOL Logo"
                className="w-full h-auto object-contain"
              />
            </Link>
            <Typography variant="p" className="text-white text-sm leading-relaxed">
              Since 1974, Arı Petroleum Chemical Company is producing and selling all types of lubricants and industrial oils with its experienced & qualified team.
            </Typography>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex col-span-2 flex-col gap-6">
            <Typography variant="h6" weight="bold" color="white" className="text-[18px]">
              Quick Links
            </Typography>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-white hover:text-primary transition-colors text-md">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div className="flex  col-span-2 flex-col gap-6">
            <Typography variant="h6" weight="bold" color="white" className="text-[16px]">
              Product Categories
            </Typography>
            <ul className="flex flex-col gap-3">
              {productCategories.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-white hover:text-primary transition-colors text-md">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Why Choose EXXOL */}
          <div className="flex col-span-2 flex-col gap-6">
            <Typography variant="h6" weight="bold" color="white" className="text-[16px]">
              Why Choose EXXOL
            </Typography>
            <ul className="flex flex-col gap-3">
              {whyChooseExxol.map((item, index) => (
                <li key={index} className="text-white text-md">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div className="flex col-span-2 flex-col gap-6">
            <Typography variant="h6" weight="bold" color="white" className="text-[16px]">
              Contact Information
            </Typography>
            <ul className="flex flex-col gap-4 text-white text-sm">
              <li>018/285-555 Niš</li>
              <li>011/271-0471 Beograd</li>
              <li>info@exxol.com</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/50 mb-8"></div>

        {/* Bottom Copyright */}
        <div className="flex flex-col md:flex-row justify-center items-center text-center">
          <Typography variant="p" className="text-white text-sm copyright">
            Exxol &copy; {new Date().getFullYear()}. All rights reserved. - Shop made by - Selltico.
          </Typography>
        </div>

      </div>
    </footer>
  );
}
