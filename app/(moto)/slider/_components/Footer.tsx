import React from "react";
import Container from "./Container";
import Typography from "./Typography";
import { Facebook, Instagram, Linkedin, Send, Phone, Printer, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#28282B] pt-16 pb-8 ">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-12 mb-12">

          {/* Column 1: Logo & Info */}
          <div className="flex flex-col lg:col-span-3">
            <img src="/moto/slider/logo2.png" alt="Slider Logo" className="w-[140px] h-auto object-contain mb-6" />
            <Typography variant="lead" className="text-white leading-[1.8] mb-6 pe-4">
              Slider is a trusted manufacturer of high-performance lubricants and greases, serving automotive, industrial, marine, and agricultural sectors.
            </Typography>
            <Typography variant="h4" color="primary" className="mb-3 uppercase tracking-wider">
              SOCIALS
            </Typography>
            <div className="flex gap-4">
              <Link href="#" className="flex items-center justify-center text-white hover:text-primary transition-colors">
                <Facebook size={22} fill="currentColor" strokeWidth={0} />
              </Link>
              <Link href="#" className="flex items-center justify-center text-white hover:text-primary transition-colors">
                <Instagram size={22} />
              </Link>
              <Link href="#" className="flex items-center justify-center text-white hover:text-primary transition-colors">
                <Linkedin size={22} fill="currentColor" strokeWidth={0} />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col lg:col-span-2">
            <Typography variant="h4" color="primary" className="mb-6 uppercase tracking-wider">
              QUICK LINKS
            </Typography>
            <div className="flex flex-col gap-3">
              <Link href="#" className="text-white hover:text-white transition-colors">
                <Typography color="white" variant="body">Home</Typography>
              </Link>
              <Link href="#" className="text-white hover:text-white transition-colors">
                <Typography color="white" variant="body">About Us</Typography>
              </Link>
              <Link href="#" className="text-white hover:text-white transition-colors">
                <Typography color="white" variant="body">Products</Typography>
              </Link>
              <Link href="#" className="text-white hover:text-white transition-colors">
                <Typography color="white" variant="body">Quality</Typography>
              </Link>
              <Link href="#" className="text-white hover:text-white transition-colors">
                <Typography color="white" variant="body">News</Typography>
              </Link>
            </div>
          </div>

          {/* Column 3: Products */}
          <div className="flex flex-col lg:col-span-2">
            <Typography variant="h4" color="primary" className="mb-6 uppercase tracking-wider">
              PRODUCTS
            </Typography>
            <div className="flex flex-col gap-3">
              <Link href="#" className="text-white  transition-colors" color="white">
                <Typography color="white" variant="body">Engine Lubricants</Typography>
              </Link>
              <Link href="#" className="text-white  transition-colors">
                <Typography color="white" variant="body">Marine Lubricants</Typography>
              </Link>
              <Link href="#" className="text-white  transition-colors">
                <Typography color="white" variant="body">Small Engine Lubiricants</Typography>
              </Link>
              <Link href="#" className="text-white  transition-colors">
                <Typography color="white" variant="body">Greases</Typography>
              </Link>
              <Link href="#" className="text-primary  transition-colors">
                <Typography color="white" variant="body">See More...</Typography>
              </Link>
            </div>
          </div>

          {/* Column 4: Head Office */}
          <div className="flex flex-col lg:col-span-2">
            <Typography variant="h4" color="primary" className="mb-6 uppercase tracking-wider">
              HEAD OFFICE
            </Typography>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <Send size={18} className="text-primary shrink-0 mt-0.5" />
                <Typography variant="body" className="text-[#E2E2E2] leading-[1.6]">
                  Syngrou Andrea Avenue 17673,<br />
                  Kallithea, Athens, Greece
                </Typography>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={18} className="text-primary shrink-0" />
                <Typography variant="body" className="text-[#E2E2E2]">+30 210 4912614</Typography>
              </div>
              <div className="flex items-center gap-4">
                <Printer size={18} className="text-primary shrink-0" />
                <Typography variant="body" className="text-[#E2E2E2]">+30 210 4905069</Typography>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={18} className="text-primary shrink-0" />
                <Typography variant="body" className="text-[#E2E2E2]">info@slider.gr</Typography>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/20 mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Typography variant="body" className="text-white">
            Copyrights@2026 slider. All Rights Reserved
          </Typography>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Link href="#" className="text-white hover:text-primary transition-colors">
              <Typography variant="body" color="white">Privacy policy</Typography>
            </Link>
            <Link href="#" className="text-white hover:text-primary transition-colors">
              <Typography variant="body" color="white">Reach</Typography>
            </Link>
            <Link href="#" className="text-white hover:text-primary transition-colors">
              <Typography variant="body" color="white">Terms & Conditions</Typography>
            </Link>
            <Link href="#" className="text-white hover:text-primary transition-colors">
              <Typography variant="body" color="white">Cookies Policy</Typography>
            </Link>
            <Link href="#" className="text-white hover:text-primary transition-colors">
              <Typography variant="body" color="white">Site Notice</Typography>
            </Link>
            <Link href="#" className="text-white hover:text-primary transition-colors">
              <Typography variant="body" color="white">Compliance</Typography>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
