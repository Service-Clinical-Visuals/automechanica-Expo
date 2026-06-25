import React from "react";
import Link from "next/link";
import Button from "./Button";

export default function Factory() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="custom-container">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto mb-12" data-aos="fade-up">
          <h2 className="text-[#484848] text-3xl md:text-4xl lg:text-[36px]    font-bold oxanium mb-6 tracking-wide">
            Discover The Factory
          </h2>
          
          <div className="w-full h-[1px] bg-gray-200 mb-8 max-w-3xl mx-auto"></div>
          
          <p className="text-[#484848] exo2 text-[16px] md:text-[18px]   leading-relaxed px-4">
            Established in 1983, our factory is the true heart of our organization. Being a manufacturer means having control over quality, inventory, and expertise in the world of lubricants and fluids. And unlike most brands, we possess this manufacturing expertise.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Left Image */}
          <div className="relative group overflow-hidden shadow-lg " data-aos="fade-right">
            <div className="aspect-[16/10] w-full overflow-hidden ">
              <img 
                src="/moto/accorLubricants/factory1.jpg" 
                alt="ACCOR Factory Exterior" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Arrow Button Overlay */}
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
              <Link href="#" className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-[#E41B13] rounded-full text-white shadow-lg transition-transform hover:scale-110">
                <img src="/moto/accorLubricants/toprightarrow.png" alt="arrow" className="w-5 h-5 md:w-6 md:h-6"/>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative group overflow-hidden shadow-lg " data-aos="fade-left">
            <div className="aspect-[16/10] w-full overflow-hidden ">
              <img 
                src="/moto/accorLubricants/factory2.jpg" 
                alt="ACCOR Factory Interior" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Arrow Button Overlay */}
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
              <Link href="#" className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-[#E41B13] rounded-full text-white shadow-lg transition-transform hover:scale-110">
                <img src="/moto/accorLubricants/toprightarrow.png" alt="arrow" className="w-5 h-5 md:w-6 md:h-6"/>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="text-center px-4" data-aos="fade-up">
          <p className="text-[#484848] exo2 text-[16px] md:text-[18px] leading-relaxed">
            With fully automated production lines, robotic packaging systems, and constant human oversight, we are at the forefront of lubricant production. And the nearly 50 employees who work on this site day and night are dedicated to the quality of the products you buy from us. Our production capabilities are widely recognized, and many of you entrust us with your brand. Whether you're specifically in the mechanical lubricant market or looking to develop your own private label brand, we have the keys to your success.
          </p>
        </div>

      </div>
    </section>
  );
}
