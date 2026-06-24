import React from "react";
import Container from "./Container";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function EngineOil() {
  return (

    <section className="w-full bg-[#28282B] py-20 text-white"><Container>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-8 w-full items-center h-full min-h-[600px]">

        {/* Left Column (Text Content) */}
        <div className="flex flex-col justify-center" data-aos="fade-right">
          <div className="mx-auto lg:mx-0 w-full">
            {/* Title Section */}
            <div className="relative mb-1 flex flex-col items-start">
              {/* Cropped Number */}
              <div className="absolute top-0 left-0 h-[40px] md:h-[70px] overflow-hidden">
                <span className="font-bebas text-[80px] md:text-[120px] leading-none text-white">
                  02
                </span>
              </div>

              {/* Heading */}
              <div className="pt-[40px] md:pt-[70px] relative z-10">
                <Typography
                  variant="h2"
                  color="primary"
                  className="font-bebas tracking-wider leading-none"
                >
                  ENGINE OIL
                </Typography>
              </div>
            </div>

            <Typography className="text-white mb-6 leading-relaxed font-light">
              Fully Synthetic & Ultra Fuel Economy engine oil, specially formulated for modern gasoline and diesel passenger cars, including hybrid vehicles, with extended drain intervals. Its advanced formulation, incorporating innovative molybdenum compounds and organic friction modifiers, provides excellent fuel economy, low oil consumption and maximum engine protection, even under severe operating conditions.
            </Typography>

            <Typography className="text-white mb-10 leading-relaxed font-light">
              Advanced fully synthetic engine oil developed for modern PSA / STELLANTIS vehicles, as well as hybrid, gasoline, and diesel engines requiring lubricants meeting ACEA C5 specifications. Delivering outstanding fuel economy, engine cleanliness, and low emissions.
            </Typography>

            <Button text="EXPLORE PRODUCTS" variant="chevron" />
          </div>
        </div>

        {/* Right Column (Video) */}
        <div className="w-full relative aspect-video" data-aos="fade-left">
          <div className="absolute inset-0 z-0 aspect-video flex items-center justify-center">
            <DynamicVideoPlayer type="360" className="w-full h-full object-cover" />
          </div>
        </div>

      </div></Container>
    </section>

  );
}
