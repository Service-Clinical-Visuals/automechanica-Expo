"use client";

import React from "react";
import Container from "./Container";
import Typography from "./Typography";
import HexagonButton from "./HexagonButton";
import Link from "next/link";

const Products = () => {
  const products = [
    { title: "Lubricants", image: "/moto/UTB/section3(1).jpg", link: "#" },
    { title: "Motor Oils", image: "/moto/UTB/section3(2).jpg", link: "#" },
    { title: "Transmissions", image: "/moto/UTB/section3(4).jpg", link: "#" },
  ];

  return (
    <section className="py-20 bg-[#1A1A1A] relative" id="products">
      <Container>
        {/* Top Header Section */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-12 gap-8">

          {/* Left Title */}
          <div className="space-y-4" data-aos="fade-right" data-aos-duration="1000">
            <Typography variant="h2" color="white" weight="semibold" className="italic">
              Engineered for Maximum Protection
            </Typography>
            <div className="flex items-center gap-4">
              <div className="w-[20%] rounded h-1 bg-white"></div>
              <Typography variant="h4" className="italic !text-secondary " >
                Explore Our Products
              </Typography>
            </div>
          </div>

          {/* Right Title (Outlined) */}
          <div className="xl:text-right " data-aos="fade-left" data-aos-duration="1000">
            <img
              src="/moto/UTB/heading3.png"
              alt="Our Products"
              className="h-12 md:h-17 lg:h-18 w-auto object-contain object-right"
            />
          </div>

        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 lg:gap-2 mb-16">
          {products.map((product, idx) => (
            <Link
              key={idx}
              href={product.link}
              className="group relative h-[300px] hover:border-[3px] hover:border-secondary  md:h-[400px] lg:h-[450px] overflow-hidden bg-black  "
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              {/* Background Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover  group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/moto/UTB/section2.png";
                }}
              />



              {/* Text Content */}
              <div className="absolute bottom-8 left-6 z-10">
                <Typography variant="h4" color="white" weight="bold" className="italic">
                  {product.title}
                </Typography>
              </div>

              {/* Hexagon Arrow (Bottom Right) */}
              <div className="absolute bottom-6 right-6 z-10">
                <div
                  className="bg-secondary flex items-center justify-center transition-colors group-hover:bg-secondary-hover"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    width: "48px",
                    height: "48px"
                  }}
                >
                  <img src="/moto/UTB/vector.png" alt="Arrow" className="w-4 h-4 object-contain ml-[-2px]" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/50" data-aos="fade-up" data-aos-duration="1000">
          <div className="max-w-5xl space-y-5 tracking-wide leading-5">
            <Typography variant="body" className="text-white">
              Explore our comprehensive range of premium lubricants, engine oils, additives, and automotive
              care solutions designed to enhance performance, protection, and reliability.
            </Typography>
          </div>

          <div className="shrink-0">
            <HexagonButton
              text="View All Products"
              href="#products"
              bgColor="bg-white"
              textColor="text-primary"
            />
          </div>
        </div>

      </Container>
    </section>
  );
};

export default Products;
