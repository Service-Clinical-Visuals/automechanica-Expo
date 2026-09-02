"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const Events = () => {
  const events = [
    {
      day: "04",
      month: "Sept",
      title: "WMSE 2026",
      location: "Workshop exhibition Dortmund",
      dateRange: "04 - 06 September 2026",
    },
    {
      day: "08",
      month: "Sept",
      title: "Automechanika",
      location: "Frankfurt Trade Fair",
      dateRange: "08 - 12 September 2026",
    },
    {
      day: "10",
      month: "Oct",
      title: "Neimcke",
      location: "Traunstein House Fair",
      dateRange: "10 - 11 October 2026",
    },
  ];

  return (
    <section id="events" className="w-full py-16 min-[2100px]:py-24 min-[3800px]:py-32 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-12 min-[2100px]:gap-16 min-[3800px]:gap-24">

        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 min-[3800px]:gap-10">
          <div className="flex flex-col gap-4 lg:max-w-[65%]" data-aos="fade-right">
            <Typography variant="h2" color="dark" className="font-bold leading-tight">
              Upcoming Events & Trade Exhibitions
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed">
              Meet us at leading automotive trade fairs and exhibitions to discover our latest wheel alignment solutions, live product demonstrations, and workshop innovations.
            </Typography>
          </div>
          <div data-aos="fade-left" className="shrink-0 mt-4 lg:mt-0">
            <Button text="View All" href="#events" />
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-[2100px]:gap-8 min-[3800px]:gap-12">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden group hover:shadow-md transition-shadow h-full"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >

              {/* Left Date Block */}
              <div className="w-[130px] min-[2100px]:w-[130px] min-[3800px]:w-[160px] bg-primary rounded-xl flex flex-col items-center justify-center py-6 px-2 shrink-0">
                <Typography variant="h1" color="white" className="text-3xl min-[2100px]:text-4xl min-[3800px]:text-5xl font-bold font-oswald tracking-wide leading-none mb-1">
                  {event.day}
                </Typography>
                <Typography variant="h2" color="white" className="text-lg min-[2100px]:text-xl min-[3800px]:text-3xl font-semibold font-oswald tracking-wider">
                  {event.month}
                </Typography>
              </div>

              {/* Right Content Block */}
              <div className="flex flex-col justify-center flex-1 p-6 min-[2100px]:p-8 min-[3800px]:p-12 gap-2">
                <Typography variant="h2" color="dark" className="font-bold">
                  {event.title}
                </Typography>
                <Typography variant="p" color="muted" className="text-sm min-[3800px]:text-lg">
                  {event.location}
                </Typography>
                <Typography variant="p" color="muted" className="text-sm min-[3800px]:text-lg mt-2 min-[3800px]:mt-4">
                  {event.dateRange}
                </Typography>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Events;
