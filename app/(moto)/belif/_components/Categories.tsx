"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Container from "./Container";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  { key: "disinfection", src: "/moto/belif/categories/3.png", label: "Disinfection" },
  { key: "bellube", src: "/moto/belif/categories/1.png", label: "Bellube Oils" },
  { key: "antifreeze", src: "/moto/belif/categories/2.png", label: "Antifreeeze" },
  { key: "home", src: "/moto/belif/categories/4.png", label: "Home Chemistry" },
  { key: "pool", src: "/moto/belif/categories/5.png", label: "Pool Chemistry" },
];

// Base size (desktop); the card scales down from this, keeping the same aspect ratio.
const BASE_CARD_W = 500;
const BASE_CARD_H = 709;
const BASE_OFFSET = 480;
const SIDE_SCALE = 0.82;

// Total horizontal span of the 3 visible cards, per 1px of card width (center + 2 offset sides).
const SPAN_PER_CARD_W = (2 * BASE_OFFSET) / BASE_CARD_W + SIDE_SCALE;

// Leave a margin so the cards (and their drop shadow) sit inside the container, not flush against its edges.
const SAFE_WIDTH_RATIO = 0.9;

// Fit the card width to whatever the container actually measures, capped at the base size.
function getFittedCardWidth(containerWidth: number) {
  if (!containerWidth) return BASE_CARD_W;
  return Math.min(BASE_CARD_W, Math.floor((containerWidth * SAFE_WIDTH_RATIO) / SPAN_PER_CARD_W));
}

// Visual config per distance from center (-1 … +1), scaled to the current card width.
function getConfig(pos: number, cardW: number) {
  const abs = Math.abs(pos);
  const sign = pos < 0 ? -1 : 1;
  if (abs === 0) return { x: 0, scale: 1, z: 3, opacity: 1 };
  return { x: sign * (BASE_OFFSET * (cardW / BASE_CARD_W)), scale: SIDE_SCALE, z: 2, opacity: 0.95 };
}

const SWIPE_THRESHOLD = 50;

export default function Categories() {
  const [active, setActive] = useState(1);
  const [cardW, setCardW] = useState(BASE_CARD_W);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const dragStartX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const cardH = Math.round(cardW * (BASE_CARD_H / BASE_CARD_W));

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const compute = () => setCardW(getFittedCardWidth(el.clientWidth));
    compute();

    const observer = new ResizeObserver(compute);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setActive((i) => (i + 1) % slides.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta < -SWIPE_THRESHOLD) next();
    else if (delta > SWIPE_THRESHOLD) prev();
    touchStartX.current = null;
  };

  const onMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
    isDragging.current = false;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    if (Math.abs(e.clientX - dragStartX.current) > 5) isDragging.current = true;
  };
  const onMouseUp = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    if (delta < -SWIPE_THRESHOLD) next();
    else if (delta > SWIPE_THRESHOLD) prev();
    dragStartX.current = null;
  };

  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      <Container>
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-14" data-aos="fade-up">
          <div className="flex items-start flex-col">
            <h2 className="heading pb-4 inline-block">Our Product Categories</h2>
            <div className="h-1 bg-primary w-35" />
          </div>
        </div>

        {/* Category cards - carousel on small/medium screens */}
        <div
          className="lg:hidden"
          data-aos="fade-up"
          style={{
            "--swiper-pagination-color": "var(--color-primary)",
            "--swiper-pagination-bullet-inactive-color": "#D1D5DB",
            "--swiper-pagination-bullet-inactive-opacity": "1",
          } as React.CSSProperties}
        >
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={16}
            pagination={{ clickable: true }}
            className="pb-10!"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.key}>
                <div className="relative h-[80vh] w-auto aspect-[500/709] mx-auto rounded-2xl overflow-hidden">
                  <Image
                    src={slide.src}
                    alt={slide.label}
                    fill
                    className="object-cover"
                  />

                  <Link
                    href="#"
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 w-fit whitespace-nowrap inline-flex items-center gap-2 content font-bold! text-white! rounded-[10px] bg-gradient-to-r from-[#FF2D16] to-[#991B0D] px-6 py-2.5 hover:opacity-90 transition-opacity"
                  >
                    {slide.label}
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Coverflow carousel - lg and up */}
        <div className="hidden lg:flex relative items-center justify-center">
          <button
            aria-label="Previous category"
            onClick={prev}
            className="absolute left-0 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-r from-[#FF2D16] to-[#991B0D] text-white hover:opacity-90 transition-opacity"
          >
            <ChevronLeft size={22} strokeWidth={2.5} />
          </button>

          <div
            ref={wrapperRef}
            className="relative flex items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="100"
            style={{ height: cardH + 20, width: "100%" }}
            onMouseLeave={() => { dragStartX.current = null; }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
          >
            {slides.map((slide, i) => {
              let pos = i - active;
              if (pos > slides.length / 2) pos -= slides.length;
              if (pos < -slides.length / 2) pos += slides.length;
              if (Math.abs(pos) > 1) return null;
              const { x, scale, z, opacity } = getConfig(pos, cardW);

              return (
                <div
                  key={slide.key}
                  onClick={() => { if (!isDragging.current) setActive(i); }}
                  className="absolute cursor-pointer select-none rounded-2xl overflow-hidden shadow-lg"
                  style={{
                    width: cardW,
                    height: cardH,
                    zIndex: z,
                    transform: `translateX(${x}px) scale(${scale})`,
                    opacity,
                    transition: "transform 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.45s ease",
                  }}
                >
                  <Image
                    src={slide.src}
                    alt={slide.label}
                    fill
                    className="object-cover"
                    draggable={false}
                  />

                  <Link
                    href="#"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 w-fit whitespace-nowrap inline-flex items-center gap-2 content font-bold! text-white! rounded-[10px] bg-gradient-to-r from-[#FF2D16] to-[#991B0D] px-6 py-2.5 hover:opacity-90 transition-opacity"
                  >
                    {slide.label}
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </Link>
                </div>
              );
            })}
          </div>

          <button
            aria-label="Next category"
            onClick={next}
            className="absolute right-0 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-r from-[#FF2D16] to-[#991B0D] text-white hover:opacity-90 transition-opacity"
          >
            <ChevronRight size={22} strokeWidth={2.5} />
          </button>
        </div>

        {/* Pagination dots - lg and up (Swiper has its own pagination below lg) */}
        <div className="hidden lg:flex items-center justify-center gap-2 mt-8">
          {slides.map((slide, i) => (
            <button
              key={slide.key}
              aria-label={`Go to ${slide.label}`}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === active ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
