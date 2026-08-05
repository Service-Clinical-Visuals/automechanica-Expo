"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const News = () => {
  return (
    <section id="news" className="w-full py-16 min-[3800px]:py-25 bg-white overflow-hidden">
      <div className="custom-container flex flex-col items-center gap-10 xl:gap-14">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-4 max-w-[70%]" data-aos="fade-up">
          <Typography variant="h2" className="font-bold leading-tight text-gray-900">
            Latest News & Updates
          </Typography>
          <Typography variant="p" className="leading-relaxed text-gray-600">
            Stay informed with the latest product innovations, industry updates, and company developments from Gameroil.
          </Typography>
        </div>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">

          {/* Card 1 */}
          <div className="flex flex-col h-full bg-white border border-gray-100 shadow-lg rounded-[24px] overflow-hidden hover:shadow-xl transition-shadow p-4 xl:p-[20px]" data-aos="fade-up" data-aos-delay="100">
            <div className="w-full aspect-[777/348] flex items-center justify-center border border-gray-100 rounded-[16px] overflow-hidden shrink-0">
              <img
                src="/moto/gameroil/news1.png"
                alt="Gameroil Supports the Mérida City 10K Charity Race"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-4 pt-4 xl:pt-6 flex-grow">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                <Typography variant="h3" className="font-bold text-gray-900 flex-1 max-w-[60%]">
                  Gameroil Supports the Mérida City 10K Charity Race
                </Typography>
                <Typography variant="p" className="text-sm text-gray-500 shrink-0 sm:max-w-[40%] min-[2500px]:text-lg min-[3800px]:text-xl">
                  Gameroli marketing/ November 29, 2024
                </Typography>
              </div>
              <div className="w-full flex justify-end mt-auto">
                <Button text="Read More" href="#news" showIcon={false} />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col h-full bg-white border border-gray-100 shadow-lg rounded-[24px] overflow-hidden hover:shadow-xl transition-shadow p-4 xl:p-[20px]" data-aos="fade-up" data-aos-delay="200">
            <div className="w-full aspect-[777/348] flex items-center justify-center border border-gray-100 rounded-[16px] overflow-hidden shrink-0">
              <img
                src="/moto/gameroil/news2.png"
                alt="Expert Lubricant Manufacturer – Made in Extremadura"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 pt-4 xl:pt-6 flex-grow">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                <Typography variant="h3" className="font-bold text-gray-900 flex-1 max-w-[60%]">
                  Expert Lubricant Manufacturer – Made in Extremadura
                </Typography>
                <Typography variant="p" className="text-sm text-gray-500 shrink-0 sm:max-w-[40%] min-[2500px]:text-lg min-[3800px]:text-xl">
                  Gameroli marketing/ November 12, 2024
                </Typography>
              </div>
              <div className="w-full flex justify-end mt-auto">
                <Button text="Read More" href="#news" showIcon={false} />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default News;
