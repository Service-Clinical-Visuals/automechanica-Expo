import React from "react";
import Container from "./Container";
import Typography from "./Typography";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Quality() {
  return (
    <section className="relative py-20 md:py-32 w-full bg-[#1c1c1c] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/moto/slider/background.png" alt="Background" className="w-full grayscale h-full object-cover" />

      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-10 items-center">

          {/* Left Column (Text Content) */}
          <div className="flex flex-col" data-aos="fade-right">
            {/* Title Section based on AboutUs style */}
            <div className="relative mb-8 flex flex-col items-start">
              {/* Cropped Number */}
              <div className="absolute top-0 left-0 h-[40px] md:h-[70px] overflow-hidden">
                <span className="font-bebas text-[80px] md:text-[130px] leading-none text-white">
                  05
                </span>
              </div>

              {/* Heading */}
              <div className="pt-[40px] md:pt-[70px] relative z-10">
                <Typography
                  variant="h2"
                  color="primary"
                  className="font-bebas tracking-wide leading-none uppercase"
                >
                  QUALITY
                </Typography>
              </div>
            </div>

            {/* Subheading */}
            <Typography variant="h4" className="text-white font-semibold leading-relaxed mb-6 font-poppins">
              Integrated management system for quality, safety, environment, and health
            </Typography>

            {/* Body Text */}
            <Typography color="white" className="text-white text-[14px] leading-relaxed mb-10 font-light">
              Our product approvals guarantee solutions of the highest technology and quality. Internal laboratory and R&D department with experienced personnel and latest technology instruments that ensure the highest quality of the products, as well as the continuous development of formulations to keep ahead of the demands and needs of the market.
            </Typography>

            {/* ISO Image */}
            <div className="w-[100%] max-w-[700px]">
              <img src="/moto/slider/image5.png" alt="ISO Certifications" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Right Column (Video) */}
          <div className="aspect-video relative  rounded-xl overflow-hidden shadow-xl" data-aos="fade-left">
            <DynamicVideoPlayer type="short" className=" aspect-video object-cover " />

          </div>

        </div>
      </Container>
    </section>
  );
}
