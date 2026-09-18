"use client";

import React from "react";
import Typography from "../../_components/Typography";
import Button from "../../_components/Button";
const Consultation = () => {
  return (
    <section className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container">

        {/* Flex Row Container */}
        <div className="flex flex-col xl:flex-row gap-4 xl:gap-6 justify-center items-stretch" data-aos="fade-up">

          {/* Left Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg w-full xl:w-[42%] xl:flex-[677] aspect-[677/460]">
            <img
              src="/moto/ampro/s1.png"
              alt="Consultation meeting"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-300 hover:opacity-0 pointer-events-none"></div>
          </div>

          {/* Middle Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg w-full xl:w-[16%] xl:flex-[246] aspect-auto xl:aspect-[246/463] flex flex-col items-center justify-center text-center p-6 xl:p-4 xl:p-6 gap-6 py-12 xl:py-0">

            {/* Background Image */}
            <img
              src="/moto/ampro/bgg.png"
              alt="Card Background"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            {/* Green Overlay */}
            <div className="absolute inset-0 bg-[#689B4C]/75 z-10 pointer-events-none"></div>

            <div className="flex flex-col gap-1 w-full relative z-20">
              <Typography variant="h5" color="white" className="font-bold leading-snug">
                Questions? Call
              </Typography>
              <Typography variant="h5" color="white" className="font-bold leading-snug">
                us for a free
              </Typography>
              <Typography variant="h5" color="white" className="font-bold leading-snug">
                consultation.
              </Typography>
            </div>

            <div className="flex flex-col gap-2 w-full relative z-20">
              <Typography variant="h5" color="white" className="font-medium text-sm xl:text-xs xl:text-sm">
                AMPRO Technologies
                <br />
                GmbH
              </Typography>
              <a href="tel:+4922412326685" className="inline-block mt-1">
                <Typography variant="h5" color="white" className="font-medium underline text-sm xl:text-xs xl:text-sm">
                  +49 2241 2326685
                </Typography>
              </a>
            </div>
            <div className="mt-2 z-20">
              <Button
                text="Know More"
                href="#knowmore"
                className="!bg-white !px-5 !py-2.5 !rounded [&_.button]:!text-[#5D8B46] [&_svg]:!text-[#5D8B46]"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg w-full xl:w-[42%] xl:flex-[677] aspect-[677/460]">
            <img
              src="/moto/ampro/s2.png"
              alt="NOx Sensor Packaging"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-300 hover:opacity-0 pointer-events-none"></div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Consultation;
