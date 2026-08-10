"use client";

import Link from "next/link";
import { Settings, Shield } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";

const features = [
  {
    icon: Settings,
    title: "OEM-Equivalent Precision",
    description:
      "Engineered to precise specifications for accurate fitment, smooth power transmission, and dependable performance.",
  },
  {
    icon: Shield,
    title: "Quality You Can Trust",
    description:
      "Made from premium materials and rigorously tested for durability, reliability, and consistent everyday performance.",
  },
];

export default function Quality() {
  return (
    <section
      className="relative w-full py-16 md:py-24 bg-[#111111] font-[family-name:var(--font-inter)]"
      id="quality"
    >
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-[53fr_47fr] gap-6 items-center">
          {/* Left: Video */}
          <div
            className="relative w-full order-2 xl:order-1 aspect-video flex items-center justify-center overflow-hidden"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer type="short-1" className="absolute" />
          </div>

          {/* Right: Text content */}
          <div data-aos="fade-left" className="order-1 xl:order-2">
            <h2 className="heading-white mb-5">Engineered for Reliable Performance</h2>

            <p className="content-white mb-8">
              Discover how Zeta-Erre combines precision engineering, advanced manufacturing, and
              rigorous quality control to produce high-performance transmission components. Every
              CV Shaft and CV Joint is designed to deliver efficient power transfer, smooth
              vehicle operation, and long-lasting reliability while meeting the demanding
              standards of the automotive aftermarket.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="bg-primary/20 border border-primary/20 p-4 py-8"
                  >
                    <div className="flex flex-row items-center justify-start mb-4">
                      <Icon size={30} strokeWidth={3} className="text-white" />
                      <h3 className="subheading-white ml-2 text-[24px]!">{feature.title}</h3>
                    </div>
                    <p className="content-white text-[16px]!">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            <Link
              href="#"
              className="navlink inline-flex items-center w-fit text-dark! font-normal! bg-primary hover:bg-primary-hover px-8 py-2.5 transition-colors whitespace-nowrap"
            >
              View Product
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
