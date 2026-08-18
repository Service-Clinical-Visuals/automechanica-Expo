"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const Ready = () => {
  return (
    <section
      id="ready"
      className="w-full min-h-[500px] md:min-h-[600px] xl:min-h-[700px] min-[2500px]:min-h-[1200px] min-[3800px]:min-h-[2400px] relative py-24 xl:py-32 min-[2500px]:py-56 min-[3800px]:py-100 flex justify-center items-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/moto/gl-oil/bg.png')"
      }}
    >
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 z-0 bg-black/60"></div>

      {/* Gradient Overlay for Top & Bottom Blending */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(to bottom, var(--color-background) 0%, transparent 15%, transparent 85%, var(--color-background) 100%)"
        }}
      ></div>

      <div className="custom-container relative z-10 flex flex-col items-center text-center gap-6 xl:gap-8 max-w-4xl min-[2500px]:max-w-5xl min-[3800px]:max-w-6xl">

        <Typography variant="h2" color="white" className="font-bold leading-tight">
          Ready to find the perfect<br className="hidden sm:block" /> Engine Oil
        </Typography>

        <p className="text-white font-secondary text-sm md:text-base leading-relaxed max-w-2xl min-[2500px]:max-w-[80%] min-[3800px]:max-w-[60%] min-[2500px]:text-lg min-[3800px]:text-xl">
          I would like to request a catalog of your products and any additional services you offer. If you could send that my way, I would greatly appreciate it. Thank you!
        </p>

        <div className="mt-4">
          <Button text="Contact Us" href="#contact" />
        </div>

      </div>
    </section>
  );
};

export default Ready;
