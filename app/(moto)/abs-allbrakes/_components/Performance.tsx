"use client";

import React from "react";
import { Check } from "lucide-react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Performance() {
  const features = [
    {
      title: "Superior Braking Performance",
      desc: "Delivers reliable stopping power with consistent friction levels for maximum safety.",
    },
    {
      title: "Complete Installation Kit",
      desc: "Selected applications include wear indicators, bolts, clips, and essential fitting accessories for quick, secure, and easy installation.",
    },
    {
      title: "Hot Press Manufacturing",
      desc: "Produced using an advanced hot press process for greater strength, thermal stability, and reduced glazing.",
    },
    {
      title: "ECE R90 Compliant",
      desc: "Manufactured to meet stringent European ECE R90 quality, safety, and performance regulations where applicable.",
    },
  ];

  return (
    <section className="w-full bg-[#1c1c1c] py-16 md:py-24 relative overflow-hidden" id="performance">
      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16">

          {/* Left Column: 360 Video (span-6) */}
          <div className="col-span-1 lg:col-span-7 flex flex-col order-2 lg:order-1" data-aos="fade-right">
            <div className="w-full aspect-video relative overflow-hidden  shadow-lg">
              <DynamicVideoPlayer type="360" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Column: Content (span-6) */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-center order-1 lg:order-2" data-aos="fade-left">
            <Typography variant="h2" weight="bold" className="text-white mb-6">
              Premium Braking Performance
            </Typography>

            <div className="space-y-6 mb-8">
              <Typography variant="p" className="text-white">
                Engineered for dependable stopping power, ABS Brake Pads are designed to deliver exceptional braking performance, long-lasting durability, and consistent control in every driving condition. Manufactured using advanced friction materials and premium-quality components, they ensure smooth, quiet braking while reducing wear on both the brake pads and discs.
              </Typography>
              <Typography variant="p" className="text-white">
                With a comprehensive portfolio of over 1,800 brake pad references for passenger vehicles, ABS provides one of the most extensive product ranges in the European aftermarket. Designed to deliver reliable braking performance across a wide variety of vehicle makes and models, each brake pad is manufactured using premium friction materials and advanced production technologies to ensure consistent stopping power, reduced noise, and extended service life.
              </Typography>
            </div>

            <div className="mb-12 lg:mb-0">
              <Button href="#products" text="View Products" />
            </div>
          </div>

        </div>

        {/* Bottom Section: Feature Cards */}
        <div className="mt-12 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="200">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white px-6 py-6 lg:px-8 lg:py-8 flex items-start space-x-4 shadow-xl hover:-translate-y-1 transition-transform duration-300">
              <div className="shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
                  <Check size={14} className="text-white stroke-[3]" />
                </div>
              </div>
              <div>
                <Typography variant="p" className="text-black leading-relaxed">
                  {feature.title} – {feature.desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
