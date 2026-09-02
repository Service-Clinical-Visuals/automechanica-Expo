"use client";

import React from "react";

export default function Products() {
  const advantages = [
    {
      icon: <img src="/moto/efitaller/a1.png" alt="Guaranteed Quality" className="w-auto h-auto object-contain mx-auto" />,
      title: "Guaranteed Quality",
      desc: "Professional products from leading brands with maximum reliability."
    },
    {
      icon: <img src="/moto/efitaller/a2.png" alt="Expert Advice" className="w-auto h-auto object-contain mx-auto" />,
      title: "Expert Advice",
      desc: "We help you choose the best solutions for your workshop."
    },
    {
      icon: <img src="/moto/efitaller/a3.png" alt="Updates Included" className="w-auto h-auto object-contain mx-auto" />,
      title: "Updates Included",
      desc: "Keep your equipment always up to date."
    },
    {
      icon: <img src="/moto/efitaller/a4.png" alt="Technical Support" className="w-auto h-auto object-contain mx-auto" />,
      title: "Technical Support",
      desc: "Individual technical service and fast support whenever you need it."
    }
  ];

  return (
    <section className="py-16 xl:py-20 bg-white">
      <div className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16" data-aos="fade-up">
          <h2 className="section-title text-[#404040] sora-font font-semibold mb-6">
            Advantages that make a difference
          </h2>
          <p className="inter-font text-[#404040] section-text max-w-3xl mx-auto leading-relaxed">
            We combine exceptional quality, deep expertise, and unwavering dedication to deliver the best possible solutions for your workshop, ensuring maximum efficiency, long-term reliability, and consistently optimal performance in every aspect of your operations.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12 max-w-7xl mx-auto">
          {advantages.map((adv, index) => (
            <div key={index} className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
              <div className="mb-6">
                {adv.icon}
              </div>
              <h3 className="card-title text-[#404040] sora-font font-semibold mb-4">
                {adv.title}
              </h3>
              <p className="inter-font text-[#404040] section-text leading-relaxed">
                {adv.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
