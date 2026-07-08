import React from "react";
import Typography from "./Typography";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";
import Button from "./Button";
import Link from "next/link";
import { TrendingUp } from "lucide-react";

export default function Choose() {
  return (
    <section className="w-full py-12 md:py-15 bg-primary text-white" data-aos="fade-up">
      <div className="custom-container flex flex-col items-center">

        <Typography variant="h1" color="white" weight="bold" className="text-center font-primary mb-10">
          Why Choose Airstal Compressors?
        </Typography>

        <div className="w-full max-w-[65%] aspect-video  mb-10 relative shadow-2xl" data-aos="zoom-in">
          <DynamicVideoPlayer type="360" className="absolute top-0 left-0 w-full h-full object-cover" />
        </div>

        <div className="w-full border-t border-white/30 pt-8 mt-4 flex flex-col md:flex-row items-center justify-between gap-6" data-aos="fade-up">
          <Typography variant="p" color="white" className="leading-relaxed max-w-[60%]  text-left">
            Airstal compressors deliver reliable cooling, OEM-quality performance, and long-lasting durability. Designed for precise fitment and thoroughly tested, they ensure efficient operation across a wide range of vehicles in demanding driving conditions.
          </Typography>
          <div className="rounded-full w-20 h-20 flex items-center justify-center p-1 bg-[#579CCC] ">

            <TrendingUp className="w-12 h-12   " /> </div>


        </div>

      </div>
    </section >
  );
}
