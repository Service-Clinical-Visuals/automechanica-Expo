"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const Products = () => {
  const products = [
    {
      id: "01",
      title: "Air Conditioning Parts",
      desc: "Complete climate control solutions for passenger vehicles, commercial fleets, agricultural machinery, and industrial equipment.",
      img: "/moto/rpl/c1.jpg",
      icon: "/moto/rpl/vector1.png"
    },
    {
      id: "02",
      title: "Several",
      desc: "Beyond air conditioning components, we supply AC ceiling systems, charging stations, professional service tools, and premium additives & oils.",
      img: "/moto/rpl/c2.jpg",
      icon: "/moto/rpl/vector2.png"
    },
    {
      id: "03",
      title: "Cold Transport",
      desc: "Keep temperature-sensitive cargo protected with dependable transport refrigeration components. Our range includes cold kits, replacement parts.",
      img: "/moto/rpl/c3.jpg",
      icon: "/moto/rpl/vector3.png"
    },
  ];

  return (
    <section id="products" className="w-full py-20 min-[3800px]:py-40 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-10 min-[3800px]:gap-32">

        {/* Top Header Block */}
        <div className="flex flex-col items-center text-center gap-4 xl:max-w-[60%]  mx-auto" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-1 min-[3800px]:w-16 min-[3800px]:h-2 bg-secondary shrink-0"></div>
            <Typography variant="h2" color="primary" className="font-bold leading-tight">
              Our Complete Product Solutions
            </Typography>
          </div>
          <Typography variant="p" color="muted" className="leading-relaxed mt-2" data-aos="fade-up" data-aos-delay="100">
            Manufactured using premium-grade materials and advanced production technologies, our products are tested for durability, corrosion resistance, and dependable performance under extreme operating conditions, ensuring long service life and customer satisfaction.
          </Typography>
        </div>

        {/* Desktop Product Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8 pt-8 min-[3800px]:pt-16">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative flex flex-col mt-6 min-[3800px]:mt-12 ${index === 2 ? "md:col-span-2 lg:col-span-1 md:w-[calc(50%-0.75rem)] md:mx-auto lg:w-full lg:mx-0" : ""
                }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >

              {/* Offset Icon */}
              <div className="absolute -top-10 left-8 md:left-10 w-20 h-20 min-[3800px]:w-45 min-[3800px]:h-45 min-[3800px]:-top-20 min-[3800px]:left-20 rounded-full bg-secondary border-[6px] min-[3800px]:border-[12px] border-white flex items-center justify-center z-20 shadow-sm">
                <img src={product.icon} alt={`${product.title} Icon`} className="w-1/2 h-1/2 min-[3800px]:w-30 min-[3800px]:h-30 object-contain" />
              </div>

              {/* Main Card */}
              <div className="relative w-full aspect-square md:aspect-[513/464] rounded-xl lg:rounded-2xl min-[3800px]:rounded-[2rem] overflow-hidden group shadow-lg">

                {/* Background Image */}
                <img
                  src={product.img}
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121C22]/90 via-[#121C22]/40 to-transparent opacity-100"></div>

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8 min-[3800px]:p-12 flex flex-col justify-end z-10">
                  <Typography variant="h3" color="white" className="font-bold mb-2 min-[3800px]:mb-6">
                    {product.title}
                  </Typography>
                  <Typography variant="p" color="white" className="text-gray-100 text-sm min-[3800px]:text-2xl leading-relaxed">
                    {product.desc}
                  </Typography>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center w-full mt-4" data-aos="fade-up" data-aos-delay="300">
          <Button text="View All Products" href="#products" />
        </div>

      </div>
    </section>
  );
};

export default Products;
