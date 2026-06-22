"use client";

import React from "react";
import Container from "./Container";
import Typography from "./Typography";
import { Search } from "lucide-react";
import Button from "./Button";

const LubricantSection = () => {
  return (
    <Container>
      <section className="py-12  md:py-20 bg-white" id="lubricants">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Oil Advisor Card */}
          <div className="bg-primary rounded-lg overflow-hidden flex flex-col md:flex-row relative">
            <div className="p-8 md:p-12 z-10 w-full md:w-3/5 flex flex-col justify-center order-2 md:order-1">
              <Typography variant="h4" className="font-goldman text-white mb-6 text-3xl md:text-4xl">
                Oil Advisor
              </Typography>
              <Typography variant="body" color="white" className="font-albert mb-6 text-sm md:text-base opacity-90">
                Oil advice for your vehicle or machinery.
              </Typography>

              <div className="flex w-full mb-6 max-w-sm h-[48px]">
                <div className="relative flex-grow h-full">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Search size={16} />
                  </span>
                  <input
                    type="text"
                    placeholder="Make, Model and Type"
                    className="w-full h-full py-0 pl-10 pr-3 font-albert text-sm text-dark bg-white rounded-l focus:outline-none focus:ring-1 focus:ring-secondary"
                  />
                </div>
                <Button text="Search" className="px-6 py-0 h-full font-albert rounded-l-none shrink-0" />
              </div>

              <a href="#" className="text-white font-albert underline text-md flex items-center hover:text-secondary transition-colors group">
                Advanced Search <span className="ml-1 group-hover:translate-x-1 transition-transform"> </span>
              </a>
            </div>

            <div className="w-full md:w-2/5 p-8 pb-0 md:p-0 flex items-center justify-center order-1 md:order-2">
              <img
                src="/moto/eurol/section2.png"
                alt="Oil bottle"
                className="max-h-48 md:max-h-[300px] hover:scale-105 transition-all object-contain object-center"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
          </div>

          {/* Specialty Lubricants Card */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row">
            <div className="p-8 md:p-12 z-10 w-full md:w-3/5 flex flex-col justify-center items-start order-2 md:order-1">
              <Typography variant="h4" className="font-goldman text-primary mb-6 text-3xl md:text-4xl">
                Specialty Lubricants
              </Typography>
              <Typography variant="body" color="dark" className="font-albert mb-8 text-sm md:text-base text-gray-600">
                Lubricants for heavy-duty vehicles and machinery.
              </Typography>

              <Button text="Read More" className="font-albert" />
            </div>

            <div className="w-full md:w-2/5 p-8 pb-0 md:p-0 flex items-center justify-center order-1 md:order-2 bg-gray-50/50">
              <img
                src="/moto/eurol/section21.png"
                alt="Specialty Lubricant Tub"
                className="max-h-48 md:max-h-full hover:scale-105 transition-all   object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default LubricantSection;
