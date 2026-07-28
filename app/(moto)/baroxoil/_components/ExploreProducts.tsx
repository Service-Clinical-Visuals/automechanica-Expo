"use client";
import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";
import Link from "next/link";

const products = [
  { id: 1, title: "Passenger Cars [Ultra]", image: "/moto/baroxoil/1.png", link: "#" },
  { id: 2, title: "Commercial Vehicles [VIATA]", image: "/moto/baroxoil/2.png", link: "#" },
  { id: 3, title: "Motorbike [MOTA]", image: "/moto/baroxoil/3.png", link: "#" },
  { id: 4, title: "Agriculture Machine [AGRA]", image: "/moto/baroxoil/4.png", link: "#" },
  { id: 5, title: "Antifreeze & Coolants", image: "/moto/baroxoil/5.png", link: "#" },
  { id: 6, title: "Industrial Gear Oils", image: "/moto/baroxoil/6.png", link: "#" },
  { id: 7, title: "Hydraulic Oils", image: "/moto/baroxoil/7.png", link: "#" },
  { id: 8, title: "Brake Fluids [TEMPRA]", image: "/moto/baroxoil/8.png", link: "#" },
  { id: 9, title: "Manual & Automatic transmissions [INFINA]", image: "/moto/baroxoil/9.png", link: "#" },
];

export default function ExploreProducts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const getCardWidth = () => {
    if (!scrollContainerRef.current) return 0;
    const cards = scrollContainerRef.current.querySelectorAll('.snap-start');
    if (cards.length === 0) return 0;
    const card = cards[0] as HTMLElement;
    
    // We get the gap from computed styles or just use offsetWidth + estimated gap
    // In our classes below we use gap-5 md:gap-6 lg:gap-10
    let gap = 20; // fallback
    if (window.innerWidth >= 1280) gap = 40;
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
    
    setProgress(Math.max(0, Math.min(percentage, 1)) * 100);
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

  return (
    <section className="w-full bg-[#0F2469] py-16 md:py-24 overflow-hidden text-white">
      <div className="custom-container flex flex-col gap-10 md:gap-14">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6" data-aos="fade-up">
          <div>
            <span className="odibee-sans-font text-[#ffffff] section-subtitle font-normal flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#ffffff]"></span> Our Feature Product
            </span>
            <h2 className="odibee-sans-font section-title text-[#ffffff] font-normal mt-2 leading-tight">
              Explore Our Premium Engine Oils in 360°
            </h2>
          </div>
          <Button href="#">
            View All Products
          </Button>
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
            className="flex overflow-x-auto snap-x snap-mandatory gap-5 md:gap-6 xl:gap-10 pb-4 items-stretch"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style dangerouslySetInnerHTML={{__html: `
              .overflow-x-auto::-webkit-scrollbar { display: none; }
            `}} />

            {products.map((product) => (
              <div 
                key={product.id} 
                className="w-[85vw] sm:w-[calc(50%-12px)] xl:w-[calc(33.333%-26.66px)] flex-shrink-0 snap-start h-auto"
              >
                <Link href={product.link} className="group relative block w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-800 h-full">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#000000]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                    <h3 className="odibee-sans-font text-white section-subtitle font-normal mt-2 leading-tight mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {product.title}
                    </h3>
                    <span className="odibee-sans-font text-white link-text border-b border-white w-max pb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      View Products
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Text and Progress Bar */}
        <div className="flex flex-col xl:flex-row items-end xl:items-center justify-between gap-8 mt-4" data-aos="fade-up">
          <p className="text-[#ffffff] instrument-sans-font section-text font-normal italic max-w-4xl leading-relaxed">
            BAROX combines German engineering excellence with advanced lubricant technology to deliver premium engine oils that maximize performance, protect critical engine components, and ensure long-lasting reliability.
          </p>
          
          <div 
            className="w-full xl:w-1/3 h-1.5 bg-white/90 rounded-full overflow-hidden shrink-0 cursor-pointer relative hover:h-2 transition-all"
            onClick={(e) => {
              if (!scrollContainerRef.current) return;
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const percentage = clickX / rect.width;
              const { scrollWidth, clientWidth } = scrollContainerRef.current;
              const maxScroll = scrollWidth - clientWidth;
              scrollContainerRef.current.scrollTo({ left: percentage * maxScroll, behavior: 'smooth' });
            }}
          >
            <div 
              className="h-full bg-[#EB2226] transition-all duration-300 ease-out rounded-full pointer-events-none"
              style={{ width: `${Math.max(5, progress)}%` }}
            ></div>
          </div>
        </div>

      </div>
    </section>
  );
}
