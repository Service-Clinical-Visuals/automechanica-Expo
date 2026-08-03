import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function Banner() {
  return (
    <section className="relative w-full pt-[110px] md:pt-[130px] xl:pt-[120px] min-[2500px]:pt-[300px] min-[3800px]:pt-[500px] pb-8 lg:pb-12" data-aos="fade-up">
      <div className="custom-container relative">
        <div className="relative overflow-hidden w-full h-screen rounded-2xl md:rounded-[2rem] shadow-xl" data-aos="zoom-in" data-aos-delay="100">

          <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover" />

          <div className="absolute inset-0 z-20 pointer-events-none p-6 md:p-12 xl:p-16 flex flex-col justify-end">
            <div className="text-left pointer-events-auto flex flex-col items-start gap-4" data-aos="fade-up" data-aos-delay="200">
              <Typography variant="h1" color="white" className="leading-tight">
                Powering Progress Since 1945
              </Typography>
              <Typography variant="p" color="white" className="max-w-full md:max-w-[70%] lg:max-w-[50%] leading-relaxed mb-4">
                Mutlu Akü ve Malzemeleri San. A.Ş. delivers OEM-quality battery solutions trusted across automotive and industrial markets in over 80 countries.
              </Typography>
              <Button text="Explore Products" href="#" showIcon={true} variant="primary" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
