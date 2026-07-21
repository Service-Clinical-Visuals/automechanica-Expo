"use client";

import React from "react";
import Button from "./Button";
import Typography from "./Typography";

export default function Products() {
  const services = [
    {
      title: "Precision\nManufacturing",
      icon: "/moto/bg-automotive/manufacturing 1.png",
      description: "Advance manufacturing facilities ensuring consistency & quality"
    },
    {
      title: "Global\nDistribution",
      icon: "/moto/bg-automotive/globe 1.png",
      description: "Worldwide logistics network for reliable & fast delivery"
    },
    {
      title: "Quality\nTesting",
      icon: "/moto/bg-automotive/shield 1.png",
      description: "Rigorous testing up to 1 million cycles for maximum reliability"
    },
    {
      title: "OEM\nSupply",
      icon: "/moto/bg-automotive/deal 1.png",
      description: "Trusted by leading brands for OEM quality components"
    },
    {
      title: "Technical\nSupport",
      icon: "/moto/bg-automotive/support 1.png",
      description: "Expert support to help you find the right parts, every time"
    },
    {
      title: "Same Day\nDispatch",
      icon: "/moto/bg-automotive/box 1.png",
      description: "Orders before 4pm dispatched the same day"
    }
  ];

  return (
    <section className="py-20 xl:py-20 bg-white text-center">
      <div className="custom-container">
        {/* Heading */}
        <div className="flex flex-col gap-3 items-center mb-6" data-aos="fade-up">
          <div className="inline-flex flex-col">
            <Typography variant="h4" className="text-[#185E2D] orbitron-font font-semibold tracking-widest text-[15px] uppercase  pb-0.5">OUR SERVICES</Typography>
            <div className="w-1/2 h-[1.5px] bg-[#185E2D] self-end"></div>
          </div>
          <Typography variant="h2" className="section-title text-[#202020] orbitron-font font-semibold leading-tight">
            Comprehensive Support & Service Excellence
          </Typography>
        </div>

        {/* Subtitle */}
        <Typography variant="p" className="max-w-7xl mx-auto text-[#191919] font-['Open_Sans'] section-text mb-10 leading-relaxed tracking-wider" data-aos="fade-up" data-aos-delay="100">
          We deliver integrated support services—from technical assistance to fast, reliable logistics—ensuring seamless operations, improved efficiency, and consistent performance. Designed for distributors, workshops, and partners, our solutions focus on quality, speed, and reliability to support business success at every stage.
        </Typography>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-6 text-left" data-aos="fade-up" data-aos-delay="200">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-6 md:p-5 lg:p-6 flex flex-col items-start h-full drop-shadow-sm hover:shadow-md transition-shadow duration-300 rounded-sm"
            >
              <div className="flex flex-col items-start gap-4 mb-3">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-auto h-auto object-contain max-h-12"
                />
                <Typography variant="h3" className="text-[#202020] font-bold text-sm uppercase leading-snug font-['Montserrat'] whitespace-pre-line">
                  {service.title}
                </Typography>
              </div>
              <Typography variant="p" className="text-[#191919] text-xs leading-relaxed font-['Open_Sans'] mt-auto">
                {service.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
