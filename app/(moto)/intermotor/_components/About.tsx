"use client";

import Link from "next/link";
import Container from "./Container";

const features = [
  {
    icon: "/moto/intermotor/about/1.png",
    title: "Global Distribution",
    description: "Trusted automotive components worldwide.",
  },
  {
    icon: "/moto/intermotor/about/2.png",
    title: "Industrial Experience",
    description: "Reliable industry expertise",
  },
  {
    icon: "/moto/intermotor/about/3.png",
    title: "Advanced Manufacturing",
    description: "Engineered for reliable performance",
  },
];

const About = () => {
  return (
    <section
      className="relative py-16 md:py-24 bg-white overflow-hidden font-[family-name:var(--font-inter)]"
      id="about-us"
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-[50fr_50fr] gap-8 items-center mb-14">
          {/* Image */}
          <div className="overflow-hidden" data-aos="fade-right">
            <img
              src="/moto/intermotor/about/about.png"
              alt="Intermotor Group facility signage"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text content */}
          <div data-aos="fade-left">
            <h2 className="heading mb-4">Trusted Automotive Solutions</h2>

            <div className="flex flex-col gap-4 mb-5">
              <p className="content">
                <span className="font-bold">Intermotor Group</span> manufactures and supplies an
                extensive portfolio of automotive components to the UK aftermarket, Europe, and
                international markets. Through a network of trusted brands, we deliver reliable
                aftermarket solutions to customers across every level of the distribution chain.
              </p>
              <p className="content">
                With decades of experience as both an Original Equipment (OE) parts supplier and
                service provider, Intermotor combines industry expertise with personalized
                customer support. Our commitment to quality and reliability ensures dependable
                solutions for automotive professionals worldwide.
              </p>
              <p className="content">
                Our vertically integrated global manufacturing facilities bring together advanced
                engineering, design, production, and rigorous testing. Combined with world-class
                manufacturing capabilities and on-time delivery, we provide OE-quality components
                that meet the highest standards of performance and durability.
              </p>
            </div>

            <Link
              href="#"
              className="navlink inline-block text-white! font-semibold! bg-primary hover:bg-primary-hover px-6 py-2.5 rounded-md transition-colors whitespace-nowrap"
            >
              Know About Us
            </Link>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white flex-row flex items-center gap-4 border border-[#EAEAEA] shadow-[0_4px_20px_rgba(0,0,0,0.06)] rounded-xl p-6 px-4"
            >
              <img src={feature.icon} alt="" className="w-14 h-14 object-contain shrink-0" />

              <div>
                <h3 className="subheading">{feature.title}</h3>
                <p className="content">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default About;
