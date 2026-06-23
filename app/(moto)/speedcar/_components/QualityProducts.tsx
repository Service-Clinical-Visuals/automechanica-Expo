"use client";

import React from "react";
import Container from "./Container";
import { Wrench } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const features = [
  {
    title: "Innovative Technology",
    desc: "We provide a wide range of premium products engineered for durability, performance, and reliability. With a strong focus on quality and customer satisfaction.",
  },
  {
    title: "Wide Industry Applications",
    desc: "From automotive and transportation to agriculture and industrial sectors, our diverse product portfolio is designed to meet the evolving needs of various industries.",
  },
  {
    title: "Trusted Customer Support",
    desc: "We are committed to providing expert guidance, technical assistance, and dependable service, ensuring complete customer satisfaction and long-term partnerships.",
  },
];

const QualityProducts = () => {
  return (
    <section className="py-16 md:py-24 bg-[#1a1a1a]">
      <Container>

        {/* Top Row: Text left, Video right */}
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 items-center mb-12 md:mb-16">

          {/* Left: Text */}
          <div className="w-full xl:w-[48%]">
            <div className="mb-5">
              <h2 className="heading-white">
                Quality Products for Every Industry
              </h2>
              <div className="h-[3px] w-50 bg-primary mt-2" />
            </div>

            <div className="space-y-4 mb-8 tracking-[0%]! leading-[28px]!">
              <p className="content-white">
                We offer a comprehensive range of high-quality products designed to meet the diverse needs of
                automotive, industrial, transport, and agricultural sectors. Manufactured using premium-grade
                materials and advanced technologies, our solutions deliver reliable performance, enhanced
                efficiency, and long-lasting protection for equipment and machinery.
              </p>
              <p className="content-white">
                We provide a wide range of premium products engineered for durability, performance, and
                reliability. With a strong focus on quality and customer satisfaction, our solutions are designed to
                keep vehicles, machinery, and industrial operations running at their best.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-block bg-primary px-6 py-3 content-white font-bold hover:bg-primary/90 transition-colors"
            >
              Explore Our Services
            </a>
          </div>

          {/* Right: Video placeholder */}
          <div className="w-full xl:w-[52%]">
            <div className="w-full aspect-[4/3] md:aspect-video rounded-lg flex items-center justify-center overflow-hidden relative">
                <DynamicVideoPlayer type="short-1" />
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 mb-12 md:mb-16" />

        {/* Bottom Row: 3 feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF26] p-8 flex flex-col items-center text-center gap-4"
            >
              <div className="bg-primary w-16 h-12 flex items-center justify-center shrink-0">
                <Wrench size={24} className="text-white" />
              </div>
              <h3 className="subheading-white font-semibold">
                {feature.title}
              </h3>
              <p className="content-white text-[16px]! tracking-[0%]! leading-[24px]!">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default QualityProducts;
