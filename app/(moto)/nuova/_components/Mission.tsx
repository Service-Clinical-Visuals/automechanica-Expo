"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const Mission = () => {
  return (
    <section id="mission" className="w-full py-16 min-[3800px]:py-25 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-10  min-[3800px]:gap-24">

        {/* Header Section */}
        <div className="flex flex-col mb-5 items-center justify-center text-center gap-4 xl:max-w-[60%] mx-auto">
          <Typography variant="h2" color="dark" className="font-bold leading-tight" data-aos="fade-up">
            Values & Mission
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Built on strong values and innovation, Nuova Tecnodelta delivers reliable automotive solutions through quality, continuous improvement, and sustainable growth.
          </Typography>
        </div>

        {/* Cards Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24 xl:gap-y-28 min-[3800px]:gap-32 mt-12 xl:mt-16 px-4 sm:px-0">

          {/* Card 1: Our Values */}
          <div className="relative bg-white rounded-xl border border-gray-200 shadow-sm px-6 pt-16 pb-8 md:px-8 md:pt-20 xl:px-10 xl:pt-24 min-[3800px]:px-24 min-[3800px]:pt-[260px] min-[3800px]:pb-24 flex flex-col h-full" data-aos="fade-right">
            {/* Overlay Icon */}
            <div className="absolute -top-10 left-6 w-20 h-20 md:-top-14 md:w-28 md:h-28 xl:-top-16 xl:w-36 xl:h-36 min-[3800px]:-top-[180px] min-[3800px]:left-20 min-[3800px]:w-[380px] min-[3800px]:h-[380px] bg-primary text-white flex items-center justify-center rounded-lg shadow-lg">
              <img src="/moto/nuova/vector1.png" className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] xl:w-[90px] xl:h-[90px] min-[3800px]:w-[260px] min-[3800px]:h-[260px]" alt="values icon" />
            </div>

            <Typography variant="h3" color="dark" className="font-bold mt-2 xl:mt-4 mb-4 min-[3800px]:text-5xl">
              Our Values
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed mb-6 flex-1 min-[3800px]:text-3xl min-[3800px]:leading-loose">
              Nuova Tecnodelta is committed to customer satisfaction, continuous improvement, and product excellence. Through quality-driven processes, skilled employees, and a strong focus on innovation, the company develops reliable automotive solutions while ensuring efficiency, sustainability, and consistent performance across every operation.
            </Typography>

            <div className="flex justify-end mt-auto">
              <span className="text-primary underline text-sm font-semibold hover:text-primary-hover transition-colors min-[3800px]:text-3xl">
                Read More
              </span>
            </div>
          </div>

          {/* Card 2: Our Mission */}
          <div className="relative bg-white rounded-xl border border-gray-200 shadow-sm px-6 pt-16 pb-8 md:px-8 md:pt-20 xl:px-10 xl:pt-24 min-[3800px]:px-24 min-[3800px]:pt-[260px] min-[3800px]:pb-24 flex flex-col h-full" data-aos="fade-left">
            {/* Overlay Icon */}
            <div className="absolute -top-10 left-6 w-20 h-20 md:-top-14 md:w-28 md:h-28 xl:-top-16 xl:w-36 xl:h-36 min-[3800px]:-top-[180px] min-[3800px]:left-20 min-[3800px]:w-[360px] min-[3800px]:h-[360px] bg-primary text-white flex items-center justify-center rounded-lg shadow-lg">
              <img src="/moto/nuova/vector2.png" className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] xl:w-[90px] xl:h-[90px] min-[3800px]:w-[240px] min-[3800px]:h-[240px]" alt="values icon" />
            </div>

            <Typography variant="h3" color="dark" className="font-bold mt-2 xl:mt-4 mb-4 min-[3800px]:text-5xl">
              Our Mission
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed mb-6 flex-1 min-[3800px]:text-3xl min-[3800px]:leading-loose">
              To lead the automotive sector through innovative solutions, advanced technologies, and flexible production processes. Nuova Tecnodelta continuously invests in expertise and manufacturing excellence to deliver reliable, high-quality components that meet global customer needs.
            </Typography>

            <div className="flex justify-end mt-auto">
              <span className="text-primary underline text-sm font-semibold hover:text-primary-hover transition-colors min-[3800px]:text-3xl">
                Read More
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Button */}
        <div className="mt-1" data-aos="fade-up">
          <Button text="Learn More" href="#mission" showIcon={false} />
        </div>

      </div>
    </section>
  );
};

export default Mission;
