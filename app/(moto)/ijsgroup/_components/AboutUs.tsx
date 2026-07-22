import React from "react";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 lg:py-32 overflow-hidden">
      
      {/* Desktop Vertical Watermark */}
      <div className="hidden xl:flex items-center justify-center absolute left-0 top-0 bottom-0 w-24 xl:w-20 z-0 opacity-20 pointer-events-none select-none">
        <span 
          className="oswald-font font-semibold titles tracking-widest uppercase origin-center -rotate-90 whitespace-nowrap"
          style={{ 
            WebkitTextStroke: "2px #247EA3",
            color: "transparent"
          }}
        >
          About Us
        </span>
      </div>

      <div className="custom-container relative z-10">
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10 items-center relative z-10">
          
          {/* Content Left */}
          <div data-aos="fade-right">
            <h2 className="oswald-font font-semibold section-title text-[#212121] mb-8  flex flex-col items-start">
              <span>About <span className="relative">IJS GROUP<span className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#006DA4]"></span></span></span>
            </h2>
            
            <div className="sora-font font-normal section-text text-[#484848] flex flex-col gap-5 mb-8 leading-relaxed">
              <p>
                From its foundation in 1945, Industrias Sardañes S.L., IJS, has distinguished itself as a pioneering and prestige company in the development and production of automotive spare parts.
              </p>
              <p>
                We are actually prepared for any type of exigency requested by our client. Our production media allow us to manufacture more than 1.000.000 units annually, of which 80% are destined for export.
              </p>
              <p>
                We have a high technology machinery to realize big production in optimized time and we are able to offer a high quality product to grant a competitive price in constant evolution.
              </p>
              <p>
                Our obsession is to offer our best quality services in all our departments. Our production is based on this philosophy, therefore, we obtain a production range with the maximum technical level.
              </p>
            </div>

            <Button href="#">
              Read More About Us
            </Button>
          </div>

          {/* Image Right */}
          <div data-aos="fade-left" className="relative w-full aspect-[4/3] xl:aspect-auto xl:h-[600px]">
            <img 
              src="/moto/ijsgroup/abt.png" 
              alt="IJS Group Machinery" 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
