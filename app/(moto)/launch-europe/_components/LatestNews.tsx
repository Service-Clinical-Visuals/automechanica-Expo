"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LatestNews() {
  const newsList = [
    {
      date: "February 16, 2024",
      title: "Motorcycle Diagnostics: The Next Gear",
      text: "For all motorbike enthusiasts and workshops who want to take their diagnostic skills to the next level, we .....",
      image: "/moto/launch-europe/b11.png",
    },
    {
      date: "February 16, 2024",
      title: "Mercedes SGW: Secure Gateway Access",
      text: "We are pleased to announce that we can now offer SGW (Security Gateway) activation for Mercedes vehicles......",
      image: "/moto/launch-europe/b22.png",
    },
    {
      date: "February 16, 2024",
      title: "X-431 EURO DIAGNOSIS REVOLUTION",
      text: "Discover the future of vehicle diagnostics with LAUNCH Europe - flexibility meets high-end technology.....",
      image: "/moto/launch-europe/b33.png",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white" id="news">
      <div className="custom-container">
        
        {/* Header Content */}
        <div className="max-w-6xl mx-auto text-center mb-16" data-aos="fade-up">
          <h2 className="section-title font-heading text-[#111111] mb-6">
            Our Latest News & Insights
          </h2>
          <p className="section-text font-lato text-[#111111] font-normal leading-relaxed">
            Stay informed with the latest news from LAUNCH Europe, including product launches, software updates, industry insights, training events, and innovations shaping the future of automotive diagnostics and workshop technology.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-8 items-stretch">
          {newsList.map((news, index) => (
            <div 
              key={index}
              className="flex flex-col sm:flex-row bg-white border border-gray-200 shadow-sm overflow-hidden h-full hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-full sm:w-1/2 relative min-h-[220px] sm:min-h-[250px]">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
              </div>
              <div className="w-full sm:w-1/2 p-5 xl:p-6 flex flex-col flex-grow">
                <span className="text-[#111111] link mb-3 font-lato">{news.date}</span>
                <h4 className="font-heading font-normal text-[#111111] section-title1 leading-snug mb-3">
                  {news.title}
                </h4>
                <p className="text-[#111111] section-text font-lato font-normal leading-relaxed mb-6 flex-grow">
                  {news.text}
                </p>
                <div className="flex justify-end w-full mt-auto">
                  <Link 
                    href="#" 
                    className="text-[#e30613] link font-normal font-heading flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Read More <ArrowRight size={15} />
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
