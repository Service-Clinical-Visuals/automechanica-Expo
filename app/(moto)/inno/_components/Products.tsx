"use client";

import React from "react";
import Button from "./Button";
import Link from "next/link";

export default function Products() {
  const products = [
    {
      image: "/moto/inno/p1.png",
      title: "Piston"
    },
    {
      image: "/moto/inno/p2.png",
      title: "Piston Ring"
    },
    {
      image: "/moto/inno/p3.png",
      title: "Liner"
    },
    {
      image: "/moto/inno/p4.png",
      title: "Valve Guide"
    }
  ];

  return (
    <section className="py-16 xl:py-20 bg-white">
      <div className="custom-container">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-10" data-aos="fade-up">
          <h2 className="section-title exo2-font font-bold text-[#000000] mb-6">
            Our Products
          </h2>
          <p className="text-[#111111] inter-font section-text font-regular max-w-7xl mx-auto leading-relaxed">
            Engineered for precision, durability, and outstanding performance, Inno Piston's product range is designed to meet the demanding requirements of modern automotive and industrial engines. From high-performance pistons and piston rings to precision-manufactured cylinder liners, every component is crafted using advanced materials, innovative manufacturing processes, and rigorous quality control to ensure maximum efficiency, reliability, and long service life. Whether for passenger vehicles, commercial fleets, or heavy-duty machinery, our products deliver the performance trusted by customers worldwide.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 xl:gap-10 mb-8" data-aos="fade-up" data-aos-delay="200">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col w-full bg-white border border-gray-200 border-b-[2px] shadow-sm rounded-[5px] group transition-shadow hover:shadow-md overflow-hidden">
              {/* Image Container */}
              <div className="w-full h-full flex items-center justify-center bg-white">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full text-gray-400 flex items-center justify-center">Image</div>' }}
                />
              </div>

              {/* Content */}
              <div className="p-3 flex flex-col items-center flex-grow">
                <h3 className="exo2-font text-[#000000] card-title font-semibold mb-3 text-center">
                  {product.title}
                </h3>

                <Button href="#" className="w-max mb-1 text-center mt-auto">
                  View Product
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Link */}
        <div className="flex justify-end" data-aos="fade-up" data-aos-delay="300">
          <Link href="#" className="text-[#FF383C] section-text font-regular hover:text-[#d95222] underline decoration-[1px] transition-colors hover:underline text-[15px]">
            View All Products
          </Link>
        </div>

      </div>
    </section>
  );
}

