"use client";

import React from "react";
import Link from "next/link";
import Container from "./Container";

const About = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden" id="about-us">
      <Container className="relative z-10">
        {/* Heading + intro */}
        <div className="text-center flex flex-col mb-10 items-center" data-aos="fade-up">
          <h2 className="heading mb-4 text-[38px]!">
            About Our <span className="text-secondary">DASIS</span>
          </h2>
          <p className="content max-w-[1050px] text-center">
              For more than four decades, AKS DASIS, from Mülheim-Kärlich, has been your expert partner for the repair, maintenance,
               servicing and sales of radiators and air conditioning systems for cars, classic cars, trucks, commercial vehicles, agricultural and
               construction machinery, industry, railways and shipping.
          </p>
        </div>

        {/* Facility image */}
        <div className="overflow-hidden mb-6" data-aos="zoom-in">
          <img
            src="/moto/dasis/about.png"
            alt="AKS DASIS facility"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Caption + Contact */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6" data-aos="fade-up">
          <p className="content max-w-2xl">
            We have now converted over 9,000 items in TecDoc and our shop system to a 360&deg;
            view and are constantly expanding this. This is unique in the field of cooling and air
            conditioning.
          </p>

          <Link
            href="#"
            className="hidden rounded-tr-[16px] rounded-bl-[16px] heading-white font-normal! text-[24px]! leading-[150%]! py-2 px-10 lg:flex items-center justify-center bg-primary uppercase hover:bg-primary/90 transition-colors shadow-md"
          >
            Contact
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default About;
