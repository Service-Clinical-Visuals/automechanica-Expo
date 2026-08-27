"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const Discover = () => {
  const products = [
    {
      title: "Air Filters",
      img: "/moto/mc-filter/d1.png"
    },
    {
      title: "Oil Filters",
      img: "/moto/mc-filter/d2.png"
    },
    {
      title: "Fuel Filters",
      img: "/moto/mc-filter/d3.png"
    }
  ];

  return (
    <section id="discover" className="w-full py-12 md:py-16 2xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-16">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-4 max-w-4xl" data-aos="fade-up">
          <div className="inline-block flex flex-col items-center">
            <Typography variant="h5" color="primary" className="font-bold uppercase tracking-wider text-sm">
              PRODUCT RANGE
            </Typography>
            <div className="w-full h-[2px] bg-secondary mt-1"></div>
          </div>
          <Typography variant="h2" color="dark" className="font-bold leading-tight">
            Discover Our Complete Collection of<br className="hidden md:block" /> Advanced Cabin Air Filters
          </Typography>
        </div>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="bg-primary rounded-[2rem] p-4 lg:p-5 pb-8 lg:pb-10 flex flex-col shadow-xl group"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              {/* Image Area (White Background) */}
              <div className="w-full bg-white rounded-[1.5rem] relative overflow-hidden aspect-[4/3]">
                <img
                  src={product.img}
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text & Button Area */}
              <div className="flex flex-col items-center justify-center mt-8 gap-6 px-4">
                <Typography variant="h3" color="white" className="font-bold tracking-wide">
                  {product.title}
                </Typography>

                <Button
                  text="View Product Details"
                  href="#products"
                  variant="secondary"
                  className="!text-sm"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Discover;
