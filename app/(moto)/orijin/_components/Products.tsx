"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Products() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      image: "/moto/orijin/p1.png",
      title: "Wishbone",
      desc: "Ensures vehicle stability, safety, and suspension performance."
    },
    {
      image: "/moto/orijin/p2.png",
      title: "Ball Joint",
      desc: "Provides smooth steering movement and wheel stability."
    },
    {
      image: "/moto/orijin/p3.jpg",
      title: "Tie Rod End",
      desc: "Ensures accurate steering control and wheel movement."
    },
    {
      image: "/moto/orijin/p4.png",
      title: "Axial Joint",
      desc: "Ensures smooth steering connection and control."
    },
    {
      image: "/moto/orijin/p5.png",
      title: "Stabilizer Link",
      desc: "High-quality stabilizer links for smooth suspension performance."
    },
    {
      image: "/moto/orijin/p6.png",
      title: "Bushing",
      desc: "Reliable bushings for smooth and stable suspension performance."
    },
    {
      image: "/moto/orijin/p7.png",
      title: "Clutch Fork",
      desc: "Clutch forks transfer pedal movement to control clutch engagement."
    },
    {
      image: "/moto/orijin/p8.png",
      title: "Track Control Arm",
      desc: "Track control arms for enhanced vehicle stability and control."
    }
  ];

  return (
    <section className="py-16 xl:py-20 bg-white">
      <div className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16" data-aos="fade-up">
          <h2 className="section-title oswald-font font-semibold text-[#272727] mb-4">
            Our Products
          </h2>
          <p className="section-text text-[#272727] font-regular rubik-font max-w-2xl mx-auto leading-relaxed">
            CEVAM delivers high-quality remanufactured automotive components with OE-level performance, reliability, and durability.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 mb-12" data-aos="fade-up" data-aos-delay="100">
          {products.slice(currentSlide * 4, (currentSlide + 1) * 4).map((product, index) => (
            <div key={index} className="flex flex-col bg-white border border-[#E4E4E4] rounded-[24px] hover:shadow-lg transition-all duration-300 relative group h-full">

              <div className="p-1 flex flex-col h-full relative z-10">
                {/* Image Container */}
                <div className="w-full h-full flex items-center justify-center mb-6">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full text-gray-400 bg-gray-50 rounded-lg flex items-center justify-center text-sm">Product Image</div>' }}
                  />
                </div>

                {/* Content */}
                <div className="pl-2 pb-20 flex flex-col flex-grow pr-8">
                  <h3 className="card-title oswald-font font-semibold text-[#272727] mb-3">
                    {product.title}
                  </h3>
                  <p className="card-text text-[#4B5563] rubik-font font-regular leading-relaxed ">
                    {product.desc}
                  </p>
                </div>
              </div>

              {/* Cutout Corner and Button */}
              <div className="absolute bottom-[-1px] right-[-1px] w-[85px] h-[85px] bg-white rounded-tl-[42px] rounded-br-[24px] border-t border-l border-gray-200 flex items-end justify-end p-[14px] z-20">
                <button className="w-full h-full bg-white border-[2.5px] border-[#F39200] rounded-full flex items-center justify-center hover:bg-[#F39200] group/btn transition-colors shadow-sm">
                  <ArrowUpRight size={35} strokeWidth={2.5} className="text-[#F39200] group-hover/btn:text-white transition-colors" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Scroll Indicator (Slide Pagination) */}
        <div className="flex items-center justify-center gap-3 mt-12" data-aos="fade-up" data-aos-delay="200">
          {[0, 1].map((slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => setCurrentSlide(slideIndex)}
              className={`h-[7px] w-[35px] rounded-full cursor-pointer transition-all hover:opacity-80 ${currentSlide === slideIndex
                ? "bg-[#F39200]"
                : "border-[1.5px] border-[#F39200] hover:bg-[#F39200]"
                }`}
            ></div>
          ))}
        </div>

      </div>
    </section>
  );
}

