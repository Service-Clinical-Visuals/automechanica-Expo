"use client";

import React, { useState } from "react";
import Button from "./Button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const products = [
  {
    title: "Turbo Kits",
    desc: "Turbo fitting kits are installation sets for turbochargers, including gaskets, bolts, lines, and connectors. They simplify installation and ensure fit and performance.",
    image: "/moto/ajusa/p1.png",
    btnText: "Explore Turbo Kits",
    link: "#"
  },
  {
    title: "Cylinder Head Gasket",
    desc: "A cylinder head gasket seals the engine block and cylinder head, preventing leaks and maintaining compression, and should be replaced in time to avoid engine damage.",
    image: "/moto/ajusa/p2.png",
    btnText: "Explore Cylinder Head Gasket",
    link: "#"
  },
  {
    title: "Gasket Kit",
    desc: "Ajusa provides over 200,000 OE-quality gasket references for reliable sealing in passenger and industrial vehicles.",
    image: "/moto/ajusa/p3.png",
    btnText: "Explore Gaskets",
    link: "#"
  },
  {
    title: "Hydraulic Lifters",
    desc: "Hydraulic lifters automatically adjust valve clearance for smooth, efficient engine performance. Ajusa lifters are durable and reliable under demanding conditions.",
    image: "/moto/ajusa/p4.png",
    btnText: "Explore Hydraulic Lifters",
    link: "#"
  },
  {
    title: "Cylinder Head Bolts",
    desc: "Cylinder head bolts secure the head to the block, ensuring sealing and compression. Ajusa bolts deliver high strength and reliable clamping.",
    image: "/moto/ajusa/p5.png",
    btnText: "Explore Cylinder Head Bolts",
    link: "#"
  },
  {
    title: "Oil Seals",
    desc: "Oil seals prevent leaks and protect components from contamination, ensuring durable, reliable performance.",
    image: "/moto/ajusa/p6.png",
    btnText: "Explore Oil Seals",
    link: "#"
  }
];

export default function Products() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const currentProducts = products.slice(
    currentSlide * itemsPerSlide,
    (currentSlide + 1) * itemsPerSlide
  );

  return (
    <section className="py-20 xl:py-20 bg-white">
      <div className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12" data-aos="fade-up">
          <div className="flex flex-col mb-4">
            <div className="w-[64px] h-[2px] bg-[#054279] mb-1"></div>
            <span className="text-[#054279] font-medium section-text poppins-font px-2">Our Product Line</span>
            <div className="w-[64px] h-[2px] bg-[#054279] ml-20 mt-1"></div>
          </div>
          <h2 className="section-title text-[#000000] poppins-font mb-4 font-semibold">
            Discover Our Complete Range
          </h2>
          <p className="inter-font text-[#414141] section-text max-w-4xl mx-auto leading-relaxed">
            We specialize in manufacturing components for internal combustion engines for both passenger and industrial vehicles, while also leading the development of high-quality spare parts for turbo engines.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="200">
          {currentProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white border border-[#CCCCCC] flex flex-col items-center text-center pb-8 shadow-sm transition-transform hover:-translate-y-1"
            >
              <div className="w-full flex items-center justify-center overflow-hidden p-3">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="px-6 flex flex-col flex-grow items-center w-full">
                <h3 className="card-title text-[#000000] poppins-font font-bold mb-3">
                  {product.title}
                </h3>

                <p className="inter-font text-[#414141] text-sm leading-relaxed mb-6 flex-grow">
                  {product.desc}
                </p>

                <Button href={product.link} variant="primary-outline" className="btn-text !w-auto">
                  {product.btnText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots & Arrows */}
        {totalSlides > 1 && (
          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={prevSlide}
              className="text-[#054279] hover:text-[#042e53] transition-colors"
              aria-label="Previous slide"
            >
              <ArrowLeft size={20} strokeWidth={2.5} />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${currentSlide === index ? "bg-[#054279]" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="text-[#054279] hover:text-[#042e53] transition-colors"
              aria-label="Next slide"
            >
              <ArrowRight size={20} strokeWidth={2.5} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
