"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Users, ShoppingCart, UserCheck } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="w-full py-16 lg:py-20 bg-[#1E1E1E] overflow-hidden" id="about">
      <div className="custom-container flex flex-col gap-14 lg:gap-20">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-white/10 pb-10">
          <div className="lg:w-2/3 flex flex-col gap-4">
            <Typography variant="h1" color="white" className="font-semibold leading-tight">
              Who We Are
            </Typography>
            <Typography variant="p" color="white" className="text-white/80 leading-relaxed text-sm md:text-base max-w-5xl">
              Vitobello Ricambi S.r.l. delivers premium engine, gearbox, and spare parts solutions backed by quality, innovation, and reliable service, supporting the evolving needs of the global automotive aftermarket with trusted expertise and excellence.
            </Typography>
          </div>
          <div className="shrink-0">
            <Button text="Discover Our Story" href="#story" showIcon={true} />
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col lg:flex-row items-stretch relative pt-10 pb-10 w-full gap-6 lg:gap-0">
          {/* Left Text Box */}
          <div className="lg:w-[45%] xl:w-[70%] p-8 lg:p-15 flex flex-col justify-center gap-8 bg-[#222] border border-white/50 border-r-0 rounded-l-sm z-0">
            <Typography variant="h1" color="white" className="leading-snug mb-2 font-semibold">
              We Project Our Experience, Toward An Innovative Future
            </Typography>
            <Typography variant="p" color="white" className="text-white/80 text-sm leading-relaxed">
              After 50 years in the Automotive market, Vitobello Ricambi still expresses enthusiasm and will to grow and it does so also through important innovations. They were strengthened sales channels, starting with the revision of the website with a new look and a new B2B e-commerce site more "user friendly", coupled with a more powerful and efficient management system.
            </Typography>
            <Typography variant="p" color="white" className="text-white/80 text-sm leading-relaxed">
              Vitobello Ricambi, with more than 25,000 top-quality products in stock, ready to deliver for engine overhaul and maintenance provides spare parts for all European, Korean and Japanese cars and business vehicles.
            </Typography>
            <Typography variant="h6" className="text-primary uppercase tracking-wide mt-2 font-bold">
              VITOBELLO SPARE PARTS CELEBRATES 50 YEARS IN BUSINESS
            </Typography>
          </div>

          {/* Middle Image */}
          <div className="lg:w-[35%] xl:w-[38%] relative z-10 min-h-[300px] flex-shrink-0 flex items-center justify-center">
            <img
              src="/moto/vitobello/abt.png"
              alt="Experience"
              className="w-full h-auto lg:w-[533px] lg:h-[658px] lg:max-w-none lg:absolute lg:top-[50%] lg:left-[40%] lg:-translate-x-1/2 lg:-translate-y-1/2 shadow-2xl rounded-sm object-cover"
            />
          </div>

          {/* Right Stats Boxes */}
          <div className="lg:w-[20%] xl:w-[40%] -ml-20 flex flex-col gap-4 lg:gap-6 justify-between z-0">
            <div className="flex-1 border border-white/50 bg-[#222] p-4 xl:p-6 flex flex-col xl:flex-row items-center gap-4 rounded-sm shadow-lg">
              <div className="shrink-0">
                <img src="/moto/vitobello/abt1.png" alt="Satisfied Customer" className="w-auto h-auto object-contain" />
              </div>
              <div className="flex flex-col items-center xl:items-start text-center xl:text-left flex-1">
                <Typography variant="h3" color="white" className="font-bold text-lg xl:text-2xl">2,465 <span className="text-primary">+</span></Typography>
                <Typography variant="span" color="white" className="text-white/80 text-xs xl:text-sm font-medium mt-1">Satisfied Customer</Typography>
              </div>
            </div>

            <div className="flex-1 border border-white/50 bg-[#222] p-4 xl:p-6 flex flex-col xl:flex-row items-center gap-4 rounded-sm shadow-lg">
              <div className="shrink-0">
                <img src="/moto/vitobello/abt2.png" alt="Sold Products" className="w-auto h-auto object-contain" />
              </div>
              <div className="flex flex-col items-center xl:items-start text-center xl:text-left flex-1">
                <Typography variant="h3" color="white" className="font-bold text-lg xl:text-2xl">25,042 <span className="text-primary">+</span></Typography>
                <Typography variant="span" color="white" className="text-white/80 text-xs xl:text-sm font-medium mt-1">Sold Products</Typography>
              </div>
            </div>

            <div className="flex-1 border border-white/50 bg-[#222] p-4 xl:p-6 flex flex-col xl:flex-row items-center gap-4 rounded-sm shadow-lg">
              <div className="shrink-0">
                <img src="/moto/vitobello/abt3.png" alt="Employees" className="w-auto h-auto object-contain" />
              </div>
              <div className="flex flex-col items-center xl:items-start text-center xl:text-left flex-1">
                <Typography variant="h3" color="white" className="font-bold text-lg xl:text-2xl">25 <span className="text-primary">+</span></Typography>
                <Typography variant="span" color="white" className="text-white/80 text-xs xl:text-sm font-medium mt-1">Employees</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
