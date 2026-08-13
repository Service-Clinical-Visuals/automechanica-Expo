import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function ProductPortfolio() {
  return (
    <section className="py-16 md:py-24 bg-[#f2f2f2] overflow-hidden">
      <div className="custom-container px-6 xl:px-16">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center">
          
          {/* Left Video */}
          <div className="order-2 xl:order-1 xl:col-span-7 w-full aspect-video relative rounded-sm bg-gray-200 overflow-hidden" data-aos="fade-right">
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="order-1 xl:order-2 xl:col-span-5 flex flex-col gap-6" data-aos="fade-left">
            <div>
              <h3 className="sora text-[var(--color-primary)] section-text font-semibold mb-2">Our Product Portfolio</h3>
             <h2 className="section-title text-[#202020] sora font-semibold leading-tight">
                Engineered Friction Solutions For Every Industrial Challenge
              </h2>
            </div>
            
            <p className="section-text text-[#404040] font-regular inter leading-relaxed">
              From Standard Friction Materials To Fully Customized Industrial Components, Our
              Products Are Designed To Deliver Outstanding Durability, Precision, And Performance
              Across Automotive, Industrial, Wind Energy, Robotics, Agricultural, And Motorsport
              Applications. Every Solution Is Manufactured To Meet Demanding Operational
              Requirements While Ensuring Long-Term Reliability.
            </p>

            <ul className="flex flex-col gap-3 mt-2 pl-4 list-disc marker:text-[#585858]">
              <li className="section-text text-[#404040] font-regular inter">
                Premium Friction Materials Engineered For Demanding Industrial And Automotive Applications.
              </li>
              <li className="section-text text-[#404040] font-regular inter">
                Wide Selection Of Friction Sheets For Versatile Industrial Manufacturing Solutions.
              </li>
              <li className="section-text text-[#404040] font-regular inter">
                Reliable Products Trusted Across Wind Energy, Robotics, Agriculture, And Motorsport Industries.
              </li>
            </ul>

            <div className="mt-6">
              <Button href="/frenos-sauleda/products">
                Explore Products
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
