"use client";

import React, { useState, useEffect } from "react";
import Button from "./Button";

const products = [
  {
    id: 1,
    title: "OL2239E",
    description: "OL2239E is a metal-free eco oil filter designed for efficient engine protection and reliable OE-quality performance.",
    image: "/moto/tecneco/1.png"
  },
  {
    id: 2,
    title: "AR3204",
    description: "The Tecneco AR3204 is a heavy-duty industrial air filter designed to deliver superior airflow, and long-lasting filtration performance.",
    image: "/moto/tecneco/2.png"
  },
  {
    id: 3,
    title: "AR1827PMS",
    description: "Flat-panel air filter designed for passenger vehicles, delivering efficient airflow and dependable engine protection.",
    image: "/moto/tecneco/3.png"
  },
  {
    id: 4,
    title: "CK1361C",
    description: "Flat-panel cabin filter designed to provide cleaner cabin air and reliable filtration for passenger vehicles.",
    image: "/moto/tecneco/4.png"
  },
  {
    id: 5,
    title: "AM200",
    description: "Flat-panel air filter for recreational vehicles, delivering efficient airflow and dependable engine protection.",
    image: "/moto/tecneco/5.png"
  },
  {
    id: 6,
    title: "OL1495",
    description: "Heavy-duty spin-on oil filter designed for reliable engine protection and long-lasting filtration performance.",
    image: "/moto/tecneco/6.png"
  },
  {
    id: 7,
    title: "AM233",
    description: "Flat-panel air filter for recreational vehicles, delivering efficient airflow and reliable engine protection.",
    image: "/moto/tecneco/7.png"
  },
  {
    id: 8,
    title: "HYD102",
    description: "Heavy-duty hydraulic oil filter designed for efficient contaminant removal and reliable hydraulic system protection.",
    image: "/moto/tecneco/8.png"
  }
];

export default function OurProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1280) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = products.length - itemsPerView;
        if (prevIndex >= maxIndex) return 0;
        return prevIndex + 1;
      });
    }, 4000); // auto slide every 4 seconds

    return () => clearInterval(timer);
  }, [itemsPerView]);

  const maxIndex = Math.max(0, products.length - itemsPerView);
  
  // Calculate total pages for dots
  const totalDots = Math.ceil(products.length / itemsPerView);
  const currentDot = Math.min(Math.floor(currentIndex / itemsPerView), totalDots - 1);

  const goToDot = (dotIndex: number) => {
    const newIndex = dotIndex * itemsPerView;
    setCurrentIndex(Math.min(newIndex, maxIndex));
  };

  return (
    <section className="py-20 md:py-28 bg-white w-full overflow-hidden">
      <div className="custom-container">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="section-title text-primary font-bold mb-6 font-sora">
            Our Product Range
          </h2>
          <p className="section-text text-gray-700 leading-relaxed font-lato">
            Discover Tecneco Filtri's comprehensive range of premium filtration solutions engineered to protect vehicle systems and optimize performance. From air and cabin filters to oil, fuel, and transmission filters, every product is manufactured to OE-quality standards, delivering reliable protection, superior filtration efficiency, and long-lasting durability for a wide variety of automotive applications.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative" data-aos="fade-up" data-aos-delay="100">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="px-3"
                  style={{ minWidth: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-white border border-gray-100 shadow-lg p-3 h-full flex flex-col transition-all duration-300 hover:shadow-xl">
                    {/* Image Container with light gray bg */}
                    <div className=" aspect-[4/3] w-full mb-6 flex items-center justify-center  overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-full object-contain mix-blend-multiply hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow flex flex-col pl-3">
                      <h3 className="card-title sora font-semibold text-primary mb-3">
                        {product.title}
                      </h3>
                      <p className="section-text text-primary-2 lato font-medium mb-6 flex-grow leading-relaxed">
                        {product.description}
                      </p>
                      
                      {/* Button */}
                      <div className="text-center mt-auto mb-3">
                        <Button href="#" variant="primary" className=" px-6 py-2">
                          View Product
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          {totalDots > 1 && (
            <div className="flex justify-center items-center gap-3 mt-12">
              {Array.from({ length: totalDots }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToDot(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentDot === index 
                      ? "bg-primary w-4 h-4" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
