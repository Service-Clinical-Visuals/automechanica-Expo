"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Products() {
  return (
    <section className="py-20 xl:py-20 bg-[#F7F7F7]">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-12 items-center">

          {/* Left Video */}
          <div className="w-full h-[300px] sm:h-[400px] xl:h-[500px] relative overflow-hidden rounded shadow-sm" data-aos="fade-right">
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-3" data-aos="fade-left">
            {/* Heading */}
            <div className="flex items-center gap-4 w-full">
              <h2 className="text-[#FEC52E] font-medium text-xl rubik-font">Our Products</h2>
              <div className="w-[100px] sm:w-[150px] h-[1px] bg-[#FEC52E]"></div>
            </div>

            {/* Title */}
            <h3 className="section-title text-[#202020] nunito-font font-semibold">
              Complete Lubrication Solutions
            </h3>

            {/* Paragraph */}
            <div className="text-[#1F1F1F] section-text lato-font tracking-normal flex flex-col gap-6">
              <p>
                We offer a comprehensive range of high-quality lubricants and fluids designed to meet the demands of modern engines and industrial systems. From advanced engine oils to specialized industrial lubricants, our products are developed using premium base oils and cutting-edge additive technology to ensure superior performance, protection, and efficiency.
              </p>
            </div>

            {/* Bullet points */}
            <ul className="flex flex-col gap-3 text-[#1F1F1F] section-text">
              {[
                "Wide range of automotive and industrial lubricants",
                "Enhances efficiency and reduces wear"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 mt-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FEC52E] flex-shrink-0 mt-2"></div>
                  <p>{text}</p>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="mt-2">
              <Button href="#" variant="primary" className="text-white">
                Explore Engine Oils
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
