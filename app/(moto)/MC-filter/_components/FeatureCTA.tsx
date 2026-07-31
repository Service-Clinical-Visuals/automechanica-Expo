"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const FeatureCTA = () => {
  return (
    <section 
      id="feature-cta" 
      className="w-full relative bg-cover bg-center bg-no-repeat overflow-hidden py-16 md:py-20 2xl:py-32 min-[2100px]:py-48 min-[3800px]:py-64"
      style={{ backgroundImage: "url('/moto/mc-filter/bg.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#04000B]/80 z-0"></div>

      <div className="custom-container relative z-10 flex flex-col items-center justify-center text-center gap-8 min-[2100px]:gap-12 min-[3800px]:gap-20" data-aos="fade-up">
        <Typography variant="h2" color="white" className="font-bold tracking-wide min-[2100px]:text-6xl min-[3800px]:text-8xl">
          Check Out All Our Feature Products
        </Typography>
        
        {/* Placeholder for faint logo if needed */}
        <div className="opacity-20 max-w-[200px] min-[2100px]:max-w-[300px] min-[3800px]:max-w-[500px] absolute pointer-events-none">
          <img src="/moto/mc-filter/logo.png" alt="MC Filter Logo" className="w-full h-auto object-contain grayscale" />
        </div>

        <div className="relative z-20 mt-2 min-[2100px]:mt-6 min-[3800px]:mt-12">
          <Button text="View All Products" href="#products" variant="secondary" />
        </div>
      </div>
    </section>
  );
};

export default FeatureCTA;
