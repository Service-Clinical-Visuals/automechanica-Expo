"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { CheckCircle2 } from "lucide-react";

export default function Piston() {
  const features = [
    {
      text: "OE-Quality Precision - Manufactured to OE standards for accurate fitment, smooth installation, and reliable engine performance in demanding automotive applications."
    },
    {
      text: "Advanced Material Technology - Built with premium, wear-resistant materials for maximum durability under demanding conditions and extended service life."
    },
    {
      text: "Enhanced Engine Performance - Improves combustion efficiency, reduces friction, supports smoother engine operation, and enhances overall fuel efficiency."
    },
    {
      text: "Long-Lasting Reliability - Tested to deliver dependable performance, extended service life, and excellent resistance to wear, pressure, and extreme temperatures."
    }
  ];

  return (
    <section className="w-full py-16 bg-[#27292A] overflow-hidden">
      <div className="custom-container flex flex-col gap-10">

        {/* Top Block */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 border-b border-white/40 pb-8" data-aos="fade-up">
          <div className="flex flex-col gap-4 xl:w-2/3 order-1">
            <Typography variant="h2" color="white" className="font-semibold">
              Piston & Piston Ring
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed ">
              KONEKS manufactures premium pistons and piston rings engineered for precision, durability, and reliable performance. Built to OE-quality standards, our components deliver efficient engine operation, reduced wear, and long-lasting reliability.
            </Typography>
          </div>
          <div className="order-2 mt-4 xl:mt-0 shrink-0">
            <Button text="View Product" href="#" showIcon={true} />
          </div>
        </div>

        {/* Bottom Block */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">

          {/* Mobile Heading */}
          <div className="xl:hidden order-1 w-full" data-aos="fade-down">
            <Typography variant="h3" color="white" className="font-semibold mb-2">
              Precision Engine Performance By KONEKS
            </Typography>
          </div>

          {/* Left: Video */}
          <div className="xl:col-span-8 order-2 xl:order-1 aspect-video relative overflow-hidden flex items-center justify-center " data-aos="fade-right">
            <DynamicVideoPlayer type="short-1" className="absolute top-0 left-0 w-full h-full object-cover" />
          </div>

          {/* Right: Key Features */}
          <div className="xl:col-span-4 order-3 xl:order-2 flex flex-col justify-center" data-aos="fade-left">
            <Typography variant="h3" color="white" className="hidden xl:block font-semibold mb-4">
              Precision Engine Performance By KONEKS
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed  mb-6">
              KONEKS pistons and piston rings deliver dependable engine performance, exceptional durability, and OE-quality reliability. Precision-manufactured, every component ensures efficient operation and long-lasting service life.
            </Typography>

            <div className="flex flex-col gap-4 mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-7 h-7 min-[3800px]:w-10 min-[3800px]:h-10 text-white fill-white stroke-secondary shrink-0 mt-0.5" strokeWidth={1.5} />
                  <Typography variant="p" color="white" className=" text-sm leading-relaxed">
                    {feature.text}
                  </Typography>
                </div>
              ))}
            </div>

            <div>
              <Button text="View Specifications" href="#" showIcon={true} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
