"use client";

import React from "react";
import Container from "./Container";
import Typography from "./Typography";
import { Send, Facebook, Instagram, Youtube, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#112C63] pt-16 pb-3  " id="footer">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10 lg:gap-6 mb-10">
          {/* Logo and Newsletter */}
          <div className="lg:col-span-2">
            <div className="mb-6 inline-block  p-2 rounded-xl">
              <img
                src="/moto/eurol/logo.png"
                alt="Eurol Logo"
                className="h-12 xl:h-[90%] xl:w-[90%] w-auto object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <Typography color="white" className="font-albert text-xl  mb-6 leading-relaxed">
              Eurol is the only Dutch independent manufacturer of lubricants, additives and technical fluids, active in more than 90 countries.
            </Typography>
            <div className="flex border-4 border-white bg-white rounded h-10 w-full max-w-[280px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="border-0 px-3 w-full h-full text-sm font-albert text-dark outline-none"
              />
              <button className="bg-secondary text-white px-4 flex items-center justify-center hover:bg-secondary-hover transition-colors">
                <Send size={16} />
              </button>
            </div>
          </div>

          {/* Top Product Categories */}
          <div className="xl:col-span-2 lg:col-span-2 col-span-1 flex flex-col  xl:ml-15 text-start">
            <Typography variant="h5" color="white" className="font-goldman mb-6 underline underline-white/50  text-base md:text-lg">
              Top Product Categories
            </Typography>
            <ul className="space-y-3 font-albert items-start text-start text-lg text-white">
              <li><Link href="#" className="hover:text-white transition-colors">Engine Oils</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Greases</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Additives</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Coolants & Antifreeze</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Transmission Fluids</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Brake Fluids</Link></li>
            </ul>
          </div>

          {/* Top Markets */}
          <div>
            <Typography variant="h5" color="white" className="font-goldman mb-6 underline underline-white/50  text-base md:text-lg">
              Top Markets
            </Typography>
            <ul className="space-y-4 font-albert text-lg text-white">
              <li><Link href="#" className="hover:text-white transition-colors">Automotive</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Agri Cultural</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Machines & Industry</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Shipping & Offshore</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Earth Moving Industry</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Trucks & Transport</Link></li>
            </ul>
          </div>

          {/* General */}
          <div>
            <Typography variant="h5" color="white" className="font-goldman mb-6 underline underline-white/50  text-base md:text-lg">
              General
            </Typography>
            <ul className="space-y-4 font-albert text-lg text-white">
              <li><Link href="#" className="hover:text-white transition-colors">Code of Conduct</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cookies</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Statement</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">General Terms</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Disclaimer</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <Typography variant="h5" color="white" className="font-goldman mb-6 underline underline-white/50  text-base md:text-lg">
              Follow Us
            </Typography>
            <div className="flex flex-wrap gap-2">
              <Link href="#" className="bg-white text-[#112C63] w-8 h-8 rounded flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Facebook size={16} />
              </Link>
              <Link href="#" className="bg-white text-[#112C63] w-8 h-8 rounded flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Instagram size={16} />
              </Link>
              <Link href="#" className="bg-white text-[#112C63] w-8 h-8 rounded flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Youtube size={16} />
              </Link>
              <Link href="#" className="bg-white text-[#112C63] w-8 h-8 rounded flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Twitter size={16} />
              </Link>
              <Link href="#" className="bg-white text-[#112C63] w-8 h-8 rounded flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Linkedin size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white pt-2 text-center">
          <Typography variant="body" color="white" className="font-albert text-sm ">
            © Eurol 2026 - All Rights Reserved
          </Typography>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
