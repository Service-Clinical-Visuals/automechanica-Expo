"use client";

import React from "react";
import Button from "./Button";
import Typography from "./Typography";
import { ArrowUpRight } from "lucide-react";

export default function Quality() {
  const brands = [
    {
      logo: (
        <img src="/moto/proquisur-sl/pro1.png" alt="DIMASOIL" className="h-auto w-auto object-contain" />
      ),
      description: "Wide range of high performance lubricants for light, heavy and industrial vehicles.",
    },
    {
      logo: (
        <img src="/moto/proquisur-sl/pro2.png" alt="arlo" className="h-auto w-auto object-contain" />
      ),
      description: "Antifreezes & Refrigerants with IAT & OAT technology, maintenance and consumer products for the automotive industry",
    },
    {
      logo: (
        <img src="/moto/proquisur-sl/pro3.png" alt="PRO" className="h-auto w-auto object-contain" />
      ),
      description: "Wide range of technical products, additives and aerosols.",
    }
  ];

  return (
    <section className="py-20 xl:py-20 bg-white text-center">
      <div className="custom-container">
        {/* Heading */}
        <div className="flex flex-col gap-3 items-center mb-3" data-aos="fade-up">
          <Typography variant="span" className="!text-[#6FB420] font-bold text-sm tracking-wide">
            Our In House Brands
          </Typography>
          <Typography variant="h2" className="section-title text-[#202020] manrope font-bold leading-tight">
            Three Brands, One Commitment to Quality & Performance
          </Typography>
        </div>

        {/* Subtitle */}
        <Typography variant="p" className="max-w-10xl mx-auto text-[#494949] inter section-text mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          Our in-house brands deliver a complete range of automotive and industrial solutions—from premium lubricants and advanced coolants to technical additives and maintenance chemicals.<br className="hidden md:block" />Built for reliability and engineered for performance, they meet the highest standards across every application.
        </Typography>

        {/* Brand Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white border border-[#686868] px-6 py-10 flex flex-col items-center justify-between h-full min-h-[300px] 3xl:min-h-[400px] rounded-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center h-16 mb-4">
                {brand.logo}
              </div>
              <Typography variant="p" className="text-[#7A7A7A] inter responsive-text-sm leading-relaxed mb-8 flex-grow flex items-center">
                {brand.description}
              </Typography>

              <Button href="#" variant="primary" className="!rounded-sm !px-6 !py-2.5 w-auto">
                <span className="flex items-center gap-2 text-sm font-semibold">
                  Explore Products <ArrowUpRight size={16} />
                </span>
              </Button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
