"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Container from "./Container";

import "swiper/css";
import "swiper/css/pagination";

const logos = [
  "/moto/axon-oil/approvals/1.png",
  "/moto/axon-oil/approvals/2.png",
  "/moto/axon-oil/approvals/3.png",
  "/moto/axon-oil/approvals/4.png",
  "/moto/axon-oil/approvals/5.png",
  "/moto/axon-oil/approvals/6.png",
];

const DESKTOP_ITEMS_PER_VIEW = 4;

export default function Approvals() {
  // Desktop carousel (lg+) — pages of DESKTOP_ITEMS_PER_VIEW cards advance per step
  const desktopScrollRef = useRef<HTMLDivElement>(null);
  const [desktopActivePage, setDesktopActivePage] = useState(0);
  const desktopPageCount = Math.max(1, Math.ceil(logos.length / DESKTOP_ITEMS_PER_VIEW));

  const handleDesktopScroll = () => {
    const el = desktopScrollRef.current;
    if (!el) return;
    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    if (maxScrollLeft <= 0) {
      setDesktopActivePage(0);
      return;
    }
    const ratio = el.scrollLeft / maxScrollLeft;
    const page = Math.round(ratio * (desktopPageCount - 1));
    setDesktopActivePage(Math.max(0, Math.min(page, desktopPageCount - 1)));
  };

  const scrollDesktopToPage = (page: number) => {
    const el = desktopScrollRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(page, desktopPageCount - 1));
    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    const target = desktopPageCount > 1 ? (clamped / (desktopPageCount - 1)) * maxScrollLeft : 0;
    el.scrollTo({ left: target, behavior: "smooth" });
  };

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

        {/* Logos carousel — mobile / tablet (< lg) */}
        <div
          className="lg:hidden"
          style={{
            "--swiper-pagination-color": "#facc15",
            "--swiper-pagination-bullet-inactive-color": "#ffffff",
            "--swiper-pagination-bullet-inactive-opacity": "0.5",
          } as React.CSSProperties}
        >
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{ 640: { slidesPerView: 2, spaceBetween: 24 } }}
            pagination={{ clickable: true }}
            className="pb-10!"
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={logo}>
                <div
                  className="aspect-square bg-transparent flex items-center justify-center"
                  data-aos-delay={index * 80}
                >
                  <img src={logo} alt="OEM approval" className="max-w-full max-h-full object-contain" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Logos carousel — desktop (lg+) */}
        <div className="hidden lg:flex relative">
          <div
            ref={desktopScrollRef}
            onScroll={handleDesktopScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style dangerouslySetInnerHTML={{ __html: `.overflow-x-auto::-webkit-scrollbar { display: none; }` }} />

            {logos.map((logo, index) => (
              <div
                key={logo}
                className="snap-start shrink-0 w-[calc(25%-18px)] aspect-square bg-transparent flex items-center justify-center"
                data-aos-delay={index * 80}
              >
                <img src={logo} alt="OEM approval" className="max-w-full max-h-full object-contain left-[10px] relative" />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination bars — desktop */}
        {desktopPageCount > 1 && (
          <div className="hidden lg:flex justify-center gap-3 mt-10">
            {Array.from({ length: desktopPageCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollDesktopToPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`h-1.5 w-14 transition-colors duration-300 focus:outline-none ${
                  desktopActivePage === i ? "bg-yellow-400" : "bg-white/30 hover:bg-white/50"
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
