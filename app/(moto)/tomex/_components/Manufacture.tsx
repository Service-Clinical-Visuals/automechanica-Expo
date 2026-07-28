"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

const Manufacture = () => {
  return (
    <section className="w-full py-16 bg-white overflow-hidden">
      <div className="custom-container flex flex-col gap-10">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 w-full" data-aos="fade-up">
          <div className="flex flex-col gap-4 ">
            <Typography variant="h2" color="dark" className="font-bold uppercase leading-tight">
              TOMEX, The Manufacturer of Brake Pads And Shoes
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed xl:max-w-[70%]">
              TOMEX Brakes is one of the largest manufacturers of brake components in Europe. Every year, more than 10 million brake pads, brake shoes and related accessories for cars and vans, as well as trucks and buses, leave the company&apos;s production halls. Modern machinery, innovative technology and European standards allow us to offer a top-quality product.
            </Typography>
          </div>
          
          <div className="hidden md:flex shrink-0 w-16 h-16 rounded-full bg-[#D9D9D9] items-center justify-center hover:bg-gray-300 transition-colors cursor-pointer group">
            <ArrowUpRight className="w-8 h-8 text-black group-hover:scale-110 transition-transform" strokeWidth={2} />
          </div>
        </div>
        
        <div className="w-full h-px bg-gray-200"></div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 min-[2100px]:gap-10 items-center p-6 xl:p-1" data-aos="fade-up" data-aos-delay="100">
          
          {/* Image Side */}
          <div className="w-full xl:col-span-7 flex justify-center h-full min-h-[300px] md:min-h-[400px]">
            <img
              src="/moto/tomex/image 2.png"
              alt="TOMEX Manufacturing"
              className="w-full h-full object-cover "
            />
          </div>

          {/* Content Side */}
          <div className="flex flex-col gap-6 xl:col-span-5 w-full">
            <Typography variant="h3" color="dark" className="font-bold">
              Advanced Manufacturing Excellence
            </Typography>
            <Typography variant="p" color="muted" className="leading-relaxed">
              Equipped with modern production lines and state-of-the-art machinery, TOMEX combines engineering expertise with innovative manufacturing processes to ensure every product delivers outstanding braking performance, durability, and safety. Every component undergoes rigorous quality control and testing to meet the highest industry standards.
            </Typography>

            {/* Bullet Points */}
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 min-[2100px]:w-10 min-[2100px]:h-10 text-white fill-primary shrink-0 mt-0.5" strokeWidth={2} />
                <Typography variant="p" color="muted" className="leading-relaxed">
                  Modern Production Lines– Equipped with advanced machinery for efficient, high-precision manufacturing.
                </Typography>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 min-[2100px]:w-10 min-[2100px]:h-10 text-white fill-primary shrink-0 mt-0.5" strokeWidth={2} />
                <Typography variant="p" color="muted" className="leading-relaxed">
                  Innovative Manufacturing– Engineered using cutting-edge production technologies and processes.
                </Typography>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gray-200 mt-4"></div>

        {/* Bottom Footer Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 w-full" data-aos="fade-up" data-aos-delay="200">
          <Typography variant="p" color="muted" className="leading-relaxed max-w-[80%] text-sm md:text-base">
            TOMEX brake solutions deliver reliable braking performance, long service life, and dependable safety for a wide range of vehicle applications, trusted by automotive professionals worldwide.
          </Typography>
          <Button text="Learn More" href="#learn-more" variant="primary" showIcon={true} />
        </div>

      </div>
    </section>
  );
};

export default Manufacture;
