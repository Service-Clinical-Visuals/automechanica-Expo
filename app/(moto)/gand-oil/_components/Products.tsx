"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "./Container";

const products = [
  {
    key: "1",
    src: "/moto/gand-oil/product/1.png",
    label: "Petrols Engine Oils",
  },
  {
    key: "2",
    src: "/moto/gand-oil/product/2.png",
    label: "Diesel Engine Oils",
  },
  {
    key: "3",
    src: "/moto/gand-oil/product/3.png",
    label: "Motorcycle Lubricants",
  },
];

export default function Products() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="relative bg-black pt-24 pb-20 overflow-hidden">
      <Container>
        {/* Heading */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center mb-14 px-4">
          <span
            className=" absolute heading2 text-center z-5 mt-[-30px]"
          >
            Products
          </span>
          <h2 data-aos="fade-up" className="heading mb-4">Our Product Range</h2>
          <p data-aos="fade-up" data-aos-delay="100" className="content max-w-[940px]">
            Explore our range of high-quality lubricants designed to deliver reliable protection,
            improved efficiency, and long-lasting performance. From diesel and petrol engine oils
            to agricultural lubricants, motorcycle oils, gear oils, and hydraulic fluids, our
            products help reduce wear, enhance equipment reliability, and keep engines performing
            at their best.
          </p>
        </div>

        {/* Product cards */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[55fr_25fr_25fr] gap-4 xl:gap-10">
          {products.map((product, i) => {
            const isHovered = hovered === product.key;
            return (
              <div
                key={product.key}
                onMouseEnter={() => setHovered(product.key)}
                onMouseLeave={() => setHovered(null)}
                data-aos="fade-up"
                data-aos-delay={i * 120}
                className={`relative overflow-hidden rounded-2xl cursor-pointer h-[280px] sm:h-[340px] xl:h-[556px] ${i === 0 ? "sm:col-span-2 xl:col-span-1" : ""}`}
              >
                {/* Image */}
                <Image
                  src={product.src}
                  alt={product.label}
                  fill
                  className="object-cover transition-transform duration-500"
                  style={{ transform: isHovered ? "scale(1.04)" : "scale(1)" }}
                />

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 bg-black/70 flex flex-col justify-end p-6 gap-4 transition-opacity duration-300"
                  style={{ opacity: isHovered ? 1 : 0 }}
                >
                  <p className="subheading text-right">{product.label}</p>
                  <div className="flex items-center justify-end gap-0">
                    <button className="bg-[#1a1a1a]/80 border border-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-full whitespace-nowrap hover:bg-[#222] transition-colors">
                      View Products
                    </button>
                    <Image
                      src="/moto/gand-oil/arrow_green.png"
                      alt="Go"
                      width={44}
                      height={44}
                      className="w-11 h-11 object-contain -ml-1 flex-shrink-0"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
 