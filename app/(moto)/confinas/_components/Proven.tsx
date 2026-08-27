"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Proven = () => {
  return (
    <section className="w-full bg-secondary py-16 min-[1440px]:py-20 min-[3500px]:py-[120px] relative overflow-hidden">
      <div className="custom-container flex flex-col min-[1440px]:grid min-[1440px]:grid-cols-12 gap-6 min-[1440px]:gap-10 items-center w-full">
        
        {/* Mobile Title (Hidden on Desktop) */}
        <div className="order-1 min-[1440px]:hidden w-full flex flex-col gap-4" data-aos="fade-right">
          <div className="flex items-center gap-4">
            <Typography variant="h2" color="white" className="font-bold leading-tight">
              Proven Battery Power
            </Typography>
            <div className="h-0.5 bg-primary w-12 sm:w-24 shrink-0"></div>
          </div>
        </div>

        {/* Video */}
        <div className="order-2 min-[1440px]:order-2 min-[1440px]:col-span-7 w-full aspect-video relative overflow-hidden " data-aos="zoom-in">
          <DynamicVideoPlayer
            type="short-2"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Content (Text + Button) */}
        <div className="order-3 min-[1440px]:order-1 min-[1440px]:col-span-5 w-full flex flex-col gap-6" data-aos="fade-right">
          
          {/* Desktop Title (Hidden on Mobile) */}
          <div className="hidden min-[1440px]:flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Typography variant="h2" color="white" className="font-bold leading-tight">
                Proven Battery Power
              </Typography>
              <div className="h-0.5 bg-primary w-12 sm:w-24 shrink-0"></div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Typography variant="p" color="white" className="leading-relaxed">
              Every FULBAT battery is engineered to deliver dependable power, exceptional durability, and long-lasting performance across a wide range of demanding applications. By combining advanced battery technologies, precision manufacturing, and strict quality standards, we provide reliable energy solutions trusted by professionals and industries worldwide. From everyday use to high-intensity environments, our batteries are built to perform consistently, support operational efficiency, and reduce downtime. With a strong focus on innovation, reliability, and long service life, FULBAT helps power equipment and vehicles with confidence wherever dependable energy is essential.
            </Typography>
            
            <Typography variant="p" color="white" className="leading-relaxed">
              Our commitment goes beyond performance alone. Each battery is developed to meet the evolving needs of modern users, offering dependable support in critical situations while maintaining the quality and consistency customers expect. This dedication ensures that every FULBAT solution delivers value, reliability, and peace of mind over the long term.
            </Typography>
          </div>

          <div className="mt-2 self-start" data-aos="fade-up" data-aos-delay="100">
             <Button text="Explore" href="#explore" showIcon={false} />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Proven;
