"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { CheckCircle2 } from "lucide-react";

export default function Choose() {
  const features = [
    {
      text: "Advanced Manufacturing Technology – Produced using state-of-the-art equipment for exceptional accuracy and quality."
    },
    {
      text: "OE-Quality Performance – Engineered to deliver precise fitment, consistent operation, and extended service life."
    },
    {
      text: "Exceptional Durability – Designed to perform reliably under extreme temperatures, pressure, and heavy-duty conditions."
    }
  ];

  return (
    <section className="w-full py-16 bg-secondary overflow-hidden">
      <div className="custom-container">

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 min-[3800px]:gap-14">

          {/* Mobile Heading */}
          <div className="xl:hidden order-1 border-b border-white/40 pb-4" data-aos="fade-down">
            <Typography variant="h2" color="white" className="font-semibold">
              Why Choose KONEKS?
            </Typography>
          </div>

          {/* Left: Video */}
          <div className="xl:col-span-9 order-2 xl:order-1 aspect-video relative overflow-hidden flex items-center justify-center  rounded-3xl" data-aos="fade-right">
            <DynamicVideoPlayer type="short-2" className="absolute top-0 left-0 w-full h-full object-cover" />
          </div>

          {/* Right: Key Features */}
          <div className="xl:col-span-3 order-3 xl:order-2 flex flex-col justify-center" data-aos="fade-left">
            <div className="hidden xl:block border-b border-white/40 pb-4 mb-6">
              <Typography variant="h2" color="white" className="font-semibold">
                Why Choose KONEKS?
              </Typography>
            </div>

            <Typography variant="p" color="white" className="leading-relaxed  mb-6 text-sm lg:text-base">
              KONEKS combines advanced manufacturing and precision engineering to produce pistons and piston rings that meet the highest quality standards. Every component is tested for durability, reliable engine performance, and long-lasting operation.
            </Typography>

            <div className="flex flex-col gap-4 mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-7 h-7 min-[3800px]:w-10 min-[3800px]:h-10 shrink-0 mt-0.5 fill-primary  text-secondary" strokeWidth={1.5} />
                  <Typography variant="p" color="white" className=" text-sm leading-relaxed">
                    {feature.text}
                  </Typography>
                </div>
              ))}
            </div>

            <Typography variant="p" color="white" className=" pt-4 border-t  border-white/40 leading-relaxed mb-6 block text-sm">
              Explore our OEM-quality Gaskets & Oil Seals in an interactive 360° view, highlighting precision and performance.
            </Typography>

            <div>
              <Button text="Explore Features" href="#" showIcon={true} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
