"use client";

import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="py-16 md:py-24 bg-white relative z-10 overflow-hidden">
      <div className="custom-container">
        {/* Top Row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center mb-10 xl:mb-16">
          <div data-aos="fade-right">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-12 bg-primary"></div>
              <h2 className="section-title text-[#005CA9] font-semibold">About Us</h2>
            </div>
            <p className="section-text text-[#4B5563] mb-6 leading-[1.8] font-normal">
              Celikis Disli is a trusted manufacturer specializing in precision gears, gearboxes, and transmission components for a wide range of industrial applications. Backed by decades of experience, we combine engineering expertise with advanced manufacturing technologies to produce high-quality solutions that meet the evolving needs of modern industries. Every product is designed and manufactured with exceptional precision, ensuring superior performance, durability, and long-term reliability even in the most demanding operating conditions. Our commitment to continuous improvement enables us to deliver innovative solutions that support the success of our customers worldwide. We are dedicated to building lasting partnerships by providing dependable products, technical excellence, and exceptional customer service.
            </p>
          </div>
          <div data-aos="fade-left" className="relative h-[300px] md:h-[400px] xl:h-[450px] w-full rounded-lg overflow-hidden shadow-sm">
            <img 
              src="/moto/celikis/abt1.png" 
              alt="Celikis Facility" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center">
          <div data-aos="fade-right" className="order-2 xl:order-1 relative h-[300px] md:h-[400px] xl:h-[450px] w-full rounded-lg overflow-hidden shadow-sm">
            <img 
              src="/moto/celikis/abt2.png" 
              alt="Celikis Manufacturing" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
          </div>
          <div data-aos="fade-left" className="order-1 xl:order-2">
            <div className="w-12 h-1 bg-primary mb-6"></div>
            <p className="section-text text-[#4B5563] mb-6 leading-[1.8] font-normal">
              At Celikis Disli, we are committed to quality, innovation, and precision in every stage of our manufacturing process. We deliver reliable gear solutions through advanced technology, skilled expertise, and strict quality standards. With decades of experience, we continuously improve our production capabilities to meet the evolving needs of global industries. Our focus on excellence ensures high-performance products that provide durability, efficiency, and long-term reliability for our customers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 mb-8">
              {[
                "Advanced engineering and product development",
                "Modern manufacturing technology",
                "Precision machining and quality inspection",
                "Reliable and high-performance gear solutions"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-[14px] h-[14px] rounded-sm bg-primary flex-shrink-0 mt-[6px]"></div>
                  <span className="section-text text-[#4B5563]  font-normal">{item}</span>
                </div>
              ))}
            </div>

            <Button 
              href="#" 
              variant="primary" 
              hasArrow
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
