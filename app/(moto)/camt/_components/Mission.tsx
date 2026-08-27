"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";

export default function Mission() {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden" id="mission">
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-[60fr_40fr] gap-10 items-center">
          {/* Image */}
          <div className="overflow-hidden rounded-2xl" data-aos="fade-right">
            <img
              src="/moto/camt/mission.png"
              alt="CAMT manufacturing facility"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Text content */}
          <div data-aos="fade-left">
            <h2 className="heading mb-4">Our Mission</h2>

            <div className="flex flex-col gap-4 mb-6">
              <p className="content">
                At CAMT, our mission is to develop innovative automotive sensor solutions that
                enhance vehicle performance, improve efficiency, and support sustainable mobility.
                Through advanced engineering, precision manufacturing, and continuous innovation,
                we create reliable technologies that meet the evolving needs of the global
                automotive industry while maintaining the highest standards of quality and
                performance.
              </p>
              <p className="content">
                By investing in research, advanced manufacturing, and intelligent production
                processes, CAMT delivers high-performance NOx sensors and thermal management
                solutions that support cleaner emissions and global automotive standards. Together
                with our partners, we continue to drive innovation and develop future-ready
                solutions that contribute to smarter, more efficient, and environmentally
                responsible transportation.
              </p>
            </div>

            <Link
              href="#"
              className="navlink inline-flex items-center gap-2 text-white! font-normal! bg-primary hover:bg-primary-hover px-6 py-2.5 rounded-md transition-colors whitespace-nowrap"
            >
              Know More
              <ArrowRight size={18} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
