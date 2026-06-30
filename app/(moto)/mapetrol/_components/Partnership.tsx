"use client";

import React from "react";
import Typography from "./Typography";
import Container from "./Container";

export default function Partnership() {
  return (
    <section className="w-full bg-[#111111] py-20 md:py-32 text-white"  >
      <Container className="custom-container flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">

        <Typography variant="h2" outline={true} color="white" weight="bold" className="leading-[1.3] w-full max-w-[90%] md:max-w-[80%] uppercase" data-aos="fade-up">
          Are You Ready For A<br className="hidden md:block" /> Partnership With Mapetrol?
        </Typography>

        <Typography variant="p" className="text-white  leading-relaxed max-w-[85%] mx-auto" data-aos="fade-up" data-aos-delay="200">
          By combining technological innovation and a personal approach, Mapetrol offers more than just motor oils – we offer a partnership based on trust, open communication and shared success. Contact us and discover how our century of expertise can strengthen your engines and your business.
        </Typography>

      </Container>
    </section>
  );
}
