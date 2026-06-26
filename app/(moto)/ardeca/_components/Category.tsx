"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Category() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const TOTAL_DOTS = 4;

  const categories = [
    {
      id: "01",
      title: "Passenger car engine oil",
      desc: "Engine oils are the life blood of any vehicle and play a vital role in maintaining performance. Every engine is different and that's why our extensive range features different formulations.",
    },
    {
      id: "02",
      title: "Heavy duty engine oil",
      desc: "Heavy duty engine oil includes lubricants developed for commercial vehicles, trucks, buses and off-road equipment operating under sustained load.",
    },
    {
      id: "03",
      title: "Automatic transmission",
      desc: "Automatic Transmission Oil includes lubricants for automatic gearboxes, torque converters and transmission systems in passenger cars, vans and selected commercial vehicles.",
    },
    {
      id: "04",
      title: "Manual transmission",
      desc: "Manual Transmission Oil includes lubricants for synchronized and non-synchronized gearboxes in passenger cars, vans and selected commercial vehicles.",
    },
    {
      id: "05",
      title: "2 stroke and 4 stroke",
      desc: "2 & 4 Stroke Engine Oil includes lubricants for a broad range of small engines used in motorcycles, scooters, garden equipment and utility machinery. ",
    },
    {
      id: "06",
      title: "Marine",
      desc: "Marine Engine Oil includes lubricants formulated for inboard and outboard marine engines operating in demanding waterborne conditions.",
    },
    {
      id: "07",
      title: "Agriculture",
      desc: "Agricultural Engine Oil includes lubricants for tractors, harvesters and farm machinery operating in mixed engine, transmission and hydraulic environments.",
    },
    {
      id: "08",
      title: "Hydraulic oil",
      desc: "Hydraulic Fluid includes lubricants used in hydraulic systems powering industrial machines, mobile equipment, lifts and jacks.",
    }
  ];

  const getCardWidth = () => {
    if (!scrollContainerRef.current) return 0;
    const cards = scrollContainerRef.current.querySelectorAll('.snap-start');
    if (cards.length === 0) return 0;
    const card = cards[0] as HTMLElement;
    // The gap is gap-6 which is 24px (1.5rem)
    return card.offsetWidth + 24; 
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    
    if (scrollWidth <= clientWidth) {
      if (scrollProgress !== 0) setScrollProgress(0);
      return;
    }

    const maxScroll = scrollWidth - clientWidth;
    const percentage = scrollLeft / maxScroll;
    
    setScrollProgress(Math.max(0, Math.min(percentage, 1)));
  };

  const scrollToDot = (index: number) => {
    if (!scrollContainerRef.current) return;
    const { scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;

    const targetScroll = (maxScroll / (TOTAL_DOTS - 1)) * index;
    scrollContainerRef.current.scrollTo({ left: targetScroll, behavior: "smooth" });
  };

  // Auto-scrolling logic
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      if (!scrollContainerRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      
      if (maxScroll <= 0) return;

      const cardWidth = getCardWidth();
      if (!cardWidth) return;

      // Check if we are at or very close to the end
      if (Math.ceil(scrollLeft) >= maxScroll - 10) {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      const currentCardIndex = Math.round(scrollLeft / cardWidth);
      let targetScroll = (currentCardIndex + 1) * cardWidth;
      targetScroll = Math.min(targetScroll, maxScroll);
      
      scrollContainerRef.current.scrollTo({ left: targetScroll, behavior: "smooth" });
      
    }, 3000); // scrolls every 3 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  const maxIntervals = TOTAL_DOTS - 1;
  const x = scrollProgress * maxIntervals;
  const index = Math.min(Math.floor(x), maxIntervals - 1); 
  const p = x - index; 

  let jellyLeft = 0;
  let jellyWidth = 14; 

  if (p < 0.5) {
    const stretch = p * 2;
    jellyLeft = index * 26;
    jellyWidth = 14 + stretch * 26;
  } else {
    const stretch = (p - 0.5) * 2;
    jellyLeft = index * 26 + stretch * 26;
    jellyWidth = 14 + (1 - stretch) * 26;
  }

  jellyLeft -= 2;

  return (
    <section className="w-full bg-white py-20 lg:py-28 overflow-hidden">
      <div className="custom-container">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center border border-[#CE0E2D] rounded-full px-4 py-1 mb-4">
             <span className="text-[#CE0E2D] text-[16px] font-semibold chakra-petch flex items-center">
                <span className="mr-2 text-[16px] leading-none">&bull;</span> Product Range
              </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-[32px] font-semibold mb-8 !text-black chakra-petch leading-tight">
            Our Category
          </h2>
          
          <p className="text-[#484848] text-sm md:text-[16px] oxanium leading-[1.8] max-w-6xl mx-auto">
            Knowing which products are right for different vehicles, keeping the right products stocked, and having confidence in the products you use can be time consuming and complicated.
          </p>
        </div>

        {/* Cards Carousel */}
        <div 
          className="relative w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 items-stretch"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style dangerouslySetInnerHTML={{__html: `
              .overflow-x-auto::-webkit-scrollbar { display: none; }
            `}} />

            {categories.map((cat, idx) => (
              <div 
                key={idx} 
                className="w-[85vw] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex-shrink-0 snap-start relative bg-white p-8  md:p-8  lg:p-10  shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-50 group hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col h-auto min-h-[360px]"
              >
                {/* Corner Borders */}
                <div className="absolute top-0 right-0 w-[40%] h-[35%] border-t-2 border-r-2 border-[#CE0E2D] transition-all duration-500 group-hover:w-[45%] group-hover:h-[40%] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[40%] h-[35%] border-b-2 border-l-2 border-[#CE0E2D] transition-all duration-500 group-hover:w-[45%] group-hover:h-[40%] pointer-events-none"></div>
                
                <div className="relative z-10 flex-grow flex flex-col">
                  <h2 className="text-3xl md:text-4xl lg:text-[32px] font-semibold mb-4 !text-[#CE0E2D] chakra-petch leading-tight"> {cat.id}</h2>

                  <h3 className="text-xl md:text-2xl font-semibold mb-4 !text-black chakra-petch ">
                    {cat.title}
                  </h3>
                  
                  <p className="text-[#484848] text-sm md:text-[16px] oxanium leading-[1.8] mb-6">
                    {cat.desc}
                  </p>

                  <Link href="#" className="inline-flex items-center text-[#CE0E2D] mt-4 text-sm md:text-[16px] font-normal oxanium leading-[1.8] hover:text-[#a50b24] transition-colors mt-auto">
                    Read More <ArrowRight size={18} strokeWidth={2.5} className="ml-2 text-[#000000] group-hover:text-[#CE0E2D] transition-colors" />
                  </Link> 
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Jelly Ball Progress Indicator */}
        <div className="flex items-center justify-start mt-8 md:mt-12 relative w-[88px] mx-auto h-4">
          
          {/* Connector Line behind dots (Gray) */}
          <div className="absolute top-1/2 left-[5px] w-[78px] h-[2px] bg-[#484848] -translate-y-1/2 z-0"></div>
          
          {/* Static Background Dots */}
          <div className="flex gap-4 w-[88px] absolute top-1/2 left-0 -translate-y-1/2 z-20">
            {[0, 1, 2, 3].map((_, i) => (
              <button 
                key={i}
                onClick={() => scrollToDot(i)}
                className="w-2.5 h-2.5 bg-[#484848] rounded-full shrink-0 cursor-pointer hover:bg-gray-500 transition-colors"
                aria-label={`Go to slide group ${i + 1}`}
              ></button>
            ))}
          </div>

          {/* Glowing Red Jelly Ball */}
          <div 
            className="absolute top-1/2 bg-[#CE0E2D] rounded-full z-30 shadow-[0_0_8px_rgba(206,14,45,0.7)] -translate-y-1/2 pointer-events-none"
            style={{ 
              left: `${jellyLeft}px`,
              width: `${jellyWidth}px`,
              height: '14px'
            }}
          ></div>

        </div>
      </div>
    </section>
  );
}
