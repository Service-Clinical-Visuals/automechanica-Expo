"use client";

import React from "react";
import Link from "next/link";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";

const features = [
  {
    title: "OEM-Quality Performance",
    description: "Precision-engineered for reliable operation and seamless installation",
  },
  {
    title: "Efficient Cooling",
    description: "Ensures consistent refrigerant compression for maximum air conditioning performance.",
  },
];

export default function Quality() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-12 md:py-24" id="quality">
      <Container>
        <div className="flex flex-col gap-10 md:gap-14">
          {/* Heading */}
          <h2 className="heading text-center text-[22px] md:text-[28px]">
            OEM-Quality <span className="text-secondary">Compressor</span> Solutions
          </h2>

          {/* Content */}
          <div className="grid grid-cols-1 xl:grid-cols-[44fr_56fr] gap-8 xl:gap-12 items-center">
            <div className="flex flex-col gap-6" data-aos="fade-right">
              <p className="content">
                DASIS air conditioning compressors are engineered to deliver efficient cooling,
                reliable performance, and long service life across a wide range of vehicle
                applications. Manufactured to meet stringent quality standards, each compressor
                ensures optimal refrigerant circulation, reduced operating noise, and dependable
                performance under demanding driving conditions. With precision engineering and
                OEM-quality fitment, DASIS compressors provide a trusted solution for professional
                repairs and replacements.
              </p>

              <div className="flex flex-col gap-5">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <img src="/moto/dasis/tool2.png" alt="" className="w-4 h-4 object-contain" />
                    </div>
                    <div>
                      <h3 className="heading text-primary text-[16px] mb-1">{feature.title}</h3>
                      <p className="content text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="#"
                className="hidden max-w-54 rounded-tr-[16px] rounded-bl-[16px] heading-white font-normal! text-[24px]! leading-[150%]! py-2 px-6 lg:flex items-center justify-center bg-primary uppercase hover:bg-primary/90 transition-colors shadow-md"
              >
                Explore Product
              </Link>
            </div>

            <div className="w-full aspect-video" data-aos="fade-left">
              <DynamicVideoPlayer
                type="short-1"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
