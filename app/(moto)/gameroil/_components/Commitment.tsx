"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const Commitment = () => {
  return (
    <section id="commitment" className="w-full py-16 min-[3800px]:py-25 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Mobile Title */}
          <div className="xl:hidden col-span-1 flex flex-col order-1" data-aos="fade-down">
            <Typography variant="h2" className="font-bold leading-tight text-gray-900">
              Commitment to Quality and Excellence
            </Typography>
          </div>

          {/* Right Image - Mobile: Order 2, Desktop: Right (Col 8-12 or similar. requested: Text 7, Image 5) */}
          <div className="col-span-1 xl:col-span-6 xl:col-start-7 order-2 w-full h-full min-h-[250px] sm:min-h-[350px] lg:min-h-[550px] min-[2500px]:min-h-[600px] min-[3800px]:min-h-[800px] relative rounded-2xl overflow-hidden shadow-lg" data-aos="fade-left">
            <img
              src="/moto/gameroil/section3.png"
              alt="Commitment to Quality"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Left Text - Mobile: Order 3, Desktop: Left (Col 1-7) */}
          <div className="col-span-1 xl:col-span-6 xl:row-start-1 order-3 flex flex-col gap-6" data-aos="fade-right">
            {/* Desktop Title */}
            <div className="hidden xl:flex flex-col">
              <Typography variant="h2" className="font-bold leading-tight text-gray-900">
                Commitment to Quality and Excellence
              </Typography>
            </div>

            <div className="flex flex-col gap-4">
              <Typography variant="p" className="leading-relaxed text-gray-600">
                GAMEROIL SAL is committed to the production, packaging, and distribution of high-quality automotive and industrial lubricants and coolants, ensuring customer satisfaction, regulatory compliance, and strict quality and safety standards. Through an effective quality management system, the company continuously improves its processes, products, and services while maintaining sustainable operations.
              </Typography>
              <Typography variant="p" className="leading-relaxed text-gray-600">
                All GAMEROIL employees and collaborators follow international, national, regional, and local regulations while working to exceed industry standards. The company ensures consistent product quality through advanced control systems, environmental responsibility, and efficient manufacturing practices, delivering reliable and safe lubricant and coolant solutions.
              </Typography>
              <Typography variant="p" className="leading-relaxed text-gray-600">
                With a strong commitment to innovation, GAMEROIL develops high-quality lubricants, coolants, and specialty fluids that meet international technical standards. Through advanced formulations and rigorous quality testing, the company delivers reliable solutions that enhance performance, protect equipment, and ensure long-lasting durability.
              </Typography>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#E53935]" data-aos="fade-up"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6" data-aos="fade-up" data-aos-delay="100">
          <div className="flex-1 lg:max-w-[70%]">
            <Typography variant="p" className="leading-relaxed text-gray-600 text-sm md:text-base min-[2500px]:text-xl min-[3800px]:text-2xl">
              GAMEROIL continuously invests in technology, research, and process improvement to develop advanced lubrication solutions that meet evolving market demands. Through quality-driven manufacturing and customer-focused service, the company ensures efficient, reliable, and sustainable solutions for industries worldwide.
            </Typography>
          </div>
          <div className="shrink-0 w-full lg:w-auto flex justify-start lg:justify-end">
            <Button text="Know More" href="#commitment" showIcon={false} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Commitment;
