"use client";
import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Efficiency() {
  const features = [
    {
      id: "01",
      title: "Superior Wet & Dry Performance",
      description: "Delivers reliable and consistent braking performance in both wet and dry driving conditions."
    },
    {
      id: "02",
      title: "Corrosion-Resistant Back Plate",
      description: "Features a durable coated back plate that helps prevent rust, extending the lifespan of the brake pads."
    },
    {
      id: "03",
      title: "Chamfered & Slotted Design",
      description: "Optimized pad design helps reduce noise and vibration while promoting even wear for smoother performance."
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-[#f5f5f5] relative">
      <div className="custom-container">
        
        {/* Top Row: Video and Content */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center mb-16">
          
          {/* Left: Video Player */}
          <div 
            className="order-2 xl:order-1 relative w-full aspect-video rounded-2xl overflow-hidden  shadow-xl flex items-center justify-center"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-1"
              className="w-full h-full object-cover"
            />
           
          </div>

          {/* Right: Text Content */}
          <div data-aos="fade-left" className="flex flex-col items-start order-1 xl:order-2">
            <h2 className="section-title text-[var(--color-primary)] font-medium oswald mb-6">
              Efficiency Through Innovation
            </h2>
            <p className="section-text text-[#484848] sora font-normal mb-6 leading-[1.8]">
              DENCKERMANN Brake Pads are designed to deliver reliable stopping power, enhanced safety, and long-lasting performance for a wide range of passenger vehicles. Manufactured using premium friction materials, they provide consistent braking efficiency while minimizing noise, vibration, and brake dust. Engineered for precise OE fitment, these brake pads ensure easy installation, smooth operation, and dependable performance in both everyday driving and demanding road conditions. With excellent heat resistance and wear durability, DENCKERMANN Brake Pads offer confidence, comfort, and control on every journey.
            </p>
            
            <p className="product-title  font-normal oswald text-[var(--color-secondary)] mb-8">
              Trust the experts and choose Denckermann!
            </p>

            {/* Action Button */}
            <Button text="Explore Products"  />
          </div>

        </div>

        {/* Bottom Row: Feature Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[var(--color-primary)] rounded-xl p-8 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] flex items-center justify-center font-normal oswald product-title">
                  {feature.id}
                </div>
                <h3 className="product-title  font-medium oswald  text-white  leading-[1.6]">
                  {feature.title}
                </h3>
              </div>
              <p className="section-text text-[#ffffff] sora font-normal  leading-[1.8]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
