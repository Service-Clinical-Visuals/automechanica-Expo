"use client";

import React from "react";
import Link from "next/link";

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
    { label: "Product", href: "#products" },
    { label: "Technology", href: "#technology" },
    { label: "3D Studio", href: "#3d-studio" },
  ];

  const catalogueLinks = [
    { label: "Search", href: "#find-product" },
    { label: "Catalogue", href: "#catalogue" },
    { label: "Where to buy CTR", href: "#where-to-buy" },
  ];

  const ctrInAirLinks = [
    { label: "Follow CTR", href: "#follow-ctr" },
    { label: "Campaign", href: "#campaign" },
    { label: "Ambassador", href: "#ambassador" },
    { label: "Bizrewards", href: "#bizrewards" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <footer className="w-full bg-[#363636] text-white overflow-hidden">
      {/* Top Main Footer */}
      <div className="custom-container py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: Brand Logo & Description */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-4 flex flex-col items-start gap-4 lg:pr-6">
            <Link href="/ctr" className="inline-flex items-center select-none h-9 sm:h-11 w-auto">
              <img
                src="/moto/ctr/ctr-logo.png"
                alt="CTR Logo"
                className="h-full w-auto object-contain brightness-0 invert"
              />
            </Link>

            <p className="text-gray-300 text-xs sm:text-sm font-secondary leading-relaxed mt-2">
              CTR is a global manufacturer of steering and suspension components, known for its OEM expertise and precision engineering. The company delivers reliable, high-quality automotive parts that enhance vehicle stability, safety, and driving performance across worldwide markets.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-primary font-bold text-sm sm:text-base text-white tracking-wide">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm font-secondary text-white">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-primary font-bold text-sm sm:text-base text-white tracking-wide" style={{ color: "#FFFFFF" }}>
              Products
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm font-secondary text-white">
              {productLinks.map((prod, idx) => (
                <li key={idx}>
                  <Link
                    href={prod.href}
                    className="text-white transition-colors duration-200"
                  >
                    {prod.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Catalogue */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-primary font-bold text-sm sm:text-base text-white tracking-wide">
              Catalogue
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm font-secondary text-white">
              {catalogueLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: CTR in AIR */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-primary font-bold text-sm sm:text-base text-white tracking-wide">
              CTR in AIR
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm font-secondary">
              {ctrInAirLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="w-full border-t border-white">
        <div className="custom-container py-6 flex items-center justify-center font-secondary text-gray-400 text-xs sm:text-sm text-white">
          <p className="text-center">
            © 2026 CTR Co.,Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
