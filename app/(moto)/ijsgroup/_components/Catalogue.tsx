"use client";
import React, { useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

export default function Catalogue() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const catalogues = [
    {
      id: 1,
      image: "/moto/ijsgroup/p1.png", 
      title: "Camshaft Pulley"
    },
    {
      id: 2,
      image: "/moto/ijsgroup/p2.png",
      title: "Wheel Hub Catalogues"
    },
    {
      id: 3,
      image: "/moto/ijsgroup/p3.png",
      title: "Timing Chain Kits"
    },
    {
      id: 4,
      image: "/moto/ijsgroup/p4.png",
      title: "Crankshaft Pulley Catalogue"
    },
    {
      id: 5,
      image: "/moto/ijsgroup/p5.png",
      title: "Averrunning alternator pulley catalogue"
    },
    {
      id: 6,
      image: "/moto/ijsgroup/p6.png",
      title: "Wheel Barring Kit Catalogue"
    },
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
        }
      }
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      
      {/* Desktop Vertical Watermark Left */}
      <div className="hidden xl:flex items-center justify-center absolute left-0 top-0 bottom-0 w-24 xl:w-20 z-0 opacity-20 pointer-events-none select-none">
        <span 
          className="oswald-font font-semibold titles tracking-widest uppercase origin-center -rotate-90 whitespace-nowrap"
          style={{ 
            WebkitTextStroke: "2px #247EA3",
            color: "transparent"
          }}
        >
          Our Catalogue
        </span>
      </div>

      <div className="custom-container relative z-10 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-8 max-w-4xl" data-aos="fade-up">
         <h2 className="oswald-font font-semibold section-title text-[#212121] mb-8">
            <span>Trusted Manufacturing <span className="relative">Worldwide<span className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#006DA4]"></span></span></span>
          </h2>
          <p className="sora-font section-text text-[#212121] leading-relaxed mx-auto">
            We are actually prepared for any type of exigency requested by our client. Our production media allow us to manufacture more than 1.000.000 units annually, of which 80% are destined for export.
          </p>
        </div>

        {/* Slider Controls */}
        <div className="flex gap-2 mb-12" data-aos="fade-up" data-aos-delay="100">
          <button 
            onClick={scrollLeft}
            className="w-10 h-10 bg-[#247EA3] text-white flex items-center justify-center hover:bg-[#1a5b75] transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={scrollRight}
            className="w-10 h-10 bg-[#247EA3] text-white flex items-center justify-center hover:bg-[#1a5b75] transition-colors"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Catalogue Slider */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 lg:gap-10 w-full overflow-x-auto snap-x snap-mandatory z-10 relative  pt-4 items-start"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style dangerouslySetInnerHTML={{__html: `
            div::-webkit-scrollbar { display: none; }
          `}} />
          {catalogues.map((item, index) => (
            <div 
              key={item.id} 
              className={`flex flex-col group cursor-pointer snap-start min-w-[100%] sm:min-w-[calc(50%-1rem)] xl:min-w-[calc(33.333%-1.7rem)] flex-shrink-0 transition-all duration-500 ${
                index % 2 !== 0 ? 'xl:mt-16' : ''
              }`}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
            >
              <div className="w-full  mb-4 overflow-hidden border border-gray-100 drop-shadow-md">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = `/moto/ijsgroup/7.png`;
                  }}
                />
              </div>
              <div className="flex items-center justify-between mt-auto gap-4">
                <h3 className="oswald-font font-semibold card-text text-[#247EA3] leading-tight">
                  {item.title}
                </h3>
                <button className="w-10 h-10 rounded-full bg-[#247EA3] text-white flex items-center justify-center hover:bg-[#1a5b75] transition-colors shrink-0">
                  <ArrowUpRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
