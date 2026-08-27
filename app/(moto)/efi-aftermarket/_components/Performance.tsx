"use client";

import React from "react";
import Button from "./Button";
import Typography from "./Typography";
import Container from "./Container";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Performance = () => {
  return (
    <section id="our-ranges" className="py-10 md:py-15 bg-white">
      <Container>
        {/* Top Section: Text and Video */}
        <div className="grid grid-cols-1 xl:grid-cols-12 items-center gap-8 lg:gap-6 w-full mb-10 md:mb-14">

          {/* Left: Content (appears first on mobile/tablet) */}
          <div
            className="col-span-1 xl:col-span-5 flex flex-col justify-center space-y-8 order-1"
            data-aos="fade-right"
          >
            <div className="relative inline-block mb-8">
              <Typography variant="h2" color="dark" className="font-bold leading-tight">
                Precision Ignition. <div className="inline text-[var(--color-primary)]">Reliable Performance.</div>
              </Typography>
              <div className="absolute -left-4 md:-left-6 -bottom-2 w-16 md:w-20 h-1 rounded-xl bg-[var(--color-primary)]"></div>
            </div>

            <Typography variant="p" color="dark" className="leading-relaxed ">
              An essential part of the ignition system, the coil's basic function is to transform the battery's low voltage energy into a high voltage signal (30,000V), thus generating a spark at the spark plug terminals which will allow the ignition of the air/fuel mixture. It is thus directly involved in the combustion process in a petrol engine.
            </Typography>

            <Typography variant="p" color="dark" className="leading-relaxed ">
              Designed for use in ignition in more severe combustion chamber conditions, its main advantages are improved fuel efficiency, reduced weight and size of the ignition function, and ease of installation on the engine. Over the years, there have been many generations of coils: from the oldest "classic" oil system to the latest generation of individual coils, connected directly to the spark plug, to ramp or twin coils.
            </Typography>

            <div className="pt-4">
              <Button text="Explore Our Products" variant="primary" href="#products" />
            </div>
          </div>

          {/* Right: 360 Video (appears second on mobile/tablet) */}
          <div
            className="col-span-1 xl:col-span-7 order-2"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="w-full aspect-video   overflow-hidden relative shadow-lg ">
              <DynamicVideoPlayer
                className="w-full h-full object-cover"
                type="360"
              />
            </div>
          </div>

        </div>

        {/* Bottom Section: Product Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          <div
            className="w-full aspect-[16/9] xl:aspect-[4/3] rounded-2xl border-2 border-[var(--color-primary)] overflow-hidden shadow-sm flex items-center justify-center p-6 bg-white transition-transform hover:-translate-y-2 duration-300"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <img src="/moto/efi-aftermarket/performance1.png" alt="EFI Ignition Coil" className="w-full h-full object-cover  group-hover:scale-[1.25] transition-transform duration-300" />
          </div>

          <div
            className="w-full aspect-[16/9] xl:aspect-[4/3] rounded-2xl border-2 border-[var(--color-primary)] overflow-hidden shadow-sm flex items-center justify-center p-6 bg-white transition-transform hover:-translate-y-2 duration-300"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <img src="/moto/efi-aftermarket/performance2.png" alt="EFI Ignition Wires" className="w-full h-full object-cover" />
          </div>

          <div
            className="w-full aspect-[16/9] xl:aspect-[4/3] rounded-2xl border-2 border-[var(--color-primary)] overflow-hidden shadow-sm flex items-center justify-center p-6 bg-white transition-transform hover:-translate-y-2 duration-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img src="/moto/efi-aftermarket/performance3.png" alt="EFI Distributor" className="w-full h-full object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Performance;
