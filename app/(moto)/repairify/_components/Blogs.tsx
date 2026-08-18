"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper as SwiperType } from "swiper";

export default function Blogs() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const blogs = [
    {
      date: "03 Jul, 2026",
      title: "Repairify and Opus IVS Complete Combination to Form Unified Leader in Automotive Diagnostics",
      excerpt: "Repairify and Opus IVS today announced the completion of their previously disclosed transaction combining their automotive diagnostics businesses,.....",
      image: "/moto/repairify/l1.png", 
    },
    {
      date: "17 Feb, 2026",
      title: "AsTech Digital ADAS Pro+ v2 launch reinforces Repairify's end-to-end ADAS strategy",
      excerpt: "",
      image: "/moto/repairify/l2.png", 
    },
    {
      date: "05 Feb, 2026",
      title: "Everything you need to know about SERMI",
      excerpt: "",
      image: "/moto/repairify/l3.png", 
    },
     {
      date: "19 Jan, 2026",
      title: "Repairify and Opus IVS Announce Intent to Combine Diagnostics Businesses to Advance the Future of Automotive Diagnostics and Drive Greater Value for the Industry",
      excerpt: "",
      image: "/moto/repairify/l1.png", 
    },
     {
      date: "09 Jun, 2022",
      title: "Repairify announces industry initiative to deliver best value in diagnostics and ADAS services",
      excerpt: "",
      image: "/moto/repairify/l5.png", 
    },
     {
      date: "09 Jun, 2022",
      title: "AsTech® launches industry’s first ‘pay as you calibrate’ equipment",
      excerpt: "",
      image: "/moto/repairify/l6.png", 
    }
  ];

  const chunkedBlogs = [];
  for (let i = 0; i < blogs.length; i += 3) {
    chunkedBlogs.push(blogs.slice(i, i + 3));
  }

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden relative" id="news">
      <div className="custom-container relative">
        
        {/* Section Header */}
        <div className="text-center max-w-6xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="adlam-font section-title text-black mb-6">
            Our Latest News & Insights
          </h2>
          <p className="inter-font section-text text-[#444444] leading-relaxed">
            Stay informed with the latest news, product launches, industry insights, and technology updates from Repairify. Discover how we're advancing automotive diagnostics, ADAS calibration, and connected repair solutions to help workshops stay ahead in a rapidly evolving industry.
          </p>
        </div>

        {/* Blogs Slider */}
        <div className="px-45 relative" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              prevEl: '.blog-swiper-prev',
              nextEl: '.blog-swiper-next',
            }}
            className="w-full !pb-30"
          >
            {chunkedBlogs.map((group, idx) => (
              <SwiperSlide key={idx}>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10 h-auto xl:h-[450px]">
                  
                  {/* Left Large Card */}
                  {group[0] && (
                    <div className="bg-white border border-[#e0e0e0] shadow-[0_2px_15px_rgba(0,0,0,0.06)] flex flex-col md:flex-row h-full group cursor-pointer hover:shadow-lg transition-all duration-300 min-h-0 overflow-hidden ">
                      <div className="w-full md:w-1/2 relative min-h-[250px] md:min-h-0 h-full">
                         <img 
                            src={group[0].image} 
                            alt={group[0].title}
                            className="absolute inset-0 object-fit w-full h-full " 
                         />
                      </div>
                      <div className="w-full md:w-1/2 p-6 xl:p-6 flex flex-col justify-center relative">
                         <div>
                           <div className="absolute top-6 right-6 xl:top-8 xl:right-8 text-right text-[#111111] section-text font-normal inter-font">{group[0].date}</div>
                           <h3 className="adlam-font card-text font-normal mb-2 mt-2 text-[#000000] leading-snug ">
                             {group[0].title}
                           </h3>
                           <p className="inter-font section-text text-[#111111] leading-relaxed">
                             {group[0].excerpt}
                           </p>
                         </div>
                         <div className="flex justify-end mt-4">
                            <div className="w-8 h-8 rounded-full border border-[var(--primary-color)] flex items-center justify-center text-[var(--primary-color)] group-hover:bg-[var(--primary-color)] group-hover:text-white transition-colors">
                              <ArrowRight size={16} strokeWidth={2} />
                            </div>
                         </div>
                      </div>
                    </div>
                  )}

                  {/* Right Stacked Cards */}
                  <div className="grid grid-rows-2 gap-6 h-full">
                    {/* Card 2 */}
                    {group[1] && (
                      <div className="bg-white border border-[#e0e0e0] shadow-[0_2px_15px_rgba(0,0,0,0.06)]  flex flex-col sm:flex-row h-full group cursor-pointer hover:shadow-lg transition-all duration-300 min-h-0 overflow-hidden">
                         <div className="w-full sm:w-[40%] relative min-h-[200px] sm:min-h-0 h-full">
                           <img 
                              src={group[1].image} 
                              alt={group[1].title}
                              className="absolute inset-0 object-cover w-full h-full " 
                           />
                         </div>
                         <div className="w-full sm:w-[60%] p-4 xl:p-6 flex flex-col justify-center relative">
                            <div>
                              <div className="absolute top-4 right-4 xl:top-5 xl:right-5 text-right text-[#111111] section-text font-normal inter-font">{group[1].date}</div>
                               <h3 className="adlam-font card-text font-normal mb-2 mt-4 text-[#111111] leading-snug">
                                {group[1].title}
                              </h3>
                              <p className="inter-font text-[14px] text-[#555555] leading-relaxed">
                                {group[1].excerpt}
                              </p>
                            </div>
                            <div className="flex justify-end mt-2">
                               <div className="w-8 h-8 rounded-full border border-[var(--primary-color)] flex items-center justify-center text-[var(--primary-color)] group-hover:bg-[var(--primary-color)] group-hover:text-white transition-colors shrink-0">
                                 <ArrowRight size={16} strokeWidth={2} />
                               </div>
                            </div>
                         </div>
                      </div>
                    )}
                    
                    {/* Card 3 */}
                    {group[2] && (
                      <div className="bg-white border border-[#e0e0e0] shadow-[0_2px_15px_rgba(0,0,0,0.06)] flex flex-col sm:flex-row h-full group cursor-pointer hover:shadow-lg transition-all duration-300 min-h-0 overflow-hidden">
                         <div className="w-full sm:w-[40%] relative min-h-[200px] sm:min-h-0 h-full">
                           <img 
                              src={group[2].image} 
                              alt={group[2].title}
                              className="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                           />
                         </div>
                         <div className="w-full sm:w-[60%] p-4 xl:p-6 flex flex-col justify-center relative">
                            <div>
                              <div className="absolute top-4 right-4 xl:top-5 xl:right-5 text-right text-[#111111] section-text font-normal inter-font">{group[2].date}</div>
                               <h3 className="adlam-font card-text font-normal mb-2 text-[#111111] mt-2 leading-snug mt-6">
                                {group[2].title}
                              </h3>
                              <p className="inter-font section-text text-[#555555] leading-relaxed">
                                {group[2].excerpt}
                              </p>
                            </div>
                            <div className="flex justify-end mt-2">
                               <div className="w-8 h-8 rounded-full border border-[var(--primary-color)] flex items-center justify-center text-[var(--primary-color)] group-hover:bg-[var(--primary-color)] group-hover:text-white transition-colors shrink-0">
                                 <ArrowRight size={16} strokeWidth={2} />
                               </div>
                            </div>
                         </div>
                      </div>
                    )}
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Arrows (Bottom Center) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20 n">
            <button 
              className="blog-swiper-prev w-8 h-8 rounded-full bg-[var(--primary-color)] text-white flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors"
            >
              <ChevronLeft size={20} strokeWidth={3} />
            </button>
            <button 
              className="blog-swiper-next w-8 h-8 rounded-full bg-[var(--primary-color)] text-white flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors"
            >
              <ChevronRight size={20} strokeWidth={3} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
