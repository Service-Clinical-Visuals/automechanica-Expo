"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const Help = () => {
  return (
    <section id="help" className="w-full bg-white overflow-hidden flex flex-col xl:flex-row items-stretch">
      {/* Left Image (Full Bleed) */}
      <div className="w-full xl:w-1/2 h-[400px] xl:h-auto min-h-[400px] xl:min-h-[600px]" data-aos="fade-right">
        <img
          src="/moto/hasting/section4.png"
          alt="Piston Rings Close Up"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="w-full xl:w-1/2 flex items-center justify-center py-16  px-6 md:px-12 min-[3800px]:px-20" data-aos="fade-left">
        <div className="w-full max-w-[70%] flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Man Image */}
          <div className="w-60 h-60 min-[3800px]:w-100 min-[3800px]:h-100 shrink-0">
            <img
              src="/moto/hasting/man.png"
              alt="Tough Guy Tech Support"
              className="w-full  object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-6 pt-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-7 h-7 min-[3800px]:w-10 min-[3800px]:h-10 bg-secondary [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)] shrink-0"></div>
              <Typography variant="h4" color="primary" className="font-bold">
                We're Here to Help
              </Typography>
            </div>

            <Typography variant="h2" color="dark" className="font-bold leading-tight uppercase">
              TOUGH GUY TECH SUPPORT
            </Typography>

            <Typography variant="p" color="muted" className="leading-relaxed">
              When you do something for a century, you learn a lot in the process - including the information customers need to know.
            </Typography>

            <div className="mt-2 flex justify-center md:justify-start">
              <Button text="Get Help Here" href="#help" variant="primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
