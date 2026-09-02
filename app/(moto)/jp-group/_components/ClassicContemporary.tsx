"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

const ClassicContemporary = () => {
  return (
    <section className="w-full py-16 min-[2500px]:py-24 min-[3800px]:py-32 bg-white relative overflow-hidden">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-12 min-[2500px]:gap-20 min-[3800px]:gap-32 items-center">

        {/* Left Column: Text Content */}
        <div className="flex flex-col gap-6 min-[2500px]:gap-10 min-[3800px]:gap-14 xl:col-span-3 w-full z-10" data-aos="fade-right">
          <div className="flex flex-col gap-2 min-[2500px]:gap-4 min-[3800px]:gap-6">
            <Typography variant="h5" color="primary" className="font-bold uppercase tracking-wide min-[2500px]:text-3xl min-[3800px]:text-5xl">
              Solution for every Journey
            </Typography>
            <Typography variant="h2" color="dark" className="font-bold leading-tight min-[2500px]:text-6xl min-[3800px]:text-8xl">
              Classic or<br />Contemporary
            </Typography>
          </div>

          <Typography variant="p" color="dark" className="leading-relaxed min-[2500px]:text-2xl min-[3800px]:text-4xl">
            From timeless classics to the latest models - we have the parts and expertise you need.
          </Typography>

          <div className="mt-4 min-[2500px]:mt-8 min-[3800px]:mt-12">
            <Button text="View all Categories" variant="primary" href="#categories" className="!w-fit min-[2500px]:text-xl min-[2500px]:px-10 min-[2500px]:py-4 min-[3800px]:text-3xl min-[3800px]:px-16 min-[3800px]:py-6" />
          </div>
        </div>

        {/* Right Column: Slanted Images */}
        <div className="w-full xl:col-span-9 flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-20 justify-start" data-aos="fade-left">

          {/* Card 1 */}
          <div className="relative group w-full md:flex-1 h-[350px] md:h-[450px] lg:h-[500px] min-[2500px]:h-[800px] min-[3800px]:h-[1300px] overflow-hidden md:[clip-path:polygon(10%_0,100%_0,90%_100%,0%_100%)] cursor-pointer rounded-2xl md:rounded-none">
            {/* Background Image */}
            <img
              src="/moto/jp-group/classic1.png"
              alt="Contemporary Cars"
              className="absolute inset-0 w-full h-full object-cover min-[2500px]:scale-110 min-[3800px]:scale-125 transition-transform duration-700 group-hover:scale-110 min-[2500px]:group-hover:scale-125 min-[3800px]:group-hover:scale-150"
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-[#6666664D] z-10 transition-opacity duration-300 group-hover:bg-[#66666633]" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-start items-start p-10 md:py-12 md:pr-12 md:pl-[calc(3rem+10%)] lg:py-16 lg:pr-16 lg:pl-[calc(4rem+10%)] min-[2500px]:py-24 min-[2500px]:pr-24 min-[2500px]:pl-[calc(6rem+10%)] min-[3800px]:py-32 min-[3800px]:pr-32 min-[3800px]:pl-[calc(8rem+10%)] z-20">
              <Typography variant="h3" color="white" className="font-bold min-[2500px]:text-4xl min-[3800px]:text-6xl mb-2">
                Contemporary Cars
              </Typography>

              <Typography variant="p" color="white" className="text-sm md:text-base min-[2500px]:text-xl min-[3800px]:text-3xl opacity-90 mb-6">
                Workshop // Information //<br />Aftermarket Spare Parts
              </Typography>

              <div className="w-10 h-10 md:w-12 md:h-12 min-[2500px]:w-20 min-[2500px]:h-20 min-[3800px]:w-28 min-[3800px]:h-28 rounded-full bg-[#E11313] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group w-full md:flex-1 h-[350px] md:h-[450px] lg:h-[500px] min-[2500px]:h-[800px] min-[3800px]:h-[1300px] overflow-hidden md:[clip-path:polygon(10%_0,100%_0,90%_100%,0%_100%)] cursor-pointer rounded-2xl md:rounded-none">
            {/* Background Image */}
            <img
              src="/moto/jp-group/classic2.png"
              alt="Classic Cars"
              className="absolute inset-0 w-full h-full object-cover min-[2500px]:scale-110 min-[3800px]:scale-125 transition-transform duration-700 group-hover:scale-110 min-[2500px]:group-hover:scale-125 min-[3800px]:group-hover:scale-150"
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-[#6666664D] z-10 transition-opacity duration-300 group-hover:bg-[#66666633]" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-start items-start p-10 md:py-12 md:pr-12 md:pl-[calc(3rem+10%)] lg:py-16 lg:pr-16 lg:pl-[calc(4rem+10%)] min-[2500px]:py-24 min-[2500px]:pr-24 min-[2500px]:pl-[calc(6rem+10%)] min-[3800px]:py-32 min-[3800px]:pr-32 min-[3800px]:pl-[calc(8rem+10%)] z-20">
              <Typography variant="h3" color="white" className="font-bold min-[2500px]:text-4xl min-[3800px]:text-6xl mb-2">
                Classic Cars
              </Typography>

              <Typography variant="p" color="white" className="text-sm md:text-base min-[2500px]:text-xl min-[3800px]:text-3xl opacity-90 mb-6">
                Workshop // Information //<br />Spare Parts for Classic Cars
              </Typography>

              <div className="w-10 h-10 md:w-12 md:h-12 min-[2500px]:w-20 min-[2500px]:h-20 min-[3800px]:w-28 min-[3800px]:h-28 rounded-full bg-[#E11313] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ClassicContemporary;
