"use client";

import { useState, useRef, useEffect, useLayoutEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "./Container";

const slides = [
  { key: "1", src: "/moto/ifa/gallery/4.png" },
  { key: "2", src: "/moto/ifa/gallery/5.png" },
  { key: "3", src: "/moto/ifa/gallery/1.png" },
  { key: "4", src: "/moto/ifa/gallery/2.png" },
  { key: "5", src: "/moto/ifa/gallery/3.png" },
];

// Base sizes/offsets are tuned for this reference container width, then scaled to fit.
const REFERENCE_WIDTH = 1400;
const MIN_FIT = 0.32;

// Visual config per distance from center (-2 … +2). `fit` scales every size/offset proportionally.
function getConfig(pos: number, fit: number) {
  const abs = Math.abs(pos);
  const sign = pos < 0 ? -1 : 1;
  if (abs === 0) return { x: 0,               width: 500 * fit, height: 500 * fit, scale: 1.00, rotateY: 0,          z: 5, opacity: 1.00 };
  if (abs === 1) return { x: sign * 400 * fit, width: 250 * fit, height: 500 * fit, scale: 1.1,  rotateY: -sign * 45, z: 4, opacity: 1 };
  return             { x: sign * 660 * fit, width: 250 * fit, height: 500 * fit, scale: 1.35, rotateY: -sign * 75, z: 3, opacity: 1 };
}

const SWIPE_THRESHOLD = 50;
const CYCLE_MS = 2500;

export default function Gallery () {
  const [active, setActive] = useState(2);
  const [fit, setFit] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const dragStartX = useRef<number | null>(null);
  const isDragging = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setActive((i) => (i + 1) % slides.length);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useLayoutEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const updateFit = (width: number) => {
      setFit(Math.max(MIN_FIT, Math.min(1, width / REFERENCE_WIDTH)));
    };

    updateFit(el.clientWidth);

    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width;
      if (width) updateFit(width);
    });
    observer.observe(el);

    return () => observer.disconnect();
  }, [isMobile]);

  const startCycle = useCallback(() => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, CYCLE_MS);
  }, []);

  const stopCycle = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startCycle();
    return () => stopCycle();
  }, [startCycle, stopCycle]);

  // Touch
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

  // Mouse drag
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
    <section
      className="relative bg-[#0a0a0a] bg-cover bg-center bg-no-repeat pt-24 pb-28 overflow-hidden"
      style={{ backgroundImage: "url(/moto/ifa/gallery/bg.png)" }}
    >
      <Container>

        {/* Heading */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <h2 data-aos="fade-up" className="heading-white flex items-center justify-center gap-3 mb-4">
            <span className="text-primary text-[20px]">▶</span>
            Our Gallery
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="content-white max-w-[620px]">
            Our gallery offers a visual journey through our company, showcasing our products,
            manufacturing capabilities, testing procedures, infrastructure, and commitment to
            quality.
          </p>
        </div>

        {isMobile ? (
          /* Simple carousel (below 1024px) */
          <div
            className="relative z-10 mx-auto w-full"
            data-aos="fade-up"
            data-aos-delay="200"
            onMouseEnter={stopCycle}
            onMouseLeave={() => { dragStartX.current = null; startCycle(); }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden select-none">
              <Image
                src={slides[active].src}
                alt={`Gallery ${slides[active].key}`}
                fill
                className="object-cover"
                draggable={false}
              />
            </div>

            <button
              type="button"
              aria-label="Previous slide"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft size={22} className="text-white" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight size={22} className="text-white" />
            </button>
          </div>
        ) : (
          /* Coverflow carousel */
          <div
            ref={stageRef}
            className="relative z-10 flex items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
            style={{ height: 680 * fit, perspective: "1200px" }}
            onMouseEnter={stopCycle}
            onMouseLeave={() => { dragStartX.current = null; startCycle(); }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
          >
            {slides.map((slide, i) => {
              let pos = i - active;
              // Wrap to shortest path for infinite loop
              if (pos > slides.length / 2) pos -= slides.length;
              if (pos < -slides.length / 2) pos += slides.length;
              if (Math.abs(pos) > 2) return null;
              const { x, width, height, scale, rotateY, z, opacity } = getConfig(pos, fit);

              return (
                <div
                  key={slide.key}
                  onClick={() => { if (!isDragging.current) setActive(i); }}
                  className="absolute cursor-pointer select-none"
                  style={{
                    width,
                    height,
                    zIndex: z,
                    transform: `translateX(${x}px) scale(${scale}) rotateY(${rotateY}deg)`,
                    opacity,
                    transition: "transform 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.45s ease",
                    transformStyle: "preserve-3d",
                    borderRadius: 14,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={slide.src}
                    alt={`Gallery ${slide.key}`}
                    fill
                    className="object-cover"
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>
        )}

        {/* Dot indicator */}
        <div className="relative z-10 flex items-center justify-center gap-2 mt-10">
          {slides.map((slide, i) => (
            <button
              key={slide.key}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === active ? "w-8 bg-primary" : "w-2 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}
