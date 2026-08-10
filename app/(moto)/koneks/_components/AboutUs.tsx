"use client";

import React from "react";
import Typography from "./Typography";

export default function AboutUs() {
  return (
    <section className="w-full py-16 bg-[#0F0F0F] overflow-hidden">
      <div className="custom-container flex flex-col gap-10 lg:gap-14 items-center">

        {/* Header Block: Title and Text centered */}
        <div className="flex flex-col items-center text-center xl:max-w-[70%] mx-auto" data-aos="fade-up">
          <Typography variant="h2" color="white" className="font-semibold mb-6">
            About KONEKS
          </Typography>
          <Typography variant="p" color="white" className="leading-relaxed ">
            KONEKS, who launched its business in 1992, manufactures liners, pistons and piston pins for engines in a 10.000 m2 closed and 30.000 m2 open area facility. 9 engineers, 15 technician and 221 employees serve Koneks customers in a professional manner. Konek's manufacturing line adopted latest technology with its Japanese, German, Italian and Taiwanese origin machines. Quality control is done with the latest technology precision machines in order to achieve 100% customer satisfaction.
          </Typography>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8 w-full">
          <div className="w-full aspect-[820/584] border border-white/40 overflow-hidden" data-aos="fade-up" data-aos-delay="100">
            <img
              src="/moto/koneks/section21.jpg"
              alt="KONEKS Facility 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-[820/584] border border-white/40 overflow-hidden" data-aos="fade-up" data-aos-delay="200">
            <img
              src="/moto/koneks/section22.jpg"
              alt="KONEKS Facility 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
