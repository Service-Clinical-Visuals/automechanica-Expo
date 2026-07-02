"use client";

import { useState } from "react";
import Container from "./Container";

const products = [
  { img: "/moto/intercar/products/1.png", name: "BRAKES" },
  { img: "/moto/intercar/products/2.png", name: "CLUTCHES" },
  { img: "/moto/intercar/products/3.png", name: "CONCENTRIC SLAVE CYLINDERS" },
  { img: "/moto/intercar/products/4.png", name: "C.V. JOINTS" },
  { img: "/moto/intercar/products/5.png", name: "BRAKE DISCS" },
  { img: "/moto/intercar/products/6.png", name: "WATER PUMPS" },
  { img: "/moto/intercar/products/7.png", name: "DISTRIBUTION KITS WITH WATER PUMP" },
  { img: "/moto/intercar/products/8.png", name: "BRAKE HOSES AND CABLES" },
];

const VISIBLE = 4;
const TOTAL_DOTS = products.length - VISIBLE + 1;

export default function Products() {
  const [page, setPage] = useState(0);

  const visible = products.slice(page, page + VISIBLE);

  return (
    <section className="bg-white py-16">
      <Container>
        {/* Heading */}
        <div className="max-w-[1250px] mx-auto text-center px-6 mb-10" data-aos="fade-up">
          <h2 className="heading mb-4">Premium Automotive Solutions</h2>
          <p className="content">
            Our comprehensive product portfolio is designed to meet the highest standards of quality,
            safety, and performance. From braking and clutch systems to driveline and engine components,
            every product is engineered with precision to deliver reliable operation, long-lasting
            durability, and extensive vehicle coverage for the global automotive aftermarket.
          </p>
        </div>

        <hr className="border-t border-gray-200 mb-10" />

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
          {visible.map((product, i) => (
            <div
              key={page + i}
              className="relative bg-white border-1 border-[#0000001A] shadow-sm flex flex-col items-center pt-6 pb-5 px-4 w-full max-w-[400px]"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <div className="w-full aspect-[4/3] flex items-center justify-center mb-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <p className="content text-primary! text-[22px]! font-bold text-center mb-2 tracking-wide">
                {product.name}
              </p>
              <a
                href="#"
                className="content text-[16px]! font-medium! leading-[100%]! text-[#1A1A1A]! underline underline-offset-2"
              >
                Read More &gt;&gt;&gt;
              </a>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: TOTAL_DOTS }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`h-2.5 rounded-full transition-all ${
                page === i ? "w-8 bg-[#CF3232]" : "w-8 bg-gray-300"
              }`}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
