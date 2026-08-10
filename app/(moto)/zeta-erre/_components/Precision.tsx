"use client";

import Link from "next/link";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";

export default function Precision() {
  return (
    <section
      className="relative w-full py-16 md:py-24 bg-[#111111] font-[family-name:var(--font-inter)]"
      id="precision"
    >
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-[45fr_55fr] gap-5 items-center">
          {/* Left: Text content */}
          <div data-aos="fade-right">
            <h2 className="heading-white mb-5">Precision Built at Every Stage</h2>

            <p className="content-white mb-5">
              Take a closer look at how Zeta-Erre transforms high-quality materials into
              dependable transmission components. From precision machining and controlled
              assembly to comprehensive quality inspections, every stage of the manufacturing
              process is carefully managed to ensure consistent performance, durability, and
              OEM-equivalent quality.
            </p>

            <p className="content-white mb-8">
              Advanced manufacturing and modern production techniques ensure precision,
              consistency, and reliable product quality across every component, while rigorous
              quality control ensures every CV Shaft and CV Joint undergoes thorough inspections
              and testing to guarantee durability, accurate fitment, and long-lasting performance.
            </p>

            <Link
              href="#"
              className="navlink inline-flex items-center w-fit text-dark! font-normal! bg-primary hover:bg-primary-hover px-8 py-2.5 rounded-md transition-colors whitespace-nowrap"
            >
              View Product
            </Link>
          </div>

          {/* Right: Video */}
          <div
            className="relative w-full aspect-video flex items-center justify-center"
            data-aos="fade-left"
          >
            <DynamicVideoPlayer type="short-3" />
          </div>
        </div>
      </Container>
    </section>
  );
}
