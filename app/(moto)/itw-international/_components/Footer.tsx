"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Products", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  const productLinks = [
    { name: "Engine Mount", href: "#" },
    { name: "Filters", href: "#" },
    { name: "Head Lights", href: "#" },
    { name: "Ignition Coils", href: "#" },
    { name: "Oxygen Sensors", href: "#" },
  ];

  return (
    <footer className="w-full bg-[#f5f5f5] pt-16 pb-6">
      <div className="custom-container">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10 xl:gap-6 mb-12">
          
          {/* Column 1: Logo & Info */}
          <div className="col-span-2 md:col-span-3 xl:col-span-1">
            <Link href="#" className="inline-block mb-6 bg-white p-2 rounded shadow-sm">
              <img
                src="/moto/itw-international/logo.png"
                alt="ITW International Logo"
                className="w-40 lg:w-60 h-auto"
              />
            </Link>
            <p className="text-[#4a4a4a] font-normal section-text leading-relaxed">
              Delivering premium OEM and aftermarket automotive components with trusted quality, innovation, and reliable performance worldwide.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1 md:col-span-1 xl:pl-30">
            <h4 className="font-semibold text-[#2a2a2a] mb-6 card-text">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#4a4a4a] hover:text-[#b7262d] font-normal section-text transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div className="col-span-1 md:col-span-1 xl:pl-20">
            <h4 className="font-semibold text-[#2a2a2a] mb-6 card-text">Our Products</h4>
            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-[#4a4a4a] hover:text-[#b7262d] font-normal section-text transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="col-span-2 md:col-span-1 xl:col-span-1">
            <h4 className="font-semibold text-[#2a2a2a] mb-6 card-text">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[#4a4a4a] font-normal section-text">
                <Phone className="w-5 h-5 text-[#b7262d] flex-shrink-0" />
                <span>206-887-4938</span>
              </li>
              <li className="flex items-start gap-3 text-[#4a4a4a] font-normal section-text">
                <Mail className="w-5 h-5 text-[#b7262d] flex-shrink-0" />
                <a href="mailto:itwinternationaltrade@gmail.com" className="hover:text-[#b7262d] transition-colors">
                  itwinternationaltrade@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#4a4a4a] font-normal section-text">
                <MapPin className="w-5 h-5 text-[#b7262d] flex-shrink-0 mt-0.5" />
                <span>
                  1624 MARKET ST STE 226<br />
                  #78258 DENVER, CO<br />
                  80202-2523
                </span>
              </li>
            </ul>
          </div>

          {/* Column 5: Subscribe */}
          <div className="col-span-2 md:col-span-3 xl:col-span-1">
           <h4 className="font-semibold text-[#2a2a2a] mb-6 card-text">Subscribe For More Information</h4>
            <p className="text-[#4a4a4a] font-normal section-text mb-6 leading-relaxed">
              Stay informed with the latest product launches, industry news, technical updates, and innovations from ITW INTERNATIONAL LTD
            </p>
            <form className="relative flex items-center bg-white rounded shadow-sm overflow-hidden border border-gray-200">
              <input
                type="email"
                placeholder="Email Address..."
                className="w-full px-4 py-3 text-[#4a4a4a] font-normal font-oswald header-link placeholder-gray-400 placeholder:font-oswald focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-[#b7262d] text-white p-3 m-1 rounded flex items-center justify-center hover:bg-[#b7262d] transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="w-full border-t border-gray-200 pt-6 items-center flex justify-center">
          <p className="text-[#4a4a4a] font-normal section-text ">
            Copyright &copy; ITW INTERNATIONAL LTD ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
