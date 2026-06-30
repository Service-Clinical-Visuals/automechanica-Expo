"use client";

import React from "react";
import Typography from "./Typography";
import Container from "./Container";
import Button from "./Button";

export default function Racing() {
  return (
    <section className="w-full bg-[#272727] py-16 md:py-24 text-white">
      <Container className="custom-container">

        {/* Top Flex Layout */}
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-8 w-full items-stretch mb-16">

          {/* Left: Image */}
          <div className="w-full xl:w-3/4 min-h-[300px] xl:min-h-full order-2 xl:order-1" data-aos="fade-right">
            <div className="w-full h-full  overflow-hidden bg-[#1a1a1a]">
              <img
                src="/moto/mapetrol/section4.png"
                alt="Mapetrol & Lema Racing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full xl:w-1/2 flex flex-col justify-center space-y-6 order-1 xl:order-2" data-aos="fade-left" data-aos-delay="200">
            <Typography variant="h4" color="white" weight="semibold" className="leading-tight font-orbitron tracking-wide font-medium text-[24px] md:text-[32px]">
              Mapetrol & Lema Racing Powering The AMG GT4
            </Typography>

            <Typography variant="p" className="text-white/60 font-orbitron text-[14px] md:text-[16px] font-medium">
              Unstoppable performance on the racetrack
            </Typography>

            <Typography variant="p" className="text-white text-[13px] leading-relaxed">
              By reducing engine wear, this technology significantly prolongs the lifespan of various components, ensuring they operate efficiently for a longer period. This not only enhances performance but also leads to lower maintenance costs over time.
            </Typography>

            <Typography variant="p" className="text-white text-[13px] leading-relaxed">
              By providing lubricants and oils specifically designed for racing, we help the racing team achieve the best results on the track. We support a talented young driver who is currently competing in the World Series Karting and a five-time freestyle stunt champion.
            </Typography>

            <div className=" my-2">
              <Typography variant="p" className="text-white/60 tracking-wider text-[14px] leading-relaxed font-orbitron">
                "Motorsports has always been our passion, so we support talented drivers in pursuing this passion."
              </Typography>
            </div>

            <div className="pt-3 ">
              <Button variant="primary" className="rounded-xl " text="Explore Products" showIcon={true} />
            </div>
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            "Ready stock of\nproducts",
            "Quality global\nservices",
            "Excellent\nresponse time",
            "Fast and reliable\nlogistics support"
          ].map((text, i) => (
            <div key={i} className="bg-[#484848] rounded-[12px] p-6 md:p-8 flex items-center justify-center text-center hover:bg-[#555] transition-colors cursor-pointer">
              <Typography variant="h3" color="white" className="font-orbitron font-medium whitespace-pre-line text-[13px] md:text-[15px] leading-relaxed">
                {text}
              </Typography>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
