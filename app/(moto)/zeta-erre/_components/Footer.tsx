"use client";

import Link from "next/link";
import { Phone, Mail, Instagram, Facebook, Youtube, Linkedin, ArrowUpRight, ArrowRight } from "lucide-react";
import Container from "./Container";

const quickLinks = ["Home", "About Us", "Products", "News"];
const legalLinks = ["Terms & Conditions", "Privacy Policy"];

const socials = [
  { icon: Instagram, href: "#", className: "bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600" },
  { icon: Facebook, href: "#", className: "bg-[#1877F2]" },
  { icon: Youtube, href: "#", className: "bg-[#FF0000]" },
  { icon: Linkedin, href: "#", className: "bg-[#0A66C2]" },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#111111] font-[family-name:var(--font-inter)]" id="footer">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[50fr_16.5fr_16.5fr_17fr] gap-10 py-16">
          {/* Logo + tagline */}
          <div data-aos="fade-up">
            <img src="/moto/zeta-erre/logo.png" alt="Zeta-Erre" className="h-18 w-auto object-contain mb-5" />
            <p className="content-white max-w-[700px]">
              Since 1998, Zeta-Erre has specialized in high-quality automotive transmission
              components, delivering OEM-equivalent CV Shafts, CV Joints, and driveline solutions
              with precision engineering, reliable performance, and trusted aftermarket expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up">
            <h3 className="subheading-white mb-5 text-[24px]! font-normal! ">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="content-white hover:text-primary! transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div data-aos="fade-up">
            <h3 className="subheading-white mb-5 text-[24px]! font-normal!">Legal</h3>
            <ul className="flex flex-col gap-4">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="content-white hover:text-primary! transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div data-aos="fade-up">
            <h3 className="subheading-white  mb-5 text-[24px]! font-normal!">Contact Us</h3>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+390813306160"
                className="flex items-center gap-3 content-white hover:text-primary! transition-colors"
              >
                <Phone size={18} className="text-white shrink-0" />
                +39 081.3306160
              </a>
              <a
                href="mailto:info@zetaerre.eu"
                className="flex items-center gap-3 content-white hover:text-primary! transition-colors"
              >
                <Mail size={18} className="text-white shrink-0" />
                info@zetaerre.eu
              </a>
            </div>
          </div>
        </div>

        {/* Socials + Newsletter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-12">
          <div className="flex items-center gap-3" data-aos="fade-up">
            {socials.map(({ icon: Icon, href, className }, idx) => (
              <a
                key={idx}
                href={href}
                className={`w-9 h-9 rounded-md flex items-center justify-center text-white ${className}`}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 flex-wrap" data-aos="fade-up">
            <h3 className="subheading-white whitespace-nowrap">Subscribe to Newsletter :</h3>
            <div className="relative flex items-center">
              <input
                type="email"
                placeholder="Enter Your E-Mail id"
                className="content text-[#1A1A1A]! bg-white rounded-full pl-5 pr-14 py-3 outline-none placeholder:text-[#6B7280] w-65 sm:w-75"
              />
              <button
                type="button"
                aria-label="Subscribe"
                className="absolute right-1 flex items-center justify-center w-10 h-10 rounded-full text-[#1A1A1A] bg-primary hover:bg-primary-hover transition-colors shrink-0"
              >
                <ArrowRight size={18} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 py-6 flex items-center justify-center">
          <p className="content-white text-center">
            &copy; 2026 zeta erre All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
