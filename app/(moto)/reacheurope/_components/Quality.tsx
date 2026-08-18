"use client";

import React from "react";

const newsItems = [
  {
    image: "/moto/reacheurope/news1.png",
    title: "Automechanika Shanghai",
    link: "#"
  },
  {
    image: "/moto/reacheurope/news2.png",
    title: "Automechanika Dubai",
    link: "#"
  },
  {
    image: "/moto/reacheurope/news3.png",
    title: "Stay Tuned for more",
    link: "#"
  }
];

export default function Quality() {
  return (
    <section className="py-20 xl:py-20 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="custom-container relative z-10">

        {/* Header Text */}
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto mb-10" data-aos="fade-up">
          <h2 className="section-title text-[#000000] rajdhani-font font-bold mb-4">Latest News & Insights</h2>
          <p className="section-text text-[#333333] lato-font leading-relaxed tracking-normal">
            Stay informed with the latest updates from REACH, where innovation meets automotive excellence. Discover new product launches, industry trends, company milestones, and advancements in thermal management technology. From global events and trade exhibitions to engineering breakthroughs and technical insights, explore how REACH continues to deliver reliable cooling solutions that drive performance, efficiency, and customer success across the worldwide automotive aftermarket.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6" data-aos="fade-up" data-aos-delay="100">
          {newsItems.map((item, index) => (
            <div key={index} className="group relative w-auto aspect-square flex items-center justify-center overflow-hidden cursor-pointer">
              <img
                src={item.image}
                alt={item.title}
                className="w-auto h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<span class="text-gray-400 font-medium">News Image</span>' }}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 xl:p-8">
                <h3 className="text-white font-semibold text-lg md:text-xl mb-1 dmsans-font">{item.title}</h3>
                <a href={item.link} className="text-white text-sm xl:text-[15px] flex items-center gap-1.5 hover:text-gray-200 group/link">
                  <span className="underline underline-offset-4 decoration-[1px] decoration-gray-400 group-hover/link:decoration-gray-200">Read More</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
