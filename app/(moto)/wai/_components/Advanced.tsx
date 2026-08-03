"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Advanced = () => {
  return (
    <section className="w-full py-16 min-[3800px]:py-24 bg-primary overflow-hidden">
      <div className="custom-container flex flex-col gap-12 min-[3800px]:gap-20">

        {/* Top Section */}
        <div className="flex flex-col xl:grid xl:grid-cols-12 gap-8 min-[2100px]:gap-12 items-center">

          {/* Content (Mobile: Order 1, Desktop: Col 1-5) */}
          <div className="flex flex-col gap-6 order-1 xl:order-none xl:col-span-5 w-full" data-aos="fade-right">
            <Typography variant="h2" color="white" className="font-bold leading-tight">
              Advanced Manufacturing Excellence
            </Typography>
            <div className="flex flex-col gap-4">
              <Typography variant="p" color="white" className="leading-relaxed opacity-90">
                WAI applies advanced manufacturing practices, intelligent automation, and precision engineering to deliver consistent-quality automotive solutions across a global supply chain. Our state-of-the-art production facilities are designed for maximum efficiency, accuracy, and reliability, supporting the performance standards and production demands of the worldwide aftermarket.
              </Typography>
              <Typography variant="p" color="white" className="leading-relaxed opacity-90">
                Through advanced robotics, laser technology, lean manufacturing, and strict quality controls, WAI ensures reliable components. Our skilled teams combine expertise and innovation to deliver thousands of new product solutions each year.
              </Typography>
            </div>
            <div className="w-fit pt-2">
              <Button text="Know About Us" href="#" showIcon={false} />
            </div>
          </div>

          {/* Video (Mobile: Order 2, Desktop: Col 6-12) */}
          <div className="w-full order-2 xl:order-none xl:col-span-7" data-aos="fade-left">
            <div className="w-full aspect-video relative shadow-2xl overflow-hidden  rounded-2xl ">
              <DynamicVideoPlayer
                type="short-1"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-[3800px]:gap-8" data-aos="fade-up">
          {/* Card 1 */}
          <div className="flex flex-col items-center justify-start text-center gap-4 bg-white rounded-xl p-6 min-[3800px]:p-10 shadow-md">
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center justify-center shrink-0 w-10 h-10 lg:w-12 lg:h-12 min-[3800px]:w-20 min-[3800px]:h-20">
                <img src="/moto/wai/group1.png" alt="Electronic Production" className="w-full h-full object-contain" />
              </div>
              <Typography variant="h3" color="dark" className="font-bold text-left">
                Electronic Production
              </Typography>
            </div>
            <Typography variant="p" color="muted" className="leading-relaxed mt-2">
              Advanced systems ensuring precision and consistent product quality.
            </Typography>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center justify-start text-center gap-4 bg-white rounded-xl p-6 min-[3800px]:p-10 shadow-md">
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center justify-center shrink-0 w-10 h-10 lg:w-12 lg:h-12 min-[3800px]:w-20 min-[3800px]:h-20">
                <img src="/moto/wai/group2.png" alt="Research & Innovation" className="w-full h-full object-contain" />
              </div>
              <Typography variant="h3" color="dark" className="font-bold text-left">
                Research & Innovation
              </Typography>
            </div>
            <Typography variant="p" color="muted" className="leading-relaxed mt-2">
              Innovative solutions developed for future automotive requirements.
            </Typography>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center justify-start text-center gap-4 bg-white rounded-xl p-6 min-[3800px]:p-10 shadow-md">
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center justify-center shrink-0 w-10 h-10 lg:w-12 lg:h-12 min-[3800px]:w-20 min-[3800px]:h-20">
                <img src="/moto/wai/group3.png" alt="Engineering Excellence" className="w-full h-full object-contain" />
              </div>
              <Typography variant="h3" color="dark" className="font-bold text-left">
                Engineering Excellence
              </Typography>
            </div>
            <Typography variant="p" color="muted" className="leading-relaxed mt-2">
              Expert engineering processes focused on performance and reliability.
            </Typography>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center justify-start text-center gap-4 bg-white rounded-xl p-6 min-[3800px]:p-10 shadow-md">
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center justify-center shrink-0 w-10 h-10 lg:w-12 lg:h-12 min-[3800px]:w-20 min-[3800px]:h-20">
                <img src="/moto/wai/group4.png" alt="Quality Control" className="w-full h-full object-contain" />
              </div>
              <Typography variant="h3" color="dark" className="font-bold text-left">
                Quality Control
              </Typography>
            </div>
            <Typography variant="p" color="muted" className="leading-relaxed mt-2">
              Strict inspection standards to maintain product consistency.
            </Typography>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Advanced;
