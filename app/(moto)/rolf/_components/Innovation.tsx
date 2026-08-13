"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function Innovation() {
  const listItems = [
    "Expert Foundation – Established by petrochemical specialists focused on lubricant formulations.",
    "Expert Foundation – Established by petrochemical specialists focused on lubricant formulations.",
    "Expert Foundation – Established by petrochemical specialists focused on lubricant formulations.",
    "Expert Foundation – Established by petrochemical specialists focused on lubricant formulations."
  ];

  const CheckIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mt-1">
      <circle cx="12" cy="12" r="12" fill="#FFCD00"/>
      <path d="M7.5 12.5L10.5 15.5L16.5 9.5" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <section className="w-full py-16  bg-[#171717]">
      <div className="custom-container flex flex-col gap-8 ">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center mx-auto  gap-6" data-aos="fade-up">
          <Typography variant="h2" color="white" className="leading-tight">
            Innovation and Expertise
          </Typography>
          <Typography variant="p" color="white" className="leading-relaxed xl:max-w-[80%]">
            ROLF Lubricants GmbH leverages its existing research and development potential and extensive experience in the development of lubricants to create new formulations of oils and coolants. Every new product goes through several test cycles: laboratory, bench (ICE, gearbox) and field trials (in real-life operating conditions).
          </Typography>
          <hr className="w-full h-[1px] bg-white/20 border-none " data-aos="fade-up" />
        </div>

        {/* Divider */}
        

        {/* Content Block */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8  items-center">
          {/* Left: Image */}
          <div className="xl:col-span-8 w-full rounded-[1rem] overflow-hidden" data-aos="fade-right">
            <img src="/moto/rolf/section44.png" alt="Innovation and Expertise" className="w-full h-auto object-cover" />
          </div>

          {/* Right: Text and List */}
          <div className="flex flex-col gap-8 xl:col-span-4" data-aos="fade-left">
            <Typography variant="p" color="white" className="leading-relaxed">
              Since its establishment, ROLF Lubricants GmbH has continuously expanded its expertise, production capabilities, and global presence. Through innovation, strategic partnerships, and advanced lubricant technologies, we have grown into a trusted supplier of premium lubricants serving customers across international markets.
            </Typography>

            <div className="flex flex-col gap-5">
              {listItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckIcon />
                  <Typography variant="p" color="white" className="leading-relaxed text-sm xl:text-base">
                    {item}
                  </Typography>
                </div>
              ))}
            </div>

            <div className="mt-2">
              <Button text="Explore Innovation" href="#" showIcon={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
