"use client";

import React from "react";
import Typography from "./Typography";
import Link from "next/link";

export default function Footer() {
  const links = [
    {
      title: "Arı Petrol",
      items: ["Corporate", "Products", "Laboratory", "Gallery", "Contact"],
    },
    {
      title: "Motor Oils",
      items: ["Gasoline Engine Oils", "Diesel Engine Oils", "Motorcycle Oils"],
    },
    {
      title: "Industrial Oils",
      items: ["Heavy Industry Gear Oils", "Aromatic Process Oils", "Erosion Oil", "General Purpose Oils", "Grease Oils"],
    },
    {
      title: "Greases & Special Products",
      items: ["AD Blue", "Antifreeze", "Gressler", "Hydraulic Brake Oils"],
    },
    {
      title: "Gear ve Differential",
      items: ["Gearbox Oils", "Transmission Oils"],
    },
  ];

  return (
    <footer className="w-full relative pt-16 pb-16 z-0">
      {/* Half Blue / Half White Background */}
      <div className="absolute top-0 left-0 w-full h-[55%] bg-primary -z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-[45%] bg-white -z-10"></div>

      <div className="custom-container">
        <div className="bg-white shadow-[0_4px_30px_rgba(0,0,0,0.08)] w-full flex flex-col">
          {/* Main Footer Content */}
          <div className="px-8 py-12 md:px-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-x-8 gap-y-12">

            {/* Logo Column */}
            <div className="flex flex-col gap-6 xl:col-span-2 pr-4" data-aos="fade-up">
              <img src="/moto/ari-oil/logo.png" alt="ARI OIL" className="w-44" />
              <Typography variant="p" className=" font-oswald !leading-loose  text-[#484848]">
                Since 1974, Arı Petroleum Chemical Company is producing and selling all types of lubricants and industrial oils with its experienced & qualified team.
              </Typography>
            </div>

            {/* Links Columns */}
            {links.map((column, idx) => (
              <div key={idx} className="flex flex-col gap-6" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                <Typography variant="h6" color="primary" weight="extrabold" className="font-exo2  tracking-wide">
                  {column.title}
                </Typography>
                <span>

                  <ul className="flex flex-col gap-3.5">
                    {column.items.map((item, i) => (
                      <li key={i}>
                        <Link href="#" className="font-oswald text-[#484848]  hover:text-secondary transition-colors ">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </span>
              </div>
            ))}

          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-300 py-6 text-center">
            <Typography variant="p" className=" font-oswald text-[#484848]">
              © Copyright 2026 - ARI OIL
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
