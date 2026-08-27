"use client";

import React from "react";
import Link from "next/link";
import Container from "./Container";

const services = [
  {
    title: "Welding",
    description:
      "All welding work is carried out in-house using the usual methods (MAG and TIG). We routinely process and weld aluminum and its alloys (sheets, tubes, flat stock and profiles). Steel and stainless steel are also no problem for us.",
  },
  {
    title: "Glass and Water Jets",
    description:
      "We offer high-quality cleaning services and customized surface treatment for industrial, trade, and private clients. Our glass blasting is characterized by gentle material treatment and a clean, uniform surface finish.",
  },
];

export default function Services() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-12 md:py-24" id="services">
      <Container>
        <div className="flex flex-col gap-10 md:gap-14">
          {/* Heading */}
          <div className="text-center" data-aos="fade-up">
            <h2 className="heading text-[26px] md:text-[32px]">
              Our <span className="text-secondary">Services</span>
            </h2>
            <p className="content mt-2">
              Custom-made products, reconstructions, repairs, conversions and new builds
            </p>
          </div>

          {/* Row 1: Intro + service cards | Mechanics image */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 items-center 2xl:items-start">
            <div className="flex flex-col gap-6" data-aos="fade-right">
              <p className="content mt-5">
                Individual services, such as the production of radiator and air conditioning
                parts, tank repairs and various sheet metal work, are also part of our range of
                services.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {services.map((service) => (
                  <div
                    key={service.title}
                    className="border border-secondary rounded-md p-5 text-center flex flex-col"
                  >
                    <div className="flex items-center justify-center gap-4 pb-3 mb-3 mt-3 border-b border-gray-200">
                      <img src="/moto/dasis/tool.png" alt="" className="w-6 h-6 object-contain" />
                      <h3 className="heading text-[28px]!">{service.title}</h3>
                    </div>
                    <p className="content text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full" data-aos="fade-left">
              <img
                src="/moto/dasis/services/right.png"
                alt="DASIS technicians at work"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>

          {/* Row 2: Chassis image | Description + Explore Product */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 items-center -mt-10">
            <div className="w-full mt-10" data-aos="fade-right">
              <img
                src="/moto/dasis/services/left.png"
                alt="Classic car restoration chassis"
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            <div className="flex flex-col gap-5" data-aos="fade-up">
              <div className="space-y-4 content">
                <p>
                  Our extensive range of services is complemented by custom fabrications, repair
                  welding, and blasting work. This includes the reproduction and restoration of
                  classic car radiators and tanks. We derust your tank, sandblast it, and seal it
                  with a special coating, thus protecting it from rust.
                </p>
                <p>
                  The repair of motorcycle, car and truck tanks &ndash; not only of classic cars,
                  but also boat, agricultural/construction machinery and tanks of stationary
                  generators &ndash; is part of our daily business.
                </p>
                <p>
                  In short &ndash; we restore and reconstruct all steel tanks that are internally
                  corroded and can consequently clog fuel lines, jets, and carburetors. Our many
                  years of experience make us a strong partner in this area as well.
                </p>
              </div>

              <Link
                href="#"
                className="hidden max-w-54 rounded-tr-[16px] rounded-bl-[16px] heading-white font-normal! text-[24px]! leading-[150%]! py-2 px-6 lg:flex items-center justify-center bg-primary uppercase hover:bg-primary/90 transition-colors shadow-md"
              >
                Explore Product
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
