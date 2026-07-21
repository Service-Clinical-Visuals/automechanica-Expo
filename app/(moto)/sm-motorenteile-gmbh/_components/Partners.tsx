"use client";

import React from "react";
import { Settings } from "lucide-react";

const partners = [
  { img: "/moto/sm-motorenteile-gmbh/partner1.png", name: "Scania" },
  { img: "/moto/sm-motorenteile-gmbh/partner2.png", name: "Volkswagen" },
  { img: "/moto/sm-motorenteile-gmbh/partner3.png", name: "MELAG" },
  { img: "/moto/sm-motorenteile-gmbh/partner4.png", name: "Mercedes-Benz" },
  { img: "/moto/sm-motorenteile-gmbh/partner5.png", name: "SABRU" },
  { img: "/moto/sm-motorenteile-gmbh/partner6.png", name: "Fraunhofer" },
  { img: "/moto/sm-motorenteile-gmbh/partner7.png", name: "Austro Engine" },
  { img: "/moto/sm-motorenteile-gmbh/partner8.png", name: "AVENTICS EMERSON" },
];

export default function Partners() {
  return (
    <section className="py-20 xl:py-20 bg-white">
      <div className="custom-container">
        {/* Heading */}
        <div className="flex items-center justify-center gap-3 mb-10" data-aos="fade-up">
          <img src="/moto/sm-motorenteile-gmbh/setting.png" alt="Setting" className="w-auto h-auto object-contain" />
          <h2 className="section-title text-[#1D1D1B] orbitron-font font-semibold">
            Our Partners
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 flex items-center justify-center p-6 md:p-8 2xl:p-12 min-h-[140px] md:min-h-[180px] 2xl:min-h-[260px]"
              data-aos="fade-up"
              data-aos-delay={i * 50}
            >
              <img
                src={partner.img}
                alt={partner.name}
                className="max-w-[80%] md:max-w-full max-h-[80px] 2xl:max-h-[140px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
