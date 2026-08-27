"use client";

import React from "react";
import Button from "./Button";
import { Rocket, Lightbulb, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutUs() {
  const cards = [
    {
      title: "Our Mission",
      icon: <img src="/moto/launch-europe/1.png" alt="rocket" />,
      text: "Over 20 years of innovation in professional automotive diagnostics and complete workshop equipment solutions.",
    },
    {
      title: "Our Values",
      icon: <img src="/moto/launch-europe/2.png" alt="lightbulb" />,
      text: "LAUNCH Europe is committed to innovation, exceptional service, and customer satisfaction, continuously",
    },
    {
      title: "Our Vision",
      icon: <img src="/moto/launch-europe/3.png" alt="heart" />,
      text: "Driving innovation, expanding our solutions, and achieving sustainable growth in the professional workshop market.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white" id="about">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left Column: Image */}
          <div className="order-2 xl:order-1 w-full h-full min-h-[400px] xl:min-h-[600px] relative rounded-2xl overflow-hidden shadow-lg" data-aos="fade-right">
            <img
              src="/moto/launch-europe/abt.png"
              alt="Launch Europe Headquarters"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Content */}
          <div className="order-1 xl:order-2 flex flex-col justify-center" data-aos="fade-left">
            <h2 className="section-title font-heading font-normal  text-[#000000] mb-6">The Launch Europe</h2>
            
            <div className="space-y-4 mb-8 text-[#111111] section-text font-lato leading-relaxed">
              <p>
                Since 1992, LAUNCH has been a trusted innovator in professional automotive workshop equipment, continuously shaping the future of vehicle diagnostics and service technology worldwide.
              </p>
              <p>
                Headquartered in Kerpen, Germany, LAUNCH Europe GmbH serves as the central hub for the European market. From here, we develop, adapt, and distribute advanced diagnostic systems, ADAS calibration solutions, and modern workshop equipment designed to meet the evolving needs of independent workshops, dealerships, and service networks across Europe.
              </p>
              <p>
                Beyond products, LAUNCH Europe is committed to long-term partnership. We provide comprehensive training programs, technical support, and continuous software development to help workshops stay ahead in a rapidly changing automotive industry.
              </p>
            </div>

            <div className="mb-10">
              <Button href="#" variant="primary">
                Learn More
              </Button>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-6 mt-auto">
              {cards.map((card, index) => (
                <div 
                  key={index} 
                  className="border border-[#e30613] rounded-xl p-6 flex flex-col bg-white hover:shadow-md transition-shadow"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full border border-[#e30613] flex items-center justify-center text-[#e30613] flex-shrink-0">
                      {card.icon}
                    </div>
                    <h4 className="font-heading section-title1 font-normal text-[#000000] leading-tight">
                      {card.title}
                    </h4>
                  </div>
                  <p className="text-[#111111] mb-6 flex-grow leading-relaxed section-text">
                    {card.text}
                  </p>
                  <Link 
                    href="#" 
                    className="text-[#e30613] link font-normal font-heading flex items-center gap-1 hover:gap-2 transition-all mt-auto"
                  >
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
