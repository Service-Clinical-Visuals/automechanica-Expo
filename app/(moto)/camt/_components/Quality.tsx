"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";

const features = [
  {
    icon: "/moto/camt/quality/1.png",
    title: "Precision Emission Monitoring",
    description: "Accurate NOx monitoring.",
  },
  {
    icon: "/moto/camt/quality/2.png",
    title: "High Durability & Reliability",
    description: "Long-lasting performance.",
  },
  {
    icon: "/moto/camt/quality/3.png",
    title: "Global Compliance",
    description: "Meets global emission standards.",
  },
];

export default function Quality() {
  return (
    <section
      className="relative w-full py-16 md:py-24 bg-[#111827] font-[family-name:var(--font-inter)]"
      id="quality"
    >
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-[55fr_45fr] gap-10 items-center mb-12">
          {/* Left: Video */}
          <div
            className="relative w-full aspect-video flex items-center justify-center rounded-2xl overflow-hidden"
            data-aos="fade-right"
          >
            {/* Placeholder shown while no video is available */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                backgroundImage: "repeating-conic-gradient(#EAEAEA 0% 25%, #F8F9FA 0% 50%)",
                backgroundSize: "80px 80px",
              }}
            >
              <span className="heading tracking-wide">Video 01</span>
            </div>

            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right: Text content */}
          <div data-aos="fade-left">
            <h2 className="heading-white mb-5">NOx Sensor Technology</h2>

            <p className="content-white mb-5">
              CAMT&apos;s NOx sensors combine advanced technology, precise emission monitoring, and
              reliable performance to enhance vehicle efficiency and support effective emission
              control. These sensors are engineered to provide accurate nitrogen oxide measurement
              and consistent performance in modern exhaust systems.
            </p>

            <p className="content-white mb-6">
              Designed for demanding automotive environments, CAMT NOx sensors ensure compliance
              with global emission standards while delivering exceptional durability, accurate
              operation, and long-lasting performance. Engineered for a wide range of vehicle
              applications, these sensors provide reliable emission monitoring and consistent
              performance under challenging conditions.
            </p>

            <Link
              href="#"
              className="navlink inline-flex items-center gap-2 w-fit text-white! font-normal! bg-primary hover:bg-primary-hover px-8 py-2.5 rounded-md transition-colors whitespace-nowrap"
            >
              Explore
              <ArrowRight size={18} strokeWidth={2} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-stretch bg-white rounded-xl overflow-hidden"
            >
              <div className="bg-primary flex items-center justify-center px-10 py-8 shrink-0">
                <img src={feature.icon} alt="" className="w-20 h-20 object-contain" />
              </div>
              <div className="px-6 py-10">
                <h3 className="subheading mb-1">{feature.title}</h3>
                <p className="content">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
