"use client";

import { useState } from "react";
import { ArrowRight, ChevronUp, ChevronDown } from "lucide-react";
import Container from "./Container";

const images = [
  "/moto/north-sea/news1.jpg",
  "/moto/north-sea/news2.jpg",
  "/moto/north-sea/news3.jpg",
  "/moto/north-sea/news4.jpg",
  "/moto/north-sea/news5.jpg",
  "/moto/north-sea/news6.jpg",
];

export default function News() {
  const [index, setIndex] = useState(0);

  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setIndex((i) => (i + 1) % images.length);

  return (
    <section className="bg-white py-10 sm:py-12 md:py-20">
      <Container>
        <div
          className="relative w-full aspect-[4/5] sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-[21/9] max-h-[640px] overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-black shadow-[0_15px_50px_rgba(0,0,0,0.18)]"
          data-aos="fade-up"
        >
          {/* Background images - crossfade on arrow click, content stays fixed */}
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt="North Sea Lubricants"
              className={`absolute inset-0 w-full h-full object-cover object-right lg:object-center transition-opacity duration-700 ease-in-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1E38]/95 via-[#0A1E38]/55 to-transparent" />

          {/* Fixed content - does not change when the image changes */}
          <div className="relative z-10 flex h-full items-center">
            <div className="w-full px-6 sm:px-10 md:px-12 lg:px-14">
              <div className="max-w-[300px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[480px]">
                <p className="section-title text-[#ffffff] font-normal mb-2 sm:mb-3">
                  &ldquo;Feel the power of our lubricants.&rdquo;
                </p>
                <h2 className="card-title3 font-semibold uppercase leading-[104%]! text-yellow-400! mb-5 sm:mb-7 md:mb-8">
                  You&apos;ve Got
                  <br />
                  The Power!
                </h2>
                <button
                  type="button"
                  className="flex navlink text-[16px]! sm:text-[18px]! font-bold! text-black! items-center gap-2 bg-white rounded-full pl-5 pr-1.5 py-1.5 hover:opacity-90 transition-opacity"
                >
                  <span>Explore Solutions</span>
                  <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0A1E38] shrink-0">
                    <ArrowRight size={14} strokeWidth={2.5} className="text-white" />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Up / Down navigation - only changes the background image */}
          <div className="absolute right-3 sm:right-5 md:right-7 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2 sm:gap-3">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous image"
              className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-md transition-colors cursor-pointer"
            >
              <ChevronUp size={16} strokeWidth={2.5} className="text-[#0A1E38]" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-md transition-colors cursor-pointer"
            >
              <ChevronDown size={16} strokeWidth={2.5} className="text-[#0A1E38]" />
            </button>
          </div>

          {/* Dot pagination */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  i === index ? "w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400" : "w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white/60 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
