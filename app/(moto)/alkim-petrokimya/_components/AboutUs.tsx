"use client";

import React from "react";
import Button from "./Button";
import { Settings, Factory } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="py-20 xl:py-20 bg-[#D9D9D933]">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-12 items-center">

          {/* Left Content */}
          <div className="flex flex-col gap-5" data-aos="fade-right">
            {/* Heading */}
            <div className="flex flex-col w-full">
              <h2 className="section-title text-[#1D1D1B] orbitron font-semibold">About us</h2>
              <div className="w-full max-w-[140px] h-[2px] bg-[#EA203B] "></div>
            </div>

            {/* Paragraphs */}
            <div className="text-[#333333] dmsans section-text tracking-normal flex flex-col gap-6">
              <p>
                Alkim Petrokimya manufactures premium lubricants and process oils, delivering reliable, high-performance solutions for automotive, industrial, marine, and manufacturing applications worldwide.
              </p>
              <p>
                Backed by advanced production facilities and strict quality standards, we develop innovative products that ensure efficiency, durability, and long-lasting equipment performance.
              </p>
              <p>
                With a diverse product portfolio and a customer-focused approach, we provide tailored lubrication solutions trusted by partners and distributors across international markets.
              </p>
            </div>

            {/* Separator line */}
            <div className="w-full max-w-[530px] h-[2px] bg-[#EA203B]  mx-auto"></div>

            {/* Bullet points */}
            <ul className="flex flex-col gap-6 text-[#333333] dmsans section-text">
              <li className="flex items-start gap-4">
                <img src="/moto/alkim-petrokimya/tick.png" alt="tick" className="w-auto h-auto xl:w-auto xl:h-auto flex-shrink-0 mt-1 object-contain" />
                <p>
                  <strong>Global Presence</strong> – Supplying premium lubricant solutions to customers and distributors across more than 80 countries with a strong international network.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <img src="/moto/alkim-petrokimya/tick.png" alt="tick" className="w-auto h-auto xl:w-auto xl:h-auto flex-shrink-0 mt-1 object-contain" />
                <p>
                  <strong>Advanced Manufacturing</strong> – Equipped with modern production facilities and advanced technologies to ensure consistent quality, precision, and efficient manufacturing.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <img src="/moto/alkim-petrokimya/tick.png" alt="tick" className="w-auto h-auto xl:w-auto xl:h-auto flex-shrink-0 mt-1 object-contain" />
                <p>
                  <strong>Commitment to Innovation</strong> – Continuously investing in research, advanced technologies, and product development to create high-performance lubrication solutions. Through continuous innovation and quality improvement, reliable products are delivered to meet evolving industry standards.
                </p>
              </li>
            </ul>

            {/* Button */}
            <div className="mt-1">
              <Button href="#" variant="primary" className="rounded-none bg-[#EA203B] hover:bg-red-700 text-white px-8 py-3 transition-colors">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-auto h-auto min-h-auto xl:min-h-auto flex" data-aos="fade-left">
            <img
              src="/moto/alkim-petrokimya/About.png"
              alt="Alkim Petrokimya Facility"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
