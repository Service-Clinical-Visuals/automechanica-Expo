"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Commercial = () => {
  return (
    <section id="commercial" className="w-full py-16 min-[2100px]:py-24 min-[3800px]:py-32 bg-[#F5FAFF] overflow-hidden">
      <div className="custom-container flex flex-col xl:flex-row gap-8 xl:gap-12 min-[2100px]:gap-20 min-[3800px]:gap-32 items-center xl:items-start">
        
        {/* Mobile Header (Hidden on Desktop) */}
        <div className="xl:hidden w-full flex flex-col gap-4" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold leading-tight">
            Commercial Vehicle Alignment Performance
          </Typography>
        </div>

        {/* Left: Content (Order 3 on Mobile, Order 1 on Desktop) */}
        <div className="w-full xl:w-[50%] min-[3800px]:w-[45%] flex flex-col gap-6 min-[2100px]:gap-8 min-[3800px]:gap-12 xl:pt-4 order-3 xl:order-1" data-aos="fade-right">
          
          {/* Desktop Header (Hidden on Mobile) */}
          <div className="hidden xl:flex flex-col gap-4">
            <Typography variant="h2" color="dark" className="font-bold leading-tight">
              Commercial Vehicle Alignment Performance
            </Typography>
          </div>

          <div className="flex flex-col gap-4 min-[2100px]:gap-6 min-[3800px]:gap-10">
            <Typography variant="p" color="muted" className="leading-relaxed">
              The HD-30 EasyTouch wheel alignment system is designed for commercial vehicles, combining laser measurement technology and electronic tools to deliver accurate alignment results. It enables efficient measurements in driving condition without vehicle lifting, making it suitable for professional workshops handling trucks and heavy-duty applications.
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed">
              With reliable measurement capabilities, the system supports accurate alignment checks for toe, camber, caster, KPI, steering wheel center position, and axle offset. Its efficient operation helps workshops improve productivity and maintain consistent vehicle performance across demanding commercial applications.
            </Typography>
          </div>

          <div className="mt-2 min-[2100px]:mt-6 min-[3800px]:mt-10">
            <Button text="Explore" href="#commercial" />
          </div>

        </div>

        {/* Right: Video (Order 2 on Mobile, Order 2 on Desktop) */}
        <div className="w-full xl:w-[50%] min-[3800px]:w-[55%] flex shrink-0 order-2 xl:order-2" data-aos="fade-left">
          <div className="w-full aspect-video relative overflow-hidden rounded-2xl shadow-lg border border-gray-100">
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Commercial;
