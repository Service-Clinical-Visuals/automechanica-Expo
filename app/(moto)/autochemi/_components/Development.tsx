"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function Development() {
  return (
    <section className="w-full py-16 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 ">
        
        {/* Top Content: Heading and Subtext */}
        <div className="flex flex-col items-center text-center gap-6 mx-auto order-1" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-semibold leading-tight">
            Engineering German-Quality Products For Global Industries.
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed xl:max-w-[75%]">
            AutoChemie Bitterfeld GmbH is a high-tech manufacturing enterprise using advanced solutions and modern equipment. We continuously expand our product range by cooperating with global manufacturers to improve the quality of oils, cooling fluids, and brake fluids. Some of our brands are developed in-house to meet global standards. Our certified laboratory ensures quality control throughout every stage of production.
          </Typography>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8 w-full order-2 xl:order-2">
          <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-sm border border-gray-200" data-aos="fade-up" data-aos-delay="100">
            <img 
              src="/moto/autochemi/section21.png" 
              alt="ET Engine Parts Collage" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-sm border border-gray-200" data-aos="fade-up" data-aos-delay="200">
            <img 
              src="/moto/autochemi/section22.png" 
              alt="ET Engine Team Crest" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Bottom Block */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8 pt-8 xl:pt-0 xl:border-t border-gray-200 order-3 xl:order-3" data-aos="fade-up">
          <div className="xl:w-2/3 mt-3">
            <Typography variant="p" color="dark" className="leading-relaxed opacity-80">
              Our goal is to manufacture high-quality German products in accordance with the requirements of the global markets. Up-to-date production technologies, wide assortment, guaranteed quality, optimal pricing policy, experience of our partners allow us to be market experts for more than 10 years.
            </Typography>
          </div>
          <div className="flex-shrink-0 flex max-xl:justify-end">
            <Button text="Explore Products" href="#" showIcon={true} />
          </div>
        </div>

      </div>
    </section>
  );
}
