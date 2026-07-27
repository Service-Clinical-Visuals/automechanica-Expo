"use client";
import React from "react";
import Button from "./Button";

export default function MissionVision() {
  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden px-4 lg:px-16">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12  items-center ">
          {/* Left Column - Content */}
          <div
            className="xl:col-span-7 flex flex-col justify-center "
            data-aos="fade-right"
            data-aos-delay="100"
          >
            {/* Main Title */}
            <h2 className="anton-font font-normal text-[#2a2a2a] section-title leading-tight mb-4 tracking-wide">
              Driven By Purpose. Focused on The Future.
            </h2>
            <p className="oswald-font font-normal text-[#4a4a4a] section-text leading-relaxed">
              At AYD Oto Endüstri ve Sanayi Tic. A.Ş., our mission and vision are driven by innovation, engineering excellence, and premium quality. We are committed to delivering reliable, safety-critical automotive solutions while building lasting partnerships and shaping the future of the global automotive aftermarket.
            </p>

            {/* Divider 1 */}
            <div className="w-full border-t border-gray-200 my-6 md:my-8" />

            {/* Our Mission */}
            <div className="mb-6">
              <h3 className="anton-font font-normal text-[#2a2a2a] section-subtitle1 leading-snug mb-3 tracking-wide uppercase">
                Our Mission
              </h3>
              <p className="oswald-font font-normal text-[#4a4a4a] section-text leading-relaxed">
                To offer our partners premium-quality products and an industry-leading range of passenger and light commercial vehicle parts, backed by exceptional service, technical expertise, and reliable support. We are committed to building long-term relationships through trust, innovation, and consistent performance, ensuring we become the partner of choice for customers who value quality, reliability, and excellence in every aspect of their business.
              </p>
            </div>

            {/* Our Vision */}
            <div>
              <h3 className="anton-font font-normal text-[#2a2a2a] section-subtitle1 leading-snug mb-3 tracking-wide uppercase">
                Our Vision
              </h3>
              <p className="oswald-font font-normal text-[#4a4a4a] section-text leading-relaxed">
                To continue investing in the future by embracing the latest advancements in design, engineering, and innovation technologies. We are committed to strengthening our position as a global leader by continuously developing high-quality, safety-critical automotive parts that deliver exceptional performance, reliability, and value. Through innovation, excellence, and customer-focused solutions, we aim to provide a complete and trusted solution for the automotive aftermarket worldwide.
              </p>
            </div>

            {/* Divider 2 */}
            <div className="w-full border-t border-gray-200 my-6 md:my-8" />

            {/* Button */}
            <div>
              <Button href="#">Discover Our Purpose</Button>
            </div>
          </div>

          {/* Right Column - Globe Graphic Image */}
          <div
            className="xl:col-span-5 flex justify-center items-center relative"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="relative w-full   flex items-center justify-center">
              <img
                src="/moto/aydoto/mission1.png"
                alt="AYD Global Mission and Vision"
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700 ease-out "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
