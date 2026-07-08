import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function Automation() {
  return (
    <section className="w-full py-12 md:py-14 " data-aos="fade-up">
      <div className="custom-container flex flex-col gap-8 lg:gap-8">

        {/* Top Content: Heading and Description */}
        <div className="flex flex-col items-center text-center max-w-[70%] mx-auto gap-4" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold">
            Driving Automotive Progress Since 1957
          </Typography>
          <div className="w-[70%] h-px bg-gray-400 "></div>
          <Typography variant="p" color="muted" className="leading-relaxed">
            Airstal Sp. z o. o. is a company founded in 2004 by Danish specialists, located near Łódź, in central Poland. Thanks to years of experience, we have become one of the European leaders in the remanufacturing of air conditioning compressors for passenger cars, trucks, delivery vans, buses, agricultural and construction machinery, as well as in the sale of air conditioning compressor parts. Our offer includes both new and remanufactured products.
          </Typography>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" data-aos="fade-up" data-aos-delay="100">
          <div className="w-full h-auto overflow-hidden rounded-2xl shadow-md">
            <img
              src="/airstal/section21.png"
              alt="Airstal Building Exterior"
              className="w-full h-full object-fill scale-[1.05] hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="w-full h-auto overflow-hidden rounded-2xl shadow-md">
            <img
              src="/airstal/section22.png"
              alt="Airstal Building Interior Logo"
              className="w-full h-full scale-[1.05] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Bottom Content: Description and Button */}
        <div className="pt-8 border-t border-gray-400 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8" data-aos="fade-up" data-aos-delay="200">
          <div className="max-w-[60%]">
            <Typography variant="p" color="muted" className="leading-relaxed">
              With a strong commitment to innovation, sustainability, and customer satisfaction, Airstal has established a reputation for producing high-performance products that meet or exceed OEM specifications. Every compressor undergoes a rigorous remanufacturing process, ensuring
            </Typography>
          </div>
          <div className="flex-shrink-0">
            <Button text="Discover Airstal" href="#" />
          </div>
        </div>

      </div>
    </section>
  );
}
