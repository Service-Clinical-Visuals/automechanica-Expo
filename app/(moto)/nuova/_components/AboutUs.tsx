"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 min-[3800px]:py-25 bg-white overflow-hidden">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-8 items-start">

        {/* Heading */}
        <div className="order-1 xl:col-start-7 xl:col-span-6 w-full flex flex-col gap-2 mt-4" data-aos="fade-left">
          <Typography variant="h2" color="dark" className="font-bold leading-tight">
            Our Journey of Innovation
          </Typography>
        </div>

        {/* Text Body */}
        <div className="order-2 xl:col-start-7 xl:col-span-6 w-full flex flex-col gap-4" data-aos="fade-left">
          <Typography variant="p" color="muted" className="leading-relaxed">
            Founded in 1964, Nuova Tecnodelta began as a mechanical workshop specializing in hydraulic brake components. Through continuous growth and innovation, the company expanded its product range to serve both OEM and aftermarket automotive customers.
          </Typography>
          <Typography variant="p" color="muted" className="leading-relaxed">
            Today, as part of the OMR Group, Nuova Tecnodelta operates a modern manufacturing facility, delivering high-quality hydraulic components, constant-velocity joints, and water pumps with advanced technology, precision, and reliability.
          </Typography>
        </div>

        {/* Button */}
        <div className="order-3 xl:col-start-7 xl:col-span-6 w-full mt-2" data-aos="fade-left" data-aos-delay="100">
          <Button text="Know More" href="#about" showIcon={false} />
        </div>

        {/* Image */}
        <div className="order-4 xl:col-start-1 xl:col-span-6 xl:row-start-1 xl:row-span-4 w-full h-full mt-4 xl:mt-0" data-aos="fade-right">
          <img
            src="/moto/nuova/section2.png"
            alt="Innovation Journey"
            className="w-full rounded-2xl object-cover h-full min-h-[300px] shadow-lg"
          />
        </div>

        {/* Cards */}
        <div className="order-5 xl:col-start-7 xl:col-span-6 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 xl:mt-4" data-aos="fade-left" data-aos-delay="200">

          {/* Card 1 */}
          <div className="flex items-center gap-4 bg-white border border-gray-100 shadow-sm p-4 sm:p-6 rounded-lg w-full max-w-[390px] min-h-[109px] min-[3800px]:max-w-[780px] min-[3800px]:min-h-[218px] mx-auto xl:mx-0">
            <div className="w-16 h-16 min-[3800px]:w-[180px] min-[3800px]:h-[180px] bg-primary text-white rounded-full flex items-center justify-center shrink-0">
              <img src="/moto/nuova/icon1.png" alt="Icon 1" className="w-8 h-8 min-[3800px]:w-[100px] min-[3800px]:h-[100px] object-contain" />
            </div>
            <div>
              <Typography variant="h3" color="dark" className="font-bold leading-tight">
                Founded in 1964
              </Typography>
              <Typography variant="p" color="muted">
                From Workshop to Excellence
              </Typography>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-4 bg-white border border-gray-100 shadow-sm p-4 sm:p-6 rounded-lg w-full max-w-[390px] min-h-[109px] min-[3800px]:max-w-[780px] min-[3800px]:min-h-[218px] mx-auto xl:mx-0">
            <div className="w-16 h-16 min-[3800px]:w-[180px] min-[3800px]:h-[180px] bg-primary text-white rounded-full flex items-center justify-center shrink-0">
              <img src="/moto/nuova/icon2.png" alt="Icon 2" className="w-8 h-8 min-[3800px]:w-[100px] min-[3800px]:h-[100px] object-contain" />
            </div>
            <div>
              <Typography variant="h3" color="dark" className="font-bold leading-tight">
                Advanced Production
              </Typography>
              <Typography variant="p" color="muted">
                Specialized CNC Expertise
              </Typography>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-4 bg-white border border-gray-100 shadow-sm p-4 sm:p-6 rounded-lg w-full max-w-[390px] min-h-[109px] min-[3800px]:max-w-[780px] min-[3800px]:min-h-[218px] mx-auto xl:mx-0">
            <div className="w-16 h-16 min-[3800px]:w-[180px] min-[3800px]:h-[180px] bg-primary text-white rounded-full flex items-center justify-center shrink-0">
              <img src="/moto/nuova/icon3.png" alt="Icon 3" className="w-8 h-8 min-[3800px]:w-[100px] min-[3800px]:h-[100px] object-contain" />
            </div>
            <div>
              <Typography variant="h3" color="dark" className="font-bold leading-tight">
                OMR Group
              </Typography>
              <Typography variant="p" color="muted">
                Joined OMR Group in 1989.
              </Typography>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center gap-4 bg-white border border-gray-100 shadow-sm p-4 sm:p-6 rounded-lg w-full max-w-[390px] min-h-[109px] min-[3800px]:max-w-[780px] min-[3800px]:min-h-[218px] mx-auto xl:mx-0">
            <div className="w-16 h-16 min-[3800px]:w-[180px] min-[3800px]:h-[180px] bg-primary text-white rounded-full flex items-center justify-center shrink-0">
              <img src="/moto/nuova/icon4.png" alt="Icon 4" className="w-8 h-8 min-[3800px]:w-[100px] min-[3800px]:h-[100px] object-contain" />
            </div>
            <div>
              <Typography variant="h3" color="dark" className="font-bold leading-tight">
                Global Coverage
              </Typography>
              <Typography variant="p" color="muted">
                95% Global Vehicle Coverage
              </Typography>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;
