"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

const Explore360 = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-[#2D3B6F] text-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 md:gap-12">

        {/* Top Centered Header Section */}
        <div className="flex flex-col items-center text-center gap-4 max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="font-primary font-bold text-3xl md:text-4xl lg:text-[42px] text-white leading-tight">
            Premium Engine Oil for Maximum Performance
          </h2>
          <p className="font-secondary font-normal text-white/90 text-sm md:text-base lg:text-lg leading-relaxed">
            Keep your engine running at its best with Rheinol Engine Oil from SWD Lubricants. Formulated using advanced additive technology and premium-quality base oils, it delivers outstanding lubrication, reduces engine wear, and ensures reliable performance under all driving conditions.
          </p>
        </div>

        {/* Horizontal Divider Line */}
        <div className="w-full h-px bg-white/20"></div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Content Side (Span 6) */}
          <div className="lg:col-span-6 flex flex-col gap-8 order-2 lg:order-1 w-full" data-aos="fade-right">
            <p className="font-secondary font-normal text-white/90 text-sm md:text-base lg:text-lg leading-relaxed">
              Keep your engine running at its best with Rheinol Engine Oil from SWD Lubricants. Formulated using advanced additive technology and premium-quality base oils, it delivers outstanding lubrication, reduces engine wear, and ensures reliable performance under all driving conditions.
            </p>

            {/* Bullet Points */}
            <div className="flex flex-col gap-5">
              {[
                { title: "Excellent Wear Protection", desc: "Minimizes engine wear and extends engine life." },
                { title: "Outstanding Thermal Stability", desc: "Performs reliably in high and low temperature conditions." },
                { title: "Enhanced Engine Cleanliness", desc: "Helps prevent sludge and harmful deposits." },
                { title: "Reliable Cold Start Performance", desc: "Ensures quick oil circulation during cold starts." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <img
                    src="/moto/swd/build.png"
                    alt="Bullet Icon"
                    className="w-5 h-5 md:w-6 md:h-6 object-contain shrink-0 mt-0.5"
                    onError={(e) => {
                      e.currentTarget.src = "/moto/melle-sp/icon.png";
                    }}
                  />
                  <p className="font-secondary text-sm md:text-base text-white/90 leading-relaxed">
                    <span className="font-bold text-white">{item.title}</span> – {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-2">
              <Button text="Explore More" href="#explore-more" variant="secondary" showIcon={true} />
            </div>
          </div>

          {/* Right Video Side (Span 6) */}
          <div className="lg:col-span-6 w-full order-1 lg:order-2 flex justify-center" data-aos="fade-left" data-aos-delay="100">
            <div className="w-full aspect-video max-h-[420px] md:max-h-[480px] lg:max-h-[520px] xl:max-h-[560px] 2xl:max-h-[720px] rounded-2xl md:rounded-[28px] overflow-hidden bg-white/10 relative shadow-2xl border border-white/10 flex items-center justify-center">
              <DynamicVideoPlayer type="360" className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Explore360;
