"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const Sustainability = () => {
  return (
    <section
      id="sustainability"
      className="w-full min-h-[580px] min-[3800px]:min-h-[1160px] py-16 min-[3800px]:py-32 flex items-center bg-black relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: "url('/moto/donmez/bg.png')" }}
      />

      {/* Optional Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      <div className="custom-container relative z-10 flex flex-col md:grid md:grid-cols-2 gap-10 min-[3800px]:gap-20 items-center">

        {/* Left Content */}
        <div className="flex flex-col gap-6 w-full" data-aos="fade-right">
          <Typography variant="h2" color="white" className="font-bold leading-tight">
            Sustainability
          </Typography>

          <Typography variant="p" color="white" className="leading-relaxed  lg:w-[90%]">
            Dönmez Clutch prioritizes energy efficiency and sustainability in its production processes, fulfilling its responsibility towards the environment and the future. Our production philosophy, supported by advanced technologies, is built on a structure that respects nature, is efficient in resource use, and is open to continuous improvement.
          </Typography>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button text="ISMS Policy" variant="secondary" />
            <Button text="Quality Policy" variant="outline" />
          </div>
        </div>

        {/* Right Content - Kept empty as the background image handles the visual on the right */}
        <div className="hidden md:block w-full h-[300px] min-[3800px]:h-[600px]">
          {/* Placeholder for the grid layout to push the text to the left */}
        </div>

      </div>
    </section>
  );
};

export default Sustainability;
