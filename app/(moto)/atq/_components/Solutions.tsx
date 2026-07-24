"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Typography from "./Typography";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Solutions() {
  const categories = ["Cars", "Trucks", "Lubricants", "View All Categories"];
  const [activeCategory, setActiveCategory] = useState("Cars");

  const categoryData: Record<string, { title: string, desc: string, img: string }[]> = {
    "Cars": [
      { title: "Brake systems", desc: "ATQ Germany offers OEM-quality brake pads and discs, delivering reliable performance at competitive aftermarket prices.", img: "/moto/atq/frame1/frame1-1.png" },
      { title: "Brake fluids", desc: "ATQ Germany offers DOT 3, DOT 4, DOT 4 ESP, DOT 5.1, and DOT 5.1 ESP brake fluids for reliable braking performance.", img: "/moto/atq/frame1/frame1-2.png" },
      { title: "Drive shafts", desc: "ATQ CV-Joint kits and shafts, designed and manufactured to precise OE Standards.", img: "/moto/atq/frame1/frame1-3.png" },
      { title: "Wheel hub bearings", desc: "ATQ Germany hub bearings are precision-engineered to OE standards, ensuring reliable fitment, durability, and performance.", img: "/moto/atq/frame1/frame1-4.png" },
      { title: "Shock absorbers", desc: "ATQ Germany shock absorbers improve stability, comfort, and control, and are available in hydraulic and gas variants.", img: "/moto/atq/frame1/frame1-5.png" },
      { title: "Steering parts", desc: "ATQ Germany offers premium steering components for reliable performance across a wide range of vehicles.", img: "/moto/atq/frame1/frame1-6.png" },
      { title: "Steering racks", desc: "ATQ Germany rack and pinion units are built to OEM standards, delivering reliable steering performance and long-lasting durability.", img: "/moto/atq/frame1/frame1-7.png" },
      { title: "Radiators", desc: "ATQ Germany offers premium heating, cooling, and air conditioning parts, including air coolers for cars and light trucks.", img: "/moto/atq/frame1/frame1-8.png" },
    ],
    "Trucks": [
      { title: "Clutches", desc: "ATQ Germany supplies reliable commercial vehicle clutches engineered for durability and performance.", img: "/moto/atq/frame2/frame2-1.png" },
      { title: "Gaskets", desc: "OEM-quality gaskets for reliable sealing and precise fitment.", img: "/moto/atq/frame2/frame2-2.png" },
      { title: "Filters", desc: "Quality is ATQ Germany filters' first priority. Our manufacturing process allows to provide maximum control and consistency.", img: "/moto/atq/frame2/frame2-3.png" },
      { title: "Radiators", desc: "Made with premium materials and tested for 100% leak-free OEM-quality performance.", img: "/moto/atq/frame2/frame2-4.png" },
      { title: "Air Compressors", desc: "ATQ Germany offers OEM-quality brake pads and discs at competitive aftermarket prices.", img: "/moto/atq/frame2/frame2-5.png" },
      { title: "Brake systems", desc: "OEM-quality brake pads and discs at competitive aftermarket prices.", img: "/moto/atq/frame2/frame2-6.png" },
      { title: "Cabin dampers", desc: "ATQ Germany cabin damping systems improve driver comfort, stability, and safety with reliable hydraulic and air-spring suspension solutions.", img: "/moto/atq/frame2/frame2-7.png" },
      { title: "Steering & suspension", desc: "ATQ Germany control arms are rigorously tested to ensure precise fitment, superior strength, and reliable driving stability.", img: "/moto/atq/frame2/frame2-8.png" },
    ],
    "Lubricants": [
      { title: "Engine oil", desc: "ATQ Germany Lubricants has a high quality range of products which offers performance while catering for all customer needs.", img: "/moto/atq/frame3/frame3-1.png" },
      { title: "AdBlue", desc: "ATQ Germany AdBlue reduces emissions and supports efficient, eco-friendly driving.", img: "/moto/atq/frame3/frame3-2.png" },
      { title: "Coolant additives", desc: "ATQ Germany coolant additives protect against freezing, corrosion, and overheating while ensuring efficient engine cooling.", img: "/moto/atq/frame3/frame3-3.png" },
    ]
  };

  const activeCards = useMemo(() => {
    if (activeCategory === "View All Categories") {
      return [...categoryData["Cars"], ...categoryData["Trucks"], ...categoryData["Lubricants"]];
    }
    return categoryData[activeCategory] || [];
  }, [activeCategory]);

  return (
    <section id="products" className="w-full py-16  bg-[#F8F9FA] overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-8">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center gap-4  mx-auto" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold">
            Explore Our Product Range
          </Typography>
          <Typography variant="p" color="dark" className="leading-relaxed   xl:max-w-[75%] ">
            Discover ATQ Germany's range of premium pads engineered for reliable stopping power, precise fitment, and long-lasting performance. Manufactured to OEM-quality standards, our products are designed to meet the demands of modern passenger vehicles while ensuring safety and durability.
          </Typography>
        </div>

        {/* Thin Separator */}
        <div className="w-full h-[1px] bg-black/10"></div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4" data-aos="fade-up" data-aos-delay="100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-[8px] footer-body !font-oswald border-2 transition-all duration-300 ${
                activeCategory === cat 
                  ? "border-primary bg-primary text-white" 
                  : "border-primary text-black bg-white hover:bg-primary/5"
              }`}
            >
              <h4 className="font-semibold">{cat}</h4>
            </button>
          ))}
        </div>

        {/* Swiper Slider */}
        <div 
          className="w-full mt-4" 
          data-aos="fade-up" 
          data-aos-delay="200"
          style={{
            "--swiper-pagination-color": "var(--color-primary)",
            "--swiper-pagination-bullet-inactive-color": "#d1d5db",
            "--swiper-pagination-bullet-inactive-opacity": "1",
          } as React.CSSProperties}
        >
          <Swiper
            key={activeCategory} // Force re-render on category change for proper slide reset
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
              1536: { slidesPerView: 4 },
            }}
            className="w-full pb-16 atq-solutions-pagination"
          >
            {activeCards.map((card, idx) => (
              <SwiperSlide key={`${activeCategory}-${idx}`} className="!h-auto flex">
                <div className="group relative w-full h-full flex flex-col rounded-xl overflow-hidden bg-white  shadow-md">
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/3] p-4 flex items-center justify-center ">
                    <img 
                      src={card.img} 
                      alt={card.title} 
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Card Content */}
                  <div className="flex flex-col flex-grow p-6 space-y-4">
                    <div className="space-y-3 flex-grow">
                      <Typography variant="h3" color="dark" className="font-bold">
                        {card.title}
                      </Typography>
                      <Typography variant="span" color="dark" className="block leading-relaxed">
                        {card.desc}
                      </Typography>
                    </div>
                    
                    {/* View Product Button */}
                    <div className="pt-2">
                       <Button text="View Product" href="#" className="px-5 py-2 !text-sm" />
                    </div>
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
