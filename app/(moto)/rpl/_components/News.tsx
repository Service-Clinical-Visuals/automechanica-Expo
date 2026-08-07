"use client";

import React from "react";
import Typography from "./Typography";

const News = () => {
  return (
    <section id="news" className="w-full py-20 min-[3800px]:py-40 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-12 min-[3800px]:gap-24">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center gap-4 max-w-[70%] mx-auto" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-1 min-[3800px]:w-16 min-[3800px]:h-2 bg-secondary shrink-0"></div>
            <Typography variant="h2" color="primary" className="font-bold leading-tight">
              Engineered for Reliable HVAC Performance
            </Typography>
          </div>
          <Typography variant="p" color="muted" className="leading-relaxed mt-2" data-aos="fade-up" data-aos-delay="100">
            At RPL CLIMA, we deliver comprehensive HVAC solutions that keep vehicles operating at peak comfort and efficiency. Our premium climate control components are designed to provide exceptional cooling performance, long-lasting durability, and reliable operation across passenger vehicles, commercial fleets, agricultural machinery, industrial equipment, and transport refrigeration systems.
          </Typography>
        </div>

        {/* 2-Column Promo Graphic Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 min-[3800px]:gap-24 pt-4">

          {/* Promo Graphic 1 */}
          <div className="w-full aspect-[797/494] rounded-2xl min-[3800px]:rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300" data-aos="fade-right" data-aos-delay="200">
            <img
              src="/moto/rpl/news1.png"
              alt="Complete HVAC Solutions Promo"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Promo Graphic 2 */}
          <div className="w-full aspect-[797/494]  rounded-2xl min-[3800px]:rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300" data-aos="fade-left" data-aos-delay="300">
            <img
              src="/moto/rpl/news2.png"
              alt="Para todos os segmentos Promo"
              className="w-full h-auto object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default News;
