import React from "react";
import Button from "./Button";

export default function About() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="custom-container px-6 xl:px-16">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center">
          
          {/* Left Content */}
          <div className="xl:col-span-5 flex flex-col gap-6" data-aos="fade-right">
            <div>
              <h3 className="sora text-[var(--color-primary)] section-text font-semibold mb-2">About Frenos Sauleda S.A.</h3>
              <h2 className="section-title text-[#202020] sora font-semibold leading-tight">
                Engineering Hydraulic Excellence Since 1964
              </h2>
            </div>
            
            <p className="section-text text-[#404040] font-regular inter leading-relaxed">
              Founded In 1927, The Sauleda Family Pioneered The Production Of Brake Belts For The
              Automotive Industry, Establishing A Legacy Of Innovation That Continues To This Day.
              Over The Years, The Company Has Evolved To Meet The Highest Market Demands,
              Becoming An International Reference In Friction Materials.
            </p>
            
              <p className="section-text text-[#404040] font-regular inter leading-relaxed">              
              Today, Sauleda Remains A Trusted Global Partner, Delivering Reliable And High-
              Performance Solutions For Industrial Brakes And Clutches. With A Forward-Looking
              Approach, The Company Continues To Embrace New Challenges, Strengthen Its
              Technical Know-How, And Drive Innovation For The Future.
            </p>

            <div className="mt-4">
              <Button href="/frenos-sauleda/about">
                Discover Our Capabilities
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="xl:col-span-7 w-full" data-aos="fade-left">
            <img 
              src="/moto/frenos-sauleda/abt.png" 
              alt="Frenos Sauleda Factory" 
              className="w-full h-auto object-cover  shadow-md"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
