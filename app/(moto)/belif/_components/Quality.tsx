"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
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
  "Creates a durable lubricating film that reduces friction and helps protect critical engine components from wear.",
  "Supports cleaner, more efficient engine operation with reliable performance across a wide range of temperatures.",
];

export default function Quality() {
  return (
    <section
      className="relative w-full overflow-hidden py-16 md:py-24 bg-cover bg-bottom-right"
      style={{ backgroundImage: "url(/moto/belif/qualitybg.png)" }}
      id="quality"
    >
      <Container>
        <div className="relative z-10 grid grid-cols-1 xl:grid-cols-[55fr_45fr] gap-12 items-center">
          {/* Left: Video */}
          <div className="relative w-full aspect-video order-2 xl:order-1" style={checkerboardStyle} data-aos="fade-right">
            <DynamicVideoPlayer type="short-1" className="rounded-[10px] absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right: Text content */}
          <div className="flex flex-col gap-6 order-1 xl:order-2" data-aos="fade-left">
            <div>
              <h2 className="heading mb-4 pb-4 inline-block">
                Advanced Performance in Action
                <div className="h-1 bg-primary w-44 mt-4" />
              </h2>
              <p className="content">
                See our engine oil in action and learn how its advanced formulation delivers
                consistent protection, cleaner engine operation, and extended service life for a
                wide range of vehicles and machinery. Other strong alternatives are Engineered for
                Lasting Protection and See the Difference Premium Lubrication Makes.
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-primary shrink-0">
                    <Check size={14} strokeWidth={3} className="text-black" />
                  </span>
                  <p className="content">{feature}</p>
                </li>
              ))}
            </ul>

            <Link
              href="#"
              className="mt-2 w-fit inline-flex items-center gap-3 content font-semibold! text-white! rounded-[10px] bg-gradient-to-r from-[#FF2D16] to-[#991B0D] px-6 py-3.5 hover:opacity-90 transition-opacity"
            >
              View Performance
              <ArrowRight size={18} strokeWidth={2.25} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
