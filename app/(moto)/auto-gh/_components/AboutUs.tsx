"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 min-[2100px]:py-24 min-[3800px]:py-25 bg-white overflow-hidden">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-10 min-[3800px]:gap-32 items-center">
        
        {/* Content Wrapper */}
        <div className="contents xl:flex xl:flex-col xl:col-start-1 xl:col-span-6 xl:row-start-1 xl:gap-8 min-[2100px]:xl:gap-12 min-[3800px]:xl:gap-16">
          {/* Heading Group - Mobile Order 1 */}
          <div className="order-1 flex flex-col gap-4 w-full" data-aos="fade-right">
            <Typography variant="h4" color="primary" className="font-bold tracking-wide">
              About Auto GH
            </Typography>
            <Typography variant="h2" color="dark" className="font-bold leading-snug">
              Your Trusted Automotive Parts Partner
            </Typography>
          </div>

          {/* Body and Button - Mobile Order 2 */}
          <div className="order-2 flex flex-col gap-6 w-full" data-aos="fade-right">
            <div className="flex flex-col gap-4">
              <Typography variant="p" color="dark" className="leading-relaxed">
                GH is a trusted global supplier of spare parts for passenger and light commercial vehicles, offering a comprehensive and carefully selected range of high-quality automotive components. The company is committed to supporting workshops, distributors, and service providers by ensuring consistent access to reliable parts that meet industry standards and performance expectations. With a strong focus on availability, efficiency, and customer satisfaction, most products are kept in stock and ready for immediate dispatch, enabling fast delivery times, reduced waiting periods, and flexibility for both small and urgent orders.
              </Typography>
              
              <Typography variant="p" color="dark" className="leading-relaxed">
                GH's customer-focused philosophy is built on convenience, reliability, and long-term partnership. By combining quality assurance with efficient logistics and attentive service, the company ensures a smooth and hassle-free purchasing experience. This commitment has earned the trust of customers worldwide who value not only product quality and performance, but also consistency, ease of service, and a supplier they can rely on in every situation.
              </Typography>
            </div>
            
            <div className="pt-2 min-[2100px]:pt-6 min-[3800px]:pt-10" data-aos="fade-up" data-aos-delay="100">
               <Button text="Learn More" href="#about" variant="primary" showIcon={false} />
            </div>
          </div>
        </div>

        {/* Image - Mobile Order 3, Desktop Right */}
        <div className="order-3 xl:col-start-7 xl:col-span-6 xl:row-start-1 w-full h-full flex items-center justify-center min-[2100px]:min-h-[500px] min-[3800px]:min-h-[800px]" data-aos="fade-left">
          <div className="w-full aspect-[792/566] relative overflow-hidden rounded-md min-[2100px]:rounded-xl min-[3800px]:rounded-2xl">
            <img
              src="/moto/auto-gh/section2.png"
              alt="Auto GH Facility"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
