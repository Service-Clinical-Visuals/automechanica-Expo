"use client";

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import Container from "./Container";

const quickLinks = ["Home", "Products", "Shop", "Career", "About us"];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-[#121212] py-16">
      <Container>
        <div className="px-4 sm:px-8 md:px-14 lg:px-[60px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[26fr_16fr_22fr_24fr_16fr] gap-10">

            {/* Col 1: Logo + tagline */}
            <div className="flex flex-col gap-4">
              <img src="/moto/lrt/logo.png" alt="LRT Automotive" className="w-[247px] h-[99px]" />
              <p className="content-white">
                Leading Manufacturer of Exhaust Components &amp; eMobility Charging Solutions | Made in Germany
              </p>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <p className="subheading text-white text-[19px]! mb-5">Quick Links</p>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="content hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Contact Us */}
            <div>
              <p className="subheading text-white text-[19px]! mb-5">Contact Us</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0 text-white" />
                  <a href="tel:+49062276392" className="content hover:text-white transition-colors">
                    +49 (0)6227 63692
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="shrink-0 text-white" />
                  <a href="mailto:Sales@Lrt.De" className="content hover:text-white transition-colors">
                    Sales@Lrt.De
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="shrink-0 mt-0.5 text-white" />
                  <span className="content">
                    Impexstraße 7<br />
                    69190 Walldorf<br />
                    Baden-Württemberg<br />
                    Germany
                  </span>
                </li>
              </ul>
            </div>

            {/* Col 4: Subscribe */}
            <div>
              <p className="subheading text-white text-[19px]! mb-5">Subscribe For More Information</p>
              <p className="content mb-5">
                Stay informed with the latest product launches, industry news, technical updates, and innovations from LRT Automotive GmbH
              </p>
              <form className="flex items-center bg-white rounded-md overflow-hidden">
                <input
                  type="email"
                  placeholder="Email Address...."
                  className="flex-1 min-w-0 px-4 py-3 text-[#1E1E1E] placeholder-[#8A8A8A] outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex items-center justify-center bg-[#00337F] text-white hover:opacity-90 transition-opacity shrink-0"
                  style={{ width: 44, height: 44, margin: 6, borderRadius: 6 }}
                >
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>

            {/* Col 5: Social Media Links */}
            <div>
              <p className="subheading text-white text-[19px]! mb-5">Social Media Links</p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="flex items-center justify-center rounded-full bg-[#2A2A2A] text-white hover:bg-[#00337F] transition-colors"
                    style={{ width: 40, height: 40 }}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

          </div>

          <hr className="border-t border-[#FFFFFF6E] mt-12 mb-6" />

          <p className="content-white text-center">
            © LRT Automotive GmbH 2026 . All Rights Reserved. | <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
