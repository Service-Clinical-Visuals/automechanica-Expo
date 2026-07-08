import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import Button from "./Button";

export default function Solutions() {
  const solutions = [
    {
      image: "/moto/airstal/solution1.png",
      title: "Compressors",
    },
    {
      image: "/moto/airstal/solution2.png",
      title: "Parts",
    },
    {
      image: "/moto/airstal/solution3.png",
      title: "Chemicals and oils",
    },
    {
      image: "/moto/airstal/solution4.png",
      title: "Refrigerants",
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 bg-white" data-aos="fade-up">
      <div className="custom-container flex flex-col items-center">
        <Typography variant="h1" color="dark" weight="bold" className="text-center font-primary mb-6">
          Complete Air Conditioning Solutions
        </Typography>

        <div className="w-[50%] h-px bg-gray-400 mb-6"></div>

        <Typography variant="p" color="muted" className="text-center lg:max-w-[80%] leading-relaxed mb-12">
          Airstal offers a comprehensive range of automotive air conditioning products designed for performance, durability, and efficiency. From premium compressors and replacement parts to oils, chemicals, and refrigerants, every product meets strict quality standards, ensuring dependable operation across a wide range of vehicles. Whether for maintenance, repair, or system replacement, Airstal delivers trusted solutions that keep air conditioning systems performing at their best.
        </Typography>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 w-full mb-12">
          {solutions.map((solution, index) => (
            <div key={index} className="flex flex-col border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white group" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="w-full aspect-square flex items-center justify-center p-3 sm:p-6 lg:p-8">
                <img src={solution.image} alt={solution.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="w-full p-2 sm:p-4 pt-0 mb-2 sm:mb-4 text-center">
                <Typography variant="h6" color="dark" weight="bold" className="font-primary text-[13px] sm:text-[15px] lg:text-[16px]">
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
