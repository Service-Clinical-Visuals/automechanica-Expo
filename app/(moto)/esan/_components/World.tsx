"use client";

import React from "react";
import Typography from "./Typography";

const features = [
  {
    id: "01",
    title: "Technological Power",
    desc: "At Esan Akü R&D Center, we innovate continuously to deliver advanced, high-quality battery technologies that meet evolving industry demands.",
    blueBg: true,
    shape: "rightLeaning", // / /
    row: 1
  },
  {
    id: "02",
    title: "Affordable Price",
    desc: "We deliver high-quality products at competitive prices, ensuring performance, reliability, and excellent customer value.",
    blueBg: false,
    shape: "rect", // | |
    row: 1
  },
  {
    id: "03",
    title: "Logistics",
    desc: "Our strategic location near major highways, ports, rail networks, and the Gebze Bridge ensures fast, efficient distribution.",
    blueBg: true,
    shape: "leftLeaning", // \ \
    row: 1
  },
  {
    id: "04",
    title: "Widespread Dealer Network",
    desc: "We deliver high-quality products at competitive prices, ensuring performance, reliability, and excellent customer value.",
    blueBg: false,
    shape: "rightLeaning", // / /
    row: 2
  },
  {
    id: "05",
    title: "Product Variety",
    desc: "We simplify your needs with a wide range of batteries for passenger, commercial, and industrial applications—delivering reliable performance for every use.",
    blueBg: true,
    shape: "rect", // | |
    row: 2
  },
  {
    id: "06",
    title: "Customer Service",
    desc: "Our dedicated customer service team is always ready to assist, providing prompt and reliable support whenever you need it.",
    blueBg: false,
    shape: "leftLeaning", // \ \
    row: 2
  }
];

const getSkewConfig = (shape: string, row: number) => {
  if (shape === "rect") return { outer: "", inner: "", width: "w-full" };

  // TOP LEFT — 01
  if (shape === "rightLeaning" && row === 1) {
    return { outer: "-skew-x-[12.6deg]", inner: "skew-x-[12.6deg]", width: "w-[90%] mx-auto" };
  }

  // TOP RIGHT — 03
  if (shape === "leftLeaning" && row === 1) {
    return { outer: "skew-x-[12.6deg]", inner: "-skew-x-[12.6deg]", width: "w-[90%] mx-auto" };
  }

  // BOTTOM LEFT — 04 (-180deg equivalent)
  if (shape === "rightLeaning" && row === 2) {
    return { outer: "skew-x-[12.6deg]", inner: "-skew-x-[12.6deg]", width: "w-[90%] mx-auto" };
  }

  // BOTTOM RIGHT — 06 (0deg equivalent)
  if (shape === "leftLeaning" && row === 2) {
    return { outer: "-skew-x-[12.6deg]", inner: "skew-x-[12.6deg]", width: "w-[90%] mx-auto" };
  }

  return { outer: "", inner: "", width: "w-full" };
};

const World = () => {
  return (
    <section className="w-full py-16 min-[2100px]:py-24 min-[3800px]:py-32 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center justify-center text-center">

        {/* Heading Group */}
        <div className="flex flex-col gap-4 w-full md:max-w-[70%] mb-16 min-[2100px]:mb-24 min-[3800px]:mb-32 min-[3800px]:gap-8" data-aos="fade-up">
          <Typography variant="h4" className="font-bold tracking-wide text-[#078BC8] min-[3800px]:text-3xl">
            Why You Should Choose Esan Battery?
          </Typography>
          <Typography variant="h2" color="dark" className="font-bold leading-tight min-[3800px]:text-6xl">
            The World Takes Its Power Energy Quality From Us
          </Typography>
        </div>

        {/* Grid */}
        <div className="w-full max-w-[1568px] min-[2100px]:max-w-[1700px] min-[3800px]:max-w-[2800px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 lg:gap-y-[60px] lg:gap-x-[10px] min-[3800px]:gap-y-[120px] min-[3800px]:gap-x-[40px] px-4 sm:px-8 xl:px-0">
          {features.map((feature, index) => {
            const { outer, inner, width } = getSkewConfig(feature.shape, feature.row);
            const isWhite = !feature.blueBg;

            const iconPos = feature.row === 1
              ? "-top-8 min-[2100px]:-top-10 min-[3800px]:-top-14"
              : "-bottom-8 min-[2100px]:-bottom-10 min-[3800px]:-bottom-14";

            const content = (
              <div className={`relative z-10 flex flex-col items-start text-left gap-3 min-[3800px]:gap-6 w-full h-full px-10 py-12 lg:px-12 lg:py-14 min-[2100px]:px-16 min-[2100px]:py-20 min-[3800px]:px-24 min-[3800px]:py-28 ${inner}`}>
                {/* Watermark Number */}
                <div className={`absolute right-6 min-[3800px]:right-12 top-1/2 -translate-y-1/2 text-[120px] lg:text-[140px] min-[2100px]:text-[180px] min-[3800px]:text-[300px] font-black pointer-events-none z-0 ${feature.blueBg ? "text-white opacity-[0.06]" : "text-[#078BC8] opacity-[0.04]"}`}>
                  {feature.id}
                </div>

                {/* Text Content */}
                <Typography variant="h4" color={feature.blueBg ? "white" : "dark"} className="font-bold text-[16px] lg:text-[18px] min-[2100px]:text-2xl min-[3800px]:text-4xl">
                  {feature.title}
                </Typography>
                <Typography variant="p" color={feature.blueBg ? "white" : "dark"} className={`text-[14px] lg:text-[15px] min-[2100px]:text-xl min-[3800px]:text-3xl leading-[1.6] ${feature.blueBg ? 'opacity-90' : 'opacity-80'}`}>
                  {feature.desc}
                </Typography>
              </div>
            );

            return (
              <div key={feature.id} data-aos="fade-up" data-aos-delay={index * 100} className="relative w-full h-full min-h-[220px] lg:h-[231px] min-[2100px]:h-[300px] min-[3800px]:h-[450px]">

                {/* Background & Shape Wrapper */}
                <div className={`relative ${width} h-full overflow-hidden rounded-[10px] transition-all duration-300 hover:shadow-lg ${outer} ${isWhite ? 'bg-white border border-[#078BC8]' : 'bg-[#078BC8]'}`}>
                  {content}
                </div>

                {/* Floating Icon Circle (Unclipped) */}
                <div className={`absolute left-1/2 -translate-x-1/2 ${iconPos} w-16 h-16 min-[2100px]:w-20 min-[2100px]:h-20 min-[3800px]:w-28 min-[3800px]:h-28 rounded-full bg-white border border-[#078BC8] flex items-center justify-center z-20 shadow-sm`}>
                  <img src={`/esan/VECTOR${index + 1}.png`} alt={feature.title} className="w-[50%] h-[50%] object-contain" />
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default World;
