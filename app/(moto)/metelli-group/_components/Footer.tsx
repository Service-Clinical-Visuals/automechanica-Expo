import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import { MapPin, Phone, Mail, ArrowRight, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import { Oswald } from "next/font/google";

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-16 pb-8 border-t border-gray-200" >
      <div className="custom-container flex flex-col" data-aos="fade-up">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">

          {/* Column 1: Logo & Info */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            <Link href="/" className="inline-block mb-2">
              <img src="/moto/metelli-group/footer-logo.png" alt="Metelli Group Logo" className="h-10 w-10   max-w-[90%]  w-auto   object-contain" />
            </Link>
            <Typography variant="p" className="footer-body leading-relaxed max-w-[95%] text-[13px] md:text-sm text-[#5D5D5D]">
              More than sixty years ago the Metelli Group was just a mechanical engineering workshop.
            </Typography>

            <div className="mt-2">
              <Typography variant="h6" weight="bold" className="footer-heading text-[#4A4A4A] mb-4">
                Quick Links
              </Typography>
              <div className="flex items-center gap-3">
                <a href="#" className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                  <Linkedin className="w-4 h-4 fill-current" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                  <Facebook className="w-4 h-4 fill-current" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Metelli Group */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Typography variant="h6" weight="bold" className="footer-heading text-[#4A4A4A]">
              Metelli Group
            </Typography>
            <div className="flex flex-col gap-4 mt-2">
              {['About', 'Brands', 'Products', 'Sustainability', 'Support'].map((link) => (
                <Link key={link} href="#" className="footer-body text-[#5D5D5D] hover:text-primary transition-colors text-[13px] md:text-sm">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Contact Us */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            <Typography variant="h6" weight="bold" className="footer-heading text-[#4A4A4A]">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-6 mt-2">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <Typography variant="p" className="footer-body text-[#5D5D5D] text-[13px] md:text-sm">
                  +39 030 705 711
                </Typography>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <Typography variant="p" className="footer-body text-[#5D5D5D] text-[13px] md:text-sm leading-relaxed">
                  Metelli S.P.A. | Via<br />
                  Bonotto, 3/5 - 25033<br />
                  Cologne (BS) - Italy
                </Typography>
              </div>
            </div>
          </div>

          {/* Column 4: Subscribe */}
          <div className="flex flex-col gap-5 lg:col-span-4">
            <Typography variant="h6" weight="bold" className="footer-heading text-[#4A4A4A]">
              Subscribe For More Information
            </Typography>
            <Typography variant="p" className="footer-body leading-relaxed text-[13px] md:text-sm text-[#5D5D5D]">
              Stay informed with the latest product launches, industry news, technical updates, and innovations from Metelli Group
            </Typography>
            <form className="flex w-full relative mt-4 max-w-md" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Address...."
                className="w-full border border-gray-200 shadow-sm rounded-md py-3 px-4 pr-14 focus:outline-none focus:border-primary footer-body text-[#5D5D5D] text-[13px] md:text-sm bg-white"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 bg-primary text-white px-4 rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center"
              >
                <ArrowRight className="w-[18px] h-[18px]" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-400 text-center">
          <Typography variant="p" font="oswald" className="footer-body font-oswald  text-[#5D5D5D]">
            Copyright© 2026 metelligroup All rights reserved.
          </Typography>
        </div>

      </div>
    </footer>
  );
}
