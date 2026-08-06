"use client";

import React from "react";
import Typography from "./Typography";

const features = [
  {
    title: "Research",
    desc: "ELDON'S is a science and technology-based organization. Investing on these sectors is an integral part of its philosophy...",
    icon: "/moto/eldons/icon1.jpg",
  },
  {
    title: "Design",
    desc: "Creating a product is a very demanding procedure. Endless hours of hard work and testing are required. ELDON'S has developed...",
    icon: "/moto/eldons/icon2.jpg",
  },
  {
    title: "Reliability",
    desc: "For nearly half a century, ELDON'S is at the forefront in creating high quality lubricating fluids and greases - the ingredients...",
    icon: "/moto/eldons/icon3.jpg",
  },
  {
    title: "Performance",
    desc: "Our products are designed to guarantee high performance and reliability, aiming towards proper function and longevity for...",
    icon: "/moto/eldons/icon4.jpg",
  }
];

export default function AboutUs() {
  return (
    <section className="w-full py-16 min-[3800px]:py-24 bg-white" id="about-us">
      <div className="custom-container">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12  mx-auto" data-aos="fade-up">
          <Typography variant="h2" color="dark" className="mb-4">
            ELDON'S at a glance
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed max-w-[70%]">
            ELDON'S was established in 1975 and today is one of the largest production and trading companies in Greece, offering a full range of synthetic and conventional lubricants, food grade lubricants, greases and special products (such as emulsions, special motor liquids, etc.). Since its foundation, the company is in a constant state of expansion. For almost 5 decades, ELDON'S has consistently provided high technical expertise, know-how and robust specialization in the lubrication industry.
          </Typography>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" data-aos="fade-up" data-aos-delay="100">
          <div className="rounded-lg overflow-hidden shadow-sm aspect-[16/9] w-full">
            <img
              src="/moto/eldons/section21.png"
              alt="Ecovadis Sustainability Rating"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm aspect-[16/9] w-full">
            <img
              src="/moto/eldons/section22.png"
              alt="Eldon's Rally Car"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="200">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-lg p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-lg transition-shadow duration-300 flex flex-col relative"
            >
              <div className="relative items-start ">
                <Typography variant="h3" color="dark" className="mt-2">
                  {feature.title}
                </Typography>
                <Typography variant="p" color="muted" className="max-w-[75%] mt-2 leading-relaxed">
                  {feature.desc}
                </Typography>

              </div>
              <img src={feature.icon} alt={feature.title} className="absolute top-5 right-5 w-16 h-16 min-[3800px]:w-25 min-[3800px]:h-25 object-contain ml-2 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
