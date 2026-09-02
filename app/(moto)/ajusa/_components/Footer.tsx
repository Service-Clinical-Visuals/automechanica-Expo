"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#031c33] text-white inter-font pt-16">
      <div className="custom-container">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-12 xl:gap-20 mb-12">

          {/* Column 1: Logo & Text */}
          <div className="w-full lg:w-[35%] flex flex-col gap-6" data-aos="fade-up">
            <Link href="#">
              <img
                src="/moto/ajusa/logo.png"
                alt="Ajusa Logo"
                className="w-32 md:w-40 object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            </Link>
            <p className="text-white section-text leading-relaxed max-w-[517px]">
              Ajusa is a leading manufacturer of engine sealing systems and components, known for its strong OEM expertise and global presence. With decades of experience, the company delivers high-quality products designed for durability, precision, and reliable engine performance across a wide range of vehicles.
            </p>
          </div>

          {/* Columns 2, 3, 4 Wrapper */}
          <div className="w-full lg:w-[65%] grid grid-cols-1 sm:grid-cols-3 gap-8">

            {/* Column 2: Quick Links */}
            <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="100">
              <h4 className="card-title font-semibold poppins-font">Quick Links</h4>
              <ul className="flex flex-col gap-3 section-text text-white">
                <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Products</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">News</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Gallery</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 3: Products */}
            <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="200">
              <h4 className="card-title font-semibold poppins-font">Products</h4>
              <ul className="flex flex-col gap-3 section-text text-white">
                <li><Link href="#" className="hover:text-white transition-colors">Turbo Kits</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Cylinder Head Gasket</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Gaskets</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Hydraulic Lifters</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="300">
              <h4 className="card-title font-semibold poppins-font">Contact</h4>
              <ul className="flex flex-col gap-3 section-text text-white">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">
                    Ajusa United Kingdom<br />
                    Unit 25, Hortonwood 33,<br />
                    Telford, TF1 7EX
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="flex-shrink-0" />
                  <a href="tel:+4401952608771" className="hover:text-white transition-colors">
                    +44 (0)195 2608 771
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="flex-shrink-0" />
                  <a href="mailto:info@ajusa.co.uk" className="hover:text-white transition-colors">
                    info@ajusa.co.uk
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white py-6 -ml-30 -mr-30 text-center">
          <p className="section-text text-white">
            &copy; Ajusa {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
}
