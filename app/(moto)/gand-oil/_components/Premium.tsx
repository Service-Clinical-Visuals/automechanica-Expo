"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "./Container";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const bullets = [
  "Advanced synthetic formulation engineered to deliver superior engine protection and long-lasting performance.",
  "Excellent resistance to wear, corrosion, and oxidation for enhanced engine durability and reliability.",
  "Outstanding thermal stability ensures consistent lubrication and reliable protection in both high and low-temperature conditions.",
];

function CheckIcon() {
  return (
    <Image
      src="/moto/gand-oil/check.png"
      alt="check"
      width={28}
      height={28}
      className="flex-shrink-0 w-6 h-6 object-contain mt-0.5"
    />
  );
}

export default function Premium() {
  const [arrowHovered, setArrowHovered] = useState(false);

  return (
    <section className="relative bg-[#0d0c0c] pt-36 pb-20 overflow-hidden">
      <Container>

        {/* Top row: heading left, arrow button right */}
        <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between gap-6 mb-10">
          <div className="w-full lg:max-w-[905px]">
            <span
                className=" absolute heading2 text-center z-5 mt-[-60px]"
            >
                Explore In 360°
            </span>
            <h2 data-aos="fade-up" className="heading mb-4">Premium Engine Oil</h2>
            <p data-aos="fade-up" data-aos-delay="100" className="content max-w-[905px]">
              At GANDOIL, we are committed to providing lubricants that ensure maximum efficiency
              and dependable performance. Our engine oils offer excellent thermal and oxidation
              stability, helping to protect critical engine components from high temperatures,
              corrosion, and harmful deposits while extending oil service intervals.
            </p>
          </div>

          <div
            data-aos="fade-left"
            className="relative flex-shrink-0 w-28 h-28 mt-1 z-10"
            onMouseEnter={() => setArrowHovered(true)}
            onMouseLeave={() => setArrowHovered(false)}
          >
            <Image
              src="/moto/gand-oil/arrow_grey.png"
              alt="Explore"
              width={112}
              height={112}
              className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300"
              style={{ opacity: arrowHovered ? 0 : 1 }}
            />
            <Image
              src="/moto/gand-oil/arrow_green.png"
              alt="Explore"
              width={112}
              height={112}
              className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300"
              style={{ opacity: arrowHovered ? 1 : 0 }}
            />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/10 relative z-10 mb-8" />

        {/* Bottom: image left + content right */}
        <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center">
          {/* Left: product image */}
          <div data-aos="fade-right" className="w-full lg:w-[58%] flex-shrink-0 relative aspect-video overflow-hidden">
            <DynamicVideoPlayer type="360" />
          </div>

          {/* Right: content */}
          <div data-aos="fade-left" data-aos-delay="150" className="flex flex-col gap-6">
            <h3 className="heading font-normal! text-[24px]!">
              Advanced Lubrication For Superior Engine Performance
            </h3>
            <p className="content">
              GANDOIL Premium Engine Oils are engineered with advanced lubricant technology to provide
              outstanding engine protection, exceptional performance, and long-lasting durability.
              Developed for modern gasoline and diesel engines, our formulations help reduce friction,
              prevent wear, and maintain superior engine cleanliness, ensuring reliable performance in
              both everyday driving and demanding operating conditions. Designed for a wide range of
              vehicles, GANDOIL Engine Oils deliver dependable performance, improved engine efficiency,
              and long-lasting protection.
            </p>

            <ul className="flex flex-col gap-5">
              {bullets.map((text, i) => (
                <li key={i} data-aos="fade-up" data-aos-delay={i * 100} className="flex items-start gap-3">
                  <CheckIcon />
                  <p className="content">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
