"use client";

import React from "react";
import Link from "next/link";
import HexagonButton from "./HexagonButton";

const advantagesData = [
  {
    title: "Original\nEquipment Quality",
    desc: "This is of great importance in the automotive industry. This quality ensures that the products fulfil the manufacturer's requirements. Customers can rely on performance and durability."
  },
  {
    title: "High\nTesting Standards",
    desc: "Our quality control tests guarantee the reliability and safety of the products. Customers can rely on the strict quality criteria, which leads to a high level of satisfaction and trust in the brand."
  },
  {
    title: "Global\nMarket Presence",
    desc: "BREMI has an extensive market presence that extends worldwide. This international distribution strengthens BREMI's position as a trusted partner in the automotive industry."
  },
  {
    title: "Technical\nExpertise",
    desc: "One decisive aspect is BREMI's extensive technical expertise. Many years of experience make it possible to develop innovative solutions that are customised to the needs of car manufacturers."
  }
];

export default function Advantages() {
  return (
    <section className="pt-20 xl:pt-20 relative w-full bg-white">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1A1A1A] hidden xl:block"></div>
      <div className="absolute top-0 left-0 w-2/3 h-full bg-[#e30613] hidden xl:block opacity-5"></div>

      <div className="custom-container relative z-10">
        {/* Heading & Subtitle */}
        <div className="text-center max-w-5xl mx-auto mb-12 lg:mb-16" data-aos="fade-up">
          <h2 className="section-title text-[#E72E39] mb-6 lg:mb-6">
            Benefit From The Advantages Of BREMI Car Systems
          </h2>
          <p className="section-text text-[#1a1a1a] leading-[1.6]">
            Every Product Is Manufactured To Meet The Highest Industry Standards Using Advanced Engineering And Premium Materials. Designed For Exceptional Reliability, Long-Lasting Durability, And Consistent Performance, Our Automotive Components Deliver Dependable Operation Across A Wide Range Of Vehicle Applications And Demanding Driving Conditions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-10 mb-12 lg:mb-16">
          {advantagesData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 lg:p-10 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.20)] flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 h-full border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="card-title text-[#333333] mb-4 h-[80px] mt-8 flex items-center justify-center whitespace-pre-line">
                {item.title}
              </h3>
              <div className="w-full h-[1px] bg-gray-200 mb-6"></div>
              <p className="section-text text-[#6E777D] leading-[1.6] mb-6 flex-grow">
                {item.desc}
              </p>
              <Link href="#" className="btn-text text-[#E72E39] hover:underline tracking-wide mt-2 lg:mt-2 mb-8 inline-block underline">
                Read More &gt;&gt;
              </Link>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-4" data-aos="fade-up">
          <HexagonButton text="Discover The Benefits" href="#" />
        </div>
      </div>
    </section>
  );
}
