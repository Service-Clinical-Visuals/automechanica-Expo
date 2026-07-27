"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";

const features = [
  {
    title: "Advanced Brake Technologies",
    description: "Innovative materials and engineering improve braking performance and lifespan.",
  },
  {
    title: "Built for Modern Vehicles",
    description: "Engineered for modern passenger and light commercial vehicles.",
  },
];

export default function Innovation() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-[#0D0D0D] overflow-hidden" id="innovation">
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-[65fr_35fr] gap-10 items-center">
          {/* Left: Video */}
          <div
            className="relative w-full aspect-video flex items-center justify-center order-2 xl:order-1"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right: Text content */}
          <div data-aos="fade-left" className=" order-1 xl:order-2">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-3.5 h-3.5 bg-secondary shrink-0" />
              <h2 className="heading-white uppercase">Innovation Behind Every Brake Disc</h2>
            </div>

            <p className="content-white mb-8">
              Innovation drives every Zimmermann braking solution. Advanced materials,
              corrosion-resistant coatings, and precision manufacturing technologies combine to
              deliver superior stopping power, enhanced durability, and long-term performance for
              modern vehicles.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="bg-white p-5">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={19} strokeWidth={2} className="text-secondary shrink-0 mt-0.5" />
                    <p className="content">
                      <span className="font-bold!">{feature.title}</span> -{" "}
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="heading">
              <Link
                href="#"
                className="inline-block bg-secondary hover:bg-secondary-hover text-white! text-[16px]! tracking-[1px]! leading-[20px]! uppercase px-6 py-2.5 rounded transition-colors"
              >
                View Product
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
