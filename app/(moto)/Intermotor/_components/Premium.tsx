"use client";

import Link from "next/link";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";

const paragraphs = [
  "Built with advanced manufacturing processes and premium materials, our automotive components are engineered to deliver exceptional quality, long-lasting durability, and reliable performance across a wide range of vehicle applications.",
  "Every component reflects our commitment to precision engineering, innovative design, and expert craftsmanship. Manufactured with premium materials and rigorously tested to Original Equipment (OE) standards, each product is engineered to provide consistent quality, long-lasting durability, and reliable performance that automotive professionals can trust.",
  "From advanced engineering to rigorous quality testing, every detail is designed to meet the demands of modern vehicles. Experience the innovation, reliability, and manufacturing excellence trusted by automotive professionals across the UK, Europe, and global aftermarket.",
];

export default function Premium() {
  return (
    <section
      className="relative w-full bg-[#0F172A] py-10 md:py-14 overflow-hidden font-[family-name:var(--font-inter)]"
      id="premium"
    >
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div data-aos="fade-up">
            <h2 className="heading-white mb-4">Explore Our Products in 360&deg;</h2>
            <p className="content-white max-w-[850px]">
              Discover Intermotor Group&apos;s OE-quality automotive components through an
              interactive 360&deg; experience. Explore precision-engineered products built for
              exceptional quality, reliability, and performance.
            </p>
          </div>

          <Link
            href="#"
            className="navlink shrink-0 text-white! font-semibold! bg-primary hover:bg-primary-hover px-6 py-2.5 rounded-md transition-colors whitespace-nowrap"
          >
            Explore Now
          </Link>
        </div>

        <div className="w-full h-px bg-[#0078D7] mb-14" />

        <div className="grid grid-cols-1 xl:grid-cols-[40fr_60fr] gap-8 items-center">
          {/* Text content */}
          <div className="flex flex-col gap-5" data-aos="fade-right">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="content-white">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Video */}
          <div
            className="relative w-full aspect-video flex items-center justify-center mb-8"
            data-aos="fade-left"
          >
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full rounded-xl object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
