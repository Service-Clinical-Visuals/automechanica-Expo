"use client";

import React from "react";
import Typography from "./Typography";

const JoinUs = () => {
  return (
    <section className="w-full py-16 min-[3800px]:py-24 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-10 lg:gap-14 min-[3800px]:gap-20">

        {/* Header Block */}
        <div className="flex flex-col items-center text-center gap-4 w-full lg:max-w-[70%]" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold leading-tight">
            Why Join Us?
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed">
            Maintaining the highest quality standards through advanced engineering, strict validation processes, and continuous improvement.
            <br className="hidden md:block" />
            Every product is tested to ensure durability, reliability, and performance while meeting global automotive requirements.
          </Typography>
        </div>

        {/* Cards Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 min-[3800px]:gap-10" data-aos="fade-up" data-aos-delay="100">

          {/* Card 1 */}
          <div className="flex flex-col items-center justify-start text-center gap-4 bg-white border border-gray-100 rounded-xl p-8 min-[3800px]:p-12 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center shrink-0 w-16 h-16 lg:w-20 lg:h-20 min-[3800px]:w-36 min-[3800px]:h-36">
              <img src="/moto/wai/join1.png" alt="Global team" className="w-full h-full object-contain" />
            </div>
            <Typography variant="p" color="muted" className="leading-relaxed font-medium">
              A truly global team with high growth trajectory
            </Typography>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center justify-start text-center gap-4 bg-white border border-gray-100 rounded-xl p-8 min-[3800px]:p-12 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center shrink-0 w-16 h-16 lg:w-20 lg:h-20 min-[3800px]:w-36 min-[3800px]:h-36">
              <img src="/moto/wai/join2.png" alt="Leadership" className="w-full h-full object-contain" />
            </div>
            <Typography variant="p" color="muted" className="leading-relaxed font-medium">
              Open-door leadership that values ideas at every level
            </Typography>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center justify-start text-center gap-4 bg-white border border-gray-100 rounded-xl p-8 min-[3800px]:p-12 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center shrink-0 w-16 h-16 lg:w-20 lg:h-20 min-[3800px]:w-36 min-[3800px]:h-36">
              <img src="/moto/wai/join3.png" alt="Merit-based growth" className="w-full h-full object-contain" />
            </div>
            <Typography variant="p" color="muted" className="leading-relaxed font-medium">
              Merit-based growth and recognition for results
            </Typography>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center justify-start text-center gap-4 bg-white border border-gray-100 rounded-xl p-8 min-[3800px]:p-12 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center shrink-0 w-16 h-16 lg:w-20 lg:h-20 min-[3800px]:w-36 min-[3800px]:h-36">
              <img src="/moto/wai/join4.png" alt="Culture" className="w-full h-full object-contain" />
            </div>
            <Typography variant="p" color="muted" className="leading-relaxed font-medium">
              A culture of ownership, care and inspiration
            </Typography>
          </div>

        </div>

      </div>
    </section>
  );
};

export default JoinUs;
