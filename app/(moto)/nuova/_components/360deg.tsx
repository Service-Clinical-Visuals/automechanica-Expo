"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";
import { Search, Settings, CheckCircle } from "lucide-react";

const Deg360 = () => {
  return (
    <section
      id="360deg"
      className="w-full py-16 min-[3800px]:py-25 text-white relative bg-secondary"
    >
      <div className="custom-container relative z-10 flex flex-col items-center justify-center text-center gap-6">

        {/* Top Heading Group */}
        <div className="w-full max-w-[90%] flex flex-col items-center gap-2" data-aos="fade-up">
          <Typography variant="h2" color="white" className="font-bold leading-tight">
            360° Product Experience
          </Typography>
        </div>

        {/* Top Text Body */}
        <div className="w-full lg:max-w-[70%] mb-2" data-aos="fade-up" data-aos-delay="100">
          <Typography variant="p" color="white" className="leading-relaxed">
            Explore the precision engineering of Nuova Tecnodelta components through an interactive 360° view. Discover the design, construction, and technical details of hydraulic brake systems, clutch parts, CV joints, and water pump solutions.
          </Typography>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-white/40 my-2" data-aos="fade-in"></div>

        {/* Bottom Content Grid */}
        <div className="w-full flex flex-col xl:grid xl:grid-cols-12 gap-10 xl:gap-8 items-center text-left mt-4">

          {/* Left Content (Text and List) - Mobile Order 1 */}
          <div className="order-1 xl:col-start-1 xl:col-span-5 w-full flex flex-col gap-8" data-aos="fade-right">
            <Typography variant="span" color="white" className="leading-relaxed">
              Developed through advanced manufacturing technologies and rigorous quality control processes, every Nuova Tecnodelta component delivers exceptional durability, reliable operation, and OE-equivalent performance, ensuring precise fitment and long-lasting efficiency across modern automotive applications.
            </Typography>

            <div className="flex flex-col gap-6">
              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <Search className="w-8 h-8 min-[3800px]:w-[60px] min-[3800px]:h-[60px] text-white shrink-0 mt-1" />
                <Typography variant="span" color="white" className="leading-relaxed">
                  Explore every angle of the component to understand its design, structure, materials, and technical details.
                </Typography>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <Settings className="w-8 h-8 min-[3800px]:w-[60px] min-[3800px]:h-[60px] text-white shrink-0 mt-1" />
                <Typography variant="span" color="white" className="leading-relaxed">
                  Discover precision-engineered components with accurate dimensions and advanced features that ensure reliable performance.
                </Typography>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 min-[3800px]:w-[60px] min-[3800px]:h-[60px] text-white shrink-0 mt-1" />
                <Typography variant="span" color="white" className="leading-relaxed">
                  Experience durable automotive solutions designed for perfect fitment, long service life, and OE-level reliability.
                </Typography>
              </div>

              {/* Item 4 */}
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 min-[3800px]:w-[60px] min-[3800px]:h-[60px] text-white shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
                <Typography variant="span" color="white" className="leading-relaxed">
                  Understand the quality of construction, finishing, and engineering details that contribute to consistent automotive performance.
                </Typography>
              </div>
            </div>
            <div className="w-full mt-1" data-aos="fade-up">
              <Button text="Explore" showIcon={false} />
            </div>
          </div>

          {/* Right Video - Mobile Order 2 */}
          <div className="order-2 xl:col-start-6 xl:col-span-7 xl:row-start-1 xl:row-span-2 w-full aspect-video relative overflow-hidden rounded-2xl" data-aos="zoom-in">
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Deg360;
