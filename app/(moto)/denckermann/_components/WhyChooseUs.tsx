"use client";
import React from "react";
import Image from "next/image";
import PartsFinder from "./PartsFinder";

export default function WhyChooseUs() {
  const benefits = [
    {
      id: "01",
      title: "Wide range of products",
      description: "Offering a diverse selection of precisely engineered parts tailored for a wide array of brands and models."
    },
    {
      id: "02",
      title: "Professional service",
      description: "We are committed to providing support at every stage of our collaboration, ensuring that you have the resources and assistance."
    },
    {
      id: "03",
      title: "Global reach, local care",
      description: "Our logistics system is designed for maximum efficiency, ensuring that your orders are processed swiftly."
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white relative">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center">
          
          {/* Left Content */}
          <div data-aos="fade-up">
            <h2 className="section-title text-[var(--color-primary)] font-medium oswald mb-6">
              Why Choose Denckermann Parts?
            </h2>
            <p className="section-text text-[#484848] sora font-normal mb-10 leading-[1.8]">
              At Denckermann, we know that a wide range of high-quality products is the foundation of long-term relationships with our customers. That's why we not only supply parts but also provide comprehensive customer support.
            </p>

            <div className="flex flex-col gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)] flex items-center justify-center  group-hover:scale-110 transition-transform shadow-md oswald">
                   <h4 className="card-number font-medium oswald text-[var(--color-primary)]">{benefit.id}</h4> 
                  </div>
                  <div>
                    <h3 className="card-title font-medium oswald text-[var(--color-primary)] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="section-text text-[#484848] sora font-normal leading-[1.8]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div data-aos="fade-left" className="relative h-full w-full min-h-[400px] xl:min-h-[500px] rounded-3xl overflow-hidden ">
          <img src="/moto/denckermann/whychoose.png" alt="Warehouse worker" className="object-cover" />
          </div>

        </div>

        {/* Embedded PartsFinder block */}
        <PartsFinder />
        
      </div>
    </section>
  );
}
