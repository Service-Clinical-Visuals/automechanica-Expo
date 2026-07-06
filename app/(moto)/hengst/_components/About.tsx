"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Container from "./Container";

const ACCENT = "#1B4B91";
const YELLOW = "#F6C90E";

const About = () => {
  return (
    <section className="relative py-16 md:py-24 bg-[#F1F1F14D] overflow-hidden" id="about-us">
      {/* Decorative background elements */}
      <Container>
        <img
          src="/moto/hengst/about/01.png"
          alt=""
          aria-hidden="true"
          className="hidden md:block absolute top-16 right-1 w-30 pointer-events-none select-none"
        />
        <img
          src="/moto/hengst/about/gear1.png"
          alt=""
          aria-hidden="true"
          className="hidden md:block absolute bottom-0 right-1 w-64 lg:w-80 pointer-events-none select-none"
        />
      </Container>
      <Container className="relative z-10">
        <div className="flex flex-col xl:flex-row gap-12 items-center">
          {/* Left: Images */}
          <div className="w-full xl:w-[45%] flex flex-col gap-6" data-aos="fade-right">
            <img
              src="/moto/hengst/about/image1.png"
              alt="Hengst Filtration headquarters"
              className="w-full h-auto object-cover"
            />
            <img
              src="/moto/hengst/about/image2.png"
              alt="Hengst Filtration sign"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="w-full xl:w-[55%]">
            <h2
              className="heading mb-6"
              data-aos="fade-up"
            >
              The Hengst brand
            </h2>

            <div className="space-y-5 content">
              <p data-aos="fade-up">
                Founded in 1958 in Münster, Westphalia, Hengst Filtration is a family-owned company
                that develops innovative filtration and fluid management solutions with more than
                3,700 employees at 28 locations worldwide. Hengst Filtration thus makes
                future-oriented technologies possible in all industries worldwide.
              </p>

              <p data-aos="fade-up" data-aos-delay="100">
                We supply technologically leading filtration systems in the fields of plant and
                mechanical engineering, industrial filtration, hydraulics, Life Science and Health
                Care. Our customized solutions are used in medical cleanrooms, air conditioning
                systems, cleaning equipment, industrial systems, power tools and robots. We are also
                a series supplier to the international vehicle and engine industry and a development
                partner for sustainable drive and mobility concepts.
              </p>

              <p data-aos="fade-up" data-aos-delay="200">
                The Hengst brand has stood for top quality in filtration for 65 years. Initially
                known as &ldquo;H-Filter for oil, fuel and air&rdquo;, we have been developing and
                manufacturing filtration and fluid management solutions for renowned automotive and
                engine manufacturers since the very beginning. Hengst is now a recognized brand for
                many areas of application in industry - including industrial air filtration, small
                appliances and medical technology.
              </p>
            </div>

            {/* Learn More Button */}
            <div className="mt-8 inline-flex items-center" data-aos="fade-up" data-aos-delay="250">
              <a
                href="#"
                className="font-semibold bg-btncolor btntext px-12 py-3 transition-opacity hover:opacity-90"
              >
                Learn More
              </a>
              <span
                className="w-14 h-14 -ml-5 bg-white border-1 border-btncolor rotate-45 flex items-center justify-center shrink-0"
              >
                <ArrowRight size={40} className="-rotate-45 text-primary" />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
