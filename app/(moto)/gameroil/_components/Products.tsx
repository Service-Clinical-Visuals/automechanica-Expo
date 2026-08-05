"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";

const catalogues = [
  {
    id: 1,
    title: "Oil Lubricants",
    description: "Engine protection and performance.",
    image: "/moto/gameroil/product1.png",
    icon: "/moto/gameroil/icon1.png"
  },
  {
    id: 2,
    title: "Marine Lubricants",
    description: "Reliable protection for marine engines.",
    image: "/moto/gameroil/product2.png",
    icon: "/moto/gameroil/icon2.png"
  },
  {
    id: 3,
    title: "Max Oil",
    description: "Engine protection and performance.",
    image: "/moto/gameroil/product3.png",
    icon: "/moto/gameroil/icon3.png"
  }
];

const Products = () => {
  return (
    <section id="products" className="w-full py-16 min-[3800px]:py-25 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-12 xl:gap-16">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-4 max-w-[70%]" data-aos="fade-up">
          <Typography variant="h2" className="font-bold leading-tight text-gray-900">
            Browse Our Product Catalogues
          </Typography>
          <Typography variant="p" className="leading-relaxed text-gray-600">
            Browse Gameroil's complete collection of premium lubricant catalogues. Discover detailed product specifications, applications, and performance solutions across our trusted brands.
          </Typography>
        </div>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {catalogues.map((item, index) => (
            <div
              key={item.id}
              className={`group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 ${index === 2 ? "md:col-span-2 lg:col-span-1 md:w-[calc(50%-12px)] md:mx-auto lg:w-full lg:mx-0" : ""
                }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Container with Icon */}
              <div className="relative w-full aspect-[4/3] p-3  sm:aspect-video lg:aspect-[4/3] ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg"
                />

                {/* Icon Absolute Positioned Bottom Left */}
                <div className="absolute bottom-[-25px] min-[2500px]:bottom-[-48px] min-[3800px]:bottom-[-80px] left-3 min-[2500px]:left-10 min-[3800px]:left-16 w-16 h-16 min-[2500px]:w-24 min-[2500px]:h-24 min-[3800px]:w-40 min-[3800px]:h-40 bg-primary rounded-full shadow-lg flex items-center justify-center p-3 min-[2500px]:p-5 min-[3800px]:p-8 transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={item.icon}
                    alt="Icon"
                    className="w-full h-full object-contain brightness-0 invert"
                  />
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-col pt-12 min-[2500px]:pt-20 min-[3800px]:pt-[120px] pb-6 px-6 sm:px-8 min-[2500px]:px-12 min-[3800px]:px-16 flex-grow">
                <div className="flex flex-col items-center text-center gap-2 mb-8">
                  <Typography variant="h3" className="font-bold text-gray-900">
                    {item.title}
                  </Typography>
                  <Typography variant="p" className="text-gray-600 text-sm">
                    {item.description}
                  </Typography>
                </div>

                {/* Read More Link */}
                <div className="mt-auto flex justify-end w-full">
                  <Link href="#products" className="group/link flex items-center transition-colors">
                    <Typography variant="h4" className="text-primary font-secondary underline font-bold text-sm tracking-wide group-hover/link:text-primary-hover">
                      ReadMore
                    </Typography>
                  </Link>
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
