import React from "react";
import Container from "./Container";
import Link from "next/link";
import { ArrowRight, MapPin, Printer, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary pt-16 md:pt-24 pb-6 border-t border-white/10 relative z-20" data-aos="fade-up">
      <Container>

        {/* Main 12-Column Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-8 mb-12">

          {/* Left Side (Span 5) */}
          <div className="xl:col-span-5 flex flex-col gap-12 pr-0 xl:pr-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            {/* Logo & Desc */}
            <div className="flex flex-col items-start">
              <Link href="/" className="mb-6 inline-block">
                <img
                  src="/moto/tesla/footer-logo.png"
                  alt="Tesla Logo"
                  className=" h-25 w-[90%] max-w-[200px] object-contain"
                />
              </Link>
              <p className="footer-body text-white max-w-[90%] leading-relaxed">
                We pay as much attention to the quality and completeness of our data as we do to the quality of our products, which is why in 2006 TESLA became the first company from Central and Eastern Europe to have its products listed in the TecDoc database.
              </p>
            </div>

            {/* Newsletter */}
            <div className="w-full flex flex-col"  >
              <h5 className="footer-heading text-white mb-4">
                Newsletter
              </h5>
              <div className="flex w-full gap-3">
                <input
                  type="email"
                  placeholder="Enter Your E-mail id"
                  className="footer-body bg-white flex-grow px-4 py-3 outline-none text-gray-800"
                />
                <button className="bg-white px-4 py-3 hover:bg-gray-50 transition-colors flex items-center justify-center text-[#001B4B]">
                  <ArrowRight className="w-7 h-7" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side (Span 7) */}
          <div className="xl:col-span-7 flex flex-col gap-12 justify-between">
            {/* Top Row: Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {/* Quick Links */}
              <div className="flex flex-col" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <h5 className="footer-heading text-white mb-6">Quick Links</h5>
                <ul className="flex flex-col gap-3">
                  {['Home', 'About us', 'Products', 'News'].map((link) => (
                    <li key={link}>
                      <Link href="#" className="footer-body text-white hover:opacity-100 transition-opacity">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Automotive */}
              <div className="flex flex-col" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                <h5 className="footer-heading text-white mb-6">Automotive</h5>
                <ul className="flex flex-col gap-3">
                  {['Ignition Cables', 'Ignition Coils', 'Automotive Bulbs', 'Fuses', 'Coil-on-plug Boots'].map((link) => (
                    <li key={link}>
                      <Link href="#" className="footer-body text-white hover:opacity-100 transition-opacity">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Electronics */}
              <div className="flex flex-col" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                <h5 className="footer-heading text-white mb-6">Electronics</h5>
                <ul className="flex flex-col gap-3">
                  {['Resistors', 'Sensors', 'Battery Chargers', 'BMS', 'Motor Control'].map((link) => (
                    <li key={link}>
                      <Link href="#" className="footer-body text-white hover:opacity-100 transition-opacity">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="flex flex-col" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                <h5 className="footer-heading text-white mb-6">Contact</h5>
                <ul className="flex flex-col gap-5">
                  <li className="flex items-start gap-3 text-white">
                    <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                    <span className="footer-body leading-relaxed text-sm">
                      TESLA BLATNÁ, a.s. Blatná,<br />
                      Palackého 644
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <Printer className="w-5 h-5 shrink-0" />
                    <span className="footer-body text-sm">+420 383 422 277</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <Phone className="w-5 h-5 shrink-0" />
                    <span className="footer-body text-sm">+420 383 415 211</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <Mail className="w-5 h-5 shrink-0" />
                    <span className="footer-body text-sm break-all">tesla@tesla-blatna.cz</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Row: Legal Links */}
            <div className="flex flex-wrap  justify-end gap-4 lg:gap-8 text-white mt-auto pt-6 border-t border-white/10 lg:border-none lg:pt-0" data-aos="fade-in"  >
              <Link href="#" className="footer-body">Privacy Policy</Link>
              <Link href="#" className="footer-body">Terms and Conditions</Link>
              <Link href="#" className="footer-body">Whistleblower Protection</Link>
              <Link href="#" className="footer-body">Eshop Terms and Conditions</Link>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-[1px] bg-white/20 mb-5"  ></div>

        {/* Copyright */}
        <div className="text-center" >
          <p className="footer-body text-white" >
            Copyrights©2026 Tesla Blatna a.s .All Rights Reserved
          </p>
        </div>

      </Container>
    </footer>
  );
}
