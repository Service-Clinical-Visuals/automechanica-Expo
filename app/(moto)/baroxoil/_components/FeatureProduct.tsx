import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function FeatureProduct() {
  return (
    <section className="w-full bg-[#F7F7F7] py-16 md:py-24 overflow-hidden">
      <div className="custom-container flex flex-col gap-10 md:gap-12">
        
        {/* Top Part: 360 Feature */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center" data-aos="fade-up">
          {/* Content */}
          <div className="xl:col-span-5 flex flex-col gap-6">
            <div>
              <span className="odibee-sans-font text-[#EB2226] section-subtitle font-normal  flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-[#EB2226]"></span> Our Feature Product
              </span>
              <h2 className="odibee-sans-font section-title text-[#212121] font-normal mt-2 leading-tight">
                Explore Our Premium Engine Oils in 360°
              </h2>
            </div>
            
            <div className="flex flex-col gap-4 text-[#333333] instrument-sans-font section-text font-normal leading-relaxed">
              <p>
                Experience our premium engine oils from every angle with an interactive 360° product view. Designed for modern gasoline, diesel, and hybrid engines, our lubricants combine advanced synthetic technology with high-performance additives to deliver exceptional engine protection, improved fuel efficiency, and long-lasting reliability. Discover the quality, innovation, and precision engineered into every bottle.
              </p>
              <p>
                Our engine oils are formulated to minimize friction, reduce wear, and maintain engine cleanliness under the most demanding operating conditions. Whether for everyday driving or heavy-duty applications, they provide superior thermal stability, oxidation resistance, and dependable performance to help extend engine life and maximize efficiency.
              </p>
            </div>
          </div>

          {/* 360 Video */}
          <div className="xl:col-span-7 w-full h-full relative aspect-video rounded-3xl overflow-hidden bg-gray-200 shadow-sm flex items-center justify-center">
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-300" data-aos="fade-up"></div>

        {/* Bottom Part: Intro / CTA */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-6" data-aos="fade-up">
         <h2 className="odibee-sans-font section-title text-[#212121] font-normal  leading-tight">
            Premium German Engine Oils & High-Performance Lubricants
          </h2>
          <p className="text-[#333333] instrument-sans-font section-text font-normal leading-relaxed">
            Welcome to Barox GmbH. We engineer superior lubricants that combine German precision with advanced additive technology to ensure maximum power and protection for your machinery.
          </p>
          <Button href="#" className="mt-2">
            Explore Engine Oil
          </Button>
        </div>

      </div>
    </section>
  );
}
