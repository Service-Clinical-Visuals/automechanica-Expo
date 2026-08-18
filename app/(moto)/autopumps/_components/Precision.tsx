import React from "react";
import AutopumpsButton from "./AutopumpsButton";
import { Check } from "lucide-react";

export default function Precision() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#037CAF] to-[#0B274A] text-white">
      <div className="custom-container px-6 xl:px-16">
        {/* Top Section */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-16">
          <h2 className="section-title text-white mb-6">
            Precision You Can Trust
          </h2>
          <p className="section-text text-white leading-relaxed">
            At Autopumps UK, quality isn't just part of the process—it is the process. Every engine component we supply is the result of close collaboration with globally trusted manufacturing partners, stringent quality checks, and a relentless focus on OE-matching performance. From initial production to final inspection at our global distribution centre in the UK, each part is built and tested to deliver long-term reliability and efficiency.
          </p>
        </div>

        {/* Bottom Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left: Image */}
          <div className="w-full h-full xl:col-span-8" data-aos="fade-right">
             <img 
               src="/moto/autopumps/precision.png" 
               alt="Precision Testing Equipment" 
               className="w-full h-auto object-cover rounded-none shadow-2xl"
             />
          </div>

          {/* Right: Content */}
          <div className="xl:col-span-4 flex flex-col gap-8" data-aos="fade-left">
            <p className="section-text text-white leading-relaxed">
              Every Autopumps UK component is engineered to meet the highest standards of quality, durability, and precision. Manufactured using advanced production techniques and premium materials, each part undergoes rigorous quality inspections and performance testing to ensure dependable operation, long service life, and OE-matching reliability across a wide range of applications.
            </p>

            <ul className="flex flex-col gap-6">
              <li className="flex gap-4 items-start">
                <div className="mt-1.5 flex-shrink-0 bg-white rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                   <Check size={16} className="text-[#0B274A]" strokeWidth={4} />
                </div>
                <p className="section-text text-white">
                  OE-Matching Quality - Manufactured to match original equipment specifications, ensuring precise fitment, seamless installation, and reliable operation.
                </p>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1.5 flex-shrink-0 bg-white rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                   <Check size={16} className="text-[#0B274A]" strokeWidth={4} />
                </div>
                <p className="section-text text-white">
                  Rigorous Quality Testing - Each component undergoes comprehensive inspections and performance testing to guarantee consistency, durability, and long-term reliability.
                </p>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1.5 flex-shrink-0 bg-white rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                   <Check size={16} className="text-[#0B274A]" strokeWidth={4} />
                </div>
                <p className="section-text text-white">
                  Trusted Global Standards - Developed in partnership with experienced manufacturers and backed by strict quality control to deliver dependable performance worldwide.
                </p>
              </li>
            </ul>

            <div className="mt-4">
              <AutopumpsButton href="/autopumps/quality" variant="secondary">
                Discover Our Quality
              </AutopumpsButton>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
