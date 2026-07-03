"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Check } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Solutions() {
  const points = [
    {
      title: "Exceptional Stopping Power",
      desc: "Delivers consistent and reliable braking performance in all driving conditions.",
    },
    {
      title: "Precision Engineered",
      desc: "Manufactured to stringent quality standards for a perfect fit and reliable performance.",
    },
    {
      title: "Superior Braking Performance",
      desc: "Delivers reliable stopping power with consistent friction levels for maximum safety.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 relative" id="solutions">
      <div className="custom-container">

        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-black/40 pb-6 mb-12 gap-6" data-aos="fade-down">
          <Typography variant="h2" className="text-black font-bold  ">
            Reliable Braking Solutions
          </Typography>
          <Button text="Get A Quote" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16">

          {/* Left Column: Video (span-7) */}
          <div className="col-span-1 lg:col-span-7 flex flex-col order-2 lg:order-1" data-aos="fade-right">
            <div className="w-full aspect-video relative overflow-hidden rounded-xl shadow-lg">
              <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Column: Content (span-5) */}
          <div className="col-span-1 lg:col-span-5 flex flex-col order-1 lg:order-2" data-aos="fade-left">
            <Typography variant="h3" className="text-black font-bold mb-4">
              Personal Stock Advice
            </Typography>

            <div className="space-y-3 mb-8">
              <Typography variant="p" >
                ABS Brake Pads are engineered to deliver exceptional braking performance, superior safety, and long-lasting reliability for a wide range of passenger vehicles. Manufactured using premium friction materials and advanced production technologies, they provide consistent stopping power, reduced noise, and enhanced driving comfort in every condition.
              </Typography>
              <Typography variant="p" >
                Every ABS Brake Pad is rigorously tested to deliver reliable performance, superior durability, and consistent braking for a wide range of vehicle applications.
              </Typography>
            </div>

            {/* Checkmark List */}
            <div className="space-y-5 mb-8">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="shrink-0 mt-0.5">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
                      <Check size={12} className="text-white stroke-[3]" />
                    </div>
                  </div>
                  <Typography variant="p" className="text-black text-sm leading-relaxed">
                    <strong className="font-semibold">{point.title}</strong> – {point.desc}
                  </Typography>
                </div>
              ))}
            </div>

            <div>
              <Button text="EXPLORE NOW" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
