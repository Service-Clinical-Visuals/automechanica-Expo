"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Container from "./Container";

function useVisibleCount() {
  const [count, setCount] = useState(4);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCount(1);
      else if (window.innerWidth < 1280) setCount(2);
      else setCount(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return count;
}

const products = [
  { img: "/moto/technilub/products/product1.png", name: "RACING ULTRA RN17 5W-30" },
  { img: "/moto/technilub/products/product2.png", name: "RACING ULTRA GF-6 0W-16" },
  { img: "/moto/technilub/products/product3.png", name: "RACING ULTRA P2010 0W-20" },
  { img: "/moto/technilub/products/product4.png", name: "RACING ULTRA LG IV 0W-20" },
  { img: "/moto/technilub/products/product5.png", name: "GEAR OIL ULTRA ATF DSG" },
  { img: "/moto/technilub/products/product6.png", name: "GEAR OIL ULTRA ATF VI" },
  { img: "/moto/technilub/products/product7.png", name: "GEAR OIL ULTRA ATF CVT" },
  { img: "/moto/technilub/products/product8.png", name: "GEAR OIL ULTRA ATF Z" },
];

export default function Products() {
  const [index, setIndex] = useState(0);
  const visibleCount = useVisibleCount();
  const maxIndex = Math.max(0, products.length - visibleCount);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));

  const visible = products.slice(index, index + visibleCount);
  const gridCols = visibleCount === 1 ? "grid-cols-1" : visibleCount === 2 ? "grid-cols-2" : "grid-cols-4";

  return (
    <section className="bg-[#2d2d2d] py-14">
      <Container>
        {/* Top row */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div data-aos="fade-right">
            <h2 className="heading-white font-bold text-white">Our Products</h2>
            <div className="mt-2 w-14 h-[3px] bg-[#c8102e]" />
          </div>
          <div data-aos="fade-left" data-aos-delay="150">
            <button className="shrink-0 bg-primary hover:bg-[#162d6e] transition-colors content-white text-sm font-medium px-6 py-1.5 rounded-lg">
              View All Products
            </button>
          </div>
        </div>

        <hr className="border-white/20 mb-10" />

        {/* Carousel */}
        <div className="relative">
          {/* Prev button — anchored to image area center */}
          <button
            onClick={prev}
            disabled={index === 0}
            style={{ top: "calc(50% - 60px)" }}
            className="absolute -left-6 z-10 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow hover:bg-gray-100 transition disabled:opacity-30"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Cards */}
          <div className={`grid ${gridCols} gap-5`}>
            {visible.map((p, i) => (
              <div key={p.name} data-aos="fade-up" data-aos-delay={i * 120} className="flex flex-col items-center gap-3">
                {/* Image card */}
                <div className="w-full aspect-square bg-[#555] rounded-2xl flex items-center justify-center overflow-hidden p-4 mb-2">
                  <Image
                    src={p.img}
                    alt={p.name}
                    width={220}
                    height={220}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Name */}
                <p className="content-white font-medium! text-[24px]! leading-[28px]! text-center uppercase mb-2.5">
                  {p.name}
                </p>
                {/* View More */}
                <a href="#" className="flex items-center gap-1.5 content-white font-medium!">
                  View More
                  <Image
                    src="/moto/technilub/arrow-right-circle.png"
                    alt="arrow"
                    width={22}
                    height={22}
                    className="w-5 h-5 object-contain"
                  />
                </a>
              </div>
            ))}
          </div>

          {/* Next button — anchored to image area center */}
          <button
            onClick={next}
            disabled={index >= maxIndex}
            style={{ top: "calc(50% - 60px)" }}
            className="absolute -right-6 z-10 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow hover:bg-gray-100 transition disabled:opacity-30"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Bottom divider + tagline */}
        <hr className="border-white/20 mt-12 mb-8" />
        <p className="text-white font-bold heading-white text-center text-[28px]! leading-[48px]! max-w-[1200px] mx-auto">
          TECHNILUB offers a wide range of oils of different types (mineral, semi-synthetic,
          synthetic and biodegradable) available in multiple viscosities.
        </p>
      </Container>
    </section>
  );
}
