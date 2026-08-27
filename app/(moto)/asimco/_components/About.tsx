"use client";

import React from "react";
import Button from "./Button";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 lg:py-32 bg-white text-black">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10 items-center">
          
          {/* Left Content */}
          <div data-aos="fade-right">
            <h3 className="section-subtitle teko-font text-black font-medium  mb-4 tracking-wide">
              About Asimco
            </h3>
            <h2 className="section-title teko-font text-[#cb1020] font-medium mb-8 ">
              Every journey begins with trust — and at ASIMCO, <br className="hidden md:block" />
              trust begins with safety.
            </h2>
            
            <div className="space-y-6 section-text text-[#111111] inter-font mb-10 leading-relaxed">
              <p>
                For over two decades, ASIMCO has been delivering high-performance automotive components trusted by industry professionals worldwide. What began as a focus on superior braking solutions has grown into a globally recognized brand known for quality, innovation, and reliability, with a presence in more than 80 countries.
              </p>
              <p>
                ASIMCO offers a comprehensive portfolio including brake pads, brake shoes, discs, shock absorbers, and other essential components—engineered for performance, durability, and safety.<br/>
                Driven by advanced R&D, we continuously develop and refine friction technologies to meet the highest standards of performance and comfort.
              </p>
              <p>
                With a strong global network across key markets, we remain close to our partners and responsive to evolving industry needs. ASIMCO stands for safer roads, strong partnerships, and continuous innovation—delivering solutions drivers can trust on every journey.
              </p>
            </div>
            
            <Button href="#" variant="primary">
              Learn More
            </Button>
          </div>

          {/* Right Images Grid */}
          <div className="relative w-full h-full min-h-[500px]" data-aos="fade-left">
            <div className="grid grid-cols-2 gap-6 h-full items-center">
              {/* Left Image (Factory) - Centered vertically, spans somewhat */}
              <div className="relative  w-full overflow-hidden ">
                <img 
                  src="/moto/asimco/abt1.png" 
                  alt="Asimco Factory" 
                  className="object-cover"
                />
              </div>
              
              {/* Right Column of 2 Images */}
              <div className="grid grid-rows-2 gap-4">
                <div className="relative w-full h-full overflow-hidden  ">
                  <img
                    src="/moto/asimco/abt2.png" 
                    alt="Mechanic inspecting" 
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full h-full overflow-hidden ">
                  <img 
                    src="/moto/asimco/abt3.png" 
                    alt="Mechanic working under car" 
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
