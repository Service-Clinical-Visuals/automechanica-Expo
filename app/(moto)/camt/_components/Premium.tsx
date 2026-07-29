"use client";

import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";

export default function Premium() {
  return (
    <section
      className="relative w-full bg-[#111827] py-16 md:py-20 overflow-hidden font-[family-name:var(--font-inter)]"
      id="premium"
    >
      <Container className="relative z-10 flex flex-col items-center">
        <div className="text-center max-w-[1100px] mx-auto mb-14" data-aos="fade-up">
          <h2 className="heading-white mb-4">Explore Every Detail in 360&deg;</h2>
          <p className="content-white">
            Experience CAMT Automotive&apos;s NOx Sensors from every angle with our interactive
            360&deg; product view. Discover the precision engineering, advanced sensor technology,
            and premium build quality that ensure accurate emission monitoring and reliable
            long-term performance.
          </p>
        </div>

        {/* Video */}
        <div
          className="relative w-full aspect-video rounded-2xl max-w-[1300px] overflow-hidden"
          data-aos="fade-up"
        >
          <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </Container>
    </section>
  );
}
