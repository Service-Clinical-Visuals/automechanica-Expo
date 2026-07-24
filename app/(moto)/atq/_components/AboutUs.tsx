"use client";

import React from "react";
import Image from "next/image";
import Typography from "./Typography";
import Button from "./Button";

const features = [
  {
    title: "OEM-Quality Standards",
    description: "Manufactured for precise fit and reliable performance.",
  },
  {
    title: "Trusted Worldwide",
    description: "Supporting the Global Automotive Aftermarket.",
  },
  {
    title: "Quality Assurance",
    description: "Every product undergoes rigorous quality control.",
  },
  {
    title: "Customer-Focused Service",
    description: "Dependable Customer Support.",
  },
  {
    title: "Performance & Reliability",
    description: "Engineered for long-lasting durability and safety.",
  },
];

const AboutUs = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative w-full overflow-hidden">
      <div className="custom-container px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 xl:gap-16 items-center">
          
          {/* Content Block */}
          <div className="col-span-1 md:col-span-12 xl:col-span-6 flex flex-col space-y-8 order-1 xl:order-1">
            <div className="space-y-6">
              <Typography variant="h2" color="dark" className="font-bold">
                About ATQ Germany
              </Typography>
              
              <div className="space-y-4">
                <Typography variant="p" color="dark" className="leading-relaxed">
                  ATQ Germany, "Autoteile mit Qualität Germany," is committed to delivering premium automotive parts that combine exceptional manufacturing quality, precise fitment, and dependable performance. Built on the principles of quality, speed, and customer-focused service, we provide aftermarket solutions that meet the highest industry standards.
                </Typography>
                <Typography variant="p" color="dark" className="leading-relaxed">
                  Every product is developed with strict quality control to ensure reliability, durability, and consistent performance. With a strong commitment to innovation and customer satisfaction, ATQ Germany has earned the trust of partners and customers across the global automotive aftermarket.
                </Typography>
              </div>
            </div>

            {/* Bullet Cards List */}
            <div className="flex flex-col space-y-4">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-4 bg-white border border-primary rounded-xl p-4 shadow-sm"
                  data-aos="fade-up" 
                  data-aos-delay={idx * 100}
                >
                  <div className="w-6 h-6 shrink-0 flex items-center justify-center">
                    <Image 
                      src="/moto/atq/Vector.png" 
                      alt="Check Icon" 
                      width={24} 
                      height={24} 
                      className="object-contain" 
                    />
                  </div>
                  <div>
                    <Typography variant="p" color="dark">
                      <strong >{feature.title}</strong>- {feature.description}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button text="Learn More" href="#about" showIcon={true} />
            </div>
          </div>

          {/* Image Block */}
          <div className="col-span-1 md:col-span-12 xl:col-span-6 order-2 xl:order-2 flex justify-center" data-aos="fade-left">
            <div className="relative w-full aspect-[790/749] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/moto/atq/section2.png"
                alt="ATQ Exhibition Booth"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
