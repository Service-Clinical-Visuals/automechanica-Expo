import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-16 pb-8 border-t border-gray-200" data-aos="fade-up">
      <div className="custom-container flex flex-col">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 mb-16">

          {/* Column 1: Logo & Info */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            <Link href="/" className="inline-block mb-2 ">
              <img src="/moto/airstal/logo.png" alt="Airstal Logo" className="h-25  w-auto object-contain " />
            </Link>
            <Typography variant="p" color="dark" className="footer-body leading-relaxed max-w-[90%] text-[13px] md:text-sm">
              Airstal SP is a company founded in 2004 by Danish specialists, located near Łódź in central Poland.
            </Typography>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Typography variant="h6" color="dark" weight="bold" className="footer-heading text-[#183A59]">
              Quick Links
            </Typography>
            <div className="flex flex-col gap-4">
              {['About the company', 'News', 'Downloads', 'Catalogs', 'EU funds'].map((link) => (
                <Link key={link} href="#" className="footer-body text-dark hover:text-primary transition-colors text-[13px] md:text-sm">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Offer */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <Typography variant="h6" color="dark" weight="bold" className="footer-heading text-[#183A59]">
              Offer
            </Typography>
            <div className="flex flex-col gap-4">
              {['Compressors', 'Chemicals and oils', 'Parts', 'Refrigerants'].map((link) => (
                <Link key={link} href="#" className="footer-body text-dark hover:text-primary transition-colors text-[13px] md:text-sm">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col gap-6 lg:col-span-2 sm:col-span-2 lg:col-span-2">
            <Typography variant="h6" color="dark" weight="bold" className="footer-heading text-[#183A59]">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Phone className="w-[18px] h-[18px] text-[#183A59] shrink-0 mt-0.5" />
                <Typography variant="p" color="dark" className="footer-body text-[13px] md:text-sm">
                  +48 46 874 66 46
                </Typography>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-[18px] h-[18px] text-[#183A59] shrink-0 mt-0.5" />
                <Typography variant="p" color="dark" className="footer-body break-all text-[13px] md:text-sm">
                  Airstal@Airstal.Com
                </Typography>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-[18px] h-[18px] text-[#183A59] shrink-0 mt-0.5" />
                <Typography variant="p" color="dark" className="footer-body text-[13px] md:text-sm leading-relaxed">
                  Ul. Nasienna 7<br />
                  95-040 Koluszki<br />
                  Voivodeship: Lodz Voivodeship, Poland
                </Typography>
              </div>
            </div>
          </div>

          {/* Column 5: Subscribe */}
          <div className="flex flex-col gap-6 lg:col-span-3 sm:col-span-2 lg:col-span-3">
            <Typography variant="h6" color="dark" weight="bold" className="footer-heading text-[#183A59]">
              Subscribe For More Information
            </Typography>
            <Typography variant="p" color="dark" className="footer-body leading-relaxed text-[13px] md:text-sm">
              Stay informed with the latest product launches, industry news, technical updates, and innovations from airstal
            </Typography>
            <form className="flex w-full relative mt-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Address...."
                className="w-full border border-gray-200 shadow-sm rounded-[4px] py-3 px-4 pr-14 focus:outline-none focus:border-primary footer-body text-gray-800 text-[13px] md:text-sm bg-white"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 bg-[#183A59] text-white px-4 rounded-[4px] hover:bg-opacity-90 transition-colors flex items-center justify-center"
              >
                <ArrowRight className="w-[18px] h-[18px]" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-200 text-center">
          <Typography variant="p" color="muted" className="footer-body text-[12px] md:text-[13px]">
            Copyright © Airstal 07.0 | Created by Speimex 07.0 | Powered by Comarch ERP E-Sklep
          </Typography>
        </div>

      </div>
    </footer>
  );
}
