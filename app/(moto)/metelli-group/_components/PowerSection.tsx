"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { CheckCircle2, } from "lucide-react";

export default function PowerSection() {
  const features = [
    {
      title: "Superior Braking Power",
      desc: "Delivers consistent and reliable stopping performance in all driving conditions."
    },
    {
      title: "Superior Braking Power",
      desc: "Provides consistent, responsive stopping power across a wide range of driving conditions."
    },
    {
      title: "High Heat Resistance",
      desc: "Maintains stable braking performance while reducing brake fade under high temperatures."
    },
    {
      title: "Precision Fitment",
      desc: "Designed for accurate instaIconllation and seamless compatibility with OEM specifications."
    }
  ];

  return (
    <section className="relative w-full py-16  bg-primary">
      <div className="custom-container flex flex-col">

        {/* Top Content Row */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 mb-8 xl:mb-12">
          <div className="flex flex-col max-w-[90%] xl:w-2/3 order-1">
            <div data-aos="fade-right" data-aos-duration="800">
              <Typography variant="h1" font="oswald" color="white" className="mb-4 tracking-wide font-bold">
                Engineered for Reliable Stopping Power
              </Typography>
            </div>
            <div data-aos="fade-right" data-aos-delay="150" data-aos-duration="800">
              <Typography variant="p" font="lato" color="white" className="leading-relaxed ">
                Metelli Group Brake Pads deliver reliable braking performance, enhanced safety, and long-lasting durability. Engineered with advanced friction materials and precision manufacturing, they provide consistent stopping power, low noise, and OEM-quality performance.
              </Typography>
            </div>
          </div>
          <div className="order-2 flex xl:justify-end xl:w-1/3">
            <div data-aos="zoom-in-left" data-aos-delay="300" data-aos-duration="800">
              <Button text="Explore Products" variant="secondary" href="#" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/60 mb-8 xl:mb-12" data-aos="zoom-in" data-aos-duration="1000"></div>

        {/* Bottom Media and Features Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12">

          {/* Left: Video Player */}
          <div className="xl:col-span-7 order-1 w-full aspect-video relative overflow-hidden shadow-2xl flex items-center justify-center" data-aos="zoom-out-right" data-aos-duration="1000">
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right: Feature Cards */}
          <div className="xl:col-span-5 order-2 flex flex-col gap-4 justify-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-[24px] rounded-tl-none rounded-br-none p-6 lg:p-8 flex gap-4 items-start shadow-md hover:shadow-lg transition-shadow"
                data-aos="fade-left"
                data-aos-delay={400 + (index * 100)}
              >
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 className="w-8 h-8 text-primary fill-primary text-white" />
                </div>
                <div>
                  <Typography variant="p" font="lato" className="text-gray-800 leading-snug text-sm lg:text-base">
                    {feature.title} - {feature.desc}
                  </Typography>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
