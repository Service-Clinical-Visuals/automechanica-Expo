import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function BrakePads() {
  return (
    <section className="py-16 md:py-24 bg-[#f2f2f2] overflow-hidden">
      <div className="custom-container px-6 xl:px-16">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center">
          {/* Left Video */}
          <div
            className="order-2 xl:order-1 xl:col-span-7 w-full aspect-video rounded-sm  relative  bg-gray-200 overflow-hidden"
            data-aos="fade-right">
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover object-fill"
            />
          </div>

          {/* Right Content */}
          <div
            className="order-1 xl:order-2 xl:col-span-5 flex flex-col gap-6"
            data-aos="fade-left">
            <div>
              <h3 className="sora text-[var(--color-primary)] section-text font-semibold mb-2">
                Brake Pads
              </h3>
              <h2 className="section-title text-[#202020] sora font-semibold leading-tight">
                High-Performance Brake Pads For Maximum Safety
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              <p className="section-text text-[#404040] font-regular inter leading-relaxed">
                Our Brake Pads Are Engineered To Deliver Reliable Stopping
                Power, Enhanced Durability, And Consistent Braking Performance
                Under All Driving Conditions. Developed With Advanced Friction
                Materials And Strict Quality Standards, They Ensure Optimal
                Safety, Reduced Wear, And Smooth Operation For Modern Vehicles.
              </p>

              <p className="section-text text-[#404040] font-regular inter leading-relaxed">
                Designed To Meet International Certifications And Compliance
                Requirements, Our Brake Pads Provide Dependable Performance For
                Passenger Cars And Commercial Vehicles Across Global Markets.
              </p>
            </div>

            <ul className="flex flex-col gap-3 mt-2 pl-4 list-disc marker:text-[#585858]">
              <li className="section-text text-[#404040] font-regular inter">
                Advanced Friction Materials Ensure Consistent Braking
                Performance And Safety
              </li>
              <li className="section-text text-[#404040] font-regular inter ">
                Reliable Performance Across Passenger & Commercial Vehicle
                Applications Worldwide
              </li>
              <li className="section-text text-[#404040] font-regular inter ">
                Designed To Reduce Noise, Vibration, And Uneven Wear Effectively
              </li>
            </ul>

            <div className="mt-6">
              <Button href="/frenos-sauleda/products/brake-pads">
                Explore Brake Pads
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
