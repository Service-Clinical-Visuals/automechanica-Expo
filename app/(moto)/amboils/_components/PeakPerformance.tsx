"use client";
import React, { useState, useEffect } from 'react';
import Button from './Button';

const products = [
  { id: 1, name: "AMB Oils SuperTec 5w40", size: "1LTR", image: "/moto/amboils/p1.png" },
  { id: 2, name: "AMB Oils UNITEC (FORD) SAE 5W30", size: "1LTR", image: "/moto/amboils/p2.png" },
  { id: 3, name: "AMB Oils Premium 10w40", size: "1LTR", image: "/moto/amboils/p3.png" },
  { id: 4, name: "AMB Oils Advanced 5w30", size: "1LTR", image: "/moto/amboils/p4.png" },
  { id: 5, name: "AMB Oils Classic 15w40", size: "1LTR", image: "/moto/amboils/p5.png" },
  { id: 6, name: "AMB Oils Eco 0w20", size: "1LTR", image: "/moto/amboils/p6.png" },
  { id: 7, name: "AMB Oils Racing 10w60", size: "1LTR", image: "/moto/amboils/p7.png" },
];

export default function PeakPerformance() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2); // default to desktop

  // Handle responsive items per page
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 1024 ? 1 : 2);
    };
    handleResize(); // set initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Handle auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 4000); // Scroll every 4 seconds
    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Split Background (Dark top, White bottom) */}
      <div className="absolute top-0 left-0 w-full h-[65%] bg-[#1e1e1e] z-0"></div>
      
      <div className="custom-container relative z-10 pt-16 lg:pt-24 pb-16">
        
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10" data-aos="fade-up">
          <div className="max-w-4xl">
            <h2 className="teko-font font-semibold text-[#ffffff] section-title mb-4 tracking-wide ">
              Engineered For Peak Performance
            </h2>
            <p className="oswald-font font-normal text-[#ffffff] section-text leading-relaxed  ">
              Solutions for passenger cars, commercial vehicles, cargo trucks, and heavy machinery, all engineered to deliver exceptional performance while meeting the highest ecological, quality, international environmental, safety, and sustainability standards.
            </p>
          </div>
          <div className="flex-shrink-0 mt-4 lg:mt-0">
            <Button href="#" variant="withArrow">
              Explore Solutions
            </Button>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-white/40 mb-20 w-full" />

        {/* Carousel Container */}
        <div className="overflow-hidden w-full px-2 -mx-2 pt-16 -mt-16 pb-8 -mb-8 max-w-7xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div key={pageIndex} className="w-full flex-shrink-0 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 px-2 pt-8">
                {products.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((product) => (
                  
                  /* Card */
                  <div key={product.id} className="bg-white rounded-xl flex flex-col md:flex-row items-stretch md:pr-8 relative w-full h-full border border-gray-100 mt-16 md:mt-[70px]">
                    
                    {/* Image Area */}
                    <div className="w-full md:w-[220px] flex-shrink-0 relative flex items-end justify-center pb-6 md:pb-6 border-b md:border-b-0 md:border-r border-gray-100 rounded-t-xl md:rounded-t-none md:rounded-l-xl">
                      {/* Protruding Product Image */}
                      <img src={product.image} alt={product.name} className="w-full max-w-[120px] md:max-w-[200px] object-contain h-auto relative z-20 -mt-12 md:-mt-[100px]" />
                    </div>

                    {/* Content Container */}
                    <div className="p-6 md:pl-8 md:py-8 flex flex-col justify-center flex-grow items-center md:items-start text-center md:text-left">
                      <span className="oswald-font font-semibold text-gray-500 section-text2 tracking-widest uppercase mb-2 block">{product.size}</span>
                      <h4 className="teko-font font-semibold text-[#212121] card-title leading-[1.1] tracking-wide mb-6 md:pr-4">
                        {product.name} {product.size}
                      </h4>
                      <hr className="border-t border-dashed border-gray-200 mb-6 w-full" />
                      <a href="#" className="inline-flex items-center justify-between gap-4 md:gap-8 px-6 py-2.5 rounded border border-gray-100 shadow-sm text-[#212121] oswald-font font-medium section-text2 hover:bg-gray-50 transition-colors group w-fit">
                        Discover More
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>

                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators (Progress Bar) */}
        <div className="flex justify-center gap-2.5 mt-10">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button 
              key={index} 
              onClick={() => setCurrentIndex(index)}
              className={`w-12 h-2 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-[#C99843]' : 'bg-gray-200 hover:bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
