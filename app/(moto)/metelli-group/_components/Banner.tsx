import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative w-full pt-[80px] md:pt-[100px] lg:pt-[110px] pb-8" data-aos="fade-up">
      {/* Extended Video Background */}
      <div className="w-[95%] mx-auto h-screen relative">
        <div className="relative overflow-hidden w-full h-full shadow-xl rounded-[24px] lg:rounded-[32px]" data-aos="zoom-in" data-aos-delay="100">
          <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
        </div>
      </div>

      {/* Constrained Text Overlay */}
      <div className="custom-container absolute inset-0 z-20 pointer-events-none pt-[80px] md:pt-[100px] lg:pt-[110px] pb-8">
        <div className="h-full relative pointer-events-none">
          <div className="absolute bottom-20 lg:bottom-32 left-4 md:left-8 mb-6 lg:mb-12 text-left max-w-[90%] md:max-w-[70%] xl:max-w-[50%] pointer-events-auto" data-aos="fade-up" data-aos-delay="200">
            <Typography variant="h1" font="oswald" color="white" className="mb-8 tracking-tight leading-tight drop-shadow-md">
              Premium Engine Oils for Maximum Performance
            </Typography>
            <Button text="Explore Products" variant="primary" href="#" />
          </div>
        </div>
      </div>
    </section>
  );
}
