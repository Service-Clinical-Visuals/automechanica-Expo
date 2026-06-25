"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function EngineOils() {
  const benefits = [
    "Superior engine protection against wear, corrosion, and component damage",
    "Consistent lubrication and protection throughout the oil lifecycle",
    "Enhanced fuel efficiency with reduced internal friction",
    "Available in fully synthetic, semi-synthetic, and mineral formulations",
    "Outstanding engine cleanliness and advanced sludge control",
    "Suitable for gasoline, diesel, and motorcycle engine applications",
  ];

  return (
    <section className="py-24 bg-primary text-white">
      <div className="custom-container">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-10 items-center">
          {/* Left: Video */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1" data-aos="fade-right">
            <div className="aspect-video relative overflow-hidden bg-white/10 rounded-sm">
              <DynamicVideoPlayer type="short" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-6 order-1 lg:order-2" data-aos="fade-left">
            <Typography variant="h2" color="white" weight="extrabold">
              Engine Oils
            </Typography>
            <div className="flex flex-col gap-3">
              <Typography variant="p" color="white" className="">
                Engine oils are the heart of reliable engine performance, providing essential protection, lubrication, and cleanliness for modern vehicles. Aripet's range of engine oils is formulated using high-quality base oils and advanced additive technologies to ensure outstanding protection against wear, friction, oxidation, and deposit formation.
              </Typography>
              <Typography variant="p" color="white" className="">
                Designed for gasoline, diesel, and motorcycle engines, our engine oils help maintain engine efficiency, improve fuel economy, and extend service life under a wide range of operating conditions. Whether driving in urban traffic, on long-distance journeys, or under demanding workloads, Aripet engine oils deliver consistent performance and dependable protection.
              </Typography>
              <Typography variant="p" color="white" className="">
                Our portfolio includes fully synthetic, semi-synthetic, and mineral-based formulations developed to meet the requirements of modern engines and international performance standards. With excellent low-temperature fluidity and high-temperature stability, Aripet engine oils ensure rapid protection during cold starts while maintaining durability under extreme operating conditions.
              </Typography>
            </div>
            <Button text="Explore Product" variant="primary" />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/50 mb-8"></div>

        {/* Bottom Section: Why Choose */}
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-5 items-start">
          {/* Left: Heading */}
          <div className="w-full lg:w-1/4" data-aos="fade-up">
            <Typography variant="h2" color="white" weight="extrabold" className="leading-tight">
              Why Choose Aripet Engine Oils?
            </Typography>
          </div>

          {/* Right: Benefits Grids */}
          <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="100">

            {/* Box 1 */}
            <div className="bg-white text-dark p-8 md:p-8 flex flex-col justify-center gap-1 shadow-sm">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <Typography variant="p" className=" text-[#484848] leading-relaxed ">
                    {benefit}
                  </Typography>
                </div>
              ))}
            </div>

            {/* Box 2 */}
            <div className="bg-white text-dark p-8 md:p-8 flex flex-col justify-center gap-1 shadow-sm">
              {benefits.slice(3, 6).map((benefit, index) => (
                <div key={index + 3} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <Typography variant="p" className=" leading-relaxed ">
                    {benefit}
                  </Typography>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
