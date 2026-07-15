"use client";

import React from "react";
import Button from "./Button";

export default function Products() {
  const products = [
    {
      title: "Mufflers",
      image: "/moto/sigam/pr1.png",
      description: "Precision-engineered mufflers for quieter operation, enhanced performance, and lasting reliability in passenger and commercial vehicles."
    },
    {
      title: "DPF",
      image: "/moto/sigam/pr2.png",
      description: "Homologated particulate filters engineered to capture harmful emissions while ensuring OEM-level efficiency, and environmental performance."
    },
    {
      title: "Catalytic Converters & SCR",
      image: "/moto/sigam/pr3.png",
      description: "OEM-grade, homologated emission-control solutions delivering cleaner exhaust, regulatory compliance, and reliable performance."
    }
  ];

  return (
    <section className="py-20 xl:py-28 bg-white text-center">
      <div className="custom-container">
        {/* Heading */}
        <div className="flex items-center justify-center gap-3 mb-6" data-aos="fade-up">
          <div className="w-4 h-4 bg-[#E30613]"></div>
          <h2 className="section-title text-[#1d1d1b] orbitron-font font-semibold">Our Products</h2>
        </div>
        
        {/* Subtitle */}
        <p className="max-w-7xl mx-auto text-[#333333] dmsans-font section-text mb-16 leading-relaxed tracking-wider" data-aos="fade-up" data-aos-delay="100">
          Explore SIGAM's range of precision-engineered exhaust and emission-control solutions designed for automotive and industrial applications. Built for performance, durability, and regulatory compliance, our products deliver reliable results in every environment.
        </p>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 text-left" data-aos="fade-up" data-aos-delay="200">
          { products.map((product, index) => (
            <div 
              key={index} 
              className={`bg-white border border-gray-200 drop-shadow-lg hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300 flex flex-col items-start h-full ${index === 2 ? 'md:col-span-2 xl:col-span-1 md:w-[calc(50%-1.25rem)] md:mx-auto xl:w-full xl:mx-0' : ''}`}
            >
              {/* Image container */}
              {/* <div className="w-full h-70 md:h-80 flex items-center justify-center drop-shadow-2xl transition-all duration-300 mt-6"> */}
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-contain transition-all duration-300 " 
                />
              {/* </div> */}

              <div className="px-6 md:px-8 pb-6 md:pb-8 flex flex-col flex-grow w-full">
              
              <h3 className="card-title orbitron-font text-[#1d1d1b] mb-4 font-semibold mt-6">{product.title}</h3>
              
              <p className="section-text dmsans-font text-[#1d1d1b] leading-relaxed tracking-wider mb-6">
                {product.description}
              </p>
              
             
              <div className="mt-auto  ">
                              <Button href="#" variant="primary" >
                                View PDF
                              </Button>
                            </div>
              </div>
            </div>
          ))}
        </div>
        
     
      </div>
    </section>
  );
}
