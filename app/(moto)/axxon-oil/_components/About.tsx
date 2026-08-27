"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Container from "./Container";

const checklist = [
  "Operating in 40+ countries with a strong international distribution network.",
  "Committed to consistent quality, performance, and long-term engine protection.",
  "Manufactured using premium base oils and advanced additive technology.",
  "Offering flexible production, custom formulations, and private label services to meet diverse customer and market requirements.",
];

const stats = [
  { icon: "/moto/axon-oil/clipboard.png", value: "5.800", label: "Quality control in 2025" },
  { icon: "/moto/axon-oil/pen.png", value: "1.145", label: "Batches in 2025" },
  { icon: "/moto/axon-oil/spiral.png", value: "232", label: "Active blend formulas" },
];

const About = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white" id="about-us">
      <Container>
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-10" data-aos="fade-up">
          <div>
            <h2 className="heading text-[26px] md:text-[30px]! mb-4">
              Our Performances as Lubricants Manufacturers
            </h2>
            <p className="content max-w-[1200px]">
              AxxonOil is an international operating company, leader in the lubricant
              production sector. We produce and distribute high quality lubricants in over
              40 countries, using only the best base oils and strictly selected additives
              packages.
            </p>
          </div>

          <button
            className="flex max-w-[130px] items-center relative shrink-0 group bg-primary text-white pl-6 pr-16 py-1.5"
          >
            <span className="navlink text-white! whitespace-nowrap">Learn More</span>
            <span className="absolute right-[-25px] top-1/2 -translate-y-1/2 w-11 h-12 shrink-0">
              <span className="absolute inset-[2px] bg-white [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
              <span className="absolute inset-[4.5px] bg-primary [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] flex items-center justify-center">
                <ArrowRight size={34} className="text-white transition-transform group-hover:translate-x-0.5" />
              </span>
            </span>
          </button>
        </div>

        <div className="h-px bg-[#00000066] my-10" />

        {/* Content row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-10 items-center">
          <div data-aos="fade-right">
            <img
              src="/moto/axon-oil/performace.png"
              alt="AxxonOil team member"
              className="w-full h-full object-cover"
            />
          </div>

          <div data-aos="fade-up">
            <p className="content mb-4">
              Under our brands Xtreme and MonteCarlo, we offer a full line of products that
              counts more than 125 articles: motor oils for cars, motorcycles, trucks,
              transmissions and brake fluids, antifreezes, lubricants for agricultural and
              industrial applications (including white oils) and greases.
            </p>

            <p className="content mb-6">
              We are also specialized in private labelling services. The combination of a
              wide range of blending formulas, many packaging options and customer-specific
              labels offers countless solutions.
            </p>

            <ul className="space-y-4">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <img src="/moto/axon-oil/check.png" alt="" className="w-5 h-5 mt-0.5 shrink-0" />
                  <span className="content">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-stretch border border-gray-200 shadow-md p-4"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-center bg-primary w-50 h-40 shrink-0 p-4">
                <img src={stat.icon} alt="" className="w-26 h-20 object-contain" />
              </div>
              <div className="flex flex-col justify-center px-5 py-4">
                <span className="heading font-medium! text-black! text-[22px]! mb-3">{stat.value}</span>
                <span className="content">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default About;
