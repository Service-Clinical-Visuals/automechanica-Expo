"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const Precision = () => {
  return (
    <section id="precision" className="w-full py-16 md:py-24 bg-white relative">
      <div className="custom-container relative z-10 flex flex-col items-center justify-center text-center gap-10 min-[3800px]:gap-20">

        {/* Header Section */}
        <div className="flex flex-col items-center gap-4   text-center" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="font-bold leading-tight max-w-4xl">
            Precision Pistons and Piston Rings for Reliable Engine Performance
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed max-w-3xl">
            Discover our comprehensive range of premium pistons and piston rings, engineered to deliver exceptional durability, efficient combustion, and reliable engine performance.
          </Typography>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 min-[3800px]:gap-16 w-full text-left">

          {/* Card 1 */}
          <div
            className="flex flex-col bg-primary p-6 md:p-10 min-[3800px]:p-16 gap-6 min-[3800px]:gap-12 rounded-tl-[32px] rounded-br-[32px] rounded-tr-none rounded-bl-none min-[3800px]:rounded-tl-[64px] min-[3800px]:rounded-br-[64px] shadow-lg"
            data-aos="fade-right" data-aos-delay="100"
          >
            {/* Top row: Image (left) and Title/P1 (right) */}
            <div className="flex flex-col xl:flex-row gap-6 min-[3800px]:gap-10 items-center">
              {/* Image Container */}
              <div className="w-full xl:w-[45%] shrink-0 aspect-[349/231] bg-white flex items-center justify-center p-4 rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none min-[3800px]:rounded-tl-[48px] min-[3800px]:rounded-br-[48px]">
                <img
                  src="/zlotecki/a1.png"
                  alt="Pistons for diesel engines"
                  className="w-full h-full object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              {/* Side Content */}
              <div className="flex flex-col gap-4 min-[3800px]:gap-8 flex-1 mt-2 xl:mt-0">
                <Typography variant="h3" color="white" className="font-bold">
                  Pistons for diesel engines
                </Typography>
                <Typography variant="p" color="white" className="leading-relaxed text-[15px] min-[3800px]:text-[30px]">
                  Pistons for diesel engines are manufactured in diameters ranging from 75 to 160 mm. Due to the design of these engines, these pistons can withstand greater mechanical loads than other piston types.
                </Typography>
              </div>
            </div>

            {/* Bottom Content: P2 */}
            <div className="flex flex-col mt-2 min-[3800px]:mt-4">
              <Typography variant="p" color="white" className="leading-relaxed text-[15px] min-[3800px]:text-[30px]">
                For turbocharged engines, pistons are manufactured with a cast iron insert for the first compression ring using "Alfin" technology. Some diesel pistons also feature steel compensating inserts in the piston skirt. To ensure the highest quality, the surface is also coated with graphite, molybdenum, and other materials according to customer specifications.
              </Typography>
            </div>

            {/* Divider and Button */}
            <div className="flex flex-col gap-6 min-[3800px]:gap-12 mt-auto pt-4 min-[3800px]:pt-8">
              <div className="w-full h-[1px] bg-white/20"></div>
              <div className="flex justify-center">
                <a href="#explore" className="bg-white text-primary hover:bg-gray-100 transition-colors font-semibold px-6 py-3 min-[3800px]:px-12 min-[3800px]:py-6 min-[3800px]:text-2xl rounded-tl-[16px] min-[3800px]:rounded-tl-[32px] rounded-br-[16px] min-[3800px]:rounded-br-[32px]">
                  Explore Our Solution
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="flex flex-col bg-primary p-6 md:p-10 min-[3800px]:p-16 gap-6 min-[3800px]:gap-12 rounded-tl-[32px] rounded-br-[32px] rounded-tr-none rounded-bl-none min-[3800px]:rounded-tl-[64px] min-[3800px]:rounded-br-[64px] shadow-lg"
            data-aos="fade-left" data-aos-delay="200"
          >
            {/* Top row: Image (left) and Title/P1 (right) */}
            <div className="flex flex-col xl:flex-row gap-6 min-[3800px]:gap-10 items-center">
              {/* Image Container */}
              <div className="w-full xl:w-[45%] shrink-0 aspect-[349/231] bg-white flex items-center justify-center p-4 rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none min-[3800px]:rounded-tl-[48px] min-[3800px]:rounded-br-[48px]">
                <img
                  src="/zlotecki/a2.png"
                  alt="Pistons for petrol engines"
                  className="w-full h-full object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              {/* Side Content */}
              <div className="flex flex-col gap-4 min-[3800px]:gap-8 flex-1 mt-2 xl:mt-0">
                <Typography variant="h3" color="white" className="font-bold">
                  Pistons for petrol engines
                </Typography>
                <Typography variant="p" color="white" className="leading-relaxed text-[15px] min-[3800px]:text-[30px]">
                  Pistons for gasoline engines are manufactured in diameters ranging from 60 to 150 mm. The Złotecki company produces pistons for gasoline engines intended for passenger cars.
                </Typography>
              </div>
            </div>

            {/* Bottom Content: P2 */}
            <div className="flex flex-col mt-2 min-[3800px]:mt-4">
              <Typography variant="p" color="white" className="leading-relaxed text-[15px] min-[3800px]:text-[30px]">
                Designed for modern passenger vehicles, Złotecki petrol engine pistons are engineered to deliver smooth engine operation, optimal power output, and long-lasting durability. Manufactured with precision and high-quality alloys, each piston offers excellent thermal resistance, reduced friction, and accurate fitment, helping improve combustion efficiency, minimize wear, and ensure reliable performance throughout the engine's service life.
              </Typography>
            </div>

            {/* Divider and Button */}
            <div className="flex flex-col gap-6 min-[3800px]:gap-12 mt-auto pt-4 min-[3800px]:pt-8">
              <div className="w-full h-[1px] bg-white/20"></div>
              <div className="flex justify-center">
                <a href="#explore" className="bg-white text-primary hover:bg-gray-100 transition-colors font-semibold px-6 py-3 min-[3800px]:px-12 min-[3800px]:py-6 min-[3800px]:text-2xl rounded-tl-[16px] min-[3800px]:rounded-tl-[32px] rounded-br-[16px] min-[3800px]:rounded-br-[32px]">
                  Explore Our Solution
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Precision;
