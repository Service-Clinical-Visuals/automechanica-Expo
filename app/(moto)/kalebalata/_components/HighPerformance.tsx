"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function HighPerformance() {
  const [activeIdx, setActiveIdx] = useState(1);

  const categories = [
    {
      id: 1,
      image: "/moto/kalebalata/b1.png",
      title: "Passenger Car",
      desc: "Disc brake pads developed for low noise, balanced braking..."
    },
    {
      id: 2,
      image: "/moto/kalebalata/b2.png",
      title: "Light Commercial Vehicle",
      desc: "Brake pads suitable for heavy stop-and-go use in panel vans and minibuses. Sustainable performance with long life, low dust, and balanced brake feel."
    },
    {
      id: 3,
      image: "/moto/kalebalata/b3.jpg",
      title: "Heavy Duty Vehicle",
      desc: "Heavy-duty brake pads developed for high tonnage and long-haul..."
    },
    {
      id: 4,
      image: "/moto/kalebalata/b4.png",
      title: "Rail Systems",
      desc: "Safety and comfort-oriented braking solutions for metro..."
    },
    {
      id: 5,
      image: "/moto/kalebalata/b5.png",
      title: "Defense Industry",
      desc: "Special formulations for high reliability in harsh field conditions..."
    },
    {
      id: 6,
      image: "/moto/kalebalata/b6.png",
      title: "Motorcycle",
      desc: "Motorcycle disc pads providing fast warm-up and strong initial grip..."
    }
  ];

  const itemsPerPage = 3;
  const currentPage = Math.floor(activeIdx / itemsPerPage);

  return (
    <section className="relative w-full py-16 xl:py-24 bg-[#1b1b1b]">
      <div className="custom-container flex flex-col items-center relative z-10 px-4 sm:px-6 lg:px-8">
        
        {/* Background Watermark Text */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 kalebalatatext font-normal whitespace-nowrap anton-font pointer-events-none select-none leading-none flex items-center justify-center w-full"
          style={{
            WebkitTextStroke: '2px rgba(255, 255, 255, 0.05)',
            color: 'transparent',
            zIndex: -1
          }}
          data-aos="fade-in"
        >
          Kale Balata
        </div>

        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto gap-4 mt-8 sm:mt-10 md:mt-12 lg:mt-18 relative z-10" data-aos="fade-up">
           <h2 className="section-title font-normal text-white tracking-wide anton-font">
             High-Performance Braking Solutions For Every Vehicle
           </h2>
           <p className="section-text text-white font-normal leading-relaxed oswald-font mt-2">
             Kale Balata Otomotiv San. ve Tic. A.Ş. delivers high-performance braking solutions for a wide range of vehicles and industries. From passenger cars and commercial vehicles to heavy-duty transport, rail systems, and defense applications, our products are engineered to provide exceptional safety, durability, and reliable braking performance.
           </p>
        </div>

        {/* Desktop Accordion (xl and up) */}
        <div className="hidden xl:flex h-[500px] xl:h-[600px] mt-10 md:mt-16 mb-12 w-full overflow-hidden gap-6 lg:gap-8 " data-aos="fade-up">
          {categories.map((cat, idx) => {
            const isCurrentPage = Math.floor(idx / itemsPerPage) === currentPage;
            const isActive = activeIdx === idx;
            
            if (!isCurrentPage) return null;

            return (
              <div 
                key={cat.id} 
                onClick={() => setActiveIdx(idx)}
                className="relative rounded-2xl overflow-hidden cursor-pointer group flex-shrink-0"
                style={{
                  flex: isActive ? 2.5 : 1,
                  transition: "flex 600ms cubic-bezier(0.4, 0, 0.2, 1)"
                }}
              >
                <div className="absolute inset-0 transition-transform duration-700 ease-in-out group-hover:scale-105">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                
                {/* Text Overlay - visible only on active */}
                <div 
                  className={`absolute inset-0 bg-[#000000]/24 flex flex-col justify-end p-6 md:p-8 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                >
                  <div className="flex items-end justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-white text-xl md:text-3xl font-normal anton-font tracking-wide leading-tight">{cat.title}</h3>
                      <p className="oswald-font text-white/80 text-sm md:text-base leading-relaxed max-w-md">{cat.desc}</p>
                    </div>
                    {/* Arrow Button */}
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0 hover:bg-[#F8AC1A] transition-colors">
                      <ArrowUpRight className="text-white hover:text-black transition-colors" size={24} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Single Card (below xl) */}
        <div className="xl:hidden relative h-[450px] w-full rounded-2xl overflow-hidden mt-10 md:mt-16 mb-12 max-w-lg mx-auto shadow-xl" data-aos="fade-up">
          {categories.map((cat, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div 
                key={cat.id} 
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}
              >
                <div className="absolute inset-0 transition-transform duration-700 ease-in-out hover:scale-105">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="absolute inset-0 bg-[#000000]/24 flex flex-col justify-end p-6">
                  <div className="flex items-end justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-white text-2xl font-normal anton-font tracking-wide leading-tight">{cat.title}</h3>
                      <p className="oswald-font text-white/80 text-sm leading-relaxed">{cat.desc}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 hover:bg-[#F8AC1A] transition-colors">
                      <ArrowUpRight className="text-white hover:text-black transition-colors" size={20} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8" data-aos="fade-up">
          {categories.map((_, idx) => (
            <div 
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`${
                activeIdx === idx 
                  ? "w-10 h-1.5 md:h-2 bg-[#F8AC1A]" 
                  : "w-2 h-2 md:w-2.5 md:h-2.5 bg-white/30 hover:bg-white/50"
              } rounded-full cursor-pointer transition-all duration-300`}
            ></div>
          ))}
        </div>

      </div>
    </section>
  );
}
