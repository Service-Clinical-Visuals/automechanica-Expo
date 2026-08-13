"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const Advanced = () => {
  return (
    <section id="advanced" className="w-full py-10 xl:py-16 min-[3800px]:py-24 bg-white overflow-hidden">
      <div className="custom-container max-w-[1920px] flex flex-col gap-10 min[3800px]:gap-20">

        {/* Top Centered Content */}
        <div className="flex flex-col items-center text-center gap-3 w-full max-w-[95%] md:max-w-[80%] xl:max-w-[60%] mx-auto">
          <div className="flex items-center gap-3" data-aos="fade-up">
            <div className="w-7 h-7 min-[3800px]:w-10 min-[3800px]:h-10 bg-secondary [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)] shrink-0"></div>
            <Typography variant="h4" color="primary" className="font-bold">
              Precision Engineering
            </Typography>
          </div>
          <Typography variant="h2" color="dark" className="font-bold leading-tight" data-aos="fade-up" data-aos-delay="100">
            Advanced manufacturing built for consistent performance.
          </Typography>
          <Typography variant="p" color="muted" className="mt-1 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Our engineering and manufacturing processes combine advanced technology with skilled craftsmanship to produce high-quality piston rings that meet the highest industry standards.
          </Typography>
        </div>

        {/* Blue Block */}
        <div className="w-full bg-primary flex flex-col shadow-xl p-6 md:p-12 lg:p-16" data-aos="fade-up">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Left Image */}
            <div className="w-full lg:w-1/2 aspect-[746/457] shrink-0">
              <img
                src="/moto/hasting/section3.png"
                alt="Factory"
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Right Content */}
            <div className="w-full lg:flex-1 flex flex-col justify-center gap-6 lg:py-4">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 min-[3800px]:w-10 min-[3800px]:h-10 bg-secondary [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)] shrink-0"></div>
                <Typography variant="h4" color="white" className="font-bold">
                  Engineering & Manufacturing
                </Typography>
              </div>

              <Typography variant="h2" color="white" className="font-bold leading-tight uppercase lg:pr-10">
                ALWAYS THINKING. ALWAYS TESTING. ALWAYS IMPROVING.
              </Typography>

              <Typography variant="p" color="white" className="leading-relaxed lg:pr-10">
                At Hastings, we are not only concerned with the manufacturing of piston rings, we are just as dedicated to how we can make them better. Our non-stop desire for innovation and improvement has resulted in products and process technologies that have caused many to ask, "What's that?" Meanwhile, we are already asking, "What's next?" Over time, our achievements have led to significant improvements in engine efficiency, emissions, and longevity.
              </Typography>

              <div className="mt-2">
                <Button text="Read More" href="#advanced" variant="outline" />
              </div>

              {/* Bottom Bar (Moved to right content side only) */}
              <div className="mt-8 lg:mt-10 pt-6 lg:pt-8 border-t border-white/30 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 xl:gap-4">
                <Typography variant="h3" color="white" className="font-bold">
                  Building Better Manufacturing
                </Typography>
                <div className="flex items-center gap-4">
                  <button className="bg-secondary text-primary font-bold py-2 px-6 lg:px-8 min-[3800px]:py-4 min-[3800px]:px-16 hover:bg-white transition-colors text-sm min-[3800px]:text-2xl uppercase tracking-wide">Previous</button>
                  <button className="bg-secondary text-primary font-bold py-2 px-6 lg:px-8 min-[3800px]:py-4 min-[3800px]:px-16 hover:bg-white transition-colors text-sm min-[3800px]:text-2xl uppercase tracking-wide">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Advanced;
