"use client";

import React from "react";
import Button from "./Button";
import Typography from "./Typography";
import Container from "./Container";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 md:py-20 bg-[#F8F9FA] ">
      <Container>
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center text-center " data-aos="fade-up">
          <div className="relative inline-block mb-10">
            <Typography variant="h2" color="primary" className="font-semibold text-[var(--color-secondary)]">
              About Us
            </Typography>
            <div className="absolute -left-4 md:-left-6 -bottom-1 w-16 md:w-20 h-1 rounded-xl bg-[var(--color-primary)]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 items-center gap-6 lg:gap-8 w-full">
          {/* Left: Image (appears second on mobile/tablet up to MacBook size) */}
          <div
            className="col-span-1 xl:col-span-6 order-2 xl:order-1"
            data-aos="fade-right"
          >
            <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/moto/efi-aftermarket/section2.png"
                alt="EFI Automotive Service Facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Content (appears first on mobile/tablet up to MacBook size) */}
          <div
            className="col-span-1 xl:col-span-6 flex flex-col justify-center space-y-8 order-1 xl:order-2"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="space-y-4">
              <Typography variant="h4" color="secondary" className="font-bold font-exo leading-snug">
                <div className="inline text-[var(--color-primary)]">EFI AUTOMOTIVE SERVICE,</div> THE AFTERMARKET SUBSIDIARY OF THE EFI AUTOMOTIVE GROUP
              </Typography>

              <Typography variant="p" color="dark" className="leading-relaxed ">
                Located in the Grand-Est region (eastern France), in Joinville (Haute-Marne), EFI Automotive Service is an SME specialising in the production and distribution of automotive spare parts, as well as the industrialisation of innovative projects.
              </Typography>
            </div>

            <div className="space-y-4">
              <Typography variant="h4" color="primary" className="font-bold text-[var(--color-primary)] uppercase tracking-tight">
                LOOKING TO THE FUTURE
              </Typography>

              <Typography variant="p" color="dark" className="leading-relaxed  ">
                Since 2018, with the aim of diversifying, EFI Automotive Service has been making its production technologies available to promising start-ups, thus offering them new market opportunities. This approach has several advantages for the start-ups concerned.
              </Typography>
            </div>

            <div className="pt-4">
              <Button text="Learn More About Us" variant="secondary" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
