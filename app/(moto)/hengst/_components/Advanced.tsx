"use client";

import { ArrowRight } from "lucide-react";
import Container from "./Container";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

const features = [
  "Designed with high-quality filtration media that efficiently captures dust, pollen, bacteria, mold spores, soot, and airborne contaminants, ensuring cleaner and healthier cabin air.",
  "Durable & High-Quality Filter Media",
  "Manufactured under stringent quality control standards and thoroughly tested to ensure reliable performance, durability, and consistent filtration throughout its service life.",
];

export default function Advanced() {
  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      <Container>
        <img
            src="/moto/hengst/about/gear1.png"
            alt=""
            aria-hidden="true"
            className="hidden md:block absolute -top-6 left-1 w-64 lg:w-80 pointer-events-none select-none rotate-x-180"
        />
        <img
            src="/moto/hengst/04.png"
            alt=""
            aria-hidden="true"
            className="hidden md:block absolute top-24 right-1 w-30 pointer-events-none select-none"
        />
      </Container>
      <Container className="relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16 items-center">
          {/* Left: Video */}
          <div className="w-full aspect-video overflow-hidden" data-aos="fade-right">
            <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover" />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-6" data-aos="fade-up">
            <h2 className="heading">Advanced Filtration Technology</h2>

            <p className="content">
              Air filters are indispensable for the safe and efficient operation of petrol and
              diesel engines: depending on their performance, engines draw in up to 2,400 m³ of
              air per hour with a particle content of up to 50 mg/m³. Dust and other foreign
              particles in the air flow not only impair engine performance, they also damage the
              entire engine and its electronic components.
            </p>

            <ul className="space-y-5">
              {features.map((feature, i) => (
                <li
                  key={feature}
                  className="flex items-center gap-5 content"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <img src="/moto/hengst/engine.png" alt="" className="w-8 h-auto shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="inline-flex items-center self-start" data-aos="fade-up" data-aos-delay="200">
              <a
                href="#"
                className="font-semibold px-10 py-3 bg-btncolor btntext transition-opacity hover:opacity-90"
              >
                Explore Product
              </a>
              <span className="w-14 h-14 -ml-5 bg-white border-1 border-btncolor rotate-45 flex items-center justify-center shrink-0">
                <ArrowRight size={40} className="-rotate-45 text-primary" />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
