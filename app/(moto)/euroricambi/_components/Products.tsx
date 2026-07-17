"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Container from "./Container";

const products = [
  {
    img: "/moto/euroricambi/products/1.png",
    title: "Gearboxes and Differentials",
    desc: "Our spare parts are fully interchangeable with the originals and are carefully manufactured using the most advanced production systems.",
  },
  {
    img: "/moto/euroricambi/products/2.png",
    title: "Earthmoving and Mining",
    desc: "An internal department entirely dedicated to Earthmoving and Mining steadily upholds the quality standards of the Euroricambi Group even on the...",
  },
  {
    img: "/moto/euroricambi/products/3.png",
    title: "Customized Production",
    desc: "Relying on forty years of experience in the industry and the best machinery on the market, we can have our factories produce full provisions from...",
  },
  {
    img: "/moto/euroricambi/products/4.png",
    title: "Complementary parts",
    desc: "We select the parts which complement our spare parts directly from the original manufacturers (Premium OE brand) or from selected and...",
  },
  {
    img: "/moto/euroricambi/products/5.png",
    title: "Technology and Quality",
    desc: "Technological innovation lies at the heart of our success. This is why our spare parts are manufactured using the most advanced production...",
  },
  {
    img: "/moto/euroricambi/products/6.png",
    title: "Metallurgical Laboratory",
    desc: "A state-of-the-art in-house department, equipped with advanced technologies and specialised skills to analyse materials, treatments and...",
  },
];

const PER_PAGE = 3;
const AUTO_ROTATE_MS = 5000;

function ProductCard({ p, delay }: { p: (typeof products)[number]; delay: number }) {
  return (
    <div data-aos="fade-up" data-aos-delay={delay}>
      <img src={p.img} alt={p.title} className="w-full object-contain rounded-2xl" />

      <div className="relative -mt-24 mx-4 bg-white rounded-2xl shadow-lg px-6 pt-8 pb-6">
        <span
          className="heading-white absolute left-6 -top-4 text-white text-[18px]! font-medium! px-12 py-1.5 rounded-full shadow-md"
          style={{
            border: "1px solid transparent",
            backgroundImage:
              "linear-gradient(var(--color-primary), var(--color-primary)), linear-gradient(180deg, #FFFFFF, #7B868C)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          }}
        >
          View More
        </span>
        <h3 className="heading2 mb-2 mt-2">{p.title}</h3>
        <p className="content text-[16px]! leading-relaxed">{p.desc}</p>
      </div>
    </div>
  );
}

export default function Products() {
  const pageCount = Math.ceil(products.length / PER_PAGE);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPage((p) => (p + 1) % pageCount);
    }, AUTO_ROTATE_MS);
    return () => clearInterval(id);
  }, [pageCount]);

  const visible = products.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="px-4 sm:px-8 md:px-14 lg:px-[100px]">
          {/* Heading + intro copy */}
          <div className="text-center max-w-[1200px] mx-auto mb-12" data-aos="fade-up">
            <h2 className="heading mb-4">Products And Quality</h2>
            <p className="content">
              The drive to be better and continuously improve is at the core of everything we do.
              Through constant innovation, advanced engineering, and uncompromising quality standards,
              we develop products that deliver exceptional performance and unmatched reliability.
              Every solution is designed to meet the evolving demands of modern vehicles while
              ensuring durability, safety, and customer satisfaction.
            </p>
          </div>

          {/* Product cards — desktop: 3-per-page grid with segmented pagination */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-3 gap-6">
              {visible.map((p, i) => (
                <ProductCard key={p.title} p={p} delay={i * 100} />
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-10">
              {Array.from({ length: pageCount }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPage(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 w-20 rounded-full transition-colors ${
                    page === i ? "bg-[#6FAF3C]" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Product cards — mobile: swiper with all slides */}
          <div className="lg:hidden">
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={1}
              spaceBetween={24}
              loop
              autoplay={{ delay: AUTO_ROTATE_MS, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              style={{
                "--swiper-pagination-color": "#6FAF3C",
                "--swiper-pagination-bullet-inactive-color": "#e5e7eb",
                "--swiper-pagination-bullet-inactive-opacity": "1",
              } as React.CSSProperties}
              className="!pb-10"
            >
              {products.map((p, i) => (
                <SwiperSlide key={p.title}>
                  <ProductCard p={p} delay={i * 100} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
}
