"use client";

import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import Container from "./Container";

const navigation = ["Home", "About Us", "Products"];
const usefulLinks = ["Life Oil", "Life Shop", "Lifeplast"];
const socials = [
  { key: "tiktok", img: "/moto/belif/socials/1.png", href: "#" },
  { key: "facebook", img: "/moto/belif/socials/2.png", href: "#" },
  { key: "linkedin", img: "/moto/belif/socials/3.png", href: "#" },
  { key: "x", img: "/moto/belif/socials/4.png", href: "#" },
  { key: "instagram", img: "/moto/belif/socials/5.png", href: "#" },
  { key: "youtube", img: "/moto/belif/socials/6.png", href: "#" },
];

export default function Footer() {
  return (
    <>
      <footer
        className="relative w-full overflow-hidden bg-cover bg-center pt-16 pb-8"
        style={{ backgroundImage: "url(/moto/belif/aboutbg.png)" }}
      >
        <Container className="relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[40fr_20fr_20fr_20fr] gap-10 mb-10">
            {/* Logo + tagline */}
            <div data-aos="fade-up">
              <h2 className="heading-white font-bold! mb-4">Belif D.O.O</h2>
              <p className="content-white max-w-[400px]">
                BELIF d.o.o. is a chemical products factory founded in 1996. Today, the company
                occupies a leading position in its industry.
              </p>
            </div>

            {/* Navigation */}
            <div data-aos="fade-up">
              <h3 className="subheading-white text-[24px]! font-medium! mb-6">Navigation</h3>
              <ul className="flex flex-col gap-4">
                {navigation.map((link) => (
                  <li key={link}>
                    <Link href="#" className="content-white hover:text-primary transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div data-aos="fade-up">
              <h3 className="subheading-white text-[24px]! font-medium! mb-6">Useful Links</h3>
              <ul className="flex flex-col gap-4">
                {usefulLinks.map((link) => (
                  <li key={link}>
                    <Link href="#" className="content-white hover:text-primary transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Contact */}
            <div data-aos="fade-up">
              <h3 className="subheading-white text-[24px]! font-medium! mb-6">Quick Contact</h3>
              <div className="flex flex-col gap-4">
                <a href="tel:+38732664427" className="flex items-start gap-3 content-white hover:text-primary transition-colors">
                  <MapPin size={18} className="shrink-0 mt-0.5" />
                  +387 32 664-427
                </a>
                <a href="#" className="flex items-start gap-3 content-white hover:text-primary transition-colors">
                  <Phone size={18} className="shrink-0 mt-0.5" />
                  Business Zone Ciglana br.14, 74264 Jelah
                </a>
              </div>
            </div>
          </div>

          {/* Social + Newsletter */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pt-10 border-t border-white/20" data-aos="fade-up">
            <div>
              <h3 className="subheading-white text-[24px]! font-normal! mb-4">Social</h3>
              <div className="flex items-center gap-4">
                {socials.map(({ key, img, href }) => (
                  <Link
                    key={key}
                    href={href}
                    aria-label={key}
                    className="flex items-center justify-center h-9 rounded-md overflow-hidden hover:opacity-80 transition-opacity"
                  >
                    <img src={img} alt={key} className="h-full w-6 object-contain" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
              <h3 className="subheading-white font-normal! whitespace-nowrap">Subscribe to Newsletter :</h3>
              <div className="flex w-ful bg-white p-1.5 sm:w-[360px] rounded-lg">
                <input
                  type="email"
                  placeholder="Enter Your E-Maild id"
                  className="w-full navlink text-[#1A1A1A]! p-2 rounded-l-[10px] outline-none placeholder:text-[#9CA3AF]"
                />
                <button
                  type="button"
                  className="heading text-[16px]! font-semibold! text-white! uppercase bg-[#333333] rounded-lg  p-3.5 hover:bg-black transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>

            </div>
          </div>
        </Container>
      </footer>

      <div className="bg-[#F8F9FA] py-6">
        <Container className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="content text-[16px]! font-normal!">&copy; BELIF d.o.o. 2025 | All rights reserved</p>
          <p className="content text-[16px]! font-normal!">Powered by: InnoTech CMS</p>
          <p className="content text-[16px]! font-normal!">Quality and environmental policy</p>
        </Container>
      </div>
    </>
  );
}
