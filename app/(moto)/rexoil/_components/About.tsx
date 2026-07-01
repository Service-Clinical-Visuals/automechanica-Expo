import React from "react";
import Button from "./Button";

export default function About() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="custom-container flex flex-col gap-8 md:gap-10">
        
        {/* About Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left Content */}
          <div data-aos="fade-right">
            <h2 className="section-title font-semibold text-[#11121B] mb-6 leading-[1.2] exo-2">
              Leading the Future of Lubrication Solutions
            </h2>
            <p className="section-text text-[#515151] mb-8 niramit leading-[1.8]">
              Since 2013, REXOIL has been a trusted international brand in the mineral oil industry, delivering high-quality lubrication solutions for automotive, industrial, marine, and commercial applications. With its headquarters in Ataşehir and a modern 11,700 m² production facility in the Tuzla Birlik Organized Industrial Zone, REXOIL manufactures a comprehensive range of automotive oils, industrial oils, process oils, greases, and marine lubricants that meet the evolving needs of customers worldwide.
            </p>
            <Button variant="primary-outline">
              Discover REXOIL
            </Button>
          </div>

          {/* Right Image */}
          <div data-aos="fade-left" className="w-full relative rounded-sm overflow-hidden ">
             <img 
               src="/moto/rexoil/lubricant.png" 
               alt="Leading the Future of Lubrication Solutions" 
               className="w-full h-full object-contain"
             />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-300" />

        {/* Why Choose Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left Image */}
          <div data-aos="fade-right" className="w-full relative rounded-sm overflow-hidden ">
             <img 
               src="/moto/rexoil/whychoose.png" 
               alt="Why Choose REXOIL" 
               className="w-full h-full object-cover"
             />
          </div>

          {/* Right Content */}
          <div data-aos="fade-left">
            <h2 className="section-title font-semibold text-[#11121B] mb-5 leading-[1.2] exo-2">
              Why Choose REXOIL?
            </h2>
            <p className="section-text text-[#515151] mb-8 niramit leading-[1.8]">
              REXOIL delivers premium lubrication solutions through advanced manufacturing, innovative technology, and strict quality standards. Our products are designed to provide reliable protection, improved performance, and long-lasting efficiency for automotive, industrial, marine, and commercial applications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
              {/* Card 1 */}
              <div className="border border-gray-200 p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
                <h3 className="card-title font-semibold text-[#11121B] mb-3 exo-2">Premium Quality Assurance</h3>
                <p className="section-text text-[#515151] mb-4 niramit">
                  Manufactured with advanced technology to deliver consistent quality and dependable performance.
                </p>
              </div>

              {/* Card 2 */}
              <div className="border border-gray-200 p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
                <h3 className="card-title font-bold text-black mb-3 exo-2">Advanced Protection</h3>
                <p className="section-text text-gray-600 niramit">
                  Reduces friction, minimizes wear, and helps extend equipment life and durability.
                </p>
              </div>
            </div>

            <Button variant="primary-outline">
              Why REXOIL?
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
