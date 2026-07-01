"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Container from "./Container";

const news = [
  {
    key: "1",
    src: "/moto/gand-oil/corporate/1.png",
    date: "05 . 2024",
    title: "Gand Oil Lubricants at the international exhibition Automechanika Frankfurt 2024",
  },
  {
    key: "2",
    src: "/moto/gand-oil/corporate/2.png",
    date: "04 . 2026",
    title: "Moto Expo 2026 x Gand Oil",
  },
  {
    key: "3",
    src: "/moto/gand-oil/corporate/3.png",
    date: "03 . 2025",
    title: "Gand Oil Lubricants at the UEFA Nations League 2025",
  },
  {
    key: "4",
    src: "/moto/gand-oil/corporate/4.png",
    date: "03 . 2025",
    title: "Gand Oil Lubricants at the 2025 Panhellenic Drift Games",
  },
  {
    key: "5",
    src: "/moto/gand-oil/corporate/5.png",
    date: "04 . 2024",
    title: "Gand Oil's new storage unit in Peristeri city",
  },
];

export default function Corporate() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<string | null>(null);
  const [arrowHovered, setArrowHovered] = useState(false);

  const prev = news[(active - 1 + news.length) % news.length];
  const center = news[active];
  const next = news[(active + 1) % news.length];

  const goTo = (i: number) => setActive(i);
  const goPrev = () => setActive((i) => (i - 1 + news.length) % news.length);
  const goNext = () => setActive((i) => (i + 1) % news.length);

  const SWIPE_THRESHOLD = 50;
  const touchStartX = useRef<number | null>(null);
  const dragStartX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta < -SWIPE_THRESHOLD) goNext();
    else if (delta > SWIPE_THRESHOLD) goPrev();
    touchStartX.current = null;
  };
  const onMouseDown = (e: React.MouseEvent) => { dragStartX.current = e.clientX; isDragging.current = false; };
  const onMouseMove = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    if (Math.abs(e.clientX - dragStartX.current) > 5) isDragging.current = true;
  };
  const onMouseUp = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    if (delta < -SWIPE_THRESHOLD) goNext();
    else if (delta > SWIPE_THRESHOLD) goPrev();
    dragStartX.current = null;
  };

  function NewsCard({
    item,
    size,
    onClick,
    isActive,
  }: {
    item: (typeof news)[0];
    size: "sm" | "lg";
    onClick?: () => void;
    isActive?: boolean;
  }) {
    const isHovered = hovered === item.key;
    const showOverlay = isActive && isHovered;
    return (
      <div
        className={`relative overflow-hidden cursor-pointer flex-shrink-0 w-full ${size === "lg" ? "h-[460px] aspect-[790/461]" : "h-[390px]"} `}
        onMouseEnter={() => setHovered(item.key)}
        onMouseLeave={() => setHovered(null)}
        onClick={() => { if (!isDragging.current) onClick?.(); }}
      >
        <Image
          src={item.src}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 aspect-[790/461]"
          style={{ transform: isHovered ? "scale(1.04)" : "scale(1)" }}
        />
        {/* Hover overlay */}
        <div
          className="absolute inset-0 bg-black/70 flex flex-col justify-end p-5 gap-3 transition-opacity duration-300"
          style={{ opacity: showOverlay ? 1 : 0 }}
        >
          <p className="content text-[#FFFFFF70]!">{item.date}</p>
          <p className="content text-[23px]! max-w-[75%]">{item.title}</p>
          <div className="flex items-center gap-0">
            <button className="bg-[#1a1a1a]/80 border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap hover:bg-[#222] transition-colors">
              View All News
            </button>
            <Image
              src="/moto/gand-oil/arrow_green.png"
              alt="Go"
              width={36}
              height={36}
              className="w-9 h-9 object-contain -ml-1 flex-shrink-0"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="relative bg-[#0d0c0c] pt-28 pb-20 overflow-hidden">
      <Container>

        {/* Top row */}
        <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between gap-6 mb-8">
          <div className="w-full lg:max-w-[900px] mb-13">
            <span
                className=" absolute heading2 self-start text-center z-5 mt-[-55px]"
            >
                Product Showcase
            </span>
            <h2 data-aos="fade-up" className="heading mb-4">Corporate News</h2>
            <p data-aos="fade-up" data-aos-delay="100" className="content max-w-[760px]">
              Stay up to date with the latest corporate news, product launches, company
              announcements, industry developments, and business updates from GAND OIL. Explore
              our latest achievements, innovations, events, and milestones as we continue to
              deliver high-quality lubrication solutions and strengthen our presence across
              global markets.
            </p>
          </div>
          <div
            data-aos="fade-left"
            className="relative flex-shrink-0 w-28 h-28 mt-1 self-center z-10"
            onMouseEnter={() => setArrowHovered(true)}
            onMouseLeave={() => setArrowHovered(false)}
          >
            <Image
              src="/moto/gand-oil/arrow_grey.png"
              alt="Explore"
              width={104}
              height={104}
              className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300"
              style={{ opacity: arrowHovered ? 0 : 1 }}
            />
            <Image
              src="/moto/gand-oil/arrow_green.png"
              alt="Explore"
              width={104}
              height={104}
              className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300"
              style={{ opacity: arrowHovered ? 1 : 0 }}
            />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/10 relative z-10 mb-12" />

        {/* Carousel — desktop */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="hidden md:grid relative z-10 grid-cols-[1fr_2fr_1fr] gap-4 items-center cursor-grab active:cursor-grabbing select-none"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={() => { dragStartX.current = null; }}
        >
          <NewsCard item={prev} size="sm" onClick={goPrev} />
          <NewsCard item={center} size="lg" isActive />
          <NewsCard item={next} size="sm" onClick={goNext} />
        </div>

        {/* Carousel — mobile single card */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="md:hidden relative z-10 cursor-grab active:cursor-grabbing select-none"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={() => { dragStartX.current = null; }}
        >
          <NewsCard item={center} size="lg" isActive />
        </div>

        {/* Dot navigation */}
        <div className="relative z-10 flex justify-center gap-1.5 mt-8">
          {[0, 1, 2].map((i) => {
            const activeBar = Math.round((active / (news.length - 1)) * 2);
            const isActive = activeBar === i;
            return (
              <button
                key={i}
                onClick={() => goTo(i === 0 ? 0 : i === 1 ? Math.floor(news.length / 2) : news.length - 1)}
                className={`transition-all duration-300 -skew-x-[25deg] ${
                  isActive ? "w-12 h-2 bg-[#7ec142]" : "w-10 h-2 bg-[#D9D9D9] hover:bg-white"
                }`}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
