import React from "react";
import Container from "./Container";
import Typography from "./Typography";
import Button from "./Button";

export default function Expertise() {
  const points = [
    {
      id: "01",
      text: "A lubricant is generally an oily fluidic material with the primary function of reducing friction between surfaces in contact."
    },
    {
      id: "02",
      text: "Lubricant minimizes energy loss generated from friction; at the same time it can also be very useful to clean, cool, and prevent metal parts from corrosion & rust."
    },
    {
      id: "03",
      text: "In general, a lubricant is composed of two substances: Base Oils & Additives. Base oil can be divided into four groups, usually depending on the purity level of that oil."
    }
  ];

  return (
    <section className="py-20 md:py-32 w-full bg-[#F9F9F9]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column (Image with Hanger Design) */}
          <div className="relative w-full" data-aos="fade-right">
            {/* Hanger Design */}
            <div className="absolute top-0 left-0 w-full h-full flex justify-center z-0">
              {/* Top Bar */}
              <div className="w-full h-6 md:h-8 bg-[#02152A] absolute top-0 left-0" />
              {/* Vertical Bars */}
              <div className="w-3 md:w-4 h-12 md:h-16 bg-[#02152A] absolute top-6 md:top-8 left-[20%]" />
              <div className="w-3 md:w-4 h-12 md:h-16 bg-[#02152A] absolute top-6 md:top-8 right-[20%]" />
            </div>
            {/* Main Image */}
            <div className="relative z-10 pt-16 md:pt-20">
              <img src="/moto/slider/section7.png" alt="Engine Pistons" className="w-full h-auto object-contain" />
            </div>
          </div>

          {/* Right Column (Text Content) */}
          <div className="flex flex-col" data-aos="fade-left">
            {/* Title Section based on AboutUs style */}
            <div className="relative mb-12 flex flex-col items-start">
              {/* Cropped Number */}
              <div className="absolute top-0 left-0 h-[40px] md:h-[70px] overflow-hidden">
                <span className="font-bebas text-[80px] md:text-[140px] leading-none text-[#2B2B2B]">
                  04
                </span>
              </div>

              {/* Heading */}
              <div className="pt-[40px] md:pt-[70px] relative z-10">
                <Typography
                  variant="h2"
                  color="primary"
                  className="font-bebas tracking-wide leading-none uppercase"
                >
                  WE EXPERTISE
                </Typography>
              </div>
            </div>

            {/* Bullet Points */}
            <div className="flex flex-col gap-8 mb-10">
              {points.map((point) => (
                <div key={point.id} className="flex items-start gap-6">
                  {/* Circle Number */}
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#2B2B2B] shrink-0 flex items-center justify-center">
                    <Typography variant="h6" className="font-poppins text-white leading-none mt-1 font-semibold text-[16px] md:text-[18px]">
                      {point.id}
                    </Typography>
                  </div>
                  {/* Text */}
                  <Typography className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed">
                    {point.text}
                  </Typography>
                </div>
              ))}
            </div>

            {/* Divider Line */}
            <div className="w-full h-[1px] bg-gray-300 mb-8" />

            {/* Button */}
            <div>
              <Button text="OUR CAPABILITIES" variant="dark" className="!py-2.5 !px-6" />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
