"use client";

import React, { useState } from "react";
import Link from "next/link";

const products = [
  {
    title: "EGTS",
    description: "BREMI exhaust gas temperature sensors provide precise temperature measurements and help to increase efficiency.",
    image: "/moto/bremi/1.png"
  },
  {
    title: "Glow Plugs",
    description: "Our glow plugs ensure reliable engine starting and optimum heating performance under extreme conditions.",
    image: "/moto/bremi/2.png"
  },
  {
    title: "Crankshaft Sensors",
    description: "BREMI cam and crankshaft sensors provide you with maximum precision for optimum engine control. Perfect for your engine.",
    image: "/moto/bremi/3.png"
  },
  {
    title: "Ignition Cables",
    description: "BREMI ignition cables and ignition cable sets offer reliable power transmission and optimum ignition performance.",
    image: "/moto/bremi/4.png"
  },
  {
    title: "Mass Air Flow Sensors",
    description: "BREMI mass air flow sensors guarantee precise measurements and improve engine performance and fuel efficiency.",
    image: "/moto/bremi/5.png"
  },
  {
    title: "Wheel Speed Sensors",
    description: "Our wheel speed sensors offer maximum safety and reliability for your vehicle. For the best balance for your car.",
    image: "/moto/bremi/6.png"
  },
  {
    title: "Rotors",
    description: "The BREMI ignition distributor rotor guarantees reliable ignition current distribution and optimum engine performance.",
    image: "/moto/bremi/7.png"
  },
  {
    title: "Boost Pressure Sensors",
    description: "BREMI intake manifold and boost pressure sensors provide precise pressure measurements for improved engine performance.",
    image: "/moto/bremi/8.png"
  },
  {
    title: "Distributor Caps",
    description: "Our BREMI distributor caps offer reliable protection and efficient ignition current distribution. Click here to learn more.",
    image: "/moto/bremi/9.png"
  },
  {
    title: "Ignition Coils",
    description: "BREMI ignition coils guarantee powerful ignition and improved engine performance. Click here for more information.",
    image: "/moto/bremi/10.png"
  }
];

export default function ProductRange() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const setSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="pt-20 xl:pt-20 w-full bg-[#1e1e1e]">
      <div className="custom-container overflow-hidden">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16" data-aos="fade-up">
          <h2 className="section-title text-[#E72E39] mb-6 inline-block border-b-2 border-[#E72E39] pb-1">
            Explore Our Product Range
          </h2>
          <p className="section-text text-gray-300 leading-[1.6]">
            Explore Our Comprehensive Range Of Automotive Components, Developed With Advanced Engineering And Premium Materials To Deliver Superior Performance, Durability, And Reliability. Every Product Is Rigorously Tested To Ensure Consistent Quality And Dependable Operation For Modern Vehicles.
          </p>
        </div>

        {/* Product Carousel */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out w-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {/* Slide 1 */}
            <div className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 2xl:grid-cols-5 gap-4 lg:gap-6">
              {products.slice(0, 5).map((product, index) => (
                <div
                  key={index}
                  className={`bg-white relative p-4 lg:p-5 flex flex-col h-full group xl:col-span-2 2xl:col-span-1 ${index === 3 ? "xl:col-start-2 2xl:col-start-auto" : "" } ${index === 4 ? "sm:col-span-2 sm:w-[calc(50%-8px)] sm:mx-auto xl:w-auto xl:mx-0" : "" }`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Red Triangle in top left with black diagonal border */}
                  <div className="absolute top-0 left-0 w-[40px] h-[40px] lg:w-[45px] lg:h-[45px] z-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full preserveAspectRatio-none">
                      <polygon points="0,0 100,0 0,100" fill="#E72E39" />
                      <line x1="100" y1="0" x2="0" y2="100" stroke="#000000" strokeWidth="6" />
                    </svg>
                  </div>

                  {/* Image Container */}
                  <div className="w-full aspect-square border border-gray-100 flex items-center justify-center p-4 mb-2 transition-transform duration-300 group-hover:shadow-md">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow mt-2">
                    <h3 className="card-title text-[#333333] mb-3 pb-3 border-b border-gray-200">{product.title}</h3>
                    <p className="card-text text-[#6E777D] leading-[1.6] mb-1 flex-grow">
                      {product.description}
                    </p>
                    <Link href="#" className="btn-text text-[#E72E39] hover:underline tracking-wide mt-2 lg:mt-4 underline inline-block">
                      Read More &gt;&gt;
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Slide 2 */}
            <div className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 2xl:grid-cols-5 gap-4 lg:gap-6">
              {products.slice(5, 10).map((product, index) => (
                <div
                  key={index + 5}
                  className={`bg-white relative p-4 lg:p-5 flex flex-col h-full group xl:col-span-2 2xl:col-span-1 ${index === 3 ? "xl:col-start-2 2xl:col-start-auto" : "" } ${index === 4 ? "sm:col-span-2 sm:w-[calc(50%-8px)] sm:mx-auto xl:w-auto xl:mx-0" : "" }`}
                >
                  {/* Red Triangle in top left with black diagonal border */}
                  <div className="absolute top-0 left-0 w-[40px] h-[40px] lg:w-[45px] lg:h-[45px] z-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full preserveAspectRatio-none">
                      <polygon points="0,0 100,0 0,100" fill="#E72E39" />
                      <line x1="100" y1="0" x2="0" y2="100" stroke="#000000" strokeWidth="6" />
                    </svg>
                  </div>

                  {/* Image Container */}
                  <div className="w-full aspect-square border border-gray-100 flex items-center justify-center p-4 mb-2 transition-transform duration-300 group-hover:shadow-md">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow mt-2">
                    <h3 className="card-title text-[#333333] mb-3 pb-3 border-b border-gray-200">{product.title}</h3>
                    <p className="card-text text-[#6E777D] leading-[1.6] mb-1 flex-grow">
                      {product.description}
                    </p>
                    <Link href="#" className="btn-text text-[#E72E39] hover:underline tracking-wide mt-2 lg:mt-4 underline inline-block">
                      Read More &gt;&gt;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicator Lines */}
        <div className="flex justify-center items-center gap-1.5 mt-12 lg:mt-16">
          <button onClick={() => setSlide(0)} className={`h-2.5 w-16 transition-colors transform -skew-x-[25deg] ${currentSlide === 0 ? 'bg-[#E72E39]' : 'bg-gray-400 hover:bg-gray-300'}`} aria-label="Slide 1"></button>
          <button onClick={() => setSlide(1)} className={`h-2.5 w-16 transition-colors transform -skew-x-[25deg] ${currentSlide === 1 ? 'bg-[#E72E39]' : 'bg-gray-400 hover:bg-gray-300'}`} aria-label="Slide 2"></button>
        </div>
      </div>
    </section>
  );
}
