"use client";

import React from "react";
import { ChevronDown, MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiX } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col bg-[#F1F4F8] mt-8 min-[2500px]:mt-16">
      
      <div className="w-full pt-16 pb-12 min-[2500px]:pt-24 min-[2500px]:pb-16 min-[3800px]:pt-32 min-[3800px]:pb-24">
        <div className="custom-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 min-[2500px]:gap-12 min-[3800px]:gap-20">
          
          {/* Column 1: Logo & Welcome (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6 min-[2500px]:gap-10">
            <img src="/moto/jp-group/logo.png" alt="JP Group Logo" className="w-[60%] lg:w-[50%] min-[2500px]:w-[70%] object-contain" />
            <p className="footer-body text-gray-600 leading-relaxed min-[2500px]:text-2xl min-[3800px]:text-4xl lg:pr-8">
              JP Group A/S is a global supplier of automotive spare parts, specializing in components for European vehicles. With a strong focus on quality, availability, and wide product coverage, the company supports aftermarket distributors and workshops with reliable solutions.
            </p>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-6 min-[2500px]:gap-10">
            <h4 className="footer-heading text-dark font-bold min-[2500px]:text-3xl min-[3800px]:text-5xl">Quick Links</h4>
            <div className="flex flex-col gap-4 min-[2500px]:gap-6">
              <a href="#home" className="footer-body text-gray-600 hover:text-primary transition-colors min-[2500px]:text-2xl min-[3800px]:text-4xl">Home</a>
              <a href="#about" className="footer-body text-gray-600 hover:text-primary transition-colors min-[2500px]:text-2xl min-[3800px]:text-4xl">About Us</a>
              <a href="#products" className="footer-body text-gray-600 hover:text-primary transition-colors min-[2500px]:text-2xl min-[3800px]:text-4xl">Products</a>
              <a href="#news" className="footer-body text-gray-600 hover:text-primary transition-colors min-[2500px]:text-2xl min-[3800px]:text-4xl">News</a>
              <a href="#gallery" className="footer-body text-gray-600 hover:text-primary transition-colors min-[2500px]:text-2xl min-[3800px]:text-4xl">Gallery</a>
              <a href="#contact" className="footer-body text-gray-600 hover:text-primary transition-colors min-[2500px]:text-2xl min-[3800px]:text-4xl">Contact Us</a>
            </div>
          </div>

          {/* Column 3: Services & Contact (Span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-6 min-[2500px]:gap-10">
            <h4 className="footer-heading text-dark font-bold min-[2500px]:text-3xl min-[3800px]:text-5xl">Services & Contact</h4>
            <div className="flex flex-col gap-4 min-[2500px]:gap-6">
              <a href="#cookies" className="footer-body text-gray-600 hover:text-primary transition-colors min-[2500px]:text-2xl min-[3800px]:text-4xl">Cookies</a>
              <a href="#contact" className="footer-body text-gray-600 hover:text-primary transition-colors min-[2500px]:text-2xl min-[3800px]:text-4xl">Contact</a>
              <a href="#jobs" className="footer-body text-gray-600 hover:text-primary transition-colors min-[2500px]:text-2xl min-[3800px]:text-4xl">Jobs & career</a>
              <a href="#socials" className="footer-body text-gray-600 hover:text-primary transition-colors min-[2500px]:text-2xl min-[3800px]:text-4xl">See Our Social Medias</a>
              <a href="#terms" className="footer-body text-gray-600 hover:text-primary transition-colors min-[2500px]:text-2xl min-[3800px]:text-4xl">Sales and Delivery Terms</a>
            </div>
          </div>

          {/* Column 4: Contact (Span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-6 min-[2500px]:gap-10">
            <h4 className="footer-heading text-dark font-bold min-[2500px]:text-3xl min-[3800px]:text-5xl">Contact</h4>
            <div className="flex flex-col gap-4 min-[2500px]:gap-6">
              <div className="flex items-start gap-3 min-[2500px]:gap-5 text-gray-600 footer-body">
                <MapPin className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 shrink-0 mt-0.5" />
                <span className="leading-relaxed min-[2500px]:text-2xl min-[3800px]:text-4xl">
                  JP Group A/S, Hjulmagervej 2<br />
                  8800 Viborg,Denmark
                </span>
              </div>
              <div className="flex items-center gap-3 min-[2500px]:gap-5 text-gray-600 footer-body">
                <Phone className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 shrink-0" />
                <span className="min-[2500px]:text-2xl min-[3800px]:text-4xl">+45 86 61 51 00</span>
              </div>
              <div className="flex items-center gap-3 min-[2500px]:gap-5 text-gray-600 footer-body">
                <Mail className="w-5 h-5 min-[2500px]:w-8 min-[2500px]:h-8 shrink-0" />
                <span className="min-[2500px]:text-2xl min-[3800px]:text-4xl">info@jpgroup.dk</span>
              </div>
            </div>
          </div>

          {/* Column 5: Language & Socials (Span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-8 min-[2500px]:gap-12">
            
            {/* Select Language */}
            <div className="flex flex-col gap-4 min-[2500px]:gap-6">
              <h4 className="footer-heading text-dark font-bold min-[2500px]:text-3xl min-[3800px]:text-5xl">Select Language</h4>
              <div className="relative w-fit">
                <select className="appearance-none bg-transparent border border-gray-300 text-gray-600 footer-body py-2 pl-4 pr-10 min-[2500px]:py-4 min-[2500px]:pl-6 min-[2500px]:pr-14 min-[2500px]:text-2xl min-[3800px]:text-4xl rounded-md focus:outline-none focus:border-primary">
                  <option value="en">English</option>
                  <option value="de">German</option>
                  <option value="dk">Danish</option>
                </select>
                <ChevronDown className="absolute right-3 min-[2500px]:right-5 top-1/2 -translate-y-1/2 w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 text-gray-500 pointer-events-none" />
              </div>
            </div>

            {/* Follow Us */}
            <div className="flex flex-col gap-4 min-[2500px]:gap-6 mt-4">
              <h4 className="footer-heading text-dark font-bold min-[2500px]:text-3xl min-[3800px]:text-5xl">Follow Us On</h4>
              <div className="flex items-center gap-4 min-[2500px]:gap-6">
                <a href="#" className="w-8 h-8 min-[2500px]:w-12 min-[2500px]:h-12 border border-gray-600 rounded-full flex items-center justify-center text-gray-600 hover:text-[#E11313] hover:border-[#E11313] transition-colors">
                  <FaFacebookF className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6" />
                </a>
                <a href="#" className="w-8 h-8 min-[2500px]:w-12 min-[2500px]:h-12 border border-gray-600 rounded-full flex items-center justify-center text-gray-600 hover:text-[#E11313] hover:border-[#E11313] transition-colors">
                  <SiX className="w-3.5 h-3.5 min-[2500px]:w-5 min-[2500px]:h-5" />
                </a>
                <a href="#" className="w-8 h-8 min-[2500px]:w-12 min-[2500px]:h-12 border border-gray-600 rounded-full flex items-center justify-center text-gray-600 hover:text-[#E11313] hover:border-[#E11313] transition-colors">
                  <FaLinkedinIn className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6" />
                </a>
                <a href="#" className="w-8 h-8 min-[2500px]:w-12 min-[2500px]:h-12 border border-gray-600 rounded-full flex items-center justify-center text-gray-600 hover:text-[#E11313] hover:border-[#E11313] transition-colors">
                  <FaInstagram className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="w-full border-t border-gray-300 py-6 min-[2500px]:py-10 text-center">
        <p className="text-gray-500 footer-body min-[2500px]:text-xl min-[3800px]:text-3xl">
          © 2026 J.P. Group is a registered trademark
        </p>
      </div>
    </footer>
  );
};

export default Footer;
