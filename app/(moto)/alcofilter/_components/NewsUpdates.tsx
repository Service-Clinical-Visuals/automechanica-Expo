"use client";

import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const newsData = [
  {
    id: 1,
    image: "/moto/alcofilter/img1.jpg",
    date: { day: "14", month: "May", year: "2026" },
    category: "Event",
    title: "Autotech Future Budapest 2026",
    description: "We were part of Autotech Future Budapest 2026. Thank you to everyone who visited our booth!",
  },
  {
    id: 2,
    image: "/moto/alcofilter/img2.jpg",
    date: { day: "14", month: "May", year: "2026" },
    category: "Expo",
    title: "A1 spring Trade Show 2026",
    description: "Join us at A1 Spring Trade Show 2026. Let's connect and explore new opportunities.",
  },
  {
    id: 3,
    image: "/moto/alcofilter/img3.jpg",
    date: { day: "14", month: "May", year: "2026" },
    category: "Partnership",
    title: "Now Part of the TEMOT Network",
    description: "ALCO Filters has been officially approved as a supplier within the TEMOT International network.",
  },
  {
    id: 4,
    image: "/moto/alcofilter/img4.jpg",
    date: { day: "14", month: "May", year: "2026" },
    category: "Project",
    title: "Mini Monster Car project",
    description: "A glimpse into our Mini Monster Car project - design, build and performance in action.",
  },
];

export default function NewsUpdates() {
  return (
    <section className="py-16 md:py-24 bg-white w-full">
      <div className="custom-container">
        
        {/* Top Header Section */}
        <div className="flex flex-col items-center text-center mb-16" data-aos="fade-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-[3px] h-[22px] bg-[#E10600]"></div>
              <span className="outfit-font font-medium text-[#E10600] header-sublink 
               ">
              News & Updates
            </span>
          </div>
          
         <h2 className="section-title oswald-font text-[#202020] leading-tight lg:mb-6 font-medium max-w-5xl">
            Stay updated with our latest announcements and events
          </h2>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {newsData.map((item, index) => (
            <div 
              key={item.id} 
              className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col group hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              {/* Image Area */}
              <div className="relative h-[250px] w-full overflow-hidden bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  
                />
              </div>

              {/* Content Area */}
              <div className="relative pt-12 pb-6 px-6 flex-grow flex flex-col">
                {/* Date Badge */}
                <div className="absolute top-0 left-6 -translate-y-1/2 bg-[#E10600] text-white px-3 py-2 rounded-[4px] flex flex-col items-center justify-center text-center shadow-md">
                  <span className="oswald-font font-bold text-lg leading-none">{item.date.day}</span>
                  <span className="outfit-font text-[11px] leading-tight mt-0.5">{item.date.month}</span>
                  <span className="outfit-font text-[11px] leading-tight">{item.date.year}</span>
                </div>

                <div className="outfit-font font-medium text-[#E10600] header-link mb-2 ">
                  {item.category}
                </div>
                
                <h3 className="outfit-font font-semibold text-[#121212] header-link mb-3 leading-snug">
                  {item.title}
                </h3>
                
                <p className="outfit-font text-[#121212] section-text font-normalmb-6 flex-grow leading-relaxed">
                  {item.description}
                </p>

                <Link href="#" className="inline-flex items-center gap-3 group/link w-fit mt-4">
                  <span className="outfit-font text-[#121212] font-medium section-text underline underline-offset-4 decoration-2 decoration-gray-300 group-hover/link:decoration-[#E10600] transition-colors">
                    Read More
                  </span>
                  <ArrowRight className="w-5 h-5 text-[#E10600]  group-hover/link:rotate-0 transition-transform" strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center" data-aos="fade-up">
          <Button href="#" variant="outline" className="font-medium gap-2 py-3 px-8 btn-text group rounded-lg">
            <span className="text-[#121212]">View All News</span>
            <ArrowRight className="w-5 h-5 text-[#E10600]  group-hover/link:rotate-0 transition-transform" strokeWidth={2.5} />
          </Button>
        </div>

      </div>
    </section>
  );
}
