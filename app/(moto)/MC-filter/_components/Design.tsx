"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Design = () => {
  const features = [
    {
      num: "01",
      title: "Advanced Multi-Layer Filtration",
      desc: "Effectively traps dust, pollen, soot, and fine airborne contaminants to provide cleaner cabin air."
    },
    {
      num: "02",
      title: "Improved Airflow Performance",
      desc: "Maintains smooth and consistent airflow for enhanced heating and air conditioning efficiency."
    },
    {
      num: "03",
      title: "Long-Lasting Protection",
      desc: "High-quality filter media delivers reliable filtration performance and extended service life."
    }
  ];

  return (
    <section id="design" className="w-full py-12 md:py-16 2xl:py-24 bg-[#04000B] overflow-hidden">
      <div className="custom-container flex flex-col gap-10">

        {/* Top Video & Text Row */}
        <div className="flex flex-col xl:flex-row gap-10 s items-center">

          {/* Left: Video */}
          <div className="w-full xl:w-7/12" data-aos="fade-right">
            <div className="w-full bg-white/5 rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] relative flex items-center justify-center">
              <DynamicVideoPlayer
                type="short-1"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="w-full xl:w-5/12 flex flex-col gap-6" data-aos="fade-left">
            <div className="flex flex-col gap-2">
              <Typography variant="h5" color="white" className="font-bold uppercase tracking-wider text-sm">
                PREMIUM CABIN AIR FILTRATION
              </Typography>
              <div className="w-[40%] h-[2px] bg-secondary mt-1"></div>
              <Typography variant="h2" color="white" className="font-bold leading-tight">
                Designed to Capture Dust, Allergens, and Harmful Airborne Particles
              </Typography>
            </div>

            <div className="flex flex-col gap-4">
              <Typography variant="p" color="white" className="text-gray-300 leading-relaxed">
                Experience cleaner cabin air with premium cabin air filters engineered to capture dust, pollen, allergens, and harmful airborne particles before they enter your vehicle. Designed for superior airflow and long-lasting performance, our filters help create a healthier and more comfortable driving environment for every journey.
              </Typography>
              <Typography variant="p" color="white" className="text-gray-300 leading-relaxed">
                Manufactured with advanced filtration materials and precision engineering, MC Air Filters deliver reliable protection while maintaining efficient HVAC system performance. Whether for passenger cars or commercial vehicles, our filters ensure fresh air circulation and dependable quality in every drive.
              </Typography>
            </div>

            <div className="pt-4">
              <Button text="Explore Cabin Air Filters" href="#explore" variant="secondary" />
            </div>
          </div>

        </div>

        {/* Bottom Features Row */}
        <div className="w-full border-t border-white/10 pt-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 lg:p-10 border-4 border-secondary flex flex-col items-center text-center gap-6 shadow-xl"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shrink-0">
                <Typography variant="h4" color="white" className="font-bold">
                  {feature.num}
                </Typography>
              </div>
              <div className="flex flex-col gap-3">
                <Typography variant="h4" color="dark" className="font-bold leading-tight text-lg">
                  {feature.title}
                </Typography>
                <Typography variant="p" color="muted" className="text-sm leading-relaxed">
                  {feature.desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Design;
