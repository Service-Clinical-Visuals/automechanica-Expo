"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "./Button";

export default function Blogs() {
  const [activeIdx, setActiveIdx] = useState(0);

  const blogs = [
    {
      id: 1,
      image: "/moto/kroon-oil/comp1.png",
      // smallImage: "/moto/kroon-oil/comp1.1.png",
      date: "01 April 2026",
      title: "Download the Kroon-Oil Web App"
    },
    {
      id: 2,
      image: "/moto/kroon-oil/comp2.png",
      // smallImage: "/moto/kroon-oil/comp2.1.png",
      date: "12 July 2024",
      title: "A new range of greases at Kroon-Oil"
    },
    {
      id: 3,
      image: "/moto/kroon-oil/comp3.png",
      // smallImage: "/moto/kroon-oil/compo3.1.png",
      date: "11 July 2024",
      title: "Radiator Cleaner: Restore the..."
    },
    {
      id: 4,
      image: "/moto/kroon-oil/comp4.png",
      smallImage: "/moto/kroon-oil/comp4.1.png",
      date: "09 July 2024",
      title: "Maintaining Hedge Trimmer Blades"
    },
    {
      id: 5,
      image: "/moto/kroon-oil/comp5.png",
      // smallImage: "/moto/kroon-oil/comp5.1.png",
      date: "08 July 2024",
      title: "Multi purpose foam cleaning"
    },
    {
      id: 6,
      image: "/moto/kroon-oil/comp6.png",
      // smallImage: "/moto/kroon-oil/comp6.1.png",
      date: "05 July 2024",
      title: "Diesel Treatment: Restore the"
    }
  ];

  const itemsPerPage = 3;
  const currentPage = Math.floor(activeIdx / itemsPerPage);
  const visibleBlogs = blogs.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % blogs.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? blogs.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full py-16 xl:py-24 bg-[#0a0a0a]">
      <div className="custom-container relative z-10 px-5 xl:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col xl:flex-row justify-between items-center mb-12 gap-8" data-aos="fade-up">
           <h2 className="section-title font-normal text-white  tracking-wide anton-font xl:w-1/2 text-left">
             Kroon-Oil Blogs
           </h2>
           <p className="section-text text-[#ffffff] font-normal leading-[1.8] oswald-font max-w-2xl xl:w-1/2 text-left xl:text-right">
             Stay informed with the latest updates, expert insights, maintenance tips, and industry trends from Kroon-Oil. Explore practical advice and solutions to maximize vehicle performance, reliability, and efficiency.
           </p>
        </div>

        {/* Desktop Accordion (lg and up) */}
        <div className="hidden xl:flex h-[700px] mb-12 w-full overflow-hidden" data-aos="fade-up">
          {blogs.map((blog, idx) => {
            const isCurrentPage = Math.floor(idx / itemsPerPage) === currentPage;
            const isActive = activeIdx === idx;
            
            return (
              <div 
                key={blog.id} 
                onClick={() => setActiveIdx(idx)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group flex-shrink-0 ${isCurrentPage ? "border border-gray-800" : "border-0"}`}
                style={{
                  flex: isCurrentPage ? (isActive ? 3 : 1) : 0,
                  opacity: isCurrentPage ? 1 : 0,
                  marginRight: (isCurrentPage && (idx % itemsPerPage !== itemsPerPage - 1)) ? "16px" : "0px",
                  transition: "all 600ms cubic-bezier(0.4, 0, 0.2, 1)"
                }}
              >
                <div className="absolute inset-0 transition-transform duration-700 ease-in-out group-hover:scale-110">
                  <img 
                  // src={isActive ? blog.image : blog.smallImage}
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover " 
                  />
                </div>
                
                {/* Text Overlay - visible only on hover  */}
                <div 
                  className="absolute inset-0 bg-[#050404]/75 to-transparent flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="min-w-[250px]">
                    <span className="text-[#FFCB05] text-sm font-medium mb-2 oswald-font block">{blog.date}</span>
                    <h3 className="text-white text-2xl font-normal anton-font tracking-wider leading-tight mb-6 truncate whitespace-normal max-w-xs">{blog.title}</h3>
                    
                    <Button text="Explore Blog" variant="secondary" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Single Card (below lg) */}
        <div className="xl:hidden relative h-[400px] rounded-2xl overflow-hidden mb-12 border border-gray-800" data-aos="fade-up">
          {blogs.map((blog, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div 
                key={blog.id} 
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}
              >
                <div className="absolute inset-0 transition-transform duration-700 ease-in-out hover:scale-110">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <span className="text-[#FFCB05] text-sm font-medium mb-2 oswald-font">{blog.date}</span>
                  <h3 className="text-white text-xl font-normal anton-font tracking-wider leading-tight mb-6">{blog.title}</h3>
                  
                  <Button text="Explore Blog" variant="secondary" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Navigation Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6" data-aos="fade-up">
          {/* Read More Button */}
          <div className="w-full sm:w-auto flex justify-center sm:justify-start mt-6">
            <Button text="Read More" />
          </div>

          {/* Carousel Navigation Arrows */}
          <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-end">
             <button onClick={handlePrev} className="bg-[#FFCB05] hover:bg-[#e6b700] transition-colors rounded-full w-11 md:w-12 h-11 md:h-12 flex items-center justify-center flex-shrink-0 shadow-sm group cursor-pointer">
               <ArrowLeft className="w-5 h-5 text-black transform group-hover:-translate-x-1 transition-transform" strokeWidth={2.5} />
             </button>
             <button onClick={handleNext} className="bg-[#FFCB05] hover:bg-[#e6b700] transition-colors rounded-full w-11 md:w-12 h-11 md:h-12 flex items-center justify-center flex-shrink-0 shadow-sm group cursor-pointer">
               <ArrowRight className="w-5 h-5 text-black transform group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}
