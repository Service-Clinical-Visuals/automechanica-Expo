"use client";

import React from "react";
import Typography from "./Typography";

const Mission = () => {
  const cards = [
    {
      title: "Premium Quality",
      icon: (
        <img src="/moto/celik/Vector1.png" alt="Premium Quality" className="w-8 h-8 min-[2100px]:w-12 min-[2100px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16 object-contain" />
      ),
      text: "We maintain the highest standards in manufacturing and testing to deliver filters that ensure maximum performance and long-lasting reliability.",
    },
    {
      title: "Reliable Performance",
      icon: (
        <img src="/moto/celik/Vector2.png" alt="Reliable Performance" className="w-8 h-8 min-[2100px]:w-12 min-[2100px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16 object-contain" />
      ),
      text: "Our filters are engineered to deliver consistent performance and long-lasting durability, even under the most demanding conditions.",
    },
    {
      title: "Customer Commitment",
      icon: (
        <img src="/moto/celik/Vector3.png" alt="Customer Commitment" className="w-8 h-8 min-[2100px]:w-12 min-[2100px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16 object-contain" />
      ),
      text: "We are dedicated to customer satisfaction through exceptional service, expert technical support, and long-term partnerships.",
    }
  ];

  return (
    <section id="mission" className="w-full py-16 min-[2100px]:py-24 min-[3800px]:py-25 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10 min-[2100px]:gap-20 min-[3800px]:gap-28 items-center">
        
        {/* Header Section */}
        <div className="flex flex-col gap-4 text-center items-center " data-aos="fade-up">
          <div className="inline-flex flex-col">
            <span className="w-1/2 h-[2px] bg-primary mb-1 self-start"></span>
            <Typography variant="span" color="primary" className="font-bold tracking-wide">
              Our Mission & Vision
            </Typography>
            <span className="w-1/2 h-[2px] bg-primary mt-1 self-end"></span>
          </div>
          <Typography variant="h2" color="dark" className="font-bold leading-snug">
            Excellence That Drives Every Step
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed mt-2 xl:max-w-[70%]">
            We focus on delivering consistent quality, dependable performance, and long-term partnerships. Our approach combines advanced engineering with customer-first thinking to ensure reliable solutions across every application.
          </Typography>
        </div>

        {/* Mission Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 min-[2100px]:gap-12 min-[3800px]:gap-16 relative z-10">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center hover:border-primary transition-colors p-8 min-[2100px]:p-12 min-[3800px]:p-16 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-20 h-20 min-[2100px]:w-28 min-[2100px]:h-28 min-[3800px]:w-36 min-[3800px]:h-36 rounded-full border border-primary text-primary flex items-center justify-center mb-6 min-[2100px]:mb-10 min-[3800px]:mb-14 min-[2100px]:border-2  transition-colors duration-300">
                {card.icon}
              </div>
              <Typography variant="h3" color="dark" className="font-bold mb-4">
                {card.title}
              </Typography>
              <div className="w-[35%] h-[2px] bg-primary mb-6"></div>
              <Typography variant="p" color="muted" className="leading-relaxed">
                {card.text}
              </Typography>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Mission;
