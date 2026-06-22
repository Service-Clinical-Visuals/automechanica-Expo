"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = ["Industrial", "Maritime", "Agriculture"];

const products = [
  {
    name: "THOR EP2",
    description:
      "Synmar Thor EP2 is a lithium-thickened lubricating grease based on mineral oil and contains antioxidants, corrosion inhibitors and...",
    image: "/moto/synmar/ourproduct1.png",
  },
  {
    name: "ADBLUE",
    description:
      "The Synmar AdBlue is increasingly being used in passenger cars and vans to meet stringent environmental requirements. Synmar AdBlue...",
    image: "/moto/synmar/ourproduct2.png",
  },
  {
    name: "OPTISPRAY",
    description:
      "The Synmar OptiSpray is especially developed for agricultural, transportation applications and other instances where engines...",
    image: "/moto/synmar/ourproduct3.png",
  },
];

export default function OurProductsSection() {
  const [activeCategory, setActiveCategory] = useState("Industrial");

  return (
    <section className="bg-[#1a1a1a] twok">
      {/* Dark header area */}
      <div className="mx-auto max-w-[90%] pt-16 pb-32 mb-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* Left: title + description */}
          <div data-aos="fade-right">
            <h2 className="heading mb-4 text-[#D4B161]!">
              Our Products
            </h2>
            <p className="content-white">
              Synmar delivers high-quality lubricant and fluid solutions for automotive, industrial, agricultural, maritime,<br /> and heavy-duty applications, ensuring reliable performance, maximum protection, and long-lasting efficiency.
            </p>
          </div>

          {/* Right: arrows + category pills */}
          <div data-aos="fade-left" data-aos-delay="150" className="flex items-center gap-3 flex-wrap">
            <button className="w-10 h-10 rounded-[5px] bg-[#c9a84c] flex items-center justify-center text-white hover:bg-[#b8973b] transition-colors flex-shrink-0">
              <ChevronLeft size={20} />
            </button>

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-[5px] border text-sm font-medium border-[#c9a84c] text-[white] bg-transparent`}
              >
                {cat}
              </button>
            ))}

            <button className="w-10 h-10 rounded-[5px] bg-[#c9a84c] flex items-center justify-center text-white hover:bg-[#b8973b] transition-colors flex-shrink-0">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Cards — pulled up over the dark section */}
      <div className="bg-white">
        <div className="mx-auto max-w-[90%]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -translate-y-24">
            {products.map((product, index) => (
              <div
                key={product.name}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm flex flex-col"
              >
                {/* Product image */}
                <div className="relative w-full aspect-4/3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-3">
                  <h3 className="subheading font-bold!">
                    {product.name}
                  </h3>
                  <p className="content">
                    {product.description}
                  </p>
                  <span className="text-[#c9a84c] text-sm font-semibold cursor-pointer hover:underline mt-1">
                    Read More &gt;&gt;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
