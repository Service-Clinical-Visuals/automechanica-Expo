"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";

const newsData = [
  {
    image: "/moto/tomex/news1.png",
    overlayText: "Quality requirements for brake discs vs. legal regulations",
    title: "Quality requirements for brake discs...",
    date: "26 February 2025",
    desc: "Did you know that since November 2016, brake discs must also comply with the requirements...",
    link: "#"
  },
  {
    image: "/moto/tomex/news2.png",
    overlayText: "Guarantee of the highest quality",
    title: "Guarantee of the highest quality",
    date: "25 February 2025",
    desc: "In our specialized laboratory, combined with our research and development...",
    link: "#"
  },
  {
    image: "/moto/tomex/news3.png",
    overlayText: "Braking under control",
    title: "Braking under control",
    date: "20 February 2025",
    desc: "We are with you at every stage of the road – even at the very beginning...",
    link: "#"
  },
  {
    image: "/moto/tomex/news4.png",
    title: "Funding from the European union...",
    date: "17 February 2025",
    desc: "TOMEX Brakes Sp. z o.o. sp. k. has received funding from the European Union...",
    link: "#"
  }
];

const News = () => {
  return (
    <section className="w-full py-20 bg-primary overflow-hidden">
      <div className="custom-container flex flex-col gap-12">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-4  mx-auto" data-aos="fade-up">
          <Typography variant="h2" color="white" className="font-bold leading-tight">
            News & Updates
          </Typography>
          <Typography variant="p" color="white" className="text-gray-300 max-w-[80%] leading-relaxed text-sm md:text-base lg:text-lg">
            Stay informed with the latest news from TOMEX Brakes, including product innovations, quality advancements, industry insights, certifications, and company achievements. Discover how we continue to enhance braking technology and deliver trusted solutions for the global automotive market.
          </Typography>
        </div>

        <div className="w-full h-px bg-white/20"></div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8" data-aos="fade-up" data-aos-delay="100">
          {newsData.map((item, idx) => (
            <div key={idx} className="bg-white flex flex-col h-full overflow-hidden shadow-lg group hover:-translate-y-1 transition-transform duration-300 p-4 min-[2100px]:p-6">
              
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden mb-6 bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              {/* Content Container */}
              <div className="flex flex-col flex-grow gap-3">
                <Typography variant="h4" color="dark" className="font-bold uppercase leading-tight line-clamp-2">
                  {item.title}
                </Typography>
                
                <Typography variant="p" color="muted" className="text-xs font-semibold text-gray-500">
                  {item.date}
                </Typography>
                
                <Typography variant="p" color="muted" className="leading-relaxed line-clamp-3 text-sm mt-2 flex-grow">
                  {item.desc}
                </Typography>
                
                <div className="w-full h-px bg-gray-200 my-2"></div>
                
                <Link href={item.link} className="mt-auto inline-block group/link">
                  <Typography variant="span" color="primary" className="font-bold text-sm underline tracking-wide group-hover/link:opacity-80 transition-opacity flex items-center gap-1">
                    Read More &gt;&gt;
                  </Typography>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default News;
