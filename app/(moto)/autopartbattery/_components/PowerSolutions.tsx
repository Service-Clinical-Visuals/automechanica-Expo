"use client";
import React, { useState, useEffect } from "react";
import { Download } from "lucide-react";
import Button from "./Button";

export default function PowerSolutions() {
  const [activeCategoryId, setActiveCategoryId] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    { id: 1, name: "Passenger Cars & vans" },
    { id: 2, name: "Trucks & Buses" },
    { id: 3, name: "Tractors & Agricultural Machines" },
    { id: 4, name: "Boats & Campers" },
  ];

  const categoryProducts: Record<number, Array<{ id: string; name: string; image: string }>> = {
    1: [
      { id: "1", name: "EFB II", image: "/moto/autopartbattery/1.png" },
      { id: "2", name: "Silver", image: "/moto/autopartbattery/2.png" },
      { id: "3", name: "Gold", image: "/moto/autopartbattery/3.png" },
      { id: "4", name: "Plus", image: "/moto/autopartbattery/4.png" },
      { id: "5", name: "SMF Japanese", image: "/moto/autopartbattery/5.png" },
      { id: "6", name: "SMF", image: "/moto/autopartbattery/6.png" },
    ],
    2: [
      { id: "7", name: "Plus Heavy Duty", image: "/moto/autopartbattery/7.png" },
      { id: "8", name: "Gold Super Heavy Duty", image: "/moto/autopartbattery/8.png" },
      { id: "9", name: "EFB EVR", image: "/moto/autopartbattery/9.png" },
      { id: "10", name: "Plus Truck", image: "/moto/autopartbattery/10.png" },
      { id: "11", name: "EFB SMF", image: "/moto/autopartbattery/11.png" },
    ],
    3: [
      { id: "12", name: "Plus Agro", image: "/moto/autopartbattery/12.png" },
      { id: "13", name: "Garden", image: "/moto/autopartbattery/13.png" },
      
    ],
    4: [
      { id: "14", name: "Voyager", image: "/moto/autopartbattery/14.png" },
      { id: "15", name: "DUAL", image: "/moto/autopartbattery/15.png" },
      
    ],
  };

  const currentProducts = categoryProducts[activeCategoryId] || [];
  // Calculate total slides (assuming 3 items per view on desktop, 2 on tablet, 1 on mobile)
  // Using 3 as default desktop items per slide
  const totalSlides = Math.ceil(currentProducts.length / 3);

  // Auto slide timer
  useEffect(() => {
    if (totalSlides <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const handleCategoryChange = (catId: number) => {
    setActiveCategoryId(catId);
    setCurrentSlide(0);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50/50 w-full border-b border-gray-100 overflow-hidden">
      <div className="custom-container flex flex-col items-center">
        
        {/* Section Title */}
        <h2 
          className="oswald-font text-[#000000] section-title font-semibold  tracking-wide mb-6 text-center"
          data-aos="fade-up"
        >
          Power Solutions for Every Journey
        </h2>

        {/* Section Paragraph */}
        <p 
          className="lato-font text-[#333333] section-text font-normal max-w-7xl mx-auto mb-12 leading-relaxed text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Explore AUTOPART&apos;s comprehensive range of high-performance starter batteries, engineered to deliver reliable starting power, long-lasting durability, and dependable performance across passenger cars, commercial vehicles, agricultural machinery, boats, and camper vans. Designed with advanced technology and manufactured to the highest quality standards, our batteries provide the confidence to power every drive.
        </p>

        {/* Main 2-Column Grid Area */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          
          {/* Left Sidebar: Categories Card + Download Catalogue Button */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col gap-5 w-full">
            
            {/* Categories Card */}
            <div className="bg-white rounded-3xl border border-gray-200/80 shadow-lg p-6 md:p-8 flex flex-col items-center text-center">
              <h3 className="oswald-font card-title font-semibold mb-6 text-[#000000] tracking-wide">
                Categories
              </h3>
              
              <div className="flex flex-col gap-3.5 w-full">
                {categories.map((cat) => {
                  const isActive = activeCategoryId === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`py-3 px-4 rounded-xl oswald-font tracking-wide font-normal card-title1 transition-all duration-300 w-full text-center select-none cursor-pointer ${
                        isActive 
                          ? "bg-[#15468e] text-white shadow-md font-normal scale-[1.02]" 
                          : "bg-gray-200/70 hover:bg-gray-300/80 text-[#1F2A44] hover:scale-[1.01]"
                      }`}
                    >
                      {cat.name}
                    </button>
                  );
                })}
              </div>

              <div className=" mt-8 mb-8">
                <Button href="#" variant="red" className="w-full justify-center">
                  View All Product
                </Button>
              </div>
            </div>

            {/* Download Catalogue Button */}
            <a 
              href="#" 
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl border-2 border-[#EE2A35]/30 bg-white hover:bg-red-50 text-[#E11938] font-normal oswald-font headr-link transition-all duration-300 shadow-sm hover:shadow group cursor-pointer"
            >
              <span>Download Catalogue</span>
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
            </a>

          </div>

          {/* Right Area: Product Slider Container */}
          <div className="lg:col-span-9 xl:col-span-9 bg-white rounded-3xl border border-gray-200/80 shadow-lg p-6 md:p-8 xl:p-10 flex flex-col justify-between overflow-hidden relative min-h-[520px]">
            
            {/* Carousel Styles */}
            <style>{`
              .product-track { transform: translateX(calc(var(--current-slide) * -100%)); }
            `}</style>

            {/* Slider Track Container */}
            <div className="w-full overflow-hidden relative flex-grow">
              <div 
                className="flex transition-transform duration-700 ease-in-out h-full product-track"
                style={{ "--current-slide": currentSlide } as React.CSSProperties}
              >
                {/* Divide products into slides of 3 items for desktop */}
                {Array.from({ length: totalSlides }).map((_, slideIdx) => {
                  const slideProducts = currentProducts.slice(slideIdx * 3, (slideIdx + 1) * 3);
                  return (
                    <div 
                      key={slideIdx} 
                      className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-1 h-full items-stretch"
                    >
                      {slideProducts.map((prod) => (
                        <div 
                          key={prod.id} 
                          className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col items-center justify-between text-center group flex-grow"
                        >
                          {/* Image Box */}
                          <div className="w-full aspect-square bg-gray-100/80 rounded-xl  mb-5 p-4 flex items-center justify-center overflow-hidden relative">
                            <img 
                              src={prod.image} 
                              alt={prod.name} 
                              className="w-[88%] h-auto object-contain transition-transform duration-500 group-hover:scale-110 z-10"
                             
                            />
                          </div>

                          {/* Product Title */}
                          <h4 className="oswald-font text-[#000000] font-semibold card-title1 leading-snug min-h-[50px] flex items-center justify-center">
                            {prod.name}
                          </h4>

                          {/* View Product CTA */}
                          <div className="mt-auto flex justify-center">
                            <Button href="#" variant="red" className="w-full justify-center py-2.5 ">
                              View Product
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Slider Dots / Indicator Bars */}
            {totalSlides > 1 && (
              <div className="flex justify-center items-center gap-2.5 mt-8 pt-2">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 md:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentSlide === idx 
                        ? "w-10 md:w-12 bg-[#15468e]" 
                        : "w-5 md:w-6 bg-gray-200 hover:bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
