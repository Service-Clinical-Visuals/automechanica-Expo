"use client";

import React from "react";
import Container from "./Container";
import Typography from "./Typography";
import HexagonButton from "./HexagonButton";

const AboutUs = () => {
  const features = [
    { title: "Own research lab", icon: "/moto/UTB/icon1.png" },
    { title: "50+ years of experience", icon: "/moto/UTB/icon2.png" },
    { title: "Production in the Netherlands", icon: "/moto/UTB/icon3.png" },
    { title: "Certified quality", icon: "/moto/UTB/icon1.png" },
  ];

  return (
    <section className="pt-20 bg-white relative" id="about">
      <Container>
        {/* Top Split Layout */}
        <div className="flex flex-col 2xl:flex-row gap-8 2xl:gap-8 items-start mb-20">

          {/* Left Content */}
          <div className="w-full 2xl:w-1/2 flex flex-col order-1 2xl:order-1" data-aos="fade-right" data-aos-duration="1000">
            <img
              src="/moto/UTB/heading1.png"
              alt="About Us"
              className="h-12 md:h-17 lg:h-18 w-auto object-contain mb-4 object-left" />
            <div className="flex items-center gap-4 mb-6">
              <div className=" w-[20%] h-1 rounded bg-secondary"></div>
              <Typography variant="h4" color="primary" className="italic">
                About UTB
              </Typography>
            </div>

            <div className="space-y-5 mb-8 tracking-wide leading-5" >
              <Typography variant="body" color="body">
                UTB is more than 60 years, nationally and internationally active in the
                distribution, production and supplies of fuel, lubricants, greases, coolants /
                antifreeze and customized high quality petroleum products including various
                kerosines, white oils, paraffin wax, vaselines and base oils.
              </Typography>
              <Typography variant="body" color="body">
                UTB is doing business with large national and international petrochemical
                companies for the purchase of all its products. To guarantee the quality of its
                products, business is done directly with reputable manufacturers who produce
                according to desired specifications.
              </Typography>
            </div>

            <div>
              <HexagonButton text="Read More About Us" href="#about" />
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full 2xl:w-1/2 order-2 2xl:order-2" data-aos="fade-left" data-aos-duration="1000">
            <div className="rounded-xl overflow-hidden shadow-2xl h-[300px] md:h-[450px] 2xl:h-[500px] w-full">
              <img
                src="/moto/UTB/section2.png"
                alt="UTB Facility"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // fallback to section2 if section3 fails
                  (e.target as HTMLImageElement).src = "/moto/UTB/section2.png";
                }}
              />
            </div>
          </div>

        </div>
      </Container>

      {/* Bottom Features Banner */}
      <Container className="pb-16" data-aos="fade-up" data-aos-duration="1000">
        <div className="bg-primary rounded-xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center group" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="mb-4 h-16 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-12 md:w-22 h-auto object-contain brightness-0 invert"
                  />
                </div>
                <h4 className="text-white font-bold italic text-base mt-2 md:text-xl px-2">
                  {feature.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
