"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Container from "./Container";

const newsItems = [
  {
    img: "/moto/euroricambi/news/1.png",
    imgShort: "/moto/euroricambi/news/short1.png",
    title: "Euroricambi Group at Automechanika Frankfurt 2026",
    desc: "We are excited to announce our participation in Automechanika Frankfurt 2026, the world's leading trade fair for the automotive aftermarket, bringing together industry professionals from around the globe.",
  },
  {
    img: "/moto/euroricambi/news/2.png",
    imgShort: "/moto/euroricambi/news/short2.png",
    title: "New final drive ratios available suitable to Mercedes-Benz Sprinter",
    desc: "We are pleased to announce that, with the introduction of the new final drive ratios, the Euroricambi differential case range adaptable to Mercedes-Benz Sprinter is now complete.",
  },
  {
    img: "/moto/euroricambi/news/3.png",
    imgShort: "/moto/euroricambi/news/short3.png",
    title: "Euroricambi Earthmoving at CONEXPO-CON/AGG 2026",
    desc: "Euroricambi Earthmoving is pleased to announce its participation in CONEXPO-CON/AGG 2026, the leading international event for construction and earthmoving division.",
  },
  {
    img: "/moto/euroricambi/news/4.png",
    imgShort: "/moto/euroricambi/news/short4.png",
    title: "Euroricambi at Heavy Duty Aftermarket Week 2026",
    desc: "Euroricambi is pleased to announce its participation in Heavy Duty Aftermarket Week 2026 (HDAW26), the premier North American event for the heavy-duty aftermarket industry.",
  },
  {
    img: "/moto/euroricambi/news/5.png",
    imgShort: "/moto/euroricambi/news/short5.png",
    title: "Euroricambi Earth Moving at Future Minerals Forum 2026",
    desc: "We are pleased to announce that Euroricambi Earth Moving will participate in the Future Minerals Forum 2026, taking place from January 13 to 15 at the King Abdulaziz International Conference Center in Riyadh.",
  },
  {
    img: "/moto/euroricambi/news/6.png",
    imgShort: "/moto/euroricambi/news/short6.png",
    title: "Euroricambi and AM Gears at Automechanika Dubai 2025",
    desc: "We are pleased to announce our participation in Automechanika Dubai 2025, the largest international automotive aftermarket trade fair in the Middle East, taking place at the Dubai World Trade Center.",
  },
];

const PER_PAGE = 3;

// Native asset widths (all share a 418px height), used both to weight each
// card's flex-grow and to derive a fixed image height that keeps the exact
// source aspect ratio at any row width, without depending on hover state.
const EXPANDED_UNIT = 788;
const COLLAPSED_UNIT = 359;
const ROW_GAP = 24; // px, matches `gap-6`
const CARD_PADDING_X = 16 * 2; // px, matches each card's `p-4` (left + right)

function NewsCard({
  item,
  expanded,
  imgHeight,
  onEnter,
  onLeave,
}: {
  item: (typeof newsItems)[number];
  expanded: boolean;
  imgHeight: number | null;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="flex flex-col bg-white shadow-lg overflow-hidden cursor-pointer transition-[flex-grow] duration-500 ease-in-out"
      style={{ flexGrow: expanded ? EXPANDED_UNIT : COLLAPSED_UNIT, flexBasis: 0 }}
    >
      <div className="flex flex-col flex-1 p-4">
        <div
          className="relative w-full h-55 lg:h-65 xl:h-75 overflow-hidden shrink-0 bg-gray-100 mb-4"
          style={imgHeight ? { height: imgHeight } : undefined}
        >
          <img
            src={item.imgShort}
            alt={item.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              expanded ? "opacity-0" : "opacity-100"
            }`}
          />
          <img
            src={item.img}
            alt={item.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              expanded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <h3 className="heading2 text-[20px]! mb-2 line-clamp-1">{item.title}</h3>
        <p className="content text-[16px]! leading-relaxed mb-4 line-clamp-2">{item.desc}</p>
        <a
          href="#"
          className="navlink text-[18px]! font-semibold! text-primary underline underline-offset-2 mt-auto w-fit hover:opacity-80 transition-opacity"
        >
          Read More &gt;&gt;
        </a>
      </div>
    </div>
  );
}

export default function News() {
  const pageCount = Math.ceil(newsItems.length / PER_PAGE);
  const [page, setPage] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [imgHeight, setImgHeight] = useState<number | null>(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const totalUnits = EXPANDED_UNIT + COLLAPSED_UNIT * (PER_PAGE - 1);
    const update = () => {
      const availableWidth =
        row.clientWidth - ROW_GAP * (PER_PAGE - 1) - CARD_PADDING_X * PER_PAGE;
      if (availableWidth > 0) setImgHeight((418 * availableWidth) / totalUnits);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(row);
    return () => observer.disconnect();
  }, []);

  const visible = newsItems.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="relative">
      {/* Navy header band */}
      <div className="bg-primary pt-16 pb-28 md:pb-36 pbclass ">
        <Container>
          <div
            className="px-4 sm:px-8 md:px-10 lg:px-[40px] text-center max-w-[1120px] mx-auto"
            data-aos="fade-up"
          >
            <h2 className="heading-white mb-3">Latest News</h2>
            <p className="content-white text-white">
              Stay up to date with the latest company news, product launches, industry events,
              exhibitions, and innovations. Discover how we continue to drive progress and
              strengthen our presence across global markets.
            </p>
          </div>
        </Container>
      </div>

      {/* Cards: overlaps up into the navy band */}
      <Container className="relative -mt-20 md:-mt-24">
        <div data-aos="fade-up" className="px-4 sm:px-8 md:px-10 lg:px-[40px] pb-12 md:pb-16">
          {/* Desktop: expand-on-hover cards */}
          <div ref={rowRef} className="hidden lg:flex gap-6 items-start">
            {visible.map((item, i) => {
              const expanded = hovered !== null ? hovered === i : i === 0;
              return (
                <NewsCard
                  key={page * PER_PAGE + i}
                  item={item}
                  expanded={expanded}
                  imgHeight={imgHeight}
                  onEnter={() => setHovered(i)}
                  onLeave={() => setHovered(null)}
                />
              );
            })}
          </div>

          {pageCount > 1 && (
            <div className="hidden lg:flex justify-center gap-2 mt-10">
              {Array.from({ length: pageCount }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setPage(i);
                    setHovered(null);
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 w-20 rounded-full transition-colors ${
                    page === i ? "bg-[#6FAF3C]" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Mobile/tablet: swiper with the expanded card style */}
          <div className="lg:hidden">
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              spaceBetween={20}
              loop
              pagination={{ clickable: true }}
              style={
                {
                  "--swiper-pagination-color": "#6FAF3C",
                  "--swiper-pagination-bullet-inactive-color": "#e5e7eb",
                  "--swiper-pagination-bullet-inactive-opacity": "1",
                } as React.CSSProperties
              }
              className="!pb-10"
            >
              {newsItems.map((item) => (
                <SwiperSlide key={item.title} className="h-auto pb-4">
                  <div className="flex flex-col h-full bg-white shadow-lg overflow-hidden">
                    <div className="flex flex-col flex-1 p-4">
                      <div className="w-full aspect-788/418 overflow-hidden bg-gray-100 mb-4">
                        <img src={item.img} alt={item.title} className="block w-full h-full object-cover" />
                      </div>
                      <h3 className="heading2 text-[18px]! mb-2 line-clamp-1">{item.title}</h3>
                      <p className="content text-[15px]! leading-relaxed mb-4 line-clamp-3">
                        {item.desc}
                      </p>
                      <a
                        href="#"
                        className="navlink text-[16px]! font-semibold! text-primary underline underline-offset-2 mt-auto w-fit"
                      >
                        Read More &gt;&gt;
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
}
