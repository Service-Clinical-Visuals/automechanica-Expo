"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const Products = () => {
  const products = [
    {
      title: "Standard Exhaust",
      desc: "A Standard Exhaust system efficiently removes engine gases while reducing noise and maintaining reliable performance for everyday driving.",
      img: "/moto/celik/product11.png",
      buttonText: "Explore Standard Exhaust",
    },
    {
      title: "Performance Exhaust",
      desc: "A Performance Exhaust system is designed to enhance engine power and airflow, delivering improved acceleration, a deeper exhaust note, and better overall efficiency.",
      img: "/moto/celik/product12.jpg",
      buttonText: "Explore Performance Exhaust",
    },
    {
      title: "Catalytic Converter",
      desc: "A Catalytic Converter reduces harmful exhaust emissions by converting toxic gases into less harmful substances, helping improve air quality and meet emission standards.",
      img: "/moto/celik/product13.png",
      buttonText: "Explore Catalytic Converter",
    },
    {
      title: "Pipe Bending",
      desc: "Pipe Bending is a process used to shape exhaust pipes with precision, ensuring smooth airflow, optimal fit, and improved overall system performance.",
      img: "/moto/celik/product14.png",
      buttonText: "Explore Pipe Bending",
    }
  ];

  return (
    <section id="products" className="w-full py-16 min-[2100px]:py-24 min-[3800px]:py-25 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-12 min-[2100px]:gap-20 min-[3800px]:gap-28 items-center">
        
        {/* Header Section */}
        <div className="flex flex-col gap-4 text-center items-center " data-aos="fade-up">
          <div className="inline-flex flex-col">
            <span className="w-1/2 h-[2px] bg-primary mb-1 self-start"></span>
            <Typography variant="span" color="primary" className="font-bold tracking-wide">
              Our Core Products
            </Typography>
            <span className="w-1/2 h-[2px] bg-primary mt-1 self-end"></span>
          </div>
          <Typography variant="h2" color="dark" className="font-bold leading-snug">
            High-Quality Engineering Solutions for Modern Automotive Needs
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed   xl:max-w-[75%]">
            Our product portfolio is designed to meet the evolving demands of the automotive industry, combining advanced engineering with consistent quality. Each product is developed to ensure reliability, efficiency, and long-lasting performance.
          </Typography>
        </div>

        {/* Product Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8 min-[2100px]:gap-12 min-[3800px]:gap-16">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              
              {/* Image Container */}
              <div className="w-full aspect-[4/3] p-2 min-[2100px]:p-6 min-[3800px]:p-10 flex items-center justify-center shrink-0 group">
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Container */}
              <div className="flex flex-col flex-1 p-3 text-center">
                <Typography variant="h3" color="dark" className="font-bold mb-4">
                  {product.title}
                </Typography>
                
                <Typography variant="p" color="muted" className="leading-relaxed mb-6 flex-1 text-sm xl:text-base">
                  {product.desc}
                </Typography>
                
                {/* Button at the bottom */}
                <div className="mt-auto w-full pt-2">
                  <Button 
                    text={product.buttonText} 
                    href="#products" 
                    showIcon={false} 
                    className="w-full text-sm py-2 px-4" 
                  />
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
