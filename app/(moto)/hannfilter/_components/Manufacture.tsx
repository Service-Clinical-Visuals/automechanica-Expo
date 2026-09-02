"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Button from "./Button";



const Manufacture = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center">

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Image Side */}
          <div className="w-full flex xl:col-span-6 justify-center" data-aos="fade-right">
            <img
              src="/moto/hannfilter/m.png"
              alt="Global Manufacturing Excellence"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>

          {/* Right Content Side */}
          <div className="flex flex-col xl:col-span-6 gap-2 lg:gap-2" data-aos="fade-left">
            <h2 className="section-title font-primary font-medium text-[#111111] leading-tight">
              Global Manufacturing Excellence
            </h2>

            <div className="flex flex-col gap-4 mt-2lg:gap-6">
              <p className="section-text font-secondary font-normal text-[#484848] leading-relaxed">
                Our Integrated Production Facility Located In Gemlik, Bursa, Serves Our Domestic And Foreign Customers With Its Advanced Technology And Vision. Our Filters Can Be Delivered To All Regions Of Turkey. Hann Filter Has Extended Its Success Across International Boundaries And Currently Exports To <span className="font-bold">North Africa, Asia And Eastern Europe, Specifically To Georgia, Azerbaijan And Iraq.</span>
              </p>

              <p className="section-text font-secondary font-normal text-[#484848] leading-relaxed">
                Your Vehicle's Air Filter Prevents Harmful Debris, Dirt, And Contaminants From Entering Your Engine. A Good Air Filter Reduces Vehicle Costs And Extends The Life Of The Vehicle. But Air Filters Will Eventually Age And Become Contaminated With Pollutants And Debris. In That Case, The Filter Loses Its Effectiveness And Hinders The Performance Of The Parts It Is Supposed To Protect.
              </p>
            </div>

            <div className="mt-2">
              <Button text="Explore Our Solutions" href="#explore-solutions" variant="primary" showIcon={false} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Manufacture;
