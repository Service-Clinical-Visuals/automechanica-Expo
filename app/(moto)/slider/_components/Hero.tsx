import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Container from "./Container";
import Typography from "./Typography";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-end pb-20 md:pb-30 bg-dark">
      {/* Background Media */}
      <div className="absolute h-screen xl:h-[104vh] inset-0 z-0">
        <DynamicVideoPlayer type="banner" />

      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-5xl" data-aos="fade-up">
          <Typography variant="h1" color="white" weight="semibold" className="!font-poppins font-bold uppercase !leading-[1.2] mb-8">
            We develop lubricants & <br />
            greases for more than 60 years
          </Typography>

          <Button text="EXPLORE PRODUCTS" variant="chevron" />
        </div>
      </Container>
    </section>
  );
}
