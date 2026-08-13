"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Container from "./Container";

const certifications = [
  { img: "/moto/ifa/about/cert1.png", title: "ISO 9001:2015", subtitle: "Certified" },
  { img: "/moto/ifa/about/cert2.png", title: "TÜV NORD", subtitle: "Certified" },
];

const About = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden" id="about-us">
      {/* Decorative background corners */}
      <div
        className="hidden md:block absolute top-0 left-0 w-full h-full bg-[#FCDBDC45] pointer-events-none select-none"
        style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6 xl:gap-x-14 gap-y-10 items-center">
          {/* Row 1 - Left: Showroom image */}
          <div className="order-2 xl:order-1" data-aos="fade-right">
            <img
              src="/moto/ifa/about/1.png"
              alt="IFA showroom"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Row 1 - Right: About Us intro */}
          <div className="order-1 xl:order-2" data-aos="fade-up">
            <h2 className="heading flex items-center gap-3 mb-6">
              <span className="text-primary text-[20px]">▶</span>
              About Us
            </h2>

            <div className="space-y-4 content">
              <p>
                I.F.A. Industria Filtri Aria S.r.l. is located not very far from Naples, main port
                for general trade activities and key position to assure an even more good service
                to European and North-African countries. Isofilter and the customers&rsquo; marked
                products can be directed towards central Europe, Mediterranean and Western
                countries as well.
              </p>
              <p>
                Our factory is extended on a total 15.000 sq m surface with 6000 indoors. It also
                can rely on number control high-generation plant and laboratories where trials are
                carried out both on filtering materials and finished products. Our main target is
                represented by Italian and and foreign filters producers working in the aftermarket
                field. We currently supply our ISOFILTER marked products to them and furthermore we
                can personalize filters accordingly.
              </p>
            </div>

            <div className="mt-8 inline-flex" data-aos="fade-up" data-aos-delay="150">
              <button
                style={{ clipPath: "polygon(0% 0%, calc(100% - 30px) 0%, 100% 50%, calc(100% - 30px) 100%, 0% 100%)" }}
                className="heading text-white! text-[18px]! inline-flex items-center gap-3 pl-8 pr-10 py-1.5 bg-primary font-semibold transition-opacity hover:opacity-90"
              >
                Learn More
                <ArrowRight size={26}/>
              </button>
            </div>
          </div>

          {/* Row 2 - Left: Quality text + certifications */}
          <div className="order-3" data-aos="fade-up">
            <div className="space-y-4 content mb-8">
              <p>
                Continuous customer satisfaction is the primary objective of our quality policy. To
                achieve this goal, and to allow our customers to assess our company&rsquo;s
                quality, we comply with the requirements of the ISO 9001:2015 standard.
              </p>
              <p>
                IFA Industria Filtri Aria Srl invests heavily in understanding the needs and
                requirements of consumers and customers. Thanks to our extensive experience in the
                production of filters for cars, commercial vehicles, and industrial vehicles and
                their related applications, we develop products of the highest quality and
                effectiveness.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5 xl:gap-26">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="flex items-center gap-0 xl:gap-3 shadow-sm shadow-[#0000003D] border border-primary p-3"
                >
                  <img src={cert.img} alt={cert.title} className="h-22 w-auto object-contain shrink-0" />
                  <div className="heading font-normal! text-[18px]! xl:text-[20px]! leading-[24px]! xl:leading-[28px]!">
                    <p>
                      {cert.title}
                    </p>
                    <p>{cert.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Right: Facility image */}
          <div className="order-4" data-aos="fade-left">
            <img
              src="/moto/ifa/about/2.png"
              alt="IFA facility"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
