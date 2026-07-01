"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function BrakingSystem() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="custom-container flex flex-col">

        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
          <div className="flex flex-col gap-3 max-w-full lg:max-w-[70%]" data-aos="fade-right">
            <Typography variant="h1" color="dark" weight="bold" className="font-oswald uppercase leading-tight">
              HEAT IS THE ENEMY OF A BRAKING SYSTEM
            </Typography>
            <Typography variant="p" color="muted" className="font-oswald  text-[#6E777D] text-[14px] md:text-[16px] leading-relaxed">
              Modern driving conditions generate intense braking heat that can reduce stopping performance and increase component wear. MAGMA Brakes are engineered to withstand these demanding conditions, delivering consistent, reliable braking when you need it most.
            </Typography>
          </div>

          <div className="shrink-0 pt-2" data-aos="fade-left">
            <Link
              href="#learn-more"
              className="w-12 h-12 md:w-16 md:h-16 2xl:w-19 2xl:h-19  rounded-full bg-[#111111] flex items-center justify-center group hover:bg-[var(--color-primary)] transition-colors duration-300"
            >
              <ArrowUpRight className="text-white w-6 h-6 md:w-8 md:h-8 xl:w-12 xl:h-12 2xl:w-12 2xl:h-12 transform group-hover:scale-110 transition-transform" strokeWidth={2} />
            </Link>
          </div>
        </div>

        {/* Separator Line */}
        <hr className="w-full border-t border-gray-300 mb-12" />

        {/* Image Gallery */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-16">
          <div className="w-full aspect-[4/3] md:aspect-auto overflow-hidden bg-black shadow-lg" data-aos="fade-up">
            <img
              src="/moto/magma-brakes/section4.png"
              alt="Magma Brake Components on Fire Background"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="w-full aspect-[4/3] md:aspect-auto overflow-hidden bg-black shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <img
              src="/moto/magma-brakes/section5.png"
              alt="Magma Brake Components on Fire Background 2"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Bottom Content */}
        <div className="flex flex-col items-center text-center gap-8 max-w-[70%] mx-auto" data-aos="fade-up">
          <Typography variant="p" color="muted" className="font-oswald text-[#6E777D] leading-relaxed">
            Heat has a negative impact on vehicle brake system components and their performance. High temperatures lead to increased noise, reduced stopping power, increased brake fade, and drastically shortened overall brake life are just some of the effects.
          </Typography>

          <Button
            text="VIEW MORE ABOUT MAGMA"
            href="#about"
            showIcon={false}
          />
        </div>

      </div>
    </section>
  );
}
