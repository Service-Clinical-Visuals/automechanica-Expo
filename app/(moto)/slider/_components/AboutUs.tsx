import React from "react";
import Container from "./Container";
import Typography from "./Typography";

export default function AboutUs() {
  const bulletPoints = [
    "Providing high-tech lubricants and greases certified under international ISO standards (9001, 14001, 45001) and accredited by BVQI.",
    "Offering custom, tailor-made products and technical solutions based on extensive production experience."
  ];

  const feature = [
    {
      icon: "Group1.png",
      content: (
        <>
          <span className="text-[#484848]">OVER <span className="text-primary">60</span> YEARS OF</span>
          <br />
          <span className="text-[#484848]">EXPERIENCE</span>
        </>
      )
    },
    {
      icon: "Group2.png",
      content: (
        <>
          <span className="text-[#484848]">GLOBAL PRESENCE ACROSS</span>
          <br />
          <span className="text-primary">25+</span> <span className="text-[#484848]">COUNTRIES</span>
        </>
      )
    },
    {
      icon: "Group3.png",
      content: (
        <>
          <span className="text-[#484848]">EXTENSIVE PORTFOLIO OF</span>
          <br />
          <span className="text-primary">500+</span> <span className="text-[#484848]">PRODUCTS</span>
        </>
      )
    },
    {
      icon: "Group4.png",
      content: (
        <>
          <span className="text-primary">20.000</span> <span className="text-[#484848]">PRODUCTION</span>
          <br />
          <span className="text-[#484848]">CAPACITY TONS/YEAR</span>
        </>
      )
    },
  ];
  return (
    <section className="py-20 md:py-30 w-full bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left Column */}
          <div className="flex flex-col h-full" data-aos="fade-right">
            {/* Title Section */}
            <div className="relative mb-1 flex flex-col items-start">
              {/* Cropped Number */}
              <div className="absolute top-0 left-0 h-[40px] sm:h-[30px] md:h-[70px] overflow-hidden">
                <span className="font-bebas text-[60px] sm:text-[60px] md:text-[130px] leading-none text-[#2B2B2B]">
                  01
                </span>
              </div>

              {/* Heading */}
              <div className="pt-[40px]  sm:pt-[10px] md:pt-[70px] relative z-10">
                <Typography
                  variant="h2"
                  color="primary"
                  className="font-bebas tracking-wider leading-none"
                >
                  ABOUT US
                </Typography>
              </div>
            </div>
            <Typography className="text-gray-600 mb-8  leading-relaxed">
              Since 1963 we have been creating advanced lubrication solutions for automotive, industrial, and marine applications. From our production plant of 16.500sqm in Ritsona, Evia we offer a wide selection of the highest quality European manufactured lubricants and greases, tailored to market needs.
            </Typography>

            <div className="flex flex-col gap-6 mb-12">
              {bulletPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <img src="/moto/slider/drop.png" alt="bullet" className="w-4 h-6 md:w-5 md:h-7 object-contain shrink-0 mt-1" />
                  <Typography className="text-gray-600 leading-relaxed">
                    {point}
                  </Typography>
                </div>
              ))}
            </div>

            {/* Bottom Factory Image */}
            <div className="mt-auto rounded-3xl overflow-hidden w-full h-[300px] md:h-[350px] shadow-lg">
              <img src="/moto/slider/section3.png" alt="Factory" className="w-full h-full object-cover grayscale" />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col h-full justify-between" data-aos="fade-left">
            {/* Top Oil Image */}
            <div className="rounded-3xl overflow-hidden w-full h-[300px] md:h-[400px] shadow-lg mb-8">
              <img src="/moto/slider/section2.png" alt="Oil Lubrication" className="w-full h-full object-cover" />
            </div>

            {/* Bottom Section (Aligned with section3.png) */}
            <div className="mb-12 md:mb-10 flex flex-col">
              {/* Feature Description */}
              <Typography className="text-gray-600 leading-relaxed mb-5">
                Delivering trusted lubricant solutions worldwide with decades of expertise, innovation, and manufacturing excellence.
              </Typography>

              {/* Bottom Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                {feature.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-4 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow">
                    {/* Icon Circle */}
                    <div className="w-16 h-16 md:w-[90px] md:h-[90px] border-[3px] border-[#88ADFF] rounded-full bg-secondary shrink-0 flex items-center justify-center p-2.5">
                      <img src={`/moto/slider/${item.icon}`} alt="icon" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                    </div>
                    {/* Text Layout */}
                    <div className="flex-1 text-center pr-3 sm:pr-5">
                      <p className="font-bebas text-[20px] sm:text-[20x] md:text-[22px] lg:text-[24px] xl:text-[25px] uppercase leading-[1.1] tracking-wide">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
