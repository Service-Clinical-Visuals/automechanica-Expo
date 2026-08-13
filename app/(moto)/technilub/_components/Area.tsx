"use client";

import { useState, useRef } from "react";
import Container from "./Container";

const BG = "/moto/technilub/areabg.png";
const BG2 = "/moto/technilub/areabg2.jpg";
const BG3 = "/moto/technilub/areabg3.jpg";
const BG4 = "/moto/technilub/areabg4.jpg";
const BG5 = "/moto/technilub/areabg5.jpg";

const areas = [
  {
    key: "automobile",
    label: "AUTOMOBILE",
    bg: BG,
    desc: "For optimal performance, choose Huile Moteur to keep your engine running smoothly.",
    items: ["Huile Moteur", "Huile Transmission"],
  },
  {
    key: "motocycle",
    label: "MOTOCYCLE",
    bg: BG2,
    desc: "Technilub offers products specifically developed for the world of two-wheelers and motorcycles.",
    items: ["Huile Moteur", "Motorcycle Coolant", "Motorcycle Maintenance Product"],
  },
  {
    key: "agri",
    label: "AGRI - TRANSPORT - TP",
    bg: BG3,
    desc: "With extensive experience in the agricultural sector, Technilub offers a complete range of lubricants adapted to the specific requirements of your tractors and off-road equipment.",
    items: ["Engine Oil", "Multi-Purpose Oil", "Trat Oils"],
  },
  {
    key: "motoculture",
    label: "MOTO CULTURE",
    bg: BG4,
    desc: "Our garden could rely on affordable four-stroke products for cultivating and bike and 2-stroke engines in lawnmowers and other gardening equipment.",
    items: ["4-Stroke Engine Oil", "2-Stroke Engine Oil", "Chain Oil"],
  },
  {
    key: "graissage",
    label: "GRAISSAGE & ENTRETIEN",
    bg: BG5,
    desc: "Technilub offers all the complementary products needed to maintain your vehicle systems and components.",
    items: ["Coolant", "Cleaning Product", "Brake Fluid"],
  },
];

function GearIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

const ANIM_MS = 520;

export default function Area() {
  // Desktop accordion
  const [active, setActive] = useState("automobile");
  const [showContent, setShowContent] = useState("automobile");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Mobile slider
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (key: string) => {
    if (key === active) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    setShowContent("");
    setActive(key);
    timerRef.current = setTimeout(() => setShowContent(key), ANIM_MS);
  };

  const prevSlide = () => setSlideIndex((i) => Math.max(i - 1, 0));
  const nextSlide = () => setSlideIndex((i) => Math.min(i + 1, areas.length - 1));
  const slide = areas[slideIndex];

  return (
    <section className="bg-transparent py-14">
      <Container className="xl:px-[100px]! ">
        {/* Heading */}
        <div data-aos="fade-up" className="flex flex-col items-center mb-10">
          <h2 className="heading font-bold text-[#1a1a1a]">Our Areas</h2>
          <div className="mt-2 w-14 h-[3px] bg-[#c8102e]" />
        </div>

        {/* ── Mobile slider (hidden on lg+) ── */}
        <div className="xl:hidden">
          <div
            className="relative w-full h-[420px] rounded-2xl overflow-hidden"
            style={{
              backgroundImage: `url('${slide.bg}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-6 gap-3">
              <h3 className="text-white font-bold text-[18px] uppercase tracking-wide">
                {slide.label}
              </h3>
              <p className="text-white/80 text-[13px] leading-relaxed">{slide.desc}</p>
              <ul className="flex flex-col gap-1.5">
                {slide.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white text-[13px]">
                    <GearIcon />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#" className="text-[#c8102e] text-[11px] font-bold uppercase tracking-widest hover:underline">
                View All
              </a>
            </div>

            {/* Prev arrow */}
            <button
              onClick={prevSlide}
              disabled={slideIndex === 0}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 flex items-center justify-center disabled:opacity-30"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Next arrow */}
            <button
              onClick={nextSlide}
              disabled={slideIndex === areas.length - 1}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 flex items-center justify-center disabled:opacity-30"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {areas.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === slideIndex ? "bg-[#c8102e]" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop accordion (hidden below lg) ── */}
        <div className="hidden xl:flex h-[548px]" style={{ gap: "25px" }}>
          {areas.map((area, i) => {
            const isActive = active === area.key;
            const contentVisible = showContent === area.key;
            return (
              <div
                key={area.key}
                onClick={() => handleClick(area.key)}
                className="relative overflow-hidden rounded-2xl cursor-pointer"
                style={{
                  flex: isActive ? 3 : 0.6,
                  minWidth: isActive ? 0 : 60,
                  transform: "skewX(-6deg)",
                  transformOrigin: "bottom center",
                  marginLeft: i === 0 ? 0 : -10,
                  zIndex: isActive ? 10 : i,
                  transition: `flex ${ANIM_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
                  willChange: "flex",
                }}
              >
                {/* Counter-skewed bg */}
                <div
                  style={{
                    position: "absolute",
                    top: -50,
                    bottom: -50,
                    left: "-30%",
                    right: "-30%",
                    transform: "skewX(8deg)",
                    backgroundImage: `url('${area.bg}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />

                {/* Expanded content */}
                {contentVisible && (
                  <div
                    className="relative h-full flex flex-col justify-end p-6 gap-3 ml-[50px]"
                    style={{ transform: "skewX(8deg)" }}
                  >
                    <h3 className="heading-white font-bold text-[18px] uppercase tracking-wide">
                      {area.label}
                    </h3>
                    <p className="content-white text-[16px]! leading-relaxed max-w-[80%]">
                      {area.desc}
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {area.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 content-white text-[16px]!">
                          <GearIcon />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a href="#" className="content-white font-bold uppercase tracking-widest mt-1 hover:underline">
                      View All
                    </a>
                  </div>
                )}

                {/* Collapsed vertical label */}
                {!isActive && !contentVisible && (
                  <div className="absolute inset-0 flex items-end mb-[50px] justify-center">
                    <span
                      className="heading-white font-bold text-[28px]! uppercase tracking-widest whitespace-nowrap"
                      style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                    >
                      {area.label}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom row */}
        <hr className="border-gray-200 mt-10 mb-6" />
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <p className="content text-[18px]! max-w-[680px] leading-[28px]!">
            Technilub entered the lubricants market just a few years ago. Building on its field experience
            and expertise in the lubricant sector, DLBC naturally developed the Technilub brand. A
            complete range, adapted to all types of markets.
          </p>
          <button className="shrink-0 bg-primary content-white hover:bg-[#162d6e] transition-colors text-white text-sm font-medium px-6 py-1.5 rounded-lg">
            Know About Us More
          </button>
        </div>
      </Container>
    </section>
  );
}
