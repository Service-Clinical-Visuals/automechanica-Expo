"use client";

import React from "react";
import Container from "./Container";
import Typography from "./Typography";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white" data-aos="fade-up">
      <Container>
        <div className="flex flex-col xl:flex-row items-stretch gap-8 xl:gap-8 ">

          {/* Image Container */}
          <div className="w-full xl:w-1/2 order-2 xl:order-1" data-aos="zoom-in-right" data-aos-duration="1200" data-aos-delay="100">
            <div className="relative w-full h-full min-h-[300px] xl:min-h-0 overflow-hidden border border-gray-200">
              <img
                src="/moto/tesla/section2.png"
                alt="Tesla About Us - Automotive wheel"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Container */}
          <div className="w-full xl:w-1/2 flex flex-col order-1 xl:order-2" data-aos="fade-up-left" data-aos-duration="1000" data-aos-delay="300">
            {/* Section Dots */}
            <div className="flex gap-1.5 mb-3">
              <div className="w-2.5 h-2.5 bg-[var(--color-primary)]"></div>
            </div>

            <Typography variant="h2" color="dark" className=" mb-6">
              About Us
            </Typography>

            <div className="flex flex-col gap-5 mb-8">
              <Typography variant="p" color="dark" className="leading-relaxed">
                TESLA is the largest manufacturer of ignition cables in Europe and is also a leading supplier of other ignition parts for cars. Ignition cables, modules and coil on plug boots a system that produces and feeds spark into your car.
              </Typography>

              <Typography variant="p" color="dark" className="leading-relaxed">
                Since the second half of the 20th century, the TESLA brand has been synonymous with a wide range of high-quality automotive fuses and bulbs. These are small but crucial parts to protect you and your car. TESLA's new product line is a dynamically growing range of sensors for industrial and automotive applications. Sensors have become an integral part of the automobile and their importance is increasing in all industries.
              </Typography>

              <Typography variant="p" color="dark" className="leading-relaxed">
                TESLA BLATNÁ is the largest European manufacturer of ignition cables and one of the main suppliers of other ignition parts throughout Europe. TESLA offers 50 years of experience in ignition technology, more than 1,500 parts for vehicle ignition systems and almost 100% coverage of vehicles operating in Europe and neighbouring regions.
              </Typography>
            </div>

            <div className="mt-2">
              <Button text="Learn More" variant="primary" showIcon={true} />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
