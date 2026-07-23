"use client";

import React from "react";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="py-20 xl:py-20 bg-white">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-center">

          {/* Left Image */}
          <div className="w-full h-[300px] sm:h-[400px] xl:h-[500px] flex overflow-hidden rounded shadow-sm" data-aos="fade-right">
            <img
              src="/moto/gema-oils/About.png"
              alt="GEMAOIL Facility"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-4" data-aos="fade-left">
            {/* Heading */}
            <div className="flex items-center gap-4 w-full">
              <h2 className="text-[#FEC52E] font-medium text-xl rubik-font">About Company</h2>
              <div className="w-[100px] sm:w-[150px] h-[1px] bg-[#FEC52E]"></div>
            </div>

            {/* Title */}
            <h3 className="section-title text-[#202020] font-semibold">
              Driven by Quality, Powered by Innovation
            </h3>

            {/* Paragraph */}
            <div className="text-[#1F1F1F] section-text tracking-normal flex flex-col gap-6">
              <p>
                GEMAOIL is a trusted lubricant brand delivering high-performance motor oils developed with advanced technology and decades of expertise. Committed to quality and innovation, its products enhance engine life, improve efficiency, and ensure reliable protection across global markets.
              </p>
            </div>

            {/* Bullet points */}
            <ul className="flex flex-col gap-3 text-[#1F1F1F] section-text">
              {[
                "Certified products meeting international quality standards",
                "Advanced formulations for performance and protection",
                "Trusted by customers across multiple markets",
                "Over decades of experience in motor oils and lubricants"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 mt-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FEC52E] flex-shrink-0 mt-2"></div>
                  <p>{text}</p>
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="mt-4">
              <Button href="#" variant="primary" className="text-white">
                Know More
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
