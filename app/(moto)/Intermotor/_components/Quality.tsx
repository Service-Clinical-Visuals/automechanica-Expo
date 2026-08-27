"use client";

import Link from "next/link";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";

const features = [
  "Advanced Sensing Technology for Precise Emission Monitoring",
  "OE-Quality Engineering with Premium Materials",
  "Reliable Performance in Demanding Driving Conditions",
  "Rigorous Quality Testing for Long-Term Durability",
  "Optimized Engine Efficiency and Emission Compliance",
];

export default function Quality() {
  return (
    <section
      className="relative w-full py-16 md:py-24 bg-[#0F172A] font-[family-name:var(--font-inter)]"
      id="quality"
    >
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-[60fr_40fr] gap-10 items-center mb-12">
          {/* Left: Video */}
          <div
            className="relative w-full aspect-video flex items-center justify-center rounded-2xl overflow-hidden"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right: Text content */}
          <div data-aos="fade-left">
            <h2 className="heading-white mb-5">Advanced NOx Sensor Technology</h2>

            <p className="content-white mb-6">
              Discover the innovation behind our OE-quality NOx Sensors, engineered with advanced
              sensing technology and precision manufacturing to deliver accurate emission
              monitoring, reliable engine performance, and exceptional durability. Built to meet
              Original Equipment (OE) standards, every sensor is rigorously tested to ensure
              consistent quality, long service life, and dependable performance across a wide
              range of automotive applications.
            </p>

            <ul className="flex flex-col gap-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                  <p className="content-white">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full h-px bg-primary mb-12" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="content-white max-w-[900px]" data-aos="fade-up">
            Every NOx Sensor is manufactured using premium materials and advanced production
            processes to ensure reliable operation in demanding driving conditions. Combining
            precision engineering with rigorous quality testing, our sensors deliver dependable
            performance, extended durability, and trusted OE-quality across a wide range of
            passenger and commercial vehicles.
          </p>

          <Link
            href="#"
            className="navlink shrink-0 text-white! font-semibold! bg-primary hover:bg-primary-hover px-8 py-2.5 rounded-md transition-colors whitespace-nowrap w-fit"
          >
            Explore
          </Link>
        </div>
      </Container>
    </section>
  );
}
