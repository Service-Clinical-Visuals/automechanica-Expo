"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";

const products = [
  {
    img: "/moto/eurolub/products/1.png",
    title: "Engine Oils",
    description: "Premium engine oils for superior protection and reliable performance.",
  },
  {
    img: "/moto/eurolub/products/2.png",
    title: "Gear Oils",
    description: "Advanced gear oils for efficient lubrication and lasting durability.",
  },
  {
    img: "/moto/eurolub/products/3.png",
    title: "Industrial lubricants",
    description: "Reliable lubrication solutions for efficient industrial operations.",
  },
  {
    img: "/moto/eurolub/products/4.png",
    title: "Winter Chemistry",
    description: "Reliable winter chemistry products for safe and efficient operation.",
  },
];

function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <div className="bg-[#F2F4F8] rounded-lg px-10 py-12 pt-18 flex flex-col h-full" data-aos="fade-up">
      <div className="flex items-center justify-center h-[170px] mb-4">
        <img src={product.img} alt={product.title} className="max-w-full max-h-full object-contain" />
      </div>

      <h3 className="subheading text-[24px]! font-semibold! text-center mb-5">
        {product.title}
      </h3>
      <p className="content text-center">{product.description}</p>

      <div className="mt-6 flex justify-end">
        <Link
          href="#"
          aria-label={`View ${product.title}`}
          className="w-9 h-9 rounded-full bg-[#004A72] flex items-center justify-center hover:bg-primary-hover transition-colors"
        >
          <ArrowRight size={20} className="text-white" />
        </Link>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section className="relative w-full bg-white py-16 md:py-24" id="products">
      <Container>
        {/* Header row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-10" data-aos="fade-up">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#004A72] shrink-0" />
              <span className="content font-semibold! text-[#004A72]! uppercase tracking-wide">
                Products
              </span>
            </div>
            <h2 className="heading leading-[36px]! max-w-[720px]">
              Explore our range of premium lubricants designed for different automotive
              applications.
            </h2>
          </div>

          <Link
            href="#"
            className="navlink text-[#004A72]! text-[16px]! font-semibold! uppercase underline underline-offset-4 whitespace-nowrap mt-1 shrink-0"
          >
            View More
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10" data-aos="fade-up">
          {products.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
