"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";

const bullets = [
  "Advanced manufacturing ensures precision, quality, and reliability.",
  "Automated processes ensure durability, accuracy, and efficiency.",
  "Innovative sensors support emissions and thermal management.",
  "Rigorous quality testing ensures consistent product performance.",
  "Continuous innovation drives advanced automotive sensor solutions.",
];

export default function Advanced() {
  return (
    <section
      className="relative w-full py-16 md:py-24 bg-[#111827] font-[family-name:var(--font-inter)]"
      id="advanced"
    >
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-[45fr_55fr] gap-10 items-center mb-12">
          {/* Left: Text content */}
          <div data-aos="fade-right">
            <h2 className="heading-white mb-5">Manufacturing &amp; Technology</h2>

            <p className="content-white mb-6">
              CAMT combines advanced manufacturing capabilities with innovative automotive
              technologies to develop reliable sensor solutions for the global automotive
              industry. Through precision engineering, automated production processes, and strict
              quality control, CAMT delivers high-performance NOx sensors and thermal management
              solutions designed for accuracy, durability, and efficiency.
            </p>

            <ul className="flex flex-col gap-3">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                  <p className="content-white">{bullet}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Video */}
          <div
            className="relative w-full aspect-video flex items-center justify-center rounded-2xl overflow-hidden"
            data-aos="fade-left"
          >
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>

        <div className="w-full h-px bg-white mb-12" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="content-white max-w-[900px]" data-aos="fade-up">
            CAMT continues to advance automotive technology through innovation, precision
            manufacturing, and a strong commitment to quality. By combining advanced engineering,
            reliable production processes, and continuous improvement, CAMT delivers
            high-performance solutions that meet global automotive standards while supporting
            cleaner emissions, improved vehicle efficiency, and the future of sustainable
            mobility.
          </p>

          <Link
            href="#"
            className="navlink inline-flex items-center gap-2 shrink-0 text-white! font-normal! bg-primary hover:bg-primary-hover px-8 py-2.5 rounded-md transition-colors whitespace-nowrap w-fit"
          >
            Explore
            <ArrowRight size={18} strokeWidth={2} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
