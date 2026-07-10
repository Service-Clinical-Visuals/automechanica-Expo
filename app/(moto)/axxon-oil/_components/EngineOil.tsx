"use client";

import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Container from "./Container";

const checkerboardStyle = {
  backgroundImage:
    "linear-gradient(45deg, #e5e5e5 25%, transparent 25%), linear-gradient(-45deg, #e5e5e5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e5e5e5 75%), linear-gradient(-45deg, transparent 75%, #e5e5e5 75%)",
  backgroundSize: "60px 60px",
  backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0px",
  backgroundColor: "#f9f9f9",
};

export default function EngineOil() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <Container>
        <div className="w-full items-center flex flex-col">
            <div className="text-center max-w-[1200px] mx-auto mb-12" data-aos="fade-up">
                <h2 className="heading mb-4">Engine Oils</h2>
                <p className="content">
                    Designed to deliver exceptional engine protection and reliable performance, AxxonOil
                    Engine Oils are formulated using premium base oils and advanced additive technology.
                    They help reduce wear, improve fuel efficiency, maintain engine cleanliness, and
                    provide outstanding protection across a wide range of driving and operating conditions
                    for both modern and high-performance engines.
                </p>
            </div>

            <div className="relative max-w-[1200px]! self-center w-full aspect-video" style={checkerboardStyle} data-aos="fade-up">
                <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover" />
            </div>
        </div>
      </Container>
    </section>
  );
}
