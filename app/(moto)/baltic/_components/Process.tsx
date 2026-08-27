"use client";

import React from "react";
import Typography from "./Typography";

const processSteps = [
  {
    num: "01",
    title: "Paper Pleating",
    desc: "High-quality filter media is precision-pleated to maximize filtration surface and efficiency.",
    image: "/moto/baltic/image1.png",
    icon: "/moto/baltic/icon1.png"
  },
  {
    num: "02",
    title: "Production Of Rigid Parts",
    desc: "Rigid components are produced with high precision to ensure strength, consistency and fit.",
    image: "/moto/baltic/image2.png",
    icon: "/moto/baltic/icon2.png"
  },
  {
    num: "03",
    title: "Assembly",
    desc: "All components are assembled with care to ensure perfect sealing, durability and performance.",
    image: "/moto/baltic/image3.png",
    icon: "/moto/baltic/icon3.png"
  },
  {
    num: "04",
    title: "Storage",
    desc: "Finished products are stored in optimal conditions to maintain quality until dispatch.",
    image: "/moto/baltic/image4.png",
    icon: "/moto/baltic/icon4.png"
  },
  {
    num: "05",
    title: "Delivery",
    desc: "Products are carefully packed and delivered to our partners and customers on time.",
    image: "/moto/baltic/image5.png",
    icon: "/moto/baltic/icon5.png"
  }
];

const Process = () => {
  return (
    <section id="process" className="w-full py-16 min-[3200px]:py-[120px] bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-12">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 " data-aos="fade-up">
          <Typography variant="h4" color="primary" className="font-bold">
            Our Process
          </Typography>
          <Typography variant="h2" color="dark" className="font-bold leading-tight">
            Precision Manufacturing at every stage of Filtration
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed max-w-[70%]">
            At JSC Baltic Filter, every product is crafted through a controlled and consistent process. From raw material preparation to final delivery, each stage is monitored to ensure superior quality, durability, and performance.
          </Typography>
        </div>

        {/* Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-8 min-[2100px]:gap-12 min-[3200px]:gap-20 relative z-10">
          {processSteps.map((step, index) => (
            <div
              key={step.num}
              className="relative flex flex-col items-center text-center bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow h-full"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image with Number Badge */}
              <div className="relative mb-6 shrink-0 process-img-wrapper">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full rounded-full object-cover shadow-inner"
                />
                <div className="absolute left-1/2 -translate-x-1/2 bg-primary text-white flex items-center justify-center rounded-full font-bold shadow-md process-badge">
                  {step.num}
                </div>
              </div>

              {/* Icon */}
              <div className="shrink-0 flex items-center justify-center process-icon-wrapper">
                <img src={step.icon} alt={`${step.title} icon`} className="h-full w-full object-contain" />
              </div>

              {/* Title */}
              <Typography variant="h3" color="dark" className="font-bold mb-3">
                {step.title}
              </Typography>

              {/* Description */}
              <Typography variant="p" color="muted" className="leading-relaxed mb-6 text-sm">
                {step.desc}
              </Typography>

              {/* Bottom Line */}
              <div className="bg-primary mt-auto rounded-full process-bottom-line" />

              {/* Connecting Line (Desktop Only) */}
              {index < processSteps.length - 1 && (
                <div className="hidden xl:flex absolute bg-primary/30 items-center justify-center z-0 process-conn-line">
                  <div className="rounded-full bg-primary process-conn-dot" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
