"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Contact() {
  return (
    <section className="background1 relative w-full py-24 md:py-32 flex items-center justify-center overflow-hidden">
    

      <div className="custom-container relative z-10 flex flex-col items-center text-center">
        <div className="max-w-4xl flex flex-col items-center justify-center" data-aos="fade-up">
          <h2 className="banner-title oswald font-semibold text-white mb-8 leading-relaxed">
            We always strive for performance, quality and<br className="hidden md:block" />
            sustainability - we are ready to grow with you.
          </h2>
          <Button href="#" variant="solid-gold" className="w-fit">
            Contact us For More Information
          </Button>
        </div>
      </div>
    </section>
  );
}
