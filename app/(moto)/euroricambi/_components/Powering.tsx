"use client";

import { ArrowUpRight, Check } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Container from "./Container";
import Button from "./Button";

const checklist = [
  {
    title: "Precision Engineering",
    desc: "Ensures accurate fit and smooth operation.",
  },
  {
    title: "High-Strength Materials",
    desc: "Built for maximum durability.",
  },
  {
    title: "Efficient Power Transmission",
    desc: "Optimizes drivetrain performance.",
  },
  {
    title: "Heavy-Duty Performance",
    desc: "Designed for demanding applications.",
  },
];

export default function Powering() {
  return (
    <section className="relative">
      {/* Navy header band */}
      <div className="bg-primary pt-10 pb-32 md:pb-50">
        <Container>
          <div className="px-4 sm:px-8 md:px-10 lg:px-[40px]">
            <div className="flex items-start justify-between gap-6" data-aos="fade-up">
              <div className="max-w-[1160px]">
                <h2 className="heading-white mb-3">Powering Every Transmission</h2>
                <p className="content-white text-white/80">
                  Our gearbox solutions are developed to ensure smooth, efficient, and dependable
                  power transmission across demanding vehicle applications. Engineered with precision
                  and manufactured from high-quality materials, they deliver lasting performance,
                  reduced wear, and exceptional reliability.
                </p>
              </div>

              <button
                type="button"
                aria-label="Explore gearbox solutions"
                className="hidden shrink-0 w-14 h-11 md:flex items-center justify-center bg-white rounded-sm hover:opacity-90 transition-opacity"
              >
                <img src="/moto/euroricambi/bluearrow.png" alt="" className="w-8 h-auto object-contain" />
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Overlapping content: spec card + video */}
      <Container className="relative -mt-24 md:-mt-28">
        <div className="px-4 sm:px-8 md:px-10 lg:px-[40px]">
          <div className="flex flex-col xl:flex-row gap-6 items-stretch">
            {/* Left: spec card */}
            <div
              className="w-full xl:w-[45%] 2xl:w-[30%] bg-white shadow-lg p-8 flex flex-col justify-center"
              data-aos="fade-right"
            >
              <h3 className="heading2 text-[22px]! mb-6">Engineered For Strength &amp; Reliability</h3>
              <p className="content text-[18px]! leading-relaxed mb-8">
                Engineered for durability and precision, Euroricambi gearbox components deliver
                reliable power transmission, long service life, and performance for commercial and
                heavy-duty vehicles.
              </p>

              <ul className="space-y-4 mb-8">
                {checklist.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-[#6FAF3C] flex items-center justify-center">
                      <Check size={13} strokeWidth={3} className="text-white" />
                    </span>
                    <span className="content text-[18px]! leading-snug">
                      {item.title} - {item.desc}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                text="View Specifications"
                variant="secondary"
                showIcon
                className="navlink w-fit text-[18px]! font-medium! text-white! rounded-md px-5 py-2.5 text-sm!"
              />
            </div>

            {/* Right: video */}
            <div
              className="w-full xl:w-[55%] 2xl:w-[70%] self-center relative aspect-video overflow-hidden"
              data-aos="fade-left"
              data-aos-delay="150"
            >
              <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className="h-20 w-full bg-white" />
      </Container>
    </section>
  );
}
