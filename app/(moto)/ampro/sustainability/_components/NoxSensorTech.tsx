"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "../../_components/Typography";

const NoxSensorTech = () => {
  return (
    <section className="w-full py-16 xl:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-10 min-[3800px]:gap-16 items-center">

        {/* Left: Content */}
        <div className="w-full xl:col-span-5 flex flex-col gap-6 order-2 xl:order-1">

          {/* Heading Group */}
          <div className="flex flex-col gap-3" data-aos="fade-up">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <Typography variant="h6" color="secondary" className="font-bold uppercase tracking-wider text-sm">
                EMISSION CONTROL
              </Typography>
            </div>
            <Typography variant="h2" color="dark" className="font-bold leading-tight">
              NOx Sensor Technology
            </Typography>
          </div>

          {/* Text Paragraphs */}
          <div className="flex flex-col gap-5 mt-2">
            <Typography variant="p" color="muted" className="leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              NOx sensors play a crucial role in supporting the sustainable development of modern vehicles and other combustion systems. By accurately measuring nitrogen oxide levels in exhaust gases, these sensors help emission-control systems reduce harmful pollutants while supporting compliance with increasingly stringent emissions standards and environmental regulations.
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Particularly in the automotive industry, the use of NOx sensors is essential for reducing nitrogen oxide emissions. Nitrogen oxides are among the harmful air pollutants that can affect both human health and the environment. High concentrations of nitrogen oxides can contribute to the formation of smog and acid rain, thus impairing the habitats of animals and plants. NOx sensors accurately monitor these emissions and provide important data to vehicle emission-control systems.
            </Typography>
          </div>

        </div>

        {/* Right: Video */}
        <div className="w-full xl:col-span-7 order-1 xl:order-2 relative aspect-video overflow-hidden " data-aos="fade-left">
          <DynamicVideoPlayer type="short-3" className="absolute inset-0 w-full h-full object-cover" />
        </div>

      </div>
    </section>
  );
};

export default NoxSensorTech;
