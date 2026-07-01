import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import React from "react";
import Button from "./Button";

export default function RexoilEngineOils() {
  const bottomCards = [
    { 
      title: "Engine Cleanliness", 
      desc: "Helps prevent sludge, carbon deposits, and varnish to keep the engine clean and efficient." 
    },
    { 
      title: "Thermal Stability", 
      desc: "Maintains excellent performance at high temperatures while resisting oxidation and oil breakdown." 
    },
    { 
      title: "Cold-Start Performance", 
      desc: "Ensures rapid oil circulation during cold starts for immediate lubrication and reliable protection." 
    },
    { 
      title: "Fuel Efficiency", 
      desc: "Reduces internal engine friction to improve efficiency and support lower fuel consumption." 
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="custom-container">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8 mb-6 items-stretch">
          
          {/* Left Column */}
          <div className="flex flex-col justify-between" data-aos="fade-right">
            <div className="mb-8">
               <h2 className="section-title font-semibold text-[#11121B] mb-4 leading-[1.2] exo-2 ">
                REXOIL Engine Oils
              </h2>
              <p className="section-text text-[#515151] niramit leading-[1.8] mb-4">
                REXOIL Engine Oils are engineered to deliver exceptional performance, superior engine protection, and long-lasting reliability for today's advanced automotive engines.
              </p>
              <p className="section-text text-[#515151] niramit leading-[1.8]">
                Manufactured using premium-quality base oils and innovative additive technology, REXOIL engine oils provide outstanding lubrication that minimizes friction, reduces wear, and protects critical engine components under all driving conditions.
              </p>
            </div>

            {/* 2 Cards on the Left */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-auto">
              <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center justify-center">
                <h3 className="product-card-title font-semibold text-[#A27F41] mb-3 exo-2">Advanced Protection</h3>``
                <p className="section-text text-[#515151] niramit leading-relaxed">Provides a strong protective oil film to reduce friction and enhance engine performance.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center justify-center">
                <h3 className="product-card-title font-semibold text-[#A27F41] mb-3 exo-2">High Performance</h3>
                <p className="section-text text-[#515151] niramit leading-relaxed">Engineered for modern engines, REXOIL delivers smooth acceleration, responsive performance, and consistent power output.</p>
              </div>
            </div>
          </div>

          {/* Right Column (Image Placeholder / Area) */}
             <div 
              className="w-full relative aspect-video rounded-xl overflow-hidden flex items-center justify-center shadow-lg" 
              data-aos="fade-left"
            >
              <DynamicVideoPlayer 
                type="short-1" 
                className="absolute inset-0 w-full h-full object-cover " 
              />
              
            </div>
        </div>

        {/* Bottom 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {bottomCards.map((card, idx) => (
            <div 
              key={idx} 
              className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center justify-center" 
              data-aos="fade-up" 
              data-aos-delay={idx * 100}
            >
              <h3 className="product-card-title font-semibold text-[#A27F41] mb-3 exo-2">{card.title}</h3>
              <p className="section-text text-[#515151] niramit leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center" data-aos="fade-up" data-aos-offset="50">
          <Button variant="primary-outline">
            Request Information
          </Button>
        </div>

      </div>
    </section>
  );
}
