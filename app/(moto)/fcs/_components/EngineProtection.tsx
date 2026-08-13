"use client";

import React from "react";
import { Calendar } from "lucide-react";

export default function EngineProtection() {
  const newsItems = [
    {
      date: "Mar 6, 2026",
      title: "February 2026: FCS Automotive Adds 32 New Suspension Part Numbers",
      text: "FCS Auto is a fully vertically integrated manufacturer, giving us complete control over production, quality, and efficiency.",
      img: "/moto/fcs/n1.png"
    },
    {
      date: "Feb 17, 2025",
      title: "January-February 2025: FCS Introduces 181 New Numbers",
      text: "FCS Automotive introduces 181 new part numbers, expanding market coverage and delivering more ride control solutions.",
      img: "/moto/fcs/n2.png"
    },
    {
      date: "Oct 30, 2024",
      title: "Visit Us at the 2025 HDAW Show - Booth 533",
      text: "FCS will exhibit at AAPEX Show, Las Vegas. Visit Booth A323B to explore our latest products and solutions.",
      img: "/moto/fcs/n3.png"
    }
  ];

  return (
    <section className="py-16 xl:py-20 bg-white relative overflow-hidden">
      <div className="custom-container relative z-10">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12" data-aos="fade-up">
          <h2 className="section-title text-[#272727] oswald-font font-semibold mb-4">
            Latest News & Updates
          </h2>
          <p className="rubik-font text-[#4B5563] font-regular section-text max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest news, product innovations, industry developments, and company updates from FCS as we continue to deliver reliable, OE-quality automotive solutions.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((news, idx) => (
            <div key={idx} className="border border-[#E4E4E4] rounded-xl overflow-hidden flex flex-col shadow-sm p-1" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="w-full h-full rounded-xl">
                <img src={news.img} alt={news.title} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400">Image</div>' }} />
              </div>
              <div className="p-2 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <img src="/moto/fcs/date.png" alt="Calendar" className="w-auto h-auto object-contain" />
                  <span className="text-[#F7941D] card-text font-regular">{news.date}</span>
                </div>
                <h4 className="card-title text-[#272727] font-semibold oswald-font mb-2">
                  {news.title}
                </h4>
                <p className="text-[#4B5563] rubik-font text-[15px] leading-relaxed mb-4 flex-grow">
                  {news.text}
                </p>
                <div className="mt-auto text-right">
                  <a href="#" className="text-[#163683] underline font-semibold text-sm hover:underline">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
