"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[url('/moto/badenex/footer-bg.png')] bg-cover bg-center relative overflow-hidden text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('/moto/sigam/bg.png')] bg-repeat bg-center"></div>

      <div className="custom-container relative z-10 py-12 md:py-16 xl:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-8">

          {/* Column 1: Logo & Text (span 4) */}
          <div className="xl:col-span-4 flex flex-col gap-6" data-aos="fade-up">
            <Link href="#" className="flex items-center">
              <img
                src="/moto/badenex/logo.png"
                alt="Explorlube Logo"
                className="w-[150px] min-[2560px]:w-[200px] min-[3800px]:w-[300px] h-auto object-contain"
              />
            </Link>
            <p className="text-[#E5E7EB] lato-font section-text leading-relaxed pr-4 opacity-90">
              Explorlube is a German brand specializing in high-tech lubricants, additives, and service products, delivering innovative solutions for vehicles and machinery worldwide.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              <Link href="#" className="hover:-translate-y-1 transition-transform bg-white text-[#3B4148] rounded-full p-2 flex items-center justify-center">
                <Facebook className="w-5 h-5 min-[2560px]:w-8 min-[2560px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10 fill-current" />
              </Link>
              <Link href="#" className="hover:-translate-y-1 transition-transform bg-white text-[#3B4148] rounded-full p-2 flex items-center justify-center">
                <Twitter className="w-5 h-5 min-[2560px]:w-8 min-[2560px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10 fill-current" />
              </Link>
              <Link href="#" className="hover:-translate-y-1 transition-transform bg-white text-[#3B4148] rounded-full p-2 flex items-center justify-center">
                <Instagram className="w-5 h-5 min-[2560px]:w-8 min-[2560px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10" />
              </Link>
              <Link href="#" className="hover:-translate-y-1 transition-transform bg-white text-[#3B4148] rounded-full p-2 flex items-center justify-center">
                <Linkedin className="w-5 h-5 min-[2560px]:w-8 min-[2560px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10 fill-current" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links (span 2) */}
          <div className="xl:col-span-2 flex flex-col gap-6" data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-white oswald-font card-title font-semibold tracking-wide">Quick Links</h4>
            <ul className="flex flex-col gap-3 lato-font font-medium section-text text-[#FFFFFF] opacity-90">
              <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">News</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Us (span 3) with Left Border on Desktop */}
          <div className="xl:col-span-3 flex flex-col gap-6 xl:border-l xl:border-white/20 xl:pl-8" data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-white oswald-font card-title font-semibold tracking-wide">Contact Us</h4>
            <ul className="flex flex-col gap-4 lato-font section-text text-[#FFFFFF] opacity-90">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 min-[2560px]:w-8 min-[2560px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10 flex-shrink-0 mt-0.5 text-white" />
                <span>info@explorlube.de</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 min-[2560px]:w-8 min-[2560px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10 flex-shrink-0 mt-0.5 text-white" />
                <span>+49 781 47443134</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 min-[2560px]:w-8 min-[2560px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10 flex-shrink-0 mt-0.5 text-white" />
                <span className="leading-relaxed">Eibenweg 8, 77656 Offenburg,<br />Germany</span>
              </li>
            </ul>
          </div>

          {/* Column 4: News Letter (span 3) with Left Border on Desktop */}
          <div className="xl:col-span-3 flex flex-col gap-6 xl:border-l xl:border-white/20 xl:pl-8" data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-white oswald-font card-title font-semibold tracking-wide">News Letter</h4>
            <p className="text-[#FFFFFF] lato-font section-text leading-relaxed opacity-90">
              Subscribe to our newsletter to receive updates on the latest news!
            </p>
            <form className="flex flex-col gap-4 mt-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Subscribe with us..."
                className="w-full sm:w-[280px] min-[2560px]:w-[400px] min-[3800px]:w-[600px] bg-white text-gray-800 px-4 py-3 min-[2560px]:py-4 min-[3800px]:py-6 rounded section-text focus:outline-none focus:ring-2 focus:ring-[#D71A21]"
              />
              <button
                type="submit"
                className="bg-[#D71A21] hover:bg-[#B3151B] transition-colors text-white px-6 py-3 min-[2560px]:py-4 min-[3800px]:py-6 rounded flex items-center justify-center gap-2 font-semibold btn-text tracking-wide w-fit mt-1"
              >
                Subscribe <ArrowUpRight className="w-5 h-5 min-[2560px]:w-8 min-[2560px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </footer>
  );
}
