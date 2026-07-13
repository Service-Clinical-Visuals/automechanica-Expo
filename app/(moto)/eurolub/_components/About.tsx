"use client";

import React from "react";
import Link from "next/link";
import Container from "./Container";

const About = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden" id="about-us">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[50fr_50fr] gap-14 items-center">
          {/* Text content */}
          <div data-aos="fade-right">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span className="content font-semibold! uppercase tracking-wide">
                About Us
              </span>
            </div>

            <h2 className="heading mb-6 leading-[36px]!">
              Where German Engineering Meets Global Performance.
            </h2>

            <div className="flex flex-col gap-7 mb-14">
              <p className="content text-[17px]!">
                In the heart of Eching near Munich, solutions are being developed that are relied
                upon by workshops, dealers and end consumers in over 70 countries. What they have
                in common: uncompromising quality, technical expertise, and a commitment that goes
                far beyond the standard.{" "}
                <Link href="#" className="text-[#014A72] underline underline-offset-2">
                  Made in Germany
                </Link>{" "}
                &ndash; not just a label, but a promise. Every product is developed through
                rigorous testing and advanced engineering to ensure maximum engine protection,
                reliable performance, and lasting durability&mdash;trusted wherever performance
                matters most.
              </p>

              <p className="content text-[17px]!">
                Driven by innovation and engineering excellence, we create products designed to
                deliver outstanding protection, performance, and reliability. Every solution
                reflects our commitment to quality, precision, and long-term value. We combine
                innovation, expertise, and precision engineering to create products that deliver
                dependable performance. Our commitment to quality ensures solutions built for
                today and the challenges of tomorrow. We are dedicated to creating innovative
                solutions that combine advanced technology with proven expertise. Every product is
                developed with precision, reliability, and a commitment to delivering exceptional
                performance.
              </p>

              <p className="content text-[17px]!">
                Our journey is built on a passion for innovation and a commitment to excellence.
                We create reliable solutions by combining advanced technology, expert knowledge,
                and uncompromising quality.
              </p>
            </div>

            <Link
              href="#"
              className="content font-bold! items-center justify-center rounded-lg bg-secondary text-white! px-5 py-4 hover:bg-secondary-hover transition-colors"
            >
              More about our company
            </Link>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden" data-aos="zoom-in">
            <img
              src="/moto/eurolub/about.png"
              alt="Eurolub product range"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
