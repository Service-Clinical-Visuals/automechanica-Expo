"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-end">
      {/* Background Video using DynamicVideoPlayer as requested */}
      <div className="absolute inset-0 z-0 bg-black">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover lg:object-fill"
        />
      </div>

      {/* Content Overlay */}
      <Container>
        <div className="relative z-10 pb-20 md:pb-32 lg:pb-40">
          <div
            className="max-w-4xl text-left"
            data-aos="fade-up"
            data-aos-delay="200">
            <h1 className="heading-white font-semibold! text-[38px]! leading-[150%]! tracking-[0%]! text-white mb-3">
              Engineered for Performance
            </h1>
          </div>
          <div className="content-white mt-5 max-w-sm">
            Discover OE-quality automotive components built for precision and
            reliability.
          </div>
        </div>
      </Container>
    </section>
  );
}
