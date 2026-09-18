"use client";

import React, { useState } from "react";
import Typography from "../../_components/Typography";

const features = [
  {
    id: 0,
    image: "/moto/ampro/a1.png",
    icon: "/moto/ampro/ic1.png",
    title: "Premium commercial vehicle parts since 2007.",
    description: "Reliable commercial vehicle components with advanced NOx solutions.",
  },
  {
    id: 1,
    image: "/moto/ampro/a2.png",
    icon: "/moto/ampro/ic2.png",
    title: "20,000 Units in Permanent Stock",
    description: "Maintaining a strong stock of NOx sensors for fast and reliable supply across European vehicle applications.",
  },
  {
    id: 2,
    image: "/moto/ampro/a3.png",
    icon: "/moto/ampro/ic3.png",
    title: "Over 3000 NOx sensor models",
    description: "Wide coverage of European vehicle applications with reliable NOx sensing and emission-control solutions.",
  },
  {
    id: 3,
    image: "/moto/ampro/a4.png",
    icon: "/moto/ampro/ic4.png",
    title: "Dual-Sensor Technology",
    description: "Dual NOx sensors monitor emissions before and after the catalyst for accurate, efficient exhaust control.",
  },
  {
    id: 4,
    image: "/moto/ampro/a5.png",
    icon: "/moto/ampro/ic5.png",
    title: "Real-Time NOx Monitoring",
    description: "Real-time NOx monitoring enables accurate emission control and optimized exhaust aftertreatment.",
  },
];

const FeaturesAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="w-screen py-16 xl:py-24 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/moto/ampro/bg-3.png')" }}
    >
      <div className="custom-container flex flex-col gap-10 xl:gap-12 min-[3800px]:gap-20 items-center">

        {/* Section Heading */}
        <div className="flex flex-col items-center gap-3 min-[3800px]:gap-6 text-center" data-aos="fade-up">
          <div className="flex items-center gap-2 min-[3800px]:gap-4">
            <span className="w-2 h-2 min-[3800px]:w-4 min-[3800px]:h-4 rounded-full bg-secondary"></span>
            <Typography variant="h6" color="secondary" className="font-bold uppercase tracking-wider text-sm min-[3800px]:text-2xl">
              PRECISION EMISSION CONTROL
            </Typography>
          </div>
          <Typography variant="h2" color="white" className="font-bold leading-tight">
            High-Quality Components & Advanced Emission Control
          </Typography>
        </div>

        {/* Accordion Container */}
        <div className="w-full flex flex-col lg:flex-row gap-4 min-[3800px]:gap-8 h-[800px] md:h-[600px] lg:h-auto lg:aspect-[1200/444] mt-4 min-[3800px]:mt-10" data-aos="fade-up" data-aos-delay="100">
          {features.map((feature, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={feature.id}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                className={`relative rounded-2xl min-[3800px]:rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-500 ease-in-out flex-shrink-0
                  ${isActive
                    ? "lg:flex-[575] flex-[2] basis-[300px] lg:basis-0"
                    : "lg:flex-[266] flex-1 basis-[100px] lg:basis-0"}
                `}
              >
                {/* Background Image */}
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                />

                {/* Gradient Overlay for better text readability */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-80'}`}></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-6 min-[3800px]:p-12 pb-6 lg:pb-8 min-[3800px]:pb-16">
                  {isActive ? (
                    /* Active State Content */
                    <div className="flex flex-col items-start gap-3 min-[3800px]:gap-6 animate-fade-in">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 min-[3800px]:w-28 min-[3800px]:h-28 rounded-full bg-secondary flex items-center justify-center shrink-0">
                        <img src={feature.icon} alt="icon" className="w-6 h-6 lg:w-10 lg:h-10 min-[3800px]:w-16 min-[3800px]:h-16 object-contain" />
                      </div>
                      <Typography variant="h3" color="white" className="font-bold leading-tight mt-1 min-[3800px]:mt-4">
                        {feature.title}
                      </Typography>
                      <Typography variant="p" color="white" className="text-white/80 leading-snug">
                        {feature.description}
                      </Typography>
                    </div>
                  ) : (
                    /* Inactive State Content */
                    <div className="w-full h-full flex items-end justify-center">
                      <div className="flex items-end gap-4 lg:gap-6 min-[3800px]:gap-12 h-full relative">
                        {/* Icon */}
                        <div className="w-10 h-10 lg:w-16 lg:h-16 min-[3800px]:w-28 min-[3800px]:h-28 rounded-full bg-secondary flex items-center justify-center shrink-0 z-10">
                          <img src={feature.icon} alt="icon" className="w-5 h-5 lg:w-10 lg:h-10 min-[3800px]:w-16 min-[3800px]:h-16 object-contain" />
                        </div>
                        {/* Rotated Text */}
                        <div className="w-4 lg:w-6 min-[3800px]:w-16 relative h-full flex items-end ml-1 lg:ml-2 min-[3800px]:ml-6">
                          <Typography
                            variant="h3"
                            color="white"
                            className="font-bold whitespace-nowrap absolute bottom-2 min-[3800px]:bottom-6 left-2 min-[3800px]:left-6 origin-bottom-left -rotate-90 hidden lg:block"
                          >
                            {feature.title}
                          </Typography>
                          <Typography
                            variant="p"
                            color="white"
                            className="font-bold whitespace-nowrap absolute bottom-2 left-2 origin-bottom-left -rotate-90 lg:hidden"
                          >
                            {feature.title}
                          </Typography>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturesAccordion;
