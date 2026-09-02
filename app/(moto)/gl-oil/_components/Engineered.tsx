"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Engineered = () => {
  return (
    <section id="engineered" className="w-full py-16 bg-secondary overflow-hidden">
      <div className="custom-container flex flex-col gap-8">

        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 w-full">
          <Typography variant="h2" color="white" className="font-bold leading-tight md:max-w-[70%]">
            Engineered for Maximum Performance and Long-Lasting Engine Protection
          </Typography>
          <div className="shrink-0 mb-1">
            <Button text="Explore Products" href="#products" />
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full border-t border-white/40 h-1 rounded my-2"></div>

        {/* Content Grid */}
        <div className="flex flex-col xl:grid xl:grid-cols-12 gap-10 xl:gap-12 mt-4 items-center">

          {/* Left Content Column (Mobile: Order 1, Desktop: col-span-5) */}
          <div className="w-full order-1 xl:col-span-4 flex flex-col gap-8">
            <Typography variant="p" color="white" className="leading-relaxed ">
              GL Oil engine oils are formulated using premium base oils and advanced additive technology to deliver exceptional lubrication and reliable engine protection. Designed for modern gasoline and diesel engines, our lubricants help reduce friction, improve fuel efficiency, and maintain peak engine performance under a wide range of operating conditions.
            </Typography>

            <div className="flex flex-col gap-6">

              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="w-4 h-4 bg-primary rounded-sm mt-1.5 shrink-0"></div>
                <Typography variant="p" color="white" className="leading-relaxed ">
                  <strong>Advanced Wear Protection</strong> - Reduces friction between moving engine components to help extend engine life and improve durability.
                </Typography>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="w-4 h-4 bg-primary rounded-sm mt-1.5 shrink-0"></div>
                <Typography variant="p" color="white" className="leading-relaxed ">
                  <strong>Excellent Thermal Stability</strong> - Maintains consistent viscosity and lubrication performance in both high and low temperature conditions.
                </Typography>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="w-4 h-4 bg-primary rounded-sm mt-1.5 shrink-0"></div>
                <Typography variant="p" color="white" className="leading-relaxed ">
                  <strong>Superior Engine Cleanliness</strong> - Prevents sludge, varnish, and harmful deposits to keep engines cleaner and operating efficiently.
                </Typography>
              </div>

            </div>
          </div>

          {/* Right Video Column (Mobile: Order 2, Desktop: col-span-7) */}
          <div className="w-full order-2 xl:col-span-8 aspect-video relative overflow-hidden rounded-xl shadow-lg border border-white/10 bg-white/5">
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Engineered;
