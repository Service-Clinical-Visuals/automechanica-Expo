"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

const Performance = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-[#111111] overflow-hidden flex items-center justify-center text-center">
      <div className="custom-container relative z-10 w-full flex flex-col items-center gap-6" data-aos="fade-up">

        <h2 className="section-title font-primary font-medium text-white leading-tight">
          Breathe Cleaner. Drive Better.
        </h2>

        <p className="section-text font-secondary font-normal text-white/80 leading-relaxed max-w-4xl mx-auto">
          Keep Your Vehicle's Cabin Fresh With Premium Cabin Air Filters Designed To Capture Dust, Pollen, Smoke, And Airborne Contaminants. Engineered For Maximum Airflow And Reliable Filtration, They Help Create A Healthier And More Comfortable Driving Environment For Every Journey.
        </p>

        <div className="mt-4">
          <Button
            text="Explore Our Solutions"
            href="#explore"
            variant="primary"
            showIcon={false}
            className="btn-text px-8 py-3 bg-[#0000C8] hover:bg-[#0000AE] text-white font-secondary font-bold rounded-lg transition-colors border border-white"
          />
        </div>

      </div>
    </section>
  );
};

export default Performance;
