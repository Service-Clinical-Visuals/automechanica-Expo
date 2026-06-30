"use client";

import React from "react";
import Typography from "./Typography";
import Container from "./Container";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Products() {
  const products = [
    {
      id: 1,
      image: "/moto/mapetrol/product1.png",
      name: "MAPETROL SPARCO\nPERFORMANCE WS2+ 5W-50"
    },
    {
      id: 2,
      image: "/moto/mapetrol/product2.png",
      name: "MAPETROL SPARCO\nSPORT 0W-40"
    },
    {
      id: 3,
      image: "/moto/mapetrol/product3.png",
      name: "MAPETROL SPARCO\nCOMPETITION LL IV 0W-20"
    }
  ];

  return (
    <section id="products" className="w-full bg-[#111111] py-16 md:py-24 text-white relative">
      <Container className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-full mx-auto mb-16 space-y-4" data-aos="fade-up">
          <Typography variant="h4" color="white" className="font-orbitron font-medium tracking-wide">
            Our Most Popular Products
          </Typography>
          <Typography variant="p" className="text-white text-[14px]">
            Our equipment and professional staff are ready to take care of your order.
          </Typography>
        </div>

        {/* Carousel/Grid Section */}
        <div className="w-full flex flex-col md:flex-row items-center gap-4 p-4 lg:gap-8">

          {/* Left Arrow */}
          <button className="hidden md:flex shrink-0 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors items-center justify-center text-white z-10">
            <ArrowLeft size={20} />
          </button>

          {/* Products Grid */}
          <div className="w-full flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <div key={product.id} className="flex flex-col items-center w-full max-w-[80%]     mx-auto group cursor-pointer" data-aos="zoom-in-up" data-aos-delay={index * 150}>
                <div className="w-full aspect-[4/5] sm:aspect-square bg-[#1f1f1f] rounded-[16px] p-6 lg:p-8 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2 relative overflow-hidden">
                  {/* Optional subtle glow on hover */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 pointer-events-none" />
                  <img
                    src={product.image}
                    alt={product.name.replace('\n', ' ')}
                    className="w-full h-full object-contain filter drop-shadow-xl"
                  />
                </div>
                <div className="mt-6 text-center h-16 flex items-center justify-center">
                  <Typography variant="h6" color="muted" className="font-orbitron font-medium leading-relaxed uppercase whitespace-pre-line text-white/50 group-hover:text-white transition-colors duration-300">
                    {product.name}
                  </Typography>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="hidden md:flex shrink-0 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors items-center justify-center text-white z-10">
            <ArrowRight size={20} />
          </button>

        </div>
      </Container>
    </section>
  );
}
