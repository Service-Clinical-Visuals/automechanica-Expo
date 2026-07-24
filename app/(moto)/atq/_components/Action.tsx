"use client";

import React from "react";
import Image from "next/image";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const actionFeatures = [
  {
    title: "OEM-Quality Engineering",
    desc: "Precision-manufactured for accurate fitment and dependable performance.",
  },
  {
    title: "Enhanced Safety & Durability",
    desc: "Delivers consistent braking power with long-lasting reliability under everyday conditions.",
  },
];

export default function Action() {
  return (
    <section className="py-16 md:py-24 bg-secondary relative w-full overflow-hidden">
      <div className="custom-container px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-12 items-center">
          
          {/* Left: Video Player */}
          <div className="col-span-1 xl:col-span-7 order-2 xl:order-1" data-aos="fade-right">
            <div className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-black aspect-video">
              <DynamicVideoPlayer
                className="absolute inset-0 w-full h-full object-cover"
                type="short-1"
              />
            </div>
          </div>

          {/* Right: Content Block */}
          <div className="col-span-1 xl:col-span-5 order-1 xl:order-2 flex flex-col space-y-8">
            <div className="space-y-4">
              <Typography variant="h2" color="white" className="font-bold">
                Brake Pads in Action
              </Typography>
              
              <Typography variant="h4" color="white" className="font-semibold ">
                Engineered for Confident Braking
              </Typography>

              <Typography variant="p" color="white" className="leading-relaxed ">
                See ATQ Germany brake pads perform in real-world driving conditions. This video highlights dependable stopping power, reduced noise, and smooth, consistent braking performance designed to support everyday safety and driving confidence. Built for reliability and precision, ATQ brake pads deliver the performance drivers expect on every journey.
              </Typography>
            </div>

            {/* Feature Cards */}
            <div className="flex flex-col space-y-4">
              {actionFeatures.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start sm:items-center gap-4 bg-white border-2 border-primary rounded-xl p-6 shadow-md"
                  data-aos="fade-up" 
                  data-aos-delay={idx * 100}
                >
                  <div className="w-6 h-6 shrink-0 flex items-center justify-center mt-1 sm:mt-0">
                    <Image 
                      src="/moto/atq/Vector.png" 
                      alt="Check Icon" 
                      width={24} 
                      height={24} 
                      className="object-contain" 
                    />
                  </div>
                  <div>
                    <Typography variant="p" color="dark" className="leading-snug text-[15px]">
                      <span className="font-bold">{feature.title}</span> - {feature.desc}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2" data-aos="fade-up" data-aos-delay="200">
              <Button text="Explore More" href="#about" showIcon={true} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
