"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const productCategories = [
  {
    title: "Windshield Wiper",
    image: "/moto/alca-mobil/gallery1.png",
    icon: "/moto/alca-mobil/icon1.png",
    description: "High performance for clear visibility in all weather conditions and environments.",
    link: "#products"
  },
  {
    title: "Car Accessories",
    image: "/moto/alca-mobil/gallery2.png",
    icon: "/moto/alca-mobil/icon2.png",
    description: "Smart solutions for more comfort and driving convenience in every journey.",
    link: "#products"
  },
  {
    title: "Tools",
    image: "/moto/alca-mobil/gallery3.png",
    icon: "/moto/alca-mobil/icon3.png",
    description: "Tools for professionals' everyday use in all working environments.",
    link: "#products"
  },
  {
    title: "Storage Solutions",
    image: "/moto/alca-mobil/gallery4.png",
    icon: "/moto/alca-mobil/icon4.png",
    description: "Practical storage designed for more space and better organization on every journey.",
    link: "#products"
  }
];

const Products = () => {
  return (
    <section id="products" className="w-full py-10 xl:py-16 min-[3800px]:pt-25 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center text-center gap-12 ">
        
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 " data-aos="fade-up">
          <div className="inline-flex flex-col items-center">
            <Typography variant="span" color="secondary" className="font-bold tracking-wide">
              Our Product Category
            </Typography>
            <span className="w-1/2 h-[2px] bg-secondary self-end mt-1"></span>
          </div>
          <Typography variant="h2" color="dark" className="font-bold leading-tight mt-2">
            A Selection of Automotive Products Built for Durability, Performance, and Quality
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed max-w-[70%] mt-2">
            High-quality automotive products designed to enhance safety, comfort, and performance, ensuring reliable operation, long-lasting durability, and consistent efficiency across all driving conditions while meeting modern industry standards.
          </Typography>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 min-[2100px]:gap-10 min-[3800px]:gap-16 w-full">
          {productCategories.map((product, index) => (
            <Link 
              key={index}
              href={product.link}
              className="group flex flex-col border border-secondary hover:border-primary transition-colors rounded-xl overflow-hidden shadow-sm hover:shadow-lg duration-300 relative text-left"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Product Image */}
              <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100 p-2 relative">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Icon floating on border */}
              <div className="absolute top-[calc(50%-1.5rem)] left-6 w-12 h-12 min-[2100px]:w-16 min-[2100px]:h-16 min-[3800px]:w-24 min-[3800px]:h-24 min-[2100px]:top-[calc(50%-2rem)] min-[3800px]:top-[calc(50%-3rem)] bg-white rounded-full border border-gray-200 flex items-center justify-center z-10 p-2 shadow-sm group-hover:border-primary transition-colors">
                {/* Fallback to SVG if icon doesn't load, but prefer image */}
                <img 
                  src={product.icon} 
                  alt={`${product.title} icon`}
                  className="w-6 h-6 min-[2100px]:w-8 min-[2100px]:h-8 min-[3800px]:w-12 min-[3800px]:h-12 object-contain"
                  onError={(e) => {
                    // Fallback generic icon if icon doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement?.classList.add('fallback-icon');
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col p-6 pt-8 flex-1 gap-4">
                <Typography variant="h4" color="dark" className="font-bold">
                  {product.title}
                </Typography>
                <Typography variant="p" color="muted" className="text-sm leading-relaxed flex-1">
                  {product.description}
                </Typography>
                
                {/* Arrow at bottom right */}
                <div className="w-full flex justify-end mt-4">
                  <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-colors">
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="pt-1" data-aos="fade-up">
          <Button text="View All Category" href="#products" />
        </div>

      </div>
    </section>
  );
};

export default Products;
