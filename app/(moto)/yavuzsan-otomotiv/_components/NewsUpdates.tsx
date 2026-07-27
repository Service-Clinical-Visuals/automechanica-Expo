"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";
import { Eye } from "lucide-react";

export default function NewsUpdates() {
  const blogs = [
    {
      image: "/moto/yavuzsan-otomotiv/b1.png",
      views: "977 Views",
      title: "How to Prevent Brake Fluid Leaks in the Brake System?",
      description: "The brake system is essential for vehicle safety, and a sealed hydraulic circuit is crucial to ensure proper brake fluid circulation and reliable braking performance."
    },
    {
      image: "/moto/yavuzsan-otomotiv/b2.png",
      views: "889 Views",
      title: "When Should Brake Pads Be Replaced? Key Signs and Symptoms",
      description: "Brake pads play a crucial role in braking performance, making regular inspection and replacement essential for safe driving."
    },
    {
      image: "/moto/yavuzsan-otomotiv/b3.png",
      views: "978 Views",
      title: "When Should You Replace the Brake Drum in a Car?",
      description: "Brake drums are essential for safe and reliable braking. Regular inspection and timely replacement help maintain optimal braking performance."
    }
  ];

  return (
    <section className="py-16 xl:py-20 bg-white border-t border-gray-100">
      <div className="custom-container">

        {/* Top Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8" data-aos="fade-up">
          <Typography variant="h2" className="oswald font-semibold section-title text-[#272727] tracking-wide leading-tight">
            Latest Blogs
          </Typography>
          <div className="w-45 h-[3px] bg-[#0F5AA6] mt-1 mb-4 rounded-full"></div>
          <Typography variant="p" className="rubik text-[#4B5563] text-base xl:text-[16px] leading-relaxed">
            Stay updated with the latest insights, news, and articles on brake systems and automotive technology.
          </Typography>
        </div>

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left" data-aos="fade-up" data-aos-delay="100">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="w-full overflow-hidden rounded-xl relative mb-2 bg-gray-100">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Views */}
                <div className="flex items-center gap-1.5 text-[#0F5AA6] rubik text-xs font-bold mb-2">
                  <Eye size={15} className="text-[#0F5AA6]" />
                  <span>{blog.views}</span>
                </div>

                {/* Title */}
                <Typography variant="h3" className="oswald font-bold text-[#202020] text-lg md:text-xl mb-3 leading-snug line-clamp-2">
                  {blog.title}
                </Typography>

                {/* Description */}
                <Typography variant="p" className="rubik text-[#4B5563] text-xs sm:text-[13px] xl:text-[14px] leading-relaxed mb-1 line-clamp-3">
                  {blog.description}
                </Typography>
              </div>

              {/* Read More Link */}
              <div className="mt-auto">
                <Link
                  href="#"
                  className="inline-flex items-center gap-1.5 text-[#0F5AA6] hover:text-[#0c4885] rubik font-bold text-sm transition-colors"
                >
                  <span>Read More</span>
                  <span className="text-lg leading-none">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
