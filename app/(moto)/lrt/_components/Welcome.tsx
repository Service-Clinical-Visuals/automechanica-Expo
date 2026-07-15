"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "./Container";

const categories = [
  {
    key: "catalyst",
    label: "Catalytic Converters",
    products: [
      { img: "/moto/lrt/welcome/catalyst/1.png", title: "Blue Angel Replacement Catalytic Converter" },
      { img: "/moto/lrt/welcome/catalyst/2.png", title: "Upgrade Catalytic Converter" },
      { img: "/moto/lrt/welcome/catalyst/3.png", title: "Upgrade Catalytic Converter" },
    ],
  },
  {
    key: "manifoldCC",
    label: "Manifold Catalytic Converters",
    products: [
      { img: "/moto/lrt/welcome/manifoldCC/1.png", title: "Blue Angel Replacement Manifold Catalytic Converters" },
      { img: "/moto/lrt/welcome/manifoldCC/2.png", title: "Cast-Manifold Catalytic Converters" },
      { img: "/moto/lrt/welcome/manifoldCC/3.png", title: "Tubular Manifold Catalytic Converters" },
      { img: "/moto/lrt/welcome/manifoldCC/4.png", title: "Shell-Manifold Catalytic Converters" },
    ],
  },
  {
    key: "manifolds",
    label: "Manifolds",
    products: [
      { img: "/moto/lrt/welcome/manifolds/1.png", title: "Cast Manifolds" },
      { img: "/moto/lrt/welcome/manifolds/2.png", title: "Tubular Manifolds" },
      { img: "/moto/lrt/welcome/manifolds/3.png", title: "Shell Manifolds" },
    ],
  },
  {
    key: "accessories",
    label: "Accessories",
    products: [
      { img: "/moto/lrt/welcome/accessories/1.png", title: "Flex Pipes" },
      { img: "/moto/lrt/welcome/accessories/2.png", title: "Repair Pipes" },
      { img: "/moto/lrt/welcome/accessories/3.png", title: "Installation Kits" },
    ],
  },
];

export default function Welcome() {
  const [active, setActive] = useState(categories[0].key);
  const scrollerRef = useRef(null);

  const activeCategory = categories.find((c) => c.key === active);

  const scroll = (dir: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth + 32), behavior: "smooth" });
  };

  return (
    <section className="bg-[#121212] py-10">
      <Container>
        <div className="bg-[#323232] rounded-[24px] py-10 px-4 sm:px-8 md:px-14 lg:px-[60px]">

          {/* Top row: heading + circular arrow button */}
          <div className="flex items-start justify-between gap-6 mb-5" data-aos="fade-up">
            <div className="mb-4">
              <h2 className="heading mb-6">Welcome To Our Shop</h2>
              <p className="content max-w-[860px]">
                Discover a curated selection of high-quality products designed to elevate your projects. From advanced automotive components to cutting-edge manufacturing tools, engineered for exceptional performance, reliability, and lasting durability.
              </p>
            </div>

            <button className="flex items-center justify-center shrink-0 rounded-full bg-white text-[#121212] hover:opacity-90 transition-opacity" style={{ width: 56, height: 56 }}>
              <ArrowUpRight size={24} strokeWidth={2} />
            </button>
          </div>

          <hr className="border-t border-white/10 mb-12" />

          {/* Category tabs + carousel arrows */}
          <div className="flex flex-col xl:flex-row flex-wrap items-center justify-between gap-4 mb-8" data-aos="fade-up">
            <div className="flex flex-col xl:flex-row flex-wrap items-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActive(cat.key)}
                  className={`navlink text-[18px]! rounded-lg px-5 py-2 border transition-colors ${
                    active === cat.key
                      ? "bg-[#00337F] font-semibold! border-transparent text-white"
                      : "bg-[#05040459] font-regular! border-white text-white hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => scroll(-1)}
                className="flex items-center justify-center rounded-full bg-[#00337F] text-white hover:opacity-90 transition-opacity"
                style={{ width: 40, height: 40 }}
                aria-label="Previous products"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={() => scroll(1)}
                className="flex items-center justify-center rounded-full bg-[#00337F] text-white hover:opacity-90 transition-opacity"
                style={{ width: 40, height: 40 }}
                aria-label="Next products"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Product carousel */}
          <div
            ref={scrollerRef}
            className="flex items-stretch justify-[safe_center] gap-8 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            data-aos="fade-up"
          >
            {activeCategory?.products.map((p, i) => (
              <div key={i} className="bg-white max-w-fit flex flex-col items-center rounded-2xl p-4 shrink-0 grow-0 basis-full sm:basis-[calc((100%-32px)/2)] lg:basis-[calc((100%-64px)/3)]">
                <div className="border border-gray-300 rounded-md flex items-center justify-center overflow-hidden mb-4">
                  <img src={p.img} alt={p.title} className="w-full max-h-auto object-contain" />
                </div>
                <p className="subheading text-center text-[#212121]! text-[24px]!">{p.title}</p>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
