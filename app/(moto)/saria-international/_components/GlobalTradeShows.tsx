"use client";
import React from "react";
import Link from "next/link";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";

export default function GlobalTradeShows() {
  const points = [
    "Regular participation in leading international automotive trade shows across global markets",
    "Showcasing LION products at AAPEX Las Vegas, Automechanika Dubai, and Automechanika Frankfurt.",
    "Strengthening partnerships and exploring new business opportunities with distributors worldwide."
  ];

  return (
    <section className="w-full bg-[#202020] py-16 md:py-24">
      <div className="custom-container">
        
        {/* Centered Section Title */}
        <h2 className="oswald-font font-semibold text-[#ffffff] section-title mb-3" data-aos="fade-up">
          Driving Connections at Global Trade Shows
        </h2>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center">
          
          {/* Left Column - Content */}
          <div className="flex flex-col gap-6 xl:col-span-5" data-aos="fade-right" data-aos-delay="100">
            <p className="lato-font text-[#ffffff] section-text font-normal leading-relaxed">
              LION proudly participates in leading international automotive trade shows, including AAPEX Las Vegas, Automechanika Dubai, and Automechanika Frankfurt. These global events provide the perfect platform to showcase our latest automotive products, innovative technologies, and complete auto care solutions to customers and industry professionals worldwide.
            </p>
            
            <ul className="flex flex-col gap-4 mt-2">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-[#FDBB2D] mt-2 flex-shrink-0"></span>
                 <p className="lato-font text-[#ffffff] section-text font-normal leading-relaxed">
                    {point}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <Button href="#">
                Explore
              </Button>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg relative bg-[#111] flex items-center justify-center xl:col-span-7" data-aos="fade-left" data-aos-delay="200">
            <DynamicVideoPlayer type="short-2" className="w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
}
