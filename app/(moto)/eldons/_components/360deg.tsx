"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Deg360() {
  return (
    <section className="relative w-full bg-primary text-white py-16 min-[3800px]:py-24">
      <div className="custom-container">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 border-b border-white/40 pb-8" data-aos="fade-up">
          <div className="max-w-[75%]">
            <Typography variant="h2" color="white" className="mb-4">Explore Every Detail In 360°</Typography>
            <Typography variant="p" color="white" className="leading-relaxed text-white">
              Experience our engine oil product from every angle with an interactive 360° view. Examine the packaging, labels, and design in detail while exploring the premium quality, advanced formulation, and innovation behind every product. Get a closer look at the features that reflect our commitment to performance, reliability, and long-lasting engine protection.
            </Typography>
          </div>
          <div className="shrink-0 mt-4 lg:mt-0">
            <Button text="Explore in 360" variant="secondary" />
          </div>
        </div>

        <div className="xl:max-w-[65%] mx-auto" data-aos="zoom-in" data-aos-delay="150">
          <div className="w-full aspect-video  overflow-hidden shadow-2xl">
            <DynamicVideoPlayer type="360" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
