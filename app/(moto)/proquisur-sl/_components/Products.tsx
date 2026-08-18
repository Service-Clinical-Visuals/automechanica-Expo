"use client";

import React from "react";
import Button from "./Button";
import Typography from "./Typography";
import { Bike, Truck, Tractor, Hammer, Droplets, Snowflake, ArrowUpRight } from "lucide-react";

export default function Products() {
  const services = [
    {
      title: "MotorCycle",
      icon: <img src="/moto/proquisur-sl/s-1.png" alt="MotorCycle" className="w-auto h-auto object-contain" />,
      description: "Smooth performance and enhanced engine protection for daily and high-speed riding"
    },
    {
      title: "Truck",
      icon: <img src="/moto/proquisur-sl/s-2.png" alt="Truck" className="w-auto h-auto object-contain" />,
      description: "Reliable lubrication designed for heavy-duty loads and long-distance operations"
    },
    {
      title: "Hydraulic",
      icon: <img src="/moto/proquisur-sl/s-4.png" alt="Hydraulic" className="w-auto h-auto object-contain" />,
      description: "Efficient fluid performance ensuring smooth operation and system protection"
    },
    {
      title: "Tractor",
      icon: <img src="/moto/proquisur-sl/s-3.png" alt="Tractor" className="w-auto h-auto object-contain" />,
      description: "Strong engine protection built for demanding agricultural and field applications"
    },
    {
      title: "Additives",
      icon: <img src="/moto/proquisur-sl/s-5.png" alt="Additives" className="w-auto h-auto object-contain" />,
      description: "Enhances oil performance, reduces wear, and extends overall engine life"
    },
    {
      title: "Antifreeze Coolant",
      icon: <img src="/moto/proquisur-sl/s-6.png" alt="Antifreeze Coolant" className="w-auto h-auto object-contain" />,
      description: "Maintains optimal temperature and protects the engine in extreme conditions"
    }
  ];

  return (
    <section className="py-20 xl:py-20 bg-white text-center">
      <div className="custom-container">
        {/* Heading */}
        <div className="flex flex-col gap-2 items-center mb-6" data-aos="fade-up">
          <Typography variant="h4" className="!text-[#6FB420] manrope font-bold text-sm tracking-wide">
            Our Services
          </Typography>
          <Typography variant="h2" className="section-title text-[#202020] manrope font-bold leading-tight">
            Your Complete Solution for Seamless Automotive Support
          </Typography>
        </div>

        {/* Subtitle */}
        <Typography variant="p" className="max-w-7xl mx-auto text-[#494949] inter section-text mb-12" data-aos="fade-up" data-aos-delay="100">
          We offer a comprehensive range of services designed to support your business at every stage. From technical assistance and product guidance to efficient logistics and after-sales support, our solutions ensure smooth operations, reliability, and consistent performance tailored to your needs.
        </Typography>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mx-auto mb-10" data-aos="fade-up" data-aos-delay="200">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white w-full h-full min-h-[260px] py-10 border border-gray-200 px-6 flex flex-col items-center justify-center relative drop-shadow-sm hover:shadow-md transition-shadow duration-300 rounded-sm group cursor-pointer overflow-hidden"
            >
              {/* Icon and Title (Slides up on hover) */}
              <div className="flex flex-col items-center justify-center w-full transition-transform duration-500 group-hover:-translate-y-10 z-10">
                <div className="flex items-center justify-center mb-3 h-14 transition-all duration-300 group-hover:[filter:invert(56%)_sepia(85%)_saturate(375%)_hue-rotate(45deg)_brightness(97%)_contrast(92%)]">
                  {service.icon}
                </div>
                <Typography variant="h3" className="text-[#202020] font-bold responsive-text-base md:text-lg manrope leading-snug">
                  {service.title}
                </Typography>
              </div>
              
              {/* Description (Fades in from below) */}
              <div className="absolute bottom-12 left-0 w-full px-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 pointer-events-none flex justify-center">
                <Typography variant="p" className="text-[#7A7A7A] inter responsive-text-sm leading-relaxed max-w-[300px] 3xl:max-w-md">
                  {service.description}
                </Typography>
              </div>
              
              {/* View Button */}
              <div className="absolute bottom-4 right-5 flex items-center gap-1 text-[#6FB420] responsive-text-sm font-medium inter opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View <ArrowUpRight size={14} />
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center" data-aos="fade-up" data-aos-delay="300">
          <Button href="#" variant="primary" className="!rounded-md group">
            View All Services <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
