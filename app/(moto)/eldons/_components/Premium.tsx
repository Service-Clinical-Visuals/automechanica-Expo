"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Superior Wear Protection",
    desc: "Advanced additives create a strong protective film that minimizes friction and reduces engine wear, helping extend engine life."
  },
  {
    title: "Enhanced Engine Cleanliness",
    desc: "Special cleaning agents prevent sludge and deposit formation, keeping vital engine components clean for optimal performance."
  },
  {
    title: "Outstanding Thermal & Oxidation Stability",
    desc: "Engineered to withstand extreme temperatures, the oil resists oxidation and maintains its performance even under demanding conditions."
  }
];

export default function Premium() {
  return (
    <section className="w-full py-16  bg-[#EDF3FF]">
      <div className="custom-container">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10 pb-8 border-b border-gray-300">
          <div className="max-w-4xl">
            <Typography variant="h2" color="dark" className="mb-4">
              Premium Engine Oil
            </Typography>
            <Typography variant="p" color="muted">
              Keep your engine running at its best with high-performance engine oils designed to deliver superior protection, improved efficiency, and long-lasting reliability. Formulated to meet modern engine requirements, our oils ensure smooth performance in every driving condition.
            </Typography>
          </div>
          <div className="shrink-0 mt-4 lg:mt-0">
            <Button text="View Product Details" variant="primary" />
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" data-aos="fade-up">
          {/* Left: Video */}
          <div className="lg:col-span-9 order-2 lg:order-1 h-full">
            <div className="rounded-xl overflow-hidden h-full min-h-[400px] shadow-sm">
              <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right: Details */}
          <div className="lg:col-span-3 order-1 lg:order-2 flex flex-col justify-between">
            <div>
              <Typography variant="h2" color="dark" className="mb-4">
                Engineered For Maximum Performance
              </Typography>
              <Typography variant="p" color="muted" className="mb-6 text-[15px]">
                Our premium engine oils use advanced lubricant technology to deliver exceptional engine protection, improved efficiency, and long-lasting performance. Designed for modern engines, they reduce wear, maintain cleanliness, and ensure reliable operation.
              </Typography>

              <ul className="flex flex-col gap-5 mb-8">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-7 h-7 min-[3800px]:w-12 min-[3800px]:h-12 text-[var(--color-primary)] shrink-0 mt-0.5" fill="var(--color-primary)" color="white" />
                    <div>
                      <Typography variant="p" color="muted">{feature.title} - </Typography>
                      <Typography variant="p" color="muted">{feature.desc}</Typography>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto">
              <Button text="Watch Product Video" variant="primary" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
