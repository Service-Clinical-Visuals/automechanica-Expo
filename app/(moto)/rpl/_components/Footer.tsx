"use client";

import React from "react";
import { Send, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import Typography from "./Typography";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col bg-white border-t border-gray-100">

      {/* Top Section - Links and Info */}
      <div className="custom-container py-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-12 xl:gap-8" data-aos="fade-up">

        {/* Logo & Intro */}
        <div className="flex flex-col gap-6 xl:col-span-4">
          <img
            src="/moto/rpl/logo.png"
            alt="RPL Clima Logo"
            className="w-32 min-[3800px]:w-64 object-contain"
            onError={(e) => { (e.target as HTMLImageElement).src = "/moto/ampro/logo.png"; }}
          />
          <Typography variant="p" color="muted" className="leading-relaxed">
            RPL CLIMA is a leading specialist in automotive climate control, offering a complete range of high-performance HVAC components for professionals across the globe.
          </Typography>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6 xl:col-span-2 xl:col-start-6">
          <h4 className="footer-heading text-primary font-bold">Quick Links</h4>
          <div className="flex flex-col gap-4">
            <Link href="#home" className="footer-body text-[#484848] hover:text-primary transition-colors">Home</Link>
            <Link href="#about" className="footer-body text-[#484848] hover:text-primary transition-colors">About Us</Link>
            <Link href="#products" className="footer-body text-[#484848] hover:text-primary transition-colors">Products</Link>
            <Link href="#contact" className="footer-body text-[#484848] hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>

        {/* Customer */}
        <div className="flex flex-col gap-6 xl:col-span-2">
          <h4 className="footer-heading text-primary font-bold">Customer</h4>
          <div className="flex flex-col gap-4">
            <Link href="#" className="footer-body text-[#484848] hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="footer-body text-[#484848] hover:text-primary transition-colors">General Terms and Conditions of Sale</Link>
            <Link href="#" className="footer-body text-[#484848] hover:text-primary transition-colors">Warranty Conditions</Link>
            <Link href="#" className="footer-body text-[#484848] hover:text-primary transition-colors">Gas Loads</Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6 xl:col-span-3">
          <h4 className="footer-heading text-primary font-bold">Contact Info</h4>
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1 min-[3800px]:w-10 min-[3800px]:h-10" />
              <Typography variant="p" color="muted" className="leading-relaxed">
                Vilamoura Industrial Zone,<br />
                Rua dos Latoeiros, Lot 6.1 1/43F,<br />
                8125-496 Vilamoura, Portugal
              </Typography>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-secondary shrink-0 min-[3800px]:w-10 min-[3800px]:h-10" />
              <Typography variant="p" color="muted">289 381 720</Typography>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-secondary shrink-0 min-[3800px]:w-10 min-[3800px]:h-10" />
              <Typography variant="p" color="muted">geral@rplclima.com</Typography>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-200"></div>

      {/* Middle Section - Social & Newsletter */}
      <div className="custom-container py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8" data-aos="fade-up" data-aos-delay="100">

        {/* Social */}
        <div className="flex flex-col gap-4">
          <h4 className="footer-heading text-primary font-bold">Social</h4>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-secondary-hover transition-colors">
              <Facebook className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10" fill="currentColor" stroke="none" />
            </a>
            <a href="#" className="w-10 h-10 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-secondary-hover transition-colors">
              <Instagram className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10" />
            </a>
            <a href="#" className="w-10 h-10 min-[3800px]:w-20 min-[3800px]:h-20 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-secondary-hover transition-colors">
              <Linkedin className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10" fill="currentColor" stroke="none" />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4 w-full md:w-auto md:min-w-[400px]">
          <h4 className="footer-heading text-primary font-bold">Subscribe to Our Newsletter</h4>
          <div className="relative w-full group">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white text-gray-700 border border-secondary/40 rounded-lg py-3 px-4 pr-12 min-[3800px]:py-6 min-[3800px]:px-8 min-[3800px]:rounded-2xl focus:outline-none focus:border-secondary transition-colors placeholder:text-gray-400 font-sans"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 min-[3800px]:w-16 min-[3800px]:h-16 bg-secondary text-white rounded flex items-center justify-center hover:bg-secondary-hover transition-colors">
              <Send className="w-4 h-4 min-[3800px]:w-8 min-[3800px]:h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright & Payment Icons */}
      <div className="w-full bg-primary py-8 min-[3800px]:py-16 mt-auto" >
        <div className="custom-container flex flex-col lg:flex-row items-center justify-between gap-8 text-white">

          {/* Partners / Certificates */}
          <div className="flex items-center gap-4 min-[3800px]:gap-8">
            <img src="/moto/rpl/footer1.png" alt="Livro de Reclamações" className="h-10 min-[3800px]:h-20 object-contain rounded" />

            {/* Separator line */}
            <div className="w-px h-10 min-[3800px]:h-20 bg-white/20 hidden lg:block mx-2"></div>

            <img src="/moto/rpl/footer2.png" alt="TecAlliance" className="h-10 min-[3800px]:h-20 object-contain rounded" />
          </div>

          {/* Copyright */}
          <div className="footer-body min-[3800px]:text-xl text-white text-center lg:text-left">
            © 2026 RPL Clima, Lda. All rights reserved | <span className="font-bold text-white">LV engine</span>
          </div>

          {/* Payment Methods */}
          <div className="flex items-center gap-3 min-[3800px]:gap-6">
            <img src="/moto/rpl/footer3.png" alt="Payment Method 1" className="h-8 min-[3800px]:h-16 object-contain rounded" />
            <img src="/moto/rpl/footer4.png" alt="Payment Method 2" className="h-8 min-[3800px]:h-16 object-contain rounded" />
            <img src="/moto/rpl/footer5.png" alt="Payment Method 3" className="h-8 min-[3800px]:h-16 object-contain rounded" />
            <img src="/moto/rpl/footer6.png" alt="Payment Method 4" className="h-8 min-[3800px]:h-16 object-contain rounded" />
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
