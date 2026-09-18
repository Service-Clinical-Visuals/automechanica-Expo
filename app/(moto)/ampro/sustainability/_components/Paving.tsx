"use client";

import React from "react";
import Typography from "../../_components/Typography";

const pavingFeatures = [
  {
    id: 1,
    icon: "/moto/ampro/p1.png",
    text: "By using electric cars, we reduce our CO2 emissions and thus contribute to improving air quality and combating climate change.",
  },
  {
    id: 2,
    icon: "/moto/ampro/p2.png",
    text: "We promote responsible, resource-conscious practices to build a sustainable future for our customers and society.",
  },
  {
    id: 3,
    icon: "/moto/ampro/p3.png",
    text: "We support sustainable shipping through eco-friendly packaging and consolidated deliveries to reduce our carbon footprint.",
  },
];

const Paving = () => {
  return (
    <section
      className="w-full py-16 xl:py-24 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/moto/ampro/bg-4.png')" }}
    >
      <div className="custom-container flex flex-col gap-8 min-[3800px]:gap-16">

        {/* Section Heading */}
        <div className="flex flex-col items-center gap-3 text-center" data-aos="fade-up">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <Typography variant="h6" color="secondary" className="font-bold uppercase tracking-wider text-sm">
              AMPRO SUSTAINABILITY
            </Typography>
          </div>
          <Typography variant="h2" color="white" className="font-bold leading-tight">
            Paving the Way for a Sustainable Tomorrow
          </Typography>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 min-[3800px]:gap-16 items-stretch">

          {/* Left: Text and Feature Blocks */}
          <div className="w-full xl:col-span-5 flex flex-col gap-8 justify-center">

            <Typography variant="p" color="white" className="!font-bold leading-relaxed" data-aos="fade-right">
              Through our sustainability initiatives, we also want to inspire other companies to
              develop and implement their own sustainability strategies. Together, we can
              create a more sustainable future and protect our planet.
            </Typography>

            <div className="flex flex-col gap-4">
              {pavingFeatures.map((feature, index) => (
                <div
                  key={feature.id}
                  className="bg-[#689B4C]/75 rounded-lg p-5 md:p-6 flex items-start sm:items-center gap-5 md:gap-6 shadow-lg backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                >
                  <div className="w-10 h-10 md:w-14 md:h-14 min-[3800px]:w-18 min-[3800px]:h-18 shrink-0 flex items-center justify-center">
                    <img src={feature.icon} alt="icon" className="w-full h-full object-contain" />
                  </div>
                  {/* Vertical Divider */}
                  <div className="w-[1.5px] self-stretch bg-[#9fd566] shrink-0 opacity-60"></div>
                  <Typography variant="p" color="white" className="leading-snug text-sm md:text-base">
                    {feature.text}
                  </Typography>
                </div>
              ))}
            </div>

          </div>

          {/* Right: Image */}
          <div className="w-full xl:col-span-7 aspect-[959/525] relative rounded-2xl overflow-hidden shadow-2xl min-h-[300px] md:min-h-[400px] xl:min-h-full" data-aos="fade-left">
            <img
              src="/moto/ampro/section44.png"
              alt="Sustainable Tomorrow"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Paving;
