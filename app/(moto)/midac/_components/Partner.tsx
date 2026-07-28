"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";

const features = [
  "Developed using advanced technologies to ensure high performance, durability, and long-lasting reliability across diverse applications.",
  "Engineered with a strong focus on sustainability, reducing environmental impact while maintaining superior energy efficiency and output.",
  "Designed to meet modern energy demands with innovative solutions that enhance safety, consistency, and operational excellence.",
];

export default function Partner() {
  return (
    <section
      className="relative w-full py-16 md:py-24 bg-white overflow-hidden font-[family-name:var(--font-inter)]"
      id="partner"
    >
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-[45fr_55fr] gap-10 items-center">
          {/* Left: Text content */}
          <div data-aos="fade-right">
            <span className="inline-block text-primary text-[18px] font-semibold border border-primary rounded-full px-6 py-1 mb-6">
              Our Mission
            </span>

            <h2 className="heading mb-5">Powering a Greener Future</h2>

            <div className="flex flex-col gap-4 mb-6">
              <p className="content">
                We develop state-of-the-art battery solutions driven by passion, dedication, and
                continuous innovation. Our focus is on creating advanced technologies that not
                only deliver reliable performance but also support a greener and safer future. By
                seamlessly integrating technological progress with environmental responsibility,
                we strive to build energy solutions where sustainability and efficiency go hand in
                hand.
              </p>
              <p className="content">
                We create advanced battery solutions driven by innovation and a commitment to a
                greener, safer future&mdash;where technology and sustainability work together.
              </p>
            </div>

            <ul className="flex flex-col gap-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <ArrowRight size={18} strokeWidth={2} className="text-primary shrink-0 mt-0.5" />
                  <p className="content">{feature}</p>
                </li>
              ))}
            </ul>

            <div className="heading flex items-center shrink-0 mt-5">
              <Link
                href="#"
                className="group navlink text-[16px]! inline-flex border border-1 items-center gap-2 font-semibold! text-primary! bg-white hover:bg-transparent hover:border-white hover:text-white! px-6 py-2.5 rounded-xl transition-colors whitespace-nowrap"
              >
                Mission &amp; Values
                <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full" data-aos="fade-left">
            <img
              src="/moto/midac/partner.png"
              alt="Aerial view of a forest with a circular arrow symbolizing sustainability"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
