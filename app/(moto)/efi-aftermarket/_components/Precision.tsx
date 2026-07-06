"use client";

import React from "react";
import Button from "./Button";
import Typography from "./Typography";
import Container from "./Container";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Precision = () => {
  return (
    <section id="precision" className="py-10 md:py-10 bg-[#F8F9FA]">
      <Container>
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center text-center mb-8" data-aos="fade-up">
          <div className="relative inline-block mb-4">
            <Typography variant="h2" color="dark" className="font-semibold">
              Precision Ignition Starts Here
            </Typography>
            <div className="absolute -left-4 md:-left-6 -bottom-2 w-16 md:w-20 h-1 rounded-xl bg-[var(--color-primary)]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-8 w-full items-center">

          {/* Left: Content (span-5) */}
          <div
            className="col-span-1 xl:col-span-5 flex flex-col justify-center space-y-8 order-2 xl:order-1"
            data-aos="fade-right"
          >
            <Typography variant="p" color="dark" className="leading-relaxed text-black   ">
              Engineered for maximum efficiency and long-lasting durability, our ignition coils deliver consistent spark energy for smooth engine operation, improved fuel efficiency, and reduced emissions. Designed to meet or exceed OEM specifications.
            </Typography>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-5">
                <div className="w-15 h-15 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white font-bold text-2xl shrink-0 shadow-md">
                  01
                </div>
                <div className="pt-1">
                  <Typography variant="p" className="leading-relaxed text-black ">
                    <strong className="font-semibold">OEM-Quality Performance</strong> - Precision-engineered to ensure reliable ignition and optimal engine efficiency.
                  </Typography>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-5">
                <div className="w-15 h-15 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white font-bold text-2xl shrink-0 shadow-md">
                  02
                </div>
                <div className="pt-1">
                  <Typography variant="p" className="leading-relaxed text-black ">
                    <strong className="font-semibold">High Heat & Vibration Resistance</strong> - Built with premium materials to withstand demanding operating conditions.
                  </Typography>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-5">
                <div className="w-15 h-15 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white font-bold text-2xl shrink-0 shadow-md">
                  03
                </div>
                <div className="pt-1">
                  <Typography variant="p" className="leading-relaxed text-black ">
                    <strong className="font-semibold">Wide Vehicle Compatibility</strong> - Available for a broad range of European, Asian, and American vehicle applications.
                  </Typography>
                </div>
              </div>
            </div>

            <div className="pt-4 ">
              <Button text="LEARN MORE ABOUT US" variant="secondary" />
            </div>
          </div>

          {/* Right: Video (span-7) */}
          <div
            className="col-span-1 xl:col-span-7 order-1 xl:order-2"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="w-full aspect-[4/3] md:aspect-video bg-[url('https://transparenttextures.com/patterns/cubes.png')]  overflow-hidden relative shadow-lg flex items-center justify-center">
              <DynamicVideoPlayer type="short-1" />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Precision;
