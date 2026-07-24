"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function AboutUs() {
  const checkItems = [
    {
      title: "German Heritage",
      text: "Founded in Germany with a commitment to premium automotive innovation."
    },
    {
      title: "Trusted Quality",
      text: "Reliable additives, lubricants, and technical spray solutions trusted by automotive professionals."
    },
    {
      title: "Global Presence",
      text: "Serving customers across Asia Pacific and international markets through a strong distribution network."
    },
    {
      title: "Innovation-Driven",
      text: "Continuously developing advanced solutions to enhance vehicle performance and simplify maintenance."
    }
  ];

  return (
    <section id="about" className="w-full py-16 bg-white overflow-hidden">
      <div className="custom-container flex flex-col 2xl:grid 2xl:grid-cols-12 gap-8 items-center">
        
        {/* Text Content Block */}
        <div className="flex flex-col gap-6 order-1 2xl:col-start-1 2xl:col-span-6 w-full pr-0 2xl:pr-6" data-aos="fade-right">
          
          {/* Headings */}
          <div className="flex flex-col gap-3">
            <Typography variant="h2" color="dark" className="font-bold leading-tight">
              About Us
            </Typography>
            <Typography variant="h4" color="dark" className="italic ">
              Engineering Automotive Excellence Since Day One
            </Typography>
          </div>

          {/* Paragraphs */}
          <div className="flex flex-col gap-4">
            <Typography variant="p" color="dark" className="leading-relaxed">
              Founded in Germany by Klaus Bosshammer, OWS—short for "Oder Was Sonst" ("Or What Else?")—was established with a clear vision: to deliver premium automotive solutions that set new standards in quality and performance. Specializing in additives, technical spray products, and lubricants, OWS has built a reputation for innovation, reliability, and trusted expertise.
            </Typography>
            
            <Typography variant="p" color="dark" className="leading-relaxed">
              Launching under the memorable slogan "Vitamins for Your Car," OWS transformed the way vehicle maintenance was approached. Its high-performance additives quickly became an essential part of routine automotive care, earning the trust of professional workshops, distributors, and vehicle owners worldwide.
            </Typography>
            
            <Typography variant="p" color="dark" className="leading-relaxed">
              Today, OWS continues to be a leading supplier of automotive additives and technical spray products to official automotive distributors across numerous markets. With its Asia Pacific headquarters in Singapore and a growing presence across Asia and international markets, OWS delivers solutions to customers worldwide.
            </Typography>
          </div>

          {/* Checkmark List */}
          <div className="flex flex-col gap-4 mt-2">
            {checkItems.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <img src="/moto/ows/Vector1.png" alt="Check" className="w-5 h-5 object-contain shrink-0 mt-0.5" />
                <Typography variant="p" color="dark" className="leading-relaxed">
                  <span className="font-bold text-gray-900">{item.title}</span> – {item.text}
                </Typography>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-4" data-aos="fade-up" data-aos-delay="100">
            <Button text="Learn More" href="#about" />
          </div>
        </div>

        {/* Image Block */}
        <div className="w-full order-2 2xl:col-start-7 2xl:col-span-6 h-full flex" data-aos="fade-left">
          <img
            src="/ows/section2.png"
            alt="About OWS"
            className="w-full rounded-2xl object-cover min-h-[250px] h-full shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
