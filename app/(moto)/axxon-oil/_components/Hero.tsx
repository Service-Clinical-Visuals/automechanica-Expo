"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";

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
            <h1 className="heading-white tracking-[0%] font-semibold! text-[36px]! leading-[130%]! text-white mb-4">
              Leading the Future of Lubrication
            </h1>
            <p className="content-white text-[18px]!">
              Delivering premium lubricant solutions to over 40 countries with
              advanced technology, exceptional quality, and reliable performance
              for automotive and industrial applications.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
