import React from "react";
import Button from "./Button";

export default function RnD() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="custom-container px-6 xl:px-16">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center">
          
          {/* Left Content */}
          <div className="xl:col-span-5 flex flex-col gap-6" data-aos="fade-right">
            <div>
              <h3 className="sora text-[var(--color-primary)] section-text font-semibold mb-2">R&D Department</h3>
             <h2 className="section-title text-[#202020] sora font-semibold leading-tight">
                Innovation Driven. Performance Focused
              </h2>
            </div>
            
            <p className="section-text text-[#404040] font-regular inter leading-relaxed">
              The Research And Development (R&D) Department At Frenos Sauleda Is Dedicated To
              Driving Innovation And Excellence In The Design And Formulation Of Friction Materials For
              Industrial Brake Pads And Clutch Linings.
            </p>
            
            <p className="section-text text-[#404040] font-regular inter leading-relaxed">
              Our Team Of Skilled Scientists, Engineers, And Industry Experts Is Committed To
              Developing Cutting-Edge Solutions That Enhance Performance, Safety, And Sustainability
              In Industrial Machinery Applications.
            </p>

            <div className="mt-4">
              <Button href="/frenos-sauleda/innovation">
                Discover Our Innovation
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="xl:col-span-7 w-full" data-aos="fade-left">
            <img 
              src="/moto/frenos-sauleda/innovation.png" 
              alt="Frenos Sauleda R&D Department" 
              className="w-full h-auto object-cover  shadow-md"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
