"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="relative w-full py-16  bg-white">
      <div className="custom-container flex flex-col items-center justify-center text-center">

        {/* Header Section */}
        <div className="max-w-[90%] md:max-w-[80%] mx-auto mb-12 flex flex-col items-center">
          <div data-aos="fade-down" data-aos-duration="800">
            <Typography variant="h1" font="oswald" color="primary" className="mb-6 tracking-wide font-bold">
              What You Really Need to Know About Us
            </Typography>
          </div>
          <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="800">
            <Typography variant="p" font="lato" className="text-gray-600 leading-relaxed max-w-[95%] md:max-w-[95%]">
              More than fifty years ago the Metelli Group was just a mechanical engineering workshop. Today we manufacture over 13,000 parts that are distributed across 90 countries. We make brakes and hydraulic parts, water pumps, transmission and engine parts with the meticulous quality that northern Italy is famous for. Maybe it's because we're Italian or because we're born with a passion for the automotive world. Who knows? All that really matters is the quality of our parts. And that's something we never forget.
            </Typography>
          </div>
        </div>

        {/* Images Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          <div className="w-full aspect-[4/3] lg:aspect-[16/10] relative rounded-lg overflow-hidden group" data-aos="zoom-in-right" data-aos-duration="1000">
            <img
              src="/moto/metelli-group/section21.png"
              alt="Metelli Group Exhibition Stand"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="w-full aspect-[4/3] lg:aspect-[16/10] relative rounded-lg overflow-hidden group" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="1000">
            <img
              src="/moto/metelli-group/section22.png"
              alt="Metelli Group Reception"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Action Button */}
        <div data-aos="flip-up" data-aos-delay="400" data-aos-duration="800">
          <Button text="Discover Our Story" variant="primary" href="#" />
        </div>

      </div>
    </section>
  );
}
