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
    <section className="py-20 xl:py-20 bg-white relative">
      <div className="custom-container relative">

        {/* Red Brackets */}
        <div className="absolute top-0 left-0 w-24 h-24 md:w-40 md:h-40 border-t-[16px] border-l-[16px] border-[#ED1C24] hidden sm:block"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 md:w-40 md:h-40 border-b-[16px] border-r-[16px] border-[#ED1C24] hidden sm:block"></div>

        {/* Heading */}
        <div className="flex flex-col items-center justify-center text-center mb-12 relative z-10" data-aos="fade-up">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="w-6 h-6 text-[#ED1C24]" />
            <h2 className="section-title text-[#1D1D1B] orbitron-font font-semibold">News</h2>
          </div>
          <p className="section-text text-[#000000] font-DM Sans">
            Stay updated with the latest news, product launches, company milestones, and industry developments from SM Motorenteile GmbH.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10" data-aos="fade-up" data-aos-delay="100">
          {newsItems.map((news, index) => (
            <div key={index} className="flex bg-white border border-gray-200 shadow-sm h-full">
              {/* Image half */}
              <div className="w-1/2 flex-shrink-0">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content half */}
              <div className="w-1/2 p-4 md:p-6 flex flex-col justify-between relative">
                {/* Decorative Red Line */}
                <div className="absolute right-0 top-6 h-16 w-1 bg-[#ED1C24]"></div>

                <h3 className="btn-text font-bold text-[#1D1D1B] leading-snug dmsans-font pr-4 uppercase">
                  {news.title}
                </h3>

                <div className="mt-4 text-right">
                  <Link href={news.link} className="btn-text text-[#ED1C24] font-semibold hover:underline uppercase">
                    Read
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
