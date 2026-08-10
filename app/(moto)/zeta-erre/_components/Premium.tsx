"use client";

import { ArrowUpRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";

const benefits = [
  {
    lead: "Improved decision-making through transparent product presentation -",
    rest: " Builds trust by giving customers a complete and honest view before purchase",
  },
  {
    lead: "Clear understanding of design, compatibility, and application -",
    rest: " Helps users evaluate how the product integrates and performs within mechanical systems.",
  },
  {
    lead: "Authentic representation of materials and surface finish -",
    rest: " Showcases the real-world look and feel of the product with high-fidelity visualization.",
  },
];

export default function Premium() {
  return (
    <section className="relative w-full bg-[#0d0d0d] py-16 md:py-20 overflow-hidden" id="premium">
      <Container className="relative">
        <div className="grid grid-cols-1 xl:grid-cols-[55fr_45fr] gap-10 items-center">
          {/* Video */}
          <div className="relative w-full order-2 xl:order-1 h-full items-center flex overflow-hidden" data-aos="fade-right">
            <DynamicVideoPlayer type="360" className="relative aspect-video" />
          </div>

          {/* Text content */}
          <div className="flex flex-col order-1 xl:order-2" data-aos="fade-left">
            <h2 className="heading-white mb-4">Explore Every Detail</h2>
            <p className="content-white mb-8">
              Experience Zeta-Erre&apos;s transmission components from every angle with an
              interactive 360&deg; product view. Examine the precision engineering, robust
              construction, and premium-quality finish of our CV Shafts and CV Joints in detail.
              Designed to showcase every component with clarity, the interactive viewer helps
              customers better understand the craftsmanship, fit, and durability behind each
              product before making a purchasing decision.
            </p>

            <div className="relative bg-[#FDBA4C33] rounded-lg p-6 md:p-8 mt-auto">
              <ul className="flex flex-col gap-5 mb-10">
                {benefits.map((benefit) => (
                  <li key={benefit.lead} className="flex items-start gap-3">
                    <img src="/moto/zeta-erre/puzzle.png" alt="" className="w-5 h-5 shrink-0 mt-1 object-contain" />
                    <p className="content-white">
                      <span className="font-semibold">{benefit.lead}</span>
                      {benefit.rest}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="absolute -bottom-3 -right-3 flex items-center justify-center w-20 h-20 rounded-full bg-[#111111]">
                <button
                  type="button"
                  aria-label="Learn more"
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-[#1A1A1A] hover:bg-[#e0961c] transition-colors"
                >
                  <ArrowUpRight size={22} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
