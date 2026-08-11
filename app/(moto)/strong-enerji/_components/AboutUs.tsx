"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#0d0f1c]">
      <div className="custom-container">
        {/* Top Part: Image and Text */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10 items-center mb-16">
          {/* Image */}
          <div className="order-2 xl:order-1 relative w-full rounded-2xl overflow-hidden" data-aos="fade-right">
            <img
              src="/moto/strong-enerji/abt.png"
              alt="About Our Company"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-1 xl:order-2 flex flex-col items-start" data-aos="fade-left">
            <h2 className="section-title oswald font-semibold text-white mb-6">About Our Company</h2>
            <div className="flex flex-col gap-4 mb-8">
              <p className="section-text dm-sans font-normal text-white leading-relaxed">
                STRONG ENERJİ SAN.VE TİC.LTD.ŞTİ. continues to produce lubricants for the automotive and
                industrial sector in accordance with national and international standards in the lubricant
                sector. We make private label production in addition to its own brands ROUTE LUBRICANTS
                and serves many international companies in this field.
              </p>
              <p className="section-text dm-sans font-normal text-white leading-relaxed">
                STRONG ENERJİ SAN.VE TİC.LTD.ŞTİ. serves the lubricant industry with its modern
                management approach, qualified staff and expert technical staff in its modern production
                facilities with 9.000 m2 closed area established on a 20.000 m2 land in ADANA HACI SABANCI
                OSB with full-fledged modern laboratory facilities.
              </p>
            </div>
            <Button href="#" variant="outline" className="w-fit">
              Discover Our Story
            </Button>
          </div>
        </div>

        {/* Bottom Part: Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-10">
          {/* Vision Card */}
          <div 
            className="flex flex-col items-center justify-center p-8 md:p-8 border border-white  rounded-2xl "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="mb-6 relative w-16 h-16 sm:w-20 sm:h-20">
              < img 
                src="/moto/strong-enerji/abt1.png" 
                alt="Our Vision Icon" 
                className="object-contain" 
              />
            </div>
            <h3 className="card-title oswald font-semibold text-white mb-4">Our Vision</h3>
            <p className="section-text dm-sans text-white text-center leading-relaxed max-w-sm">
              To provide permanent superiority by creating differences, to carry
              the Route Brand to the highest level in the sector.
            </p>
          </div>

          {/* Mission Card */}
          <div 
            className="flex flex-col items-center justify-center p-8 md:p-8 border border-white  rounded-2xl "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="mb-6 relative w-16 h-16 sm:w-20 sm:h-20">
              <img 
                src="/moto/strong-enerji/abt2.png" 
                alt="Our Mission Icon"                 
                className="object-contain" 
              />
            </div>
            <h3 className="card-title oswald font-semibold text-white mb-4">Our Mission</h3>
            <p className="section-text dm-sans text-white text-center leading-relaxed max-w-sm">
              Managing a "strategic portfolio" with competitive and sustainable
              growth potential in a way that creates value for its stakeholders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
