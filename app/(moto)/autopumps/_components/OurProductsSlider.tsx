"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Pumps",
    description: "Our premium water and oil pumps are engineered to deliver efficient fluid circulation, ensuring reliable engine cooling and lubrication. Manufactured to OE-quality standards, they provide consistent performance, durability, and long service life for a wide range of vehicle applications.",
    features: [
      "Efficient Fluid Circulation – Delivers a consistent flow of coolant and oil to maintain optimal engine temperature and lubrication.",
      "OE-Quality Precision – Engineered to original equipment standards for accurate fitment and dependable performance.",
      "Built for Durability – Manufactured from premium materials to withstand demanding operating conditions and extended use."
    ],
    image: "/moto/autopumps/1.png"
  },
  {
    id: 2,
    name: "Cylinder Heads",
    description: "Precision-manufactured cylinder heads are engineered to improve combustion efficiency, maximize engine power, and deliver reliable performance in demanding operating conditions. Built from premium-grade materials and manufactured to OE specifications, they provide exceptional durability, accurate fitment, and long-term engine reliability.",
    features: [
      "Precision-Manufactured Design – Engineered for accurate fitment, improved combustion efficiency, and reliable engine performance across a wide range of applications.",
      "Optimized Engine Performance – Enhances power delivery, fuel efficiency, and overall engine responsiveness for smoother operation.",
      "Exceptional Thermal Stability – Built to withstand extreme temperatures while maintaining strength, durability, and consistent performance."
    ],
    image: "/moto/autopumps/2.png"
  },
  {
    id: 3,
    name: "Bottom End",
    description: "Our bottom-end engine components are designed to deliver outstanding strength, stability, and durability for modern engine applications. Manufactured with precision and high-quality materials, they reduce wear, improve efficiency, and ensure smooth, reliable operation under heavy loads.",
    features: [
      "High-Strength Construction – Precision-engineered to withstand heavy engine loads, high pressures, and demanding operating conditions.",
      "Reduced Component Wear – Minimizes friction and mechanical stress to improve engine durability and extend component lifespan.",
      "Smooth Engine Operation – Provides enhanced stability, reduced vibration, and consistent performance in every driving condition."
    ],
    image: "/moto/autopumps/3.png"
  },
  {
    id: 4,
    name: "Timing",
    description: "Engineered for precise engine synchronization, our timing components ensure accurate valve operation, smooth power delivery, and maximum efficiency. Designed to OE standards, they offer exceptional durability and reliable performance throughout the engine's service life.",
    features: [
      "Accurate Engine Synchronization – Ensures precise coordination of engine components for smooth, efficient, and reliable performance.",
      "Enhanced Performance – Optimizes power delivery, fuel efficiency, and engine responsiveness under all operating conditions.",
      "OE-Quality Engineering – Designed and tested to meet original equipment specifications for dependable long-term performance."
    ],
    image: "/moto/autopumps/4.png"
  },
  {
    id: 5,
    name: "Gaskets & Seals",
    description: "Our premium gaskets and seals are manufactured to provide superior leak protection while maintaining engine integrity under extreme temperatures and pressure. Designed for OE-quality performance, they ensure long-lasting durability and reliable sealing in demanding applications.",
    features: [
      "Superior Leak Protection – Provides a secure and reliable seal to prevent fluid leakage and maintain optimal engine performance.",
      "Resistant to Extreme Conditions – Engineered to perform under high temperatures, pressure, and demanding operating environments.",
      "Long-Lasting Durability – Manufactured from premium materials to deliver consistent sealing performance throughout the product's lifespan."
    ],
    image: "/moto/autopumps/5.png"
  },
  {
    id: 6,
    name: "Lubrication",
    description: "Our lubrication components are engineered to maintain consistent oil circulation, reduce friction, and protect vital engine parts from wear. Designed for maximum efficiency and durability, they help extend engine life while ensuring dependable performance in all driving conditions.",
    features: [
      "Consistent Oil Distribution – Maintains continuous oil flow to protect critical engine components and ensure efficient lubrication.",
      "Enhanced Engine Protection – Safeguards vital moving parts against heat, friction, and demanding operating conditions.",
      "Extended Service Life – Supports improved engine durability, reduced maintenance requirements, and dependable long-term performance."
    ],
    image: "/moto/autopumps/6.png"
  }
];

export default function OurProductsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#037CAF] to-[#0B274A]">
      <div className="custom-container">
        
        {/* Top Section */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-16">
          <h2 className="section-title  text-white mb-6">
            Our Products
          </h2>
          <p className="section-text text-white leading-relaxed">
            Explore our extensive range of premium engine components, engineered to meet OE-quality standards for precision, durability, and dependable performance. From pumps and cylinder heads to timing systems, cooling, lubrication, and valve train components, every product is designed to deliver reliable operation and long-lasting efficiency across a wide range of automotive applications.
          </p>
        </div>

        {/* Slider Section */}
        <div className="relative w-full max-w-[1500px] mx-auto flex items-center justify-center md:px-20 xl:px-24 ">
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-1 sm:left-2 md:left-4 z-20 flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-full bg-white text-[#064da1] hover:bg-gray-100 transition-colors shadow-lg"
            aria-label="Previous Product"
          >
            <ArrowLeft className="w-5 h-5 md:w-8 md:h-8" strokeWidth={2.5} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-1 sm:right-2 md:right-4 z-20 flex items-center justify-center w-10 h-10 md:w-16 md:h-16 rounded-full bg-white text-[#064da1] hover:bg-gray-100 transition-colors shadow-lg"
            aria-label="Next Product"
          >
            <ArrowRight className="w-5 h-5 md:w-8 md:h-8" strokeWidth={2.5} />
          </button>

          {/* Slider Content */}
          <div className="relative w-full overflow-hidden min-h-[1100px] sm:min-h-[950px] md:min-h-[900px] xl:min-h-[500px]">
            {products.map((product, index) => {
              const isActive = index === currentIndex;
              return (
                <div 
                  key={product.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <div className="bg-white w-full h-full flex flex-col xl:flex-row items-center py-8 px-12 sm:px-14 md:p-12 xl:p-16 shadow-2xl ">
                    
                    {/* Left: Content */}
                    <div className="w-full xl:w-1/2 flex flex-col gap-6 mb-8 xl:mb-0">
                      <h3 className="product-link font-semibold text-[#2a2a2a]">{product.name}</h3>
                      <p className="section-text text-[#4a4a4a] leading-relaxed">
                        {product.description}
                      </p>
                      
                      <ul className="flex flex-col gap-5 mt-2">
                        {product.features.map((feature, idx) => {
                           const [title, desc] = feature.split(' – ');
                           return (
                             <li key={idx} className="flex gap-4 items-start">
                               <div className="mt-1 flex-shrink-0 flex items-center justify-center">
                                  <CheckCircle2 size={24} className="text-white" fill="#064da1" />
                               </div>
                               <p className="section-text text-[#4a4a4a]">
                                 {title} {desc ? `– ${desc}` : ''}
                               </p>
                             </li>
                           );
                        })}
                      </ul>
                    </div>
                    
                    {/* Right: Image */}
                    <div className="w-full xl:w-1/2 h-full flex items-center justify-center">
                      <div className="w-full aspect-square md:aspect-auto md:h-[400px] xl:h-full bg-white flex items-center justify-center">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
