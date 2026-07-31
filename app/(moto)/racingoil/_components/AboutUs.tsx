"use client";

import React from "react";
import Button from "./Button";
import { Check } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="w-full min-h-screen flex flex-col justify-center py-16 md:py-16 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">

        {/* Top Header Section */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto gap-4 mb-8 md:mb-10" data-aos="fade-up">
          <h2 className="section-title font-primary font-bold text-[#222222] leading-tight">
            About Racing Oil
          </h2>
          <p className="section-text font-secondary text-[#585858] leading-relaxed">
            Racing Oil is a company built from the ground up by people highly experienced in the lubricants industry, with more than 30 years of training in this sector. This has allowed us, through hard work and dedication, to make Racing Oil a recognised and respected brand in just a few years, both nationally and internationally, establishing our presence in countries such as France, Portugal, Morocco, Israel, and others.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-400 mb-10 md:mb-14"></div>

        {/* Bottom Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center w-full">

          {/* Left Side: Image */}
          <div className="lg:col-span-6 w-full rounded-2xl md:rounded-[28px] overflow-hidden" data-aos="fade-right">
            <img
              src="/moto/racingoil/abt.png"
              alt="About Racing Oil Meeting"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Side: Content */}
          <div className="lg:col-span-6 flex flex-col gap-6 w-full" data-aos="fade-left">
            <p className="font-secondary section-text text-[#585858] leading-relaxed">
              We have managed to consolidate the brand both in the automotive and agricultural sectors, and most especially in the motorcycle industry. We are also leaders in the forestry sector with our specialty oils for chainsaws and hydraulic systems. Our perseverance and determination help us make this project more exciting every day. With the help of our professionals and our clients, we are turning what was once a dream into a reality.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

              {/* Card 1 */}
              <div className="bg-white border border-gray-100 rounded-l p-3 flex items-start gap-3 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-5 h-5 rounded-full bg-[#011689] flex items-center justify-center shrink-0 mt-1">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <p className="font-secondary text-[#585858] card-text font-regular leading-relaxed">
                  Over 30 Years of Extensive Expertise in Developing High-Performance Lubricant Solutions
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-gray-100 rounded-l p-3 flex items-start gap-3 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-5 h-5 rounded-full bg-[#011689] flex items-center justify-center shrink-0 mt-1">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <p className="font-secondary text-[#585858] card-text font-regular leading-relaxed">
                  Recognised International Brand Trusted by Customers Across Multiple Global Markets
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-gray-100 rounded-l p-3 flex items-start gap-3 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-5 h-5 rounded-full bg-[#011689] flex items-center justify-center shrink-0 mt-1">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <p className="font-secondary text-[#585858] card-text font-regular leading-relaxed">
                  Established Presence in France, Portugal, Morocco, Israel, and Other International Regions
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white border border-gray-100 rounded-l p-3 flex items-start gap-3 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-5 h-5 rounded-full bg-[#011689] flex items-center justify-center shrink-0 mt-1">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <p className="font-secondary text-[#585858] card-text font-regular leading-relaxed">
                  Built on Strong Customer Partnerships, Professional Expertise, and Long-Term Reliability
                </p>
              </div>

            </div>

            <div className="mt-2">
              <Button text="Learn More About Us" href="#about-more" variant="primary" showIcon={true} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
