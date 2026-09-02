"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Reliable = () => {
  return (
    <section id="reliable" className="w-full py-16 xl:py-24 overflow-hidden bg-[var(--color-background)]">
      <div className="custom-container grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-16 items-center">

        {/* Left Column - Video (Span 8) */}
        <div className="xl:col-span-8 w-full order-2 xl:order-1 rounded-3xl overflow-hidden shadow-2xl relative aspect-video">
          <DynamicVideoPlayer type="short-2" />
        </div>

        {/* Right Column - Text Content (Span 4) */}
        <div className="xl:col-span-4 w-full flex flex-col gap-6 order-1 xl:order-2">
          <Typography variant="h2" color="white" className="font-bold leading-snug">
            Reliable Lubrication Solutions That Keep Your Engine Performing at Its Best Every Day
          </Typography>

          <p className="text-white font-secondary text-sm md:text-base leading-relaxed">
            Our focus is innovation, reliability, and maximum performance. GL Oil SpA combines technical expertise with advanced research to create superior technologies.
          </p>

          <div className="mt-2">
            <Button text="Explore Product" href="#explore" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Reliable;
