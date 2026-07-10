"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function Vision() {
  return (
    <section
      className="relative w-full h-[80vh] py-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/moto/metelli-group/background.png')" }}
      data-aos="fade-up"
    >
      {/* Optional Overlay if text is hard to read. Image 7 looks clear, but we add a subtle gradient just in case */}
      <div className="absolute   inset-0 bg-gradient-to-b from-black/20 to-black/10 z-0"></div>

      <div className="custom-container relative z-10 flex flex-col items-center text-center">

        <div className="max-w-[90%] top-3 md:max-w-[75%] lg:max-w-[60%] flex flex-col items-center">
          <Typography
            variant="h1"
            font="oswald"
            color="white"
            className="mb-6 font-bold uppercase tracking-wide drop-shadow-md"
          >
            A Vision for the Future
          </Typography>

          <Typography
            variant="p"
            font="lato"
            color="white"
            className="mb-10 leading-relaxed text-[15px] md:text-base opacity-95 drop-shadow-md"
          >
            We at Metelli S.p.A. believe that sustainability is the foundation on which we can build a prosperous and responsible future. Our mission goes beyond profit: we are committed to integrating sustainable practices into every aspect of our operations. We are proud to present our Sustainability Report, a document that testifies our commitment to the well-being of people, the environment and society.
          </Typography>

          <Button text="Our Vision" variant="secondary" href="#" />
        </div>

      </div>
    </section>
  );
}
