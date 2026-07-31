"use client";

import React from "react";
import Button from "./Button";

export default function PrecisionFilter() {
  return (
    <section 
      className="relative w-full py-24 md:py-32 lg:py-40 bg-cover bg-center bg-no-repeat bg-[#111111]"
      style={{
        backgroundImage: `url('/moto/tecneco/bg2.png')`
      }}
    >
     

      <div className="custom-container relative z-10">
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto" data-aos="fade-up">
          <h2 className="section-title font-semibold mb-6 sora text-white leading-tight">
            Precision in Every Filter. Protection in Every Journey."
          </h2>
          
          <p className="section-text text-white leading-relaxed mb-10 lato font-normal max-w-7xl mx-auto">
            Engineered with advanced filtration technology. Tecneco filters are designed to ensure consistently reliable performance under a wide range of driving conditions. They provide superior protection by effectively capturing contaminants and preventing harmful particles from reaching critical engine components, thereby helping to extend engine life and maintain optimal efficiency. Built to meet OE-quality standards, Tecneco filters guarantee precise fit, durability, and dependable operation, making them a trusted choice for maintaining peak performance on every drive.
          </p>

          <Button href="#" variant="outline" className="border-gray-400 text-gray-200 hover:bg-white hover:text-black hover:border-white px-8 py-3 transition-all duration-300">
            Explore More
          </Button>
        </div>
      </div>
    </section>
  );
}
