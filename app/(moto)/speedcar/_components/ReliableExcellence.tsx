"use client";

import React from "react";
import Container from "./Container";

const ReliableExcellence = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>

        {/* Row 1: Image left, Text right */}
        <div className="flex flex-col xl:flex-row gap-10 items-center mb-16 md:mb-24">
          {/* Image */}
          <div className="w-full xl:w-[50%] shrink-0" data-aos="fade-right">
            <img
              src="/moto/speedcar/reliable.png"
              alt="Reliable Manufacturing"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text */}
          <div className="w-full xl:w-[50%] font-albert">
            <div className="mb-5" data-aos="fade-up">
              <h2 className="heading">
                Reliable Manufacturing Partners
              </h2>
              <div className="h-[3px] w-50 bg-primary mt-2" />
            </div>

            <div className="space-y-4 content mb-6 tracking-[0%]! text-justify leading-[28px]!">
              <p data-aos="fade-up" data-aos-delay="100">
                At Speed Car SP, we provide comprehensive private label manufacturing solutions backed by
                advanced production capabilities and a highly efficient packaging infrastructure. Our modern
                filling, bottling, and packaging facilities enable us to support businesses looking to develop and
                expand their own branded lubricant and automotive product lines with confidence and flexibility.
              </p>
              <p data-aos="fade-up" data-aos-delay="200">
                Quality is at the heart of everything we do. We use carefully selected premium-grade raw
                materials and additive technologies sourced from globally recognized industry suppliers. Every
                product undergoes rigorous quality control procedures and continuous laboratory testing to
                ensure consistent performance, reliability, and compliance with international standards.
              </p>
            </div>

            <a
              href="#about-us"
              data-aos="fade-up"
              data-aos-delay="300"
              className="inline-block bg-primary px-4 py-2 content-white font-bold hover:bg-primary/90 transition-colors"
            >
              View More About Us
            </a>
          </div>
        </div>

        {/* Row 2: Text left, Image right */}
        <div className="flex flex-col xl:flex-row gap-10 items-center">
          {/* Text */}
          <div className="w-full xl:w-[52%] font-albert order-2 xl:order-1">
            <div className="mb-5" data-aos="fade-up">
              <h2 className="heading">
                Excellence in Private Label Solutions
              </h2>
              <div className="h-[3px] w-50 bg-primary mt-2" />
            </div>

            <div className="space-y-4 content mb-8 tracking-[0%]! text-justify leading-[28px]!">
              <p data-aos="fade-up" data-aos-delay="100">
                With years of industry expertise and state-of-the-art production facilities, Speed Car SP delivers
                reliable manufacturing and private label solutions tailored to the evolving needs of the
                automotive and industrial sectors. Our advanced filling, blending, and packaging capabilities
                enable us to efficiently produce a wide range of lubricants and specialty products while
                maintaining exceptional consistency and quality.
              </p>
              <p data-aos="fade-up" data-aos-delay="200">
                Beyond manufacturing, we offer comprehensive support throughout the supply chain. Our
                extensive storage capacity, flexible production scheduling, and dedicated logistics network allow
                us to respond quickly to customer demands and deliver products on time.
              </p>
            </div>

            <a
              href="#contact"
              data-aos="fade-up"
              data-aos-delay="300"
              className="inline-block bg-primary px-4 py-2 content-white font-bold hover:bg-primary/90 transition-colors"
            >
              Explore Our Services
            </a>
          </div>

          {/* Image */}
          <div className="w-full xl:w-[48%] shrink-0 order-1 xl:order-2" data-aos="fade-left" data-aos-delay="150">
            <img
              src="/moto/speedcar/excellence.png"
              alt="Excellence in Private Label"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

      </Container>
    </section>
  );
};

export default ReliableExcellence;
