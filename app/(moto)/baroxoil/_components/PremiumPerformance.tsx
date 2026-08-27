import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function PremiumPerformance() {
  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center" data-aos="fade-up">
          
          {/* Video Side */}
          <div className="order-2 xl:order-1 xl:col-span-7 w-full h-full relative aspect-video rounded-3xl overflow-hidden bg-gray-100 shadow-sm flex items-center justify-center">
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Content Side */}
          <div className="order-1 xl:order-2 xl:col-span-5 flex flex-col gap-6">
            <div>
              <span className="odibee-sans-font text-[#EB2226] section-subtitle font-normal flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-[#EB2226]"></span> Premium Performance
              </span>
              <h2 className="odibee-sans-font section-title text-[#212121] font-normal mt-2 leading-tight">
                Advanced Lubrication for Maximum Engine Performance
              </h2>
            </div>
            
            <p className="text-[#333333] instrument-sans-font section-text font-normal  leading-relaxed">
              Our premium engine oils provide reliable protection, improved fuel efficiency, and long-lasting performance. Formulated with advanced technology, they reduce engine wear, maintain cleanliness, and ensure smooth operation in all driving conditions.
            </p>

            <ul className="flex flex-col gap-5 mt-2">
              <li className="flex items-start gap-4">
                <div className="w-3 h-3 bg-[#0F2469] rotate-45 mt-1.5 shrink-0"></div>
                <p className="text-[#333333] instrument-sans-font section-text font-normal leading-relaxed">
                  <strong className="font-bold text-[#333333]">Premium Synthetic Formula</strong> – Delivers reliable lubrication and outstanding engine protection.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-3 h-3 bg-[#0F2469] rotate-45 mt-1.5 shrink-0"></div>
                <p className="text-[#333333] instrument-sans-font section-text font-normal leading-relaxed">
                  <strong className="font-bold text-[#333333]">Enhanced Engine Performance</strong> – Helps maximize power output and maintain smooth engine operation.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-3 h-3 bg-[#0F2469] rotate-45 mt-1.5 shrink-0"></div>
                <p className="text-[#333333] instrument-sans-font section-text font-normal leading-relaxed">
                  <strong className="font-bold text-[#333333]">Advanced Wear Protection</strong> – Reduces friction and protects critical engine components from wears.
                </p>
              </li>
            </ul>

            <div className="mt-4">
              <Button href="#">
                Explore Our Product
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
