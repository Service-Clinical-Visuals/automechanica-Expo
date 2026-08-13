"use client";

import React from "react";
import { Settings, Trophy, DollarSign, Globe } from "lucide-react";

export default function Partners() {
  return (
    <section className="py-16 xl:py-20 bg-white relative">
      <div className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10" data-aos="fade-up">
          <h2 className="section-title text-[#272727] oswald-font font-semibold mb-4">
            Why Choose FCS Auto?
          </h2>
          <p className="rubik-font text-[#4B5563] font-regular section-text max-w-5xl mx-auto leading-relaxed">
            FCS Auto combines advanced manufacturing, engineering expertise, and strict quality standards to deliver reliable ride control solutions. With integrated production, OE-focused development, and global market coverage, we provide durable products designed for superior performance and long-term value.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-black mb-12" data-aos="fade-up"></div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {/* Card 1 */}
          <div className="border border-[#E4E4E4] rounded-xl p-6 flex flex-col items-center text-center shadow-sm" data-aos="fade-up" data-aos-delay="0">
            <div className="bg-[#163683] text-white p-4 rounded-full mb-6 flex items-center justify-center">
              <img src="/moto/fcs/partner1.png" alt="Vertical Integration" className="w-auto h-auto object-contain" />
            </div>
            <h4 className="card-title text-[#272727] font-semibold oswald-font mb-4">Vertical Integration</h4>
            <p className="text-[#4B5563] rubik-font text-[15px] leading-relaxed">
              FCS Auto is a fully vertically integrated manufacturer, giving us complete control over production, quality, and efficiency.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-[#E4E4E4] rounded-xl p-6 flex flex-col items-center text-center shadow-sm" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-[#163683] text-white p-4 rounded-full mb-6 flex items-center justify-center">
              <img src="/moto/fcs/partner2.png" alt="Premium Product" className="w-auto h-auto object-contain" />
            </div>
            <h4 className="card-title text-[#272727] font-semibold oswald-font mb-4">Premium Product</h4>
            <p className="text-[#4B5563] rubik-font text-[15px] leading-relaxed">
              Our state-of-the-art quality control processes ensure premium products built for reliable performance.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-[#E4E4E4] rounded-xl p-6 flex flex-col items-center text-center shadow-sm" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-[#163683] text-white p-4 rounded-full mb-6 flex items-center justify-center">
              <img src="/moto/fcs/partner3.png" alt="Value Price Point" className="w-auto h-auto object-contain" />
            </div>
            <h4 className="card-title text-[#272727] font-semibold oswald-font mb-4">Value Price Point</h4>
            <p className="text-[#4B5563] rubik-font text-[15px] leading-relaxed">
              Efficient manufacturing processes allow us to deliver high-quality products at competitive prices.
            </p>
          </div>

          {/* Card 4 */}
          <div className="border border-[#E4E4E4] rounded-xl p-6 flex flex-col items-center text-center shadow-sm" data-aos="fade-up" data-aos-delay="300">
            <div className="bg-[#163683] text-white p-4 rounded-full mb-6 flex items-center justify-center">
              <img src="/moto/fcs/partner4.png" alt="Leading Coverage" className="w-auto h-auto object-contain" />
            </div>
            <h4 className="card-title text-[#272727] font-semibold oswald-font mb-4">Leading Coverage</h4>
            <p className="text-[#4B5563] rubik-font text-[15px] leading-relaxed">
              We continuously strive to provide industry-leading market coverage with reliable ride control solutions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
