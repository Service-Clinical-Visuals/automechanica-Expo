"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const newsItems = [
  {
    id: 1,
    date: "23 June 2026",
    title: "FIRST GT3 PODIUM FOR JACOPO CIMENES",
    desc: "Following a promising season opener at Misano, the second round of the Italian GT Endurance Championship at Monza...",
    image: "/moto/tecneco/n1.png"
  },
  {
    id: 2,
    date: "19 June 2026",
    title: "2ND ROUND LOTUS CUP – VARANO MELEGARI",
    desc: "The second round of the Lotus Cup Italy at Varano de' Melegari unfortunately ended with an outcome.....",
    image: "/moto/tecneco/n2.png"
  },
  {
    id: 3,
    date: "05 June 2026",
    title: "TECNECOFILTRATION TAKES CENTER STAGE",
    desc: "The participation of our Sicilian distributor SE.CO.RI. in the 6th Trade Fair for Workshop Equipments....",
    image: "/moto/tecneco/n3.png"
  },
  {
    id: 4,
    date: "22 May 2026",
    title: "EUROCAR VERONA VISITS TECNECO",
    desc: "We had the pleasure of welcoming EUROCAR Verona, our long-standing Commercial Partner, to our production.....",
    image: "/moto/tecneco/n4.png"
  },
  {
    id: 5,
    date: "21 May 2026",
    title: "FILTER EXPERT IN LOMBARDY - FIRAT",
    desc: "Two days on the road in Valcamonica together with our customer FIRAT ember of GROUPATO.......",
    image: "/moto/tecneco/n5.png"
  },
  {
    id: 6,
    date: "20 May 2026",
    title: "1° ROUND LOTUS CUP ITALY VALLELUNGA",
    desc: "After finishing Super Pole with an excellent fourth place on the grid, Mattia immediately confirmed his competitiveness in.....",
    image: "/moto/tecneco/n6.png"
  }
];

export default function LatestNews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1280) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, newsItems.length - itemsPerView);
  const totalDots = Math.ceil(newsItems.length / itemsPerView);
  const currentDot = Math.min(Math.floor(currentIndex / itemsPerView), totalDots - 1);

  // Auto-slide effect
  useEffect(() => {
    if (maxIndex <= 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const goToDot = (dotIndex: number) => {
    const newIndex = dotIndex * itemsPerView;
    setCurrentIndex(Math.min(newIndex, maxIndex));
  };

  return (
    <section className="py-20 md:py-28 bg-[#fbfbfb] w-full overflow-hidden">
      <div className="custom-container">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="section-title text-primary font-semibold mb-6 sora">
            Latest News & Insights
          </h2>
          <p className="section-text text-primary-2 leading-relaxed lato font-normal">
            Stay informed with the latest updates from Tecneco Filtri, including new product launches, industry innovations, company milestones, trade exhibitions, and advancements in filtration technology. Explore how we're driving quality, performance, and innovation across the global automotive aftermarket.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative" data-aos="fade-up" data-aos-delay="100">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {newsItems.map((news) => (
                <div 
                  key={news.id} 
                  className="px-4"
                  style={{ minWidth: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 h-full flex flex-col group">
                    {/* Image */}
                    <div className="w-full aspect-[4/3] overflow-hidden">
                      <img 
                        src={news.image} 
                        alt={news.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 flex-grow flex flex-col relative">
                      <span className="lato text-primary-2 section-text mb-4 block">
                        {news.date}
                      </span>
                      
                      <h3 className="card-title sora font-semibold text-primary mb-4 leading-snug uppercase">
                        {news.title}
                      </h3>
                      
                      <p className="lato text-primary-2  flex-grow leading-relaxed section-text font-normal">
                        {news.desc}
                      </p>
                      
                      {/* Arrow Button */}
                      <div className="mt-auto flex justify-end">
                        <Link 
                          href="#" 
                          className="w-14 h-14 rounded-full border border-primary flex items-center justify-center text-primary "
                        >
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          {totalDots > 1 && (
            <div className="flex justify-center items-center gap-3 mt-12">
              {Array.from({ length: totalDots }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToDot(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentDot === index 
                      ? "bg-primary w-4 h-4" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
