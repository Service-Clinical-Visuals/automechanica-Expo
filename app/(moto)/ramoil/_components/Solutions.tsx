"use client";

import { useState } from "react";
import Container from "./Container";
import ParallelogramButton from "./ParallelogramButton";

const products = [
  { name: "White Mineral Oils",        img: "/moto/ramoil/solutions/solutions1.png" },
  { name: "Dielectric Oils and Gases", img: "/moto/ramoil/solutions/solutions2.png" },
  { name: "Vaseline",                  img: "/moto/ramoil/solutions/solutions3.png" },
  { name: "Lubricating Oils",          img: "/moto/ramoil/solutions/solutions4.png" },
  { name: "Fuel oils",                 img: "/moto/ramoil/solutions/solutions5.png" },
];

const PER_PAGE = 3;

export default function Solutions() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(products.length / PER_PAGE);

  // Always show exactly PER_PAGE cards — wrap around if the last slide is short
  const visible = Array.from({ length: PER_PAGE }, (_, i) => {
    const idx = (page * PER_PAGE + i) % products.length;
    return products[idx];
  });

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="px-4 sm:px-8 md:px-14 lg:px-[100px]">
            {/* Header row */}
            <div className="flex items-center justify-between mb-6" data-aos="fade-up">
            <h2 className="heading text-[#00437A]">Tailor-made solutions for every need</h2>

            <ParallelogramButton>Explore All Products</ParallelogramButton>
            </div>

            <hr className="border-t border-gray-200 mb-10" />

            {/* Product cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((product, i) => (
                <div
                key={i}
                className="border border-gray-200 rounded-lg overflow-hidden flex flex-col p-4"
                data-aos="fade-up"
                data-aos-delay={i * 100}
                >
                {/* Image */}
                <div className="w-full aspect-[488/328] bg-gray-100 overflow-hidden">
                    <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        (e.target as HTMLImageElement).style.background = "#e5e7eb";
                    }}
                    />
                </div>

                {/* Card body */}
                <div className="flex flex-col items-center gap-4 px-6 py-6">
                    <h3 className="heading text-[#1E1E1E] text-center font-normal text-[32px]!">{product.name}</h3>
                    <ParallelogramButton size="sm">View Product</ParallelogramButton>
                </div>
                </div>
            ))}
            </div>

            {/* Pagination dots */}
            {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-10">
                {Array.from({ length: totalPages }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                    i === page ? "bg-[#00437A] w-8" : "bg-gray-300 w-4"
                    }`}
                    aria-label={`Page ${i + 1}`}
                />
                ))}
            </div>
            )}
        </div>
      </Container>
    </section>
  );
}
