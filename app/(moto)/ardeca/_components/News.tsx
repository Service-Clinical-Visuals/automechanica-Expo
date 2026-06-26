import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

export default function News() {
  const newsItems = [
    {
      image: "/moto/ardeca/news1.png",
      title: "Ardeca Ypres Rally 2024",
      desc: "Ardeca Ypres Rally 2024 is coming up! Mark your calendars for June 20-22 because the 59th edition of the Ardeca Ypres Rally is about to take off.",
      day: "25",
      month: "Apr",
      year: "2024",
    },
    {
      image: "/moto/ardeca/news2.png",
      title: "Visit us at Automechanika Frankfurt!",
      desc: "We kindly invite you to our booth at Automechanika Frankfurt, the world's leading event for the automotive industry!",
      day: "22",
      month: "Aug",
      year: "2024",
    }
  ];

  return (
    <section className="w-full bg-[#f1f1f1] py-20 lg:py-28 overflow-hidden">
      <div className="custom-container">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-5 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[32px] font-semibold mb-4 !text-black chakra-petch leading-tight">
              News
            </h2>
            <p className="text-[#484848] text-sm md:text-[16px] oxanium leading-[1.8]">
              Driven by passion and inspired by progress, we continuously push boundaries.
            </p>
          </div>
          
          <Button href="#" className="shrink-0">
            Learn More
          </Button>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {newsItems.map((news, idx) => (
            <div key={idx} className="flex flex-col border-t border-[#CE0E2D] pt-6 group cursor-pointer">
              
              {/* Image */}
              <div className="w-full  mb-6 overflow-hidden rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              
              {/* Content */}
          
              <h2 className="text-2xl md:text-3xl lg:text-[28px] font-semibold  !text-[#484848] chakra-petch leading-tight"> {news.title}</h2>
                
=              
           
              <p className="text-[#484848] text-sm md:text-[16px] oxanium leading-[1.8]">
                {news.desc}
              </p>
              
              {/* Bottom Row */}
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center text-sm md:text-base font-semibold ">
                  <span className="text-[#CE0E2D] mr-2 text-2xl leading-none ">&bull;</span>
                  <span className="text-gray-700">{news.day}</span>
                  <span className="text-[#CE0E2D] mx-1.5">{news.month}</span>
                  <span className="text-gray-700">{news.year}</span>
                </div>
                
                <div className="w-10 h-10 md:w-11 md:h-11 bg-[#CE0E2D] group-hover:bg-[#a50b24] flex items-center justify-center transition-colors shadow-sm">
                  <img src="/moto/ardeca/Arrow 2.png" alt="arrow icon" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
