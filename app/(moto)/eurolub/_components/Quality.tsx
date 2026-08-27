"use client";

import React from "react";
import Link from "next/link";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";

const checkerboardStyle = {
  backgroundImage:
    "linear-gradient(45deg, #e5e5e5 25%, transparent 25%), linear-gradient(-45deg, #e5e5e5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e5e5e5 75%), linear-gradient(-45deg, transparent 75%, #e5e5e5 75%)",
  backgroundSize: "60px 60px",
  backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0px",
  backgroundColor: "#f9f9f9",
};

const features = [
  {
    title: "Fully Synthetic Engine Oil",
    description:
      "Provides advanced lubrication and superior engine protection, ensuring smooth performance, reduced wear, and enhanced reliability for modern petrol and diesel vehicles.",
  },
  {
    title: "Viscosity Grade",
    description:
      "Delivers smooth cold-start performance and dependable lubrication, helping maintain engine efficiency and protection even during high-temperature operation.",
  },
];

export default function Quality() {
  return (
    <section
      className="relative w-full overflow-hidden py-16 md:py-24 bg-cover bg-center"
      style={{ backgroundImage: "url(/moto/eurolub/qualitybg.png)" }}
      id="quality"
    >
      <Container>
        <div className="relative z-10 grid grid-cols-1 xl:grid-cols-[48fr_52fr] gap-12 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col gap-6" data-aos="fade-right">
            <div>
              <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#004A72]! shrink-0" />
                <span className="content font-semibold! text-[#004A72]! uppercase tracking-wide">
                  Our Technology
                </span>
              </div>
              <h2 className="heading mb-4">
                Engineered for Performance
              </h2>
              <p className="content">
                Discover how EUROLUB&apos;s advanced lubrication technology delivers exceptional
                engine protection, improved fuel efficiency, and reliable performance across a
                wide range of driving conditions. Engineered with high-quality synthetic
                formulations, it helps reduce friction and wear, maintain engine cleanliness, and
                ensure smooth operation even under extreme temperatures.
              </p>
            </div>

            <ul className="flex flex-col gap-2">
              {features.map((feature) => (
                <li key={feature.title} className="flex items-start gap-3">
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#1A1A1A] shrink-0" />
                  <div>
                    <h3 className="subheading font-semibold! mb-1">
                      {feature.title}
                    </h3>
                    <p className="content">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="#"
              className="mt-2 content-white w-fit font-bold! items-center justify-center rounded-lg bg-primary px-8 py-3 hover:bg-secondary-hover transition-colors"
            >
              Explore Product
            </Link>
          </div>

          {/* Right: Video */}
          <div className="relative w-full aspect-video" style={checkerboardStyle} data-aos="fade-left">
            <DynamicVideoPlayer type="short-1" className="rounded-2xl absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
