"use client";

import React from "react";
import Button from "./Button";
import Link from "next/link";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function PrecisionView() {
  return (
    <section className="py-16 xl:py-20 relative bg-[#151515] text-white overflow-hidden">
      <div className="custom-container relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-10 items-center">

          {/* Left: 360 Video Player */}
          <div className="w-full h-full aspect-video lg:col-span-6 xl:col-span-7 relative overflow-hidden flex items-center justify-center bg-[#f0f0f0] rounded" data-aos="fade-right">
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col gap-6 lg:col-span-6 xl:col-span-5" data-aos="fade-left">
            <div>
              <h2 className="section-title exo2-font font-bold text-white leading-tight mb-6">
                Explore Every Detail
              </h2>
              <p className="text-white inter-font font-regular tracking-normal leading-relaxed section-text">
                Experience Inno Piston's precision engineering like never before. Rotate and inspect our premium pistons, piston rings, and cylinder liners from every angle to discover the exceptional craftsmanship, high-quality materials, and meticulous machining that ensure superior engine performance, durability, and reliability in every application.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {[
                { title: "Interactive 360° Product View", desc: "Examine every angle with smooth, intuitive rotation." },
                { title: "Precision Engineering", desc: "Discover the fine details behind every high-performance engine component." },
                { title: "Built for Every Engine", desc: "Designed for passenger vehicles, commercial fleets, agricultural machinery, and heavy-duty industrial applications." },
                { title: "Advanced Material Technology", desc: "Manufactured using premium alloys and advanced surface treatments to deliver exceptional strength, thermal stability, and long-lasting engine performance." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <img src="/moto/inno/abticon.png" alt="Bullet Icon" className="w-auto h-auto object-contain" />
                  </div>
                  <div>
                    <h4 className="inter-font text-white font-bold section-text leading-snug">{item.title} <span className="inter-font text-white font-regular section-text ml-1">- {item.desc}</span></h4>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2">
              <Button href="#">
                View Product
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

