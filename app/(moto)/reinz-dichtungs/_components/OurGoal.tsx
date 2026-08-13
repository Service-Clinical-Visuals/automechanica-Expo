"use client";

import React from "react";
import Button from "./Button";

export default function OurGoal() {
  return (
    <section 
      className="w-full py-20 md:py-32 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/moto/reinz-dichtungs/bg.png')" }}
      id="our-goal"
    >
    

      <div className="custom-container relative z-10 ">
        <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
          
          {/* Heading with lines */}
          <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
                <div className="h-1 w-14 bg-[var(--primary)] rounded-full"></div>
                <h2 className="section-title font-bold text-black font-oswald text-center ">
              Our Goal Always Stays the Same – To Work with the Best
            </h2>
           <div className="h-1 w-14 bg-[var(--primary)] rounded-full"></div>
          </div>

          {/* Paragraphs */}
              <div className="space-y-6 mb-8 text-[#111111] section-text leading-relaxed font-poppins">
            <p>
              At Victor Reinz, customer trust is built on decades of engineering excellence, premium-quality sealing solutions, and a relentless commitment to innovation. As a trusted Original Equipment (OE) manufacturer and aftermarket supplier, we develop advanced gasket and sealing technologies that meet the highest industry standards for quality, precision, and performance.
            </p>
            <p>
              Every product is engineered using cutting-edge materials, precision manufacturing processes, and rigorous testing to ensure exceptional reliability in demanding operating conditions. From passenger vehicles and commercial trucks to industrial and advanced mobility applications, our sealing solutions are designed to provide accurate fitment, leak-free performance, and long-lasting durability. With a strong focus on continuous improvement and customer satisfaction, Victor Reinz continues to deliver innovative sealing technologies that automotive professionals and manufacturers worldwide rely on with confidence.
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <Button href="#certifications" variant="primary">
              View Awards & Certifications
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
