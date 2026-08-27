"use client";

import React from "react";

const newsItems = [
  {
    id: 1,
    day: "11",
    month: "DEC",
    title: "Automechanika Frankfurt 2024",
    dateFull: "08 - 12 September 2026",
    image: "/moto/amc-amadeo/n1.png"
  },
  {
    id: 2,
    day: "02",
    month: "July",
    title: "Automechanika Estambul 2024",
    dateFull: "July 02, 2024",
    image: "/moto/amc-amadeo/n2.png"
  },
  {
    id: 3,
    day: "04",
    month: "Oct",
    title: "36th International Expo Rujac",
    dateFull: "04 Oct 2022",
    image: "/moto/amc-amadeo/n3.png"
  }
];

export default function LatestNews() {
  return (
    <section className="py-20 md:py-28 bg-white w-full overflow-hidden">
      <div className="custom-container">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="section-title text-[#272727] font-semibold mb-6 oswald leading-tight">
            <span className="relative inline-block pb-2">
              Latest News & Updates
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full h-1 bg-primary"></span>
            </span>
          </h2>
            <p className="section-text text-primary-3 rubik font-normal leading-relaxed mb-2">
            Discover AMC's latest innovations, company developments, and industry updates showcasing our commitment to advanced automotive manufacturing.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <div 
              key={news.id} 
              className={`bg-white rounded-xl border border-gray-100 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 overflow-hidden ${
                index === 2 ? 'md:col-span-2 xl:col-span-1 md:w-[calc(50%-1rem)] md:mx-auto xl:w-full xl:mx-0' : ''
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              {/* <div className="w-full h-64 overflow-hidden relative"> */}
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              {/* </div> */}

              {/* Content */}
              <div className="p-6 flex items-center my-5">
                {/* Date Block */}
                <div className="flex flex-col gap-3 justify-center items-center pr-6 border-r border-gray-200">
                  <span className="date-txt font-semibold oswald text-primary leading-none mb-1">
                    {news.day}
                  </span>
                  <span className="date-txt font-semibold oswald text-primary  leading-none">
                    {news.month}
                  </span>
                </div>

                {/* Text Block */}
                <div className="pl-6 flex flex-col justify-center">
                <h3 className="card-title1 text-[#272727] font-semibold oswald mb-3">
                    {news.title}
                  </h3>
                <p className="card-text text-primary-3 rubik font-normal mb-3 leading-relaxed flex-grow">
                    {news.dateFull}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
