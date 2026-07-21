"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "./Container";

const MAIN_CATEGORIES = [
  { id: "automotive", label: "Automotive", available: true },
  { id: "heavy-duty", label: "Heavy Duty", available: true },
  { id: "small-engine", label: "Small Engine", available: true },
  { id: "agricultural", label: "Agricultural", available: true },
  { id: "industrial", label: "Industrial", available: true },
  { id: "marine", label: "Marine", available: true },
  { id: "railroad", label: "Railroad", available: true },
];

const automotiveSegments = [
  {
    id: "automotive-engine-oils",
    label: "Automotive engine oils and motor oils",
    description: "Always stay in the driving seat with a broad range of racing, mainstream and OEM specific products. ",
    img: "/moto/north-sea/Products1.png",
  },
  {
    id: "heavy-duty-engine-oils",
    label: "Heavy-Duty Engine Oils",
    description: "North Sea Lubricants offers the right products for a cost-effective....",
    img: "/moto/north-sea/Products2.png",
  },
  {
    id: "small-engine-oils",
    label: "Small Engine Oils",
    description: "All of the necessary oils for small engines such as motorbikes, mopeds and... ",
    img: "/moto/north-sea/Products3.png",
  },
  {
    id: "agricultural-oils",
    label: "Agricultural oils",
    description: "Everything you need to take on any challenge, with complete coverage for all of your....",
    img: "/moto/north-sea/Products4.png",
  },
  {
    id: "hydraulic-oils",
    label: "Hydraulic Oils",
    description: "A wide range of hydraulic oils and industrial products will keep...",
    img: "/moto/north-sea/Products5.png",
  },
  {
    id: "marine-oils",
    label: "Marine oils",
    description: "To help you stay afloat, NSL provides efficient shipping products for trunk...",
    img: "/moto/north-sea/Products6.png",
  },
  {
    id: "railroad-oils",
    label: "Railroad oils",
    description: "Always stay on track with this lubricant oil for locomotives, made to...",
    img: "/moto/north-sea/Products7.png",
  },
  {
    id: "other-products",
    label: "Various other products",
    description: "North Sea Lubricants guarantees that all of your needs are covered, no matter...",
    img: "/moto/north-sea/Products8.png",
  },
];

const VISIBLE = 3;
const TOTAL_DOTS = automotiveSegments.length - VISIBLE + 1;

// Weighting for the expand-on-hover row: the hovered card grows to
// EXPANDED_UNIT while the rest settle at COLLAPSED_UNIT, animated via
// flex-grow so the row width always stays filled.
const EXPANDED_UNIT = 700;
const COLLAPSED_UNIT = 320;

function ProductCard({
  segment,
  expanded,
  onEnter,
  onLeave,
}: {
  segment: (typeof automotiveSegments)[number];
  expanded: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="group relative flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-[flex-grow] duration-500 ease-in-out"
      style={{ flexGrow: expanded ? EXPANDED_UNIT : COLLAPSED_UNIT }}
    >
      <div className="w-full h-64 sm:h-72 lg:h-96 bg-gray-50 overflow-hidden shrink-0">
        <img
          src={segment.img}
          alt={segment.label}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center justify-between gap-3 p-5">
        <div className="min-w-0">
          <h3 className="text-primary! font-semibold card-title mb-1 truncate">{segment.label}</h3>
          <p className="text-gray-500 card-title1! font-normal leading-snug line-clamp-2 mt-1">
            {segment.description}
          </p>
        </div>
        <a
          href="#"
          className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-white border border-primary text-primary! hover:bg-primary hover:!text-white transition-colors"
          aria-label={`View more about ${segment.label}`}
        >
          <ArrowUpRight size={18} strokeWidth={2.5} />
        </a>
      </div>
    </div>
  );
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("automotive");
  const [page, setPage] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  const visible = automotiveSegments.slice(page, page + VISIBLE);

  function scrollTabs(direction: -1 | 1) {
    tabsRef.current?.scrollBy({ left: direction * 200, behavior: "smooth" });
    const newPage = Math.max(0, Math.min(page + direction, TOTAL_DOTS - 1));
    if (newPage !== page) {
      handlePage(newPage);
    }
  }

  function handleCategoryClick(catId: string, index: number) {
    setActiveCategory(catId);
    const targetPage = Math.min(index, TOTAL_DOTS - 1);
    setPage(targetPage);
    const hoveredIndex = index - targetPage;
    setHovered(hoveredIndex >= 0 && hoveredIndex < VISIBLE ? hoveredIndex : 0);
  }

  function handlePage(i: number) {
    setPage(i);
    setHovered(null);
    setActiveCategory(MAIN_CATEGORIES[i]?.id || "automotive");
  }

  return (
    <section className="bg-white py-16">
      <Container>
        {/* Heading */}
        <div className="max-w-[1200px] mx-auto text-center px-6 mb-10" data-aos="fade-up">
          <h2 className="section-title text-[#333333] font-bold  mb-4">Complete Lubrication Solutions</h2>
          <p className="section-text font-normal text-[#585858] leading-relaxed">
            North Sea Lubricants offers a comprehensive range of premium lubrication solutions for automotive, commercial, industrial, agricultural, marine, and railway applications. Engineered to meet the highest performance standards, our products deliver reliable protection, maximum efficiency, and long-lasting performance across every industry.
          </p>
        </div>

        <hr className="border-t border-gray-300 mb-10" />

        {/* Tabs */}
        <div className="flex items-center justify-center gap-3 mb-12 px-6" data-aos="fade-up" data-aos-delay="100">
          <button
            onClick={() => scrollTabs(-1)}
            className="hidden sm:flex shrink-0 w-9 h-9 rounded-full bg-primary text-white items-center justify-center hover:bg-primary-hover transition-colors"
            aria-label="Scroll categories left"
          >
            <ArrowLeft size={16} strokeWidth={2.5} />
          </button>

          <div ref={tabsRef} className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            {MAIN_CATEGORIES.map((cat, index) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id, index)}
                className={`shrink-0 rounded-xl px-5 py-2 section-text font-normal text-[#585858] border transition-colors ${
                  activeCategory === cat.id
                    ? "bg-primary border-primary text-white"
                    : "bg-white border-primary  hover:bg-gray-50 text-gray-500"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTabs(1)}
            className="hidden sm:flex shrink-0 w-9 h-9 rounded-full bg-primary text-white items-center justify-center hover:bg-primary-hover transition-colors"
            aria-label="Scroll categories right"
          >
            <ArrowRight size={16} strokeWidth={2.5} />
          </button>
        </div>

        {/* Cards: expand on hover, revert to the first card expanded on unhover */}
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-6 items-stretch" data-aos="fade-up" data-aos-delay="150">
          {visible.map((segment, i) => (
            <ProductCard
              key={segment.id}
              segment={segment}
              expanded={hovered !== null ? hovered === i : i === 0}
              onEnter={() => setHovered(i)}
              onLeave={() => setHovered(null)}
            />
          ))}
        </div>

        {/* Dots */}
        {/* <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: TOTAL_DOTS }).map((_, i) => (
            <button
              key={i}
              onClick={() => handlePage(i)}
              className={`h-2.5 rounded-full transition-all ${
                page === i ? "w-8 bg-primary" : "w-8 bg-gray-300"
              }`}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div> */}
      </Container>
    </section>
  );
}
