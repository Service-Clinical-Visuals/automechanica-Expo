"use client";

import React from "react";
import { Settings } from "lucide-react";
import Link from "next/link";

const newsItems = [
  {
    title: "TRADITION MEETS THE FUTURE: RANK 14 OUT OF 25,000 COMPANIES",
    image: "/moto/sm-motorenteile-gmbh/News1.png",
    link: "#"
  },
  {
    title: "SM Motorenteile has combined with something often lacking in global supply chains",
    image: "/moto/sm-motorenteile-gmbh/News2.png",
    link: "#"
  },
  {
    title: "Excellent brand, excellent team – SM Motorenteile wins 2 German Brand Awards 2025",
    image: "/moto/sm-motorenteile-gmbh/News3.png",
    link: "#"
  }
];

export default function Quality() {
  return (
    <section className="py-20 xl:py-20 mb-10 bg-white relative overflow-hidden">
      {/* Red Brackets */}
      <div className="absolute top-20 left-4 md:left-10 xl:left-[4%] w-[20%] h-[73%] border-t-[20px] md:border-t-[30px] border-l-[20px] md:border-l-[30px] border-[#ED1C24] hidden xl:block"></div>
      <div className="absolute bottom-10 right-4 md:right-10 xl:right-[4%] w-[20%] h-[73%] border-b-[20px] md:border-b-[30px] border-r-[20px] md:border-r-[30px] border-[#ED1C24] hidden xl:block"></div>

      <div className="custom-container relative z-10">
        <div className="max-w-[1550px] mx-auto">
          {/* Heading */}
          <div className="flex flex-col items-center justify-center text-center mb-10 relative z-10" data-aos="fade-up">
            <div className="flex items-center gap-3 mb-4">
              <img src="/moto/sm-motorenteile-gmbh/setting.png" alt="Setting" className="w-auto h-auto object-contain" />
              <h2 className="section-title text-[#1D1D1B] orbitron-font font-bold">News</h2>
            </div>
            <p className="text-[#333333] text-[14px] md:text-[15px] xl:text-[16px] dmsans-font max-w-5xl">
              Stay updated with the latest news, product launches, company milestones, and industry developments from SM Motorenteile GmbH.
            </p>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8 relative z-10" data-aos="fade-up" data-aos-delay="100">
            {newsItems.map((news, index) => (
              <div key={index} className="flex bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] h-full">
                {/* Image half */}
                <div className="w-1/2 flex-shrink-0 bg-white">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content half */}
                <div className="w-1/2 p-4 xl:p-6 flex flex-col relative">
                  {/* Decorative Red Line - top aligned */}
                  <div className="absolute right-4 top-4 xl:top-6 h-20 xl:h-24 w-1 xl:w-[4px] bg-[#ED1C24]"></div>

                  {/* Centered Title */}
                  <div className="flex-grow flex flex-col justify-center pr-4">
                    <h3 className="text-[15px] xl:text-[17px] font-extrabold text-[#1D1D1B] leading-[1.3] dmsans-font">
                      {news.title}
                    </h3>
                  </div>

                  {/* Read Link */}
                  <div className="mt-4 text-right">
                    <Link href={news.link} className="text-[#ED1C24] text-[13px] xl:text-[14px] font-medium underline underline-offset-[4px] decoration-[1.5px] hover:text-red-700 transition-colors">
                      Read
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
