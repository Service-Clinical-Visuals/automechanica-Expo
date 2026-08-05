"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "CHALLOILS",
    video: "/moto/gl-oil/v1.mp4",
  },
  {
    id: 2,
    name: "Lublan",
    video: "/moto/gl-oil/v2.mp4",
  },
  {
    id: 3,
    name: "Rennoil",
    video: "/moto/gl-oil/v3.mp4",
  },
];

const Explore = () => {
  return (
    <section id="explore" className="w-full py-16 overflow-hidden">
      <div className="custom-container flex flex-col gap-10 xl:gap-14 items-center">

        {/* Title & Button */}
        <div className="relative z-10 flex flex-col items-center gap-6 text-center max-w-[60%] min-[2500px]:max-w-[70%] min-[3800px]:max-w-[95%] mx-auto">
          <Typography variant="h2" color="white" className="font-bold leading-tight drop-shadow-lg">
            Explore Our Complete Range of<br className="hidden sm:block" /> Premium Engine Oils
          </Typography>
          <Button text="View All Products" href="#explore" />
        </div>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16 lg:-mt-20 min-[2500px]:-mt-32 min-[3800px]:-mt-48 relative z-0">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative w-full aspect-square md:aspect-[4/3] lg:aspect-square min-[2500px]:aspect-square rounded-2xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-sky-500 transition-all duration-500 shadow-xl bg-[#1c1c1c] ${index === 1 ? 'lg:mt-32 min-[2500px]:mt-48 min-[3800px]:mt-64' : ''
                } ${index === 2 ? 'md:col-span-2 md:w-[calc(50%-12px)] md:justify-self-center lg:col-span-1 lg:w-full lg:justify-self-auto' : ''
                }`}
            >
              {/* Video Background */}
              <video
                src={product.video}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Content Container (Name and Arrow) */}
              <div className="absolute bottom-6 left-6 right-6 min-[2500px]:bottom-10 min-[2500px]:left-10 min-[2500px]:right-10 min-[3800px]:bottom-14 min-[3800px]:left-14 min-[3800px]:right-14 flex justify-between items-end transition-transform duration-500 group-hover:-translate-y-4 min-[2500px]:group-hover:-translate-y-6">

                <Typography variant="h3" color="white" className="font-bold tracking-wide">
                  {product.name}
                </Typography>

                <div className="w-12 h-12 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-20 min-[3800px]:h-20 bg-primary hover:bg-primary-hover flex justify-center items-center rounded text-[var(--color-secondary)] transition-colors duration-300 shadow-md">
                  <ArrowUpRight className="w-6 h-6 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10" />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
