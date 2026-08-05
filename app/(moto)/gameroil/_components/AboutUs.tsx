"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 min-[3800px]:py-25 bg-white overflow-hidden">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-8 lg:gap-12 items-start min-[3800px]:items-center">

        {/* Content (Heading + Text + Button) */}
        {/* Mobile: Order 1, Desktop: Col 1-6 */}
        <div className="flex flex-col mt-7 gap-6 order-1 xl:col-span-6 w-full" data-aos="fade-right">
          {/* Heading Group */}
          <div className="flex flex-col gap-2">
            <Typography variant="h2" className="font-bold leading-tight uppercase text-gray-900">
              WHO WE ARE
            </Typography>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-4">
            <Typography variant="p" className="leading-relaxed text-gray-600">
              Gameroil SAL, founded in 1947, specializes in manufacturing high-quality lubricants, antifreeze, and greases for diverse automotive and industrial applications. With decades of industry expertise and its own trusted brands — G OIL, MAX OIL, LUBEROL, and GRAPHENOL — Gameroil has established a strong global presence, delivering reliable lubrication solutions across more than 20 countries.
            </Typography>

            <Typography variant="p" className="leading-relaxed text-gray-600">
              Committed to customer satisfaction, Gameroil delivers high-quality products, direct manufacturer support, and expert technical guidance to ensure exceptional performance, reliability, and efficiency. With an extensive range of advanced lubrication solutions, the company continues to meet the demanding requirements of diverse industries and applications worldwide through innovation, quality, and trusted expertise.
            </Typography>

            <Typography variant="p" className="leading-relaxed text-gray-600">
              With a strong foundation of experience and innovation, Gameroil continues to grow through advanced manufacturing, reliable partnerships, and strict quality standards. The company delivers high-performance lubrication solutions designed for lasting reliability and customer satisfaction worldwide.
            </Typography>
          </div>

          <div className="w-full mt-4" data-aos="fade-right" data-aos-delay="100">
            <Button text="Know About Us" href="#about" showIcon={false} />
          </div>
        </div>

        {/* Right Side (Image + Cards) */}
        {/* Mobile: Order 2 & 3, Desktop: Col 7-12 */}
        <div className="w-full flex flex-col gap-6 order-2 xl:col-start-7 xl:col-span-6">
          {/* Image */}
          <div className="w-full h-full" data-aos="fade-left">
            <img
              src="/moto/gameroil/section2.png"
              alt="Gameroil Manufacturing"
              className="w-full rounded-2xl object-cover min-h-[300px] lg:min-h-[400px] min-[2500px]:min-h-[600px] min-[3800px]:min-h-[900px] shadow-lg"
            />
          </div>

          {/* Features Card */}
          <div className="w-full bg-white border border-gray-100 shadow-xl rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6" data-aos="fade-up" data-aos-delay="200">

            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center gap-3 flex-1">
              <div className="w-16 h-16 min-[2500px]:w-24 min-[2500px]:h-24 min-[3800px]:w-32 min-[3800px]:h-32 flex items-center justify-center shrink-0">
                <img src="/moto/gameroil/v1.png" alt="Icon" className="w-12 h-12 min-[2500px]:w-20 min-[2500px]:h-20 min-[3800px]:w-28 min-[3800px]:h-28 object-contain" />
              </div>
              <Typography variant="h3" className="font-bold !text-[#4B5563]">
                25+ Years Expertise
              </Typography>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center gap-3 flex-1 border-y sm:border-y-0 sm:border-x border-gray-200 py-6 sm:py-0 w-full sm:w-auto">
              <div className="w-16 h-16 min-[2500px]:w-24 min-[2500px]:h-24 min-[3800px]:w-32 min-[3800px]:h-32 flex items-center justify-center shrink-0">
                <img src="/moto/gameroil/v2.png" alt="Icon" className="w-12 h-12 min-[2500px]:w-20 min-[2500px]:h-20 min-[3800px]:w-28 min-[3800px]:h-28 object-contain" />
              </div>
              <Typography variant="h3" className="font-bold !text-[#4B5563]">
                Global Brands
              </Typography>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center gap-3 flex-1">
              <div className="w-16 h-16 min-[2500px]:w-24 min-[2500px]:h-24 min-[3800px]:w-32 min-[3800px]:h-32 flex items-center justify-center shrink-0">
                <img src="/moto/gameroil/v3.png" alt="Icon" className="w-12 h-12 min-[2500px]:w-20 min-[2500px]:h-20 min-[3800px]:w-28 min-[3800px]:h-28 object-contain" />
              </div>
              <Typography variant="h3" className="font-bold !text-[#4B5563]">
                Technical Support
              </Typography>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
