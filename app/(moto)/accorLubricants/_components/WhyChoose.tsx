import React from "react";
import Link from "next/link";
import Button from "./Button";

export default function WhyChoose() {
  const features = [
    {
      title: "Quality Manufacturing",
      description: "Production capacity: 120,000 T/year - Ultra-modern production units and fully automated packaging lines...",
      image: "/moto/accorLubricants/choose1.jpg",
      fallbackText: "Quality Mfg"
    },
    {
      title: "R&D Laboratory",
      description: "Our R&D department anticipates future standards and regulatory changes. The products thus developed...",
      image: "/moto/accorLubricants/choose2.jpg", 
      fallbackText: "R&D Lab"
    },
    {
      title: "Made In France",
      description: "Our production units based in France, as well as our stocks, allow us to meet all your requests, volume variations, etc...",
      image: "/moto/accorLubricants/choose3.jpg",
      fallbackText: "Made In France"
    },
    {
      title: "Independent",
      description: "Our independence allows us to adapt quickly to the demands of our customers. We thus have total...",
      image: "/moto/accorLubricants/choose4.jpg",
      fallbackText: "Independent"
    }
  ];

  return (
    <section className="w-full bg-[#1a1a1a] py-16 md:py-24">
      <div className="custom-container">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto mb-16" data-aos="fade-up">
          <div className="w-fit">
            <h2 className="text-[#ffffff] text-3xl md:text-4xl lg:text-[36px]  font-bold oxanium mb-6 mb-6 leading-tight tracking-wide">
            Why Choose ACCOR Lubricants
          </h2>
          
          <div className="w-full h-[1px] bg-white/80 mb-6"></div>
          </div>
          
          
          <p className="text-white exo2 text-[16px] md:text-[18px]  leading-relaxed px-4">
            With decades of expertise in technical fluids and lubricant manufacturing, ACCOR Lubricants combines innovation, quality, and flexibility to deliver solutions that meet the evolving needs of customers worldwide. From advanced production facilities and dedicated research capabilities to responsive service and French manufacturing excellence, we are committed to providing reliable products and trusted support at every stage.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-4 flex flex-col shadow-lg transition-transform duration-300 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Container */}
              <div className="w-full aspect-square md:aspect-[4/3] overflow-hidden mb-5 bg-gray-100">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://placehold.co/600x450/eeeeee/cccccc?text=${feature.fallbackText.replace(/ /g, '+')}`;
                  }}
                />
              </div>
              
              {/* Card Content */}
              <div className="flex flex-col flex-grow pb-6">
                <h3 className="text-[#1b1537] font-bold text-[16px] md:text-lg lg:text-[22px]  exo2 mb-1 md:mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#484848] exo2 text-[16px] md:text-[18px]  leading-relaxed mb-4 flex-grow">
                  {feature.description}
                </p>
                
                {/* View More Link */}
                <div className="mt-auto flex items-center pt-2">
                <Link href="#" className="group inline-flex items-center gap-3">
                  <span className="text-[#1b1537] font-bold text-[16px] md:text-lg lg:text-[20px]  exo2 underline decoration-[2px] underline-offset-[6px] decoration-[#1b1537] transition-colors">
                    View More
                  </span>
                  <div className="flex items-center justify-center w-[28px] h-[28px] md:w-[32px] md:h-[32px] bg-[#E41B13] rounded-full shadow-[0_4px_10px_rgba(228,27,19,0.4)] transition-transform duration-300 group-hover:scale-110">
                    <img src="/moto/accorLubricants/toprightarrow.png" alt="arrow" className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] object-contain"/>
                  </div>
                </Link>
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center pr-4" data-aos="fade-up">
          <Button href="#">Know More About Synmar</Button>
        </div>

      </div>
    </section>
  );
}
