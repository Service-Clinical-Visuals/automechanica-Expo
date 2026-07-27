"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Power = () => {
  return (
    <section className="w-full bg-secondary py-16 min-[1440px]:py-20 min-[3500px]:py-[120px] relative overflow-hidden">
      <div className="custom-container relative z-10 flex flex-col gap-10">
        
        {/* Top Section */}
        <div className="flex flex-col min-[1440px]:grid min-[1440px]:grid-cols-12 gap-6 min-[1440px]:gap-10 items-center w-full">
          
          {/* Mobile Title (Hidden on Desktop) */}
          <div className="order-1 min-[1440px]:hidden w-full flex flex-col gap-4" data-aos="fade-down">
            <div className="flex items-center gap-4">
              <Typography variant="h2" color="white" className="font-bold leading-tight">
                Engineered for Reliable Power
              </Typography>
              <div className="h-0.5 bg-primary w-12 sm:w-24 shrink-0"></div>
            </div>
          </div>

          {/* Video */}
          <div className="order-2 min-[1440px]:order-1 min-[1440px]:col-span-7 w-full aspect-video relative overflow-hidden " data-aos="zoom-in">
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Content (Text + Button) */}
          <div className="order-3 min-[1440px]:order-2 min-[1440px]:col-span-5 w-full flex flex-col gap-6" data-aos="fade-left">
            
            {/* Desktop Title (Hidden on Mobile) */}
            <div className="hidden min-[1440px]:flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Typography variant="h2" color="white" className="font-bold leading-tight">
                  Engineered for Reliable Power
                </Typography>
                <div className="h-0.5 bg-primary w-12 sm:w-24 shrink-0"></div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Typography variant="p" color="white" className="leading-relaxed">
                Watch how FULBAT batteries are built to deliver dependable performance across demanding applications. Combining advanced battery technology with precision manufacturing, every battery is engineered for maximum efficiency, extended service life, and consistent power in automotive, industrial, marine, solar, and motive power environments.
              </Typography>
              
              <Typography variant="p" color="white" className="leading-relaxed">
                From production to performance, FULBAT batteries are designed to meet the expectations of professionals who need stable energy output, dependable starting power, and long-term reliability. Each product is developed with strict quality control and tested to perform under challenging conditions, helping ensure confidence in every application.
              </Typography>

              <Typography variant="p" color="white" className="leading-relaxed">
                Whether used in daily operations, backup systems, or high-demand environments, FULBAT batteries provide the durability and efficiency needed to keep equipment running smoothly. Their robust construction, optimized energy delivery, and maintenance-free design make them a trusted choice for users seeking performance without compromise.
              </Typography>
            </div>

            <div className="mt-2 self-start" data-aos="fade-up" data-aos-delay="100">
               <Button text="Explore" href="#explore" showIcon={false} />
            </div>

          </div>

        </div>

        {/* Bottom Cards Section */}
        <div className="w-full flex flex-col gap-0 mt-4" data-aos="fade-up" data-aos-delay="200">
          
          <div className="grid grid-cols-1 min-[1440px]:grid-cols-2 gap-4 w-full">
            
            {[
              {
                title: "Advanced Battery Technology",
                desc: "Engineered for reliable power, enhanced safety, and long-lasting performance."
              },
              {
                title: "Precision Manufacturing",
                desc: "Produced with strict quality standards to ensure reliability, consistency, and superior build quality."
              },
              {
                title: "Extended Service Life",
                desc: "Built to withstand repeated charge and discharge cycles with exceptional durability."
              },
              {
                title: "Versatile Applications",
                desc: "Ideal for automotive, industrial equipment, marine, renewable energy, and motive power systems."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white flex items-center gap-4 p-5 shadow-sm border-[2px] border-primary group transition-colors">
                <div className="w-5 h-8 min-[3800px]:w-10 min-[3800px]:h-16 shrink-0 flex items-center justify-center">
                  <img src="/moto/confinas/Vector.png" alt="Bullet Icon" className="w-full h-full object-contain" />
                </div>
                <Typography variant="p" color="dark" className="leading-relaxed">
                  <strong>{feature.title}</strong> - {feature.desc}
                </Typography>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Power;
