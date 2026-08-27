"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const Solutions = () => {
  return (
    <section id="solutions" className="w-full py-16 overflow-hidden">
      <div className="custom-container flex flex-col gap-12 xl:gap-16">

        {/* Top Content Row */}
        <div className="flex flex-col xl:grid xl:grid-cols-2 gap-10 xl:gap-15 items-start">

          {/* Left Column - Progress Bars (Mobile: Order 2) */}
          <div className="w-full order-2 xl:order-1 flex flex-col gap-8">
            <div className="flex flex-col gap-6">

              {/* Progress Bar 1 */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center w-full">
                  <Typography variant="h4" color="white" className="font-bold">
                    Car Lubricants
                  </Typography>
                  <Typography variant="h4" color="white" className="font-bold">
                    96%
                  </Typography>
                </div>
                <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full w-[96%]"></div>
                </div>
              </div>

              {/* Progress Bar 2 */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center w-full">
                  <Typography variant="h4" color="white" className="font-bold">
                    Industrial Lubricants
                  </Typography>
                  <Typography variant="h4" color="white" className="font-bold">
                    96%
                  </Typography>
                </div>
                <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full w-[96%]"></div>
                </div>
              </div>

            </div>

            <div className="mt-2">
              <Button text="Explore Our Solutions" href="#solutions" />
            </div>
          </div>

          {/* Right Column - Text (Mobile: Order 1) */}
          <div className="w-full order-1 xl:order-2 flex flex-col gap-4">
            <Typography variant="h2" color="white" className="font-bold leading-tight">
              GL Oil SpA offers the most complete range of lubrication management solutions.
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed  mt-2">
              Regardless of industry or application, GL Oil SpA has the products and resources to help you optimize your processes, reduce maintenance requirements, increase performance, productivity and safety, and minimize environmental impact.
            </Typography>
          </div>

        </div>

        {/* Bottom Image Row (Mobile: Order 3) */}
        <div className="w-full max-w-full border border-white/40 mx-auto aspect-[1570/525] rounded-2xl overflow-hidden shadow-2xl relative order-3">
          <img
            src="/moto/gl-oil/section3.png"
            alt="Lubrication Gears"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Solutions;
