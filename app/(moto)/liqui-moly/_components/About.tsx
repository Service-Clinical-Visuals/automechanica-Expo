import React from "react";
import Button from "./Button";

export default function About() {
  return (
    <section className="w-full py-16 md:py-24 bg-white relative">
      <div className="custom-container flex flex-col items-center ">
        {/* Section Title */}
        <div className="text-center mb-6 w-full md:max-w-3xl lg:max-w-5xl xl:max-w-5xl 2xl:max-w-6xl " data-aos="fade-up">
          <h2 className="section-title font-semibold text-[var(--color-primary)] mb-2 inline-block relative">
            About LIQUI MOLY
            {/* Underline Decoration */}
            <div className="absolute bottom-0 left-0 w-full flex items-center gap-1">
              <div className="h-[3px] flex-1 bg-[var(--color-primary)]"></div>
              <div className="h-[3px] w-[3px] bg-[var(--color-primary)]"></div>
              <div className="h-[3px] w-[3px] bg-[var(--color-primary)]"></div>
              <div className="h-[3px] w-[3px] bg-[var(--color-primary)]"></div>
              <div className="h-[3px] w-[3px] bg-[var(--color-primary)]"></div>
            </div>
          </h2>
          <p className="section-text text-[var(--color-third)] mt-6 leading-relaxed font-normal">
            <span className="font-bold text-[#111827]">LIQUI MOLY</span> delivers trusted automotive solutions with decades of expertise, enhancing vehicle performance, efficiency, and reliability for drivers worldwide. Our innovative products are designed to provide superior protection and a better driving experience.
          </p>
        </div>

        {/* Image */}
        <div className="w-full md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mt-2 mb-2" data-aos="fade-up" data-aos-delay="100">
          <img 
            src="/moto/liqui-moly/abt.jpg" 
            alt="LIQUI MOLY Products" 
            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Bottom Text and Button */}
        <div className="w-full md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl flex flex-col xl:flex-row items-center justify-between gap-6" data-aos="fade-up" data-aos-delay="200">
          <div className="flex-1 xl:pr-20 text-center xl:text-left max-w-4xl">
            <p className="section-text text-[var(--color-third)] mt-6 leading-relaxed font-normal">
              Driven by innovation and a passion for mobility, <span className="font-bold text-[#111827]">LIQUI MOLY</span> creates advanced automotive solutions that help vehicles perform at their best. With a commitment to quality and excellence, we deliver products that enhance driving confidence, durability, and overall vehicle care.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button variant="secondary" className="px-5 py-2" showArrow={true}>
              Know more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
