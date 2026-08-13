"use client";

import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="py-16 xl:py-20 bg-white">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">

          {/* Left Image */}
          <div className="w-full lg:col-span-6 xl:col-span-6 h-full flex order-1 lg:order-1 overflow-hidden rounded-md" data-aos="fade-right">
            <img
              src="/moto/segar/abt.png"
              alt="SEGER Facility"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-8 lg:col-span-6 xl:col-span-6 order-2 lg:order-2" data-aos="fade-left">
            {/* Heading */}
            <div>
              <h3 className="text-[#DF1222] roboto-font font-semibold section-text mb-3 tracking-wide">About Seger</h3>
              <h2 className="section-title text-[#202020] roboto-font font-semibold leading-tight">From Local Roots to Global Horn Leader</h2>
            </div>

            {/* Paragraph */}
            <div className="text-[#404040] font-regular outfit-font section-text tracking-normal leading-relaxed space-y-4">
              <p>
                Seger Horns has grown into a leading force in the Turkish automotive sub-industry, contributing significantly to the national economy while establishing a strong global presence. The company's journey began in 1981 in Bursa, starting as a modest workshop focused on copper wire production. Through continuous innovation, dedication to quality, and a clear vision for growth, Seger successfully expanded into the manufacturing of electric and air horns, evolving into Turkey's largest horn producer.
              </p>
              <p>
                Today, Seger Horns not only serves the domestic market but also stands as a trusted international brand, exporting high-performance horn solutions to approximately 65 countries worldwide. With a deep understanding of diverse cultural and economic requirements, the company develops and manufactures a wide range of horn models tailored to meet specific regional needs. Backed by advanced production technologies, strict quality standards, and decades of expertise, Seger continues to deliver reliable, durable, and high-quality products that meet the expectations of global automotive markets.
              </p>
            </div>

            {/* Button */}
            <div className="mt-2 flex">
              <Button href="#" variant="primary-outline" className="flex items-center gap-2 btn-text">
                About Company <ArrowRight size={18} />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
