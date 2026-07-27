"use client";

import React from "react";
import Typography from "./Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const News = () => {
  
  const newsData = [
    {
      img: "/moto/confinas/news1.png",
      title: "FULBAT at Interclean Show: Battery Solutions for Cleaning Professionals",
      desc: "FULBAT was proud to take part in the Interclean Show this year, where our team showcased dedicated battery solutions for floor cleaning equipment. Throughout the event, we highlighted the key priorities of cleaning professionals: performance, reliability, and durability..............",
      link: "#"
    },
    {
      img: "/moto/confinas/news2.png",
      title: "RENEWED PARTNERSHIP 2026: TEAM GO ELEVEN X FULBAT",
      desc: "We are thrilled to announce the renewal of our technical partnership with Team Go Eleven for the 2026 World Superbike Championship (WSBK) season. This long-standing collaboration fully reflects our commitment to innovation, performance, and excellence in motorsport............",
      link: "#"
    },
    {
      img: "/moto/confinas/news3.png",
      title: "FULBAT Powers Up New Solar Energy Storage Initiative",
      desc: "FULBAT is expanding its footprint in the renewable energy sector with a new lineup of deep cycle batteries designed specifically for solar energy storage systems. Our latest technology ensures maximum efficiency and long-lasting power retention for off-grid applications........",
      link: "#"
    },
    {
      img: "/moto/confinas/news4.png",
      title: "Innovative AGM Technology: The Future of Motive Power",
      desc: "Discover how FULBAT's advanced AGM carbon technology is revolutionizing the motive power industry. By drastically reducing charging times and extending overall cycle life, our new AGM series provides unmatched reliability for heavy-duty industrial vehicles...........",
      link: "#"
    }
  ];

  return (
    <section className="w-full py-16 min-[1440px]:py-20 min-[3500px]:py-[120px] bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 min-[1440px]:gap-12">
        
        {/* Heading Group */}
        <div className="flex flex-col items-center justify-center gap-4 text-center" data-aos="fade-up">
           
           <div className="flex items-center gap-4 w-full mx-auto justify-center">
             <div className="h-0.5 bg-primary w-12 sm:w-24"></div>
             <Typography variant="h2" color="dark" className="font-bold shrink-0">
               Latest News & Insights
             </Typography>
             <div className="h-0.5 bg-primary w-12 sm:w-24"></div>
           </div>

           <Typography variant="p" color="muted" className="leading-relaxed w-full min-[1440px]:max-w-[80%] mt-2">
             Stay informed with the latest FULBAT news, product launches, industry developments, and battery technology innovations. Discover expert insights, company updates, and solutions that keep you powered with reliable energy.
           </Typography>
        </div>

        {/* Slider */}
        <div className="w-full mt-4" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              1920: { slidesPerView: 2 },
            }}
            className="w-full pb-16 custom-swiper-pagination"
          >
            {newsData.map((news, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="w-full h-full flex flex-col min-[1440px]:flex-row bg-white shadow-md border border-gray-100 group transition-all duration-300">
                  
                  {/* Image Block */}
                  {/* Strict width/height on large desktop (1500px+) as requested */}
                  <div className="w-full min-[1440px]:w-[45%] min-[1440px]:w-[406px] min-[3800px]:w-[800px] min-h-[300px] min-[1440px]:h-[442px] min-[3800px]:h-[800px] shrink-0 overflow-hidden relative">
                    <img 
                      src={news.img} 
                      alt={news.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Content Block */}
                  <div className="flex-1 p-6 min-[1440px]:p-8 flex flex-col justify-center relative">
                    
                    <div className="flex flex-col gap-4 pr-0 sm:pr-8 relative">
                      {/* Vertical Green Line Decoration */}
                      <div className="hidden sm:block absolute right-0 top-1 bottom-1 w-[3px] bg-primary rounded-full"></div>

                      <Typography variant="h4" color="dark" className="font-bold leading-tight pr-4">
                        {news.title}
                      </Typography>
                      
                      <Typography variant="span" color="muted" className="leading-relaxed text-[15px] sm:text-base pr-4">
                        {news.desc}
                      </Typography>
                    </div>

                    <a href={news.link} className="mt-6 font-semibold text-primary hover:text-primary-hover transition-colors inline-flex items-center gap-2">
                      Read More <span>→</span>
                    </a>

                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default News;
