"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function Choose() {
  const features = [
    {
      title: "Quality Without Compromise",
      desc: "At Elwis Royal, quality is our top priority. We deliver OE identical products that meet the strictest industry standards. We are..."
    },
    {
      title: "Value for Money",
      desc: "We ensure fair and consistent pricing for our partners by offering a highly competitive alternative without compromising on quality..."
    },
    {
      title: "Development on Demand",
      desc: "Our goal is to fully support our clients and meet market demand. We produce and supply all fast-moving aftermarket products."
    },
    {
      title: "Close Co-operation",
      desc: "At Elwis Royal, we prioritize close cooperation with our clients. Our customer service delivers fast, reliable support, and we..."
    },
    {
      title: "Flexible Packaging",
      desc: "We offer individual order packaging in clearly labeled boxes for your branches, saving time on repackaging..."
    }
  ];

  return (
    <section className="w-full pt-8 md:pt-16 bg-[#222222] overflow-hidden">
      <div className="custom-container flex flex-col gap-5 min-h-[2100px]:gap-12">
        
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8" data-aos="fade-up">
          <div className="flex flex-col gap-4 lg:w-3/4 pr-4">
            <Typography variant="h2" color="white" className="font-semibold leading-tight">
              Why Choose Elwis
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed  text-sm">
              With over 85 years of expertise, Elwis Royal delivers OEM-quality gasket and sealing solutions backed by trusted quality, continuous innovation, competitive value, customer-focused service, and reliable performance for the global automotive aftermarket.
            </Typography>
          </div>
          <div className="shrink-0 pb-2">
            <Button text="Discover Our Advantages" href="#advantages" showIcon={true} />
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-[1px] bg-white/40" data-aos="fade-up" data-aos-delay="100"></div>

        {/* Content Row */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 mt-4 items-end" data-aos="fade-up" data-aos-delay="200">
          
          {/* Left Side: Boxes */}
          <div className="lg:col-span-7 w-full flex flex-col gap-4 pb-16 lg:pb-24">
            {features.map((item, idx) => (
              <div key={idx} className="w-full border border-white/10 bg-[#282828] hover:bg-[#333333] transition-colors duration-300 p-6 flex items-start gap-5">
                <div className="mt-1 text-black shrink-0 bg-[#C21217] rounded-full w-5 h-5 flex items-center justify-center text-white">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div className="flex flex-col gap-1.5">
                  <Typography variant="h4" color="white" className="font-semibold">
                    {item.title}
                  </Typography>
                  <Typography variant="p" color="white" className="text-xs leading-relaxed">
                    {item.desc}
                  </Typography>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Image */}
          <div className="lg:col-span-5 w-full h-full flex justify-end items-end relative">
            <img 
              src="/moto/elvis/human.png" 
              alt="Elwis Representative" 
              className="w-full md:w-[70%] lg:w-[100%]  h-auto object-contain object-bottom mx-auto lg:mx-0 lg:ml-auto block"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
