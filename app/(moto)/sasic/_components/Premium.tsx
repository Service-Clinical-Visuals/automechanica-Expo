"use client";

import { Wrench } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Container from "./Container";

const features = [
  "Superior stopping power for enhanced driving safety.",
  "Low-dust formulation for cleaner and quieter braking.",
  "Excellent heat resistance to minimize brake fade.",
  "Long service life with reduced wear on brake discs.",
];

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center" data-aos="fade-up">
      <div className="w-16 h-16 shrink-0 flex items-center justify-center bg-[#F7C41F] rotate-45 -mr-4 z-10">
        <Wrench className="-rotate-45" size={24} color="#1A1A1A" />
      </div>
      <div className="flex-1 bg-white rounded-2xl pl-15 pr-2 py-1.5 flex items-center -ml-5">
        <p className="text-[#1A1A1A] font-medium! text-[16px]! content leading-[25px]!">{text}</p>
      </div>
    </div>
  );
}

export default function Premium() {
  return (
    <section className="">
      <Container className="bg-[#242533] py-14 rounded-[24px]!">
        <div className="px-4 sm:px-8 md:px-14 lg:px-[100px]">
          {/* Heading */}
          <div className="mb-6 flex justify-center" data-aos="fade-up">
            <div className="">
              <div>
                <span className="block h-[3px] w-14 bg-[#F2A93B] mb-3" />
                <h2 className="heading-white uppercase -mt-2">
                  Engineered for Maximum Safety &amp; Performance
                </h2>
              </div>
            </div>
          </div>

          <hr className="border-t border-white/15 mb-10" />

          {/* Two-column layout */}
          <div className="flex flex-col xl:flex-row gap-10 items-center mb-10">
            {/* Left: 360 video / placeholder */}
            <div className="w-full xl:w-[50%] shrink-0" data-aos="fade-right">
              <div
                className="relative w-full aspect-video rounded-lg overflow-hidden flex items-center justify-center"
                style={{
                  backgroundColor: "#f5f5f5",
                  backgroundImage:
                    "linear-gradient(45deg, #e5e5e5 25%, transparent 25%), linear-gradient(-45deg, #e5e5e5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e5e5e5 75%), linear-gradient(-45deg, transparent 75%, #e5e5e5 75%)",
                  backgroundSize: "24px 24px",
                  backgroundPosition: "0 0, 0 12px, 12px -12px, -12px 0px",
                }}
              >
                <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover z-10" />
              </div>
            </div>

            {/* Right: description + feature grid */}
            <div className="w-full xl:w-[50%] space-y-6" data-aos="fade-left" data-aos-delay="150">
              <p className="content-white leading-[28px]! tracking-[0%]!">
                Our premium brake pads are designed to deliver exceptional stopping power, reduced
                noise, and long-lasting durability. Manufactured with high-quality friction materials,
                they provide consistent braking performance across a wide range of driving conditions
                while ensuring maximum safety and comfort.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {features.map((text, i) => (
                  <FeatureItem key={i} text={text} />
                ))}
              </div>
            </div>
          </div>

          <hr className="border-t border-white/15 mb-10" />

          {/* Bottom statement + CTA */}
          <div className="text-center" data-aos="fade-up">
            <p className="heading-white text-[20px]! max-w-4xl mx-auto mb-8">
              Built for modern vehicles and demanding road conditions, our premium brake pads combine
              advanced friction technology with precision engineering to deliver dependable braking
              performance.
            </p>

            <button
              className="inline-flex items-center justify-center bg-[#F7C41F] hover:bg-[#e09a2c] transition-colors px-8 py-3"
              style={{ clipPath: "polygon(14px 0, 100% 0, calc(100% - 14px) 100%, 0 100%)" }}
            >
              <span className="heading text-[#1A1A1A] text-[20px]! font-normal! uppercase">
                Explore Our Products
              </span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
