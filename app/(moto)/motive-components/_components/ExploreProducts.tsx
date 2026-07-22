"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const ExploreProducts = () => {
  return (
    <section className="w-full py-16 bg-[#F3F4F6] overflow-hidden">
      <div className="custom-container flex flex-col xl:flex-row items-center gap-10 xl:gap-16">
        
        {/* Content (Text + Button) */}
        {/* Mobile: Order 1, Desktop: Order 2 */}
        <div className="order-1 xl:order-2 w-full xl:w-1/2 flex flex-col gap-8" data-aos="fade-left">
          
          <Typography variant="p" color="muted" className="leading-relaxed ">
            From timing systems and cylinder heads to gaskets, pumps, valve train components, and other essential engine parts, our premium aftermarket range is engineered for exceptional precision, lasting durability, and reliable performance. Manufactured to OE-quality standards, each component is designed to enhance engine efficiency and deliver dependable performance across a wide range of automotive applications.
          </Typography>
          
          <div className="pt-2">
             <Button text="Explore Products" href="#products" />
          </div>
        </div>

        {/* Image */}
        {/* Mobile: Order 2, Desktop: Order 1 */}
        <div className="order-2 xl:order-1 w-full xl:w-1/2 flex justify-center" data-aos="fade-right">
          <img
            src="/moto/motive-components/section3.png"
            alt="Motive Components Product Range"
            className="w-full max-w-2xl h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default ExploreProducts;
