"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Linkedin, Instagram, Facebook } from "lucide-react";
import Typography from "./Typography";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1c1c1c] pt-16 pb-8 border-t border-gray-800">
      <div className="custom-container">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 mb-16">

          {/* Col 1: Logo & Address (span-3) */}
          <div className="lg:col-span-3 flex flex-col space-y-6">
            <Link href="/abs-allbrakes" className="block  p-2">
              <img
                src="/moto/abs-allbrakes/logo.png"
                alt="ABS Logo"
                className="w-[35%]  object-contain"
              />
            </Link>
            <div className="footer-body text-white flex flex-col space-y-1 pr-4">
              <Typography variant="span" color="none">Family-owned since 1978, ABS is a global specialist in premium brake, steering, suspension, and wheel bearing solutions.</Typography>
            </div>
          </div>

          {/* Col 2: Quick Links (span-2) */}
          <div className="lg:col-span-2 text-white flex flex-col space-y-6">
            <Typography variant="h5" color="none" weight="bold" className="footer-heading">Quick Links</Typography>
            <div className="flex flex-col space-y-3">
              <Link href="#home" className="hover:text-white transition-colors"><Typography variant="p" color="none" className="footer-body">Home</Typography></Link>
              <Link href="#company" className="hover:text-white transition-colors"><Typography variant="p" color="none" className="footer-body">Company</Typography></Link>
              <Link href="#products" className="hover:text-white transition-colors"><Typography variant="p" color="none" className="footer-body">Products</Typography></Link>
              <Link href="#supply-chain" className="hover:text-white transition-colors"><Typography variant="p" color="none" className="footer-body">Supply Chain</Typography></Link>
              <Link href="#careers" className="hover:text-white transition-colors"><Typography variant="p" color="none" className="footer-body">Careers</Typography></Link>
            </div>
          </div>

          {/* Col 3: General (span-3) */}
          <div className="lg:col-span-2 text-white flex flex-col space-y-6">
            <Typography variant="h5" weight="bold" color="none" className="footer-heading">General</Typography>
            <div className="flex flex-col space-y-3">
              <Link href="#" className="hover:text-white transition-colors"><Typography variant="p" color="none" className="footer-body">Material Safety Data Sheets</Typography></Link>
              <Link href="#" className="hover:text-white transition-colors"><Typography variant="p" color="none" className="footer-body">Terms and Conditions</Typography></Link>
              <Link href="#" className="hover:text-white transition-colors"><Typography variant="p" color="none" className="footer-body">Cookies & Privacy</Typography></Link>
              <Link href="#" className="hover:text-white transition-colors"><Typography variant="p" color="none" className="footer-body">Certificates</Typography></Link>
              <Link href="#" className="hover:text-white transition-colors"><Typography variant="p" color="none" className="footer-body">Disclaimer</Typography></Link>
            </div>
          </div>

          {/* Col 4: Subscribe (span-3) */}
          <div className="lg:col-span-3 flex text-white flex-col space-y-6">
            <Typography variant="h4" weight="bold" color="none" className="footer-heading">Subscribe For More Information</Typography>
            <Typography variant="p" color="none" className="footer-body">
              Stay informed with the latest product launches, industry news, technical updates, and innovations from ABS All Brakes
            </Typography>
            <form className="flex items-center w-full max-w-sm mt-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Address...."
                className="flex-grow h-[46px] px-4 bg-white text-black outline-none font-lato rounded-l-md"
                required
              />
              <button
                type="submit"
                className="h-[46px] px-5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white flex items-center justify-center transition-colors rounded-r-md"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>

          {/* Col 5: Follow (span-1 / auto) */}
          <div className="lg:col-span-2 flex text-white flex-col space-y-6 lg:items-end">
            <Typography variant="h4" weight="bold" color="none" className="footer-heading whitespace-nowrap">Social Media Links</Typography>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="w-full pt-8 border-t border-white/60 flex justify-center text-center">
          <Typography variant="span" color="white" className="footer-body font-oswald text-gray-500">
            © ABS 2026. All Rights Reserved. | Privacy Policy
          </Typography>
        </div>

      </div>
    </footer>
  );
}
