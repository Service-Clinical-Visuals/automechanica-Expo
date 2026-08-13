"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Container from "./Container";

const slides = [
  [
    { id: "ac1", image: "/moto/ftaza/d1.png", title: "AC1", category: "Air Compressor" },
    { id: "ac2", image: "/moto/ftaza/d2.png", title: "AC2", category: "Air Compressor" },
    { id: "avb3", image: "/moto/ftaza/d3.png", title: "AVB3", category: "Airvalveblock" },
  ],
  [
    { id: "ic1", image: "/moto/ftaza/d4.png", title: "IC1", category: "Ignition Coil" },
    { id: "ic2", image: "/moto/ftaza/d5.png", title: "IC2", category: "Ignition Coil" },
    { id: "sp1", image: "/moto/ftaza/d6.png", title: "SP1", category: "Spark Plug" },
  ]
];

export default function Discover() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-6" data-aos="fade-up">
          <div className="max-w-[1000px]">
            <h2 className="font-oswald text-[32px] sm:text-[38px] font-semibold text-[#2A2A2A] leading-[1.2] mb-4">
              Comprehensive Automotive Components For Superior Performance
            </h2>
            <p className="font-oswald text-[17px] text-[#4A4A4A] leading-[1.6]">
              FTAZA Industrial Co., Ltd. offers precision-engineered automotive components for the global aftermarket. Manufactured with advanced technology and strict quality control, our products deliver reliable performance, exceptional durability, and compatibility with modern vehicle systems.
            </p>
          </div>
          <button
            type="button"
            className="shrink-0 inline-flex font-oswald font-medium text-[16px] items-center bg-[#062AAA] px-6 py-2.5 text-white hover:bg-blue-800 transition-colors"
          >
            View All Products
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>

        {/* Divider */}
        <hr className="border-balck mb-10" />

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {slides[currentSlide].map((item, index) => (
            <div key={item.id} className="bg-white border border-gray-200 p-4 shadow-sm" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-oswald text-[22px] font-semibold text-[#2A2A2A]">{item.title}</h3>
                <span className="font-oswald bg-[#062AAA] text-white px-4 py-1.5 text-[15px] font-medium">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-2 mt-12" data-aos="fade-up" data-aos-delay="400">
          <button
            onClick={() => setCurrentSlide(0)}
            aria-label="Go to slide 1"
            className={`w-25 h-[13px] rounded-full transition-colors ${currentSlide === 0 ? "bg-[#062AAA]" : "bg-gray-300 hover:bg-gray-400"}`}
          ></button>
          <button
            onClick={() => setCurrentSlide(1)}
            aria-label="Go to slide 2"
            className={`w-25 h-[13px] rounded-full transition-colors ${currentSlide === 1 ? "bg-[#062AAA]" : "bg-gray-300 hover:bg-gray-400"}`}
          ></button>
        </div>
      </Container>
    </section>
  );
}
