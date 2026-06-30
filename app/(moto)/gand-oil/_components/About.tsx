"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Container from "./Container";

const slides = [
  { key: "1", src: "/moto/gand-oil/about/4.png" },
  { key: "2", src: "/moto/gand-oil/about/5.png" },
  { key: "3", src: "/moto/gand-oil/about/1.png" },
  { key: "4", src: "/moto/gand-oil/about/2.png" },
  { key: "5", src: "/moto/gand-oil/about/3.png" },
];

// Visual config per distance from center (-2 … +2)
function getConfig(pos: number) {
  const abs = Math.abs(pos);
  const sign = pos < 0 ? -1 : 1;
  if (abs === 0) return { x: 0,           scale: 1.00, rotateY: 0, z: 5, opacity: 1.00 };
  if (abs === 1) return { x: sign * 310,  scale: 0.83, rotateY: 0, z: 4, opacity: 0.80 };
  return             { x: sign * 510,  scale: 0.68, rotateY: 0, z: 3, opacity: 0.60 };
}

const SWIPE_THRESHOLD = 50;
const CYCLE_MS = 2500;

export default function About() {
  const [active, setActive] = useState(2);
  const [centerHovered, setCenterHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const dragStartX = useRef<number | null>(null);
  const isDragging = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const prev = () => setActive((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setActive((i) => (i + 1) % slides.length);

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
    <section className="relative bg-[#0a0a0a] pt-24 pb-28 overflow-hidden">
      <Container>
    
        {/* Heading */}
        <div className="relative z-10 flex flex-col items-center text-center mb-14 px-4">
        <span
            className=" absolute heading2 self-center text-center z-5 mt-[-30px]"
        >
            About Us
        </span>
          <h2 data-aos="fade-up" className="heading mb-4">GAND OIL Lubricants</h2>
          <p data-aos="fade-up" data-aos-delay="100" className="content max-w-[870px]">
            Gand Oil accompanies you on every journey, meeting all mechanical requirements with
            quality and reliability, whilst providing you with high performance lubricants. The
            resultant high performance for any kinds of motor, surpasses the stringent requirements
            of motor manufacturers.
          </p>
        </div>

        {/* Coverflow carousel */}
        <div
          className="relative z-10 flex items-center justify-center"
          data-aos="fade-up"
          data-aos-delay="200"
          style={{ height: 575, perspective: "1200px" }}
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
            const { x, scale, rotateY, z, opacity } = getConfig(pos);
            const isCenter = pos === 0;

            return (
              <div
                key={slide.key}
                onClick={() => { if (!isDragging.current) setActive(i); }}
                className="absolute cursor-pointer select-none"
                style={{
                  width: 575,
                  height: 610,
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
                  alt={`About ${slide.key}`}
                  fill
                  className="object-cover"
                  draggable={false}
                /> 

                {/* Arrow button on center card */}
                {isCenter && (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    onMouseEnter={() => setCenterHovered(true)}
                    onMouseLeave={() => setCenterHovered(false)}
                    style={{ width: 56, height: 56, margin: "auto", top: 0, bottom: 0, left: 0, right: 0, position: "absolute" }}
                  >
                    <Image
                      src="/moto/gand-oil/arrow_grey.png"
                      alt="Explore"
                      width={65}
                      height={65}
                      className="absolute drop-shadow-lg transition-opacity duration-400"
                      style={{ opacity: centerHovered ? 0 : 1, width: 56, height: 56 }}
                    />
                    <Image
                      src="/moto/gand-oil/arrow_green.png"
                      alt="Explore"
                      width={56}
                      height={56}
                      className="absolute drop-shadow-lg transition-opacity duration-400"
                      style={{ opacity: centerHovered ? 1 : 0, width: 56, height: 56 }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
