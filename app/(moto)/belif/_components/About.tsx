"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";

const About = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden" id="about-us">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-stretch">
          {/* Image */}
          <div className="rounded-[10px] order-1 xl:order-2 overflow-hidden" data-aos="zoom-in">
            <img
              src="/moto/belif/about.png"
              alt="Belif facility"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text content */}
          <div
            className="relative rounded-[10px] overflow-hidden p-10 md:p-12 flex flex-col justify-center"
            data-aos="fade-left"
          >
            <img
              src="/moto/belif/aboutbg.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative z-10">
              <h2 className="heading-white mb-2 pb-4 inline-block">
                About Our Company
                <div className="h-1 bg-white w-40 mt-4" />
              </h2>

              <div className="flex flex-col gap-5 mb-10">
                <p className="content-white">
                  Founded in 1996, BELIF d.o.o. has grown into a leading manufacturer of automotive,
                  pool treatment, hygiene, and specialty chemical products. Operating from a modern,
                  ISO-certified production complex in Jelah, Bosnia and Herzegovina, the company
                  combines advanced manufacturing capabilities with rigorous quality control and
                  environmental stewardship.
                </p>

                <p className="content-white">
                  Its diverse portfolio includes antifreeze and windshield fluids, pool water
                  treatment solutions, household and industrial hygiene products, specialty fluids,
                  and premium BELLUBE motor and industrial oils produced from high-quality base
                  stocks and additives. Guided by decades of expertise and a customer-focused
                  philosophy, BELIF continues to strengthen its market leadership through continuous
                  investment in innovation, sustainable practices, and state-of-the-art technologies
                  that meet the evolving needs of customers at home and abroad.
                </p>

                <p className="content-white">
                  Through constant development, the company today occupies a leading position in its
                  industry. Belif doo is currently one of the largest manufacturers of antifreeze,
                  windshield washer and defroster products and car cosmetics, and holds a leading
                  position in the production of pool water treatment products.
                </p>
              </div>

              <Link
                href="#"
                className="content font-semibold! inline-flex items-center gap-2 rounded-lg bg-[#1A1A1A] text-white! px-5 py-4 hover:bg-black transition-colors"
              >
                Know More About Us
                <ArrowRight size={18} strokeWidth={2.25} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
