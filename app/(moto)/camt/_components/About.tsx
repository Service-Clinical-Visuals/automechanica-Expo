"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";

const stats = [
  {
    value: "20+",
    description: "Years of experience in automotive sensor development.",
  },
  {
    value: "30+",
    description: "Trusted worldwide in OEM and aftermarket applications.",
  },
  {
    value: "IATF 16949",
    description: "Certified for global automotive quality standards",
  },
];

const About = () => {
  return (
    <section
      className="relative py-16 md:py-24 bg-white overflow-hidden font-[family-name:var(--font-inter)]"
      id="about-us"
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-[45fr_55fr] gap-10 items-center mb-14">
          {/* Text content */}
          <div data-aos="fade-right">
            <h2 className="heading mb-4">Driving Innovation in Automotive Sensor Technology</h2>

            <div className="flex flex-col gap-4 mb-6">
              <p className="content">
                At <span className="font-bold">CAMT Automotive</span>, we advance automotive
                sensor technology through innovation, precision engineering, and advanced
                manufacturing. Since 2004, we have become a trusted global manufacturer of
                high-performance sensors and thermal management components, serving customers in
                over 30 countries.
              </p>
              <p className="content">
                Our product portfolio includes NOx sensors, AdBlue sensors, oxygen sensors,
                pressure sensors, temperature sensors, and thermal management solutions.
                Engineered with advanced technology, our products deliver reliable performance,
                improved efficiency, and reduced emissions.
              </p>
              <p className="content">
                Backed by advanced manufacturing facilities, innovative R&D, and strict quality
                control processes, CAMT ensures every product delivers exceptional precision,
                durability, and reliability. We continue to invest in technology and sustainable
                practices to provide trusted automotive solutions that support cleaner mobility
                worldwide.
              </p>
            </div>

            <Link
              href="#"
              className="navlink inline-flex items-center gap-2 text-white! font-normal! bg-primary hover:bg-primary-hover px-6 py-2.5 rounded-md transition-colors whitespace-nowrap"
            >
              View More
              <ArrowRight size={18} strokeWidth={2} />
            </Link>
          </div>

          {/* Image */}
          <div className="overflow-hidden rounded-2xl" data-aos="fade-left">
            <img
              src="/moto/camt/about.png"
              alt="CAMT Automotive exhibition stand"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="rounded-2xl border border-[#EAEAEA] shadow-[0_4px_20px_rgba(0,0,0,0.06)] p-8 md:p-10"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center px-4 py-6 md:py-0 first:pt-0 items-center flex flex-col">
                <div className="heading text-primary! mb-3 text-[48px]!">
                  {stat.value}
                </div>
                <p className="content max-w-xs">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
