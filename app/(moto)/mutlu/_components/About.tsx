"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function About() {
  return (
    <section className="relative w-full py-16 min-[2500px]:py-24 bg-white">
      <div className="custom-container flex flex-col gap-8">

        <div className="flex flex-col text-center w-full order-1" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="mb-6">
            About Mutlu Akü Ve Malzemeleri San
          </Typography>
          <Typography variant="p" color="dark" className="max-w-full  xl:max-w-[80%] mx-auto leading-relaxed">
            Founded in 1945, Mutlu Battery and Materials Industry Inc. ("Mutlu Battery") began its commercial activities with import and export, and continued with battery production in 1955. Thanks to its investments and quality-oriented production, it has strengthened its position in domestic and international markets and has become one of the most preferred brands in its sector in Türkiye.
          </Typography>
        </div>

        <div className="w-full order-4 xl:order-2 mt-6 xl:mt-0" data-aos="zoom-in" data-aos-delay="200">
          <img
            src="/moto/mutlu/section2.png"
            alt="Mutlu Facilities"
            className="w-full h-auto object-cover rounded-2xl md:rounded-[32px] shadow-lg"
          />
        </div>

        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between w-full gap-6 order-2 xl:order-3 mb-6 xl:mb-0 xl:mt-8" data-aos="fade-up">
          <Typography variant="p" color="dark" className="max-w-full xl:max-w-[70%] leading-relaxed">
            Mutlu Akü, with its 3 factories located in Istanbul and Kütahya and built on a 257-acre plot of land, has a production capacity of 6 million automotive batteries; through technological investments made over the years, it has become a world-class facility.
          </Typography>
          <div className="order-3 xl:order-none w-full flex justify-start xl:justify-end mt-2 xl:mt-0">
            <Button text="Learn More" href="#" showIcon={true} variant="primary" />
          </div>
        </div>

      </div>
    </section>
  );
}
