"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 min-[2100px]:py-24 min-[3800px]:py-32 bg-white overflow-hidden">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-10 min-[3800px]:gap-32 items-center">
        
        {/* Image - Mobile Order 3, Desktop Left */}
        <div className="order-3 xl:order-none xl:col-start-1 xl:col-span-6 w-full h-full flex items-center justify-center min-[2100px]:min-h-[500px] min-[3800px]:min-h-[800px]" data-aos="fade-right">
          <div className="w-full aspect-[792/480] relative overflow-hidden rounded-md min-[2100px]:rounded-xl min-[3800px]:rounded-2xl">
            <img
              src="/esan/section2.png"
              alt="About Esan Facility"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Wrapper */}
        <div className="contents xl:flex xl:flex-col xl:col-start-7 xl:col-span-6 xl:gap-8 min-[2100px]:xl:gap-12 min-[3800px]:xl:gap-16">
          {/* Heading Group - Mobile Order 1/2 */}
          <div className="order-1 xl:order-none flex flex-col gap-4 w-full" data-aos="fade-left">
            <Typography variant="h4" color="primary" className="font-bold tracking-wide">
              About Esan
            </Typography>
          </div>
          
          <div className="order-2 xl:order-none flex flex-col gap-4 w-full" data-aos="fade-left">
            <Typography variant="h2" color="dark" className="font-bold leading-snug">
              Powering Performance with Reliable Energy Solutions
            </Typography>
          </div>

          {/* Body - Mobile Order 4 */}
          <div className="order-4 xl:order-none flex flex-col gap-6 w-full" data-aos="fade-left">
            <div className="flex flex-col gap-4">
              <Typography variant="p" color="dark" className="leading-relaxed">
                Esan Battery and Materials Industry A.Ş. was established in 1978 in Istanbul and has grown into a leading manufacturer with a strong presence in both domestic and international markets. Following years of production in 4.Levent, the company expanded its operations by moving to a larger facility in Ayazağa in 1999, and later to its modern production site in Gebze in 2016 to support its continuous growth.
              </Typography>
              
              <Typography variant="p" color="dark" className="leading-relaxed">
                With a wide sales network of over 200 dealers and service points, Esan Akü exports a significant portion of its production to more than 60 countries across four continents. Backed by decades of experience, the company is committed to environmental responsibility, innovation, and customer satisfaction, delivering reliable and high-quality battery solutions worldwide.
              </Typography>
            </div>
          </div>

          {/* Button - Mobile Order 5 */}
          <div className="order-5 xl:order-none pt-2 min-[2100px]:pt-6 min-[3800px]:pt-10" data-aos="fade-up" data-aos-delay="100">
            <Button text="Explore Our Solution" href="#about" variant="primary" showIcon={true} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
