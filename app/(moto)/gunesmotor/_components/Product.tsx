"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    title: "Engine Valves",
    description:
      "Precision components designed for efficient airflow and reliable performance.",
    image: "/moto/gunesmotor/prod2.png",
  },
  {
    title: "Motor Guides",
    description:
      "Technical alloys designed for durable, heat-resistant, and wear-resistant components.",
    image: "/moto/gunesmotor/prod3.png",
  },
  {
    title: "Valve Seat",
    description:
      "Bushings and valves ensure engine sealing and prevent combustion chamber pressure loss.",
    image: "/moto/gunesmotor/prod1.png",
  },
];

export default function Products() {
  return (
    <section className="w-full pt-16 pb-10 sm:pt-20 sm:pb-12 md:pt-24 md:pb-14 xl:pt-[100px] xl:pb-16">
      <div className="container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 text-center"
        >
          <h2 className="font-oswald text-[32px] font-semibold leading-[150%] text-[#272727]">
            Our Products
          </h2>

          <p className="mx-auto mt-4 max-w-[900px] font-rubik text-[16px] font-normal leading-[150%] text-[#4B5563] md:text-[18px]">
            Explore Güneş Motor Supapları&apos;s high-quality engine
            components, engineered with advanced technology and durable
            materials for reliable performance.
          </p>
        </motion.div>

        {/* Product cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid w-full grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-[20px]"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className={`group/card relative flex h-full w-full max-w-[502px] flex-col rounded-[10px] border border-[#E4E4E4] bg-white p-4 transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] ${index === 2 ? "sm:col-span-2 xl:col-span-1" : ""}`}
            >
              {/* Product image */}
              <div className="relative aspect-[502/309] w-full overflow-hidden rounded-[10px] border border-[#E4E4E4] bg-white">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain transition-transform duration-500 ease-out group-hover/card:scale-[1.06]"
                />
              </div>

              {/* Product content */}
              <div className="flex flex-1 flex-col pr-[65px] pb-6 pt-6">
                <h3 className="font-oswald text-[22px] font-semibold leading-[150%] text-[#272727] md:text-[24px]">
                  {product.title}
                </h3>

                <p className="mt-2 font-rubik text-[16px] font-normal leading-[150%] text-[#4B5563] md:text-[18px]">
                  {product.description}
                </p>
              </div>

              {/* Arrow button */}
              <motion.button
                type="button"
                aria-label={`View ${product.title}`}
                whileHover={{ scale: 1.1, rotate: 8 }}
                whileTap={{ scale: 0.92 }}
                transition={{ duration: 0.2 }}
                className="group absolute bottom-4 right-4 flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#D9000D] bg-white transition-colors hover:bg-[#D9000D]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 17 15"
                  fill="none"
                  className="h-5 w-5"
                >
                  <path
                    d="M1 14L16 1M16 1H6M16 1V11"
                    stroke="#D9000D"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-colors group-hover:stroke-white"
                  />
                </svg>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}