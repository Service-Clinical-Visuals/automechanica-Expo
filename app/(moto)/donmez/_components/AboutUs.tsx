"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10">

        {/* Heading (Order 1 on all devices) */}
        <div className="w-full text-center order-1" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold">
            About Us
          </Typography>
        </div>

        {/* Text Content (Order 2 on Mobile, Order 3 on Desktop) */}
        <div className="flex flex-col gap-6 order-2 xl:order-3  w-full" data-aos="fade-up">
          <Typography variant="p" color="dark" className=" leading-relaxed">
            Founded in Izmir in 1980, Dönmez Debriyaj is today Türkiye's largest clutch manufacturer, producing for heavy and light commercial vehicles with 100% domestic capital. Over time, it has established a strong position in the global market and become a world brand. With over 40 years of experience and a strong corporate structure, Dönmez and Hammer Kupplungen manufacture printing presses, discs, bearings, flywheels, and turbos ranging from 215 mm to 430 mm under their respective brands and export to more than 80 countries.
          </Typography>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <Typography variant="p" color="dark" className=" leading-relaxed md:max-w-[75%] lg:max-w-[80%]">
              Focusing on innovative technologies and sustainable production, Dönmez Debriyaj offers project-based customized solutions with digitized production lines and environmentally friendly processes. With the new factory investment completed in 2020, its annual production capacity has reached 600,000 units. The ever-increasing global interest propels us forward with bigger goals and higher performance.
            </Typography>
            <div className="shrink-0 flex justify-end">
              <Button text="Learn More" variant="primary" href="#about" />
            </div>
          </div>
        </div>

        {/* Images (Order 3 on Mobile, Order 2 on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 order-3 xl:order-2 w-full" data-aos="fade-up">
          <div className="w-full aspect-[534/352] overflow-hidden shadow-sm">
            <img src="/moto/donmez/section21.png" alt="Facility Overview" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="w-full aspect-[534/352] overflow-hidden shadow-sm">
            <img src="/moto/donmez/section22.png" alt="Production Line" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="w-full aspect-[534/352] overflow-hidden shadow-sm">
            <img src="/moto/donmez/section23.png" alt="Machinery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
