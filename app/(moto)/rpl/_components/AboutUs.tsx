"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 min-[3800px]:py-32 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-12 items-start">

        {/* Top Section: Image + Content */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 w-full items-center">

          {/* Image (Mobile: order 2, Desktop: order 1, Col 1-6) */}
          <div className="w-full aspect-[932/475] order-2 lg:order-1 lg:col-span-7 h-full" data-aos="fade-right">
            <img
              src="/moto/rpl/section2.png"
              alt="RPL Clima Facility"
              className="w-full rounded-2xl object-cover h-full  shadow-lg"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/moto/ampro/section2.png";
              }}
            />
          </div>

          {/* Content (Mobile: order 1, Desktop: order 2, Col 7-12) */}
          <div className="flex flex-col gap-6 order-1 lg:order-2 lg:col-span-5 w-full" data-aos="fade-left">
            {/* Heading Group */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <div className="w-8 h-1 bg-secondary"></div>
                <Typography variant="h2" color="primary" className="font-bold leading-tight">
                  About R.P.L Clima
                </Typography>
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-4">
              <Typography variant="p" color="muted" className="leading-relaxed">
                RPL CLIMA began operations in 2000, specializing in the import and export of automotive air conditioning parts. With its extensive experience, RPL CLIMA continues to respond with quality, professionalism, and dynamism to the new challenges presented by the international market. We are able to offer our customers a wide range of high-quality parts at competitive prices for automotive, industrial, agricultural, and transport refrigeration air conditioning systems.
              </Typography>

              <Typography variant="p" color="muted" className="leading-relaxed">
                We are always seeking innovative solutions, which is why, in 2015, we created our RPL QUALITY brand, committed to providing high-quality products at a low cost. We have the human resources and technical capabilities to guarantee our customers excellent service and fast delivery. We aim to be an asset to our clients, as the diversity of products and services we can provide through various processes and technologies makes us the ideal partner.
              </Typography>
            </div>

            <div className="mt-2" data-aos="fade-left" data-aos-delay="100">
              <Button text="Learn More About Us" href="#about" />
            </div>
          </div>
        </div>

        {/* Bottom Section: 4 Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-[3800px]:gap-12" data-aos="fade-up" data-aos-delay="200">

          {/* Card 1 */}
          <div className="flex flex-col gap-4 bg-white border border-gray-100 shadow-sm p-6 sm:p-8 rounded-xl min-[3800px]:rounded-3xl hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <img src="/moto/rpl/icon1.png" alt="Experience Icon" className="w-15 h-15 min-[3800px]:w-30 min-[3800px]:h-30 object-contain" />
              <Typography variant="h3" color="dark" className="font-bold leading-tight">
                Experience Since 2000
              </Typography>
            </div>
            <Typography variant="p" color="muted" className="leading-relaxed block">
              Delivering trusted automotive climate control solutions with extensive industry knowledge, reliable products, and exceptional customer service since 2000.
            </Typography>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-4 bg-white border border-gray-100 shadow-sm p-6 sm:p-8 rounded-xl min-[3800px]:rounded-3xl hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <img src="/moto/rpl/icon2.png" alt="Quality Icon" className="w-15 h-15 min-[3800px]:w-30 min-[3800px]:h-30 object-contain" />
              <Typography variant="h3" color="dark" className="font-bold leading-tight">
                Premium Quality
              </Typography>
            </div>
            <Typography variant="p" color="muted" className="leading-relaxed block">
              Our products are carefully selected and tested to ensure durability, efficiency, and consistent performance across automotive, industrial, and transport applications.
            </Typography>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col gap-4 bg-white border border-gray-100 shadow-sm p-6 sm:p-8 rounded-xl min-[3800px]:rounded-3xl hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <img src="/moto/rpl/icon3.png" alt="Network Icon" className="w-15 h-15 min-[3800px]:w-30 min-[3800px]:h-30 object-contain" />
              <Typography variant="h3" color="dark" className="font-bold leading-tight">
                Global Supply Network
              </Typography>
            </div>
            <Typography variant="p" color="muted" className="leading-relaxed block">
              We import and export a comprehensive range of automotive air conditioning components, providing fast, dependable supply solutions to international markets.
            </Typography>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col gap-4 bg-white border border-gray-100 shadow-sm p-6 sm:p-8 rounded-xl min-[3800px]:rounded-3xl hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <img src="/moto/rpl/icon4.png" alt="Delivery Icon" className="w-15 h-15 min-[3800px]:w-30 min-[3800px]:h-30 object-contain" />
              <Typography variant="h3" color="dark" className="font-bold leading-tight">
                Fast Delivery & Support
              </Typography>
            </div>
            <Typography variant="p" color="muted" className="leading-relaxed block">
              With a dedicated logistics network and experienced technical team, we ensure prompt deliveries, responsive support, and complete customer satisfaction.
            </Typography>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;
