"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { CheckCircle2 } from "lucide-react";

export default function ReliableBraking() {
  const features = [
    {
      title: "Optimized Heat Dissipation",
      desc: "Efficiently disperses heat to enhance braking efficiency during prolonged use.",
    },
    {
      title: "Dust-Reduced Formulation",
      desc: "Advanced friction compounds help minimize brake dust, keeping wheels cleaner.",
    },
    {
      title: "Quality-Tested for Reliability",
      desc: "Tested for durability, safety, and consistent performance.",
    },
    {
      title: "Reliable Wet & Dry Performance",
      desc: "Delivers dependable braking in all weather and road conditions.",
    },
    {
      title: "Stable Performance Under Load",
      desc: "Maintains consistent braking under heavy loads and demanding conditions.",
    },
    {
      title: "Precision Manufacturing",
      desc: "Ensures accurate fitment, reliable operation, and lasting performance.",
    }
  ];

  return (
    <section className="relative w-full py-16 lg:py-24 bg-primary" data-aos="fade-up">
      <div className="custom-container flex flex-col items-center">

        {/* Header Content */}
        <div className="max-w-[90%] md:max-w-[80%] mx-auto mb-12 flex flex-col items-center text-center">
          <Typography variant="h1" font="oswald" color="white" className="mb-6  font-bold tracking-wide">
            Reliable Braking. Maximum Safety. Every Journey.
          </Typography>
          <Typography variant="p" font="lato" color="white" className="leading-relaxed max-w-[95%] md:max-w-[85%] opacity-95">
            Metelli Group Brake Pads are engineered to deliver outstanding braking performance, exceptional safety, and long-lasting durability for modern vehicles. Designed using advanced friction materials and manufactured with precision, they provide consistent stopping power, excellent thermal stability, and reliable performance in both everyday driving and demanding conditions.
          </Typography>
        </div>

        {/* 12-Column Grid Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full">

          {/* Left: Dynamic Video (Span 7) */}
          <div className="lg:col-span-7 w-full aspect-video relative rounded-lg overflow-hidden shadow-2xl bg-white/10 flex items-center justify-center" data-aos="fade-right" data-aos-delay="100">
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right: Features List (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-6" data-aos="fade-left" data-aos-delay="200">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="shrink-0 mt-1">
                  <CheckCircle2 className="w-7 h-7 text-primary fill-white" />
                </div>
                <div>
                  <Typography variant="p" font="lato" color="white" className=" leading-snug">
                    {feature.title} - {feature.desc}
                  </Typography>
                </div>
              </div>
            ))}

            {/* Learn More Button */}
            <div className="mt-4">
              <Button text="Learn More" variant="secondary" href="#" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
