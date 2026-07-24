"use client";
import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";

const oilProducts = [
  { id: 1, name: "BAROX ULTRA 20W-50 SL", image: "/moto/baroxoil/p1.png" },
  { id: 2, name: "BAROX VIATA 20W-50 CF-4", image: "/moto/baroxoil/p2.png" },
  { id: 3, name: "BAROX BOOSTA HYDRAULIC HLP 32", image: "/moto/baroxoil/p3.png" },
  { id: 4, name: "BAROX SYNTHETIC 5W-40 SN", image: "/moto/baroxoil/p4.png" },
  { id: 5, name: "BAROX GEAR OIL 80W-90", image: "/moto/baroxoil/p5.png" },
];

export default function OurProducts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const getCardWidth = () => {
    if (!scrollContainerRef.current) return 0;
    const cards = scrollContainerRef.current.querySelectorAll('.snap-start');
    if (cards.length === 0) return 0;
    const card = cards[0] as HTMLElement;
    
    // Gap is 20px (gap-5) or 24px (gap-6) or 32px (gap-8)
    let gap = 20; 
    if (window.innerWidth >= 1280) gap = 32;
    else if (window.innerWidth >= 768) gap = 24;
    
    return card.offsetWidth + gap;
  };

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
      
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="w-full bg-[#F7F7F7] py-16 md:py-24 overflow-hidden">
      <div className="custom-container flex flex-col gap-10 md:gap-14">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto" data-aos="fade-up">
          <span className="odibee-sans-font text-[#EB2226] section-subtitle font-normal  flex items-center gap-2 justify-center mb-2">
            <span className="w-6 h-[2px] bg-[#EB2226]"></span> Our Product
          </span>
          <h2 className="odibee-sans-font section-title text-[#212121] font-normal mt-2 leading-tight">
            Discover the Right Solutions for Your Vehicle
          </h2>
        </div>

        {/* Custom Native Slider */}
        <div 
          className="relative w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          data-aos="fade-up" 
          data-aos-delay="100"
        >
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-5 md:gap-6 xl:gap-8 pb-4 items-stretch px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style dangerouslySetInnerHTML={{__html: `
              .overflow-x-auto::-webkit-scrollbar { display: none; }
            `}} />

            {oilProducts.map((product) => (
              <div 
                key={product.id}
                className="w-[85vw] sm:w-[calc(50%-12px)] xl:w-[calc(33.333%-21px)] flex-shrink-0 snap-start h-auto"
              >
                <div className="flex flex-col h-full bg-white p-4 md:p-6 shadow-sm border border-gray-100 transition-shadow duration-300 hover:shadow-md h-full">
                  
                  {/* Image Container */}
                  <div className="w-full  bg-[#E6E6E6] flex items-center justify-center  relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain drop-shadow-md hover:scale-105 transition-transform duration-500 p-15"
                    />
                  </div>
                  
                  {/* Content Container */}
                  <div className="flex flex-col items-center justify-center pt-6 pb-2 gap-4 flex-grow">
                    <h3 className="odibee-sans-font text-[#212121] section-subtitle font-normal text-center leading-tight">
                      {product.name}
                    </h3>
                    <Button href="#" className="mt-auto px-6 py-2 text-sm !rounded-sm shadow-sm">
                      View Product Details
                    </Button>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Progress Bar Pagination (Discrete Lines) */}
        <div className="flex justify-center items-center gap-2 mt-4" data-aos="fade-up">
          <div className={`h-1.5 w-10 sm:w-12 rounded-full transition-colors duration-300 ${progress < 0.5 ? 'bg-[#0F2469]' : 'bg-gray-300'}`}></div>
          <div className={`h-1.5 w-10 sm:w-12 rounded-full transition-colors duration-300 ${progress >= 0.5 ? 'bg-[#0F2469]' : 'bg-gray-300'}`}></div>
        </div>

      </div>
    </section>
  );
}
