"use client";
import React from "react";
import Button from "./Button";

export default function Heritage() {
  const bulletPoints = [
    {
      title: "Established in 1975",
      description:
        "Over five decades of expertise as a trusted automotive parts manufacturer.",
    },
    {
      title: "Complete Product Portfolio",
      description:
        "Industry-leading range of steering, suspension, and braking solutions for diverse vehicle applications.",
    },
    {
      title: "Quality You Can Trust",
      description:
        "Engineered, manufactured, and rigorously tested to deliver safety, reliability, and long-lasting performance.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 bg-white overflow-hidden px-4 lg:px-16">
      <div className="custom-container">
        {/* Top Section: Title and Introduction */}
        <div
          className="flex flex-col items-center text-center max-w-7xl mx-auto"
          data-aos="fade-up"
        >
          <h2 className="anton-font font-normal text-[#2a2a2a] section-title leading-tight mb-8 tracking-wide">
            Our Heritage Of Automotive Excellence
          </h2>
          <p className="oswald-font font-normal text-[#4a4a4a] section-text leading-relaxed max-w-7xl">
            Since 1975, AYD has been a trusted, family-owned manufacturer of steering, suspension, and braking components for passenger and light commercial vehicles. With decades of engineering expertise, product innovation, and advanced in-house manufacturing, AYD delivers high-quality, safety-critical solutions trusted worldwide.
          </p>
        </div>

        {/* Top Divider */}
        <div className="w-full border-t border-gray-200 my-10 md:my-12 " />

        {/* Middle Section: Two Columns (Image + Content) */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center">
          {/* Left Column: Factory Aerial Image */}
          <div
            className="xl:col-span-7 w-full overflow-hidden rounded-[20px] md:rounded-[24px] shadow-lg bg-gray-100"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <img
              src="/moto/aydoto/abt.jpg"
              alt="AYD Automotive Industry Facility"
              className="w-full h-auto object-cover hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
          </div>

          {/* Right Column: Content and Bullet Points */}
          <div
            className="xl:col-span-5 flex flex-col justify-center"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h3 className="anton-font font-normal text-[#2a2a2a] section-subtitle leading-snug mb-8 tracking-wide">
              Trusted Automotive Excellence Since 1975.
            </h3>
            <p className="oswald-font font-normal text-[#4a4a4a] section-text leading-relaxed mb-8">
              AYD&apos;s commitment to continuous New-to-Range and New Product development reflects its promise to provide a complete automotive solution. With one of the industry&apos;s most comprehensive product portfolios, AYD meets modern vehicle requirements while staying ahead of market demands. This dedication enables customers to source premium-quality components from trusted manufacturers.
            </p>

            {/* Bullet Points List */}
            <div className="flex flex-col gap-4 md:gap-5 xl:hidden 2xl:flex">
              {bulletPoints.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3.5 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#c99843] text-white flex items-center justify-center mt-0.5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-3.5 h-3.5 stroke-[3]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="oswald-font font-normal text-[#4a4a4a] card-text leading-relaxed">
                    <span className="font-medium text-[#1a1a1a] mr-1">
                      {item.title} –
                    </span>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Points in a Row Below Image and Content - Specifically for xl screen sizes (1280px to 1535px, including 1440px laptops) */}
        <div className="hidden xl:grid 2xl:hidden grid-cols-3 gap-8 mt-10 xl:mt-12" data-aos="fade-up">
          {bulletPoints.map((item, index) => (
            <div key={index} className="flex items-start gap-3.5 group">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#c99843] text-white flex items-center justify-center mt-0.5 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-3.5 h-3.5 stroke-[3]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="oswald-font font-normal text-[#4a4a4a] card-text leading-relaxed">
                <span className="font-medium text-[#1a1a1a] mr-1">
                  {item.title} –
                </span>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Divider */}
        <div className="w-[95%] mx-auto border-t border-gray-200 my-10 md:my-12  " />

        {/* Bottom Call to Action Bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-10 "
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className="oswald-font font-normal text-[#4a4a4a] section-text leading-relaxed max-w-6xl text-center md:text-left">
            As a 100% family-owned company with over five decades of experience, AYD combines engineering excellence, advanced manufacturing, and rigorous testing to produce safety-critical components trusted worldwide.
          </p>
          <div className="flex-shrink-0">
            <Button href="#">Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
