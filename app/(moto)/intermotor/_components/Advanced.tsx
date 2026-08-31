"use client";

import Link from "next/link";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";

const checkerboardStyle = {
  backgroundImage:
    "linear-gradient(45deg, #e5e5e5 25%, transparent 25%), linear-gradient(-45deg, #e5e5e5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e5e5e5 75%), linear-gradient(-45deg, transparent 75%, #e5e5e5 75%)",
  backgroundSize: "60px 60px",
  backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0px",
  backgroundColor: "#f9f9f9",
};

export default function Advanced() {
  return (
    <section
      className="relative w-full py-16 md:py-24 bg-[#0F172A] font-[family-name:var(--font-inter)]"
      id="advanced"
    >
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
          {/* Left: Video */}
          <div
            className="relative w-full aspect-video flex items-center justify-center rounded-2xl overflow-hidden"
            style={checkerboardStyle}
            data-aos="fade-right"
          >
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right: Text content */}
          <div data-aos="fade-left">
            <h2 className="heading-white mb-5">Advanced Emission Control Technology</h2>

            <div className="flex flex-col gap-4 mb-8">
              <p className="content-white">
                Built with advanced sensing technology, our NOx Sensors continuously measure
                exhaust gas composition to support modern diesel and gasoline engine management
                systems. Their fast response time and high precision help ensure accurate emission
                monitoring and efficient engine operation.
              </p>
              <p className="content-white">
                Designed to optimize SCR (Selective Catalytic Reduction) systems, our sensors help
                minimize harmful emissions while protecting critical exhaust components. With
                reliable performance in demanding conditions, they improve overall engine
                efficiency and support compliance with modern emission standards.
              </p>
            </div>

            <Link
              href="#"
              className="navlink inline-block text-white! font-semibold! bg-primary hover:bg-primary-hover px-8 py-2.5 rounded-md transition-colors whitespace-nowrap"
            >
              Explore
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
