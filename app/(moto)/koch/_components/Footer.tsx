"use client";

import React from "react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import Typography from "./Typography";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col mt-8 border-t border-gray-100">
      {/* Top Section */}
      <div className="w-full relative bg-secondary pt-16 pb-16 min-[2100px]:pt-24 min-[2100px]:pb-24 min-[3800px]:pt-32 min-[3800px]:pb-32">
        <div className="custom-container relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-10 xl:gap-6 min-[2100px]:gap-10 min-[3800px]:gap-16">
          
          {/* Column 1: Logo & Text (Span 4) */}
          <div className="col-span-1 md:col-span-2 xl:col-span-4 flex flex-col gap-6">
            <img src="/moto/koch/logo.png" alt="Koch Logo" className="w-[60%] sm:w-[40%] xl:w-[60%] min-[3800px]:w-[50%] object-contain" data-aos="fade-up" />
            <Typography variant="p" color="muted" className="leading-relaxed max-w-[95%] min-[3800px]:text-xl" data-aos="fade-up" data-aos-delay="100">
              Trust the ideal solution for wheel alignment on cars and commercial vehicles from Europe's leading manufacturer of wheel alignment equipment.
            </Typography>
          </div>

          {/* Column 2: Links (Span 2) */}
          <div className="col-span-1 xl:col-span-2 flex flex-col gap-6 xl:pl-6 min-[3800px]:pl-10">
            <Typography variant="h4" color="dark" className="font-bold" data-aos="fade-up" data-aos-delay="100">Links</Typography>
            <div className="flex flex-col gap-4 min-[3800px]:gap-6" data-aos="fade-up" data-aos-delay="200">
              <a href="#home" className="text-[#4B5563] hover:text-primary transition-colors text-[18px] min-[3800px]:text-xl font-rubik">Home</a>
              <a href="#history" className="text-[#4B5563] hover:text-primary transition-colors text-[18px] min-[3800px]:text-xl font-rubik">History</a>
              <a href="#products" className="text-[#4B5563] hover:text-primary transition-colors text-[18px] min-[3800px]:text-xl font-rubik">Products</a>
              <a href="#dates" className="text-[#4B5563] hover:text-primary transition-colors text-[18px] min-[3800px]:text-xl font-rubik">Dates</a>
              <a href="#contact" className="text-[#4B5563] hover:text-primary transition-colors text-[18px] min-[3800px]:text-xl font-rubik">Contact</a>
            </div>
          </div>

          {/* Column 3: Contact (Span 3) */}
          <div className="col-span-1 xl:col-span-3 flex flex-col gap-6">
            <Typography variant="h4" color="dark" className="font-bold" data-aos="fade-up" data-aos-delay="200">Contact</Typography>
            <div className="flex flex-col gap-5 min-[3800px]:gap-8" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" strokeWidth={2.5} />
                <Typography variant="p" color="muted" className="min-[3800px]:text-xl">+49 5103 - 704430</Typography>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" strokeWidth={2.5} />
                <Typography variant="p" color="muted" className="min-[3800px]:text-xl">info@koch-achsmessanlagen.de</Typography>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" strokeWidth={2.5} />
                <Typography variant="p" color="muted" className="leading-relaxed min-[3800px]:text-xl">
                  Hauptstraße 26<br />30974 Wennigsen,<br />Germany
                </Typography>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter (Span 3) */}
          <div className="col-span-1 md:col-span-2 xl:col-span-3 flex flex-col gap-6">
            <Typography variant="h4" color="dark" className="font-bold" data-aos="fade-up" data-aos-delay="300">Subscribe For More Information</Typography>
            <Typography variant="p" color="muted" className="leading-relaxed min-[3800px]:text-xl" data-aos="fade-up" data-aos-delay="400">
              Stay informed with the latest product launches, industry news, technical updates, and innovations from Koch Achsmessanlagen.
            </Typography>
            
            {/* Visual Input Field */}
            <div className="relative w-full mt-2" data-aos="fade-up" data-aos-delay="500">
              <input 
                type="email" 
                placeholder="Email Address...." 
                className="w-full bg-white border border-gray-200 text-dark rounded-lg py-3 min-[3800px]:py-5 pl-4 pr-14 min-[3800px]:pr-20 focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm placeholder:text-gray-400 placeholder:text-sm min-[3800px]:placeholder:text-lg min-[3800px]:text-lg font-rubik"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 aspect-square bg-primary text-white rounded-md flex items-center justify-center hover:bg-primary-hover transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                <ArrowRight className="w-5 h-5 min-[3800px]:w-7 min-[3800px]:h-7" strokeWidth={2} />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="w-full bg-secondary flex justify-center items-center py-6 min-[3800px]:py-10 border-t border-gray-200">
        <div className="custom-container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#4B5563] text-[15px] min-[3800px]:text-lg tracking-wide text-center md:text-left font-rubik">
            © Koch Achsmessanlagen, Wennigsen/Deister, Germany. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#imprint" className="text-[#4B5563] hover:text-primary transition-colors text-[15px] min-[3800px]:text-lg font-rubik">Imprint</a>
            <a href="#privacy" className="text-[#4B5563] hover:text-primary transition-colors text-[15px] min-[3800px]:text-lg font-rubik">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
