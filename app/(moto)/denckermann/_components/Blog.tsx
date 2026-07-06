"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";

export default function Blog() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const blogs = [
    {
      id: 1,
      image: "/moto/denckermann/blog1.png",
      date: "February 6, 2026",
      title: "ABS Sensors – How Do They Work And When Should They Be Replaced?",
      active: true, // First one is orange in the screenshot
    },
    {
      id: 2,
      image: "/moto/denckermann/blog2.png",
      date: "August 18, 2025",
      title: "Original Car Parts Substitutes Facts And Myths",
      active: false,
    },
    {
      id: 3,
      image: "/moto/denckermann/blog3.png",
      date: "March 19, 2025",
      title: "How To Care For Your Engine To Avoid Costly Breakdowns",
      active: false,
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white relative">
      <div className="custom-container">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="max-w-4xl" data-aos="fade-right">
            <h2 className="section-title text-[var(--color-primary)] font-medium oswald mb-4">
              News And Blog
            </h2>
            <p className="max-w-5xl max-w-[95%]  section-text text-[#484848] leading-[1.8] sora font-normal">
              Here You'll Find The Latest News, Industry News, And Updates About Our Products. Follow Our Posts To Stay Up-To-Date On Automotive Trends, New Part Launches, And Important Industry Events.
            </p>
          </div>
          
          <div data-aos="fade-left">
            {/* Action Button */}
            <Button text="View All News" />
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
          {blogs.map((blog, index) => (
            <div 
              key={blog.id}
              className={`flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer group ${
                index === 2 ? 'md:col-span-2 xl:col-span-1 md:w-[calc(50%-0.75rem)] xl:w-full md:mx-auto' : ''
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden w-full">
                <img src={blog.image} alt={blog.title} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>

              {/* Content Container */}
              <div className="bg-[var(--color-primary)] p-8 flex flex-col items-center flex-grow">
                <span className="section-text text-[#ffffff] font-normal mb-4">
                  {blog.date}
                </span>
                <h3 className={`product-title text-center font-medium oswald leading-[tight] transition-colors ${
                  hoveredIndex === index 
                    ? 'text-[var(--color-secondary)]' 
                    : (hoveredIndex === null && index === 0) 
                      ? 'text-[var(--color-secondary)]' 
                      : 'text-white'
                }`}>
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
