"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "./Container";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const features = [
  {
    title: "Longer Engine Life",
    desc: "Delivers reliable lubrication and maximum protection for enhanced durability and consistent performance.",
  },
  {
    title: "Wide Product Range",
    desc: "Available in fully synthetic, semi-synthetic, and mineral formulations for various vehicle applications.",
  },
  {
    title: "Enhanced Fuel Efficiency",
    desc: "Reduces internal friction for smoother engine performance and lower fuel consumption.",
  },
];

export default function Advanced() {
  const [arrowHovered, setArrowHovered] = useState(false);

  return (
    <section className="relative bg-[#171616] pt-32 pb-20 overflow-hidden">
      <Container>


        {/* Top row: heading left, arrow button right */}
        <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between gap-6 mb-10">
          <div className="w-full lg:max-w-[1070px]">
            <span
                className=" absolute heading2 text-start z-5 mt-[-45px]"
            >
                Product Showcase
            </span>
            <h2 data-aos="fade-up" className="heading mb-4">Advanced Engine Protection</h2>
            <p data-aos="fade-up" data-aos-delay="100" className="content max-w-[1070px]">
              Protect your engine with GAND OIL's premium engine oils, engineered to deliver
              exceptional lubrication, superior wear protection, and outstanding performance.
              Designed for both gasoline and diesel engines, our advanced formulations help improve
              fuel efficiency, reduce friction, and ensure reliable operation under demanding driving
              conditions while meeting the latest international performance standards.
            </p>
          </div>

          <div
            data-aos="fade-left"
            className="relative flex-shrink-0 w-28 h-28 mt-1 self-center mr-5 z-10"
            onMouseEnter={() => setArrowHovered(true)}
            onMouseLeave={() => setArrowHovered(false)}
          >
            <Image
              src="/moto/gand-oil/arrow_grey.png"
              alt="Explore"
              width={88}
              height={88}
              className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300"
              style={{ opacity: arrowHovered ? 0 : 1 }}
            />
            <Image
              src="/moto/gand-oil/arrow_green.png"
              alt="Explore"
              width={88}
              height={88}
              className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300"
              style={{ opacity: arrowHovered ? 1 : 0 }}
            />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/10 relative z-10 mb-10" />

        {/* Bottom: features left + image right */}
        <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-stretch">

          {/* Left: feature cards + CTA */}
          <div className="flex flex-col gap-4 lg:w-[33%] flex-shrink-0">
            {features.map((f, i) => (
              <div
                key={f.title}
                data-aos="fade-right"
                data-aos-delay={i * 100}
                className="border border-white/10 lg:h-[162px] rounded-md px-5 py-5 flex items-center gap-4 bg-[#1E1E1E]"
              >
                <div className="flex gap-5">
                    <Image
                        src="/moto/gand-oil/check.png"
                        alt="check"
                        width={24}
                        height={24}
                        className="flex-shrink-0 w-6 h-6 object-contain mt-0.5 self-start mt-2"
                    />
                    <div>
                    <p className="subheading mb-2">{f.title}</p>
                    <p className="content">{f.desc}</p>
                    </div>
                </div>
              </div>
            ))}

          </div>

          {/* Right: product image / video */}
          <div data-aos="fade-left" data-aos-delay="150" className="w-full lg:w-[67%] flex-shrink-0 relative aspect-video overflow-hidden">
            <DynamicVideoPlayer type="short-1" />
          </div>
        </div>
      </Container>
    </section>
  );
}
