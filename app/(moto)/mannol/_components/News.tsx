"use client";
import React from "react";
import Link from "next/link";

export default function News() {
  const newsItems = [
    {
      id: 1,
      image: "/moto/mannol/nw1.png",
      title: "The future of the aftermarket starts here",
      excerpt: "From 8 to 12 September 2026, Automechanika Frankfurt will bring the international automotive industry together in one place. Discover innovations, trends and.........",
      link: "#"
    },
    {
      id: 2,
      image: "/moto/mannol/nw2.png",
      title: "GT Open 2026: MANNOL Heads to the Hungaroring",
      excerpt: "MANNOL is proud to be part of the GT Open at the iconic Hungaroring, Hungary, taking place from 03-05 July. The event brings together top racing teams and drivers for an.........",
      link: "#"
    },
    {
      id: 3,
      image: "/moto/mannol/nw3.png",
      title: "GT Open 2026: MANNOL Races at Paul Ricard",
      excerpt: "MANNOL continues its motorsport journey at the GT Open as the championship heads to Circuit Paul Ricard, France, from 17-19 July. Renowned for its high.........",
      link: "#"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white w-full border-t border-gray-100">
      <div className="custom-container flex flex-col items-center">
        
        {/* Title with decorative lines */}
          <div className="flex items-center justify-center gap-4 mb-6" data-aos="fade-up">
          <div className="w-16 md:w-30 h-[2px] bg-[#FCC917]"></div>
          <h2 className="sora-font text-[#1F2A44] section-title font-semibold whitespace-nowrap">News</h2>
          <div className="w-16 md:w-30 h-[2px] bg-[#FCC917]"></div>
        </div>

        {/* Description Text */}
        <p className="poppins-font text-[#000000] section-text font-normal max-w-7xl mx-auto mb-12 leading-relaxed text-center" data-aos="fade-up" data-aos-delay="100">
          Stay up to date with the latest MANNOL news, product launches, motorsport events, and innovations shaping the future of automotive performance.
        </p>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 w-full pb-8">
          {newsItems.map((news, index) => (
            <div 
              key={news.id} 
              className={`flex flex-col items-center h-full ${
                index === 2 ? "md:col-span-2 lg:col-span-1 md:w-[calc(50%-1rem)] lg:w-full md:mx-auto" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <div className="w-full aspect-[4/3] overflow-hidden ">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover hover:scale-[1.03] transition-all duration-500 ease-in-out"
                  
                />
              </div>

              {/* Overlapping Content Box */}
              <div className="w-[90%] bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.08)] p-6 md:p-8 relative -mt-10 border-b-[3px] border-[#1F2A44] z-10 flex flex-col flex-grow rounded-md">
                <h3 className="sora-font text-[#1F2A44] font-semibold card-text mb-4 leading-tight text-center">
                  {news.title}
                </h3>
                <p className="poppins-font text-[#1F2A44] section-text leading-relaxed text-center">
                  {news.excerpt}
                  <Link href={news.link} className="font-bold text-[#1F2A44] underline ml-1 hover:text-[#FFC107] transition-colors whitespace-nowrap">
                    Read More
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
