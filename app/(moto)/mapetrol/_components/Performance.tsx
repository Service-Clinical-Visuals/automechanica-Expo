"use client";

import React from "react";
import Typography from "./Typography";
import Container from "./Container";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";
import { Wrench } from "lucide-react";

export default function Protection() {
  return (
    <section className="w-full bg-[#272727] py-16 md:py-24 text-white">
      <Container className="custom-container">

        {/* Main Flex Layout */}
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-8 items-center">

          {/* Left: Video */}
          <div className="w-full xl:w-4/5 order-2 xl:order-1 " data-aos="fade-right">
            <div className="w-full aspect-[16/9] bg-[#1a1a1a] relative overflow-hidden rounded-md  shadow-xl">
              <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full xl:w-1/2 flex flex-col space-y-8 order-1 xl:order-2" data-aos="fade-left" data-aos-delay="200">
            <div className="space-y-4">
              <Typography variant="h4" color="white" className=" font-orbitron font-medium tracking-wide ">
                Engineered For Peak Performance
              </Typography>
              <Typography variant="p" className="text-white  leading-relaxed">
                Mapetrol develops premium lubricants and automotive solutions that combine innovation, quality, and reliability. Our products are formulated to provide outstanding engine protection, improve fuel efficiency, and ensure smooth operation across a wide range of vehicles and machinery. Built to meet international performance standards, Mapetrol helps keep engines running cleaner, stronger, and longer.
              </Typography>
            </div>

            <div className="flex flex-col gap-8">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <div className="w-12 h-12 min-[1920px]:w-16 min-[1920px]:h-16 min-[2500px]:w-20 min-[2500px]:h-20 min-[3800px]:w-28 min-[3800px]:h-28 rounded-full bg-white/10 border border-transparent flex items-center justify-center text-white/80">
                    <Wrench className="w-5 h-5 min-[1920px]:w-7 min-[1920px]:h-7 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Typography variant="h3" color="white" className="font-orbitron">
                    Advanced Protection
                  </Typography>
                  <Typography variant="p" className="text-white leading-relaxed">
                    By reducing engine wear, this technology significantly prolongs the lifespan of various components, ensuring they operate efficiently for a longer period. This not only enhances performance but also leads to lower maintenance costs over time.
                  </Typography>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <div className="w-12 h-12 min-[1920px]:w-16 min-[1920px]:h-16 min-[2500px]:w-20 min-[2500px]:h-20 min-[3800px]:w-28 min-[3800px]:h-28 rounded-full bg-white/10 border border-transparent flex items-center justify-center text-white/80">
                    <Wrench className="w-5 h-5 min-[1920px]:w-7 min-[1920px]:h-7 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Typography variant="h3" color="white" className="font-orbitron">
                    Superior Performance
                  </Typography>
                  <Typography variant="p" className="text-white text-[12px] leading-relaxed">
                    Guaranteeing a seamless driving experience, our system is designed to perform exceptionally well in a variety of driving conditions, whether it's rain, snow, or bright sunshine.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-10 border-t border-white/70 flex flex-col md:flex-row items-center justify-between gap-6" data-aos="fade-up" data-aos-delay="400">
          <Typography variant="h4" color="white" className="text-[15px] md:text-[16px] leading-relaxed max-w-[70%] text-center md:text-left font-orbitron font-medium">
            We are committed to delivering premium lubricants that combine advanced technology with dependable performance.
          </Typography>
          <div className="shrink-0 ">
            <Button
              variant="primary"
              text="Explore Products"
              className=" button-responsive"
              showIcon={true}
            />
          </div>
        </div>

      </Container>
    </section>
  );
}
