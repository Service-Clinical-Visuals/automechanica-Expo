"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1C2026] text-white outfit-font pt-16">
      <div className="custom-container">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-16">

          {/* Left Column: Logo & Text */}
          <div className="w-full lg:w-[35%] flex flex-col gap-6 lg:pr-10" data-aos="fade-up">
            <Link href="#">
              <img
                src="/moto/segar/logo.png"
                alt="SEGER Logo"
                className="w-auto h-12 object-contain brightness-0 invert"
                onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span class="text-white font-bold text-4xl roboto-font tracking-wide">SEGER</span>' }}
              />
            </Link>
            <p className="!text-white font-regular outfit-font section-text leading-relaxed mt-4">
              Seger Ses ve Elektrikli Gereçler Sanayi A.Ş. is a leading manufacturer of automotive horns and signaling systems, known for its strong engineering expertise and global presence. The company delivers reliable, high-performance products designed to enhance vehicle safety and communication across various automotive applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full lg:w-[15%] flex flex-col gap-6" data-aos="fade-up" data-aos-delay="100">
            <h4 className="card-title font-semibold roboto-font text-white">Quick Links</h4>
            <ul className="flex flex-col gap-4 !text-white outfit-font font-regular section-text">
              <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">News</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="w-full lg:w-[20%] flex flex-col gap-6" data-aos="fade-up" data-aos-delay="200">
            <h4 className="card-title font-semibold roboto-font text-white">Products</h4>
            <ul className="flex flex-col gap-4 !text-white outfit-font font-regular section-text">
              <li><Link href="#" className="hover:text-white transition-colors">Horn</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Battery</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">AVAS Alarm System</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Lighting Groups</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Seat Control Unit</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full lg:w-[25%] flex flex-col gap-6" data-aos="fade-up" data-aos-delay="300">
            <h4 className="card-title font-semibold roboto-font text-white">Contact</h4>
            <ul className="flex flex-col gap-5 !text-white outfit-font font-regular section-text">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-white" />
                <span className="leading-relaxed">
                  Demirtaş Dumlupınar OSB Mah.<br />
                  Mustafa Karaer Cad. No:22 16110<br />
                  Osmangazi - BURSA / TÜRKİYE
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0 text-white" />
                <a href="tel:+902242610311" className="hover:text-white transition-colors">
                  +90 (224) 261 03 11
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0 text-white" />
                <a href="mailto:info@seger.com" className="hover:text-white transition-colors">
                  info@seger.com
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="w-full lg:w-[15%] flex flex-col gap-6" data-aos="fade-up" data-aos-delay="400">
            <h4 className="card-title font-semibold roboto-font text-white whitespace-nowrap">Follow Us On</h4>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="w-full border-t border-white py-6 flex flex-col justify-center items-center gap-4 !text-white outfit-font section-text font-regular">
          <p className="!text-white">
            &copy; 2026 All rights reserved, SEGER
          </p>
        </div>

      </div>
    </footer>
  );
}
