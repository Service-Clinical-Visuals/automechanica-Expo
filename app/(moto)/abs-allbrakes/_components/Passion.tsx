"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { Check } from "lucide-react";

export default function Passion() {
  return (
    <section className="w-full py-16 md:py-24 relative" id="passion">
      <div className="custom-container">

        {/* Top Part: Text & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-24">

          {/* Left Content */}
          <div className="flex flex-col space-y-6" data-aos="fade-right">
            <Typography variant="h2" weight="bold" color="dark" >
              Passion
            </Typography>

            <Typography variant="p" color="dark" className="leading-relaxed">
              ABS has passionate product managers and data experts who make sure that the product range complies with all the rules and regulations for a particular market. Because of this, the quality of the products is guaranteed. As a result, direct communication on all levels ensures long-term partnerships that create real value for all parties. With the help of market data, ABS can provide your company with a tailor-made purchasing strategy and stock advice. Frequently, the sales team travels around the world striving to see all partners in person.
            </Typography>

            <div className="space-y-4 pt-2">
              {/* Check 1 */}
              <div className="flex items-start space-x-3">
                <div className="shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-[var(--color-primary)] flex items-center justify-center shadow-sm">
                    <Check size={12} className="text-white stroke-[3]" />
                  </div>
                </div>
                <Typography variant="p" color="dark" className=" text-sm leading-relaxed">
                  <strong className="font-semibold">Expert Product Management</strong> – Experienced product managers and data specialists ensure market-specific compliance.
                </Typography>
              </div>

              {/* Check 2 */}
              <div className="flex items-start space-x-3">
                <div className="shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-[var(--color-primary)] flex items-center justify-center shadow-sm">
                    <Check size={12} className="text-white stroke-[3]" />
                  </div>
                </div>
                <Typography variant="p" color="dark" className=" text-sm leading-relaxed">
                  <strong className="font-bold">Global Customer Support</strong> – Dedicated sales teams regularly visit partners worldwide to provide hands-on support.
                </Typography>
              </div>
            </div>

            <div className="pt-6">
              <Button text="DISCOVER OUR PASSION" href="#company" showIcon={false} />
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl" data-aos="fade-left">
            <img
              src="/moto/abs-allbrakes/section4.png"
              alt="ABS Passion"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>

        {/* Bottom Part: Statistics Card */}
        <div
          className="w-full bg-white rounded-[2rem] shadow-[0_0_20px_rgba(0,0,0,0.08)] border border-gray-100 p-8 lg:p-12 relative z-10"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 ">

            {/* Stat 1 */}
            <div className="flex items-center space-x-6 px-2 lg:px-6 py-4 md:py-0">
              <div className="w-16 h-16 lg:w-25 lg:h-25 shrink-0">
                <img src="/moto/abs-allbrakes/passion1.png" alt="People" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <Typography variant="h1" color="dark" weight="bold" className="text-6xl lg:text-[70px] leading-none mb-2">
                  49
                </Typography>
                <Typography variant="p" color="dark" className="text-[13px] leading-snug">
                  There are more than 45 people working for the ABS brand.
                </Typography>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center space-x-6 px-2 lg:px-6 py-4 md:py-0">
              <div className="w-16 h-16 lg:w-25 lg:h-25 shrink-0">
                <img src="/moto/abs-allbrakes/passion2.png" alt="Globe" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <Typography variant="h1" color="dark" weight="bold" className="text-6xl lg:text-[70px] leading-none mb-2">
                  100
                </Typography>
                <Typography variant="p" color="dark" className="text-[13px] leading-snug">
                  ABS is active in 156 different markets worldwide (mostly Europe).
                </Typography>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center space-x-6 px-2 lg:px-6 py-4 md:py-0">
              <div className="w-16 h-16 lg:w-25 lg:h-25 shrink-0">
                <img src="/moto/abs-allbrakes/passion3.png" alt="Chart" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <Typography variant="h1" color="dark" weight="bold" className="text-6xl lg:text-[70px] leading-none mb-2">
                  100
                </Typography>
                <Typography variant="p" color="dark" className="text-[13px] leading-snug">
                  ABS has a growing database of 1,376 active customers.
                </Typography>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
