"use client";

import React from "react";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Typography from "./Typography";
import Button from "./Button";

const newsItems = [
  {
    image: "/moto/atq/update1.png",
    date: "14 - 18\nSep\n2021",
    tag: "Event",
    title: "Trade fair Automechanika Frankfurt",
    location: "Frankfurt, Germany",
  },
  {
    image: "/moto/atq/update2.png",
    date: "08 - 11\nApril\n2021",
    tag: "Event",
    title: "Trade fair Automechanika Istanbul",
    location: "Istanbul, Turkey",
  },
];

export default function Updates() {
  return (
    <section className="py-16 bg-white relative w-full overflow-hidden">
      <div className="custom-container px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-12">
          
          {/* Left Content */}
          <div className="col-span-1 xl:col-span-4 flex flex-col space-y-6 xl:pr-4" data-aos="fade-right">
            <Typography variant="h2" color="dark" className="font-bold">
              Our Latest Updates
            </Typography>
            
            <div className="space-y-4">
              <Typography variant="p" color="dark" className="leading-relaxed text-black/80">
                Stay up to date with the latest news from ATQ Germany, including product launches, trade fair participation, company announcements, and developments across the automotive aftermarket. Discover how we continue to deliver innovative solutions and expand our global presence.
              </Typography>
              <Typography variant="p" color="dark" className="leading-relaxed text-black/80">
                Explore expert insights, industry trends, and updates on advanced automotive technologies that shape the future of mobility. Follow our journey as we drive quality, performance, and innovation for customers worldwide.
              </Typography>
              <Typography variant="p" color="dark" className="leading-relaxed text-black/80">
                From major milestones to everyday progress, our news section keeps you connected with the latest stories shaping ATQ Germany. Stay informed about the initiatives, achievements, and updates that reflect our commitment to excellence and growth.
              </Typography>
            </div>

            <div className="pt-4">
              <Button text="View All News" href="#" showIcon={true} />
            </div>
          </div>

          {/* Right Cards */}
          <div className="col-span-1 xl:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
              {newsItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col bg-white border border-black/10 shadow-sm overflow-hidden"
                  data-aos="fade-left"
                  data-aos-delay={idx * 150}
                >
                  {/* Image & Date Badge */}
                  <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    {/* Date Badge */}
                    <div className="absolute top-0 left-6 bg-primary text-white p-3 flex flex-col items-center justify-center text-center shadow-lg rounded-b-lg min-w-[60px]">
                      <Calendar size={18} className="mb-1" />
                      <span className="text-xs font-bold leading-tight whitespace-pre-line">
                        {item.date}
                      </span>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow space-y-4 border-t border-black/40">
                    {/* Tag */}
                    <div>
                      <span className="inline-block border border-primary text-primary px-3 py-0.5 rounded-sm text-xs font-semibold">
                        {item.tag}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <Typography variant="h4" color="dark" className="font-bold flex-grow text-xl">
                      {item.title}
                    </Typography>
                    
                    {/* Subtle Line Separator */}
                    <div className="w-full h-[1px] bg-black/5"></div>
                    
                    {/* Location */}
                    <div className="flex items-center text-black pt-2">
                      <MapPin size={20} className="text-white fill-primary mr-2 shrink-0" />
                      <span className="text-sm font-medium">{item.location}</span>
                    </div>
                    
                    {/* Read Article Link */}
                    <div className="pt-4">
                      <a href="#" className="inline-flex underline items-center text-primary font-semibold text-sm hover:underline group">
                        Read Article 
                        <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
