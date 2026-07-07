"use client";

import React from "react";
import Container from "./Container";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Technology() {
  return (
    <section id="technology" className="py-12 md:py-15 bg-white">
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 items-center">

          {/* Content Left */}
          <div className="col-span-1 xl:col-span-5 flex flex-col order-2 xl:order-1" data-aos="fade-down-right" data-aos-duration="1200">

            {/* Title Block */}
            <div className="mb-1">
              <div className="flex gap-1.5 mb-[-15] ml-1">
                <div className="w-2.5 h-2.5 bg-primary"></div>
                <div className="w-2.5 h-2.5 bg-primary"></div>
                <div className="w-2.5 h-2.5 bg-primary"></div>
                <div className="w-2.5 h-2.5 bg-primary"></div>
              </div>
            </div>

            <Typography variant="h2" color="dark" className=" mb-6 text-primary leading-tight">
              Advanced Component Technology
            </Typography>

            <div className="flex flex-col gap-4 mb-8">
              <Typography variant="p" color="dark" className="text-gray-600 leading-relaxed text-sm lg:text-base">
                Although all ignition coils have the same principle of operation, different types of coils have been developed over the last few decades. This means that the type of ignition coil a vehicle uses also depends on when it was manufactured. Now many different types of ignition coils are produced, differing in design and the amount of electronics incorporated.
              </Typography>
            </div>

            {/* Checkmark List */}
            <ul className="flex flex-col gap-4 mb-10">
              {[
                "The metal core generates a variable magnetic field and allows high voltage to be generated.",
                "The thick copper wire of the primary winding between the core and the secondary coil provides the pulse to create a high-voltage spark at the spark plug.",
                "Tin plated brass contacts provide a low voltage connection.",
                "Hundreds of turns of copper wire on the secondary winding increase in voltage from the original 12 volts."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <img src="/moto/tesla/settings.png" alt="Check" className="w-6 h-6 object-contain" />
                  </div>
                  <Typography variant="p" color="dark" className="text-gray-700 text-sm font-medium leading-relaxed">
                    {text}
                  </Typography>
                </li>
              ))}
            </ul>

            <div className="mt-2">
              <Button text="Explore Product" variant="hero" showIcon={true} />
            </div>
          </div>

          {/* Video Right */}
          <div className="col-span-1 xl:col-span-7 order-1 xl:order-2" data-aos="fade-left" data-aos-delay="200">
            <div className="w-full aspect-video md:aspect-[16/10] bg-black rounded shadow-2xl overflow-hidden relative">
              <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
