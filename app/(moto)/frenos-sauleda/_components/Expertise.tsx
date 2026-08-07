import React from "react";
import Button from "./Button";

export default function Expertise() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="custom-container px-6 xl:px-16">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-center">
          
          {/* Left Image */}
          <div className="order-2 xl:order-1 xl:col-span-7 w-full" data-aos="fade-right">
            <img 
              src="/moto/frenos-sauleda/eexpertise.png" 
              alt="Frenos Sauleda Expertise" 
              className="w-full h-auto object-cover rounded shadow-md"
            />
          </div>

          {/* Right Content */}
          <div className="order-1 xl:order-2 xl:col-span-5 flex flex-col gap-6" data-aos="fade-left">
            <div>
               <h3 className="sora text-[var(--color-primary)] section-text font-semibold mb-2">Our Expertise</h3>
              <h2 className="section-title text-[#202020] sora font-semibold leading-tight">Friction Materials development & Manufacturing
              </h2>
            </div>
            
            <p className="section-text text-[#404040] font-regular inter leading-relaxed">
              Sauleda Brakes Is A Friction Material Manufacturing Company For More Than 95 Years
              Now. We Offer A Wide Range Of Industrial Products Made Out Of Friction Products. These
              Can Be Molded, CNC Machined, Waterjet, Laser, And Can Be Delivered In Many Different
              Shapes And Formats. Thanks To Our Different Hot Stamp Press Sizes, We Are Able To
              Supply From Very Tiny And Small Parts To Big Shanks Or Thick Plates / Blocks.
            </p>

            <div className="mt-4">
              <Button href="/frenos-sauleda/expertise">
                Discover Our Materials
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
