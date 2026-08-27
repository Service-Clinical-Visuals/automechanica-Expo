"use client";

import React from "react";
import Typography from "./Typography";

export default function CoreValues() {
  const values = [
    {
      title: "Commitment",
      description: "We place people at the center of everything we do, delivering reliable solutions and exceptional customer satisfaction.",
      icon: "/moto/autochemi/core1.png"
    },
    {
      title: "Ecology",
      description: "We operate with environmental responsibility, following international standards and sustainable manufacturing practices.",
      icon: "/moto/autochemi/core2.png"
    },
    {
      title: "Technology",
      description: "We continuously invest in innovation, advanced technologies, and product development to achieve the highest quality standards.",
      icon: "/moto/autochemi/core3.png"
    },
    {
      title: "Openness",
      description: "We foster transparent collaboration with customers, partners, and stakeholders based on mutual trust.",
      icon: "/moto/autochemi/core4.png"
    },
    {
      title: "Honesty",
      description: "We conduct business with integrity, respect, professionalism, and ethical principles that inspire trust and lasting relationships.",
      icon: "/moto/autochemi/core5.png"
    }
  ];

  return (
    <section className="w-full py-16  bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-5 items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6  mx-auto " data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold leading-tight tracking-wide">
            Our Core Values
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed xl:max-w-[65%] ">
            At AutoChemie Bitterfeld GmbH, our values guide every aspect of our business. From developing innovative lubricant solutions to building lasting customer relationships, we are committed to quality, sustainability, and integrity. These principles inspire our team to deliver exceptional products while creating long-term value for our customers, partners, and the environment.
          </Typography>
        </div>

        {/* Separator Line */}
        <div className="w-full h-[0.5px] bg-gray-300" data-aos="fade-up" data-aos-delay="50"></div>

        {/* Content */}
        <div className="w-full grid grid-cols-1 xl:grid-cols-12 gap-12 items-center pt-2" data-aos="fade-up" data-aos-delay="100">
          
          {/* Left: Values List */}
          <div className="xl:col-span-5 flex flex-col gap-5 order-2 xl:order-1">
            {values.map((val, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <div className="w-14 h-14 xl:w-16 xl:h-16 2xl:w-24 2xl:h-24 shrink-0 flex items-center justify-center bg-primary rounded-full">
                  <img src={val.icon} alt={val.title} className="w-8 h-8 xl:w-11 xl:h-11 2xl:w-16 2xl:h-16 object-contain brightness-0 invert" />
                </div>
                <div className="flex flex-col gap-1 mt-0.5 xl:mt-1">
                  <Typography variant="h4" color="dark" className="font-bold tracking-wide">
                    {val.title}
                  </Typography>
                  <Typography variant="p" color="muted" className="leading-relaxed">
                    {val.description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Image */}
          <div className="xl:col-span-7 w-full aspect-[16/9] relative overflow-hidden rounded-[2rem] shadow-[0_10px_40px_rgb(0,0,0,0.12)] border border-gray-100 order-1 xl:order-2">
            <img 
              src="/moto/autochemi/section3.png" 
              alt="Core Values Facility" 
              className="w-full h-full object-cover object-center"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
