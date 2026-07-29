"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const featuredProducts = [
  {
    image: "/moto/swd/f1.png",
    title: "ATF SPECIAL CVT",
    link: "#"
  },
  {
    image: "/moto/swd/f2.png",
    title: "FAVORIT MSCK 15W–40",
    link: "#"
  },
  {
    image: "/moto/swd/f3.png",
    title: "PRIMOL POWER SYNTH CS 10W–40",
    link: "#"
  }
];

const Manufacture = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-4 max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="font-primary font-bold text-3xl md:text-4xl lg:text-[42px] text-[#2D3B6F] leading-tight">
            Our Featured Products
          </h2>
          <p className="font-secondary font-normal text-[#222222] text-sm md:text-base lg:text-lg leading-relaxed">
            Rheinol engine oils are developed to meet the latest international quality standards and OEM specifications. Manufactured with precision and tested for performance, they provide dependable protection, improved efficiency, and long-lasting engine reliability in demanding operating conditions.
          </p>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-5 w-full mt-8 md:mt-10" data-aos="fade-up" data-aos-delay="100">
          {featuredProducts.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl md:rounded-[28px] border border-[#E5E5E5] p-2 sm:p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Top Image Box */}
              <div className="w-full aspect-[4/3] bg-[#F7F7F7] sm:bg-[#F5F5F5] rounded-xl sm:rounded-2xl overflow-hidden flex items-center justify-center p-6 mb-6 relative group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "/moto/swd/abt.png";
                  }}
                />
              </div>

              {/* Bottom Title & Button */}
              <div className="flex items-center justify-between gap-4 mt-auto">
                <h3 className="font-primary font-bold text-base sm:text-lg text-[#222222] tracking-wide">
                  {item.title}
                </h3>
                <Link
                  href={item.link}
                  className="w-8 h-8 rounded-full bg-[#2D3B6F] flex items-center justify-center text-white shrink-0 hover:bg-[#1F294F] transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={2} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Manufacture;
