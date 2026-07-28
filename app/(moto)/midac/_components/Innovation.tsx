"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";

const features = [
  "Engineered with advanced materials and precision manufacturing",
  "Suitable for automotive, industrial, and backup power systems",
  "Maintenance-free designs with extended service life performance",
];

export default function Innovation() {
  return (
    <section
      className="relative w-full py-16 md:py-24 bg-[#F9F9F9] font-[family-name:var(--font-inter)]"
      id="innovation"
    >
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-[45fr_55fr] gap-10 items-center">
          {/* Left: Text content */}
          <div data-aos="fade-right">
            <span className="inline-block text-primary text-[18px] font-semibold border border-primary rounded-full px-6 py-1 mb-6">
              Next-Generation Battery Technologies
            </span>

            <h2 className="heading mb-5">Engineered for performance, built for reliability</h2>

            <p className="content mb-6">
              Our product portfolio includes innovative battery technologies developed to deliver
              consistent power, enhanced efficiency, and superior durability. Designed to meet
              international standards, our solutions support start-stop systems, industrial
              operations, and energy storage needs with maximum reliability and safety.
            </p>

            <ul className="flex flex-col gap-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <ArrowRight size={18} strokeWidth={2} className="text-primary shrink-0 mt-0.5" />
                  <p className="content">{feature}</p>
                </li>
              ))}
            </ul>

            <div className="heading flex items-center shrink-0 mt-5">
              <Link
                href="#"
                className="group navlink text-[16px]! inline-flex border border-1 items-center gap-2 font-semibold! text-primary! bg-white hover:bg-transparent hover:border-white hover:text-white! px-6 py-2.5 rounded-xl transition-colors whitespace-nowrap"
              >
                Explore Products
                <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right: Video */}
          <div
            className="relative w-full aspect-video flex items-center justify-center"
            data-aos="fade-left"
          >
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
