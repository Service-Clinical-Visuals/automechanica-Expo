import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCategories() {
  const categories = [
    {
      id: "01",
      title: "Motor",
      description: "The combination of highly efficient and innovative components regenerates plastic and rubber seals in the oil circuit and keeps it soft.",
    },
    {
      id: "02",
      title: "Exhaust System",
      description: "Particle Filter Flushing Liquid solves and removes all soot deposition and residues from the particle filter.",
    },
    {
      id: "03",
      title: "Diesel Fuel System",
      description: "Ensures optimum atomization and effect of the diesel fuel and ensures lubrication of the entire system, in particular the high-pressure pump.",
    },
    {
      id: "04",
      title: "Auto Gas fuel System",
      description: "This high-performance product has especially been developed for liquefied petroleum gas (LPG) powered vehicles.",
    },
    {
      id: "05",
      title: "Cooling System",
      description: "Radiator Antifreeze Blue provides year-round protection against freezing, overheating, and corrosion.",
    },
    {
      id: "06",
      title: "Ecopower/Hybrid",
      description: "Hybrid fuel system cleaning is applicable in all hybrid vehicles with gasoline engines.",
    },
  ];

  return (
    <section className="w-full  py-20 md:py-28 lg:py-32 relative overflow-hidden productbg">
      {/* Optional: Add a subtle texture/pattern if available, otherwise solid dark background */}
      
      <div className="custom-container relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-10 md:mb-12" data-aos="fade-up">
          <div className="flex items-center gap-3 mb-6">
            <Image 
              src="/moto/bluechem/arrow.png" 
              alt="Arrow Icon" 
              width={24} 
              height={24} 
              className="object-contain brightness-0 invert"
            />
            <h2 className="text-[#ffffff] oswald font-semibold text-3xl md:text-4xl lg:text-[32px] 4xl:text-[36px]">
              Our Product Categories
            </h2>
          </div>
          
          <p className="text-[#ffffff] max-w-6xl text-[15px] sm:text-[16px] lg:text-[18px] leading-relaxed font-medium oxanium text-center ">
            Designed with advanced formulations and high-quality components, they help deliver consistent results, improved efficiency, and dependable protection in everyday and intensive operating conditions. Built to support long-term performance and durability.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-16">
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-[#fcfcfc] hover:bg-[#0E4194] rounded-md py-4 px-6 md:px-8 flex flex-col justify-between items-center text-center shadow-lg hover:-translate-y-2 transition-all duration-300 min-h-[300px] group border border-gray-100"
            >
              {/* Number Badge (Inside the box) */}
              <div className="w-12 h-12 bg-[#0E4194] group-hover:bg-white rounded-full flex items-center justify-center text-white group-hover:text-[#0E4194] oswald font-semibold text-lg shadow-md transition-colors duration-300 mb-6 shrink-0">
                {category.id}
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col items-center">
                <h3 className="text-[#0E4194] group-hover:text-white oswald font-semibold text-xl md:text-2xl mb-4 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-[#484848] group-hover:text-gray-200 text-[15px] sm:text-[16px] lg:text-[18px] font-medium leading-relaxed mb-6 transition-colors duration-300 oxanium">
                  {category.description}
                </p>
              </div>

              {/* Button */}
              <Link 
                href={`#category-${category.id}`} 
                className="w-full bg-[#0E4194] group-hover:bg-white text-white group-hover:text-[#0E4194] py-2.5 rounded-full text-sm md:text-[16px] 4xl:text-[18px] font-semibold oswald transition-colors duration-300 shadow-sm"
              >
                View More
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
