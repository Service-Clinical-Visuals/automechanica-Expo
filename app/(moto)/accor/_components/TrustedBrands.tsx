"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";

export default function TrustedBrands() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const TOTAL_DOTS = 3;

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
      if (activeIndex !== 0) setActiveIndex(0);
      return;
    }

    const maxScroll = scrollWidth - clientWidth;
    const scrollPercentage = scrollLeft / maxScroll;
    
    // Map progress to dot index [0, TOTAL_DOTS - 1]
    let index = Math.round(scrollPercentage * (TOTAL_DOTS - 1));
    index = Math.max(0, Math.min(index, TOTAL_DOTS - 1));
    
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const scrollToDot = (index: number) => {
    if (!scrollContainerRef.current) return;
    const { scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    
    if (maxScroll <= 0) return;

    const targetScroll = (maxScroll / (TOTAL_DOTS - 1)) * index;
    
    scrollContainerRef.current.scrollTo({
      left: targetScroll,
      behavior: "smooth"
    });
  };

  // Auto-scrolling logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollContainerRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      
      if (maxScroll <= 0) return;

      const cardWidth = getCardWidth();
      if (!cardWidth) return;

      // Check if we are at or very close to the end
      if (Math.ceil(scrollLeft) >= maxScroll - 10) {
        scrollContainerRef.current.scrollTo({
          left: 0,
          behavior: "smooth"
        });
        return;
      }

      const currentCardIndex = Math.round(scrollLeft / cardWidth);
      let targetScroll = (currentCardIndex + 1) * cardWidth;
      targetScroll = Math.min(targetScroll, maxScroll);
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth"
      });
      
    }, 4000); // scrolls every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const brands = [
    {
      title: "ACCOR Lubricants",
      desc: "Delivering high-performance lubricants, automotive fluids, and specialty solutions engineered to meet the demands of industrial, agricultural, marine, transport, and automotive sectors worldwide.",
      logo: "/moto/accorLubricants/brand1.png"
    },
    {
      title: "KENNOL",
      desc: "Built on motorsport expertise, KENNOL offers premium lubricants that combine racing performance with reliability. Designed for demanding conditions, the range delivers superior protection and efficiency.",
      logo: "/moto/accorLubricants/brand2.png"
    },
    {
      title: "MIRALUB",
      desc: "MIRALUB provides a comprehensive range of lubricants that balance quality, performance, and affordability. Trusted by professionals and businesses, the products are designed for reliable everyday operation.",
      logo: "/moto/accorLubricants/brand3.png"
    },
    {
      title: "FL'AUTO",
      desc: "FL'AUTO offers a wide selection of automotive fluids developed to meet the specific needs of modern vehicles. From maintenance to performance, the range ensures smooth and efficient operation.",
      logo: "/moto/accorLubricants/brand4.png"
    },
    {
      title: "RENOX",
      desc: "RENOX delivers innovative maintenance and care products that help improve vehicle performance, extend service life, and support efficient maintenance practices.",
      logo: "/moto/accorLubricants/brand5.png"
    },
    {
      title: "BIOFLUID",
      desc: "BIOFLUID combines high-performance technology with environmental responsibility. Formulated to be over 95% biodegradable, these products help reduce environmental impact.",
      logo: "/moto/accorLubricants/brand6.png"
    },
    {
      title: "ROKKA",
      desc: "ROKKA develops reliable hydroalcoholic solutions using advanced formulations and strict quality standards, ensuring safety and effectiveness across various applications.",
      logo: "/moto/accorLubricants/brand7.png"
    }
  ];

  return (
    <section className="w-full bg-[#1a1a1a] py-20 overflow-hidden">
      <div className="custom-container">
        
        {/* Header Section */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-24 gap-8">
          <div data-aos="fade-right" className="xl:max-w-[75%] 2xl:!max-w-[70%]">
            <div className="w-fit">
               <h2 className="text-[#ffffff] text-3xl md:text-4xl lg:text-[36px]   font-bold oxanium mb-6 mb-6 leading-tight tracking-wide">
                Trusted Brands. Proven Performance.
              </h2>
              <div className="w-full h-[1px] bg-white/80 mb-6"></div>
            </div>
            <div className="max-w-5xl ">
              <p className="text-white exo2 text-[16px] md:text-[18px]  leading-relaxed ">
                Our portfolio brings together specialized lubricant brands designed to meet the diverse needs of automotive, agricultural, industrial, and commercial applications. Each brand is developed with a commitment to quality, innovation, and performance, delivering reliable solutions for professionals and businesses worldwide.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0" data-aos="fade-left">
            <Button href="#">Explore Partnerships</Button>
          </div>
        </div>

        {/* Scrollable Cards Container */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 pt-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style dangerouslySetInnerHTML={{__html: `
            .overflow-x-auto::-webkit-scrollbar { display: none; }
          `}} />

          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="w-[85vw] md:w-[calc(50%-12px)] xl:w-[calc(25%-18px)] flex-shrink-0 snap-start relative bg-white pt-24 px-4 xl:px-6 pb-10 flex flex-col items-center text-center shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Overlapping Logo Box */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[180px] xl:w-[200px] h-[80px] xl:h-[90px] bg-white border-[8px] border-[#1a1a1a] flex items-center justify-center p-3">
                <img 
                  src={brand.logo} 
                  alt={brand.title} 
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://placehold.co/400x200/ffffff/333333?text=${brand.title.replace(/ /g, '+')}`;
                  }}
                />
              </div>

              {/* Card Content */}
              <h3 className="text-[#1b1537] font-bold text-[16px] md:text-lg lg:text-[22px]   exo2 mb-1 md:mb-2">
                {brand.title}
              </h3>
              
              <p className="text-[#484848] exo2 text-[16px] md:text-[18px]  leading-relaxed mb-4 flex-grow">
                {brand.desc}
              </p>

              {/* View More Link */}
              <div className="mt-auto flex items-center pt-2">
                <Link href="#" className="group inline-flex items-center gap-3">
                  <span className="text-[#1b1537] font-bold text-[16px] md:text-lg lg:text-[20px]  exo2 underline decoration-[2px] underline-offset-[6px] decoration-[#1b1537] transition-colors">
                    View More
                  </span>
                  <div className="flex items-center justify-center w-[28px] h-[28px] md:w-[32px] md:h-[32px] bg-[#E41B13] rounded-full shadow-[0_4px_10px_rgba(228,27,19,0.4)] transition-transform duration-300 group-hover:scale-110">
                    <img src="/moto/accorLubricants/toprightarrow.png" alt="arrow" className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] object-contain"/>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Pagination/Slider Indicators */}
        <div className="flex justify-center flex-wrap gap-3 mt-12">
          {[...Array(TOTAL_DOTS)].map((_, i) => (
            <button 
              key={i}
              onClick={() => scrollToDot(i)}
              aria-label={`Scroll to page ${i + 1}`}
              className={`w-10 h-2 skew-x-[-30deg] transition-colors duration-300 focus:outline-none ${
                activeIndex === i ? 'bg-[#E41B13]' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
}
