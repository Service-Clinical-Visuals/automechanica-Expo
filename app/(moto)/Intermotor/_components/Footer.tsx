"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Container from "./Container";

const links = ["Home", "About Us", "Products", "Register to Buy", "Contact"];

export default function Footer() {
  return (
    <>
      <footer
        className="relative w-full overflow-hidden bg-[#232323] py-14 font-[family-name:var(--font-inter)]"
        id="footer"
      >
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[38fr_8fr_62fr] gap-10">
            {/* Logo + tagline */}
            <div data-aos="fade-up">
              <img
                src="/moto/intermotor/logo.png"
                alt="Intermotor Group"
                className="h-12 w-auto object-contain mb-5"
              />
              <p className="content-white max-w-[300px]">
                Intermotor Group is a trusted global supplier of OE-quality automotive components
                with decades of engineering expertise.
              </p>
            </div>

            <div className="hidden lg:block w-px bg-white" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {/* Links */}
              <div data-aos="fade-up">
                <h3 className="heading-white text-[28px]! mb-5">Links</h3>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="content-white text-white/85! hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div data-aos="fade-up">
                <h3 className="heading-white text-[28px]! mb-5">Contact</h3>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+441623886400"
                    className="flex items-center gap-3 content-white text-white/85! hover:text-white transition-colors"
                  >
                    <Phone size={18} className="shrink-0" />
                    +44(0) 1623 886 400
                  </a>
                  <a
                    href="mailto:info@intermotor.com"
                    className="flex items-center gap-3 content-white text-white/85! hover:text-white transition-colors"
                  >
                    <Mail size={18} className="shrink-0" />
                    info@intermotor.com
                  </a>
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-white/85 shrink-0 mt-1" />
                    <p className="content-white text-white/85!">
                      Unit 5B little Oak Drive
                      <br />
                      Annesley
                      <br />
                      Nottinghamshire
                      <br />
                      NG15 ODR
                      <br />
                      United Kingdom
                    </p>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div data-aos="fade-up">
                <h3 className="heading-white text-[28px]! mb-5">News letter</h3>
                <p className="content-white mb-4">
                  Sign up to recieve company updates, product bullitins and more.
                </p>
                <div className="flex flex-col gap-3 max-w-[300px]">
                  <input
                    type="email"
                    placeholder="Subscribe with us...."
                    className="navlink text-[#1A1A1A]! bg-[#E5E7EB] rounded-md px-4 py-2.5 outline-none placeholder:text-[#4B5563] w-full"
                  />
                  <button
                    type="button"
                    className="navlink text-white! font-semibold! bg-primary hover:bg-primary-hover rounded-md px-6 py-2.5 transition-colors w-fit"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>

      <div className="bg-white">
        <Container>
          <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="content text-[18px]!">&copy; Copyright 2025 Intermotor Group Ltd. All rights reserved.</p>
            <Link href="#" className="content text-[18px]! hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}
