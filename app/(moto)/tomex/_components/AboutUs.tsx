"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { CheckCircle2 } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 bg-white overflow-hidden">
      <div className="custom-container flex flex-col xl:flex-row gap-8 min-[2100px]:gap-16 items-center">
        
        {/* Content Side */}
        <div className="flex-1 flex flex-col gap-8 order-1 w-full" data-aos="fade-right">
          {/* Heading */}
          <div className="flex flex-col gap-4">
            <Typography variant="h2" color="dark" className="font-bold leading-tight">
              Driven By Purpose. Focused On The Future.
            </Typography>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-6">
            <Typography variant="p" color="muted" className="leading-relaxed">
              An efficient braking system protects not only the driver and his passengers, but also other road users. TOMEX Brakes has set itself the goal of continuously improving all the brake components it supplies so that they operate efficiently and effectively in all conditions, ensuring maximum safety, reliability, and confidence for every journey.
            </Typography>
            
            <Typography variant="p" color="muted" className="leading-relaxed">
              The company&apos;s products undergo constant quality checks and tests at all stages of creation: from the purchase of raw materials used in production, through mixing, pressing and grinding, to the packaging of finished products. The pads, shoes and other brake accessories manufactured by TOMEX have necessary certificates and approvals, and thanks to their high quality, reliability, reasonable prices and flexible approach to customer needs, we compete successfully on Polish and foreign markets.
            </Typography>
          </div>

          <div className="w-full h-[1px] bg-gray-200 my-1"></div>

          {/* Bullet Points */}
          <div className="flex flex-col gap-5 min-[2100px]:gap-8">
            <div className="flex items-start gap-4 min-[2100px]:gap-6">
              <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 min-[2100px]:w-10 min-[2100px]:h-10 min-[3800px]:w-12 min-[3800px]:h-12 text-white fill-primary shrink-0 mt-0.5" strokeWidth={2.5} />
              <Typography variant="p" color="muted" className="leading-relaxed">
                Reliable Braking Performance – TOMEX Brakes continuously improves its brake components to ensure efficient and effective operation in all driving conditions.
              </Typography>
            </div>
            
            <div className="flex items-start gap-4 min-[2100px]:gap-6">
              <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 min-[2100px]:w-10 min-[2100px]:h-10 min-[3800px]:w-12 min-[3800px]:h-12 text-white fill-primary shrink-0 mt-0.5" strokeWidth={2} />
              <Typography variant="p" color="muted" className="leading-relaxed">
                Strict Quality Control – Every product undergoes comprehensive quality checks throughout the entire manufacturing process, from raw materials to final packaging.
              </Typography>
            </div>
            
            <div className="flex items-start gap-4 min-[2100px]:gap-6">
              <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 min-[2100px]:w-10 min-[2100px]:h-10 min-[3800px]:w-12 min-[3800px]:h-12 text-white fill-primary shrink-0 mt-0.5" strokeWidth={2} />
              <Typography variant="p" color="muted" className="leading-relaxed">
                Customer-Focused Approach – High quality, competitive pricing, and flexible solutions help TOMEX successfully serve both Polish and international markets.
              </Typography>
            </div>
          </div>

          <div className="mt-4">
            <Button text="Learn More About Us" href="#about-more" variant="primary" showIcon={true} />
          </div>
        </div>

        {/* Image Side */}
        <div className="flex-1 w-full order-2 min-[2100px]:order-2 flex justify-center items-center" data-aos="fade-left" data-aos-delay="100">
          <img
            src="/moto/tomex/section2.png"
            alt="Tomex Brake Components"
            className="w-[90%] lg:w-[85%] min-[2100px]:w-[80%] min-[3800px]:w-[70%] h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
