"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";

const features = [
  {
    icon: "/moto/midac/about/innovation.png",
    title: "Innovation",
    description: "Continuous Investment to deliver advanced & reliable battery technologies.",
  },
  {
    icon: "/moto/midac/about/quality.png",
    title: "Quality",
    description: "Strict quality control & international certifications ensure products you can trust.",
  },
  {
    icon: "/moto/midac/about/sustainability.png",
    title: "Sustainability",
    description: "We adopt responsible practices and use 97% recycled materials in our lead batteries.",
  },
  {
    icon: "/moto/midac/about/global.png",
    title: "Global Presence",
    description: "A worldwide network of partners and subsidiaries to be close to our customers.",
  },
];

const About = () => {
  return (
    <section
      className="relative py-16 md:py-24 bg-white overflow-hidden font-[family-name:var(--font-inter)]"
      id="about-us"
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-[45fr_55fr] gap-14 items-center">
          {/* Text content */}
          <div data-aos="fade-right">
            <span className="inline-block text-primary text-[18px] font-semibold border border-primary rounded-full px-6 py-1 mb-6">
              About Midac
            </span>

            <h2 className="heading leading-[140%]! mb-6">
              Powering the Future with Innovation &amp; Excellence Since 1989
            </h2>

            <div className="flex flex-col gap-4 mb-8">
              <p className="content">
                Founded in Soave, Italy, in 1989, Midac S.p.A has grown into one of Europe&apos;s
                leading battery manufacturers. With over 35 years of experience, the company
                designs, produces, and distributes reliable, high-performance energy solutions for
                automotive, industrial, and energy storage applications.
              </p>
              <p className="content">
                Driven by innovation and advanced manufacturing, Midac delivers high-quality,
                sustainable energy solutions focused on performance and customer satisfaction.
              </p>
            </div>

            <div className="heading flex items-center shrink-0 mt-5">
              <Link
                href="#"
                className="group navlink text-[16px]! inline-flex border border-1 items-center gap-2 font-semibold! text-primary! bg-white hover:bg-transparent hover:border-white hover:text-white! px-6 py-2.5 rounded-xl transition-colors whitespace-nowrap"
              >
                More About Us
                <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-aos="fade-left">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white border border-[#EAEAEA] shadow-[0_4px_20px_rgba(0,0,0,0.06)] rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img src={feature.icon} alt="" className="w-14 h-14 object-contain shrink-0" />
                  <h3 className="subheading">
                    {feature.title}
                  </h3>
                </div>
                <p className="content">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
