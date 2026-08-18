"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0c1e40] pt-16 md:pt-20 pb-8">
      <div className="custom-container">
        <div className="grid grid-cols-2 xl:grid-cols-12 gap-8 lg:gap-10 mb-16">
          
          {/* Brand Info Column */}
          <div className="col-span-2 xl:col-span-5 flex flex-col items-start pr-0 xl:pr-12">
            <Link href="/strong-enerji" className="mb-8">
              <img
                src="/moto/strong-enerji/logo.png"
                alt="Strong Enerji Logo"
                className="w-60 md:w-80 h-auto object-contain"
              />
            </Link>
            <h3 className="card-title font-semibold text-white mb-4">Energy that Drives Power</h3>
            <p className="section-text dm-sans text-white leading-relaxed max-w-lg ">
              Strong Energy combines quality, trust and sustainability in
              industrial oil and energy solutions. From production to
              distribution, we strive for excellence at every step.
            </p>
          </div>

          {/* Menu Column */}
          <div className="col-span-1 xl:col-span-2 flex flex-col gap-4">
            <h4 className="footer-text font-semibold text-white mb-2">Menu</h4>
            <Link href="#" className="section-text text-white block font-[family-name:var(--font-dm-sans)]">Homepage</Link>
            <Link href="#" className="section-text text-white block font-[family-name:var(--font-dm-sans)]">About Us</Link>
            <Link href="#" className="section-text text-white block font-[family-name:var(--font-dm-sans)]">News</Link>
            <Link href="#" className="section-text text-white block font-[family-name:var(--font-dm-sans)]">Certificates</Link>
            <Link href="#" className="section-text text-white block font-[family-name:var(--font-dm-sans)]">Facility</Link>
          </div>

          {/* Brands Column */}
          <div className="col-span-1 xl:col-span-2 flex flex-col gap-4">
            <h4 className="footer-text font-semibold text-white mb-2">Our Brands</h4>
            <Link href="#" className="section-text text-white block font-[family-name:var(--font-dm-sans)]">Quax Lubricants</Link>
            <Link href="#" className="section-text text-white block font-[family-name:var(--font-dm-sans)]">Route Lubricants</Link>
            <Link href="#" className="section-text text-white block font-[family-name:var(--font-dm-sans)]">Zaeon Lubricants</Link>
          </div>

          {/* Contact Column */}
          <div className="col-span-2 xl:col-span-3 flex flex-col gap-6">
            <div>
              <h4 className="footer-text font-semibold text-white mb-2">Email</h4>
              <a href="mailto:info@strongenerji.com" className="section-text text-white block font-[family-name:var(--font-dm-sans)]">
                info@strongenerji.com
              </a>
            </div>
            <div>
              <h4 className="footer-text font-semibold text-white mb-2">Phone</h4>
              <a href="tel:03225037287" className="section-text text-white block font-[family-name:var(--font-dm-sans)]">
                0322 503 7287
              </a>
            </div>
            <div>
             <h4 className="footer-text font-semibold text-white mb-2">Whatsapp</h4>
              <a href="https://wa.me/905324174965" className="section-text text-white block font-[family-name:var(--font-dm-sans)]">
                0532 417 4965
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full border-t border-gray-200/50 pt-6 flex flex-col xl:flex-row justify-between items-center gap-4">
          <p className="section-text text-white font-[family-name:var(--font-dm-sans)] text-center md:text-left">
            2025 © STRONG Energy Industry and Trade Limited Company All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="section-text text-white hover:text-white transition-colors font-[family-name:var(--font-dm-sans)]">
              Terms of Use
            </Link>
            <Link href="#" className="section-text text-white hover:text-white transition-colors font-[family-name:var(--font-dm-sans)]">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
