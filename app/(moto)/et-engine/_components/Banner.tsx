import React from "react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative w-full pt-[80px] md:pt-[100px] lg:pt-[120px] pb-8 lg:pb-12" data-aos="fade-up">
      {/* Extended Video Background */}
      <div className="custom-container relative">
        <div className="relative overflow-hidden w-full h-screen rounded-2xl md:rounded-[2rem] shadow-xl" data-aos="zoom-in" data-aos-delay="100">
          
          <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover" />
          
          {/* Text Content */}
          <div className="absolute inset-0 z-20 pointer-events-none p-6 md:p-12 xl:p-16 flex flex-col justify-end">
            <div className="text-left  pointer-events-auto" data-aos="fade-up" data-aos-delay="200">
              <Typography variant="h1" color="white" className="leading-tight mb-4">
                Driving Engine Performance Since 2007
              </Typography>
              <Typography variant="p" color="white" className=" mb-8 max-w-[70%] xl:max-w-[50%] leading-relaxed">
                ET ENGINETEAM delivers precision-engineered engine components and repair kits, offering over 4,000 high-quality products trusted by automotive professionals worldwide.
              </Typography>
              <Button text="Discover More" href="#discover" showIcon={true} />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
