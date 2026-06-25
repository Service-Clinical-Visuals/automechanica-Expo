import React from "react";

export default function StatsBanner() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-[#111]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/moto/accorLubricants/productbg.png" 
          alt="ACCOR Products Background" 
          className="w-full h-full object-cover object-center"
          
        />
      </div>


      {/* Content */}
      <div className="relative z-20 custom-container flex flex-col items-center justify-center text-center">
        <div data-aos="fade-up">
          <h1 className="text-white text-4xl md:text-6xl lg:text-[50px]  font-bold oxanium mb-6 leading-tight tracking-wide">
            +300 Products
          </h1>
          
          <div className="w-full max-w-[400px] h-px bg-white/40 mb-6 mx-auto"></div>
          
          <div className="text-[#484848]  leading-relaxed tracking-wide font-medium">
            <p className="mb-1 text-white exo2 text-[16px] md:text-[18px]  ">For all applications:</p>
            <p className="text-white exo2 text-[16px] md:text-[18px]  ">automotive, 2 wheels, truck, industry, agriculture, civil engineering, marine, etc.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
