"use client";
import React from "react";
import Link from "next/link";

export default function News() {
  const newsItems = [
    {
      image: "/moto/saria-international/nw1.png",
      date: "September 09, 2022",
      title: "Join us at Automechanika Dubai 2023 — Hall 7, Booth C12."
    },
    {
      image: "/moto/saria-international/nw2.png",
      date: "September 30, 2023",
      title: "Visit us at the AAPEX Show, Venetian Expo Center, Las Vegas."
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="custom-container">
        
        {/* Title */}
        <h2 className="oswald-font font-semibold text-[#272727] section-title mb-6 text-center" data-aos="fade-up">
          News & Updates
        </h2>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10" data-aos="fade-up" data-aos-delay="100">
          {newsItems.map((item, idx) => (
            <Link href="#" key={idx} className="block group">
              <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 "
                  />
                
                {/* Content */}
                <div className="flex flex-col flex-grow px-1 mt-6">
                  <span className="lato-font text-[#4B5563] section-text font-normal mb-3">
                   
                    {item.date}
                  </span>
                  <h3 className="oswald-font font-semibold text-[#4B5563] card-text3 leading-snug">
                    {item.title}
                  </h3>
                </div>
                
              </div> 
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
