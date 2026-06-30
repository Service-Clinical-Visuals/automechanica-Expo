"use client";

import React from "react";
import Button from "./Button";
import Typography from "./Typography";
import Container from "./Container"; // Assuming Container exists, if not I will create it. Wait, I should import from exol or create it.

const AboutUs = () => {
  return (
    <section id="about" className="w-full bg-[#111111] py-16 md:py-24 text-white">
      <Container className="custom-container">
        {/* Main Flex Layout */}
        <div className="flex flex-col xl:flex-row gap-12 lg:gap-16 items-stretch">

          {/* Content side */}
          <div className="w-full xl:w-1/2 flex flex-col gap-8" data-aos="fade-right">

            <div className="space-y-6">
              {/* Heading (Outlined Orbitron) */}
              <Typography variant="h2" outline={true} color="white" weight="bold" className="mb-4">
                About Our Company
              </Typography>

              <Typography variant="p" className="text-white leading-[1.6]">
                With Over A Century Of Experience In Developing Premium Lubricants And Oils. We Are One Of The Oldest And Most Respected Manufacturers In Europe. We Don't Just Focus On Business – We Strive To Build Genuine And Lasting Relationships With Both Customers And Partners. Backed By Fast And Reliable Global Logistics Partners, We Ensure On-Time Delivery And Ongoing Support. Our Dedicated Laboratory Team And Test Chamber Allow Us To Stay At The Forefront Of New Technologies And Offer You Innovative Solutions Tailored To Your Needs.
              </Typography>

              <div className="pt-2">
                <Button variant="secondary" text="Find More" showIcon={true} />
              </div>
            </div>

            {/* Statistics Circles */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 mt-4 border-t border-white">

              <div className="flex flex-col items-center text-center gap-4 group" data-aos="fade-up" data-aos-delay="0">
                <div className="w-[105px] h-[105px] min-[1920px]:w-[140px] min-[1920px]:h-[140px] min-[2500px]:w-[180px] min-[2500px]:h-[180px] min-[3800px]:w-[240px] min-[3800px]:h-[240px] rounded-full bg-[#5A5A5A] flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <Typography variant="h5" color="white" className="font-orbitron font-bold leading-none">10+</Typography>
                  <Typography variant="h6" color="white" className="font-orbitron font-medium mt-1">Million</Typography>
                </div>
                <Typography variant="h6" className="text-white leading-tight font-manrope font-normal">
                  Liters Of Oil<br />Per Year
                </Typography>
              </div>

              <div className="flex flex-col items-center text-center gap-4 group" data-aos="fade-up" data-aos-delay="100">
                <div className="w-[105px] h-[105px] min-[1920px]:w-[140px] min-[1920px]:h-[140px] min-[2500px]:w-[180px] min-[2500px]:h-[180px] min-[3800px]:w-[240px] min-[3800px]:h-[240px] rounded-full bg-[#5A5A5A] flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <Typography variant="h5" color="white" className="font-orbitron font-bold leading-none">3+</Typography>
                  <Typography variant="h6" color="white" className="font-orbitron font-medium mt-1">Million</Typography>
                </div>
                <Typography variant="h6" className="text-white leading-tight font-manrope font-normal">
                  Liters Of<br />Continuous Supply
                </Typography>
              </div>

              <div className="flex flex-col items-center text-center gap-4 group" data-aos="fade-up" data-aos-delay="200">
                <div className="w-[105px] h-[105px] min-[1920px]:w-[140px] min-[1920px]:h-[140px] min-[2500px]:w-[180px] min-[2500px]:h-[180px] min-[3800px]:w-[240px] min-[3800px]:h-[240px] rounded-full bg-[#5A5A5A] flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <Typography variant="h5" color="white" className="font-orbitron  font-bold leading-none">48</Typography>
                  <Typography variant="h6" color="white" className="font-orbitron font-medium mt-1 leading-tight text-center px-2">Thousand<br />Tons</Typography>
                </div>
                <Typography variant="h6" className="text-white leading-tight font-manrope font-normal">
                  Full Production<br />Capacity
                </Typography>
              </div>

              <div className="flex flex-col items-center text-center gap-4 group" data-aos="fade-up" data-aos-delay="300">
                <div className="w-[105px] h-[105px] min-[1920px]:w-[140px] min-[1920px]:h-[140px] min-[2500px]:w-[180px] min-[2500px]:h-[180px] min-[3800px]:w-[240px] min-[3800px]:h-[240px] rounded-full bg-[#5A5A5A] flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <Typography variant="h5" color="white" className="font-bold font-orbitron leading-none">80</Typography>
                  <Typography variant="h6" color="white" className="font-orbitron font-medium mt-1">Tons</Typography>
                </div>
                <Typography variant="h6" className="text-white leading-tight font-manrope font-normal">
                  Mixing Capacity<br />Of Each Batch
                </Typography>
              </div>

            </div>
          </div>

          {/* Image side */}
          <div className="w-full xl:w-1/2 flex" data-aos="fade-left">
            <div className="rounded-[16px] overflow-hidden shadow-2xl relative w-full flex-1 border-[3px] border-white min-h-[300px]">
              <img
                src="/moto/mapetrol/section2.png"
                alt="Factory production line"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-24">

          <div className="border border-[#2a2a2a] font-orbitron rounded-[10px] p-6 sm:p-8 bg-transparent transition-colors flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="0">
            <Typography variant="h4" color="white" className="mb-4 w-full border-b border-white pb-4 text-[16px] md:text-[18px]">
              Strict Standards
            </Typography>
            <Typography variant="p" className=" text-white leading-relaxed">
              We carefully select and test raw materials, control mixing, and inspect final packaging - every batch meets the highest performance standards.
            </Typography>
          </div>

          <div className="border border-[#2a2a2a]  font-orbitron rounded-[10px] p-6 sm:p-8 bg-transparent transition-colors flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="150">
            <Typography variant="h4" color="white" className="mb-4 w-full border-b border-white pb-4 text-[16px] md:text-[18px]">
              Innovative Technology
            </Typography>
            <Typography variant="p" className=" text-white leading-relaxed">
              We carefully select and test raw materials, control mixing, and inspect final packaging - every batch meets the highest performance standards.
            </Typography>
          </div>

          <div className="border border-[#2a2a2a]  font-orbitron rounded-[10px] p-6 sm:p-8 bg-transparent transition-colors flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="300">
            <Typography variant="h4" color="white" className="mb-4 w-full border-b border-white pb-4 text-[16px] md:text-[18px]">
              Design Aesthetics
            </Typography>
            <Typography variant="p" className="text-white leading-relaxed">
              We develop our lubricants in our own laboratory, with a focus on improving engine performance and extending equipment life.
            </Typography>
          </div>

        </div>

      </Container>
    </section>
  );
};

export default AboutUs;
