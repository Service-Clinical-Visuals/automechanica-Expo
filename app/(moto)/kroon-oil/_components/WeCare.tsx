"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Button from "./Button";

export default function WeCare() {
  return (
   <section className="relative w-full min-h-[500px] md:min-h-[600px] xl:min-h-[700px] xl:min-h-[110vh] flex py-16 xl:py-24 overflow-hidden bg1">
     

      <div className="custom-container relative z-10 px-5 xl:px-8 py-20 2xl:py-60 justify-center">
        <div className="max-w-lg md:max-w-xl xl:max-w-2xl" data-aos="fade-right">
           <h2 className="section-title font-normal text-white  tracking-wide anton-font mb-6 xl:mb-8 ">
            We Care
          </h2>
          <p className="section-text text-[#ffffff] font-normal leading-[1.8] oswald-font mb-8 text-left">
            With the motto We Care in mind, Kroon-Oil joins forces and does what it can regarding sustainability. With a viewpoint towards a fully circular water economy by 2030, we have been working to define objectives and reduce material usage and CO₂ emissions for quite some time.
          </p>
          
          <ul className="flex flex-col gap-4 mb-10">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-6 md:w-8 h-6 md:h-8 text-white flex-shrink-0 mt-0.5" fill="white" color="#101010" />
              <p className="section-text text-[#ffffff] font-normal leading-tight oswald-font">
                Committed to Sustainability – Driving responsible business practices.
              </p>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-6 md:w-8 h-6 md:h-8 text-white flex-shrink-0 mt-0.5" fill="white" color="#101010" />
              <p className="section-text text-[#ffffff] font-normal leading-tight oswald-font">
                Reducing CO₂ Emissions – Lowering environmental impact continuously.
              </p>
            </li>
          </ul>

         <Button text="Discover Our Commitment" />
        </div>
      </div>

    </section>
  );
}
