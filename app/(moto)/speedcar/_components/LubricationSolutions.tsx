"use client";

import React from "react";
import Container from "./Container";
import Typography from "./Typography";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { Wrench } from "lucide-react";

const LubricationSolutions = () => {
  const listItems = [
    {
      title: "Advanced Engine Oil Solutions",
      desc: "Engineered to deliver superior lubrication, enhanced engine protection, and outstanding performance under all driving conditions. Designed to reduce wear, improve fuel efficiency, and extend engine life."
    },
    {
      title: "Powering Performance Every Mile",
      desc: "Our high-quality engine oils provide exceptional thermal stability, oxidation resistance, and smooth operation, ensuring reliable protection for modern engines in demanding environments."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F9F9F9]" id="lubrication-solutions">
      <Container>
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 items-center">

          {/* Left Content */}
          <div className="w-full xl:w-1/2">
            <Typography variant="h2" color="dark" data-aos="fade-right" className="heading font-bold not-italic! mb-4">
              360° Engine Oil Product Showcase Video
            </Typography>
            <Typography variant="body" data-aos="fade-up" data-aos-delay="100" className="content mb-8 text-justify tracking-[0%]! leading-[28px]!">
              Premium engine oils formulated to provide superior lubrication, reduce engine wear, and maximize performance in all driving conditions. Designed with advanced additive technology, they help improve fuel efficiency, maintain engine cleanliness, and extend engine life.
            </Typography>

            {/* Mobile/Tablet Video Placeholder */}
            <div className="w-full xl:hidden bg-[#f0f0f0] aspect-[4/3] md:aspect-video rounded flex items-center justify-center border border-gray-100 overflow-hidden relative mb-10">
              <DynamicVideoPlayer type="360" />
            </div>

            <div className="space-y-6">
              {listItems.map((item, idx) => (
                <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100} className="group">
                  <div className="flex gap-4 items-center mb-2">
                    <div className="bg-primary w-12 h-12 flex items-center justify-center shrink-0">
                      <Wrench size={22} className="text-white" />
                    </div>
                    <Typography variant="h5" color="dark" className="subheading font-semibold">
                      {item.title}
                    </Typography>
                  </div>
                  <Typography variant="body" className="content tracking-[0%]! leading-[28px]!">
                    {item.desc}
                  </Typography>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Video Placeholder */}
          <div data-aos="fade-left" data-aos-delay="150" className="hidden xl:flex w-full xl:w-1/2 justify-center">
            <div className="w-full bg-[#f0f0f0] aspect-[4/3] md:aspect-video rounded flex items-center justify-center border border-gray-100 overflow-hidden relative">
              <DynamicVideoPlayer type="360" />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default LubricationSolutions;
