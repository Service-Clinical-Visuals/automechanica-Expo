"use client";

import { useState, useRef, useEffect, useLayoutEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "./Container";
import Link from "next/link";

const slides = [
  { key: "1", src: "/moto/axon-oil/gallery/1.jpg", hover: "Greases" },
  { key: "2", src: "/moto/axon-oil/gallery/2.jpg", hover: "Passenger Car" },
  { key: "3", src: "/moto/axon-oil/gallery/3.jpg", hover: "Motorcycles" },
  { key: "4", src: "/moto/axon-oil/gallery/4.jpg", hover: "Heavy Duty" },
  { key: "5", src: "/moto/axon-oil/gallery/5.png", hover: "Agriculture" },
  { key: "6", src: "/moto/axon-oil/gallery/6.png", hover: "Marine" },
  { key: "7", src: "/moto/axon-oil/gallery/7.jpg", hover: "Transmissions" },
];

// Base sizes/offsets are tuned for this reference container width, then scaled to fit.
const REFERENCE_WIDTH = 1400;
const MIN_FIT = 0.32;

// Visual config per distance from center (-3 … +3), so all 7 slides stay on stage. `fit` scales every size/offset proportionally.
function getConfig(pos: number, fit: number) {
  const abs = Math.abs(pos);
  const sign = pos < 0 ? -1 : 1;
  if (abs === 0) return { x: 0,               width: 480 * fit, height: 400 * fit, scale: 1.00, rotateY: 0,          z: 7, opacity: 1.00 };
  if (abs === 1) return { x: sign * 380 * fit, width: 250 * fit, height: 400 * fit, scale: 1.1, rotateY: -sign * 45, z: 6, opacity: 1.00 };
  if (abs === 2) return { x: sign * 620 * fit, width: 180 * fit, height: 380 * fit, scale: 1.35, rotateY: -sign * 65, z: 5, opacity: 0.95 };
  return             { x: sign * 800 * fit, width: 150 * fit, height: 350 * fit, scale: 1.7, rotateY: -sign * 80, z: 4, opacity: 0.85 };
}

const SWIPE_THRESHOLD = 50;
const CYCLE_MS = 2500;

export default function Gallery () {
  const [active, setActive] = useState(Math.floor((slides.length - 1) / 2));
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
      className="relative bg-white pt-24 pb-28 overflow-hidden"
    >
      <Container>

        {/* Heading */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <h2 data-aos="fade-up" className="heading flex items-center justify-center gap-3 mb-4">
            Xtreme Lubricants
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="content max-w-[1220px]">
            Xtreme Lubricants offers a comprehensive range of high-performance lubrication products engineered to meet the demands of automotive, commercial, agricultural, marine, and industrial applications. Developed with premium base oils and advanced additive technology, every product is designed to deliver exceptional protection, reliable performance, and long-lasting efficiency across a wide variety of operating conditions.
          </p>
        </div>

        {!isMobile && (
          <div className="relative z-10 hidden lg:flex items-center justify-center gap-3 mt-8 mb-2">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={prev}
              className="w-11 h-11 rounded-full bg-primary hover:opacity-90 flex items-center justify-center transition-opacity cursor-pointer"
            >
              <ChevronLeft size={22} className="text-white" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={next}
              className="w-11 h-11 rounded-full bg-primary hover:opacity-90 flex items-center justify-center transition-opacity cursor-pointer"
            >
              <ChevronRight size={22} className="text-white" />
            </button>
          </div>
        )}

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
            <div className="relative w-full aspect-square overflow-hidden select-none">
              <Image
                src={slides[active].src}
                alt={`Gallery ${slides[active].key}`}
                fill
                className="object-cover"
                draggable={false}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-5 py-4">
                <span className="heading-white text-[35px]! font-semibold!">{slides[active].hover}</span>
              </div>
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
            style={{ height: 580 * fit, perspective: "1200px" }}
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
              if (Math.abs(pos) > 3) return null;
              const { x, width, height, scale, rotateY, z, opacity } = getConfig(pos, fit);

              return (
                <div
                  key={slide.key}
                  onClick={() => { if (!isDragging.current) setActive(i); }}
                  className="group absolute cursor-pointer select-none transition-all duration-300"
                  style={{
                    width,
                    height,
                    zIndex: z,
                    transform: `translateX(${x}px) scale(${scale}) rotateY(${rotateY}deg)`,
                    opacity,
                    transition: "transform 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.45s ease",
                    transformStyle: "preserve-3d",
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
                  <div className="absolute inset-0 bg-gradient-to-l from-black/75 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <span
                    className="heading-white absolute right-0 top-1/2 text-white font-semibold text-[35px]! tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ transform: "translateY(-50%) rotate(-90deg)" }}
                  >
                    {slide.hover}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* Dot indicator */}
        {/* <div className="relative z-10 flex items-center justify-center gap-2 mt-10">
          {slides.map((slide, i) => (
            <button
              key={slide.key}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === active ? "w-8 bg-primary" : "w-2 bg-black"
              }`}
            />
          ))}
        </div> */}

        <div className="relative z-10 flex items-center justify-center gap-2 mt-10">
          <Link
            href="#"
            className="flex max-w-[180px] items-center relative shrink-0 group bg-primary text-white pl-6 pr-16 py-1.5"
          >
            <span className="navlink text-white! whitespace-nowrap">View All Products</span>
            <span className="absolute right-[-25px] top-1/2 -translate-y-1/2 w-11 h-12 shrink-0">
              <span className="absolute inset-[2px] bg-white [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
              <span className="absolute inset-[4.5px] bg-primary [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] flex items-center justify-center">
                <ArrowRight size={34} className="text-white transition-transform group-hover:translate-x-0.5" />
              </span>
            </span>
          </Link>
        </div>

      </Container>
    </section>
  );
}
