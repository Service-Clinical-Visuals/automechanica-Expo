"use client";

import React from "react";
import Link from "next/link";
import Button from "./Button";

export default function Approvals() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] xl:min-h-[700px] xl:min-h-[110vh] flex py-16 xl:py-24 overflow-hidden bg">
    

      <div className="custom-container relative z-10 px-5 xl:px-8 py-30 xl:py-50  2xl:py-70 justify-center">
        <div className="max-w-lg md:max-w-xl xl:max-w-2xl" data-aos="fade-right">
          <h2 className="section-title font-normal text-white  tracking-wide anton-font mb-6 xl:mb-8 ">
            Approvals Are A Mark Of Our Quality
          </h2>
          <p className="section-text text-[#ffffff] font-normal leading-[1.8] oswald-font mb-10 text-left">
            Thanks to our modern production facility, you always benefit from the latest developments in lubricants, all of which have official OEM approvals. We have an invaluable wealth of experience in oil production, and every stage of our manufacturing process is thoroughly tested before products are stored in our warehouse. Kroon-Oil consistently leads the market in developing modern motor and transmission oils, ensuring you always have access to the most up-to-date products.
          </p>
          
          <Button text="View Approvals" />
        </div>
      </div>

    </section>
  );
}
