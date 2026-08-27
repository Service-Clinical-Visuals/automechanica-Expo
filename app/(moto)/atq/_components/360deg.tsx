"use client";

import React from "react";
import Image from "next/image";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const features = [
  {
    title: "Precision Engineering",
    description: "Designed for consistent braking efficiency and dependable operation.",
  },
  {
    title: "High Heat Resistance",
    description: "Maintains stable braking performance under demanding conditions.",
  },
  {
    title: "Low Noise Operation",
    description: "Engineered to reduce vibration and provide a quieter driving experience.",
  },
  {
    title: "Superior Stopping Power",
    description: "Delivers responsive and reliable braking for enhanced safety.",
  },
];

const Deg360 = () => {
  return (
    <section id="precision" className="py-16 bg-secondary relative w-full overflow-hidden">
      <div className="custom-container px-4 sm:px-6 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-center justify-center text-center space-y-6 mb-10 ">
          <Typography variant="h2" color="white" className="font-bold">
            Precision Engineered for Reliable Braking
          </Typography>
          <Typography variant="p" color="white" className="leading-relaxed xl:max-w-[75%]">
            Experience every detail of ATQ Germany Brake Pads through an interactive 360° product view. Manufactured to OEM-quality standards, our brake pads deliver dependable stopping power, precise fitment, and long-lasting durability. Designed for consistent performance under demanding driving conditions, they provide enhanced safety, reduced noise, and reliable braking confidence.
          </Typography>
          <div className="w-full h-[1px] bg-white/40 mt-0"></div>
        </div>

        {/* Content Block: Video + Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left: 360 Video Player */}
          <div className="col-span-1 md:col-span-12 xl:col-span-8 bg-white rounded-xl overflow-hidden shadow-2xl aspect-video" data-aos="fade-right">
             <DynamicVideoPlayer
                className="absolute inset-0 w-full h-full object-cover"
                type="360"
             />
          </div>

          {/* Right: Feature Cards */}
          <div className="col-span-1 md:col-span-12 xl:col-span-4 flex flex-col justify-between space-y-4">
            <div className="flex flex-col space-y-4">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-4 bg-white border border-primary rounded-xl p-6 shadow-sm h-full"
                  data-aos="fade-up" 
                  data-aos-delay={idx * 100}
                >
                  <div className="w-6 h-6 shrink-0 flex items-center justify-center">
                    <Image 
                      src="/moto/atq/Vector.png" 
                      alt="Check Icon" 
                      width={24} 
                      height={24} 
                      className="object-contain" 
                    />
                  </div>
                  <div>
                    <Typography variant="p" color="dark" className="leading-tight block">
                     <strong>{feature.title}</strong> - {feature.description}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 xl:pt-0" data-aos="fade-up" data-aos-delay="400">
              <Button text="Explore More" href="#about" showIcon={true} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Deg360;
