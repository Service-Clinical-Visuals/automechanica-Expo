"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Container from "./Container";

const blogs = [
  {
    key: "1",
    bg: "/moto/gand-oil/blog/1.png",
    date: "24 . 02 . 2026",
    title: "What lubricant does my motorcycle need? A detailed guide by motorcycle type",
  },
  {
    key: "2",
    bg: "/moto/gand-oil/blog/2.png",
    date: "16 . 02 . 2026",
    title: "Diesel engine maintenance: Common problems & solutions",
  },
  {
    key: "3",
    bg: "/moto/gand-oil/blog/3.png",
    date: "09 . 02 . 2026",
    title: "When should i change my motorcycle oil? Frequency & warning signs",
  },
  {
    key: "4",
    bg: "/moto/gand-oil/blog/4.png",
    date: "25 . 01 . 2026",
    title: "How synthetic oil improves gasoline engine performance",
  },
];

const ANIM_MS = 480;
const CYCLE_MS = 2200;

export default function Area() {
  const [active, setActive] = useState("1");
  const [hovered, setHovered] = useState<string | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const activeRef = useRef(active);
  activeRef.current = active;

  const startCycle = useCallback(() => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      const keys = blogs.map((b) => b.key);
      const currentIndex = keys.indexOf(activeRef.current);
      const next = keys[(currentIndex + 1) % keys.length];
      setActive(next);
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

  const handleClick = (key: string) => {
    if (key === active) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    setActive(key);
  };

  const prevSlide = () => setSlideIndex((i) => Math.max(i - 1, 0));
  const nextSlide = () => setSlideIndex((i) => Math.min(i + 1, blogs.length - 1));
  const slide = blogs[slideIndex];

  return (
    <section className="relative bg-black pt-30 pb-26 overflow-hidden">
      <Container>

      {/* Watermark background text */}
      <div
        className="absolute inset-0 flex items-start justify-center pointer-events-none select-none"
        style={{ top: "-10px" }}
      >
        <span
          className="heading2 pt-19"
        >
          Latest Insights
        </span>
      </div>

        {/* Heading block */}
        <div className="relative z-10 flex flex-col items-center text-center mb-20 px-4">
          <h2 data-aos="fade-up" className="heading mb-4">
            Stay Updated With Our Blog
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="content max-w-[985px]">
            Explore the GAND OIL blog for the latest news, industry trends, lubrication technologies,
            maintenance tips, and product innovations. Discover expert articles on automotive,
            industrial, agricultural, and marine lubrication solutions to improve equipment performance,
            enhance efficiency, and extend machinery and vehicle life. Stay connected with insights
            into lubricants and fluid technologies.
          </p>
        </div>

        {/* ── Desktop accordion (lg+) ── */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="hidden xl:flex h-[440px] gap-5 relative z-10"
          onMouseEnter={stopCycle}
          onMouseLeave={startCycle}
        >
          {blogs.map((blog) => {
            const isActive = active === blog.key;
            const isHovered = hovered === blog.key;
            const showOverlay = isActive && isHovered;

            return (
              <div
                key={blog.key}
                onClick={() => handleClick(blog.key)}
                onMouseEnter={() => setHovered(blog.key)}
                onMouseLeave={() => setHovered(null)}
                className="relative overflow-hidden cursor-pointer rounded-sm flex-shrink-0"
                style={{
                  flex: isActive ? 3 : 1,
                  transition: `flex ${ANIM_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
                }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
                  style={{
                    backgroundImage: `url('${blog.bg}')`,
                    transform: isHovered ? "scale(1.05)" : "scale(1)",
                  }}
                />

                {/* Dark overlay — always on collapsed, hover on expanded */}
                <div
                  className="absolute inset-0 bg-black transition-opacity duration-300"
                  style={{ opacity: showOverlay ? 0.55 : 0 }}
                />

                {/* Blog info — visible on hover (always for collapsed, hover for expanded) */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-300 left-10 bottom-10"
                  style={{ opacity: showOverlay ? 1 : 0 }}
                >
                  <p className="content text-[#FFFFFF70]! mb-4">
                    {blog.date}
                  </p>
                  <p className="subheading max-w-[400px] mb-4">
                    {blog.title}
                  </p>
                  <div className="flex items-center gap-0">
                    <button className="bg-white/30 text-white text-[16px]! content font-semibold px-4 py-2 rounded-full whitespace-nowrap hover:bg-[#222] transition-colors">
                      Explore Blog
                    </button>
                    <Image src="/moto/gand-oil/arrow_green.png" alt="Explore" width={32} height={32} className="w-10 h-10 object-contain flex-shrink-0" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Mobile slider (below lg) ── */}
        <div className="xl:hidden relative z-10">
          <div
            className="relative w-full h-[400px] overflow-hidden rounded-sm"
            style={{
              backgroundImage: `url('${slide.bg}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/55" />
            <div className="relative h-full flex flex-col justify-end p-5 gap-3">
              <p className="text-gray-400 text-[11px] font-medium tracking-wider">{slide.date}</p>
              <p className="text-white text-base font-semibold leading-snug">{slide.title}</p>
              <div className="flex items-center gap-2">
                <button className="bg-[#1a1a1a]/80 border border-[#444] text-white text-xs font-semibold px-4 py-2 rounded-full">
                  Explore Blog
                </button>
                <button className="w-8 h-8 rounded-full bg-[#7ec142] flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </button>
              </div>
            </div>

            <button
              onClick={prevSlide}
              disabled={slideIndex === 0}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 flex items-center justify-center disabled:opacity-30"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              disabled={slideIndex === blogs.length - 1}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 flex items-center justify-center disabled:opacity-30"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {blogs.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === slideIndex ? "bg-[#7ec142]" : "bg-gray-600"}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
