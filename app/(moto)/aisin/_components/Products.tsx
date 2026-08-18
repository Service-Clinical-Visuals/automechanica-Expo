"use client";

import Image from "next/image";
import React from "react";
import Button from "./Button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


const categories = [
  { name: "All", icon: <img src="/moto/aisin/1.png" alt="" className="w-6 h-6 object-contain" />, active: false },
  { name: "Clutch", icon: <img src="/moto/aisin/2.png" alt="" className="w-6 h-6 object-contain" />, active: false },
  { name: "Cooling", icon: <img src="/moto/aisin/3.png" alt="" className="w-6 h-6 object-contain" />, active: false },
  { name: "Break", icon: <img src="/moto/aisin/4.png" alt="" className="w-6 h-6 object-contain" />, active: true },
  { name: "Engine", icon: <img src="/moto/aisin/5.png" alt="" className="w-6 h-6 object-contain" />, active: false },
  { name: "Drivetrain", icon: <img src="/moto/aisin/6.png" alt="" className="w-6 h-6 object-contain" />, active: false },
  { name: "Fluids", icon: <img src="/moto/aisin/7.png" alt="" className="w-6 h-6 object-contain" />, active: false },
  { name: "Steering & Suspension", icon: <img src="/moto/aisin/8.png" alt="" className="w-6 h-6 object-contain" />, active: false },
  { name: "Performance", icon: <img src="/moto/aisin/9.png" alt="" className="w-6 h-6 object-contain" />, active: false },
];

const products = [
  {
    image: "/moto/aisin/p1.png",
    title: "ADVIC Brake Disk",
    desc: "ADVICS brake discs are friction components that work together with brake pads to convert kinetic energy into heat.",
  },
  {
    image: "/moto/aisin/p2.png",
    title: "BRAKE PAD WEAR INDICATORS",
    desc: "ADVICS brake pad wear indicators are monitoring components designed to alert drivers & workshops.",
  },
  {
    image: "/moto/aisin/p3.png",
    title: "ADVICS Brake Pads",
    desc: "ADVICS brake pads are friction components designed to generate braking force in disc brake systems.",
  },
  {
    image: "/moto/aisin/p4.png",
    title: "ADVICS Brake Caliper",
    desc: "ADVICS brake calipers are hydraulic components that generate clamping force, pressing the brake pads",
  },
  {
    image: "/moto/aisin/p5.png",
    title: "ADVICS Brake Master Cylinder",
    desc: "ADVICS master cylinders convert pedal force into precise hydraulic pressure for reliable, durable braking performance.",
  },
  {
    image: "/moto/aisin/p6.png",
    title: "ADVICS Brake Wheel Cylinder",
    desc: "ADVICS wheel cylinders deliver reliable braking force in drum systems with OE-quality design, smooth actuation.",
  },
  {
    image: "/moto/aisin/p7.png",
    title: "ADVICS Brake Booster",
    desc: "ADVICS brake boosters amplify pedal force for easier, safer, and more responsive braking performance.",
  },
  {
    image: "/moto/aisin/p8.png",
    title: "ADVICS Brake Fluid",
    desc: "ADVICS high-performance brake fluid ensures stable operation and maximum safety under extreme conditions.",
  },
];

export default function Products() {

  return (
    <section className="w-full py-16 lg:py-24 bg-white relative z-10">
      <div className="custom-container">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12 ">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-primary"></div>
             <span className="section-text font-manrope text-primary font-semibold">
              Our Product Range
            </span>
          </div>
          
            <h2 className="section-title font-manrope font-semibold text-[#202020]">
            Explore Our Full Range of Solutions
          </h2>
          
              <p className="section-text text-[#404040] font-normal font-inter ">
            AISIN Aftermarket products are among the best in the automotive industry, trusted globally for Toyota clutches and water pumps. Matching OE quality, AISIN clutch systems deliver reliable performance, durability, and value across every application.
          </p>
        </div>
        
        {/* Categories Tab */}
        <div className="flex flex-wrap justify-center md:justify-between w-full gap-6 md:gap-4 lg:gap-8 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`flex flex-col items-center space-y-2 transition-colors ${
                cat.active ? "text-[#F8A122]" : "text-primary hover:text-[#F8A122]"
              }`}
            >
              <div className="w-10 h-10 flex items-center justify-center">
                {cat.icon}
              </div>
              <span className="font-inter icon-text font-normal">{cat.name}</span>
            </button>
          ))}
        </div>
        
        {/* Product Carousel */}
        <div className="mb-12">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {products.map((item, idx) => (
              <SwiperSlide key={idx} className="!h-auto">
                <div className="w-full h-full border border-gray-100 flex flex-col bg-white">
                  {/* Image Container */}
                  <div className="w-full aspect-square relative bg-[#F9F9F9] p-4 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Text Container */}
                  <div className="flex flex-col items-center text-center p-6 flex-grow">
                    <h3 className="font-manrope font-semibold text-[#202020] icon-text mb-3  tracking-wide">
                      {item.title}
                    </h3>
                    <p className="font-inter text-[#404040] section-text mb-6 flex-grow">
                      {item.desc}
                    </p>
                    <Button className="w-full md:w-auto px-6 py-2">View Product</Button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        {/* View All Button */}
        <div className="flex justify-center">
          <Button>View All Brake Products</Button>
        </div>
        
      </div>
    </section>
  );
}
