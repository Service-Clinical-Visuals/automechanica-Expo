"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const Quality = () => {
  return (
    <section id="quality-independence" className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="custom-container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 min-[3800px]:gap-24 items-center">
        
        {/* Text Content */}
        <div className="order-1 lg:order-1 lg:col-span-6 flex flex-col gap-6 min-[3800px]:gap-12 w-full" data-aos="fade-right">
          
          <div className="flex flex-col gap-4">
            <Typography variant="h2" color="dark" className="font-bold leading-tight">
              Quality and independence
            </Typography>
            
            <div className="flex flex-col gap-4 min-[3800px]:gap-8 mt-2 min-[3800px]:mt-6">
              <Typography variant="p" color="muted" className="leading-relaxed">
                as well as greater flexibility in ensuring complete deliveries to customers, inspired the company to start producing piston pins.
              </Typography>
              <Typography variant="p" color="muted" className="leading-relaxed">
                Another opportunity for the factory's development was the implementation of new steel processing processes, which resulted in the production of steel components for the automotive industry, agricultural machinery manufacturers, and other companies seeking suppliers of high-quality services and products.
              </Typography>
              <Typography variant="p" color="muted" className="leading-relaxed italic">
                Currently, Złotecki Sp. z o. o. offers machining services including milling on three-, four-, and five-axis machining centers, turning on CNC lathes, and delivery of finished components in cooperation with proven electroplating plants and hardening plants.
              </Typography>
              <Typography variant="p" color="muted" className="leading-relaxed">
                Today, Złotecki is a well-established piston manufacturer. Its products are sold to engine manufacturers (OEM) and the aftermarket. Pistons and pins are sold in Poland and exported to countries in the European Union, Europe, the Middle East, and Africa.
              </Typography>
            </div>
          </div>

          <div className="mt-4 min-[3800px]:mt-8">
            <Button text="Learn More" href="#about" variant="primary" />
          </div>

        </div>

        {/* Decorative Line & Image */}
        <div className="order-2 lg:order-2 lg:col-span-6 flex items-center justify-center lg:justify-end gap-6 relative w-full h-full" data-aos="fade-left">
          
          {/* Decorative Vertical Bar */}
          <div className="hidden lg:block w-3 h-48 bg-primary rounded-full shrink-0 min-[3800px]:w-6 min-[3800px]:h-96"></div>

          {/* Image Container with exact aspect ratio */}
          <div className="w-full max-w-[710px] aspect-[710/618] relative flex-1">
            <img
              src="/moto/zlotecki/section3.png"
              alt="Quality and independence"
              className="w-full h-full object-contain"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Quality;
