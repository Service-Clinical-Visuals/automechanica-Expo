"use client";

import Link from "next/link";
import Container from "./Container";

const About = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden" id="about-us">
      <Container className="relative z-10">
        <h2 className="heading text-center mb-6">About Zeta Erre</h2>

        <p className="content text-center max-w-[1500px] mx-auto mb-12">
          For over 25 years, Zeta-Erre has been a trusted name in the automotive aftermarket,
          specializing in the design, production, and distribution of high-quality mechanical
          transmission components. Serving customers across Italy and international markets, we
          are committed to delivering reliable solutions that meet the evolving demands of modern
          vehicles. Our extensive product portfolio includes CV Joints, CV Shafts, Tripods, and
          transmission components, continuously expanded to ensure broad vehicle coverage and
          compatibility. Every product is engineered with precision and manufactured under strict
          quality control to achieve accurate tolerances, dependable performance, and long-lasting
          durability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-10 mb-10" data-aos="fade-up">
          <div className="overflow-hidden h-full">
            <img
              src="/moto/zeta-erre/aboutus/1.png"
              alt="Zeta-Erre manufacturing facility"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-rows-2 gap-10">
            <div className="overflow-hidden">
              <img
                src="/moto/zeta-erre/aboutus/2.png"
                alt="Zeta-Erre exhibition stand"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src="/moto/zeta-erre/aboutus/3.png"
                alt="Zeta-Erre loading bays"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6" data-aos="fade-up">
          <p className="content max-w-4xl">
            By overseeing every stage of the production process—from engineering and manufacturing
            to final inspection—we ensure that each component meets OEM-equivalent standards for
            fit, function, and reliability. This commitment enables us to provide aftermarket
            solutions that closely match original equipment in both design and performance.
          </p>

          <div className="flex items-center shrink-0 mt-10">
            <Link
              href="#"
              className="navlink text-[#111111]! font-medium! bg-primary hover:bg-[#e0961c] px-6 py-1.5 transition-colors whitespace-nowrap"
            >
              Learn More
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
