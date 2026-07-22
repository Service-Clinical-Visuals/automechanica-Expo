"use client";

import React from "react";
import Link from "next/link";

const blogItems = [
  {
    title: "Motor Oil Manufacturer Alkim Petrochemicals at Expopartes 2026",
    image: "/moto/alkim-petrokimya/blog1.png",
    link: "#"
  },
  {
    title: "Turkish Engine Oil Manufacturer at the LATAM Trade Delegation 2026",
    image: "/moto/alkim-petrokimya/blog2.png",
    link: "#"
  },
  {
    title: "Autoexpo Kenya 2026: Alkim Petrochemicals across all continents, one mission!",
    image: "/moto/alkim-petrokimya/blog3.png",
    link: "#"
  }
];

export default function Quality() {
  return (
    <section className="py-20 xl:py-20  bg-[#1c1d21] relative overflow-hidden">
      {/* Red Brackets */}
      <div className="absolute top-20 left-4 md:left-10 xl:left-[4%] w-[20%] h-[65%] border-t-[10px] md:border-t-[15px] border-l-[10px] md:border-l-[15px] border-[#EA203B] hidden xl:block"></div>
      <div className="absolute bottom-15 right-4 md:right-10 xl:right-[4%] w-[20%] h-[65%] border-b-[10px] md:border-b-[15px] border-r-[10px] md:border-r-[15px] border-[#EA203B] hidden xl:block"></div>

      <div className="custom-container relative z-10">
        <div className="max-w-[1550px] mx-auto">
          {/* Heading */}
          <div className="flex flex-col items-center justify-center text-center  relative z-10" data-aos="fade-up">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-12 sm:w-20 md:w-20 h-[1.5px] bg-[#EA203B]"></div>
              <h2 className="text-white section-title orbitron font-semibold tracking-wide">
                Blog
              </h2>
              <div className="w-12 sm:w-20 md:w-20 h-[1.5px] bg-[#EA203B]"></div>
            </div>
            <p className="text-[#cccccc] dmsans section-text max-w-7xl mx-auto leading-relaxed">
              Stay updated with the latest industry insights, lubrication technologies, product innovations, and expert maintenance tips from Alkim Petrokimya. Explore our blog to discover valuable knowledge, trends, and best practices that help maximize equipment performance and operational efficiency.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8 relative z-10 p-8" data-aos="fade-up" data-aos-delay="100">
            {blogItems.map((blog, index) => (
              <div key={index} className="flex bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] h-auto">
                {/* Image half */}
                <div className="w-[45%] flex-shrink-0 bg-white">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content half */}
                <div className="w-[55%] p-4 xl:p-6 flex flex-col relative justify-between">
                  {/* Decorative Red Line - top aligned */}
                  <div className="absolute right-4 top-4 xl:top-6 h-20 xl:h-24 w-[3px] bg-[#EA203B]"></div>

                  {/* Title */}
                  <div className="pr-4 mt-2">
                    <h3 className="card-text font-semibold text-[#212121] leading-snug orbitron tracking-wide">
                      {blog.title}
                    </h3>
                  </div>

                  {/* Read Link */}
                  <div className="mt-4 text-right">
                    <Link href={blog.link} className="text-[#EA203B] text-[13px] xl:text-[14px] font-medium hover:text-red-700 transition-colors">
                      Read
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
