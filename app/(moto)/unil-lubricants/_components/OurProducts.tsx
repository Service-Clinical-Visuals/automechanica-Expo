"use client";
import React, { useState, useEffect } from "react";
import Button from "./Button";

export default function OurProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(7); // default mobile

  const products = [
    {
      name: "GI-V7 10W50",
      desc: "GI-V7 has been especially elaborated to meet the most severe requirements of sedan cars' petrol and Diesel engines, particularly supercharged engines or with multi-valves.",
      image: "/moto/unil-lubricants/1.png"
    },
    {
      name: "GI-V9 5W50",
      desc: "GI-V9 is a very high performance multigrade lubricant, covering a large range of viscosities and temperatures ensuring a high anti-wear protection as well as a reduction of inner frictions.",
      image: "/moto/unil-lubricants/2.png"
    },
    {
      name: "Merion 4T",
      desc: "MERION 4T is an oil especially designed to lubricate small gasoline gardening engines (lawnmowers, motorcultivators, cleaning-mowers, ...) equipped with 4-stroke engines.",
      image: "/moto/unil-lubricants/3.png"
    },
    {
      name: "Opaljet 12 S 15W40",
      desc: "Opaljet 12S is an engine oil for petrol and diesel engines with or without turbocharger. This engine oil meets the needs of the majority of the European vehicle fleet. It is the ideal lubricant for widespread use in garages and mechanics workshops.",
      image: "/moto/unil-lubricants/4.png"
    },
    {
      name: "Opaljet 16 S 10W40",
      desc: "OPALJET 16 S 10W40 is a multigrade high performance engine oil known to respond to the most severe requirements of modern gasoline and diesel (turbo charged or not) car engines",
      image: "/moto/unil-lubricants/5.png"
    },
    {
      name: "Opaljet 24 S 5W40",
      desc: "Opaljet 24S 5W40, a 100% synthetic engine oil has been especially designed to meet the stringent requirements of today's cars, under all conditions of use. It guaranties perfect protection and long life of all high performance parts.",
      image: "/moto/unil-lubricants/6..png"
    },
    {
      name: "Opaljet 48S 0W30",
      desc: "Opaljet 24S 5W40, a 100% synthetic engine oil has been especially designed to meet the stringent requirements of today's cars, under all conditions of use. It guaranties perfect protection and long life of all high performance parts.",
      image: "/moto/unil-lubricants/7.png"
    },
    {
      name: "Opaljet Competition 10W60",
      desc: "Advanced 100% synthetic engine oil with fullerene nano-particle technology for superior wear protection, reduced friction, and exceptional performance under extreme operating conditions.",
      image: "/moto/unil-lubricants/8.png"
    }
  ];

  useEffect(() => {
    const updateMax = () => {
      if (window.innerWidth >= 1280) setMaxIndex(products.length - 3); // xl: 3 cards
      else if (window.innerWidth >= 1024) setMaxIndex(products.length - 2); // lg: 2 cards (iPad Pro layout)
      else if (window.innerWidth >= 768) setMaxIndex(products.length - 2); // md: 2 cards (iPad layout)
      else setMaxIndex(products.length - 1); // mobile: 1 card
    };
    
    // Set initial value
    updateMax();
    
    window.addEventListener("resize", updateMax);
    return () => window.removeEventListener("resize", updateMax);
  }, [products.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="custom-container">
        
        {/* Title and Top Description */}
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto " data-aos="fade-up">
         <h2 className="oswald-font font-semibold text-[#000000] section-title mb-6">
            Our Products
          </h2>
         <p className="lato-font text-[#333333] section-text font-normal leading-relaxed">
            Explore a comprehensive range of high-performance lubricants designed to maximize engine protection, improve efficiency, and ensure dependable performance. From passenger vehicles to heavy-duty equipment, our solutions are built to perform in every environment.
          </p>
        </div>

        {/* Product Cards Slider (Custom CSS Transform) */}
        <div className="w-full" data-aos="fade-up" data-aos-delay="100">
          <style>{`
            .carousel-track { transform: translateX(calc(var(--current-index) * -100%)); }
            @media (min-width: 768px) { .carousel-track { transform: translateX(calc(var(--current-index) * -50%)); } }
            @media (min-width: 1280px) { .carousel-track { transform: translateX(calc(var(--current-index) * -33.33333%)); } }
          `}</style>

          <div className="w-full relative pb-16">
            <div className="overflow-visible px-2 py-4">
              <div 
                className="flex transition-transform duration-500 ease-in-out h-full carousel-track"
                style={{ '--current-index': currentIndex } as React.CSSProperties}
              >
                {products.map((product, idx) => (
                  <div key={idx} className="w-full md:w-1/2 xl:w-1/3 flex-shrink-0 px-3 xl:px-5 h-auto">
                    
                    <div className="flex flex-col items-center relative h-full">
                      
                      {/* Top Image Container */}
                      <div className="w-[85%] aspect-[4/5] rounded-xl p-6 flex items-center justify-center relative  pointer-events-none">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 pointer-events-auto"
                          onError={(e) => {
                            e.currentTarget.src = "/moto/saria-international/R1.png"; // temporary fallback
                          }}
                        />
                      </div>

                      {/* Bottom Text Container */}
                      <div className="w-full relative bg-white border border-gray-200 rounded-xl shadow-lg pt-10 pb-8 px-6 md:px-8 mt-[-100px] z-20 flex-grow flex flex-col">
                        
                        {/* View More Button (Absolute position) */}
                        <div className="absolute top-0 left-6 -translate-y-1/2 z-30">
                          <Button 
                            href="#" 
                            className="bg-[#0A2B52] hover:bg-[#071D3A] text-white !py-1.5 !px-6 section-text rounded-lg"
                          >
                            View More
                          </Button>
                        </div>

                        <h3 className="oswald-font font-medium text-[#002D5B] card-text mb-4 ">
                          {product.name}
                        </h3>
                        <p className="lato-font text-[#3a3a3a] section-text font-normal leading-relaxed">
                          {product.desc}
                        </p>
                      </div>

                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* Custom Pagination Dots */}
            <div className="absolute bottom-0 left-0 w-full flex justify-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "w-8 bg-[#0A2B52]" : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
