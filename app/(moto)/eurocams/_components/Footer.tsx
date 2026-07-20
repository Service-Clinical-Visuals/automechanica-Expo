"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import { Phone, MapPin, Linkedin, Instagram, Facebook, Youtube, Twitter } from "lucide-react"; // Note: Lucide 'Twitter' icon is often used for X if no official X logo exists

export default function Footer() {
  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Products", href: "#" },
    { name: "Parts Catalogue", href: "#" },
    { name: "Quality", href: "#" },
    { name: "Support", href: "#" },
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "News & Events", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Quality", href: "#" },
    { name: "HTML Sitemap", href: "#" },
  ];

  return (
    <footer className="bg-white text-dark pt-16 pb-8 border-t border-gray-200">
      <div className="custom-container">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">

          {/* Column 1: Logo & Info */}
          <div className="flex col-span-1 md:col-span-2 lg:col-span-3 flex-col gap-6" data-aos="fade-up">
            <Link href="/" className="flex items-center gap-2 mb-2">
              <img
                src="/moto/eurocams/icon.png"
                alt="Eurocams Logo"
                className="h-[100%] w-auto object-contain"
              />
            </Link>
            <p className="footer-body text-[#4A4A4A] leading-relaxed max-w-[70%]">
              Suppliers of high quality camshafts, tappets, rocker arms and other valvetrain components.
            </p>
          </div>

          {/* Column 2: Company */}
          <div className="flex col-span-1 lg:col-span-2 flex-col gap-6" data-aos="fade-up" data-aos-delay="100">
            <h4 className="footer-heading text-black">Company</h4>
            <ul className="flex flex-col gap-4">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="footer-body text-[#4A4A4A] hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex col-span-1 lg:col-span-2 flex-col gap-6" data-aos="fade-up" data-aos-delay="200">
            <h4 className="footer-heading text-black">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="footer-body text-[#4A4A4A] hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex col-span-1 lg:col-span-2 flex-col gap-6" data-aos="fade-up" data-aos-delay="300">
            <h4 className="footer-heading text-black">Contact Us</h4>
            <ul className="flex flex-col gap-6 footer-body text-[#4A4A4A]">
              <li className="flex items-start gap-3">
                <Phone className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" />
                <div className="footer-body">+44 (0)1934 418830</div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" />
                <div className="footer-body leading-relaxed">Unit C3 Oldmixon<br/>Crescent, Weston-Super-<br/>Mare, BS24 9AY, GB</div>
              </li>
            </ul>
          </div>

          {/* Column 5: Social Media Links */}
          <div className="flex col-span-1 md:col-span-2 lg:col-span-3 flex-col gap-6" data-aos="fade-up" data-aos-delay="400">
            <h4 className="footer-heading text-black">Social Media Links</h4>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-red-700 transition-colors shadow-sm">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-red-700 transition-colors shadow-sm">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-red-700 transition-colors shadow-sm">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-red-700 transition-colors shadow-sm">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-red-700 transition-colors shadow-sm font-bold">
                X {/* Often X is just text or a custom SVG, standard lucide Twitter is the old bird */}
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-8"></div>

        {/* Bottom Copyright */}
        <div className="flex justify-center items-center text-center" >
          <p className="footer-body text-muted font-bold">
            Copyright &copy; {new Date().getFullYear()} Eurocams Ltd - All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
