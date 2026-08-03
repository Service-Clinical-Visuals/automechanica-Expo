"use client";

import React from "react";
import Button from "./Button";

export default function EngineeredSection() {
  return (
    <section className="py-20 xl:py-20 relative overflow-hidden bg-[url('/moto/reacheurope/bg.jpg')] bg-cover bg-center">
      <div className="custom-container relative z-10">
        <div className="relative z-10 flex flex-col items-center text-center max-w-7xl mx-auto" data-aos="fade-up">

          <h2 className="section-title text-[#000000] rajdhani-font font-bold mb-6">
            Engineered to keep every journey cool, every mile reliable, and every drive <br />performing at its best
          </h2>

          <p className="section-text text-[#000000] lato-font leading-8 tracking-normal mb-10">
            REACH cooling solutions are designed to deliver exceptional thermal performance, durability, and OE-quality reliability for modern vehicles. From condensers and radiators to complete HVAC components, every product is manufactured with precision engineering and advanced technology to ensure efficient heat management, long-lasting performance, and seamless compatibility across passenger cars, commercial vehicles, and electric mobility applications. Trusted by automotive professionals worldwide, REACH helps keep vehicles running cooler, more efficiently, and with confidence in every driving condition.
          </p>

          <Button href="#" variant="primary" className="!bg-[#1A3667] btn-text font-semibold">
            Explore Our Cooling Solutions
          </Button>
        </div>
      </div>
    </section>
  );
}
