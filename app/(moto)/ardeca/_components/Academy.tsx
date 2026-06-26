import React from "react";
import Link from "next/link";
import { Play } from "lucide-react";

export default function Academy() {
  return (
    <section className="w-full bg-white py-20 lg:py-28 overflow-hidden">
      <div className="custom-container">
        
        {/* Top Part: Text and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-10">
          
          {/* Left Side: Text */}
          <div className="flex flex-col" data-aos="fade-right" data-aos-duration="1000">
            <h2 className="text-3xl md:text-4xl lg:text-[32px] font-semibold mb-8 !text-black chakra-petch leading-tight">
              Academy
            </h2>
            
            <p className="text-[#484848] text-sm md:text-[16px] oxanium leading-[1.8]">
              Our ambition is great: we aim to ensure that garage and car workshop owners, transport companies, construction companies, car part distributors and manufacturing enterprises all over the world are able to work in a well-oiled manner, without any concessions to service. We like to think along with our customers, so that we can support them in their challenges with tailor-made logistics or technical solutions.
            </p>
            
            <ul className="flex flex-col gap-4 mt-6">
              {[
                "High-end lubricants and specialties",
                "Dynamic family business, always ready for new opportunities",
                "Wide client range: garages, auto parts dealers, manufacturing businesses, transport companies, constructors, agriculture and worldwide importers"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <img src="/moto/ardeca/redwheel.png" alt="wheel icon" className="w-5 h-5 md:w-6 md:h-6 object-contain mt-0.5 flex-shrink-0" />
               
                  <p className="text-[#484848] text-sm md:text-[16px] oxanium leading-[1.8]">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right Side: Image */}
          <div className="w-full h-auto shadow-[0_4px_20px_rgba(0,0,0,0.08)]" data-aos="fade-left" data-aos-duration="1000">
            <img 
              src="/moto/ardeca/academy.png" 
              alt="Ardeca Rally Car" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Bottom Part: Two Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          <Link href="#" className="flex items-center justify-between border border-[#CE0E2D] bg-white p-4 md:p-6 lg:px-6 group hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-duration="1000">
           
            <h4 className="text-base md:text-xl lg:text-2xl font-semibold  text-black! chakra-petch leading-tight pr-4 tracking-wide"> PRODUCT UPDATES – API SQ & ILSAC GF-7A</h4>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#CE0E2D] flex items-center justify-center flex-shrink-0 group-hover:bg-[#a50b24] transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <img src="/moto/ardeca/arrow.png" alt="play icon" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
            </div>
          </Link>

          <Link href="#" className="flex items-center justify-between border border-[#CE0E2D] bg-white p-4 md:p-6 lg:px-8 group hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-duration="1200">
            
            <h4 className="text-base md:text-xl lg:text-2xl font-semibold  text-black! chakra-petch leading-tight pr-4 tracking-wide"> WHEN TO CHANGE YOUR MOTOR OIL?</h4>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#CE0E2D] flex items-center justify-center flex-shrink-0 group-hover:bg-[#a50b24] transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <img src="/moto/ardeca/arrow.png" alt="play icon" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
}
