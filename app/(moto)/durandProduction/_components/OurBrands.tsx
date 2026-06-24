import React from "react";
import Link from "next/link";

export default function OurBrands() {
  return (
    <section className="w-full bg-[#000814] pt-16 md:pt-24 relative overflow-hidden" id="our-brands">
      
      <div className="custom-container relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16" data-aos="fade-up">
          <div className="inline-flex flex-col items-stretch mb-6">
            <div className="w-full h-1 bg-[#FF131C] mb-1 md:mb-2"></div>
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl heading font-medium tracking-wider leading-none">
              Our Brands
            </h2>
          </div>
           <p className="text-white text-sm md:text-md paragraph leading-[1.8] font-normal ">
            Driven By Innovation And Powered By Quality, Our Brand Delivers Reliable Performance Solutions Designed To Exceed Expectations And Move Every Journey Forward.
          </p>
        </div>
      </div>

      {/* Cards Wrapper - This allows the background to split EXACTLY halfway through the cards */}
      <div className="relative w-full">
        {/* Red Background starting exactly at the 50% vertical center of the cards */}
        <div className="absolute top-1/2 bottom-0 left-0 w-full bg-[#FF131C] z-0"></div>

        <div className="custom-container relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-10">
            
            {/* Valco Card */}
            <div className="bg-white rounded-t-2xl p-8 md:p-10 shadow-2xl flex flex-col h-full transform transition-all duration-300 hover:-translate-y-4 hover:shadow-red-900/40" data-aos="fade-right">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-[#1a1a1a] text-2xl md:text-3xl lg:text-4xl heading font-medium tracking-wider leading-none">
                  Valco
                </h2>
                <Link href="#" className="w-12 h-12 flex-shrink-0 bg-[#FF131C] rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors shadow-md group">
                   <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                   </svg>
                </Link>
              </div>
              <p className="text-[#4a4a4a] text-sm md:text-md paragraph leading-[1.8] font-normal">
                The VALCO Catalog Offers Lubricants In Different Packaging, But Also Several Liquids Intended For Maintenance, Cars With Different Types Of Fuels, Trucks And Construction Heavyweights, Tractors And Agricultural Machinery, 2-Stroke Motorcycles And Engines .
              </p>
            </div>

            {/* Areca Card */}
            <div className="bg-white rounded-t-2xl p-8 md:p-10 shadow-2xl flex flex-col h-full transform transition-all duration-300 hover:-translate-y-4 hover:shadow-red-900/40" data-aos="fade-left">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-[#1a1a1a] text-2xl md:text-3xl lg:text-4xl heading font-medium tracking-wider leading-none">
                  Areca
                </h2>
                <Link href="#" className="w-12 h-12 flex-shrink-0 bg-[#FF131C] rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors shadow-md group">
                   <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                   </svg>
                </Link>
              </div>
              <p className="text-[#4a4a4a] text-sm md:text-md paragraph leading-[1.8] font-normal">
                The ARECA Catalog Offers Lubricants In Various Packaging Options, As Well As A Range Of Fluids For The Maintenance, Upkeep, And Cleaning Of Vehicles: Cars With Different Fuel Types, Trucks And Heavy Construction Vehicles, Tractors And Agricultural Machinery.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Solid Red Bottom Padding for the Section */}
      <div className="w-full bg-[#FF131C] h-16 md:h-24 relative z-0"></div>

    </section>
  );
}
