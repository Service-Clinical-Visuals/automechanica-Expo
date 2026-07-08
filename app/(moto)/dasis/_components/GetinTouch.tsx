"use client";

import React from "react";
import Link from "next/link";
import Container from "./Container";

export default function GetinTouch() {
  return (
    <section className="relative w-full bg-white py-0 h-[400px]" id="get-in-touch">
      <Container>
        <div
          className="relative rounded-2xl top-[100px] h-[393px] z-100 overflow-hidden bg-cover bg-center px-6 py-15  md:py-20 flex flex-col items-center text-center gap-5"
          style={{ backgroundImage: "url(/moto/dasis/getintouch.png)" }}
          data-aos="fade-up"
        >
          <h2 className="heading-white text-[34px]! mt-2">Get in Touch With Us</h2>
          <p className="content-white text-[24px]! mt-4">
            We are happy to advise you personally &ndash; <br />regardless of whether you are a
            commercial or industrial customer.
          </p>
            <button
                className="heading text-primary! rounded-tr-[16px] rounded-bl-[16px] text-[24px]! uppercase  bg-white px-10 py-0.5 hover:bg-white/90 transition-colors"
            >
                contact
            </button>
        </div>
      </Container>
    </section>
  );
}
