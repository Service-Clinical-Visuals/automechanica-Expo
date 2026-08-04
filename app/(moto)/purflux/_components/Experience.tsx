"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Experience = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-secondary overflow-hidden">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-8 items-center">

        {/* Video Placeholder (Mobile: Order 2, Desktop: Col 1-6) */}
        <div className="w-full order-2 xl:order-none xl:col-span-6" data-aos="fade-right">
          <div className="w-full aspect-[16/10] bg-white/5 border border-white/10 rounded-sm flex items-center justify-center shadow-lg relative overflow-hidden">
            <DynamicVideoPlayer type="360" />
          </div>
        </div>

        {/* Content (Mobile: Order 1, Desktop: Col 7-12) */}
        <div className="flex flex-col gap-6 order-1 xl:order-none xl:col-span-6 w-full" data-aos="fade-left">

          {/* Heading Group */}
          <div className="flex flex-col gap-3">
            <Typography variant="h2" color="white" className="font-bold leading-tight">
              Experience Every Detail
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed opacity-90">
              Discover the precision engineering behind the Purflux Cabin Air Filter with an interactive 360° product view. Explore every angle to see its premium construction, advanced filtration media, and OE-quality design that delivers cleaner cabin air, reliable performance, and long-lasting durability.
            </Typography>
          </div>

          {/* Bullet Points */}
          <div className="flex flex-col gap-4 mt-2">
            {[
              {
                title: "Superior Particle Filtration",
                desc: "Captures dust, pollen, and airborne contaminants for cleaner cabin air."
              },
              {
                title: "Fresh Interior Environment",
                desc: "Activated carbon technology helps reduce unpleasant odors and harmful gases."
              },
              {
                title: "Optimized Airflow",
                desc: "Supports efficient HVAC performance without restricting airflow."
              },
              {
                title: "Long-Lasting Reliability",
                desc: "Built with durable filtration media for consistent performance throughout its service life."
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 shrink-0 mt-1 flex items-center justify-center">
                  <img src="/moto/purflux/Vector.png" alt="Bullet" className="w-full h-full object-contain" />
                </div>
                <Typography variant="p" color="white" className="leading-relaxed opacity-90">
                  <strong>{item.title}</strong> – {item.desc}
                </Typography>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="w-fit pt-4">
            <Button text="View Product" href="#" showIcon={false} />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
