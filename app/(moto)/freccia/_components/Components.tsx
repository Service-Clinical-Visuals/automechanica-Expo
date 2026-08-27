"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Components = () => {
  return (
    <section id="components" className="w-full py-16  bg-[#F9F9F9] overflow-hidden">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-8 xl:gap-12 items-center">
        
        {/* Mobile: Content is top (order-1), Desktop: Content is Right (col-span-5) */}
        <div className="flex flex-col gap-6 order-1 xl:order-2 xl:col-start-8 xl:col-span-5 w-full" data-aos="fade-left">
          
          {/* Boxed Title Block */}
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-secondary"></div>
            <Typography variant="h6" color="secondary" className="uppercase font-semibold tracking-wider">
              OUR PRODUCTS
            </Typography>
          </div>

          <Typography variant="h2" color="dark" className="font-bold leading-tight">
            Engine Components
          </Typography>

          <div className="flex flex-col gap-4">
            <Typography variant="p" color="muted" className="leading-relaxed">
              Our range of precision-engineered engine components—including camshafts, cylinder heads, valves, and tappets—is designed to deliver optimal engine performance, efficiency, and durability. Manufactured using advanced technology and high-quality materials, these components ensure accurate timing, smooth operation, and long-lasting reliability across a wide range of automotive applications.
            </Typography>
          </div>

          {/* Bullet Points */}
          <div className="flex flex-col gap-3 my-2">
            {[
              "High-precision camshafts for accurate engine timing",
              "Durable cylinder heads ensuring efficient combustion",
              "Premium valves designed for heat resistance and sealing performance"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className=" w-2 h-2 xl:w-3 xl:h-3 rounded-full bg-secondary mt-2 shrink-0"></div>
                <Typography variant="p" color="muted" className="leading-relaxed text-[15px]">
                  {text}
                </Typography>
              </div>
            ))}
          </div>

          <div className="mt-2" data-aos="fade-left" data-aos-delay="100">
            <Button text="Explore Components" href="#products" />
          </div>
        </div>

        {/* Mobile: Video is bottom (order-2), Desktop: Video is Left (col-span-7) */}
        <div className="w-full order-2 xl:order-1 xl:col-start-1 xl:col-span-7 h-full flex items-center justify-center" data-aos="fade-right">
           <div className="relative w-full aspect-video rounded-sm overflow-hidden shadow-lg bg-gray-200">
             <DynamicVideoPlayer
               className="absolute inset-0 w-full h-full object-cover"
               type="360"
             />
           </div>
        </div>

      </div>
    </section>
  );
};

export default Components;
