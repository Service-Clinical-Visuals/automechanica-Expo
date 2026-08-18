"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

const categories = [
  "Gasket 1",
  "Gasket 2",
  "Radiator 1",
  "Radiator 2",
] as const;

const productsByCategory: Record<
  string,
  { title: string; image: string }[]
> = {
  "Gasket 1": [
    {
      title: "Gasket, Intake",
      image: "/moto/axiom/p1.png",
    },
    {
      title: "Gasket, Oil Pan",
      image: "/moto/axiom/p2.png",
    },
    {
      title: "Gasket, Oil Pan",
      image: "/moto/axiom/p3.png",
    },
    {
      title: "Gasket, Intake",
      image: "/moto/axiom/p1.png",
    },
    {
      title: "Gasket, Oil Pan",
      image: "/moto/axiom/p2.png",
    },
    {
      title: "Gasket, Oil Pan",
      image: "/moto/axiom/p3.png",
    },
  ],

  "Gasket 2": [
    {
      title: "Gasket, Intake",
      image: "/moto/axiom/p2.png",
    },
    {
      title: "Gasket, Oil Pan",
      image: "/moto/axiom/p3.png",
    },
    {
      title: "Gasket, Oil Pan",
      image: "/moto/axiom/p1.png",
    },
    {
      title: "Gasket, Intake",
      image: "/moto/axiom/p2.png",
    },
    {
      title: "Gasket, Oil Pan",
      image: "/moto/axiom/p3.png",
    },
  ],

  "Radiator 1": [
    {
      title: "Gasket, Oil Pan",
      image: "/moto/axiom/p3.png",
    },
    {
      title: "Gasket, Intake",
      image: "/moto/axiom/p1.png",
    },
    {
      title: "Gasket, Oil Pan",
      image: "/moto/axiom/p2.png",
    },
    {
      title: "Gasket, Oil Pan",
      image: "/moto/axiom/p3.png",
    },
    {
      title: "Gasket, Intake",
      image: "/moto/axiom/p1.png",
    },
    {
      title: "Gasket, Oil Pan",
      image: "/moto/axiom/p2.png",
    },
  ],

  "Radiator 2": [
    {
      title: "Gasket, Oil Pan",
      image: "/moto/axiom/p1.png",
    },
    {
      title: "Gasket, Inta",
      image: "/moto/axiom/p2.png",
    },
  ],
};

function ProductCard({
  product,
}: {
  product: { title: string; image: string };
}) {
  return (
    <div
      className="flex w-full flex-col items-center rounded-2xl bg-[#FCFCFC] px-6 pt-6 pb-8"
      style={{ border: "1px solid rgba(0,0,0,0.2)" }}
    >
      <div
        className="mb-6 flex h-[191px] w-full items-center justify-center overflow-hidden rounded-2xl bg-white"
        style={{ border: "1px solid #D9D9D9" }}
      >
        <img
          src={product.image}
          alt={product.title}
          className="block h-full w-full object-cover"
        />
      </div>    

      <h3 className="card-title mt-2 mb-8 text-center text-black">
        {product.title}
      </h3>

      <Button href="#" bgColor="#003344" textColor="#FFFFFF">
        Explore Product
      </Button>
    </div>
  );
}

export default function AllProducts() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("Gasket 1");

  const products = productsByCategory[activeCategory];

  const needsCarousel = products.length > 3;

  return (
    <section className="w-full py-16 md:py-20 xl:py-[100px]">
      <div className="custom-container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mb-10 text-center"
        >
          <p className="section-label mb-4 text-[#003344]">
            Our Products
          </p>

          <h2 className="section-title mx-auto max-w-[622px] text-[#111111]">
            Comprehensive Automotive Product Portfolio
          </h2>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`btn-shape btn-text h-[46px] px-[39px] py-[13px] transition-colors ${
                activeCategory === cat
                  ? "bg-[#003344] text-white"
                  : "bg-[#F1F1F1] text-[#111111] hover:bg-[#e5e5e5]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Products */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
          >
            {needsCarousel ? (
              <>
                <Swiper
                  key={activeCategory}
                  modules={[Autoplay, Pagination]}
                  spaceBetween={24}
                  slidesPerView={1}
                  slidesPerGroup={1}
                  loop={true}
                  rewind={false}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                  }}
                  pagination={{
                    clickable: true,
                    el: ".all-products-pagination",
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      slidesPerGroup: 1,
                      spaceBetween: 32,
                    },
                    1024: {
                      slidesPerView: 3,
                      slidesPerGroup: 1,
                      spaceBetween: 45,
                    },
                  }}
                >
                  {products.map((product, index) => (
                    <SwiperSlide key={`${activeCategory}-${index}`}>
                      <ProductCard product={product} />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="all-products-pagination mt-10 flex justify-center gap-2" />
              </>
            ) : (
              <div className="flex flex-wrap justify-center gap-[45px]">
                {products.map((product, index) => (
                  <div
                    key={`${activeCategory}-${index}`}
                    className="w-full sm:w-[calc(50%-23px)] lg:w-[510px]"
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}