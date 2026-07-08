import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { Check } from "lucide-react";

export default function Compressors() {
  const features = [
    {
      title: "OEM-Quality Performance",
      description: "Engineered to match original equipment specifications.",
    },
    {
      title: "New & Remanufactured Options",
      description: "Choose from premium new compressors.",
    },
    {
      title: "High Cooling Efficiency",
      description: "Delivers fast, consistent cooling while maintaining optimal refrigerant flow.",
    },
    {
      title: "Low Noise Operation",
      description: "Optimized internal components minimize vibration and ensure smooth, quiet performance.",
    },
  ];

  return (
    <section className="w-full bg-primary py-12 md:py-16 relative overflow-hidden" data-aos="fade-up">
      <div className="custom-container flex flex-col">

        {/* Top Heading */}
        <div className="w-full text-center pb-3 border-b border-white/30 mb-8 md:mb-8">
          <Typography variant="h2" color="white" weight="bold" className="font-primary">
            Automotive Air Conditioning Compressors
          </Typography>
        </div>

        {/* 2-Column Content Area */}
        <div className="grid grid-cols-1 2xl:grid-cols-12 gap-8 lg:gap-10 items-center  mb-10">

          {/* Content (Ordered first on smaller screens < 1536px) */}
          <div className="w-full 2xl:col-span-4 flex flex-col gap-2 order-1 2xl:order-2" data-aos="fade-left">
            <Typography variant="h3" color="white" weight="bold" className="font-primary leading-tight">
              Precision Cooling. Reliable Performance. Built to Last.
            </Typography>
            <Typography variant="p" color="white" className=" leading-relaxed mb-4">
              Airstal offers a comprehensive range of new and remanufactured automotive air conditioning compressors engineered to deliver reliable cooling performance, maximum efficiency, and long-lasting durability. Manufactured and remanufactured using advanced technologies and strict quality control processes.
            </Typography>

            <div className="flex flex-col gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-2 text-primary p-0.5 bg-white rounded-full shrink-0">
                    <Check className="w-4 h-4 " size={20} strokeWidth={3} />
                  </div>
                  <Typography variant="p" color="white" className="leading-relaxed ">
                    {feature.title}– {feature.description}
                  </Typography>
                </div>
              ))}
            </div>
          </div>

          {/* Video (Ordered second on smaller screens < 1536px) */}
          <div className="w-full 2xl:col-span-8 aspect-video order-2 2xl:order-1 overflow-hidden shadow-2xl relative" data-aos="fade-right">
            <DynamicVideoPlayer type="short-1" className="absolute top-0 left-0 w-full h-full object-cover" />
          </div>

        </div>

        {/* Bottom Content Area */}
        <div className="w-full pt-8 border-t border-white/30 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8" data-aos="fade-up">
          <div className="max-w-[60%]">
            <Typography variant="p" color="white" className="leading-relaxed">
              Airstal SP is a company founded in 2004 by Danish specialists, located near Łódź, in central Poland. Thanks to years of experience, we have become one of the European leaders in the remanufacturing of air conditioning compressors for passenger cars, trucks, delivery vans, buses, agricultural and construction
            </Typography>
          </div>
          <div className="shrink-0">
            {/* The button in the image is white with dark text. Using secondary variant if we have it, or custom class */}
            <Button text="Explore Product" href="#" className="!bg-white !text-[#183A59] hover:!bg-gray-100" />
          </div>
        </div>

      </div>
    </section>
  );
}
