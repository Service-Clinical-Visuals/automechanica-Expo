"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function TechnicalSupport() {
  const cards = [
    {
      title: "Environmental, Social, & Governance",
      description: "Walker Products is dedicated to sustainability, social responsibility, and ethical governance. From eco-friendly solutions and solar-powered operations to community engagement, discover how we build a responsible and sustainable future for our industry.",
      img: "/moto/walker-products/technical-support-1.jpg",
      href: "#esg"
    },
    {
      title: "New Product Announcements",
      description: "Stay ahead with Walker Products' latest innovations. Explore our new product announcements to discover cutting-edge solutions designed to meet evolving industry needs, enhance vehicle performance, and provide comprehensive coverage for modern automotive applications.",
      img: "/moto/walker-products/technical-support-2.jpg",
      href: "#announcements"
    }
  ];

  return (
    <section className="relative w-full py-16 lg:py-20 bg-[#2C2C2C] overflow-hidden" id="support">
      <div className="custom-container relative z-10 flex flex-col gap-10 lg:gap-14">
        
        {/* Header Block: Title & Desc on Left, Learn More CTA on Right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8 pb-8 lg:pb-10 border-b border-white/20" data-aos="fade-up">
          <div className="flex flex-col gap-3 lg:max-w-6xl">
            <Typography variant="h1" color="white" className="font-semibold leading-tight">
              Resources & Technical Support
            </Typography>
            <Typography variant="p" color="white" className="text-white/80 leading-relaxed text-sm md:text-base">
              Walker Products, Inc. provides comprehensive technical resources, training programmes, product updates, and sustainability initiatives to support distributors, technicians, and automotive professionals. Explore expert guidance, instructional materials, and the latest innovations designed to help you work smarter and deliver reliable results.
            </Typography>
          </div>

          <div className="flex-shrink-0" data-aos="fade-left" data-aos-delay="100">
            <Button text="Learn More" href="#support" showIcon={true} />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full" data-aos="fade-up" data-aos-delay="100">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="group relative w-full aspect-[16/11] rounded-sm overflow-hidden bg-[#111] border border-white/10 shadow-2xl cursor-pointer"
            >
              {/* Card Image */}
              <img 
                src={card.img} 
                alt={card.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover Dark Overlay with Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-black/10 md:bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-8 lg:p-10">
                <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-start gap-3 md:gap-4 text-left">
                  <Typography variant="h2" color="white" className="font-semibold leading-tight text-xl md:text-2xl lg:text-3xl">
                    {card.title}
                  </Typography>
                  <Typography variant="p" color="white" className="text-white/85 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-none">
                    {card.description}
                  </Typography>
                  <div className="pt-2">
                    <Button text="Learn More" href={card.href} showIcon={true} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
