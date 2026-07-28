"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import Container from "./Container";

const companyLinks = [
  "People & Location",
  "History",
  "Mission",
  "Innovation & Technology",
  "News",
  "Certification",
  "Legal Area",
];

const productLinks = ["Automotive", "Industrial mobility", "Energy Storage System", "Charging Solutions"];

export default function Footer() {
  return (
    <>
      <footer
        className="relative w-full overflow-hidden bg-[#009879] pt-16 font-[family-name:var(--font-inter)]"
        id="footer"
      >
        <Container className="relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[45fr_17.5fr_17.5fr_20fr] gap-10 pb-10">
            {/* Logo + tagline + newsletter */}
            <div data-aos="fade-up">
              <img
                src="/moto/midac/logo.png"
                alt="Midac Batteries"
                className="max-w-[270px]! h-auto object-contain mb-5"
              />
              <p className="content-white mb-6">
                A leading European battery manufacturer with 35+ years of experience, delivering
                innovative and sustainable energy solutions for automotive, industrial, and energy
                storage needs.
              </p>
              <div className="flex items-stretch gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="navlink text-white! bg-transparent border border-white rounded-xl px-5 py-2.5 outline-none placeholder:text-white min-w-0 flex-1 max-w-[350px]"
                />
                <button
                  type="button"
                  className="group navlink text-white! inline-flex items-center gap-2 border border-white rounded-xl px-5 py-2.5 hover:bg-white hover:text-[#009879]! transition-colors whitespace-nowrap"
                >
                  Subscribe
                  <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Company */}
            <div data-aos="fade-up">
              <h3 className="heading-white text-[20px]! mb-5">Company</h3>
              <ul className="flex flex-col gap-3">
                {companyLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="navlink text-white/85! hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div data-aos="fade-up">
              <h3 className="heading-white text-[20px]! mb-5">Products</h3>
              <ul className="flex flex-col gap-3">
                {productLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="navlink text-white/85! hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4" data-aos="fade-up">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-white shrink-0 mt-1" />
                <p className="navlink text-white!">
                  <span className="font-bold">MIDAC S.p.A.</span>
                  <br />
                  Via A. volta, 2 Z.I.
                  <br />
                  37038 soave (Verona)
                  <br />
                  ITALIA
                </p>
              </div>
              <a href="tel:+390456132132" className="flex items-center gap-3 navlink text-white! hover:text-white/80 transition-colors">
                <Phone size={18} className="shrink-0" />
                +39 045 61 32 132
              </a>
              <a
                href="mailto:midac@midacbatteries.com"
                className="flex items-center gap-3 navlink text-white! underline hover:text-white/80 transition-colors"
              >
                <Mail size={18} className="shrink-0" />
                midac@midacbatteries.com
              </a>
            </div>
          </div>


        </Container>
          <div className="border-t border-white">
            <Container>
              <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="navlink text-white/85!">&copy; Design by Caratti E Poletto</p>
                <div className="flex items-center gap-8">
                  <Link href="#" className="navlink text-white/85! hover:text-white transition-colors">
                    Terms &amp; Conditions
                  </Link>
                  <Link href="#" className="navlink text-white/85! hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </Container>
          </div>
      </footer>
    </>
  );
}
