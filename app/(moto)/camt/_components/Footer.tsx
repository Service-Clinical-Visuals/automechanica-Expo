"use client";

import { Mail, MapPin, ArrowRight } from "lucide-react";
import Container from "./Container";

const links = ["Home", "About Us", "Products", "Contact Us"];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#F4F4F5] font-[family-name:var(--font-inter)]" id="footer">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[30fr_2fr_68fr] gap-10 py-16">
          {/* Logo + tagline */}
          <div data-aos="fade-up">
            <img src="/moto/camt/logo.png" alt="CAMT" className="h-9 w-auto object-contain mb-5" />
            <p className="content max-w-[370px]">
              CAMT is a trusted automotive technology company delivering advanced NOx sensors and
              thermal management solutions through innovation, precision engineering, and quality
              manufacturing.
            </p>
          </div>

          <div className="hidden lg:block w-px bg-gray-300" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {/* Links */}
            <div data-aos="fade-up">
              <h3 className="subheading mb-5">Links</h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="content hover:text-primary! transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div data-aos="fade-up">
              <h3 className="subheading mb-5">Contact</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:info@camtca.com"
                  className="flex items-center gap-3 content hover:text-primary! transition-colors"
                >
                  <Mail size={18} className="text-primary shrink-0" />
                  info@camtca.com
                </a>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary shrink-0 mt-1" />
                  <p className="content">
                    CAMT Automotive Inc. (Chengdu)
                    <br />
                    No. 779, East Wangcong
                    <br />
                    Road, Pixian, Chengdu
                    <br />
                    611730, China
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div data-aos="fade-up">
              <h3 className="subheading mb-5">Subscribe For More Information</h3>
              <p className="content mb-4">
                Stay informed with the latest product launches, industry news, technical updates,
                and innovations from CAMT Automotive
              </p>
              <div className="flex items-stretch max-w-[350px] shadow-sm bg-white p-1">
                <input
                  type="email"
                  placeholder="Email Address...."
                  className="content text-[#1A1A1A]!  rounded-l-md px-4 py-2.5 outline-none placeholder:text-[#6B7280] w-full"
                />
                <button
                  type="button"
                  aria-label="Subscribe"
                  className="flex items-center justify-center text-white! bg-primary hover:bg-primary-hover rounded-r-md px-4 transition-colors shrink-0"
                >
                  <ArrowRight size={18} strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 py-6 flex items-center justify-center">
          <p className="content text-center">
            &copy; 2026 All rights Reserved. Design by CAMT Automotive
          </p>
        </div>
      </Container>
    </footer>
  );
}
