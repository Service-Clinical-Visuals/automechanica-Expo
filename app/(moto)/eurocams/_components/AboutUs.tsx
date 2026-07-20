"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { CheckCircle } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
export default function AboutUs() {
  const charities = [
    { name: "The Royal Marines Charity", src: "/moto/eurocams/logo1.png" },
    { name: "WaterAid", src: "/moto/eurocams/logo2.png" },
    { name: "Children's Hospice South West", src: "/moto/eurocams/logo3.png" },
    { name: "True Heroes Racing", src: "/moto/eurocams/logo4.png" },
  ];

  return (
    <section className="py-16 md:py-20 bg-white text-dark">
      <div className="custom-container">
        
        {/* Main Content Area */}
        <div className="flex flex-col xl:flex-row gap-12  items-start justify-between">
          
          {/* Left: Video Player */}
          <div className="w-full xl:w-7/12 order-2 xl:order-1" data-aos="fade-right">
            <div className="w-full aspect-video rounded-sm overflow-hidden bg-gray-100 relative shadow-md">
              <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full xl:w-5/12 flex flex-col gap-6 order-1 xl:order-2" data-aos="fade-left">
            <Typography variant="h1" color="dark" className="mb-2">
              How Eurocams began
            </Typography>

            <div className="flex flex-col gap-4 text-gray-700">
              <Typography variant="p" color="muted" className="text-sm md:text-base leading-relaxed">
                In 1999, Frank Masarik had an ambition: to bring a small carefully-selected range of OE quality engine parts into the UK aftermarket. Eurocams was devised to do just that, set up from the cramped surroundings of a small shed in his back garden in Weston-super-Mare, Somerset, England.
              </Typography>

              <Typography variant="p" color="muted" className="text-sm md:text-base leading-relaxed">
                With over 50 years of experience in automotive engineering and a long-established reputation for quality and reliability, however, it wasn't long before he was approached by O.E. manufacturers and European aftermarket wholesale distributors interested in expanding his range.
              </Typography>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-300 my-1"></div>

            {/* Bulleted List */}
            <ul className="flex flex-col gap-4 mb-2">
              <li className="flex items-start gap-3">
                <CheckCircle className="fill-primary text-white w-5 h-5 flex-shrink-0 mt-0.5" />
                <Typography variant="p" color="muted" className="">
                  <strong className="text-black" >Founded with Strong Vision</strong> – Growing from a small family business into a global brand.
                </Typography>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="fill-primary text-white w-5 h-5 flex-shrink-0 mt-0.5" />
                <Typography variant="p" color="muted" className="">
                  <strong className="text-black">Customer-Focused Excellence</strong> – Dedicated to delivering high-quality products and dependable service.
                </Typography>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="fill-primary text-white w-5 h-5 flex-shrink-0 mt-0.5" />
                <Typography variant="p" color="muted" className="">
                  <strong className="text-black">2,500+ Product Range</strong> – Extensive portfolio of camshafts and valvetrain components.
                </Typography>
              </li>
            </ul>

            <div className="mt-1">
              <Button text="Learn More About Us" variant="primary" showIcon={true} />
            </div>
          </div>

        </div>

        {/* Charities Section */}
        <div className="mt-10 md:mt-12" data-aos="fade-up">
          {/* Divider */}
          <div className="w-full h-px bg-gray-300 mb-5"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            
            {/* Charity Logos - Left */}
            <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-6">
              <div className="bg-white border border-gray-100 shadow-sm p-5 flex items-center justify-center">
                <img src={charities[0].src} alt={charities[0].name} className="max-h-full w-auto object-contain" />
              </div>
              <div className="bg-white border border-gray-100 shadow-sm p-5 flex items-center justify-center">
                <img src={charities[1].src} alt={charities[1].name} className="max-h-full w-auto object-contain" />
              </div>
            </div>
            
            {/* Center Title */}
            <div className="col-span-1 flex items-center justify-center text-center">
              <Typography variant="h1" className="font-oswald font-bold text-gray-800 uppercase tracking-wide">
                Charities We<br />Support
              </Typography>
            </div>
            
            {/* Charity Logos - Right */}
            <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-6">
              <div className="bg-white border border-gray-100 shadow-sm p-5 flex items-center justify-center">
                <img src={charities[2].src} alt={charities[2].name} className="max-h-full w-auto object-contain" />
              </div>
              <div className="bg-white border border-gray-100 shadow-sm p-5 flex items-center justify-center">
                <img src={charities[3].src} alt={charities[3].name} className="max-h-full w-auto object-contain" />
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
}
