"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";

export default function Technology() {
  return (
    <section
      className="relative w-full py-16 md:py-24 bg-white overflow-hidden font-[family-name:var(--font-inter)]"
      id="technology"
    >
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12">
          {/* Left: Heading */}
          <div data-aos="fade-up">
            <span className="inline-block text-primary text-[18px] font-semibold border border-primary rounded-full px-6 py-1 mb-6">
              Innovation &amp; Technologies
            </span>

            <h2 className="heading mb-5">Leading the Future of Sustainable Battery Production</h2>

            <p className="content">
              The lead battery production now almost exclusively uses recycled batteries, where
              lead-acid battery manufacturing is today based on more than 97% of recycled
              materials, meanwhile for lithium batteries Midac has launched a virtuous R&amp;D
              project that will result in the creation of a recycling plant and the closure of the
              value chain for this technology.
            </p>
          </div>

          {/* Right: Supporting copy + CTA */}
          <div className="flex flex-col justify-center" data-aos="fade-up" data-aos-delay="100">
            <p className="content mb-6">
              The reduction in processing waste, generation of energy through a photovoltaic
              system and LNG trigeneration, as well as the adoption of Industry 4.0, demonstrate
              that innovation and sustainable development are part and parcel of who Midac is as a
              company, further strengthened by a strong focus on responsible resource management,
              continuous technological advancement, and a commitment to building a more efficient
              and environmentally conscious production ecosystem.
            </p>

            <div className="heading flex items-center shrink-0 mt-5">
              <Link
                href="#"
                className="group navlink text-[16px]! inline-flex border border-1 items-center gap-2 font-semibold! text-primary! bg-white hover:bg-transparent hover:border-white hover:text-white! px-6 py-2.5 rounded-xl transition-colors whitespace-nowrap"
              >
                Our Green Initiatives
                <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full" data-aos="fade-up">
          <img
            src="/moto/midac/technology.png"
            alt="Midac technicians assembling a battery in the production facility"
            className="w-full h-auto object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
