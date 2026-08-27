"use client";

import React from "react";

export default function Quality() {
  const steps = [
    {
      num: "01",
      icon: <img src="/moto/efitaller/search.png" alt="Search" className="w-auto h-auto object-contain mx-auto" />,
      title: "Choose your Equipment",
      desc: "Find the products and solutions that best fit your workshop and needs."
    },
    {
      num: "02",
      icon: <img src="/moto/efitaller/cart.png" alt="Cart" className="w-auto h-auto object-contain mx-auto" />,
      title: "Place Your Order",
      desc: "With just a few clicks, complete your order quickly and securely."
    },
    {
      num: "03",
      icon: <img src="/moto/efitaller/receive.png" alt="Receive" className="w-auto h-auto object-contain mx-auto" />,
      title: "Receive and Enjoy",
      desc: "Receive your equipment and start transforming your workshop with confidence."
    }
  ];

  return (
    <section className="py-16 xl:py-20 bg-white relative overflow-hidden">
      <div className="custom-container relative z-10">

        {/* Header Text */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20" data-aos="fade-up">
          <span className="text-[#C2D500] font-semibold section-text inter-font mb-3">It's That Simple</span>
          <h2 className="section-title text-[#404040] sora-font font-semibold mb-4">
            In 3 Steps, take Your <br /> Workshop to the next level
          </h2>
        </div>

        {/* 3 Steps */}
        <div className="flex flex-col md:flex-row justify-between items-start relative px-4 md:px-10 lg:px-16 mx-auto">

          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center w-full md:w-1/3 px-4 relative z-10 mb-12 md:mb-0" data-aos="fade-up" data-aos-delay={100 + (index * 150)}>
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="flex items-center justify-center relative">
                    {step.icon}
                  </div>
                </div>

                <h3 className="card-title text-[#404040] sora-font font-semibold mb-3">{step.title}</h3>
                <p className="inter-font text-[#404040] section-text leading-relaxed max-w-[250px] mx-auto">
                  {step.desc}
                </p>
              </div>

              {/* Arrow separator (only show between items on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex flex-col items-center justify-center w-auto h-auto absolute top-[110px]" style={{ left: index === 0 ? "33%" : "66%", transform: "translateX(-50%)" }}>
                  <img src="/moto/efitaller/Arrow2.png" alt="arrow" className="w-auto h-auto object-contain" />
                </div>
              )}
            </React.Fragment>
          ))}

        </div>

      </div>
    </section>
  );
}
