"use client";

import React from "react";
import Button from "./Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const newsItems = [
  {
    image: "/moto/ajusa/news1.png",
    day: "14",
    month: "May",
    year: "2026",
    tag: "Service",
    title: "Electric Motor Service",
    desc: "Electric motor repair with Ajusa: from replacement to sustainable profitability",
    link: "#"
  },
  {
    image: "/moto/ajusa/news2.png",
    day: "14",
    month: "May",
    year: "2026",
    tag: "Event",
    title: "Automotive Market",
    desc: "The arrival of the Asian giant: How Chinese Brands Are Redefining the European Automotive Market",
    link: "#"
  },
  {
    image: "/moto/ajusa/news3.png",
    day: "14",
    month: "May",
    year: "2026",
    tag: "Product",
    title: "New Arrival",
    desc: "Ajusa strengthens plant safety with new approved cabinets for chemical products",
    link: "#"
  },
  {
    image: "/moto/ajusa/news4.png",
    day: "14",
    month: "May",
    year: "2026",
    tag: "Feature",
    title: "Strong Warehouse",
    desc: "Ajusa revolutionizes its logistics with one of the largest automated warehouses in Europe.",
    link: "#"
  }
];

export default function Quality() {
  return (
    <section className="py-20 xl:py-20 bg-white relative overflow-hidden">
      <div className="custom-container relative z-10">

        {/* Header Text */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16" data-aos="fade-up">
          <div className="flex flex-col  mb-4">
            <div className="w-14 h-[2px] bg-[#054279] ml-3 mb-1"></div>
            <span className="text-[#054279] font-medium section-text poppins-font px-2">News & Events</span>
            <div className="w-14 h-[2px] bg-[#054279] ml-20 mr-3 mt-1"></div>
          </div>
          <h2 className="section-title text-[#000000] poppins-font font-semibold mb-4">
            Updates, Innovations & Industry Insights
          </h2>
          <p className="section-text text-[#414141] inter-font leading-relaxed">
            Explore recent developments, industry news, and product highlights from Ajusa as we continue to deliver quality and innovation worldwide.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10" data-aos="fade-up" data-aos-delay="100">
          {newsItems.map((item, index) => (
            <div key={index} className="flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm group hover:shadow-md transition-shadow">

              {/* Image container */}
              <div className="w-full relative overflow-hidden bg-gray-100 rounded-t-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">Image</div>' }}
                />
              </div>

              {/* Content with overlapping Date Badge */}
              <div className="p-6 pt-10 flex flex-col flex-grow relative text-left">
                {/* Date Badge */}
                <div className="absolute -top-10 left-6 bg-[#054279] text-white flex flex-col items-center justify-center p-3 rounded-lg text-[12px] font-medium inter-font shadow-md z-10">
                  <span className="text-[16px] font-semibold mb-0.5">{item.day}</span>
                  <span className="leading-tight">{item.month}</span>
                  <span className="leading-tight">{item.year}</span>
                </div>

                <span className="mt-4 text-[#054279] font-medium text-[20px] inter-font mb-2">{item.tag}</span>
                <h3 className="card-title text-[#000000] poppins-font font-semibold mb-2">{item.title}</h3>
                <p className="inter-font text-[#414141] card-text leading-relaxed mb-4 flex-grow">
                  {item.desc}
                </p>
                <Link href={item.link} className="poppins-font flex items-center underline underline-offset-3 gap-1.5 text-[#202020] text-[20px] font-medium hover:text-[#042e53] transition-colors mt-auto group/link">
                  <span className="underline underline-offset-4 decoration-transparent group-hover/link:decoration-[#054279] transition-colors">Read More</span>
                  <ArrowRight size={20} color="#054279" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        <div className="flex justify-center" data-aos="fade-up" data-aos-delay="200">
          <Button href="#" variant="primary-outline" className="btn-text font-semibold">
            Explore Products
          </Button>
        </div>

      </div>
    </section>
  );
}
