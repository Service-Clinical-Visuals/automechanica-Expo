"use client";

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductRange() {
  const products = [
    {
      image: "/moto/bbt/pro1.png",
      title: "Ignition coils",
      description: "We supply you reliably with over 300 types of ignition coils for German, European..."
    },
    {
      image: "/moto/bbt/pro2.png",
      title: "Ignition cable sets",
      description: "The production of ignition cables Made in Germany has a long-standing..."
    },
    {
      image: "/moto/bbt/pro3.png",
      title: "Ignition cable sets for LPG/CNG",
      description: "Extensive tests show that the technology of our BBT ignition cables for gas..."
    },
    {
      image: "/moto/bbt/pro4.png",
      title: "Spark plug connector & ignition...",
      description: "We supply you reliably with over 300 types of ignition coils for German, European..."
    },
    {
      image: "/moto/bbt/pro5.png",
      title: "Crankshaft and camshaft sensors",
      description: "With components similar to those in an ignition coil, you also benefit from..."
    },
    {
      image: "/moto/bbt/pro6.png",
      title: "Air flow meters",
      description: "We develop our air flow meters in-house. Through numerous innovations..."
    },
    {
      image: "/moto/bbt/pro7.png",
      title: "Intake manifold pressure sensors",
      description: "The intake manifold pressure sensor measures the negative or positive..."
    },
    {
      image: "/moto/bbt/pro8.png",
      title: "Wheel speed sensors",
      description: "Today’s vehicles are packed with driver assistance systems such as ABS..."
    }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.children[0].clientWidth;
      const gap = 24; // gap-6
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(newIndex);
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0].clientWidth;
      const gap = 24;
      scrollRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  const scrollBy = (direction: 1 | -1) => {
    let newIndex = activeIndex + direction;
    if (newIndex < 0) newIndex = 0;
    if (newIndex > products.length - 1) newIndex = products.length - 1;
    scrollTo(newIndex);
  };

  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden relative">
      <div className="custom-container relative">
        
        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-10 md:mb-14" data-aos="fade-up">
          <h2 className="section-title font-medium oswald-font text-[#0c3274] mb-4">
            Our Product Range
          </h2>
          <p className="lato-font section-text text-[#333333] leading-[1.8] font-medium">
            Our automotive products are engineered for precision, durability, and reliable performance. Manufactured to the highest quality standards, they ensure long-lasting efficiency, seamless compatibility, and dependable operation across a wide range of vehicle applications, delivering consistent results in every driving condition.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">

          {/* Scroll Track */}
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-1 pt-4"
          >
            {products.map((product, index) => (
              <div 
                key={index} 
                className="snap-start shrink-0 w-[85%] sm:w-[45%] lg:w-[calc(33.333%-16px)] flex flex-col relative group cursor-pointer"
                data-aos="fade-up" 
                data-aos-delay={index * 100}
                onClick={() => scrollTo(index)}
              >
                {/* Image Box */}
                <div className="w-full mb-0 flex items-start justify-center">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-auto object-contain object-top relative z-0 p-2" 
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col pt-6 md:pt-8 flex-grow">
                  <h3 className="card-title font-medium oswald-font text-[#0c3274] mb-4 leading-tight">
                    {product.title}
                  </h3>
                  <p className="section-text lato-font text-[#333333] leading-[1.6] font-medium">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center h-4 mt-8" data-aos="fade-up">
          {products.map((_, idx) => {
            const distance = Math.abs(idx - activeIndex);
            
            let classes = "w-0 opacity-0 mx-0 bg-gray-200 pointer-events-none";
            
            if (distance === 0) {
              // Active
              classes = "w-6 opacity-100 mx-1 bg-[#0c3274]";
            } else if (distance === 1) {
              // Adjacent (fully visible)
              classes = "w-6 opacity-100 mx-1 bg-gray-200 hover:bg-gray-300";
            } else if (distance === 2) {
              // Faded at the sides
              classes = "w-3 opacity-40 mx-1 bg-gray-200 hover:bg-gray-300";
            }

            return (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ease-out ${classes}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
