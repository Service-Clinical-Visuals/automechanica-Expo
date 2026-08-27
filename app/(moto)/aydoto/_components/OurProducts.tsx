"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface Product {
  id: number;
  ref: string;
  name: string;
  image: string;
}

const discProducts: Product[] = [
  {
    id: 1,
    ref: "10-50150",
    name: "BRAKE DISCs",
    image: "/moto/aydoto/1.jpg",
  },
  {
    id: 2,
    ref: "10-50151",
    name: "BRAKE DISCs",
    image: "/moto/aydoto/2.jpg",
  },
  {
    id: 3,
    ref: "10-50152",
    name: "BRAKE DISCs",
    image: "/moto/aydoto/3.jpg",
   },
  {
    id: 4,
    ref: "10-50153",
    name: "BRAKE DISCs",
    image: "/moto/aydoto/4.jpg",
  },
  {
    id: 5,
    ref: "10-50154",
    name: "BRAKE DISCs",
    image: "/moto/aydoto/1.jpg",
  },
  {
    id: 6,
    ref: "10-50155",
    name: "BRAKE DISCs",
    image: "/moto/aydoto/2.jpg",
  },
  {
    id: 7,
    ref: "10-50156",
    name: "BRAKE DISCs",
    image: "/moto/aydoto/3.jpg",
   },
  {
    id: 8,
    ref: "10-50157",
    name: "BRAKE DISCs",
    image: "/moto/aydoto/4.jpg",
  },
];

const padProducts: Product[] = [
  {
    id: 9,
    ref: "11-60230B",
    name: "BRAKE PADs",
    image: "/moto/aydoto/5.jpg",
     },
  {
    id: 10,
    ref: "11-60241",
    name: "BRAKE PADs",
    image: "/moto/aydoto/6.jpg",
     },
  {
    id: 11,
    ref: "11-60241A",
    name: "BRAKE PADs",
    image: "/moto/aydoto/7.jpg",
   },
  {
    id: 12,
    ref: "11-60241B",
    name: "BRAKE PADs",
    image: "/moto/aydoto/8.jpg",
   },
  {
    id: 13,
    ref: "11-60231B",
    name: "BRAKE PADs",
    image: "/moto/aydoto/5.jpg",
     },
  {
    id: 14,
    ref: "11-60242",
    name: "BRAKE PADs",
    image: "/moto/aydoto/6.jpg",
     },
  {
    id: 15,
    ref: "11-60242A",
    name: "BRAKE PADs",
    image: "/moto/aydoto/7.jpg",
   },
  {
    id: 16,
    ref: "11-60242B",
    name: "BRAKE PADs",
    image: "/moto/aydoto/8.jpg",
   },
];

export default function OurProducts() {
  const [activeTab, setActiveTab] = useState<"discs" | "pads">("discs");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  const currentProducts = activeTab === "discs" ? discProducts : padProducts;

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    if (scrollWidth <= clientWidth) {
      if (progress !== 0) setProgress(0);
      return;
    }
    const maxScroll = scrollWidth - clientWidth;
    const percentage = scrollLeft / maxScroll;
    setProgress(Math.max(0, Math.min(percentage, 1)));
  };

  const getCardWidth = () => {
    if (!scrollContainerRef.current) return 0;
    const cards = scrollContainerRef.current.querySelectorAll(".snap-start");
    if (cards.length === 0) return 0;
    const card = cards[0] as HTMLElement;
    const gap = window.innerWidth >= 1280 ? 24 : 20;
    return card.offsetWidth + gap;
  };

  // Auto-scrolling timer
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      if (!scrollContainerRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll <= 0) return;

      const cardWidth = getCardWidth();
      if (!cardWidth) return;

      if (Math.ceil(scrollLeft) >= maxScroll - 10) {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      const currentCardIndex = Math.round(scrollLeft / cardWidth);
      let targetScroll = (currentCardIndex + 1) * cardWidth;
      targetScroll = Math.min(targetScroll, maxScroll);
      scrollContainerRef.current.scrollTo({ left: targetScroll, behavior: "smooth" });
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered, activeTab]);

  // Reset scroll when changing tabs
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
      setProgress(0);
    }
  }, [activeTab]);

  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden px-4 lg:px-16 ">
      <div className="custom-container">
        {/* Top Header & Category Tabs */}
        <div
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8"
          data-aos="fade-up"
        >
          <div className="max-w-6xl">
            <h2 className="anton-font font-normal text-[#2a2a2a] section-title leading-tight mb-8 tracking-wide">
              Find The Right Part With Confidence
            </h2>
            <p className="oswald-font font-normal text-[#4a4a4a] section-text leading-relaxed">
              Explore the extensive product portfolio of AYD Oto Endüstri ve Sanayi Tic. A.Ş. using our advanced product search. Search by AYD Reference, OEM Number, Cross Reference, Vehicle Type, Product Group, or Vehicle Make to quickly find the right steering, suspension, and braking components for your application.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-col sm:flex-col gap-3 flex-shrink-0 w-full lg:w-auto">
            <button
              onClick={() => setActiveTab("discs")}
              className={`oswald-font font-medium py-2.5 px-8 rounded-lg text-center transition-all duration-300 w-full sm:w-44 md:w-48 ${
                activeTab === "discs"
                  ? "bg-[#01195d] text-white shadow-md"
                  : "bg-white border border-gray-200 text-[#1a1a1a] hover:bg-gray-50"
              }`}
            >
              Brake Disc
            </button>
            <button
              onClick={() => setActiveTab("pads")}
              className={`oswald-font font-medium py-2.5 px-8 rounded-lg text-center transition-all duration-300 w-full sm:w-44 md:w-48 ${
                activeTab === "pads"
                  ? "bg-[#01195d] text-white shadow-md"
                  : "bg-white border border-gray-200 text-[#1a1a1a] hover:bg-gray-50"
              }`}
            >
              Break Pads
            </button>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="w-full mx-auto border-t border-gray-300 mb-10 md:mb-12" />

        {/* Product Carousel Grid */}
        <div
          className="relative w-full "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-5 md:gap-6 pb-6 items-stretch px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style dangerouslySetInnerHTML={{ __html: `.overflow-x-auto::-webkit-scrollbar { display: none; }` }} />

            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="w-[85vw] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[calc(25%-18px)] flex-shrink-0 snap-start"
              >
                {/* Product Card */}
                <div className="group relative bg-white rounded-[18px] border border-gray-200  flex flex-col items-center justify-center aspect-[4/5] shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer h-full">
                  {/* Normal State Image */}
                  {/* <div className="w-full h-3/4 flex items-center justify-center relative p-4 group-hover:scale-105 transition-transform duration-500"> */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain "
                    />
                  {/* </div> */}


                  {/* Hover Overlay State with Description */}
                  <div className="absolute inset-0 bg-[#000000]/75 text-white p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    {/* Top Right Arrow Button */}
                    <div className="flex justify-end w-full">
                      <div className="w-10 h-10 rounded-full bg-white/39 hover:bg-white/25 text-white flex items-center justify-center transition-colors">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 17L17 7M17 7H7M17 7V17"
                          />
                        </svg>
                      </div>
                    </div>               

                    {/* Bottom Product Info */}
                    <div className="relative z-10 flex flex-col pt-3 mt-auto">
                      <span className="oswald-font text-white font-medium secion-text1 tracking-wider ">
                        AYD Ref : {product.ref}
                      </span>
                      <h4 className="anton-font text-white card-title font-normal tracking-wide  mt-0.5">
                        {product.name}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots / Progress Indicator */}
        <div className="flex justify-center items-center gap-2 mt-6 md:mt-8" data-aos="fade-up">
          <button
            onClick={() => {
              if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
              }
            }}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              progress < 0.33 ? "w-10 md:w-12 bg-[#01195d]" : "w-2 md:w-2.5 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label="Slide 1"
          />
          <button
            onClick={() => {
              if (scrollContainerRef.current) {
                const { scrollWidth, clientWidth } = scrollContainerRef.current;
                const maxScroll = scrollWidth - clientWidth;
                scrollContainerRef.current.scrollTo({ left: maxScroll * 0.5, behavior: "smooth" });
              }
            }}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              progress >= 0.33 && progress < 0.66 ? "w-10 md:w-12 bg-[#01195d]" : "w-2 md:w-2.5 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label="Slide 2"
          />
          <button
            onClick={() => {
              if (scrollContainerRef.current) {
                const { scrollWidth, clientWidth } = scrollContainerRef.current;
                const maxScroll = scrollWidth - clientWidth;
                scrollContainerRef.current.scrollTo({ left: maxScroll, behavior: "smooth" });
              }
            }}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              progress >= 0.66 ? "w-10 md:w-12 bg-[#01195d]" : "w-2 md:w-2.5 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label="Slide 3"
          />
        </div>
      </div>
    </section>
  );
}
