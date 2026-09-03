"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-end">
      {/* Background Video using DynamicVideoPlayer as requested */}
      <div className="absolute inset-0 z-0 bg-black">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover object-fill"
        />
      </div>

      {/* Content Overlay */}
      <Container>
        <div className="relative z-10 pb-20 md:pb-32 lg:pb-40">
          <div
            className="max-w-4xl text-left"
            data-aos="fade-up"
            data-aos-delay="200">
            <h1 className="heading-white leading-[100%] font-semibold! text-[36px]! tracking-[0%]! text-white mb-8">
              Powering Progress in Chemical Innovation
            </h1>
          </div>
          <Link
            href="#"
            className="navlink  w-fit flex items-center gap-1 shrink-0 bg-gradient-to-r from-[#FF2D16] to-[#991B0D] rounded-[10px]! pl-6 pr-1.5 py-1.5 text-white! font-semibold text-[15px] whitespace-nowrap">
            Get Started
            <span className="flex items-center justify-center w-9 h-9">
              <ArrowRight size={22} strokeWidth={2.25} className="text-white" />
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
