"use client";

import React from "react";
import Container from "./Container";
import Typography from "./Typography";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const timelineData = [
  {
    title: "Cylinder coils",
    desc: "The oldest type of ignition coils. Nowadays, cylinder ignition coils are only installed in older cars.",
    offset: false,
  },
  {
    title: "Distributor coils",
    desc: "Ignition coils for vehicles with mechanical ignition distributor. One ignition coil feeds the spark plugs through the distributor.",
    offset: true,
  },
  {
    title: "Rail coils",
    desc: "Several ignition coils depending on the number of cylinders are in a single, compact module.",
    offset: false,
  },
  {
    title: "Block coils",
    desc: "The block coil combines multiple ignition coils that supply the individual spark plugs with the necessary high-voltage pulse via the ignition cables.",
    offset: true,
  },
  {
    title: "Pencils coils",
    desc: "Single-spark pencil ignition coils are installed directly on the spark plug.",
    offset: false,
  }
];

export default function Ignition() {
  return (
    <section
      id="ignition"
      className="py-16 md:py-20 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/moto/tesla/background.png')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <Container className="relative z-10">

        {/* Top Content Area */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 xl:gap-6 mb-16 xl:mb-24">

          {/* Text Content */}
          <div className="col-span-1 xl:col-span-5 flex flex-col order-1 xl:order-1" data-aos="fade-right">
            <div className="flex gap-1.5 mb-3">
              <div className="w-2.5 h-2.5 bg-white"></div>
              <div className="w-2.5 h-2.5 bg-white"></div>
            </div>

            <Typography variant="h2" color="white" className=" mb-6">
              Ignition coil
            </Typography>

            <div className="flex flex-col gap-5 mb-8">
              <Typography variant="p" color="white" className="leading-relaxed opacity-90">
                Ignition coils are a key part of the ignition system of petrol engines. Their job is to convert the low battery voltage (12 volts) into the thousands of volts (up to 40 kV) needed to create a spark in the spark plug.
              </Typography>

              <Typography variant="p" color="white" className="leading-relaxed opacity-90">
                In simple terms, ignition coils consist of three parts: a primary circuit consisting of several hundred turns of primary winding, a secondary circuit with many thousands of additional turns, and a core. But that's far from the whole story.
              </Typography>

              <Typography variant="p" color="white" className="leading-relaxed opacity-90">
                Backed by over 50 years of experience, TESLA ignition coils are designed to meet or exceed OE specifications and provide high durability and maximum service life. Each ignition coil undergoes rigorous product testing and validation.
              </Typography>
            </div>

            <div className="mt-2">
              <Button text="Discover More" variant="secondary" showIcon={true} />
            </div>
          </div>

          {/* Video Player */}
          <div className="col-span-1 xl:col-span-7 order-2 xl:order-2" data-aos="fade-left" data-aos-delay="200">
            <div className="w-full aspect-video rounded overflow-hidden relative shadow-2xl bg-black/50 border border-white/10">
              <DynamicVideoPlayer type="360" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Timeline Area (Desktop) */}
        <div className="w-full relative mt-10 hidden xl:block" data-aos="fade-up" data-aos-delay="300">
          {/* Main Horizontal Line */}
          <div className="w-full h-[15px] bg-white absolute top-0 left-0"></div>

          {/* Timeline Grid */}
          <div className="w-full relative h-[520px]">
            {timelineData.map((item, index) => {
              let posStyle: React.CSSProperties = {};
              if (index === 0) posStyle = { left: '0', transform: 'none' };
              else if (index === 1) posStyle = { left: '32%', transform: 'translateX(-50%)' };
              else if (index === 2) posStyle = { left: '50%', transform: 'translateX(-50%)' };
              else if (index === 3) posStyle = { left: '68%', transform: 'translateX(-50%)' };
              else if (index === 4) posStyle = { right: '0', transform: 'none' };

              return (
                <div key={index} className="absolute flex flex-col items-center h-full w-[28%]" style={posStyle}>
                  {/* Dot on main line */}
                  <div className="w-[12px] h-[12px] bg-primary rounded-full absolute top-[7px] left-1/2 -translate-x-1/2 -translate-y-1/2 border-[3px] z-20"></div>

                  {/* Vertical connecting line */}
                  <div
                    className="w-[1px] bg-white/90 absolute left-1/2 -translate-x-1/2 z-0"
                    style={{ top: '7.5px', height: item.offset ? '292.5px' : '52.5px' }}
                  ></div>

                  {/* Card */}
                  <div className={`bg-white p-5 xl:p-6 w-full h-auto text-center relative z-10 shadow-lg flex flex-col justify-center h-[180px] ${item.offset ? 'mt-[300px]' : 'mt-[60px]'}`}>
                    <Typography variant="h4" color="dark" className="font-[400] mb-0">
                      {item.title}
                    </Typography>
                    <div className="w-[70%] mx-auto h-[2px] rounded border-gray-100 bg-white shadow-[0px_6px_25px_rgba(0,2,4,6)] mb-4"></div>
                    <Typography variant="p" color="dark" className="leading-relaxed text-gray-600">
                      {item.desc}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Area (Mobile/Tablet Fallback) */}
        <div className="w-full relative mt-10 xl:hidden grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="300">
          {timelineData.map((item, index) => (
            <div key={index} className="bg-white p-6 w-full text-center shadow-lg border-t-4 border-[#002060] flex flex-col justify-center h-auto min-h-[160px]">
              <Typography variant="h4" color="dark" className="mb-3">
                {item.title}
              </Typography>
              <div className="w-full h-[1px] bg-white mb-3" style={{ boxShadow: '1px 3px 8px 1px #0000003D' }}></div>
              <Typography variant="p" color="dark" className="leading-relaxed text-gray-600 text-sm">
                {item.desc}
              </Typography>
            </div>
          ))}
        </div>

      </Container>
    </section >
  );
}
