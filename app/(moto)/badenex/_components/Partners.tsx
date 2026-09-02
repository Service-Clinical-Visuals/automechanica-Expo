"use client";

import React from "react";
import Link from "next/link";

export default function Partners() {
  return (
    <section className="py-20 xl:py-20 bg-white">
      <div className="custom-container">
        {/* Top Centered Content */}
        <div className="flex flex-col items-center justify-center text-center max-w-5xl min-[2560px]:max-w-[70%] min-[3800px]:max-w-[80%] mx-auto mb-10" data-aos="fade-up">
          <h2 className="section-title title-bordered oswald-font text-[#111111] font-semibold">
            Product Categories
          </h2>
          <p className="text-[#4D5563] lato-font section-text max-w-5xl min-[2560px]:max-w-[80%] min-[3800px]:max-w-[90%] leading-relaxed">
            Browse our extensive range of premium engine oils and advanced additives, crafted with German precision and cutting-edge technology to ensure outstanding engine protection, improved efficiency, and long-lasting performance in every journey.
          </p>
        </div>

        {/* Grid Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" data-aos="fade-up" data-aos-delay="200">
          {/* Category 1 */}
          <Link href="#" className="w-auto h-auto flex ">
            <img
              src="/moto/badenex/Component 1.png"
              alt="Engine Oils"
              className="w-auto h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
            />
          </Link>

          {/* Category 2 */}
          <Link href="#" className="w-auto h-auto flex ">
            <img
              src="/moto/badenex/Component 2.png"
              alt="Additives"
              className="w-auto h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
