import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative w-full h-screen bg-gray-900 overflow-hidden flex items-center">
      {/* Background container */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <DynamicVideoPlayer type="banner" />

        </div>
      </div>

      {/* Text Overlay */}
      <div className="custom-container relative z-20 w-full mt-10 md:mt-[30%]">
        <div className="max-w-[50%] md:max-w-[40%] xl:max-w-[30%]">
          <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
            <Typography variant="h1" color="white" className="mb-8 md:mb-10 leading-[1.2] tracking-tight font-bold">
              Direct Fit With Hassle-Free Assembling. Find The Part You Need Today
            </Typography>
          </div>
          <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
            <Button text="View Our Catalog" variant="hero" href="#" />
          </div>
        </div>
      </div>
    </section>
  );
}
