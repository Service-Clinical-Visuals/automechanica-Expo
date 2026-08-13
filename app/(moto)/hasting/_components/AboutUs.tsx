"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-10  min-[3800px]:py-24 bg-white overflow-hidden">
      <div className="custom-container max-w-[1920px] flex flex-col xl:flex-row gap-12 min-[3800px]:gap-20 items-center justify-center">

        {/* Left Column - Image with Overlay */}
        <div className="w-full xl:w-1/2 aspect-[926/514] relative flex-shrink-0" data-aos="fade-right">
          <img
            src="/moto/hasting/section2.png"
            alt="Hastings Facility"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Right Column - Content */}
        <div className="w-full xl:flex-1 flex flex-col gap-6" data-aos="fade-left">
          {/* Heading Group */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              {/* CSS clip-path for diamond shape avoiding inline styles */}
              <div className="w-7 h-7 min-[3800px]:w-10 min-[3800px]:h-10 bg-secondary [clip-path:polygon(50%_0%,100%_50%,50%_100%,0%_50%)]"></div>
              <Typography variant="h4" color="primary" className="font-bold">
                Hastings Manufacturing Company
              </Typography>
            </div>
            <Typography variant="h2" color="dark" className="font-bold leading-tight uppercase xl:pr-10">
              PISTON RINGS. IT'S WHAT WE DO. IT'S ALL WE DO.
            </Typography>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-5 mt-2">
            <Typography variant="p" color="muted" className="leading-relaxed">
              At Hastings Manufacturing, we've mastered the engineering and craftsmanship of piston rings. And while others are focused on doing it all, we put our all into one thing. We don't manufacture other engine components for a reason—it would only take our attention away from what we do best.
            </Typography>

            <Typography variant="p" color="muted" className="leading-relaxed">
              Decade after decade, we've refined and advanced piston ring, compression ring, and vented oil ring design to enhance engine performance, efficiency, and economy. The result is 25,000 SKUs, each made with the highest tolerances and highest quality materials in the industry.
            </Typography>

            <Typography variant="p" color="muted" className="leading-relaxed">
              We've been making piston rings for a long time. In turn, they've made us who we are today. Though times have changed, our original goal remains the same—to make the best, most-trusted piston rings on earth.
            </Typography>
          </div>

          <div className="mt-4">
            <Button text="Know About Us" href="#about" variant="primary" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
