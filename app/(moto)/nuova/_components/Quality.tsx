"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const Quality = () => {
  return (
    <section id="quality" className="w-full py-16 min-[3800px]:py-25 text-white relative bg-secondary">
      <div className="custom-container relative z-10 flex flex-col gap-10">

        <div className="w-full flex flex-col xl:grid xl:grid-cols-12 gap-10 xl:gap-8 items-center ">

          {/* Left Content - Text */}
          <div className="order-1 xl:col-span-5 w-full flex flex-col gap-6" data-aos="fade-right">
            <Typography variant="h2" color="white" className="font-bold leading-tight">
              Quality, Environmental & Safety Management System
            </Typography>
            <div className="flex flex-col gap-6">
              <Typography variant="span" color="white" className="leading-relaxed ">
                Nuova Tecnodelta maintains its strong position in the automotive spare parts market through continuous innovation, high-quality standards, and a strong commitment to customer satisfaction. Its integrated quality system manages every stage from product design and manufacturing to testing, distribution, and delivery, ensuring reliable performance and consistent results.
              </Typography>
              <Typography variant="span" color="white" className="leading-relaxed ">
                Focused on achieving zero risk in products, processes, environment, and workplace safety, Nuova Tecnodelta follows strict quality and management standards. These practices support the company's commitment to excellence, sustainability, responsible manufacturing, and safe working conditions.
              </Typography>
            </div>
            <div className="mt-4">
              <Button text="Explore" showIcon={false} />
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="order-2 xl:col-span-7 w-full aspect-video relative shadow-2xl overflow-hidden  rounded-2xl" data-aos="zoom-in">
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Quality;
