"use client";

import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Button from './Button';

const products = [
  { id: '1', title: 'AVF1114C', image: '/moto/mistral/1.png' },
  { id: '2', title: 'AVF1114', image: '/moto/mistral/2.png' },
  { id: '3', title: 'AVF1233C', image: '/moto/mistral/3.png' },
  { id: '4', title: 'AVF1233', image: '/moto/mistral/4.png' },
  { id: '5', title: 'AVF1407', image: '/moto/mistral/5.png' },
  { id: '6', title: 'AVF5103C', image: '/moto/mistral/6.png' },
  { id: '7', title: 'AVF5601', image: '/moto/mistral/7.png' },
  { id: '8', title: 'AVF5602', image: '/moto/mistral/8.png' },
];

export default function ProductRange() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // offsetWidth exactly matches the visible screen width, 
      // perfectly scrolling 1 item on mobile or 4 items (2 cols) on tablet!
      const scrollAmount = container.offsetWidth;
      
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#F5F5F5]">
      <div className="custom-container">
        {/* Header */}
        <div className="flex justify-between items-end mb-4">
          <div className="flex items-center gap-3">
            <img src="/moto/mistral/Polygon.png" alt="" className="w-7 h-7 object-contain" />
           <h2 className="section-title text-[#212121] font-medium tracking-wide">
              Our Product Range
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => scroll('left')}
              className="group w-8 h-8 rounded-full border-[2px] border-[#E40C19] flex items-center justify-center text-[#E40C19] hover:bg-[#D82222] hover:text-white transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 animate-move-left" strokeWidth={2.5} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="group w-8 h-8 rounded-full border-[2px] border-[#E40C19] flex items-center justify-center text-[#E40C19] hover:bg-[#D82222] hover:text-white transition-all duration-300"
            >
              <ArrowRight className="w-4 h-4 animate-move-right" strokeWidth={2.5} />
            </button>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-[1.7px] bg-[#0D3374] mb-10"></div>
        
        {/* Product Cards Carousel */}
        <div 
          ref={scrollContainerRef}
          className="grid gap-4 overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar grid-flow-col grid-rows-1 auto-cols-[100%] md:grid-rows-2 md:auto-cols-[calc(50%-8px)] xl:grid-rows-1 xl:auto-cols-[calc(25%-12px)]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product, index) => (
            <div 
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="w-full h-full bg-white snap-start shadow-sm flex flex-col"
            >
              <div className="w-full h-[240px] md:h-[400px]  flex items-center justify-center overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover py-5 px-4"
                />
              </div>
              <div className="w-[95%] mx-auto h-[1px] bg-gray-300"></div>
              
              <div className="flex flex-col items-center p-5 pt-6 pb-6">
                <h3 className="oswald-font font-medium number-text mb-5 text-[#000000]">
                  {product.title}
                </h3>

                <Link 
                  href="#" 
                  className="bg-[#0D3374] section-text font-medium text-white rounded-full px-4 w-[90%] !py-2.5 text-center oswald-font hover:bg-[#092556] transition-colors"
                >
                  View Product
                </Link>
                
              </div>
            </div>
          ))}
        </div>
        
      </div>
      
      {/* Utility style to hide scrollbar but keep functionality */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
