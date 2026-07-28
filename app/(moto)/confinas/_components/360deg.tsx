"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Showcase = () => {
  return (
    <section className="w-full bg-secondary py-16 min-[3500px]:py-[120px] relative overflow-hidden">
      
      <div className="custom-container relative z-10 flex flex-col items-center justify-center text-center gap-5">

        {/* Heading Group */}
        <div className="w-full flex flex-col items-center gap-4" data-aos="fade-up">
           
           <div className="flex items-center gap-4 w-full mx-auto justify-center">
             <div className="h-0.5 bg-primary w-12 sm:w-24"></div>
             <Typography variant="h2" color="white" className="font-bold shrink-0">
               Immersive Battery Showcase
             </Typography>
             <div className="h-0.5 bg-primary w-12 sm:w-24"></div>
           </div>

           <Typography variant="p" color="white" className="leading-relaxed w-full min-[1440px]:max-w-[80%] mt-2">
             Allow users to rotate and explore the AGM Deep Cycle Battery from every angle, offering a complete view of its premium design, robust construction, sealed maintenance-free technology, and precision-engineered terminals. The interactive experience enables users to examine every detail up close, showcasing the battery's durability, build quality, and advanced engineering while providing greater confidence in its performance and reliability.
           </Typography>
            <div className="w-full mx-auto h-[1px] rounded-full bg-white/40 mt-1 mb-1"></div>
        </div>

        {/* Main Content Grid */}
        <div className="w-full flex flex-col min-[1440px]:grid min-[1440px]:grid-cols-12 gap-8 items-center mt-4">
          
          {/* Video */}
          <div className="order-1 min-[1440px]:col-span-7 w-full aspect-[4/3] sm:aspect-video min-[1440px]:aspect-square min-[1440px]:aspect-video relative overflow-hidden bg-white/5 border border-white/10" data-aos="zoom-in" data-aos-delay="100">
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Features List */}
          <div className="order-2 min-[1440px]:col-span-5  w-full flex flex-col gap-4 text-left" data-aos="fade-left" data-aos-delay="200">
            
            {[
              {
                title: "Advanced AGM Technology",
                desc: "Engineered with sealed AGM technology for maintenance-free, leak-proof, and reliable performance."
              },
              {
                title: "Robust Construction",
                desc: "Built with durable materials and reinforced components to withstand demanding operating conditions."
              },
              {
                title: "Long Cycle Life",
                desc: "Designed to deliver consistent power through repeated charge and discharge cycles."
              },
              {
                title: "Sealed & Spill-Proof Design",
                desc: "A maintenance-free VRLA construction ensures enhanced safety and dependable operation."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white flex items-center gap-4 p-4 min-[1440px]:p-5 shadow-sm border-[2px] border-primary group transition-colors">
                <div className="w-5 h-8 min-[3800px]:w-10 min-[3800px]:h-16 shrink-0 flex items-center justify-center">
                  <img src="/moto/confinas/Vector.png" alt="Bullet Icon" className="w-full h-full object-contain" />
                </div>
                <Typography variant="p" color="dark" className="leading-relaxed">
                  <strong>{feature.title}</strong> - {feature.desc}
                </Typography>
              </div>
            ))}

            <div className="mt-4 self-start">
               <Button text="Explore" href="#explore" showIcon={false} />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Showcase;
