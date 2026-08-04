"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function Blogs() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const blogs = [
    {
      date: "27 Jun, 2026",
      title: "Testing Process Behind ASIMCO Brake Pads",
      excerpt: "When a driver hits the pedal then the brake pad has to respond regardless of speed, temperature or road condition. That is why brake pads go through multiple stages of testing before they reach the market. ASIMCO is one of the most recognized automotive component manufacturers with a.....",
      image: "/moto/asimco/b1.png",
    },
    {
      date: "19 Jun, 2026",
      title: "How to Reduce Comebacks with Quality Brake Components",
      excerpt: "Brakes are one of the most essential parts of a vehicle and a reliable braking...",
      image: "/moto/asimco/b2.png",
    },
    {
      date: "26 May, 2026",
      title: "High-Temperature Resistance in Brake System Performance",
      excerpt: "Your braking system usually operates in high temperatures because of.....",
      image: "/moto/asimco/b3.png",
    },
    {
      date: "18 May, 2026",
      title: "The Hidden Costs Of Counterfeit Spare Parts In The Automotive Industry",
      excerpt: "Counterfeit spare parts are becoming a growing threat across the automotive industry. For an aftermarket auto parts distributor and automotive components wholesale business, fake parts are no longer just a market challenge; they are a major safety, financial, and operational risk......",
      image: "/moto/asimco/b4.png",
    },
    {
      date: "22 Apr, 2026",
      title: "How Counterfeit Auto Parts Threaten Vehicle Safety",
      excerpt: "The counterfeit auto parts trade drains billions from the automotive sector annually......",
      image: "/moto/asimco/b5.png",
    },
    {
      date: "24 Mar, 2026",
      title: "How to Differentiate Between Original and Fake Auto Spare Parts",
      excerpt: "When it comes to replacing auto parts, it is very crucial to select the right auto.......",
      image: "/moto/asimco/b6.png",
    }
  ];

  const chunkedBlogs = [];
  for (let i = 0; i < blogs.length; i += 3) {
    chunkedBlogs.push(blogs.slice(i, i + 3));
  }

  return (
    <section className="py-20 lg:py-32 bg-white text-black overflow-hidden relative">
      <div className="custom-container relative">
        
        {/* Section Header */}
        <div className="text-center max-w-7xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="section-title teko-font font-medium mb-6 text-black">
            Our Blogs
          </h2>
          <p className="section-text text-[#111111] inter-font leading-relaxed">
            Stay connected with the latest updates from ASIMCO, where innovation meets industry expertise. Explore articles covering automotive braking technology, product launches, manufacturing advancements, safety insights, and emerging market trends. Whether you're a distributor, technician, or automotive professional, our blog provides valuable knowledge to help you stay informed and ahead of the industry.
          </p>
        </div>

        {/* Custom Navigation Arrows */}
        <button 
          ref={prevRef} 
          className="hidden xl:flex absolute left-4 2xl:left-[-20px] top-[60%] -translate-y-1/2 w-14 h-14 rounded-full bg-[#cb1020] text-white items-center justify-center shadow-lg z-20 hover:bg-[#a00c19] transition-colors"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          ref={nextRef} 
          className="hidden xl:flex absolute right-4 2xl:right-[-20px] top-[60%] -translate-y-1/2 w-14 h-14 rounded-full bg-[#cb1020] text-white items-center justify-center shadow-lg z-20 hover:bg-[#a00c19] transition-colors"
        >
          <ChevronRight size={32} />
        </button>

        {/* Blogs Slider */}
        <div className="px-4 xl:px-20" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="w-full"
          >
            {chunkedBlogs.map((group, idx) => (
              <SwiperSlide key={idx} className="pb-8">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10 h-auto xl:h-[550px]">
                  
                  {/* Left Large Card */}
                  {group[0] && (
                    <div className="bg-white border border-[#e0e0e0] flex flex-col md:flex-row h-full group cursor-pointer hover:shadow-lg transition-all duration-300 min-h-0 overflow-hidden">
                      <div className="w-full md:w-1/2 relative min-h-[250px] md:min-h-0">
                         <img 
                            src={group[0].image} 
                            alt={group[0].title}
                            className="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                         />
                      </div>
                      <div className="w-full md:w-1/2 p-6 xl:p-8 flex flex-col justify-between">
                         <div>
                           <div className="text-right text-[#111111] text-sm mb-4 inter-inter">{group[0].date}</div>
                           <h3 className="teko-font product-title font-medium mb-4 text-black leading-tight group-hover:text-[#cb1020] transition-colors">
                             {group[0].title}
                           </h3>
                           <p className="section-text text-[#111111] inter-font leading-[2] ">
                             {group[0].excerpt}
                           </p>
                         </div>
                         <div className="flex justify-end mt-6">
                            <div className="w-8 h-8 rounded-full border border-[#cb1020] flex items-center justify-center text-[#cb1020] group-hover:bg-[#cb1020] group-hover:text-white transition-colors">
                              <ArrowRight size={16} strokeWidth={1.5} />
                            </div>
                         </div>
                      </div>
                    </div>
                  )}

                  {/* Right Stacked Cards */}
                  <div className="grid grid-rows-2 gap-6 h-full">
                    {/* Card 2 */}
                    {group[1] && (
                      <div className="bg-white  border border-[#e0e0e0] shadow-[0_2px_15px_rgba(0,0,0,0.06)]  rounded-sm flex flex-col sm:flex-row h-full group cursor-pointer hover:shadow-xl transition-all duration-300 min-h-0 overflow-hidden">
                         <div className="w-full sm:w-[40%] relative min-h-[200px] sm:min-h-0">
                           <img 
                              src={group[1].image} 
                              alt={group[1].title}
                              className="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                           />
                         </div>
                         <div className="w-full sm:w-[60%] p-4 xl:p-5 flex flex-col justify-between">
                            <div>
                              <div className="text-right text-[#111111] text-sm  mb-2 font-inter">{group[1].date}</div>
                               <h3 className="teko-font product-title font-medium mb-2 text-black leading-tight group-hover:text-[#cb1020] transition-colors">
                                {group[1].title}
                              </h3>
                              <p className="section-text text-[#111111] inter-font leading-[1.8] ">
                                {group[1].excerpt}
                              </p>
                            </div>
                            <div className="flex justify-end mt-2">
                               <div className="w-8 h-8 rounded-full border border-[#cb1020] flex items-center justify-center text-[#cb1020] group-hover:bg-[#cb1020] group-hover:text-white transition-colors shrink-0">
                                 <ArrowRight size={16} strokeWidth={1.5} />
                               </div>
                            </div>
                         </div>
                      </div>
                    )}
                    
                    {/* Card 3 */}
                    {group[2] && (
                      <div className="bg-white border border-[#e0e0e0] shadow-[0_2px_15px_rgba(0,0,0,0.06)]  rounded-sm flex flex-col sm:flex-row h-full group cursor-pointer hover:shadow-xl transition-all duration-300 min-h-0 overflow-hidden">
                         <div className="w-full sm:w-[40%] relative min-h-[200px] sm:min-h-0">
                           <img 
                              src={group[2].image} 
                              alt={group[2].title}
                              className="absolute inset-0 object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                           />
                         </div>
                         <div className="w-full sm:w-[60%] p-4 xl:p-5 flex flex-col justify-between">
                            <div>
                              <div className="text-right text-[#111111] text-sm  mb-2 font-inter">{group[2].date}</div>
                               <h3 className="teko-font product-title font-medium mb-2 text-black leading-tight group-hover:text-[#cb1020] transition-colors">
                                {group[2].title}
                              </h3>
                            <p className="section-text text-[#111111] inter-font leading-[1.8] ">
                                {group[2].excerpt}
                              </p>
                            </div>
                            <div className="flex justify-end mt-2">
                               <div className="w-8 h-8 rounded-full border border-[#cb1020] flex items-center justify-center text-[#cb1020] group-hover:bg-[#cb1020] group-hover:text-white transition-colors shrink-0">
                                 <ArrowRight size={16} strokeWidth={1.5} />
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
        </div>

      </div>
    </section>
  );
}
