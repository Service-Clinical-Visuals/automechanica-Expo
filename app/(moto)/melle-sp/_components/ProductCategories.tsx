"use client";

import React, { useState } from "react";
import { Image as ImageIcon } from "lucide-react";
import Container from "./Container";
import Typography from "./Typography";
import Button from "./Button";
import SectionNumber from "./SectionNumber";

const categories = [
  { name: "New Products", active: true },
  { name: "Automotive", active: false },
  { name: "Industry", active: false },
  { name: "Agriculture", active: false },
  { name: "Home & Construction", active: false },
  { name: "Fragrances Car", active: false },
  { name: "Padlogi", active: false },
];

const initialProducts = [
  {
    title: "K2 CAYON COLA 700ml",
    path: "/moto/melle-sp/product-1.png",
    description: "K2 Cayon is a universal spray air freshener with an exceptionally intense fragrance, achieved thanks to a high concentration of perfume composition. It effectively neutralizes unpleasant odours, instantly refreshing the air and giving it a pleasant, long-lasting scent.",
    placeholderLabel: "Cayon Bottle",
  },
  {
    title: "K2 SILO SANITARY SILICONE GREY 300ml",
    path: "/moto/melle-sp/product-2.png",
    description: "Grey sanitary silicone is a waterproof, acetic-based sealant resistant to mould and fungi. Recommended for sealing in high humidity areas (bathrooms, kitchens, etc.), creating durable seals with excellent resistance.",
    placeholderLabel: "Silicone Tube",
  },
  {
    title: "K2 SCUBO PRO",
    path: "/moto/melle-sp/product-3.png",
    description: "K2 SCUBO PRO is a compact, double-sided cleaning pad that effectively removes dirt from glass surfaces, mirrors, and displays. Designed for lint-free, streak-free cleaning with maximum durability and ease of use in professional detailing.",
    placeholderLabel: "Scubo Pad",
  },
  {
    title: "K2 07 DISPLAY SET",
    path: "/moto/melle-sp/product-4.png",
    description: "The K2 07 cardboard display is a ready-made merchandising solution that allows for attractive, high-visibility presentation of K2 products in retail stores, gas stations, or workshops, boosting sales and promoting brand awareness.",
    placeholderLabel: "07 Display",
  },
];

export default function ProductCategories() {
  const [activeCategory, setActiveCategory] = useState("New Products");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden" id="product-categories">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Dark Sidebar (Categories List) */}
          <div className="lg:col-span-3 flex flex-col bg-[#232323] rounded-2xl overflow-hidden shadow-lg h-fit px-5 py-6" data-aos="fade-right">
            <div className="flex flex-col w-full space-y-4">
              {categories.map((cat, index) => {
                const isActive = cat.name === activeCategory;
                return (
                  <React.Fragment key={cat.name}>
                    <button
                      onClick={() => setActiveCategory(cat.name)}
                      className={`w-full py-3 px-4 text-sm sm:text-base font-montserrat font-medium text-center transition-all duration-300 m-0 ${
                        isActive 
                          ? "bg-primary text-white" 
                          : "text-white hover:text-primary"
                      }`}
                    >
                      {cat.name}
                    </button>
                    {index < categories.length - 1 && (
                      <div className="border-b border-white/45 w-full" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Right Column: Grid and Header */}
          <div className="lg:col-span-9 flex flex-col justify-between" data-aos="fade-up">
            <div>
              {/* Product Header Row (Title and CTA Button) */}
              <div className="flex flex-row justify-between items-center mb-8 border-b border-gray-100 pb-4">
                <Typography variant="h2" color="dark" weight="semibold" className="font-montserrat leading-tight text-2xl md:text-3.5xl text-[#1a1a1a]">
                  Products
                </Typography>
              </div>

              {/* Products 2x2 Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {initialProducts.map((prod, index) => {
                  const isHovered = hoveredIndex === index;
                  const shouldHideOnDesktop = hoveredIndex !== null && (
                    hoveredIndex % 2 === index % 2 && index !== hoveredIndex
                  );

                  return (
                    <div 
                      key={prod.title}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`flex flex-row items-center border border-primary rounded-none p-5 md:p-6 transition-all duration-500 group cursor-pointer ${
                        shouldHideOnDesktop ? "md:hidden" : ""
                      } ${
                        isHovered 
                          ? "md:bg-primary md:text-white md:row-span-2 md:h-full shadow-lg" 
                          : "bg-white text-dark md:row-span-1 shadow-md hover:shadow-lg"
                      } ${
                        index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                      } ${
                        isHovered ? "md:row-start-1" : index < 2 ? "md:row-start-1" : "md:row-start-2"
                      }`}
                    >
                      {/* Left: Product Image */}
                      <div className={`aspect-square rounded-none overflow-hidden shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.15)] bg-white transition-all duration-500 scale-100 ${
                        isHovered
                          ? "md:w-0 md:mr-0 md:opacity-0 md:scale-0 md:pointer-events-none w-[110px] sm:w-[130px] mr-5 sm:mr-6"
                          : "w-[110px] sm:w-[130px] mr-5 sm:mr-6"
                      }`}>
                        <img src={prod.path} alt={prod.placeholderLabel} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>

                      {/* Right: Product Text details */}
                      <div className="space-y-3 flex-grow transition-all duration-500">
                        <Typography 
                          variant="h5" 
                          color="dark" 
                          weight="bold" 
                          className={`text-[14px] md:text-[15px] leading-snug font-montserrat font-bold uppercase transition-colors duration-300 ${
                            isHovered ? "md:text-white text-[#1a1a1a]" : "text-[#1a1a1a]"
                          }`}
                        >
                          {prod.title}
                        </Typography>
                        <Typography 
                          variant="body" 
                          color="body" 
                          className={`text-[12px] md:text-[13px] leading-relaxed transition-all duration-300 ${
                            isHovered 
                              ? "md:text-white md:line-clamp-none text-gray-600 line-clamp-3" 
                              : "text-gray-600 line-clamp-3"
                          }`}
                        >
                          {prod.description}
                        </Typography>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </Container>

      <SectionNumber number="03" position="right" />
    </section>
  );
}
