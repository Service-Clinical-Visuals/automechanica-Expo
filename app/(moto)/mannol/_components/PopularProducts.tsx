"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

export default function PopularProducts() {
  const [activeCategoryId, setActiveCategoryId] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === 2 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategoryId]);
  const categories = [
    {
      id: 1,
      image: "/moto/mannol/pro1.png",
      title: "Motor Oils for cars",
    },
    {
      id: 2,
      image: "/moto/mannol/pro2.png",
      title: "Motor Oils for ships",
    },
    {
      id: 3,
      image: "/moto/mannol/pro3.jpg",
      title: "Greases",
    },
  ];

  const products = [
    {
      id: 1,
      image: "/moto/mannol/1.png",
      name: "MANNOL For Chinese Cars 5W-20 7925",
      link: "#",
    },
    {
      id: 2,
      image: "/moto/mannol/2.png",
      name: "MN9830 Ceramo Motorbike 9830",
      link: "#",
    },
    {
      id: 3,
      image: "/moto/mannol/3.png",
      name: "MANNOL Molibden Ultra 5W-30 7916",
      link: "#",
    },
    {
      id: 4,
      image: "/moto/mannol/4.png",
      name: "MANNOL GLV-ONE 7929",
      link: "#",
    },
    {
      id: 5,
      image: "/moto/mannol/5.png",
      name: "MANNOL Marine Gear Oil 7822",
      link: "#",
    },
    {
      id: 6,
      image: "/moto/mannol/6.png",
      name: "MANNOL 4-Stroke Outboard 7821",
      link: "#",
    },
    {
      id:7,
      image: "/moto/mannol/7.png",
      name: "MANNOL Marine 1230 2404",
      link: "#",
    },
    {
      id:8,
      image: "/moto/mannol/8.png",
      name: "MANNOL Marine 1240 2405",
      link: "#",
    },
    {
      id:9,
      image: "/moto/mannol/9.png",
      name: "MANNOL STP Grease Ester 8033",
      link: "#",
    },
    {
      id:10,
      image: "/moto/mannol/10.png",
      name: "MANNOL Lithium Grease LT-43 Ester 8031",
      link: "#",
    },
    {
      id:11,
      image: "/moto/mannol/11.png",
      name: "MANNOL Emulsion 1103",
      link: "#",
    },
    {
      id:12,
      image: "/moto/mannol/12.png",
      name: "MANNOL Extreme Pressure Multipurpose EP-0 Ester 8401",
      link: "#",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white w-full border-t border-gray-100">
      <div className="custom-container flex flex-col items-center">
        
        {/* Title with decorative lines */}
        <div className="flex items-center justify-center gap-4 mb-6" data-aos="fade-up">
          <div className="w-16 md:w-30 h-[2px] bg-[#FCC917]"></div>
          <h2 className="sora-font text-[#1F2A44] section-title font-semibold whitespace-nowrap">Our Popular Products</h2>
          <div className="w-16 md:w-30 h-[2px] bg-[#FCC917]"></div>
        </div>

        {/* Description Text */}
        <p className="poppins-font text-[#000000] section-text font-normal max-w-7xl mx-auto mb-12 leading-relaxed text-center" data-aos="fade-up" data-aos-delay="100">
          Discover our best-selling lubricants, engineered to deliver exceptional engine protection, performance, and reliability for every journey. Designed to meet the demands of modern vehicles across diverse driving conditions.
        </p>

        {/* Main Grid: Categories & Products */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 w-full">
          
          {/* Left: Categories Box */}
          <div 
            className="bg-white border border-gray-200 shadow-lg p-6 md:p-8 flex flex-col gap-6 w-full xl:col-span-5"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex flex-col gap-4 flex-grow">
              {categories.map((cat) => {
                const isActive = activeCategoryId === cat.id;
                return (
                  <div 
                    key={cat.id} 
                    onClick={() => setActiveCategoryId(cat.id)}
                    className="relative w-full h-[120px] md:h-[135px] group overflow-hidden block bg-gray-200 cursor-pointer"
                  >
                    <img 
                      src={cat.image} 
                      alt={cat.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  
                    {/* Active state overlay */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/40 to-transparent flex flex-col justify-center items-end pr-6 md:pr-10">
                        <h3 className="sora-font text-white font-semibold card-text mb-1">{cat.title}</h3>
                        <div className="flex items-center gap-2 text-[#FFC107]">
                          <span className="sora-font font-semibold header-link underline underline-offset-2">View Products</span>
                          <ArrowRight size={18} strokeWidth={2.5} />
                        </div>
                      </div>
                    )}

                    {/* Hover state for inactive categories */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="sora-font text-white font-semibold card-text mb-1">{cat.title}</h3>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
            <div className="flex justify-center mt-2">
              <Button href="#">
                View All Categories
              </Button>
            </div>
          </div>

          {/* Right: Products Carousel Container */}
          <div className="flex flex-col justify-between h-full overflow-hidden xl:col-span-7" data-aos="fade-up" data-aos-delay="300">
            <style>{`
              .carousel-track { transform: translateX(calc(var(--current-index) * -100%)); }
              @media (min-width: 768px) { .carousel-track { transform: translateX(calc(var(--current-index) * -50%)); } }
            `}</style>
            
            <div className="w-full flex-grow overflow-hidden relative">
              <div 
                className="flex transition-transform duration-500 ease-in-out h-full carousel-track"
                style={{ '--current-index': currentIndex } as React.CSSProperties}
              >
                {products.slice((activeCategoryId - 1) * 4, activeCategoryId * 4).map((prod) => (
                  <div key={prod.id} className="w-full md:w-1/2 flex-shrink-0 px-3 xl:px-4 h-full">
                    <div className="bg-white border border-gray-100 shadow-lg p-6 flex flex-col items-center text-center h-full">
                      <div className="w-full aspect-square mb-6 bg-[url(/moto/mannol/probg.png)] bg-cover bg-center flex items-center justify-center overflow-hidden relative">
                        <img 
                          src={prod.image} 
                          alt={prod.name} 
                          className="w-[85%] h-auto object-contain hover:scale-110 transition-transform duration-500 z-10"
                        />
                      </div>
                      <h3 className="sora-font text-[#1F2A44] font-bold text-[15px] md:text-lg mb-6 leading-tight min-h-[56px] flex items-center justify-center">
                        {prod.name}
                      </h3>
                      <div className="w-[80%] mt-auto">
                        <Button href={prod.link} className="w-full">
                          View Product
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center items-center gap-3 mt-8">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                    currentIndex === idx ? "bg-[#1F2A44]" : "bg-gray-200 hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
