"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Innovation = () => {
  return (
    <section
      id="innovation"
      className="w-full py-16 min-[3800px]:py-25 text-white relative bg-secondary"
    >
      <div className="custom-container relative z-10 flex flex-col gap-10">

        {/* Top Section */}
        <div className="w-full flex flex-col xl:grid xl:grid-cols-12 gap-8 items-center">

          {/* Right Content - Mobile Order 1 */}
          <div className="order-1 xl:col-span-5 w-full flex flex-col gap-6" data-aos="fade-left">
            <Typography variant="h2" color="white" className="font-bold leading-tight">
              Product Innovation & Manufacturing Excellence
            </Typography>
            <div className="flex flex-col gap-4">
              <Typography variant="span" color="white" className="leading-relaxed">
                Nuova Tecnodelta manages the complete product lifecycle, covering every stage from customer requirements and product engineering to manufacturing, testing, and final delivery. With decades of experience and continuous technological innovation, the company develops high-quality automotive components designed to meet the demanding requirements of OEM and aftermarket markets worldwide.
              </Typography>
              <Typography variant="span" color="white" className="leading-relaxed">
                Equipped with modern machining centers, automated production systems, and advanced quality control processes, Nuova Tecnodelta ensures exceptional precision, reliability, and durability throughout the entire manufacturing cycle. Every component undergoes strict inspections and functional testing to guarantee consistent performance and long-term dependability.
              </Typography>
              <Typography variant="span" color="white" className="leading-relaxed">
                With state-of-the-art production technologies and rigorous quality checks, Nuova Tecnodelta manufactures high-performance automotive components that ensure accuracy, durability, and dependable operation.
              </Typography>
            </div>
          </div>

          {/* Left Video - Mobile Order 2 */}
          <div className="order-2  xl:col-span-7 xl:row-start-1 w-full aspect-video relative  overflow-hidden rounded-2xl" data-aos="zoom-in">
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>

        {/* Separator */}
        <div className="w-full h-px bg-white/40" data-aos="fade-in"></div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col xl:grid xl:grid-cols-12 gap-8 items-center justify-center">

          {/* Bottom Text - Mobile Order 1 */}
          <div className="order-1 xl:col-start-1 xl:col-span-9 w-full" data-aos="fade-right">
            <Typography variant="span" color="white" className="leading-relaxed">
              Equipped with advanced machining centers, automated production systems, and comprehensive quality control processes, Nuova Tecnodelta delivers precise, reliable, and durable automotive components. Through efficient manufacturing methods and strict testing procedures, the company ensures consistent performance, long service life, and high-quality standards across every product.
            </Typography>
          </div>

          {/* Bottom Button - Mobile Order 2 */}
          <div className="order-2 xl:col-start-11 xl:col-span-2 w-full flex xl:items-center xl:justify-end" data-aos="fade-left">
            <Button text="Explore" showIcon={false} />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Innovation;
