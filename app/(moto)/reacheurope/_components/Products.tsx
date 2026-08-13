"use client";

import React, { useState } from "react";
import Button from "./Button";

const slides = [
  [
    {
      title: "A/C Compressors",
      image: "/moto/reacheurope/product1.png",
      link: "#"
    },
    {
      title: "Blower Motors",
      image: "/moto/reacheurope/product2.png",
      link: "#"
    },
    {
      title: "AC Components",
      image: "/moto/reacheurope/product3.png",
      link: "#"
    }
  ],
  [
    {
      title: "Intercoolers/CAC",
      image: "/moto/reacheurope/product4.png",
      link: "#"
    },
    {
      title: "Thermostats",
      image: "/moto/reacheurope/product5.png",
      link: "#"
    },
    {
      title: "Heater Cores",
      image: "/moto/reacheurope/product6.png",
      link: "#"
    }
  ]
];

export default function Products() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="py-20 xl:py-20 bg-white">
      <div className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12" data-aos="fade-up">
          <h2 className="section-title text-[#000000] rajdhani-font mb-4">
            Our Product Portfolio
          </h2>
          <p className="lato-font text-[#000000] section-text max-w-7xl mx-auto leading-8 tracking-normal">
            Explore REACH's comprehensive range of automotive thermal management and HVAC components, engineered to deliver superior performance, exceptional durability, and OE-quality reliability. From passenger cars to commercial vehicles and electric mobility, our products are designed to keep every journey running at the optimal temperature.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6" data-aos="fade-up" data-aos-delay="200">
          {slides[currentSlide].map((category, index) => (
            <div
              key={index}
              className="bg-[#1b365d] p-6 lg:p-8 flex flex-col items-center shadow-lg"
            >
              <div className="bg-white w-full aspect-[4/3] flex items-center justify-center mb-6 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-auto h-auto object-cover scale-[1.50] transition-transform duration-500 hover:scale-[1.25]"
                />
              </div>

              <h3 className="card-title text-white rajdhani-font font-bold mb-4 text-center">
                {category.title}
              </h3>

              <Button href={category.link} variant="primary" className="btn-text">
                View Products
              </Button>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-3 mt-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-colors duration-300 ${currentSlide === index ? "bg-[#1b365d]" : "bg-gray-300 hover:bg-gray-400"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
}
