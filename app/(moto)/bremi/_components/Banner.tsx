"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import HexagonButton from "./HexagonButton";

export default function Banner() {
  return (
    <section
      className="relative w-full h-[100dvh] pt-[80px] md:pt-[90px] lg:pt-[110px] "
      data-aos="fade-up">
      {/* Extended Video Background */}
      <div className="w-[96%] mx-auto h-full relative">
        <div
          className="relative overflow-hidden w-full h-full shadow-xl rounded-2xl"
          data-aos="zoom-in"
          data-aos-delay="100">
          <DynamicVideoPlayer
            type="banner"
            className="absolute top-0 left-0 w-full h-full object-cover object-fill"
          />
        </div>
      </div>

      {/* Constrained Text Overlay aligned with Header Logo */}
      <div className="absolute inset-0 z-10 pointer-events-none pt-[80px] md:pt-[90px] lg:pt-[110px] pb-8">
        <div className="custom-container h-full relative">
          <div
            className="absolute bottom-0 left-5 md:left-20 mb-12 md:mb-16 text-left  pointer-events-auto"
            data-aos="fade-up"
            data-aos-delay="200">
            <h1 className=" max-w-3xl banner-title font-bold text-white leading-tight mb-4 lg:mb-6">
              100 Years Of Car Systems
            </h1>
            <p className="section-text  max-w-2xl text-white font-normal mb-8 lg:mb-8 leading-[1.6]">
              Trusted For Nearly 100 Years, BREMI Offers Over 7,500 Premium
              Aftermarket Automotive Products, Delivering Quality, Innovation,
              And Reliability Worldwide.
            </p>
            <HexagonButton
              text="Explore Products"
              href="#"
              transparentStroke={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
