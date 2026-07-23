"use client";

import React from "react";

const features = [
  {
    icon: <img src="/moto/gema-oils/grp1.png" alt="Engineer Team" className="w-14 h-14 object-contain mb-2" />,
    title: "Engineer Team",
    text: "Since 1969, our expert engineers have been developing the most suitable Oil solutions for every type of engine."
  },
  {
    icon: <img src="/moto/gema-oils/grp2.png" alt="Trusted Brand" className="w-14 h-14 object-contain mb-2" />,
    title: "Trusted Brand",
    text: "With years of expertise, we prioritize quality, reliability, and customer satisfaction in every product we deliver."
  },
  {
    icon: <img src="/moto/gema-oils/grp3.png" alt="Creative Solutions" className="w-14 h-14 object-contain mb-2" />,
    title: "Creative Solutions",
    text: "We offer innovative oil formulas tailored to every need/ adapting to constantly evolving technologies."
  },
  {
    icon: <img src="/moto/gema-oils/grp4.png" alt="Certified Products" className="w-14 h-14 object-contain mb-2" />,
    title: "Certified Products",
    text: "We manufacture in compliance with international standards and certify all our products through independent organizations."
  },
  {
    icon: <img src="/moto/gema-oils/grp5.png" alt="Fast Dispatching" className="w-14 h-14 object-contain mb-2" />,
    title: "Fast Dispatching",
    text: "We combine aesthetics and functionality in our product packaging, creating distinctive visibility on shelves."
  },
  {
    icon: <img src="/moto/gema-oils/grp6.png" alt="Professional Team" className="w-14 h-14 object-contain mb-2" />,
    title: "Professional Team",
    text: "Our experienced technical team provides professional support at every stage of the process."
  }
];

export default function PrecisionView() {
  return (
    <section className="py-20 xl:py-20 bg-white">
      <div className="custom-container">

        {/* Top Header */}
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between mb-10" data-aos="fade-up">
          <div className="flex flex-col gap-4 w-full md:w-auto min-w-[300px]">
            <div className="flex items-center gap-4 w-full">
              <h2 className="text-[#FEC52E] font-medium text-xl rubik-font whitespace-nowrap">Our Commitment</h2>
              <div className="w-[260px] h-[1px] bg-[#FEC52E]"></div>
            </div>
            <h3 className="section-title text-[#202020] font-semibold">
              Why Choose Us?
            </h3>
          </div>

          {/* Gray Vertical Line (only on md+) */}
          <div className="hidden md:block w-[1px] h-16 bg-[#000000] mx-4"></div>

          <div className="flex-1 max-w-5xl">
            <p className="text-[#1F1F1F] section-text tracking-normal">
              Backed by decades of expertise, we provide advanced motor oil solutions engineered for quality, reliability, and continuous innovation, helping enhance engine efficiency and durability.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="100">
          {features.map((feature, i) => (
            <div key={i} className="border border-gray-300 rounded p-4 flex flex-col items-center text-center bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-2 flex items-center justify-center">
                {feature.icon}
              </div>
              <h4 className="text-xl text-[#04192B] font-bold ">{feature.title}</h4>
              <div className="w-8 h-[2px] bg-[#142A38] mb-5"></div>
              <p className="text-[#1F1F1F] section-text text-[15px]">{feature.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
