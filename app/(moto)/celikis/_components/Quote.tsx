"use client";

import React from "react";
import Button from "./Button";

export default function Quote() {
  return (
    <section className="py-8 md:py-16 bg-[#F5F7FA]">
      <div className="custom-container flex flex-col items-center justify-center text-center">
        <div data-aos="fade-up" className="max-w-6xl mx-auto">
          <h2 className="section-title text-[#0D161E] font-semibold italic  mb-8">
            "Our range of precision-manufactured gears and transmission components, developed with advanced technology, delivers high performance, durability, and accuracy."
          </h2>
          <Button href="#" variant="primary">
            Explore Products
          </Button>
        </div>
      </div>
    </section>
  );
}
