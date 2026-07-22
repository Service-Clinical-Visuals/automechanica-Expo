import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative w-full pt-[110px] sm:pt-[120px] md:pt-[130px] lg:pt-[140px] pb-5" >
      {/* Extended Video Background */}
      <div className="custom-container relative">
        <div className="relative overflow-hidden w-full h-screen rounded-2xl md:rounded-[2rem] shadow-xl" >
          
          <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover" />
          
          {/* Text Content */}
          <div className="absolute inset-0 z-20 pointer-events-none p-6 md:p-12 xl:p-16 flex flex-col justify-end">
            <div className="text-left  pointer-events-auto" data-aos="fade-left" data-aos-delay="200">
              <Typography variant="h1" color="white" className="leading-tight mb-4">
                German Automotive Lubricant Manufacturer
              </Typography>
              <Typography variant="p" color="white" className=" mb-8 max-w-[70%] xl:max-w-[50%] leading-relaxed">
                AutoChemie Bitterfeld GmbH delivers premium lubricants and automotive fluids trusted worldwide, engineered with advanced German technology for superior performance and protection.
              </Typography>
              <Button text="Explore Products" href="#" showIcon={true} />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
