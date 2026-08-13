"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function Technology() {
  const features = [
    {
      title: "Protecting The Environment",
      text: "We have a firm understanding of the potential impact our products can have on the environment. Our technological research has enabled us to pioneer high performance lubricants that are dedicated to emission reduction."
    },
    {
      title: "Global Presence",
      text: "We firmly believe that a clear understanding of our consumers is paramount if we are to provide the best solutions to meet their challenges. Our R&T centres across the globe are a physical manifestation of our commitment to..."
    },
    {
      title: "Innovative Products & Services",
      text: "Our products have a proven track record across a range of applications and environments. From engine performance to car care, our products consistently help our consumers operate at the highest level."
    },
    {
      title: "Track To Road Engineering",
      text: "Nothing is as great a testament to our products as their performance at the highest levels and in the harshest conditions. Our longstanding relationships with Formula..."
    },
    {
      title: "The People Behind The Technology",
      text: "At the forefront of our industry, our multitalented team of technical experts form the backbone of all innovative change. Working across the globe, our network is made up of over 200 scientists..."
    }
  ];

  return (
    <section className="w-full py-16 bg-secondary overflow-hidden">
      <div className="custom-container flex flex-col gap-10 min-[3800px]:gap-14">

        {/* Top Block */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 border-b border-white/20 pb-8" data-aos="fade-up">
          <div className="flex flex-col gap-4 xl:max-w-[70%] order-1">
            <Typography variant="h2" color="white" className="font-semibold">
              Technology Is At The Heart Of Our Success
            </Typography>
            <Typography variant="p" color="white" className="leading-relaxed ">
              Integral to our heritage, research and development has been instrumental in driving innovative transformation across our business. With a continued belief in collaborative partnerships, our technological commitment has helped to pioneer innovative solutions that deliver heightened performance and respond to the changing needs of our consumers.
            </Typography>
          </div>
          <div className="order-2 mt-4 xl:mt-0 shrink-0">
            <Button text="Discover Our Technology" href="#" showIcon={true} />
          </div>
        </div>

        {/* Bottom Block */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 min-[3800px]:gap-14">

          {/* Left: Image */}
          <div className="xl:col-span-7 order-2 xl:order-1 aspect-[963/670] border border-white/40 relative overflow-hidden rounded-3xl" data-aos="fade-right">
            <img src="/moto/petronas/tech.jpg" alt="Technology Innovation" className="absolute top-0 left-0 w-full h-full object-cover" />
          </div>

          {/* Right: Key Features */}
          <div className="xl:col-span-5 order-3 xl:order-2 flex flex-col justify-center gap-6" data-aos="fade-left">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <Typography variant="h3" color="white" className="font-semibold">
                  {feature.title}
                </Typography>
                <Typography variant="p" color="white" className=" leading-relaxed">
                  {feature.text}
                </Typography>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
