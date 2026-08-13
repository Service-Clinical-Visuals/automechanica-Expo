"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";

const blogPosts = [
  {
    image: "/moto/iadaAutomechanika/blog1.png",
    title: "The Kemetyl Group takes a further step in its growth with the acquisition of the assets and brand of Flow...",
    date: "16 de June de 2026",
    link: "#"
  },
  {
    image: "/moto/iadaAutomechanika/blog2.png",
    title: "Last week, we attended the 15th annual CGA Group Convention, held in Malaga. The conference was...",
    date: "23 de October de 2025",
    link: "#"
  },
  {
    image: "/moto/iadaAutomechanika/blog3.png",
    title: "This year we had a different kind of sales meeting. The IADA Team was able to take advantage of the...",
    date: "30 de July de 2025",
    link: "#"
  },
  {
    image: "/moto/iadaAutomechanika/news4.png",
    title: "Another year at Motortec. It has been 4 intense days, full of reunions, meetings, training sessions… 4 days with our...",
    date: "29 de April de 2025",
    link: "#"
  },
  {
    image: "/moto/iadaAutomechanika/news5.png",
    title: "IADA’s diesel antifreeze is more than just a simple liquid; it is an ally in the care of your vehicle,...",
    date: "24 de January de 2025",
    link: "#"
  },
  {
    image: "/moto/iadaAutomechanika/news6.png",
    title: "May this holiday season bring peace, joy and special moments.We wish that this coming 2025 will be full of new...",
    date: "19 de December de 2024",
    link: "#"
  }
];

export default function Blog() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else setItemsPerView(3);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, blogPosts.length - itemsPerView);

  // Reset current index if resizing window causes maxIndex to be smaller than currentIndex
  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [maxIndex, currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <section className="w-full py-20 bg-[#202020]">
      <div className="custom-container">
        
        {/* Header Section */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-12" data-aos="fade-down">
          <div className="max-w-6xl">
            <h2 className="text-3xl md:text-4xl lg:text-[38px] !font-normal !text-[#ffffff] leading-tight amaranth mb-6">
              News, Blog & Insights
            </h2>
            <p className="!text-[#ffffff] text-sm md:text-[18px] leading-[1.8] text-justify font-normal amaranth">
              Stay updated with the latest automotive news, product innovations, industry trends, and company developments. Explore expert insights, technical updates, maintenance tips, and industry knowledge designed to support vehicle performance, efficiency, and reliability across automotive and industrial applications.
            </p>
          </div>
          <div className="flex-shrink-0 w-full lg:w-auto flex justify-start lg:justify-end">
             <Button href="#" className="whitespace-nowrap">View All News</Button>
          </div>
        </div>

        {/* Blog Cards Slider */}
        <div className="overflow-hidden relative mx-[-12px] px-[12px]" data-aos="fade-up">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {blogPosts.map((post, index) => (
              <div 
                key={index} 
                className="w-full md:w-1/3 flex-shrink-0 px-3 transition-all"
              >
                <div className="bg-white rounded-2xl overflow-hidden flex flex-col p-4 md:p-5 shadow-lg h-full">
                  {/* Image */}
                  <div className="w-full aspect-[4/3] md:aspect-[3/2] relative  rounded-xl overflow-hidden  flex items-center justify-center bg-white">
                    <img 
                      src={post.image} 
                      alt="Blog Post"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col flex-grow px-1">
                 
                    <p className="text-[#353a3d] text-sm md:text-[18px] leading-[1.5] text-justify font-normal amaranth mb-3">
                      {post.title}
                    </p>
                    <span className="text-[#353a3d]/55 text-xs md:text-[15px] leading-[1.8] text-justify font-normal amaranth mb-2">
                      {post.date}
                    </span>
                    
                    <hr className="border-gray-200 mb-4" />
                    
                   
                    <Link href="#" className="inline-flex items-center gap-2 text-[#C00027] font-semibold text-sm md:text-[18px] underline underline-offset-4 decoration-2 amaranth">
                  Read More &gt;&gt;
                 
                </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {[0, 1].map((idx) => {
            // Determine which half of the slides we are currently on to highlight the correct pill
            const isActive = maxIndex > 0 
              ? (idx === 0 ? currentIndex < (maxIndex + 1) / 2 : currentIndex >= (maxIndex + 1) / 2)
              : idx === 0;
              
            return (
              <div 
                key={idx}
                onClick={() => setCurrentIndex(idx === 0 ? 0 : maxIndex)}
                className={`w-10 h-1.5 rounded-full cursor-pointer transition-colors duration-300 ${
                  isActive ? "bg-[#C00027]" : "bg-gray-300 hover:bg-gray-400"
                }`}
              ></div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
