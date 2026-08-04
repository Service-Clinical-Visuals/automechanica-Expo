"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Explore = () => {
  return (
    <section id="explore" className="w-full py-16 min-[2100px]:py-20 min-[3800px]:py-25 bg-secondary overflow-hidden">
      <div className="custom-container flex flex-col gap-8 min-[2100px]:gap-12 min-[3800px]:gap-16">

        {/* Top Content */}
        <div className="flex flex-col xl:grid xl:grid-cols-12 gap-8 min-[2100px]:gap-12 min-[3800px]:gap-16 items-center xl:items-start">
          {/* Title */}
          <div className="w-full xl:col-span-5 flex flex-col gap-6 order-1 xl:order-none" data-aos="fade-right">
            <Typography variant="h2" color="white" className="font-bold leading-tight">
              Explore LPR Braking Solutions in 360°
            </Typography>
          </div>

          {/* Video Player */}
          <div className="w-full xl:col-span-7 h-full min-h-[300px] sm:min-h-[400px] xl:min-h-[500px] min-[2100px]:min-h-[700px] min-[3800px]:min-h-[900px] order-2 xl:order-none xl:row-span-2" data-aos="fade-left">
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg relative">
              <DynamicVideoPlayer type="360" className="w-full h-full object-cover absolute inset-0" />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full xl:col-span-5 flex flex-col gap-4 order-3 xl:order-none" data-aos="fade-right">
            <Typography variant="p" color="white" className=" leading-relaxed text-sm">
              Discover the precision engineering and advanced manufacturing behind LPR's automotive components through an immersive 360° experience. Explore the detailed design, structure, and quality of our high-performance engine parts developed for demanding automotive applications.
            </Typography>
            <Typography variant="p" color="white" className=" leading-relaxed text-sm">
              LPR specializes in the manufacturing of high-performance braking components, including brake pads, shoes, discs, and drums. By combining advanced manufacturing technologies, precision machining processes, and more than six decades of automotive expertise, LPR delivers reliable, durable, and efficient solutions for global automotive applications.
            </Typography>
            <Typography variant="p" color="white" className=" leading-relaxed text-sm">
              From initial design and prototyping to casting and final production, every component is developed with strict quality standards to ensure durability, performance, and efficiency. The 360° view highlights the engineering excellence and attention to detail behind each LPR product.
            </Typography>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/20 mt-4 xl:mt-0"></div>

        {/* Bottom Content: Text Left, Button Right */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-2 w-full" data-aos="fade-up">
          <Typography variant="p" color="white" className=" leading-relaxed text-sm max-w-[80%] text-center md:text-left">
            Experience the innovation, precision, and craftsmanship that have established LPR as a trusted partner in the global automotive industry. With advanced engineering expertise, modern manufacturing technologies, and a strong commitment to quality, LPR delivers high-performance component solutions for OEM, OES, and aftermarket markets worldwide, meeting the highest standards of reliability and efficiency.
          </Typography>
          <div className="shrink-0 mt-4 md:mt-0">
            <Button text="Explore" href="#explore" showIcon={false} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Explore;
