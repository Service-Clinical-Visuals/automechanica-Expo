"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function deg360() {
  return (
    <section className="w-full py-16 bg-[#171717] overflow-hidden">
      <div className="custom-container flex flex-col gap-8 xl:gap-12">
        
        {/* Top Header Block */}
        <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-1" data-aos="fade-up">
          <div className="flex flex-col gap-3 xl:w-2/3 order-1">
            <Typography variant="h2" color="white" className="font-semibold leading-tight">
              Explore Engine Oil In 360°
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed  max-w-full">
              Experience AutoChemie Bitterfeld GmbH Engine Oil from every angle with our interactive 360° view. Discover the premium packaging, German engineering, and quality craftsmanship behind every product, designed to deliver exceptional engine protection, reliable performance, and long-lasting durability in every driving condition.
            </Typography>
          </div>
          

          <div className="flex-shrink-0 flex max-xl:justify-end order-2 xl:order-2">
            <Button text="Explore Products" href="#" showIcon={true} />
          </div>
        </div>
        <hr className="h-px w-full border-white/40 " />

        {/* Video Block */}
        <div className=" w-full xl:w-[70%]  items-center mx-auto aspect-video rounded-3xl overflow-hidden relative shadow-xl border border-white/20 order-3" data-aos="fade-up" data-aos-delay="100">
          <DynamicVideoPlayer type="360" />
        </div>
        
      </div>
    </section>
  );
}
