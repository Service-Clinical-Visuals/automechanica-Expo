"use client";

import React from "react";
import Link from "next/link";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";

const features = [
  {
    icon: "/moto/eurolub/premium/leaf.png",
    title: "Fuel Efficiency",
    description:
      "Its low-friction formulation improves engine efficiency, helping to reduce fuel consumption while delivering smooth and reliable performance during both city and highway driving.",
  },
  {
    icon: "/moto/eurolub/premium/shield.png",
    title: "Superior Engine Cleanliness",
    description:
      "The advanced additive formula prevents sludge and deposits, keeping the engine clean and delivering reliable performance over extended service intervals.",
  },
  {
    icon: "/moto/eurolub/premium/speedo.png",
    title: "High Thermal Stability",
    description:
      "Engineered to withstand extreme temperatures, it maintains consistent lubrication and protects critical engine components for smooth, reliable performance in all weather conditions.",
  },
  {
    icon: "/moto/eurolub/premium/clock.png",
    title: "Long-Life Performance",
    description:
      "Designed for extended service intervals, it provides lasting engine protection and maintains reliable performance throughout the oil's lifespan.",
  },
];

export default function Premium() {
  return (
    <section
      className="relative w-full overflow-hidden py-12 md:py-24"
      style={{ background: "linear-gradient(135deg, #0A4F7A 0%, #2C2358 100%)" }}
    >
      <Container>
        <div className="relative z-10 flex flex-col gap-10 md:gap-14">
          <div className="grid grid-cols-1 xl:grid-cols-[50fr_50fr] gap-8 xl:gap-12 items-center">
            {/* Left Side: Video */}
            <div className="w-full order-2 xl:order-1 aspect-video" data-aos="fade-right">
              <DynamicVideoPlayer type="360" className="rounded-xl w-full h-full object-cover" />
            </div>

            {/* Right Side: Content */}
            <div className="flex order-1 xl:order-2 flex-col gap-4" data-aos="fade-up">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                <span className="content font-semibold! text-white! uppercase tracking-wide">
                  Our Premium Product
                </span>
              </div>

                <h2 className="heading-white leading-[36px]!">
                  Our Engineered Excellence in Engine Oils
                </h2>

                <div className="space-y-4 content-white">
                  <p>
                    Developed for modern petrol and diesel engines, EUROLUB is a premium fully
                    synthetic lubricant that delivers advanced engine protection, excellent wear
                    resistance, improved fuel efficiency, and reliable performance with extended oil
                    change intervals.
                  </p>
                  <p>
                    EUROLUB WIV 5W-30 is a high-performance, fully synthetic engine oil developed for
                    modern petrol and diesel engines. It provides excellent engine protection,
                    outstanding wear resistance, and enhanced fuel efficiency while supporting
                    extended oil change intervals. Designed for modern petrol and diesel engines,
                    this premium fully synthetic oil delivers superior protection, improved fuel
                    efficiency, and reliable long-term performance. It helps reduce wear, maintain
                    engine cleanliness, and ensure smooth operation in demanding conditions. Its
                    advanced formulation supports extended service intervals and keeps engines
                    performing at their best.
                  </p>
                </div>

                <Link
                  href="#"
                  className="mt-2 content-white w-fit font-bold! items-center justify-center rounded-lg bg-primary px-8 py-3 hover:bg-secondary-hover transition-colors"
                >
                  Explore Product
                </Link>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8" data-aos="fade-up">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 flex flex-col items-center text-center gap-3"
              >
                <div className="flex items-center gap-2">
                  <img src={feature.icon} alt="" className="w-5 h-5 shrink-0 object-contain" />
                  <h3 className="subheading font-semibold!">
                    {feature.title}
                  </h3>
                </div>
                <p className="content leading-[26px]!">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
