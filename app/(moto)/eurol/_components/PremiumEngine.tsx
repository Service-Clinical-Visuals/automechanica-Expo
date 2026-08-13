"use client";

import React from "react";
import Container from "./Container";
import Typography from "./Typography";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

const PremiumEngine = () => {
  return (
    <section className="py-12 md:py-12 bg-white" id="premium">
      <Container>
        <Typography variant="h2" className="font-goldman text-dark text-center mb-8 md:mb-8  ">
          Explore Our Premium Engine Oils in 360°
        </Typography>

        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* 360 Viewer Placeholder */}
          <div className="w-full aspect-video rounded-lg border border-gray-200 mb-8 flex items-center justify-center overflow-hidden relative">
            <DynamicVideoPlayer type="360" />
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-t border-black/30 pt-5">
            <div className="w-full md:w-3/4 pr-0 md:pr-12">
              <Typography variant="body" className="font-albert  text-sm md:text-base leading-relaxed">
                Our premium engine oils are engineered to deliver exceptional protection, efficiency, and performance for a wide range of vehicles and equipment. Formulated with advanced additive technology and high-quality base oils, they help reduce engine wear, maintain cleanliness, and provide reliable lubrication under demanding operating conditions.
              </Typography>
            </div>

            <div className="w-full md:w-auto shrink-0 mt-4 md:mt-0">
              <Button text="Explore Products" className="w-full font-goldman md:w-auto" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PremiumEngine;
