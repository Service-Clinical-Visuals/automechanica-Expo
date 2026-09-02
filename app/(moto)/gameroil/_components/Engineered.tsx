"use client";

import React from "react";
import Typography from "./Typography";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Engineered = () => {
  return (
    <section id="engineered" className="w-full py-16 min-[3800px]:py-25 bg-[#F3F4F6] overflow-hidden">
      <div className="custom-container grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-12 xl:items-center 2xl:items-start">

        {/* Mobile Title */}
        <div className="xl:hidden col-span-1 flex flex-col order-1" data-aos="fade-down">
          <Typography variant="h2" className="font-bold leading-tight text-gray-900">
            Engineered for Maximum Performance
          </Typography>
        </div>

        {/* Video Side - Mobile: Order 2, Desktop: Left (Col 1-5) */}
        <div className="col-span-1 xl:col-span-7 order-2 w-full h-full xl:h-auto 2xl:h-full  aspect-video relative rounded-2xl overflow-hidden shadow-lg" data-aos="fade-right">
          <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* Text Content - Mobile: Order 3, Desktop: Right (Col 6-12) */}
        <div className="col-span-1 xl:col-span-5 order-3 flex flex-col gap-6" data-aos="fade-left">
          {/* Desktop Title */}
          <div className="hidden xl:flex flex-col">
            <Typography variant="h2" className="font-bold leading-tight text-gray-900">
              Engineered for Maximum Performance
            </Typography>
          </div>

          <div className="flex flex-col gap-4">
            <Typography variant="p" className="leading-relaxed text-gray-600">
              Gameroil develops premium lubricants using advanced formulations and high-quality base oils to deliver exceptional engine protection, improved efficiency, and long-lasting performance. Designed for passenger vehicles, commercial fleets, motorcycles, and industrial equipment, every product helps reduce friction, minimize wear, and ensure smooth operation under a wide range of driving and operating conditions.
            </Typography>
            <Typography variant="p" className="leading-relaxed text-gray-600">
              Each lubricant is engineered to deliver excellent thermal stability, oxidation resistance, and superior protection against sludge, deposits, and wear. Its advanced formulation helps maintain engine cleanliness, reduce friction, extend component life, and improve fuel efficiency while ensuring reliable performance under extreme temperatures and demanding operating conditions. Designed for long-lasting protection, it supports consistent engine performance and overall reliability throughout its service life.
            </Typography>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Engineered;
