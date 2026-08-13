"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";

const checkerboardStyle = {
  backgroundImage:
    "linear-gradient(45deg, #e5e5e5 25%, transparent 25%), linear-gradient(-45deg, #e5e5e5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e5e5e5 75%), linear-gradient(-45deg, transparent 75%, #e5e5e5 75%)",
  backgroundSize: "60px 60px",
  backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0px",
  backgroundColor: "#f9f9f9",
};

export default function Premium() {
  return (
    <section
      className="relative w-full bg-[#F9F9F9] py-16 md:py-24 overflow-hidden font-[family-name:var(--font-inter)]"
      id="premium"
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-[45fr_55fr] gap-14 items-center">
          {/* Text content */}
          <div data-aos="fade-right">
            <span className="inline-block text-primary text-[18px] font-semibold border border-primary rounded-full px-6 py-1 mb-6">
              Advanced AGM Battery Technology
            </span>

            <h2 className="heading leading-[150%]! mb-6">
              High-performance power for modern energy demands
            </h2>

            <div className="flex flex-col gap-4 mb-8">
              <p className="content">
                Our AGM (Absorbent Glass Mat) batteries are engineered to deliver superior power,
                reliability, and safety for demanding automotive and industrial applications.
                Designed with advanced materials and sealed construction, these batteries provide
                consistent energy output, long service life, and maintenance-free operation&mdash;ideal
                for start-stop systems and high-energy requirements.
              </p>
              <p className="content">
                AGM technology ensures enhanced efficiency through gas recombination, low
                self-discharge, and resistance to vibration, making it a dependable solution for
                modern vehicles and standby power systems.
              </p>
            </div>

            <div className="heading flex items-center shrink-0 mt-5">
              <Link
                href="#"
                className="group navlink text-[16px]! inline-flex border border-1 items-center gap-2 font-semibold! text-primary! bg-white hover:bg-transparent hover:border-white hover:text-white! px-6 py-2.5 rounded-xl transition-colors whitespace-nowrap"
              >
                Explore Batteries
                <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Video */}
          <div
            className="relative w-full aspect-video flex items-center justify-center"
            style={checkerboardStyle}
            data-aos="fade-left"
          >
            <span className="font-[family-name:var(--font-poppins)] absolute inset-0 flex items-center justify-center text-[28px] font-bold text-[#1A1A1A]">
              360 Degree Video
            </span>
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
