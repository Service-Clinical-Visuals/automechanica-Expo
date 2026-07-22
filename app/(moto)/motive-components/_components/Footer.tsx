"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-primary pt-16 pb-8 border-t border-white/10">
      <div className="custom-container flex flex-col gap-12">
        
        {/* Main Footer Content: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-9 gap-10 xl:gap-8">
          
          {/* Column 1: Brand & Description */}
          <div className="flex flex-col gap-6 xl:col-span-3" data-aos="fade-up">
            <Link href="/">
              <img 
                src="/moto/motive-components/logo1.png" 
                alt="Motive Components Logo" 
                className="w-[50%] h-auto object-contain"
              />
            </Link>
            <p className="footer-body text-white leading-relaxed max-w-[80%]">
              Delivering premium aftermarket engine components engineered for precision, reliability, and lasting performance. Trusted worldwide for quality and dependable engine solutions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6 xl:pl-10 xl:col-span-2" data-aos="fade-up" data-aos-delay="100">
            <div className="footer-heading  text-white font-bold ">Quick Links</div>
            <ul className="flex flex-col gap-4">
              <li><Link href="/" className="footer-body text-white hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#legacy" className="footer-body text-white hover:text-white transition-colors">About</Link></li>
              <li><Link href="#products" className="footer-body text-white hover:text-white transition-colors">Products</Link></li>
              <li><Link href="#customised" className="footer-body text-white hover:text-white transition-colors">New Development</Link></li>
              <li><Link href="#quality" className="footer-body text-white hover:text-white transition-colors">Quality</Link></li>
              <li><Link href="#news" className="footer-body text-white hover:text-white transition-colors">News</Link></li>
              <li><Link href="#contact" className="footer-body text-white hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-6 xl:col-span-2" data-aos="fade-up" data-aos-delay="200">
            <h1 className="footer-heading text-white font-bold">Contact</h1>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <a href="mailto:sales@motivecomponents.co.uk" className="footer-body text-white hover:text-white transition-colors">
                  sales@motivecomponents.co.uk
                </a>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <a href="tel:+4401908368995" className="footer-body text-white hover:text-white transition-colors">
                  +44(0)1908 368995
                </a>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <p className="footer-body text-white/80">
                  Mk55, Bramley Rd, Bletchley, Milton Keynes,<br />
                  MK11PT, Bucking, United Kingdom
                </p>
              </li>
            </ul>
          </div>

          {/* Column 4: Social media */}
          <div className="flex flex-col gap-6 xl:col-span-2" data-aos="fade-up" data-aos-delay="300">
            <h1 className="footer-heading text-white font-bold">Social media</h1>
            <div className="flex items-center gap-5 mt-1">
              <a href="#" className="hover:-translate-y-1 transition-transform group">
                <Facebook className="w-6 h-6 text-white" />
              </a>
              <a href="#" className="hover:-translate-y-1 transition-transform group">
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a href="#" className="hover:-translate-y-1 transition-transform group">
                <Youtube className="w-6 h-6 text-white" />
              </a>
              <a href="#" className="hover:-translate-y-1 transition-transform group">
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a href="#" className="hover:-translate-y-1 transition-transform group">
                <Twitter className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4" >
          <p className="footer-body text-white text-sm">
            Copyright &copy; 2025 Motive Components Ltd | All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="footer-body text-white text-sm hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="#" className="footer-body text-white text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
