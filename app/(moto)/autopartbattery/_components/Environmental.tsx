"use client";
import React from "react";
import Button from "./Button";

export default function Environmental() {
  return (
    <section className="w-full bg-white overflow-hidden border-b border-gray-100">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch w-full">
        
        {/* Left Column: Text & Green CTA Button */}
        <div 
          className="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 max-w-2xl mx-auto lg:max-w-none lg:mx-0 text-left"
          data-aos="fade-right"
        >
          <h2 className="oswald-font text-[#000000] section-title font-semibold  tracking-wide mb-3">
            Environmental Responsibility
          </h2>
          
          <p className="lato-font text-[#000000] card-title1 italic font-normal mb-6 md:mb-8 ">
            Powering a Greener Future
          </p>

          <p className="lato-font text-[#333333] section-text font-normal leading-relaxed mb-8 md:mb-10">
            AUTOPART is committed to protecting the environment through responsible battery collection and recycling practices. Used batteries are safely collected and stored in accordance with legal regulations before being transferred to authorized recycling facilities, where valuable materials are recovered and reused. By supporting sustainable recycling processes, we help reduce environmental impact and contribute to a cleaner, more sustainable future. We continuously invest in eco-friendly technologies to improve recycling efficiency and reduce waste. Our goal is to ensure that every battery is handled in a way that minimizes harm to the environment and maximizes resource recovery.We also ensure full compliance with all applicable environmental regulations and industry standards.We actively promote environmental awareness among employees and partners to encourage responsible practices across the entire supply chain.
          </p>

          <div>
            <Button href="#" variant="green">
              Explore Our Commitment
            </Button>
          </div>
        </div>

        {/* Right Column: Full-Height Environmental & Recycling Image */}
        <div 
          className="w-full aspect-[4/3] lg:aspect-auto lg:min-h-full relative overflow-hidden bg-green-50/60 group"
          data-aos="fade-left"
        >
          <img 
            src="/moto/autopartbattery/green.png" 
            alt="AUTOPART Environmental Responsibility and Battery Recycling" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              // Fallback to mannol who/office image or placeholder if environmental image is not yet uploaded
              e.currentTarget.src = "/moto/mannol/who2.png";
            }}
          />
        </div>

      </div>
    </section>
  );
}
