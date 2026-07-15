"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 bg-white overflow-hidden">
      <div className="custom-container flex flex-col 2xl:grid 2xl:grid-cols-12 gap-8 items-start">
        
        {/* Content (Heading + Text + Button) */}
        {/* Mobile: Order 1, Desktop: Col 8-12, Row 1-2 */}
        <div className="flex flex-col mt-7 gap-6 order-1 2xl:col-start-8 2xl:col-span-5 2xl:row-start-1 2xl:row-span-2 w-full" data-aos="fade-left">
          {/* Heading Group */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <Typography variant="h4" color="secondary" className="font-bold uppercase tracking-wider text-sm">
                ABOUT US
              </Typography>
            </div>
            <Typography variant="h2" color="dark" className="font-bold leading-tight">
              Family-Run Excellence in Automotive Technology
            </Typography>
          </div>

          {/* Body */}
          <div className="flex flex-col gap-4">
            <Typography variant="p" color="muted" className="leading-relaxed">
              AMPRO Technologie GmbH is a family-run company and one of the fastest-growing wholesalers of automotive parts in Germany and worldwide. We specialize in high-quality NOx sensors, dosing modules, and AdBlue® pumps, delivering reliable solutions that support cleaner emissions and improved vehicle performance.
            </Typography>
            
            <Typography variant="p" color="muted" className="leading-relaxed">
              With a strong focus on quality, innovation, and customer satisfaction, we combine years of industry experience with advanced engineering to meet the evolving needs of the global automotive market. Our products are trusted by manufacturers and distributors for their precision, durability, and performance. Our dedicated research and development efforts enable us to continuously improve our products, ensuring they meet the highest standards of precision, durability, and efficiency. Trusted by automotive manufacturers, distributors, and industrial partners worldwide, our NOx sensors, dosing modules, and AdBlue® pumps are designed to support cleaner emissions, enhance system performance, and deliver long-lasting reliability in demanding applications.
            </Typography>
            
            <Typography variant="p" color="muted" className="leading-relaxed">
              Driven by innovation and precision engineering, we create reliable automotive solutions that improve vehicle performance and efficiency. Trusted by customers worldwide, we are committed to delivering quality through continuous innovation and development. By combining advanced technology, rigorous quality standards, and industry expertise. Our focus on customer satisfaction and long-term reliability enables us to build lasting partnerships.
            </Typography>
          </div>
            <div className="order-2 2xl:col-start-2 2xl:row-start-2 w-full mt-1" data-aos="fade-left" data-aos-delay="100">
           <Button text="MORE ABOUT OUR COMPANY" href="#about" />
        </div>
        </div>

        {/* Button */}
        {/* Mobile: Order 2, Desktop: Col 2, Row 2 */}
      

        {/* Image */}
        {/* Mobile: Order 3, Desktop: Col 1-7, Row 1 */}
        <div className="w-full order-3 2xl:col-start-1 2xl:col-span-7 2xl:row-start-1 h-full" data-aos="fade-right">
          <img
            src="/moto/ampro/section2.png"
            alt="Sensors"
            className="w-full rounded-2xl object-cover h-full min-h-[300px] shadow-lg"
          />
        </div>

        {/* Cards */}
        {/* Mobile: Order 4, Desktop: Col 1-7, Row 2 */}
        <div className="w-full flex flex-col sm:flex-row gap-6 order-4 2xl:col-start-1 2xl:col-span-7 2xl:row-start-2 mt-2" data-aos="fade-right" data-aos-delay="100">
          
          {/* Card 1 */}
          <div className="flex items-center gap-4 bg-white border border-gray-100 shadow-sm p-4 sm:p-6 rounded-xl flex-1">
             <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center shrink-0">
               {/* Icon placeholder using simple SVG */}
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
             </div>
             <div>
                <Typography variant="h2" color="dark" className="font-bold leading-tight">
                  300K+
                </Typography>
                <Typography variant="p" className="text-black">
                  NOx Sensor Models
                </Typography>
             </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-4 bg-white border border-gray-100 shadow-sm p-4 sm:p-6 rounded-xl flex-1">
             <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center shrink-0">
               {/* Icon placeholder using simple SVG */}
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 7l10 5 10-5"></path></svg>
             </div>
             <div>
                <Typography variant="h2" color="dark" className="font-bold leading-tight">
                  20K+
                </Typography>
                <Typography variant="p" className="text-black">
                  Units in Stock
                </Typography>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;
