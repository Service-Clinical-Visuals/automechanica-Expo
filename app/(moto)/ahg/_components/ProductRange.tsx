"use client";

import React from "react";
import Link from "next/link";

export default function ProductRange() {
  const products = [
    {
      title: "Diesel Particulate Filter",
      description: "Improve air quality and protect your engine with a high-quality diesel particulate filter from ahg-autoteile-kzpm4lpnbd.live-website.com...",
      image: "/moto/ahg/pro1.png",
      link: "#"
    },
    {
      title: "Catalyst",
      description: "Increase the efficiency and reduce your vehicle's emissions with a high-quality catalytic converter from ahg-autoteile-kzpm4lpnbd.live-website.com...",
      image: "/moto/ahg/pro2.png",
      link: "#"
    },
    {
      title: "SCR Catalyst",
      description: "Effectively reduce your vehicle's nitrogen oxide emissions with a premium SCR catalytic converter from ahg-autoteile-kzpm4lpnbd.live-website.com...",
      image: "/moto/ahg/pro3.png",
      link: "#"
    }
  ];

  return (
    <section className="relative w-full py-16 xl:py-24 bg-white">
      <div className="custom-container  flex flex-col gap-12 xl:gap-16">
        
        {/* Top Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-6" data-aos="fade-up">
          <h2 className="section-title font-bold tracking-wide oswald-font text-[#212121]">
            Comprehensive Product Range
          </h2>
          <p className="section-text font-normal oswald-font text-[#585858] leading-[1.6] tracking-wider">
            Our extensive product portfolio covers both passenger cars and commercial vehicles, enabling us to meet the diverse requirements of customers across global markets. With a strong focus on quality, reliability, and performance, we offer a wide range of advanced automotive solutions designed to support modern vehicle technologies and demanding operating conditions.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-5 lg:px-12">
          {products.map((product, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-[24px] drop-shadow-lg  border border-gray-100 p-6 xl:p-8 flex flex-col h-full ${
                idx === 2 ? "md:col-span-2 xl:col-span-1 md:w-[calc(50%-1rem)] xl:w-auto md:mx-auto xl:mx-0" : ""
              }`}
              data-aos="fade-up" 
              data-aos-delay={idx * 150}
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/3] border border-gray-100 rounded-lg flex items-center justify-center p-6 bg-white mb-6">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="card-title font-semibold tracking-wide oswald-font text-[#212121] mb-4">
                  {product.title}
                </h3>
                <p className="header-link font-normal oswald-font text-[#585858] leading-[1.6] mb-6 line-clamp-4">
                  {product.description}
                </p>
                
                {/* Read More Link */}
                <Link 
                  href={product.link}
                  className="mt-auto text-[#00A1FF] header-link oswald-font font-semibold tracking-wide hover:underline underline-offset-4 decoration-2 inline-flex items-center"
                >
                  Read More &gt;&gt;&gt;
                </Link>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
