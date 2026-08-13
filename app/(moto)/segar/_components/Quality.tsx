"use client";

import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Quality() {
  return (
    <section className="py-16 xl:py-20 bg-white">
      <div className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10" data-aos="fade-up">
          <h3 className="text-[#DF1222] roboto-font font-semibold section-text mb-3">Production Technology</h3>
          <h2 className="section-title text-[#202020] roboto-font font-semibold mb-2">
            From Local Roots to Global Horn Leader
          </h2>
        </div>

        {/* Full Width Image */}
        <div className="w-full h-full overflow-hidden mb-5 rounded-sm" data-aos="fade-up">
          <img
            src="/moto/segar/bg2.png"
            alt="Production Line"
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">Production Image</div>' }}
          />
        </div>

        {/* Text Below Image */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center" data-aos="fade-up">
          <p className="text-[#404040] font-regular outfit-font section-text leading-relaxed mb-8">
            Seger Horns, Turkey's leading horn manufacturer and a globally recognized brand, leverages over 30 years of experience to deliver high-quality products worldwide. With production facilities in Bursa (Turkey) and Dongguan (China), the company achieves an annual capacity of 15 million units while maintaining strong customer satisfaction. Continuous investment in R&D, advanced design tools, and modern production methods ensures innovative, reliable horn solutions. By adopting lean manufacturing, KANBAN systems, and strict quality control processes, Seger Horns consistently delivers efficient, cost-effective, and high-performance products that meet evolving industry standards.
          </p>

          <Button href="#" variant="primary-outline" className="flex items-center gap-2 btn-text">
            Learn More <ArrowRight size={18} />
          </Button>
        </div>

      </div>
    </section>
  );
}
