"use client";

import React from "react";
import Button from "./Button";
import Typography from "./Typography";
import { FlaskConical, ShieldCheck, Truck, Headset, ArrowUpRight } from "lucide-react";

export default function AboutUs() {
  const features = [
    {
      icon: <img src="/moto/proquisur-sl/abt1.png" alt="Wide range of Industrial & specialty Chemicals" className="w-auto h-auto object-contain" />,
      text: "Wide range of Industrial & specialty Chemicals"
    },
    {
      icon: <img src="/moto/proquisur-sl/abt2.png" alt="Focus on Quality, Safety & Compliance" className="w-auto h-auto object-contain" />,
      text: "Focus on Quality, Safety & Compliance"
    },
    {
      icon: <img src="/moto/proquisur-sl/abt3.png" alt="Reliable Supply & Consistent Performance" className="w-auto h-auto object-contain" />,
      text: "Reliable Supply & Consistent Performance"
    },
    {
      icon: <img src="/moto/proquisur-sl/abt4.png" alt="Customer-Driven Solutions & Technical Support" className="w-auto h-auto object-contain" />,
      text: "Customer-Driven Solutions & Technical Support"
    }
  ];

  return (
    <section className="py-16 xl:py-20 bg-white">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-14 items-center">

          {/* Left Image */}
          <div className="w-full h-full flex order-2 xl:order-1 xl:col-span-6" data-aos="fade-right">
            <img
              src="/moto/proquisur-sl/galeria.png"
              alt="Proquisur Facility"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-4 order-1 xl:order-2 xl:col-span-6" data-aos="fade-left">
            {/* Heading */}
            <div className="flex flex-col gap-2 items-start">
              <Typography variant="h4" className="!text-[#6FB420] manrope font-bold text-sm tracking-wide">
                About Proquisur, S.L.
              </Typography>
              <Typography variant="h2" className="section-title text-[#202020] manrope font-bold leading-tight">
                Built on Experience and Innovation
              </Typography>
            </div>

            {/* Paragraphs */}
            <div className="flex flex-col text-[#494949] inter section-text">
              <Typography variant="p">
                We are a trusted provider of industrial and specialty chemical solutions, delivering high-quality products designed to meet the evolving needs of various industries. With a strong focus on innovation, safety, and performance, we develop reliable solutions that enhance operational efficiency and product effectiveness.
              </Typography>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 mb-2">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 p-5 border border-[#6FB420] rounded-md bg-white min-h-[80px] max-w-[375px] 3xl:max-w-md w-full">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#f4faef] rounded-full shrink-0">
                    {feature.icon}
                  </div>
                  <Typography variant="span" color="none" className="text-[#202020] inter font-medium text-sm leading-snug line-clamp-2">
                    {feature.text}
                  </Typography>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="mt-1">
              <Button href="#" variant="primary" className="!rounded-md group">
                Learn More <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
