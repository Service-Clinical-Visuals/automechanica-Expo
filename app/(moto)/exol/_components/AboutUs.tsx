"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="py-16 md:py-24 bg-white text-dark">
      <div className="custom-container">
        <div className="flex flex-col xl:flex-row gap-12 lg:gap-8 items-stretch justify-center">

          {/* Left: Content (Order 1 on mobile, 1 on desktop) */}
          <div className="w-full xl:w-1/2 flex flex-col gap-1 order-1" data-aos="fade-up">
            <Typography variant="h2" color="primary" weight="bold">
              About Us
            </Typography>

            <div className="w-[18%] h-px bg-[#1E1E1E66] mb-4"></div>

            <div className="flex flex-col gap-4 text-gray-700">
              <Typography variant="p">
                Since 1974, Arı Petroleum Chemical Company is producing and selling all types of lubricants and industrial oils with its experienced & qualified team. Also exporting engine oils over the world, Arı Oil products meet with industry's needs with its high performance levels.
              </Typography>

              <Typography variant="p">
                Located in Tuzla KOSB (industrial area), with our experience we produce and sell to the direct customer. With high quality and various products, we took as principle to always develop ourselves and to have satisfied customers. Arı Oil has ISO 9001-2008 quality system certificate.
              </Typography>

              <Typography variant="p">
                Arı Oil's main goal is to work effective, be trustworthy and produce economic products meet the expectations of customers. In our company, we work as a team of chemical engineers who are ready to give technical support.
              </Typography>

              <Typography variant="p">
                We have reached 44 countries in 6 years with our competitive prices, and our experience. We aim to reach more countries and expand our sale network as we participate to fairs in Turkey and all around the world.
              </Typography>
            </div>

            <div className="mt-4">
              <Button text="Discover Our Story" variant="primary" />
            </div>
          </div>

          {/* Right: Image (Order 2 on mobile, 2 on desktop) */}
          <div className="w-full xl:w-1/2 order-2 flex" data-aos="fade-up" data-aos-delay="100">
            <div className="relative w-full h-full min-h-[300px] xl:min-h-0 rounded-sm overflow-hidden">
              <img
                src="/moto/exol/section2.png"
                alt="Exol Factory"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
