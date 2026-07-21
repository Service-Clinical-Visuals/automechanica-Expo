"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function AboutUs() {
  return (
    <section className="py-16 md:py-24 bg-white text-dark">
      <div className="custom-container">
        <div className="flex flex-col xl:flex-row gap-12 lg:gap-8 items-stretch justify-center">

          {/* Left: Content (Order 1 on mobile, 1 on desktop) */}
          <div className="w-full xl:w-1/2 flex flex-col gap-1 order-1" data-aos="fade-right">
            <Typography variant="h2" color="primary" weight="bold">
              About Us
            </Typography>

            <div className="relative w-[20%] mb-3">
              <div className="h-[2px]  bg-gray-300"></div>

              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2.5 w-2.5 border-2 border-gray-500 bg-white"></div>
            </div>

            <div className="flex flex-col gap-4 text-gray-700">
              <Typography variant="p">
                Company Exxol d.o.o. has been present on the market for many years. In the first years of our work, we were one of the largest and most famous importers and distributors of motor oils in Serbia. Since 2001, relying on the extensive experience and knowledge we have gained about motor oils, we have started production under our own brand of Exxol-oils and lubricants.
              </Typography>

              <Typography variant="p">
                Today, Exxol d.o.o. has a wide range of recognizable products that have taken a significant place on the market. The task we set ourselves is very simple - quality, accessibility and delivery efficiency. We believe that these are the key factors for business success in our sphere of activity, and that this will enable us to continue to develop further and achieve even better results in the future.

              </Typography>

              <Typography variant="p">
                The high quality of all oils that come off the production lines is ensured by blending the components of the most famous additive manufacturers in the world. We achieve product affordability by carefully positioning the relationship between price and quality, which ensures that every user of our products gets the best possible value for their money, while the speed of delivery has slowly become our trademark.
              </Typography>
            </div>

            <div className="mt-4">
              <Button text="Discover Our Story" variant="primary" />
            </div>
          </div>

          {/* Right: Image (Order 2 on mobile, 2 on desktop) */}
          <div className="w-full xl:w-1/2 order-2 flex" data-aos="fade-left">
            <div className="relative w-full h-full min-h-[300px] xl:min-h-0 rounded-sm overflow-hidden">
              <img
                src="/moto/exol/section2.png"
                alt="Exol Factory"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
