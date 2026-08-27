"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";

export default function Products() {
  const products = [
    { name: "Cabin Filters", image: "/moto/denckermann/pro1.png" },
    { name: "Oil Filters", image: "/moto/denckermann/pro2.png" },
    { name: "Fuel Filters", image: "/moto/denckermann/pro3.png" },
    { name: "Air Filters", image: "/moto/denckermann/pro4.png" },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-[var(--color-primary)] relative overflow-hidden">
      

      <div className="custom-container relative z-10">
        {/* Header Section */}
        <div className="max-w-5xl max-w-[75%] mx-auto text-center mb-16" data-aos="fade-up">
          <h2 className="section-title text-white font-medium oswald  mb-6">
            High Quality And Reliability – A Wide Range Of Car Parts
          </h2>
          <p className="section-text text-[#ffffff] sora font-normal mb-8 leading-[1.8]">
            We offer a comprehensive selection of parts for various vehicle systems—from filters and brakes to suspension and accessories. Our products ensure durability, safety, and excellent performance in all conditions. Check out our selection and find the perfect solutions for your vehicle.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mb-14">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-full aspect-square bg-[#f5f6f8] rounded-xl border-[3px] border-[var(--color-secondary)] p-6 flex items-center justify-center mb-6 hover:shadow-[0_0_20px_rgba(255,176,23,0.3)] transition-shadow cursor-pointer">
                <div className="relative w-full h-full">
               
                  <img src={product.image} alt={product.name} className="object-cover w-full h-full hover:scale-110 transition-transform duration-300 " />
                </div>
              </div>
              <h3 className="product-title text-white font-medium oswald text-center">
                {product.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/70 pt-8 flex flex-col md:flex-row justify-between items-center gap-6" data-aos="fade-up">
          <p className="section-text text-[#ffffff] sora font-normal">
            Check out our selection and find the perfect solutions for your vehicle.
          </p>
          
          {/* Action Button */}
          <Button text="View All Products"  />
        </div>
      </div>
    </section>
  );
}
