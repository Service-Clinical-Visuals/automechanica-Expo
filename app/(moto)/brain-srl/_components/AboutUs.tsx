"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="w-full bg-white pt-16 flex flex-col">
      <div className="custom-container px-4 md:px-8 max-w-[1920px] mx-auto w-full mb-16 ">

        <div className="grid grid-cols-1 2xl:grid-cols-12 gap-8  items-center">

          {/* Content (Heading -> Content -> Button) 
              This comes first on mobile/tablet/macbook (up to 1536px) via order-1
              On large desktops (1536px+), it goes to the right side via order-2
          */}
          <div className="w-full 2xl:col-span-5 flex flex-col gap-6 order-1 2xl:order-2" data-aos="fade-left" data-aos-duration="1000">
            <Typography variant="h2" color="primary" className="uppercase tracking-wide">
              About Our Company
            </Typography>

            <div className="flex flex-col gap-4 text-[#5D5D5D]">
              <Typography variant="p" color="dark">
                Brain is the first company in Italy to fully develop the production of metal catalytic converters. Active since 1998, it now boasts considerable experience in the automotive catalytic converter sector and in the industrial segment of combustion product catalysis.
              </Typography>

              <Typography variant="p" color="dark">
                For eight years, he has developed in-depth knowledge of particulate filters for all diesel engines, including their construction and regeneration. Recent developments include SCR redox applications and cold catalysis.
              </Typography>

              <Typography variant="p" color="dark">
                Continuous investments in increasingly sophisticated and automated equipment allow us to create products with a high quality/price ratio, which have nothing to fear from competing foreign manufacturers.
              </Typography>

              <Typography variant="p" color="dark">
                Where efficient conversion of combustion pollutants is required, Brain can guarantee reductions of over 90%, demonstrating that high efficiency and superior quality don't always mean high prices.
              </Typography>
            </div>

            <div className="mt-4">
              <Button text="Know More About Us" showIcon={true} />
            </div>
          </div>

          {/* Image Container
              This comes last on mobile/tablet/macbook via order-2
              On large desktops (1536px+), it goes to the left side via order-1
          */}
          <div className="w-full 2xl:col-span-7 order-2 2xl:order-1" data-aos="fade-right" data-aos-duration="1000">
            <div className="w-full relative rounded-2xl overflow-hidden shadow-inner  2xl:aspect-video flex items-center justify-center">
              <img
                src="/moto/brain-srl/section2.png"
                alt="Brain Metal Catalytic Converters"
                className="relative z-10 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Full-width Dark Blue Banner at the bottom */}
      <div className="w-full bg-[#192B3C] py-12 md:py-16 px-4">
        <div className="custom-container max-w-[80%]  text-center" data-aos="fade-up" data-aos-duration="1000">
          <Typography variant="h2" color="white" weight="light" className="uppercase xl:max-w-[50%]  mx-auto tracking-wider leading-snug">
            We are the first Italian company to have fully developed the production of the metal catalytic converter in the automotive and industrial sectors
          </Typography>
        </div>
      </div>
    </section>
  );
}
