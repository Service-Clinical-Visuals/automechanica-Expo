"use client";

import React from "react";
import Button from "./Button";

export default function LatestNews() {
  const newsItems = [
    {
      title: "PAKELO WORLD",
      image: "/moto/pakelo/blog1.png",
      overlay: "bg-primary"
    },
    {
      title: "PEOPLE",
      image: "/moto/pakelo/blog2.png",
      overlay: "bg-primary"
    },
    {
      title: "OIL TECH ACADEMY",
      image: "/moto/pakelo/blog3.png",
      overlay: "bg-[#222222]"
    },
    {
      title: "RACING",
      image: "/moto/pakelo/blog4.png",
      overlay: "bg-primary"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="custom-container">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12" data-aos="fade-down">
          {/* Tag */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-primary transform rotate-45"></div>
              <span className="text-primary dm-sans font-semibold header-btn  uppercase">
              Latest News
            </span>
          </div>

          <h2 className="section-title text-[#242424] mb-6 leading-tight oswald font-semibold uppercase">
            Stay Updated With Us
          </h2>

          <p className="section-text text-[#484848] dm-sans font-normal  leading-[1.8]">
            Explore the latest stories, expert insights, product launches, and company milestones. Keep up with the developments that shape our business and the industries we serve.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {newsItems.map((item, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="relative overflow-hidden group aspect-[3/4] md:aspect-square xl:aspect-[3/4] flex flex-col justify-end rounded-sm"
            >
              {/* Background image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              
              
              {/* Content */}
              <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end h-full">
                <h3 className="text-white oswald section-text-2 font-medium mb-3 md:mb-5">
                  {item.title}
                </h3>
                <div className="mt-2 flex justify-start">
                  <Button href="#" variant="white" className=" px-6">
                    Explore Services
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
