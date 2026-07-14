"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";

export default function Premium() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-[45fr_55fr] gap-8 xl:gap-12 items-center">
          {/* Left Side: Content */}
          <div className="flex flex-col gap-6" data-aos="fade-right">
            <div>
              <h2 className="heading leading-[44px]!">
                Experience Every Detail of Our <span className="text-primary!">Engine Oil</span>
              </h2>
              <div className="h-1 bg-primary w-56 mt-4" />
            </div>

            <div className="flex flex-col gap-4 content">
              <p>
                Explore our premium engine oil with an interactive 360&deg; view that reveals the
                quality and precision behind every package. Engineered for superior lubrication and
                protection, BELIF engine oils help reduce wear, enhance efficiency, and support
                reliable performance in demanding operating conditions.
              </p>
              <p>
                Formulated with advanced additives and high-quality base oils, our engine oil
                provides exceptional lubrication, wear protection, and thermal stability. The result
                is reliable performance that helps engines run smoothly and efficiently under a wide
                range of operating conditions.
              </p>
            </div>

            <Link
              href="#"
              className="mt-2 w-fit inline-flex items-center gap-3 content font-semibold! text-white! rounded-[10px] bg-gradient-to-r from-[#FF2D16] to-[#991B0D] px-6 py-3.5 hover:opacity-90 transition-opacity"
            >
              Explore Product
              <ArrowRight size={18} strokeWidth={2.25} />
            </Link>
          </div>

          {/* Right Side: 360 Video */}
          <div className="w-full aspect-video" data-aos="fade-left">
            <DynamicVideoPlayer type="360" className="rounded-[10px] w-full h-full object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
