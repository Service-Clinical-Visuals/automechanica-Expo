import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function EngineeredProducts() {
  return (
    <section className="py-16 md:py-24 bg-[#f2f2f2] overflow-hidden">
      <div className="custom-container px-6 xl:px-16">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center">
          
          {/* Left Content */}
          <div className="xl:col-span-5 flex flex-col gap-6 " data-aos="fade-right">
            <div>
              <h3 className="sora text-[var(--color-primary)] section-text font-semibold mb-2">Engineered Products</h3>
              <h2 className="section-title text-[#202020] sora font-semibold leading-tight">                Performance-Driven Solutions For Modern Industrial Applications
              </h2>
            </div>
            
            <p className="section-text text-[#404040] font-regular inter leading-relaxed">
              Our Extensive Portfolio Of Friction Materials And Industrial Components Is Engineered To
              Meet The Evolving Demands Of Global Industries. Every Product Combines Innovative
              Engineering, Uncompromising Quality, And Dependable Performance.
            </p>

            <ul className="flex flex-col gap-3 mt-2 pl-4 list-disc marker:text-[#585858]">
              <li className="section-text text-[#404040] font-regular inter">
                Built For Demanding Environments Requiring Durability, Safety, And Long Service Life.
              </li>
              <li className="section-text text-[#404040] font-regular inter">
                Trusted By Industries Seeking Dependable Friction Solutions With Proven Performance
              </li>
              <li className="section-text text-[#404040] font-regular inter">
                Precision Manufacturing Ensuring Consistent Quality Across Every Production Batch.
              </li>
              <li className="section-text text-[#404040] font-regular inter">
                Precision-Engineered Products Delivering Exceptional Reliability Under Demanding
                Operating Conditions.
              </li>
            </ul>

            <div className="mt-6">
              <Button href="/frenos-sauleda/products">
                Explore Brake Pads
              </Button>
            </div>
          </div>

          {/* Right Video */}
          <div className="xl:col-span-7 w-full aspect-video  relative rounded-sm  bg-gray-200 overflow-hidden " data-aos="fade-left">
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
