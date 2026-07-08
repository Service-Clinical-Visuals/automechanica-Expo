import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import Button from "./Button";

export default function Solutions() {
  const solutions = [
    {
      image: "/moto/airstal/solution1.png",
      title: "Automotive AC Compressors",
    },
    {
      image: "/moto/airstal/solution2.png",
      title: "AC Compressor Components",
    },
    {
      image: "/moto/airstal/solution3.png",
      title: "Specialized AC Tools",
    },
    {
      image: "/moto/airstal/solution4.png",
      title: "Chemicals & Oils",
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 bg-white" data-aos="fade-up">
      <div className="custom-container flex flex-col items-center">
        <Typography variant="h1" color="dark" weight="bold" className="text-center font-primary mb-6">
          Complete Air Conditioning Solutions
        </Typography>

        <div className="w-[50%]  h-px bg-gray-400 mb-6"></div>

        <Typography variant="p" color="muted" className="text-center max-w-[80%] leading-relaxed mb-12">
          Airstal provides an extensive selection of automotive air conditioning solutions tailored for optimal performance and reliability. Our offerings include high-quality compressors, essential replacement components, specialized oils, advanced chemicals, and eco-friendly refrigerants. Each product is crafted to meet rigorous quality benchmarks, guaranteeing consistent performance across various vehicle types. Whether you're looking for routine maintenance, urgent repairs, or complete system upgrades,
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-8">
          {solutions.map((solution, index) => (
            <div key={index} className="flex flex-col border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden bg-white group" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="w-full aspect-[4/3] sm:aspect-video md:aspect-[4/3] overflow-hidden p-4">
                <img src={solution.image} alt={solution.title} className="w-full h-full object-cover border border-gray-100 shadow-sm rounded-sm group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="w-full p-2 mb-5 text-center ">
                <Typography variant="h5" color="dark" weight="bold" className="font-primary">
                  {solution.title}
                </Typography>
              </div>
            </div>
          ))}
        </div>

        <Button text="Explore Solutions" href="#" />
      </div>
    </section>
  );
}
