"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Deg360 = () => {
  return (
    <section
      id="performance"
      className="w-full py-16 min-[3800px]:py-32 bg-[#0A1119] text-white"
    >
      <div className="custom-container grid grid-cols-1 xl:grid-cols-12 gap-10  min-[3800px]:gap-32 items-center">

        {/* Left Side: Video (Order 2 on Mobile, 1 on Desktop) */}
        <div className="order-2 xl:order-1 xl:col-span-7 w-full relative h-full flex items-center" data-aos="fade-right">
          <div className="w-full aspect-video relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl min-[3800px]:rounded-[40px]">
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: Heading, Text & Button (Order 1 on Mobile, 2 on Desktop) */}
        <div className="flex flex-col gap-6 min-[3800px]:gap-12 order-1 xl:order-2 xl:col-span-5 w-full" data-aos="fade-left">

          <div className="flex flex-col gap-4 min-[3800px]:gap-8">
            <Typography variant="h2" color="white" className="font-bold leading-tight">
              Engineered for Maximum Performance
            </Typography>

            <Typography variant="p" color="white" className="leading-relaxed ">
              Built to meet the demanding requirements of modern commercial vehicles, Dönmez turbochargers are engineered to deliver exceptional power, efficiency, and long-term reliability across a wide range of operating conditions. Designed with precision-balanced rotating assemblies and manufactured using advanced machining technologies, every turbocharger is developed to provide consistent airflow, rapid boost response, and dependable performance for heavy-duty applications.
            </Typography>

            <Typography variant="p" color="white" className="leading-relaxed ">
              Every component is produced under rigorous quality control processes to ensure durability, dimensional accuracy, and resistance to extreme temperatures and pressures. From material selection to final assembly and performance testing, each turbocharger is crafted to meet the highest standards of engineering excellence, helping reduce engine stress while maximizing overall efficiency.
            </Typography>
          </div>

          {/* Button */}
          <div className="mt-2 min-[3800px]:mt-6 flex justify-start">
            <Button text="View Product" variant="primary" href="#products" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Deg360;
