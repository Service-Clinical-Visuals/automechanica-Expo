import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import { CheckCircle } from "lucide-react";
import Button from "./Button";

export default function EngineOil() {
  const benefits = [
    {
      title: "Maximum Engine Performance",
      desc: "Helps maintain smooth, responsive, and efficient engine operation."
    },
    {
      title: "Exceptional Wear Resistance",
      desc: "Protects vital engine components from friction, wear, and premature damage."
    },
    {
      title: "Excellent Viscosity Stability",
      desc: "Maintains optimal oil thickness across varying temperatures and driving conditions."
    },
    {
      title: "Improved Engine Cleanliness",
      desc: "Minimizes sludge, carbon deposits, and varnish to keep engines cleaner."
    }
  ];

  return (
    <section className="w-full bg-[#A27F41] py-16 md:py-24">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 md:gap-8 mb-12 items-center">
          {/* Left Content */}
          <div className="text-white xl:col-span-5" data-aos="fade-right">
            <h2 className="section-title font-semibold text-white mb-6 exo-2 drop-shadow-sm">
              Advanced Engine Oil
            </h2>
            <p className="section-text text-white niramit mb-6 leading-[1.8] ">
              Our advanced engine oils are specially formulated to provide outstanding lubrication, maximum engine protection, and consistent performance in today's demanding driving conditions.
              Manufactured using premium-quality base oils and innovative additive technology, they help optimize engine efficiency, reduce internal friction, and protect critical engine components from wear, corrosion, and harmful deposits.
            </p>
            
            <ul className="space-y-4">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <img src="/moto/rexoil/checkcircle.png" alt="Check Mark" className="w-4 h-4 mt-1" />
                  <p className="section-text text-white niramit  ">
                    <strong className="font-bold">{item.title}</strong> – {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Video Placeholder */}
          <div 
            className="w-full relative aspect-video rounded-xl overflow-hidden flex items-center justify-center shadow-lg xl:col-span-7" 
            data-aos="fade-left"
          >
            <DynamicVideoPlayer 
              type="360" 
              className="absolute inset-0 w-full h-full object-cover " 
            />
            
          </div>
        </div>

        {/* Bottom Section */}
        <hr className="border-t border-white/40 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8" data-aos="fade-up">
          <p className="section-text niramit text-white  leading-[1.8] md:max-w-5xl lg:max-w-6xl 3xl:max-w-7xl text-center md:text-left">
            Whether driving in city traffic, on highways, or under extreme temperatures, our engine oils ensure smooth operation, cleaner engines, and dependable performance throughout every service interval. Designed for a wide range of passenger cars, SUVs, and light commercial vehicles, they deliver the reliability and durability modern engines demand.
          </p>
          <div className="shrink-0">
            <Button variant="white-outline">
              View Product
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
