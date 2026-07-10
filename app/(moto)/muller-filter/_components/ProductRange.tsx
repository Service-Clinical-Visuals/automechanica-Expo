import React from 'react';
import Button from './Button';

export default function ProductRange() {
  const products = [
    {
      title: "Fuel Filters",
      icon: "/moto/muller-filter/abt1.png",
      image: "/moto/muller-filter/pro1.png",
      desc: "The fuel pump aspirates the fuel from the tank and via a fuel filter pumps it to the carburettor/ injection system.",
      bgColor: "bg-[#E2001A]" // Red
    },
    {
      title: "Oil Filters",
      icon: "/moto/muller-filter/abt2.png",
      image: "/moto/muller-filter/pro2.png",
      desc: "Oil filters are manufactured with cellulose filtering media. Faithfully following the vehicle manufacturer specifications.",
      bgColor: "bg-[#F8B334]" // Orange
    },
    {
      title: "Air Filters",
      icon: "/moto/muller-filter/abt3.png",
      image: "/moto/muller-filter/pro3.png",
      desc: "Designed to deliver clean airflow and reliable engine protection, Muller Air Filters are available in panel, circular, and cylinder.",
      bgColor: "bg-[#39A9DC]" // Blue
    },
    {
      title: "Cabin Filters",
      icon: "/moto/muller-filter/abt4.png",
      image: "/moto/muller-filter/pro4.png",
      desc: "Cabin filter elements are manufactured with synthetic filtering media called NONWOVEN (not cellulose).",
      bgColor: "bg-[#41A624]" // Green
    }
  ];

  return (
    <section className="w-full py-12 lg:py-20 bg">
      <div className="custom-container px-6 lg:px-20 ">
       
        {/* Title */}
        <div className="flex items-center justify-center gap-4 mb-16" data-aos="fade-up">
         <div className="w-1.5 h-10 lg:h-12 bg-[#F3DD01] rounded-full"></div>
          <h2 className="section-title font-bold font-chakra text-[#1e1e1e] tracking-wide">Our Product Range</h2>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-x-6 gap-y-12 lg:gap-x-8 lg:gap-y-14 2xl:gap-10 mb-16 mt-8 ">
          {products.map((item, index) => (
            <div 
              key={index} 
              className={`${item.bgColor} rounded-2xl pt-4 pb-6 px-4 lg:px-6 relative text-white flex flex-col h-full shadow-lg transition-transform duration-300 hover:-translate-y-2`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Overlapping Icon */}
              <div className={`absolute -top-6 left-6 lg:left-8 w-20 h-20 ${item.bgColor} rounded-lg shadow-md border-2 border-white flex items-center justify-center overflow-hidden z-10`}>
                <img src={item.icon} alt={`${item.title} icon`} className="w-full h-full object-contain" />
              </div>

              {/* Card Title */}
              <h3 className="text-center font-bold font-chakra img-text mb-4 mt-2 ml-12 relative z-0">{item.title}</h3>

              {/* Image Box */}
              <div className="mb-6 w-full flex items-center justify-center shadow-inner overflow-hidden">
                <img src={item.image} alt={item.title} className="max-w-full lg:w-full 2xl:w-auto object-cover lg:object-fill 2xl:object-contain hover:scale-110 transition-transform duration-500" />
              </div>

              {/* Description */}
              <p className="!text-[#ffffff] text-center header-link font-mulish leading-[1.6] !font-semibold">
                {item.desc}
              </p>

              {/* Button */}
              <div className="mt-8 text-center">
                <Button href="#" variant="white" className=" section-text  !font-semibold py-2.5 px-6 rounded-lg w-3/4 shadow-[4px_4px_8px_rgba(0,0,0,0.25)]">
                  View Product
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center" data-aos="fade-up">
          <Button href="#" variant="dark" className="py-3.5 px-10 ">
            View All Products
          </Button>
        </div>
      
        
      </div>
    </section>
  );
}
