"use client";

import React, { useState } from "react";
import Typography from "./Typography";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const categoryData: Record<string, { title: string; image: string }[]> = {
  "Cooling": [
    { title: "WATER PUMPS", image: "/moto/metelli-group/products/frame11.png" },
    { title: "AUXILIARY ELECTRIC WATER PUMPS", image: "/moto/metelli-group/products/frame12.png" },
    { title: "SWITCHABLE WATER PUMP - ELECTROHYDRAULIC", image: "/moto/metelli-group/products/frame13.png" },
    { title: "AUTOMATIC TENSIONERS: THE QUALITY SOLUTION", image: "/moto/metelli-group/products/frame14.png" },
    { title: "TIMING TENSIONERS AND IDLER PULLEYS", image: "/moto/metelli-group/products/frame15.png" },
    { title: "AUXILIARY TENSIONERS AND IDLER PULLEYS", image: "/moto/metelli-group/products/frame16.png" },
  ],
  "Transmission Parts": [
    { title: "CONSTANT VELOCITY JOINTS", image: "/moto/metelli-group/products/frame21.png" },
    { title: "DRIVESHAFTS", image: "/moto/metelli-group/products/frame22.png" },
    { title: "BOOT KIT", image: "/moto/metelli-group/products/frame23.png" },
    { title: "WHEEL BEARINGS KIT", image: "/moto/metelli-group/products/frame24.png" },
  ],
  "Engine Parts": [
    { title: "VALVE GUIDES", image: "/moto/metelli-group/products/frame31.png" },
    { title: "VALVE SEATS", image: "/moto/metelli-group/products/frame32.png" },
    { title: "VALVE SHIMS & ADJUSTING PADS", image: "/moto/metelli-group/products/frame33.png" },
  ],
  "Brake Parts Friction": [
    { title: "BRAKE DISCS", image: "/moto/metelli-group/products/frame41.png" },
    { title: "BRAKE PADS", image: "/moto/metelli-group/products/frame42.png" },
    { title: "BRAKE SHOES", image: "/moto/metelli-group/products/frame43.png" },
    { title: "PRE-MOUNTED BRAKE KITS", image: "/moto/metelli-group/products/frame44.png" },
    { title: "COMPETITION BRAKE PADS", image: "/moto/metelli-group/products/frame45.png" },
  ],
  "Brake Parts Hydraulic": [
    { title: "BRAKE CYLINDERS, FOR SAFETY IN POLE POSITION", image: "/moto/metelli-group/products/frame51.png" },
    { title: "BRAKE MASTER CYLINDERS, FOR SAFETY IN POLE POSITION", image: "/moto/metelli-group/products/frame52.png" },
    { title: "PRESSURE REGULATING VALVE", image: "/moto/metelli-group/products/frame53.png" },
    { title: "SLAVE CYLINDER AND CLUTCH MASTER CYLINDERS", image: "/moto/metelli-group/products/frame54.png" },
    { title: "CONCENTRIC CLUTCH CYLINDERS, TWO SOULS ONE HEART", image: "/moto/metelli-group/products/frame55.png" },
  ],
};

const tabs = [
  "Cooling",
  "Transmission Parts",
  "Engine Parts",
  "Brake Parts Friction",
  "Brake Parts Hydraulic"
];

export default function Products() {
  const [activeTab, setActiveTab] = useState("Cooling");
  const activeProducts = categoryData[activeTab] || [];

  return (
    <section className="relative w-full py-16 bg-white">
      <div className="custom-container flex flex-col items-center">

        {/* Header Section */}
        <div className="max-w-[90%] md:max-w-[80%] mx-auto mb-10 flex flex-col items-center text-center">
          <div data-aos="fade-down" data-aos-duration="800">
            <Typography variant="h1" font="oswald" color="primary" className="mb-6 tracking-wide  font-bold">
              Complete Automotive Solutions
            </Typography>
          </div>
          <div data-aos="zoom-in" data-aos-delay="200" data-aos-duration="800">
            <Typography variant="p" font="lato" className="text-gray-600 leading-relaxed max-w-[95%] md:max-w-[85%]">
              Metelli Group offers a comprehensive range of OEM-quality automotive components engineered for performance, safety, and reliability. Manufactured with advanced technology and precision, our products deliver dependable performance, perfect fitment, and long-lasting durability across a wide range of vehicles.
            </Typography>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 w-full" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-[13px] md:text-sm 2xl:text-base px-5 md:px-6 2xl:px-8 py-2.5 md:py-3 2xl:py-4 font-semibold font-primary uppercase tracking-wide transition-colors border shadow-sm ${activeTab === tab
                ? "bg-primary  border-primary"
                : "text-[#4A4A4A] border-gray-100 hover:border-gray-300"
                }`}
            >
              <Typography variant="h6" font="oswald" color={activeTab === tab ? "white" : "muted"} className="font-bold">{tab}</Typography>

            </button>
          ))}
        </div>

        {/* Products Swiper Slider */}
        <div className="w-full  mx-auto relative pb-16"> {/* pb-16 provides space for custom pagination */}
          <Swiper
            key={activeTab} // Force re-mount on tab change to reset animation and position
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            pagination={{
              clickable: true,
              el: '.custom-pagination-lines',
              renderBullet: function (index, className) {
                // Return a span matching the exact pagination lines styling requested
                return `<span class="${className} !w-12 !h-1.5 !rounded-full !inline-block !mx-1 transition-colors cursor-pointer bg-gray-200"></span>`;
              },
            }}
            className="w-full"
          >
            {activeProducts.map((product, index) => (
              <SwiperSlide key={index} className="h-auto pb-4 pt-1 px-2">
                <div
                  className="bg-white border border-gray-100 shadow-md p-4 flex flex-col h-full min-h-[380px] relative group hover:shadow-xl transition-shadow cursor-pointer"
                  data-aos="zoom-in-up"
                  data-aos-delay={200 + (index * 150)}
                  data-aos-duration="600"
                >
                  {/* Product Image */}
                  <div className="w-full aspect-square flex items-center justify-center mt-2 mb-4 p-4 ">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Card Footer */}
                  <div className="flex items-center justify-between gap-2 mt-auto">
                    <Typography variant="h4" font="oswald" color="muted" className="font-bold text-black-900 leading-tight max-w-[75%] uppercase ">
                      {product.title}
                    </Typography>

                    {/* Arrow Button */}
                    <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-md transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                      <ArrowUpRight className="text-white w-5 h-5 xl:w-6 xl:h-6" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Container matching the user's explicit design request */}
          <div className="custom-pagination-lines absolute bottom-0 left-0 right-0 flex gap-2 justify-center z-10"></div>
        </div>

      </div>
    </section>
  );
}
