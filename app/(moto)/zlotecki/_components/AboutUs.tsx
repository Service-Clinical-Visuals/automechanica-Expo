"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-white relative">
      <div className="custom-container relative z-10 grid grid-cols-1 xl:grid-cols-2 gap-10 min-[3800px]:gap-16 min-[3800px]:gap-24 items-center">

        {/* Image (Mobile: Order 2) */}
        <div className="order-2 xl:order-1  aspect-[960/705] relative" data-aos="fade-right">
          <img
            src="/moto/zlotecki/section2.png"
            alt="The beginnings of the company"
            className="w-full h-full object-cover rounded-[32px] rounded-tr-none rounded-bl-none min-[3800px]:rounded-[64px] min-[3800px]:rounded-tr-none shadow-lg"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </div>

        {/* Text Content (Mobile: Order 1) */}
        <div className="order-1 xl:order-2 flex flex-col gap-6 min-[3800px]:gap-12 w-full" data-aos="fade-left">

          <div className="flex flex-col gap-4">
            <Typography variant="h2" color="dark" className="font-bold leading-tight">
              The beginnings of the company
            </Typography>

            <div className="flex flex-col gap-4 min-[3800px]:gap-8 mt-2 min-[3800px]:mt-6">
              <Typography variant="p" color="muted" className="leading-relaxed ">
                The company's history dates back to the 1970s, when Leon Złotecki decided to open a car repair shop. In the 1980s, due to problems with the availability of parts for the repaired vehicles, the decision was made to begin manufacturing in this area. The production of engine parts, particularly cylinders for motorcycle engines, and the launch of the first types of pistons proved to be the company's primary development goals.
              </Typography>
              <Typography variant="p" color="muted" className="leading-relaxed ">
                The first pistons produced by the company were two-stroke engine pistons for motorcycles, mopeds and scooters.
              </Typography>
              <Typography variant="p" color="muted" className="leading-relaxed ">
                In the mid-1990s, the production of pistons for gasoline engines for passenger cars and pistons for diesel engines, in particular for engines used in agricultural tractors, began.
              </Typography>
              <Typography variant="p" color="muted" className="leading-relaxed ">
                The following years saw intensive development of piston production, the introduction of new production technologies, modernization and automation of processes.
              </Typography>
            </div>
          </div>

          <div className="mt-4 min-[3800px]:mt-8">
            <Button text="Learn More" href="#about" variant="primary" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;
