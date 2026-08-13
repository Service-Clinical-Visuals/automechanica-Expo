"use client";

import React from "react";
import Container from "./Container";
import Typography from "./Typography";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

const LubricationSolutions = () => {
  const listItems = [
    {
      title: "Superior Wear Protection",
      desc: "Helps reduce friction and protect critical engine components."
    },
    {
      title: "Enhanced Engine Cleanliness",
      desc: "Controls sludge, deposits, and contaminants for cleaner operation."
    },
    {
      title: "Excellent Thermal Stability",
      desc: "Maintains performance in both high-temperature and cold-start conditions."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="lubrication-solutions">
      <Container>
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 items-center">

          {/* Left Content */}
          <div className="w-full xl:w-1/2">
            <Typography variant="h2" color="dark" className="font-goldman mb-4 text-3xl md:text-4xl text-[#1A1A1A]">
              Explore Advanced Lubrication Solutions
            </Typography>
            <Typography variant="body" className="font-albert  mb-8 text-sm md:text-base leading-relaxed">
              From passenger cars and motorcycles to commercial vehicles and heavy-duty machinery, our engine oils are designed to support optimal engine performance, extended service life, and improved fuel economy.
            </Typography>

            {/* Mobile/Tablet Video Placeholder */}
            <div className="w-full xl:hidden bg-[#f0f0f0] aspect-[4/3] md:aspect-video rounded flex items-center justify-center border border-gray-100 overflow-hidden relative mb-10">
              <DynamicVideoPlayer type="short-1" />
            </div>

            <div className="space-y-6 mb-10">
              {listItems.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-center group">
                  <div className="bg-[#112C63] w-12 h-12 flex items-center justify-center shrink-0">
                    <img
                      src="/moto/eurol/Vector.png"
                      alt="Icon"
                      className="w-5 h-5 xl:h-7 xl:w-7 object-contain"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                  <div>
                    <Typography variant="h5" color="dark" className="font-goldman text-[#1A1A1A]  text-lg group-hover:text-secondary transition-colors">
                      {item.title}
                    </Typography>
                    <Typography variant="body" className="font-albert text-sm">
                      {item.desc}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>

            <Button text="View All Products" className="font-goldman" />
          </div>

          {/* Desktop Video Placeholder */}
          <div className="hidden xl:flex w-full xl:w-1/2 justify-center">
            <div className="w-full bg-[#f0f0f0] aspect-[4/3] md:aspect-video rounded flex items-center justify-center border border-gray-100 overflow-hidden relative">
              <DynamicVideoPlayer type="short-1" />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default LubricationSolutions;
