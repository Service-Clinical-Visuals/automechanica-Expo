"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { CheckCircle2 } from "lucide-react";

const Racing = () => {
  const features = [
    "Designed for racing and lowered vehicles",
    "4-wheel measurement with setup time of only 10 minutes",
    "Supports rim sizes up to 22\"",
    "No fully level workshop floor or lifting platform required",
    "Measures toe, camber, caster, toe angle, steering position, and axle offset.",
  ];

  return (
    <section id="racing" className="w-full py-16 bg-[#F5FAFF] overflow-hidden">
      <div className="custom-container flex flex-col gap-10">

        {/* Header (Centered) */}
        <div className="flex flex-col items-center text-center gap-4  mx-auto" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold leading-tight">
            HD-10 EasyTouch Racing Plus
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed max-w-[70%] ">
            The HD-10 EasyTouch Racing Plus offers all the advantages of the HD-10 EasyTouch and is specially designed for racing vehicles and extremely lowered cars. It provides precise four-wheel measurement with efficient setup and reliable alignment performance for demanding applications.
          </Typography>
        </div>

        {/* Divider */}
        <hr className="w-full border-gray-200" data-aos="fade-up" data-aos-delay="100" />

        {/* 2-Column Content */}
        <div className="flex flex-col xl:grid xl:grid-cols-12 gap-10 items-center pt-1">

          {/* Left: Content */}
          <div className="w-full flex flex-col xl:col-span-5 gap-8 order-1">
            <Typography variant="p" color="muted" className="leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              With advanced measurement capabilities, the system delivers accurate alignment data for toe, camber, caster, steering wheel center position, and axle offset. Designed for racing applications, it supports precise four-wheel alignment with efficient setup and reliable performance for specialized and lowered vehicles.
            </Typography>

            <ul className="flex flex-col gap-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3" data-aos="fade-up" data-aos-delay={300 + idx * 50}>
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" fill="currentColor" stroke="white" strokeWidth={1.5} />
                  <Typography variant="p" color="muted">
                    {feature}
                  </Typography>
                </li>
              ))}
            </ul>

            <div className="mt-2" data-aos="fade-up" data-aos-delay="600">
              <Button text="Explore" href="#racing" />
            </div>
          </div>

          {/* Right: Video */}
          <div className="w-full order-2 xl:col-span-7  relative aspect-video overflow-hidden rounded-xl shadow-sm" data-aos="fade-left" data-aos-delay="200">
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Racing;
