"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function PetronasSection() {
  return (
    <section className="w-full py-16 bg-secondary overflow-hidden">
      <div className="custom-container flex flex-col gap-10 lg:gap-14">

        {/* Desktop Layout (Staggered Columns) */}
        <div className="hidden lg:flex flex-row gap-10 min-[3800px]:gap-14">
          
          {/* Left Column */}
          <div className="w-[58.7%] flex flex-col gap-10 min-[3800px]:gap-14">
            <div className="w-full aspect-[963/547] rounded-3xl overflow-hidden shrink-0" data-aos="fade-up">
              <img src="/moto/petronas/petronas1.jpg" alt="PETRONAS Innovative Services" className="w-full h-full object-cover" />
            </div>
            
            <div className="flex flex-col justify-center" data-aos="fade-up" data-aos-delay="100">
              <Typography variant="h2" color="white" className="mb-4 font-semibold">
                PETRONAS Industrial Solutions: Expert Solutions
              </Typography>
              <Typography variant="p" color="white" className="leading-relaxed mb-8 max-w-[90%]">
                Here at PETRONAS Industrial Solutions, we continuously have your needs and wants in the forefront of our minds. Providing class A services to help you run your operation with maximum efficiency and reliability is what we do best.
              </Typography>
              <div className="flex flex-wrap items-center gap-4">
                <Button text="Contact Our Experts" href="#" showIcon={true} />
                <Button text="Download Our Brochure" href="#" showIcon={true} variant="outline" />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-[41.3%] flex flex-col gap-10 min-[3800px]:gap-14">
            <div className="flex flex-col justify-start" data-aos="fade-up" data-aos-delay="100">
              <Typography variant="h2" color="white" className="mb-6 font-semibold">
                PETRONAS Providing Innovative Services
              </Typography>
              <Typography variant="p" color="white" className="leading-relaxed mb-4">
                PETRONAS Expert Solutions is your partner in driving efficiency, reducing costs, and promoting sustainable growth across sectors like manufacturing, mining, and agriculture. Our services include training programmes to empower your team in lubrication practices and more, Plants and Fleet Surveys for optimized operations, and the Fluid-i system for stock monitoring and automatic management.
              </Typography>
              <Typography variant="p" color="white" className="leading-relaxed mb-4">
                We also offer real-time condition monitoring solutions, identifying potential issues before they arise and powering predictive maintenance, minimizing equipment downtime. With our Fluidlink program, we integrate our systems with your operations, providing expert consultancy and support for all lubrication challenges. Trust PETRONAS Expert Solutions to help you do more, use less, and achieve a sustainable future.
              </Typography>
              <Typography variant="p" color="white" className="leading-relaxed">
                Enhance performance with PETRONAS Expert Solutions, providing intelligent lubrication support, predictive maintenance, and optimized equipment reliability.
              </Typography>
            </div>
            
            <div className="w-full aspect-[677/413] rounded-3xl overflow-hidden shrink-0" data-aos="fade-up" data-aos-delay="200">
              <img src="/moto/petronas/petronas2.jpg" alt="PETRONAS Industrial Solutions" className="w-full h-full object-cover" />
            </div>
          </div>
          
        </div>

        {/* Mobile Layout (Sequential) */}
        <div className="flex flex-col lg:hidden gap-10">
          <div className="w-full aspect-[963/547] rounded-3xl overflow-hidden shrink-0" data-aos="fade-up">
            <img src="/moto/petronas/petronas1.jpg" alt="PETRONAS Innovative Services" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center" data-aos="fade-up">
            <Typography variant="h2" color="white" className="mb-6 font-semibold">
              PETRONAS Providing Innovative Services
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed mb-4">
              PETRONAS Expert Solutions is your partner in driving efficiency, reducing costs, and promoting sustainable growth across sectors like manufacturing, mining, and agriculture. Our services include training programmes to empower your team in lubrication practices and more, Plants and Fleet Surveys for optimized operations, and the Fluid-i system for stock monitoring and automatic management.
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed mb-4">
              We also offer real-time condition monitoring solutions, identifying potential issues before they arise and powering predictive maintenance, minimizing equipment downtime. With our Fluidlink program, we integrate our systems with your operations, providing expert consultancy and support for all lubrication challenges. Trust PETRONAS Expert Solutions to help you do more, use less, and achieve a sustainable future.
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed">
              Enhance performance with PETRONAS Expert Solutions, providing intelligent lubrication support, predictive maintenance, and optimized equipment reliability.
            </Typography>
          </div>
          <div className="flex flex-col justify-center" data-aos="fade-up">
            <Typography variant="h2" color="white" className="mb-4 font-semibold">
              PETRONAS Industrial Solutions: Expert Solutions
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed mb-8">
              Here at PETRONAS Industrial Solutions, we continuously have your needs and wants in the forefront of our minds. Providing class A services to help you run your operation with maximum efficiency and reliability is what we do best.
            </Typography>
            <div className="flex flex-wrap items-center gap-4">
              <Button text="Contact Our Experts" href="#" showIcon={true} />
              <Button text="Download Our Brochure" href="#" showIcon={true} variant="outline" />
            </div>
          </div>
          <div className="w-full aspect-[677/413] rounded-3xl overflow-hidden shrink-0" data-aos="fade-up">
            <img src="/moto/petronas/petronas2.jpg" alt="PETRONAS Industrial Solutions" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
}
