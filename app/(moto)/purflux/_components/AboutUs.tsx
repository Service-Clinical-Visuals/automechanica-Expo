"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-12">
        
        {/* Top Content (Heading + Subtitle) */}
        <div className="flex flex-col items-center text-center gap-4 w-full" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold leading-tight">
            About PURFLUX
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed xl:max-w-[70%]">
            With over 40 years of expertise, PURFLUX GROUP is a global leader in automotive filtration systems and original equipment components. We design, develop, and manufacture high-performance filtration solutions that deliver superior efficiency, durability, and environmental compatibility.
          </Typography>
        </div>

        {/* Images Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="100">
          <div className="w-full aspect-[4/3] rounded-sm overflow-hidden">
            <img
              src="/moto/purflux/section21.png"
              alt="Facility"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-[4/3] rounded-sm overflow-hidden">
            <img
              src="/moto/purflux/section22.png"
              alt="Team"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-[4/3] rounded-sm overflow-hidden">
            <img
              src="/moto/purflux/section23.png"
              alt="Exhibition"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Content (Text + Button) */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6" data-aos="fade-up" data-aos-delay="200">
          <Typography variant="p" color="dark" className="leading-relaxed lg:max-w-[60%]">
            Powered by continuous research and technological innovation, we optimize every product for longer service life, enhanced performance, and a smaller environmental footprint.
          </Typography>
          
          <div className="shrink-0 w-full lg:w-auto flex justify-end">
            <Button text="Learn More" href="#about" showIcon={false} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
