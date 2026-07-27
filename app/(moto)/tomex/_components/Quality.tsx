"use client";

import React from "react";
import Typography from "./Typography";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

const Quality = () => {
  return (
    <section className="w-full relative overflow-hidden pb-16 pt-16">
      {/* Background Primary for top 30-40% */}
      <div className="absolute top-0 left-0 w-full h-[55%] lg:h-[45%] bg-primary z-0"></div>
      
      <div className="custom-container relative z-10 flex flex-col gap-12">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 w-full" data-aos="fade-up">
          <div className="flex flex-col gap-4 ">
            <Typography variant="h2" color="white" className="font-bold leading-tight">
              Certified Quality You Can Trust
            </Typography>
            <Typography variant="p" color="white" className="text-gray-300 max-w-[80%] leading-relaxed text-sm md:text-base">
              Every brake pad from TOMEX BRAKES Sp. z o.o. Sp. K. is manufactured under strict quality control and extensively tested to meet European standards. From raw material selection to final inspection, every component is designed to provide reliability, durability, and confidence on every journey.
            </Typography>
          </div>
          
          <div className="hidden md:flex shrink-0 w-16 h-16 rounded-full bg-[#D9D9D9] items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer group">
            <ArrowUpRight className="w-8 h-8 text-black group-hover:scale-110 transition-transform" strokeWidth={2} />
          </div>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full mt-4" data-aos="fade-up" data-aos-delay="100">
          
          {/* Text Content Box */}
          <div className="lg:col-span-4 order-2 lg:order-1 bg-white p-8 xl:p-10  shadow-[0_0_30px_rgba(0,0,0,0.15)] flex flex-col gap-6 h-full z-10 border border-gray-100">
            <Typography variant="h3" color="dark" className="font-bold leading-tight">
              Precision Quality In Every Brake Pad
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed">
              Every TOMEX brake pad is manufactured to the highest European quality standards and undergoes comprehensive testing to ensure dependable performance, durability, and safety. Designed for a wide range of vehicle applications, our brake pads deliver long-lasting reliability and consistent braking confidence.
            </Typography>

            {/* Bullet Points */}
            <div className="flex flex-col gap-5 mt-2">
              {[
                { title: "European Quality Standards", desc: "Manufactured to meet stringent industry requirements." },
                { title: "Comprehensive Quality Testing", desc: "Every product is rigorously inspected before delivery." },
                { title: "Wide Vehicle Coverage", desc: "Suitable for passenger cars, vans, trucks, and buses." },
                { title: "Long Service Life", desc: "Built for durability and reduced wear." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-7 h-7 min-[2100px]:w-10 min-[2100px]:h-10 text-white fill-primary shrink-0 mt-0.5" strokeWidth={2} />
                  <Typography variant="p" color="muted" className="leading-relaxed text-sm xl:text-base">
                   {item.title} – {item.desc}
                  </Typography>
                </div>
              ))}
            </div>
          </div>

          {/* Video Player Box */}
          <div className="lg:col-span-8 order-1 lg:order-2 shadow-[0_0_30px_rgba(0,0,0,0.15)] overflow-hidden flex items-center justify-center relative min-h-[350px] lg:min-h-full z-10 ">
            <DynamicVideoPlayer type="short-2" className="absolute top-0 left-0 w-full h-full object-cover" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Quality;
