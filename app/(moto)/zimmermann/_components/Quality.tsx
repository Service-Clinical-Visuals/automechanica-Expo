"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";
import Button from "./Button";
import Link from "next/link";

const checkerboardStyle = {
  backgroundImage:
    "linear-gradient(45deg, #e5e5e5 25%, transparent 25%), linear-gradient(-45deg, #e5e5e5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e5e5e5 75%), linear-gradient(-45deg, transparent 75%, #e5e5e5 75%)",
  backgroundSize: "60px 60px",
  backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0px",
  backgroundColor: "#f9f9f9",
};

const features = [
  {
    title: "German Precision Engineering -",
    description:
      "Manufactured using advanced automated production systems to achieve exceptional accuracy and consistent quality.",
  },
  {
    title: "OE-Quality Performance -",
    description:
      "Designed to meet or exceed original equipment standards, ensuring reliable braking, enhanced safety, and dependable performance.",
  },
];

export default function Quality() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#F4F4F4]" id="quality">
      <Container>
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-10" data-aos="fade-up">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-3.5 h-3.5 bg-secondary shrink-0" />
            <h2 className="heading uppercase">Advanced Manufacturing Excellence</h2>
          </div>
          <p className="content max-w-[1500px]">
            Every Zimmermann brake component is produced using state-of-the-art manufacturing
            technology and stringent quality control processes. From precision machining to final
            inspection, every step ensures consistent performance, safety, and long-lasting
            durability that professionals and drivers worldwide can trust.
          </p>
        </div>

        <div className="w-full h-px bg-border mb-12" />

        <div className="grid grid-cols-1 xl:grid-cols-[70fr_30fr] gap-8 items-stretch">
          {/* Left: Video */}
          <div
            className="relative w-full aspect-video flex items-center justify-center"
            style={checkerboardStyle}
            data-aos="fade-right"
          >
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right: Text content */}
          <div className="bg-white p-8 flex flex-col justify-center" data-aos="fade-left">
            <p className="content mb-6">
              Combining German engineering with continuous innovation, Zimmermann develops braking
              solutions that meet the highest standards of quality and performance.
            </p>

            <ul className="flex flex-col gap-4 mb-8">
              {features.map((feature) => (
                <li key={feature.title} className="flex items-start gap-2.5">
                  <CheckCircle2 size={19} strokeWidth={2} className="text-secondary shrink-0 mt-0.5" />
                  <p className="content">
                    <span className="font-bold!">{feature.title}</span>{" "}
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>

            <div className="heading mb-4">
              <Link
                href="#"
                className="inline-block bg-secondary hover:bg-secondary-hover text-white! text-[16px]! tracking-[1px]! leading-[20px]! uppercase px-6 py-2.5 rounded transition-colors"
              >
                View Product
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
