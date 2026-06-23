"use client";

import React from "react";
import Container from "./Container";
import Link from "next/link";
import { MapPin, Mail, Phone, ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-10" id="footer">
      <Container>
        {/* Top Section: Logo & Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6 relative" data-aos="fade-up" data-aos-duration="1000">

          {/* Logo */}
          <div className="relative h-[60px] md:h-[80px] w-[150px] md:w-[180px] shrink-0 -mt-16 md:-mt-20">
            <Link href="/" className="absolute inset-0 flex items-center justify-center hover:opacity-90 transition-opacity z-10 pt-2 md:pt-4">
              <img
                src="/moto/UTB/logo.png"
                alt="UTB Logo"
                className="h-full w-auto object-contain object-top"
              />
            </Link>
          </div>

          {/* Newsletter Input */}
          <div className="w-full md:w-auto flex items-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-white text-primary pl-4 pr-6 py-3 min-w-[250px] outline-none text-sm placeholder-primary font-medium rounded-l-md h-12"
            />
            <button
              className="bg-secondary text-white flex items-center justify-center w-[52px] h-[52px] hover:bg-secondary-hover transition-colors shrink-0 z-10"
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                marginLeft: "-22px"
              }}
            >
              <img src="/moto/UTB/vector.png" alt="Submit" className="w-5 h-5 md:h-6 md:w-6 object-contain brightness-0 invert ml-[-2px]" />
            </button>
          </div>
        </div>

        <div className="border-t h-1 rounded border-white/20 mb-8"></div>

        {/* Middle Section: Links & Info */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 pb-12">

          {/* Left Description */}
          <div className="w-full lg:w-[45%] text-lg leading-relaxed text-gray-200" data-aos="fade-right" data-aos-duration="1000">
            <p>
              <span className="font-bold text-white">UTB</span> is doing business with large national and international petrochemical
              companies for the purchase of all its products. To guarantee the quality of its
              products, business is done directly with reputable manufacturers who produce
              according to desired specifications.
            </p>
          </div>

          <div className="hidden lg:block w-px bg-white/20 self-stretch"></div>

          {/* Right Columns */}
          <div className="w-full lg:w-[55%] grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-left" data-aos-duration="1000">

            {/* Quick Links */}
            <div>
              <h4 className="font-bold italic text-lg text-white mb-6">Quick Links</h4>
              <ul className="space-y-4 text-md text-white/90 font-medium">
                <li><Link href="#" className="hover:text-white transition-colors">About UTB</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">News</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Cookies</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Service */}
            <div>
              <h4 className="font-bold italic text-lg text-white mb-6">Service</h4>
              <ul className="space-y-4 text-md  text-white/90 font-medium">
                <li><Link href="#" className="hover:text-white transition-colors">Delivery</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Pick up order</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Delivery Details</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold italic text-lg text-white mb-6">Contact</h4>
              <ul className="space-y-6 text-md text-white/90 font-medium">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="shrink-0 mt-0.5 text-white" />
                  <span className="leading-snug">
                    Kamerlingh Onnesweg 28<br />
                    3316GL Ridderkerk
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="shrink-0 text-white" />
                  <a href="mailto:klantenservice@utboils.com" className="hover:text-white transition-colors">
                    klantenservice@utboils.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="shrink-0 text-white" />
                  <a href="tel:+31088-0202300" className="hover:text-white transition-colors">
                    +31 088-0202300
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </Container>

      {/* Bottom Copyright */}
      <div className="bg-white py-4 text-center">
        <p className="text-dark font-medium text-sm">
          © 2026 UtBoils | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
