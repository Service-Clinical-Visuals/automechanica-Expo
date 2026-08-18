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
          className="absolute inset-0 w-full h-full object-cover"
        />
    
      </div>

      {/* Content Overlay */}
      <Container>
        <div className="relative z-10 pb-20 md:pb-32 lg:pb-40">
          <div className="max-w-3xl text-left" data-aos="fade-up" data-aos-delay="200">
            <h1 className="heading-white font-semibold! text-[38px]! leading-[35px]! tracking-[0%]! text-white mb-3">
               Precision CV Shafts & CV Joints Engineered for Every Drive
            </h1>
            <div className="flex items-center shrink-0 mt-10">
              <Link
                href="#"
                className="navlink text-[#111111]! font-medium! bg-primary hover:bg-[#e0961c] px-6 py-1.5 transition-colors whitespace-nowrap"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
