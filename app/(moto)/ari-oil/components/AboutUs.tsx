"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { ArrowUpRight } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="py-20 bg-white">
      <div className="custom-container">
        {/* Top Section: Text and Image */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16">
          {/* Text Content (Left on Desktop, Top on Mobile) */}
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-6" data-aos="fade-right">
            <Typography variant="h2" color="primary" weight="extrabold" className="mb-2 font-exo2 tracking-tight">
              About Us
            </Typography>

            <div className="flex flex-col gap-4 text-gray-700">
              <Typography variant="p">
                Since 1974, Arı Petroleum Chemical Company is producing and selling all types of lubricants and industrial oils with its experienced & qualified team. Also exporting engine oils over the world. Arı Oil products meet with industry's needs with its high performance levels.
              </Typography>
              <Typography variant="p">
                Located in Tuzla KOSB (industrial area), with our experience we produce and sell to the direct customer. With high quality and various products, we took as principle to always develop ourselves and to have satisfied customers. Arı Oil has ISO 9001-2008 quality system certificate.
              </Typography>
              <Typography variant="p">
                Arı Oil's main goal is to work effective, be trustworthy and produce economic products meet the expectations of customers. In our company, we work as a team of chemical engineers who are ready to give technical support.
              </Typography>
              <Typography variant="p">
                We have reached 44 countries in 6 years with our competitive prices, and our experience. We aim to reach more countries and expand our sale network as we participate to fairs in Turkey and all around the world.
              </Typography>
            </div>

            <div className="mt-2">
              <Button text="Know More" />
            </div>
          </div>

          {/* Right Image Content */}
          <div className="w-full lg:w-1/2 relative z-0" data-aos="fade-left">

            {/* Geometric Background Shape: Right-angled Triangle */}
            <div
              className="absolute top-6 left-6 md:top-10 md:left-10 w-full h-full bg-primary -z-10"
              style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
            ></div>

            {/* Image */}
            <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden shadow-2xl z-10 bg-white">
              <img
                src="/moto/ari-oil/section2.jpg"
                alt="ARI OIL Truck and Products"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section: Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="200">
          {/* Vision Card */}
          <div className="bg-white border border-gray-100 shadow-lg rounded-sm p-8 md:p-10 relative group hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center">
              <ArrowUpRight size={20} strokeWidth={2.5} />
            </div>
            <Typography variant="h2" color="primary" weight="bold" className="mb-4">
              Our Vision
            </Typography>
            <Typography variant="p" color="dark" className="pr-12">
              We aim to use effective methods that we use while producing is to obtain high quality products and present a qualified service and be the leader in our sector.
            </Typography>
          </div>

          {/* Mission Card */}
          <div className="bg-white border border-gray-100 shadow-lg rounded-sm p-8 md:p-10 relative group hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center">
              <ArrowUpRight size={20} strokeWidth={2.5} />
            </div>
            <Typography variant="h2" color="primary" weight="bold" className="mb-4">
              Our Mission
            </Typography>
            <Typography variant="p" color="dark" className="pr-12">
              To deliver high-quality lubricant solutions that enhance performance, protect equipment, and create lasting value for customers through innovation, reliability, and uncompromising quality.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}
