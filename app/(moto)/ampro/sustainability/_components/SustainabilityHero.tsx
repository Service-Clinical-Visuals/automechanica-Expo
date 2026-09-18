"use client";

import React from "react";
import Typography from "../../_components/Typography";

const SustainabilityHero = () => {
  return (
    <section className="relative w-screen flex flex-col items-center overflow-hidden bg-primary/90 2xl:bg-transparent">
      {/* Background Image: 
          - On mobile & tablet (< 2xl): absolute, covers the background, anchored to bottom to keep the curve.
          - On desktop (2xl+): static, object-contain, dictates the exact section height.
      */}
      <img
        src="/moto/ampro/bg-2.png"
        alt="Sustainability Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-bottom 2xl:static 2xl:w-screen 2xl:h-auto 2xl:object-contain z-0"
      />

      {/* Content Overlaid 
          - On mobile & tablet (< 2xl): relative, provides height to the section via document flow. Massive padding-bottom to avoid the curve.
          - On desktop (2xl+): absolute inset-0, overlays the static image.
      */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center px-4 md:px-6 pt-[120px] pb-[180px] md:pb-[250px] 2xl:absolute 2xl:inset-0 2xl:pt-[120px] 2xl:pb-0">
        <Typography
          variant="h2"
          color="white"
          className="font-bold mb-4 md:mb-6"
          data-aos="fade-up"
        >
          Sustainability
        </Typography>

        <Typography
          variant="p"
          color="white"
          className="xl:max-w-[40%] leading-relaxed mb-6 md:mb-8 text-white/90 md:text-white"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          We are committed to sustainable solutions that reduce environmental impact, conserve resources, and
          support a cleaner automotive industry. Through responsible technologies, efficient processes, and eco-
          friendly practices, we aim to contribute to a more sustainable future.
        </Typography>

        <div
          className="flex items-center gap-2 text-white/80 font-semibold tracking-wider text-xs md:text-sm lg:text-base uppercase"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h5 className="text-white">HOME</h5>
          <h5 className="text-white">&gt;</h5>
          <h5 className="text-white">SUSTAINABILITY</h5>
        </div>
      </div>

    </section>
  );
};

export default SustainabilityHero;
