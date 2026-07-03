"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import Container from "./Container";

const quickLinks = [
  { label: "Home", active: true },
  { label: "Sasic" },
  { label: "Products" },
  { label: "E-Catalogue" },
  { label: "Value" },
];

const companyLinks = ["Legal notices & personal data", "Contact", "Recruitment"];

const contactInfo = [
  { Icon: MapPin, text: "Putanges production site - 61210 Putanges Pont Ecrepin" },
  { Icon: Phone, text: "+33 (0)2 33 67 80 00" },
  { Icon: Mail, text: "marketing@sasic.fr" },
];

export default function Footer() {
  return (
    <footer className="bg-[#242424] pt-14 pb-6">
      <Container>
        <div className="px-4 sm:px-8 md:px-14 lg:px-[100px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[35fr_22fr_21fr_22fr] gap-10 mb-10">
            {/* Col 1: Logo + tagline + subscribe */}
            <div className="flex flex-col gap-6">
              <img src="/moto/sasic/logo.png" alt="Sasic" className="h-auto w-[160px]" />

              <p className="content-white text-[17px]! leading-[26px]!">
                Development, Manufacturing And Distribution Of Automotive Spare Parts Since 1927
              </p>

              {/* Subscribe form */}
              <div className="flex max-w-[420px]">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="flex-1 bg-white text-[#1A1A1A] text-sm placeholder-gray-500 px-4 outline-none min-w-0"
                  style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 14px) 100%, 0 100%)" }}
                />
                <button
                  className="bg-primary hover:bg-[#e09a2c] transition-colors px-6 py-2 shrink-0"
                  style={{ clipPath: "polygon(14px 0, 100% 0, calc(100% - 14px) 100%, 0 100%)", marginLeft: -2 }}
                >
                  <span className="heading text-[#1A1A1A] text-[20px]! uppercase px-10">
                    Subscribe
                  </span>
                </button>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <p className="heading text-primary! text-[26px]! mb-4 uppercase">Quick Links</p>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href="#"
                      className={`heading font-normal! text-[20px]! uppercase transition-colors ${
                        link.active ? "text-primary!" : "text-white! hover:text-[#F2A93B]!"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Company */}
            <div>
              <p className="heading text-primary! text-[26px]! mb-4 uppercase">Company</p>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="heading font-normal! text-[20px]! uppercase text-white! hover:text-[#F2A93B]! transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact */}
            <div>
              <p className="heading text-primary! text-[26px]! mb-4 uppercase">Contact</p>
              <ul className="space-y-4">
                {contactInfo.map(({ Icon, text }, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon size={20} className="shrink-0 mt-1 text-white!" />
                    <span className="heading font-normal! text-[20px]! uppercase text-white!">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="border-t border-[#FFFFFF80] mb-6" />

          <p className="heading font-normal! text-[20px]! uppercase text-white! text-center">
            Copyrights @ 2026 Sasic. All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}
