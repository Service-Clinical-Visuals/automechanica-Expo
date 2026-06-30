import React from "react";
import Image from "next/image";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function ResearchDevelopment() {
  const cards = [
    {
      title: "Many years of experience and know-how",
      description: "In recent years, we have developed several proprietary products for renowned vehicle manufacturers who sought our collaboration due to the high technical demands placed on their products. We would also be pleased to research suitable and effective solutions for you."
    },
    {
      title: "Findings from the in-house laboratory",
      description: "For research and development purposes, CTP GmbH has its own technology center and an analytical laboratory equipped with state-of-the-art analytical and measurement technology. Here, complex procedures such as gas chromatography, materials testing, emission measurements, and oil and water analyses can be carried out quickly and easily."
    },
    {
      title: "Highest standards for in-house production",
      description: "In 2006 and 2018, CTP GmbH was nominated for the Innovation Award of the Free State of Thuringia. Together with the Fraunhofer Institute, we implemented projects such as 'Process and Device for the Removal of Deposits in Combustion Engines' and received second prize for this achievement."
    }
  ];

  return (
    <section className="relative w-full min-h-[700px] py-20 md:py-28 flex items-center overflow-hidden researchdevelopmentbg">
      <div className="custom-container relative z-10 w-full">
        {/* Header Section */}
        <div className="flex justify-center items-center mb-16 md:mb-20" data-aos="fade-up">
          <div className="flex items-center gap-3">
            <Image 
              src="/moto/bluechem/arrow.png" 
              alt="Arrow Icon" 
              width={24} 
              height={24} 
              className="object-contain brightness-0 invert"
            />
            <h2 className="text-[#ffffff] oswald font-semibold text-3xl md:text-4xl lg:text-[32px] 4xl:text-[36px]">
              Research & Development
            </h2>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8 w-full">
          {cards.map((card, index) => (
            <div 
              key={index} 
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`bg-[#0E4194]/35 border border-white/10 rounded-2xl p-8 xl:p-10 flex flex-col items-center text-center shadow-2xl transition-transform duration-300 hover:-translate-y-2 ${
                index === 2 ? "md:col-span-2 xl:col-span-1 md:w-[calc(50%-12px)] md:mx-auto xl:w-full xl:mx-0" : ""
              }`}
            >
              
               <h3 className="text-[#ffffff] oswald font-semibold text-xl md:text-2xl text-center mb-6 leading-tight min-h-[56px] flex items-center justify-center">
                {card.title}
              </h3>
              <p className="text-gray-200 oxanium font-medium text-[15px] sm:text-[16px] lg:text-[18px] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
