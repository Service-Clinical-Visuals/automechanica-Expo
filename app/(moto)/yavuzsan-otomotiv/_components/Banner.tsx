import React from "react";
import Typography from "./Typography";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden flex flex-col justify-end ">
      {/* Background Video using DynamicVideoPlayer */}
      <div className="absolute inset-0 z-0">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover "
        />

      </div>

      {/* Content Overlay */}
      <div className="custom-container relative z-20 pb-20 md:pb-32 lg:pb-40">
        <div className="max-w-2xl text-left" data-aos="fade-up" data-aos-delay="200">
          <Typography variant="h1" className="banner-title text-white leading-tight oswald mb-6 font-bold">
            Quality Brake Solutions Worldwide
          </Typography>

          <Typography variant="p" className="responsive-text-base rubik text-[#FFFFFF] font-normal leading-relaxed max-w-xl">
            Yavuzsan delivers trusted brake solutions worldwide through advanced technology, quality engineering, and reliable performance.
          </Typography>
        </div>
      </div>
    </section>
  );
}
