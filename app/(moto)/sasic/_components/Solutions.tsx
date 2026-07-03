"use client";

import { useState } from "react";
import Container from "./Container";

const products = [
  { name: "Antivibratoire", img: "/moto/sasic/products/1.png" },
  { name: "Ground Connection", img: "/moto/sasic/products/2.png" },
  { name: "Engine", img: "/moto/sasic/products/3.png" },
  { name: "Cooling", img: "/moto/sasic/products/4.png" },
  { name: "Braking", img: "/moto/sasic/products/5.png" },
  { name: "Clutch", img: "/moto/sasic/products/6.png" },
  { name: "Sound & Electronics", img: "/moto/sasic/products/7.png" },
];

const PER_PAGE = 4;

function ViewProductButton() {
  return (
    <button
      className="inline-flex items-center justify-center bg-primary hover:bg-[#e09a2c] transition-colors px-6 py-2.5"
      style={{ clipPath: "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)" }}
    >
      <span className="heading text-[#1A1A1A] text-[20px]! font-medium! uppercase">View Product</span>
    </button>
  );
}

export default function Solutions() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(products.length / PER_PAGE);

  const visible = products.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="py-16">
      <Container className="bg-[#242533] py-14 rounded-[24px]!">
        <div className="px-4 sm:px-8 md:px-14 lg:px-[100px]">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-10" data-aos="fade-up">
            <div>
            <span className="block h-[3px] w-14 bg-[#F2A93B] mb-3" />
            <h2 className="heading-white uppercase mb-3 -mt-1">Our Product Range</h2>
            </div>
            <p className="content-white max-w-2xl text-[16px]! leading-[28px]!">
              Experience consistent braking power, no matter how intense the drive. Our products
              ensure safety and reliability in every situation.
            </p>
          </div>

          {/* Product cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visible.map((product, i) => (
              <div
                key={product.name}
                className="bg-white rounded-xl overflow-hidden flex flex-col p-3"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {/* Image */}
                <div className="w-full aspect-[347/296] rounded-md overflow-hidden bg-gray-100">
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
                <div className="flex flex-col items-center gap-3 px-3 py-5">
                  <h3 className="heading text-[#1A1A1A] text-center uppercase text-[26px]!">
                    {product.name}
                  </h3>
                  <ViewProductButton />
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
                  className={`h-2.5 w-10 rounded-full transition-colors duration-300 ${
                    i === page ? "bg-primary" : "bg-[#E5E5E5]"
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
