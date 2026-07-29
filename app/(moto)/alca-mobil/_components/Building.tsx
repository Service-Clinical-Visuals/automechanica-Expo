"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

const Building = () => {
  return (
    <section id="building" className="w-full py-16 min-[3800px]:pt-25 bg-white overflow-hidden">
      <div className="custom-container flex flex-col xl:grid xl:grid-cols-12 gap-10 items-center">

        {/* Content Wrapper */}
        <div className="contents xl:flex xl:flex-col xl:col-start-1 xl:col-span-6 xl:row-start-1 xl:gap-8">
          
          {/* Heading Group - Mobile Order 1 */}
          <div className="order-1 flex flex-col gap-2 w-full" data-aos="fade-right">
            <div className="inline-flex flex-col self-start">
              <Typography variant="span" color="secondary" className="font-bold tracking-wide">
                Automechanika 2026
              </Typography>
              <span className="w-1/2 h-[2px] bg-secondary self-end mt-1"></span>
            </div>
            <Typography variant="h2" color="dark" className="font-bold leading-tight mt-1">
              Building partnerships & reaching markets worldwide
            </Typography>
          </div>

          {/* Content (Mobile Order 3) */}
          <div className="order-3 flex flex-col gap-6 w-full" data-aos="fade-right" data-aos-delay="100">
            <div className="flex flex-col gap-4">
              <Typography variant="p" color="muted" className="leading-relaxed">
                Automechanika stands as the world's leading trade fair for the automotive industry, and we are excited to return to Frankfurt in September 2026. With the support of EU funding, we are further strengthening our presence at this key global event for the automotive aftermarket. For us, participation goes beyond simply attending a trade show—it is a strategic opportunity to enter new international markets, build strong industry relationships, and present our products to a wider global audience.
              </Typography>
              
              <Typography variant="p" color="muted" className="leading-relaxed">
                Taking part in Automechanika not only enhances our brand visibility but also reinforces our competitiveness across digital platforms, supporting our long-term, sustainable growth.
              </Typography>

              <ul className="flex flex-col gap-3 mt-2">
                {[
                  "Global Market Expansion: Reaching new markets and building strong connections",
                  "Enhanced Brand Visibility: Showcasing products to a wider global audience"
                ].map((item, idx) => {
                  const parts = item.split(": ");
                  return (
                    <li key={idx} className="flex items-start gap-3 min-[2100px]:gap-4 min-[3800px]:gap-6">
                      <ArrowRight className="w-5 h-5 min-[2100px]:w-7 min-[2100px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                      <Typography variant="p" color="muted" className="leading-relaxed">
                        <span className="font-bold">{parts[0]}: </span>
                        {parts[1]}
                      </Typography>
                    </li>
                  );
                })}
              </ul>
            </div>
            
            <div className="pt-2">
               <Button text="Discover Our Expertise" href="#about" />
            </div>
          </div>
        </div>

        {/* Image (Mobile Order 2, Desktop Right) */}
        <div className="order-2 xl:col-start-7 xl:col-span-6 xl:row-start-1 w-full h-full flex items-center justify-center min-h-[300px] xl:min-h-[400px]" data-aos="fade-left">
          <img
            src="/moto/alca-mobil/section3.png"
            alt="Automechanika Trade Show"
            className="w-full h-auto object-cover shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Building;
