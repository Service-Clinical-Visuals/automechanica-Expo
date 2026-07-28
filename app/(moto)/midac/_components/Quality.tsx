"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";

const features = [
  "Wide range of automotive and industrial battery solutions for global markets.",
  "Advanced AGM and EFB technologies for modern vehicles and start-stop systems.",
  "High efficiency, durability, and reliable power output under demanding conditions.",
  "Designed for diverse applications and operating conditions across multiple industries.",
];

export default function Quality() {
  return (
    <section
      className="relative w-full py-16 md:py-24 bg-[#F9F9F9] font-[family-name:var(--font-inter)]"
      id="quality"
    >
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-[55fr_45fr] gap-10 items-center">
          {/* Left: Video */}
          <div
            className="relative order-2 xl:order-1 w-full aspect-video flex items-center justify-center"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right: Text content */}
          <div data-aos="fade-left" className="order-1 xl:order-2">
            <span className="inline-block text-primary text-[18px] font-semibold border border-primary rounded-full px-6 py-1 mb-6">
              Advanced Energy Storage Solutions
            </span>

            <h2 className="heading mb-5">Reliable power for modern applications</h2>

            <p className="content mb-6">
              We offer a comprehensive range of high-performance battery solutions designed to
              meet the demands of automotive, industrial, and energy storage systems. From
              advanced AGM and EFB batteries to specialized energy solutions, our products are
              engineered using cutting-edge technology to ensure efficiency, safety, and
              long-lasting performance.
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
        </div>
      </Container>
    </section>
  );
}
