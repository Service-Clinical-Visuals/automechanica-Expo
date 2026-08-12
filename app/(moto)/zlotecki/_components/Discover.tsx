"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";

const Discover = () => {
  return (
    <section id="discover" className="w-full py-16 md:py-24 bg-[#F7F7F7] relative">
      <div className="custom-container relative z-10 flex flex-col gap-16 min-[3800px]:gap-32">

        {/* Top Section: Video and Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 min-[3800px]:gap-24 items-center">

          {/* Video (Mobile: Order 2) */}
          <div className="order-2 lg:order-1 w-full aspect-[16/9] relative shadow-lg overflow-hidden rounded-2xl min-[3800px]:rounded-[48px] bg-white border border-gray-200" data-aos="fade-right">
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text Content (Mobile: Order 1) */}
          <div className="order-1 lg:order-2 flex flex-col gap-6 min-[3800px]:gap-12 w-full" data-aos="fade-left">
            <Typography variant="h2" color="dark" className="font-bold leading-tight">
              Discover Every Detail of Our Premium Pistons and Piston Rings
            </Typography>

            <div className="flex flex-col gap-4 min-[3800px]:gap-8 mt-2 min-[3800px]:mt-6">
              <Typography variant="p" color="muted" className="leading-relaxed">
                Złotecki manufactures high-quality pistons and piston rings designed to deliver outstanding engine efficiency, durability, and long-term reliability. Engineered with precision and produced using advanced manufacturing technologies, our components ensure optimal combustion, reduced friction, and consistent performance across a wide range of automotive and industrial engine applications.
              </Typography>
              <Typography variant="p" color="muted" className="leading-relaxed">
                Built to withstand high temperatures, pressure, and demanding operating conditions, Złotecki pistons and piston rings provide excellent wear resistance, improved sealing performance, and enhanced engine efficiency. Every product is manufactured to stringent quality standards, ensuring a precise fit, dependable operation, and extended engine service life.
              </Typography>
            </div>
          </div>
        </div>

        {/* Bottom Section: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-[3800px]:gap-12 w-full">

          {/* Card 1 */}
          <div className="bg-primary p-6 md:p-8 lg:px-10 min-[3800px]:p-16 min-[3800px]:px-20 rounded-tl-[32px] rounded-br-[32px] rounded-tr-none rounded-bl-none min-[3800px]:rounded-tl-[64px] min-[3800px]:rounded-br-[64px] shadow-lg flex items-center" data-aos="fade-up" data-aos-delay="100">
            <Typography variant="p" color="white" className="leading-relaxed text-[15.5px] min-[3800px]:text-[31px]">
              <strong>Precision Engineered Design</strong> – Manufactured to OE-quality standards for accurate fitment and reliable performance.
            </Typography>
          </div>

          {/* Card 2 */}
          <div className="bg-primary p-6 md:p-8 lg:px-10 min-[3800px]:p-16 min-[3800px]:px-20 rounded-tl-[32px] rounded-br-[32px] rounded-tr-none rounded-bl-none min-[3800px]:rounded-tl-[64px] min-[3800px]:rounded-br-[64px] shadow-lg flex items-center" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="p" color="white" className="leading-relaxed text-[15.5px] min-[3800px]:text-[31px]">
              <strong>Superior Heat Resistance</strong> – Designed to withstand extreme engine temperatures and high-pressure conditions.
            </Typography>
          </div>

          {/* Card 3 */}
          <div className="bg-primary p-6 md:p-8 lg:px-10 min-[3800px]:p-16 min-[3800px]:px-20 rounded-tl-[32px] rounded-br-[32px] rounded-tr-none rounded-bl-none min-[3800px]:rounded-tl-[64px] min-[3800px]:rounded-br-[64px] shadow-lg flex items-center" data-aos="fade-up" data-aos-delay="300">
            <Typography variant="p" color="white" className="leading-relaxed text-[15.5px] min-[3800px]:text-[31px]">
              <strong>Reduced Friction</strong> – Optimized materials and surface finishes help minimize wear and improve engine efficiency.
            </Typography>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Discover;
