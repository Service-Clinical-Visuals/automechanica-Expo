"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
const Advanced = () => {
  return (
    <section id="advanced" className="w-full py-16 min-[3800px]:py-25 bg-[#F3F4F6] overflow-hidden">
      <div className="custom-container flex flex-col gap-12 lg:gap-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Mobile Title */}
          <div className="xl:hidden col-span-1 flex flex-col order-1" data-aos="fade-down">
            <Typography variant="h2" className="font-bold leading-tight text-gray-900">
              Advanced Laboratory Testing
            </Typography>
          </div>

          {/* Left Video - Mobile: Order 2, Desktop: Left (Col 1-6) */}
          <div className="col-span-1 xl:col-span-6 order-2 w-full h-full aspect-video relative rounded-2xl overflow-hidden shadow-lg" data-aos="fade-right">
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right Text - Mobile: Order 3, Desktop: Right (Col 7-12) */}
          <div className="col-span-1 xl:col-span-6 order-3 flex flex-col gap-6" data-aos="fade-left">
            {/* Desktop Title */}
            <div className="hidden xl:flex flex-col">
              <Typography variant="h2" className="font-bold leading-tight text-gray-900">
                Advanced Laboratory Testing
              </Typography>
            </div>

            <div className="flex flex-col gap-4">
              <Typography variant="p" className="leading-relaxed text-gray-600">
                Every lubricant undergoes rigorous laboratory testing to ensure high quality, performance, and reliability. By analyzing both new and used products, valuable data is collected to improve formulations, maintain consistency, and deliver advanced lubrication solutions with enhanced protection and long-lasting performance.
              </Typography>
              <Typography variant="p" className="leading-relaxed text-gray-600">
                Every lubricant undergoes rigorous laboratory testing to ensure high quality, performance, and reliability. By analyzing both new and used products, valuable data is collected to improve formulations, maintain consistency, and deliver advanced lubrication solutions.
              </Typography>
              <Typography variant="p" className="leading-relaxed text-gray-600">
                These testing processes improve product protection, efficiency, and durability, ensuring reliable performance across automotive and industrial applications.
              </Typography>
            </div>

            <div className="w-full mt-2 flex justify-start">
              <Button text="Explore" href="#advanced" showIcon={false} />
            </div>
          </div>

        </div>

        {/* Bottom Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8" data-aos="fade-up" data-aos-delay="100">

          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 xl:p-8 flex items-start gap-4 xl:gap-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 sm:w-14 sm:h-14 xl:w-16 xl:h-16 shrink-0 min-[2500px]:w-32 min-[2500px]:h-32 min-[3800px]:w-56 min-[3800px]:h-56">
              <img src="/moto/gameroil/a1.png" alt="Advanced Testing" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col gap-2">
              <Typography variant="h3" className="font-bold text-gray-900">
                Advanced Testing
              </Typography>
              <Typography variant="p" className="text-sm text-gray-600 leading-relaxed min-[2500px]:text-lg min-[3800px]:text-xl">
                Precise analysis with advanced laboratory testing.
              </Typography>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 xl:p-8 flex items-start gap-4 xl:gap-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 sm:w-14 sm:h-14 xl:w-16 xl:h-16 shrink-0 min-[2500px]:w-32 min-[2500px]:h-32 min-[3800px]:w-56 min-[3800px]:h-56">
              <img src="/moto/gameroil/a2.png" alt="Quality Control" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col gap-2">
              <Typography variant="h3" className="font-bold text-gray-900">
                Quality Control
              </Typography>
              <Typography variant="p" className="text-sm text-gray-600 leading-relaxed min-[2500px]:text-lg min-[3800px]:text-xl">
                Ensures reliability, efficiency, and lasting protection.
              </Typography>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 xl:p-8 flex items-start gap-4 xl:gap-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 sm:w-14 sm:h-14 xl:w-16 xl:h-16 shrink-0 min-[2500px]:w-32 min-[2500px]:h-32 min-[3800px]:w-56 min-[3800px]:h-56">
              <img src="/moto/gameroil/a3.png" alt="Reliable Solutions" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col gap-2">
              <Typography variant="h3" className="font-bold text-gray-900">
                Reliable Solutions
              </Typography>
              <Typography variant="p" className="text-sm text-gray-600 leading-relaxed min-[2500px]:text-lg min-[3800px]:text-xl">
                Tested formulations ensure safety, durability, and performance.
              </Typography>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Advanced;
