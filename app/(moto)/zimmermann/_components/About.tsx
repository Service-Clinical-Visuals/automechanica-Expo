"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Container from "./Container";

const stats = [
  "60+ Years of German braking expertise",
  "4,000+ Premium brake components",
  "60+ Countries served worldwide",
  "1 Million+ Parts available for fast delivery",
];

const About = () => {
  return (
    <section className="relative py-16 md:py-24 bg-[#F4F4F4] overflow-hidden" id="about-us">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-[65fr_35fr] gap-14 items-center">
          {/* Image */}
          <div className="overflow-hidden order-2 xl:order-1" data-aos="fade-right">
            <img
              src="/moto/zimmermann/about.png"
              alt="Zimmermann manufacturing facility"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Text content */}
          <div className="order-1 xl:order-2" data-aos="fade-left">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-3.5 h-3.5 bg-secondary shrink-0" />
              <h2 className="heading uppercase leading-none text-[#1A1A1A]">
                The Zimmermann Story
              </h2>
            </div>

            <p className="content text-[20px]! italic font-semibold! mb-5">
              Engineering Confidence. Delivering Performance.
            </p>

            <div className="flex flex-col gap-5 mb-7">
              <p className="content">
                For more than 60 years, Otto Zimmermann GmbH has been at the forefront of German
                braking technology, developing and manufacturing premium brake components for
                both automotive manufacturers and the independent aftermarket. Every product is
                engineered with precision, ensuring exceptional safety, reliability, and
                performance on every journey.
              </p>

              <p className="content text-[17px]!">
                From advanced production facilities spanning 29,000+ m² to state-of-the-art
                automated manufacturing and rigorous quality control, Zimmermann delivers over
                4,000 brake solutions to customers in more than 60 countries. With an inventory of
                1 million+ parts, the company combines engineering excellence, innovation, and
                dependable global supply to meet the evolving demands of the automotive industry.
              </p>
            </div>

            <ul className="flex flex-col gap-3 mb-8">
              {stats.map((stat) => (
                <li key={stat} className="flex items-center gap-2.5">
                  <CheckCircle2 size={19} strokeWidth={2} className="text-secondary shrink-0" />
                  <span className="content text-[17px]! font-medium!">{stat}</span>
                </li>
              ))}
            </ul>


            <div className="hidden heading xl:flex items-center shrink-0">
              <Link
                href="#"
                className="bg-secondary hover:bg-secondary-hover text-white! text-[16px]! tracking-[0px]! leading-[24px]! uppercase px-6 py-2.5 rounded transition-colors whitespace-nowrap"
              >
                Discover Our Legacy
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
