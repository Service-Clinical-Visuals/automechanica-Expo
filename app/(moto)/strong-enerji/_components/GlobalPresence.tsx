"use client";

import React from "react";
import Image from "next/image";

export default function GlobalPresence() {
  return (
    <section className="background relative w-full py-24 md:py-32 overflow-hidden flex items-center justify-center ">
     
      <div className="custom-container relative z-10 flex flex-col items-center text-center">
        <div className="max-w-5xl" data-aos="fade-up">
          <h2 className="section-title oswald font-semibold text-white mb-6">
            Precision Manufacturing in Every Component
          </h2>
          <p className="section-text dm-sans text-white leading-relaxed max-w-5xl mx-auto">
            Strong Energy has a strong international presence in the lubricant industry with its growing market network and
            high production capacity worldwide. Our company, which manages all processes from production to logistics, from
            sales to technical support according to global standards, exports to more than 50 countries. By developing
            products and solutions specific to the needs of each region, we aim to spread the understanding of sustainable
            quality worldwide. Thanks to the strong relationships we have established with our global business partners, we
            reinforce our position as a reliable solution partner in the fields of energy and industry.
          </p>
        </div>
      </div>
    </section>
  );
}
