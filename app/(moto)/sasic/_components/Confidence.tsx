"use client";

import { Wrench } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Container from "./Container";

const features = [
  {
    title: "Advanced Friction Technology",
    text: "Optimized friction compounds ensure powerful, consistent braking in every journey.",
  },
  {
    title: "Smooth & Silent Operation",
    text: "Engineered to minimize vibration and unwanted noise for a refined driving experience.",
  },
  {
    title: "High-Temperature Stability",
    text: "Maintains reliable braking performance even during prolonged or heavy braking.",
  },
];

function FeatureRow({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex items-center gap-8" data-aos="fade-up">
      <div className="w-14 h-14 shrink-0 flex items-center justify-center bg-primary rotate-45 mt-1">
        <Wrench className="-rotate-45" size={24} color="#1A1A1A" />
      </div>
      <div className="pt-4">
        <h3 className="heading2 uppercase">{title}</h3>
        <p className="content text-[18px]! leading-[28px]!">{text}</p>
      </div>
    </div>
  );
}

export default function Confidence() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="px-4 sm:px-8 md:px-14 xl:px-[100px]">
          <div className="flex flex-col xl:flex-row gap-10 items-center">
            {/* Left: video placeholder */}
            <div className="w-full xl:w-[65%] shrink-0" data-aos="fade-right">
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
                <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover z-10" />
              </div>
            </div>

            {/* Right: content */}
            <div className="w-full xl:w-[35%] flex flex-col gap-6" data-aos="fade-left" data-aos-delay="150">
              <div>
                <span className="block h-[3px] w-16 bg-[#F2A93B] mb-3" />
                <h2 className="heading uppercase -mt-1 mb-3">
                  Confidence in Every Stop
                </h2>
                <p className="content">
                  Every pad is designed to provide smooth, stable, and fade-resistant stopping power
                  while maximizing comfort, durability, and driving confidence.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                {features.map((f, i) => (
                  <FeatureRow key={i} {...f} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
