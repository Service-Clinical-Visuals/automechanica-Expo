"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "./Container";

const logos = [
  "/moto/axon-oil/approvals/1.png",
  "/moto/axon-oil/approvals/2.png",
  "/moto/axon-oil/approvals/3.png",
  "/moto/axon-oil/approvals/4.png",
  "/moto/axon-oil/approvals/5.png",
  "/moto/axon-oil/approvals/6.png",
];

export default function Approvals() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getSlideStep = () => {
    const el = scrollRef.current;
    if (!el) return 0;
    const card = el.querySelector<HTMLElement>(".snap-start");
    if (!card) return 0;
    const gap = parseFloat(window.getComputedStyle(el).columnGap || "0");
    return card.offsetWidth + gap;
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const step = getSlideStep();
    if (!step) return;
    const index = Math.round(scrollRef.current.scrollLeft / step);
    setActiveIndex(Math.max(0, Math.min(index, logos.length - 1)));
  };

  const scrollToSlide = (index: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({ left: index * getSlideStep(), behavior: "smooth" });
  };

  const prevSlide = () => scrollToSlide(Math.max(0, activeIndex - 1));
  const nextSlide = () => scrollToSlide(Math.min(logos.length - 1, activeIndex + 1));

  return (
    <section className="w-full bg-primary py-16 md:py-20 overflow-hidden">
      <Container>
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6" data-aos="fade-up">
          <div className="max-w-[1100px]">
            <h2 className="heading-white mb-3">OEM Approvals</h2>
            <p className="content-white">
              Xtreme lubricants meet the characteristics required by the world leaders in car
              manufacturing. Many products passed indeed the long path of tests to obtain the most
              prestigious approvals (Mercedes-Benz, Volkswagen, MAN, MACK, Renault, Volvo…).
              Applications for new OEM approvals continue rapidly.
            </p>
          </div>

          <Link
            href="#"
            className="inline-flex max-w-[200px] items-center relative shrink-0 group bg-white text-white pl-6 pr-16 py-1.5"
          >
            <span className="navlink text-primary! whitespace-nowrap">Our Approvals</span>
            <span className="absolute right-[-25px] top-1/2 -translate-y-1/2 w-11 h-12 shrink-0">
              <span className="absolute inset-[2px] bg-primary [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
              <span className="absolute inset-[4.5px] bg-white [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] flex items-center justify-center">
                <ArrowRight size={34} className="text-primary transition-transform group-hover:translate-x-0.5" />
              </span>
            </span>
          </Link>
        </div>

        <div className="h-px bg-[#FFFFFF54] my-10" />

        {/* Logos carousel */}
        <div className="relative flex">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style dangerouslySetInnerHTML={{ __html: `.overflow-x-auto::-webkit-scrollbar { display: none; }` }} />

            {logos.map((logo, index) => (
              <div
                key={logo}
                className="snap-start shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] aspect-square bg-transparent flex items-center justify-center"
                // data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <img src={logo} alt="OEM approval" className="max-w-full max-h-full  object-contain left-[10px] relative" />
              </div>
            ))}
          </div>

          {/* Small-screen carousel arrows */}
          <button
            type="button"
            aria-label="Previous slide"
            onClick={prevSlide}
            className="lg:hidden absolute left-1 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft size={20} className="text-primary" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={nextSlide}
            className="lg:hidden absolute right-1 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight size={20} className="text-primary" />
          </button>
        </div>

        {/* Pagination bars */}
        {logos.length > 1 && (
          <div className="hidden lg:flex justify-center gap-3 mt-10">
            {logos.map((logo, i) => (
              <button
                key={logo}
                onClick={() => scrollToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 w-14 transition-colors duration-300 focus:outline-none ${
                  activeIndex === i ? "bg-yellow-400" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        )}

        <div className="h-px bg-[#FFFFFF54] mt-10 mb-8" />

        <p className="content-white text-center text-[24px]! font-normal! italic max-w-[1300px] mx-auto">
          The following car manufacturers brands or logos, used for informational purposes only,
          belong to their respective owners or holders and may be protected by patents and / or
          copyrights granted or registered by the competent authorities.
        </p>
      </Container>
    </section>
  );
}
