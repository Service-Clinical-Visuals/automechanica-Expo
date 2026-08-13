"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const Advance = () => {
  return (
    <section id="advance" className="w-full py-16 min-[2100px]:py-24 min-[3800px]:py-32 bg-white overflow-hidden">
      <div className="custom-container flex flex-col xl:flex-row gap-8  mx-auto xl:gap-12 min-[2100px]:gap-20 min-[3800px]:gap-32 items-center ">

        {/* Mobile Header (Hidden on Desktop) */}
        <div className="xl:hidden w-full flex flex-col gap-4" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold leading-tight">
            Advanced Wheel Alignment Technology
          </Typography>
        </div>

        {/* Left: Image (Order 2 on Mobile, Order 1 on Desktop) */}
        <div className="w-full xl:w-[50%] min-[3800px]:w-[55%] flex shrink-0" data-aos="fade-right">
          <img
            src="/moto/koch/section3.jpg"
            alt="Advanced Wheel Alignment"
            className="w-full h-auto object-cover rounded-2xl shadow-lg "
          />
        </div>

        {/* Right: Content (Order 3 on Mobile, Order 2 on Desktop) */}
        <div className="w-full xl:w-[50%] min-[3800px]:w-[45%] flex flex-col gap-6 min-[2100px]:gap-8 min-[3800px]:gap-12 xl:pt-4" data-aos="fade-left">

          {/* Desktop Header (Hidden on Mobile) */}
          <div className="hidden xl:flex flex-col gap-4">
            <Typography variant="h2" color="dark" className="font-bold leading-tight">
              Advanced Wheel Alignment Technology
            </Typography>
          </div>

          <div className="flex flex-col gap-4 min-[2100px]:gap-6 min-[3800px]:gap-10">
            <Typography variant="p" color="muted" className="leading-relaxed">
              Wheel alignment systems combine advanced laser measurement technology and electronic tools to deliver accurate alignment results for cars, commercial vehicles, and agricultural machinery. Designed for professional workshops, these systems provide precise measurements, efficient operation, and reliable performance across various vehicle applications.
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed">
              With advanced measuring capabilities, the systems accurately evaluate essential alignment parameters such as toe, camber, caster, KPI, and axle offset. This enables technicians to perform detailed alignment checks and maintain proper vehicle positioning for improved service quality.
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed">
              Built to meet different workshop requirements, these alignment solutions offer fast setup, reliable operation, and flexible usage across a wide range of vehicle types. With practical design and efficient measurement processes, they help professional technicians achieve consistent alignment results, improve workshop productivity, and support high-quality vehicle maintenance with dependable performance.
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed">
              Designed for modern automotive workshops, these wheel alignment systems combine accuracy, efficiency, and reliable technology to support professional alignment operations. They provide the flexibility and performance needed for precise wheel alignment across various applications.
            </Typography>
          </div>

          <div className="mt-2 min-[2100px]:mt-6 min-[3800px]:mt-10">
            <Button text="Know More" href="#advance" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Advance;
