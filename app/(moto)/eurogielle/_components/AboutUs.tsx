"use client";

import React from "react";
import { Check } from "lucide-react";
import Typography from "./Typography";

const AboutUs = () => {
  const values = [
    {
      title: "Care for others",
      desc: "We put people at the center of everything we do. We design filters to protect the most precious asset: the air we breathe inside the vehicle cabin.",
    },
    {
      title: "Quality",
      desc: "Quality is the cornerstone of our production. Every Eurogielle filter represents excellence, crafted with selected materials and rigorous standards.",
    },
    {
      title: "Innovation",
      desc: "We are a company constantly dedicated to research and innovation. We develop and test technologies in-house to create cutting-edge filtration solutions.",
    },
    {
      title: "Sustainability",
      desc: "Eurogielle is committed to sustainability through eco-friendly manufacturing and recyclable materials, creating a cleaner future.",
    },
  ];

  return (
    <section id="about" className="w-full py-16 lg:py-18 bg-white overflow-hidden">
      <div className="custom-container flex flex-col">

        {/* Main Content Area */}
        <div className="flex flex-col xl:grid xl:grid-cols-12 gap-6 xl:gap-8 items-center">

          {/* Left: Image (Order 3 on mobile, Order 1 on Desktop) */}
          <div className="w-full order-3 xl:col-span-7 xl:order-1" data-aos="fade-right">
            <img
              src="/moto/eurogielle/section22.png"
              alt="Eurogielle Headquarters"
              className="w-full rounded-[24px] lg:rounded-[32px]  object-cover "
            />
          </div>

          {/* Right: Content (Order 1 on mobile, Order 2 on Desktop) */}
          <div className="w-full xl:col-span-5 flex flex-col gap-6 order-1 xl:order-2" data-aos="fade-left">

            {/* Heading */}
            <div className="order-1 xl:order-none">
              <Typography variant="h2" color="primary" className="font-bold leading-tight">
                A Journey Through our Milestones Since 1995
              </Typography>
            </div>

            {/* Body */}
            <div className="order-2 xl:order-none flex flex-col gap-6">
              <Typography variant="p" className="leading-relaxed text-gray-700">
                Founded in 1995 in Cavarzere (VE), Eurogielle is a leading company in the design and production of cabin filters, proudly Made in Italy. Located in Adria, in the province of Rovigo, Eurogielle has grown steadily thanks to continuous innovation and a commitment to excellence. Today, the company serves customers worldwide with advanced filtration solutions for cabins and engine oil, covering various sectors from automotive to industrial.
              </Typography>

              <ul className="flex flex-col gap-5 mt-2">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <Typography variant="p" className="text-gray-700 leading-snug">
                    Over 30 years of expertise in designing and manufacturing advanced filtration solutions.
                  </Typography>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <Typography variant="p" className="text-gray-700 leading-snug">
                    State-of-the-art manufacturing processes focused on innovation and continuous improvement.
                  </Typography>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <Typography variant="p" className="text-gray-700 leading-snug">
                    Engineered to deliver superior filtration efficiency, engine protection, and passenger comfort.
                  </Typography>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Values Section */}
        <div className="w-full flex flex-col items-center mt-2 lg:mt-5" data-aos="fade-up">
          <Typography variant="h2" color="primary" className="font-bold mb-10 text-center">
            The Values That Drive Eurogielle
          </Typography>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8 w-full">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col gap-4 rounded-xl"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <Typography variant="h4" color="primary" className="font-bold tracking-tight leading-tight">
                  {val.title}
                </Typography>
                <Typography variant="p" className="text-gray-600 leading-relaxed lg:text-base">
                  {val.desc}
                </Typography>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
