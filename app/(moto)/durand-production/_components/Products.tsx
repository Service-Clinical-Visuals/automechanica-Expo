"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const productsData = [
  {
    id: 1,
    title: "Engine Lubricants",
    description: "Engine Lubricants Engineered For Optimal Performance, Advanced Wear Protection, And Improved Efficiency.",
    image: "/moto/durandProduction/pro1.png",
    link: "#"
  },
  {
    id: 2,
    title: "Marine Lubricants",
    description: "Advanced Marine Lubricants Built For Dependable Protection And Long-Lasting Marine Performance.",
    image: "/moto/durandProduction/pro2.png",
    link: "#"
  },
  {
    id: 3,
    title: "Greases",
    description: "Premium Greases Engineered For Reliable Lubrication, Improved Efficiency, Extended Component Life.",
    image: "/moto/durandProduction/pro3.png",
    link: "#"
  },
  {
    id: 4,
    title: "Industrial Lubricants",
    description: "Industrial Lubricants Designed For Reliable Protection And Efficient Performance.",
    image: "/moto/durandProduction/pro4.png",
    link: "#"
  },
  {
    id: 5,
    title: "Small Engine Lubricants",
    description: "Small engine lubricants designed to deliver reliable protection and smooth performance.",
    image: "/moto/durandProduction/pro5.png",
    link: "#"
  },
  {
    id: 6,
    title: "Drivelive Lubricants",
    description: "High-performance DriveLive lubricants designed to enhance durability and optimize engine operation.",
    image: "/moto/durandProduction/pro6.png",
    link: "#"
  },
  {
    id: 7,
    title: "Engine Coolent & Special Product",
    description: "Advanced cooling and specialty solutions engineered for durability and smooth engine operation.",
    image: "/moto/durandProduction/pro7.png",
    link: "#"
  },
];

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4); // Default to desktop

  // Handle responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerPage(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };
    
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ensure we don't slide past the end
  const maxIndex = Math.max(0, productsData.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="w-full py-16 md:py-24" id="products">
      <div className="custom-container">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          {/* Left: Heading with red line */}
          <div className="inline-flex flex-col items-stretch mb-6 md:mb-0" data-aos="fade-right">
            <div className="w-full h-1 bg-[#FF131C] mb-1 md:mb-2"></div>
            <h2 className="text-[#1a1a1a] text-2xl md:text-3xl lg:text-4xl heading font-medium tracking-wider leading-none">
              Products
            </h2>
          </div>
          
          {/* Right: Description */}
          <div className="max-w-md lg:max-w-xl xl:max-w-2xl text-left md:text-right" data-aos="fade-left">
            <p className="text-[#4a4a4a] text-sm md:text-md lg:text-md xl:text-md paragraph leading-[1.8] font-normal">
              Explore Our Range Of Premium Products Designed To Deliver Quality, Performance, And Reliability Across Every Application.
            </p>
          </div>
        </div>

        {/* Cards Carousel */}
        <div className="overflow-hidden relative w-full -mx-3 px-3 py-4">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {productsData.map((product, index) => (
              <div 
                key={product.id}
                className="w-full md:w-1/2 xl:w-1/4 flex-shrink-0 px-3"
              >
                <div 
                  className="bg-white border-[1.5px] border-[#FF131C] hover:border-[#FF131C] transition-all duration-300 hover:shadow-xl p-3 flex flex-col h-full"
                  data-aos="fade-up"
                  data-aos-delay={(index % itemsPerPage) * 100}
                >
                  {/* Image */}
                  <div className="w-full aspect-[16/10] relative overflow-hidden mb-5">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col flex-grow px-2 pb-2">
                    <h3 className="text-[#1a1a1a] text-2xl md:text-3xl heading font-medium mb-2 tracking-wide">
                      {product.title}
                    </h3>
                    <p className="text-[#4a4a4a] text-sm md:text-md lg:text-md xl:text-md paragraph leading-[1.8] font-normal flex-grow mb-6">
                      {product.description}
                    </p>
                    <div className="flex items-center mt-auto">
                      <Link 
                        href={product.link}
                        className="inline-flex items-center gap-3 text-[#FF131C] font-semibold text-[16px] md:text-md paragraph group mt-auto"
                      >
                        View More 
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-4 mt-12">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 flex items-center justify-center transition-all shadow-md bg-[#FF131C] hover:bg-red-700 text-white cursor-pointer"
          >
            <img src="/moto/durandProduction/Arrow 4.png" alt="Arrow Left" className="w-4 h-4 animate-bounce-left" />
          </button>
          <button 
            onClick={handleNext}
            className="w-12 h-12 flex items-center justify-center transition-all shadow-md bg-[#FF131C] hover:bg-red-700 text-white cursor-pointer"
          >
            <img src="/moto/durandProduction/Arrow 3.png" alt="Arrow Right" className="w-4 h-4 animate-bounce-right" />
          </button>
        </div>

      </div>
    </section>
  );
}

