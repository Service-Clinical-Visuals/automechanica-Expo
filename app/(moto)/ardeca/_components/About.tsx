import React from "react";

export default function About() {
  return (
    <section className="w-full  pt-24 pb-20 overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 items-center">
          
          {/* Left Side: Images Collage */}
          <div className="relative w-full aspect-square md:aspect-[16/10] lg:aspect-[4/3] xl:aspect-[5/4] 2xl:aspect-[4/3] flex gap-2 order-2 xl:order-1">
            {/* Main Image */}
            <div className="w-[60%] h-full rounded-bl-2xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
              <img src="/moto/ardeca/abt1.png" alt="Ardeca Team" className="w-full h-full object-cover" />
            </div>
            
            {/* Right Images */}
            <div className="w-[40%] h-full flex flex-col gap-2 relative">
              <div className="h-[calc(40%-4px)] w-full rounded-tr-2xl overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                <img src="/moto/ardeca/abt2.png" alt="Ardeca Facility" className="w-full h-full object-cover" />
              </div>
              <div className="h-[calc(60%-4px)] w-full  overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                <img src="/moto/ardeca/abt3.png" alt="Ardeca Barrels" className="w-full h-full object-cover" />
              </div>
              
              {/* Red Cross Overlay exactly covering the gaps */}
              <div className="absolute top-[25%] bottom-[40%] -left-2 w-2 bg-[#CE0E2D] z-10"></div>
              <div className="absolute top-[40%] -translate-y-1/2 -left-2 w-[50px] md:w-[80px] h-2 bg-[#CE0E2D] z-10"></div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="flex flex-col text-black order-1 xl:order-2">
            <div className="inline-flex items-center border  border-[#CE0E2D] rounded-full px-4 py-1.5 mb-6 self-start">
              <span className="text-[#CE0E2D] text-[16px]  font-semibold chakra-petch flex items-center">
                <span className="mr-2 text-[16px]  leading-none  ">&bull;</span> About Us
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-[32px] font-semibold mb-8 !text-black chakra-petch leading-tight">
              Family business and Western European global player in the field of lubricants
            </h2>
            
            <div className="space-y-6">
              <p className="text-[#484848] text-sm md:text-[16px] oxanium leading-[1.8]">
                In 1988, Vroman NV launched Ardeca Lubricants, which has been bringing high-quality lubricants made in Belgium to the market ever since. A family-owned and operated company, Ardeca Lubricants, now present in 70 countries, has a solution for every application in the manufacturing, agricultural or automotive industry, ranging from mineral and synthetic oils to gear box oil and transmission fluid.
              </p>
              
              <p className="text-[#484848] text-sm md:text-[16px] oxanium leading-[1.8]">
                Ardeca Lubricants responds to the demand for high-performance products of an outstanding standard of quality for a diversity of sectors. The company owes its rugged image to its founders, Arsène, Denise and Catherine, just as its name: Ardeca. Thanks to its nature as a family business, it is only logical that the company delivers custom work, flexibility, and technical as well as logistics support.
              </p>
            </div>
          </div>
          
        </div>
      </div>

      {/* Glowing Red Banner */}
      <div className="w-full mt-8 md:mt-12 relative py-8 sm:py-10 md:py-16 flex justify-center items-center overflow-hidden">
        {/* Glow effect layer */}
        <div className="absolute inset-0 w-full flex items-center justify-center pointer-events-none">
          <div 
            className="w-[100vw] h-[50px] sm:h-[70px] md:h-[80px] lg:h-[100px] xl:h-[110px]"
            style={{
              background: 'radial-gradient(50% 50% at 50% 50%, #CE0E2D 0%, rgba(206,14,45,0.9) 55%, rgba(206,14,45,0.4) 80%, rgba(206,14,45,0) 100%)',
            }}>
          </div>
        </div>
        
        {/* Text */}
        <div className="relative z-10 flex justify-center items-center gap-4 md:gap-8 lg:gap-12 xl:gap-15 2xl:gap-25  w-full px-4">
          {['Quality', 'Flexibility', 'Service', 'Reliability'].map((word, i) => (
            
            <h2 className="text-sm md:text-2xl lg:text-[32px] font-semibold  !text-white chakra-petch leading-tight"> {word}</h2>
             
          ))}
        </div>
      </div>
    </section>
  );
}
