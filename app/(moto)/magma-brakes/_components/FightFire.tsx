"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { ArrowUpRight } from "lucide-react";

export default function FightFire() {
  return (
    <section
      className="relative w-full py-16 md:py-25  bg-white"
      style={{
        backgroundImage: "url('/moto/magma-brakes/Background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="custom-container flex flex-col items-center">

        {/* Top Header Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center  gap-6 mb-16" data-aos="fade-up">

          {/* Text Content */}
          <div className="flex flex-col gap-3 max-w-full lg:max-w-[70%]  ">
            <Typography variant="h1" color="dark" weight="bold" className="font-oswald uppercase leading-tight">
              MAGMA USES FIRE TO FIGHT FIRE
            </Typography>
            <Typography variant="p" color="muted" className="font-oswald w-full leading-relaxed">
              For nearly 20 years, MAGMA Brakes has manufactured premium brake pads, rotors, shoes, drums, and brake hardware. With experienced industry professionals and advanced engineering, we deliver reliable braking solutions built for safety, performance, and durability.
            </Typography>
          </div>


          {/* Round Black Arrow Button */}
          <button className="hidden md:flex shrink-0 items-center justify-center w-16 h-16  2xl:w-19 2xl:h-19 bg-[#111111] hover:bg-black rounded-full transition-transform hover:scale-105 active:scale-95 group">
            <ArrowUpRight size={33} strokeWidth={2} className="text-white  xl:w-12 xl:h-12 2xl:w-20 2xl:w-20 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
        <div className="border-black/30 border-t w-full  h-[100px]" />

        {/* Main Image */}
        <div className="w-full  mx-auto mb-12" data-aos="zoom-in" data-aos-delay="200">
          <img
            src="/moto/magma-brakes/section2.png"
            alt="Magma Brakes Products Assortment"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Bottom CTA */}
        <div data-aos="fade-up" data-aos-delay="400">
          <Button
            text="LEARN MORE ABOUT US"
            href="#about"
            showIcon={false}
          />
        </div>

      </div>
    </section>
  );
}
