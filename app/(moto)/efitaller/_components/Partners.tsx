"use client";

import React from "react";
import Button from "./Button";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Partners() {
  const categories = [
    {
      title: "Diagnostics",
      image: "/moto/efitaller/partner1.png",
      desc: "Multi-brand equipment with European, American and Asian coverage.",
      link: "#"
    },
    {
      title: "ADAS",
      image: "/moto/efitaller/partner2.png",
      desc: "Calibration and adjustment of advanced driver assistance systems.",
      link: "#"
    },
    {
      title: "Alignment",
      image: "/moto/efitaller/partner3.png",
      desc: "Wheel aligners and lifts for precision geometry.",
      link: "#"
    },
    {
      title: "Emissions",
      image: "/moto/efitaller/partner4.png",
      desc: "Approved gas analyzers and opacimeters.",
      link: "#"
    }
  ];

  return (
    <section className="py-16 xl:py-20 bg-white relative">
      <div className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-14" data-aos="fade-up">
          {/* Top title */}
          <div className="flex flex-col mb-1 w-fit">
            <span className="text-[#C2D500] font-semibold section-text inter-font">Our range</span>
          </div>

          <h2 className="section-title text-[#404040] sora-font font-semibold mb-4">
            Equipment by category
          </h2>
          <p className="inter-font text-[#404040] section-text max-w-4xl mx-auto leading-relaxed">
            Our product range offers a comprehensive selection of high-quality automotive components designed for performance, durability, and reliability. Engineered with precision and built to meet modern industry standards, each product ensures consistent efficiency across a wide range of applications.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-10 lg:px-20 mx-auto">
          {categories.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col group transition-all hover:shadow-md pb-6" data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
              {/* Image Container */}
              <div className="w-auto h-auto overflow-hidden p-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-gray-50 flex items-center justify-center text-gray-400 rounded-md">Image</div>' }}
                />
              </div>

              {/* Content */}
              <div className="px-6 pt-4 flex flex-col flex-grow">
                <h3 className="card-title text-[#404040] sora-font font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-[#404040] inter-font section-text leading-relaxed mb-4 flex-grow">
                  {item.desc}
                </p>

                <div className="flex justify-end mt-auto">
                  <a href={item.link} className="w-auto h-auto rounded-full bg-[#f4f7d9] flex items-center justify-center text-[#C2D500] hover:bg-[#C2D500] hover:text-white transition-colors">
                    <img src="/moto/efitaller/arrow.png" alt="Read more" className="w-auto h-auto object-contain" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination & Button */}
        <div className="flex flex-col items-center mt-12 gap-8">
          <div className="flex justify-center items-center gap-6">
            <button className="text-[#C2D500] hover:text-[#a0af00] transition-colors" aria-label="Previous slide">
              <ArrowLeft size={18} strokeWidth={2.5} />
            </button>

            <div className="flex gap-2">
              <button className="w-2 h-2 rounded-full transition-colors duration-300 bg-[#C2D500]"></button>
              <button className="w-2 h-2 rounded-full transition-colors duration-300 bg-gray-200"></button>
              <button className="w-2 h-2 rounded-full transition-colors duration-300 bg-gray-200"></button>
              <button className="w-2 h-2 rounded-full transition-colors duration-300 bg-gray-200"></button>
            </div>

            <button className="text-[#C2D500] hover:text-[#a0af00] transition-colors" aria-label="Next slide">
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
          </div>

          <Button href="#" variant="outline" className="btn-text font-semibold">
            View Full Products
          </Button>
        </div>

      </div>
    </section>
  );
}
