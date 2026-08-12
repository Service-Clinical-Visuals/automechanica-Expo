"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { motion } from "framer-motion";

export default function ProductExperience() {
  return (
    <section className="w-full bg-[#f3f5f7] px-5 py-10 md:px-8 md:py-14 xl:px-10 xl:py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-[1200px] text-center"
      >
         <motion.h2
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-oswald text-[26px] font-semibold leading-[150%] text-[#272727] sm:text-[28px] md:text-[32px]"
            >
          360° Product Experience
        </motion.h2>

        <p className="mx-auto mt-4 max-w-[900px] font-rubik text-[16px] font-normal leading-[150%] text-[#4B5563] md:text-[18px]">
          Explore the engineering behind Güneş engine valves, showcasing
          advanced manufacturing techniques, quality materials, and
          precision craftsmanship designed to deliver durability,
          reliability, and superior engine performance.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className="relative mx-auto mt-8 w-full max-w-[1200px] aspect-video overflow-hidden rounded-[24px] bg-[#E9EBEF] md:mt-10 md:rounded-[32px] xl:rounded-[42px]"
      >
       <div className="absolute inset-0 z-0 ">
              <DynamicVideoPlayer type="360" />
            </div>

        <motion.button
          type="button"
          aria-label="View 360 product experience"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          transition={{ duration: 0.2 }}
          className="group absolute bottom-0 right-0 flex h-14 w-14 items-center justify-center rounded-full border border-[#D9000D] bg-white transition-colors hover:bg-[#D9000D] md:h-[88px] md:w-[88px]"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            className="h-8 w-8 md:h-9 md:w-9"
          >
            <path
              d="M7 17L17 7M17 7H9M17 7V15"
              stroke="#D9000D"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-white"
            />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  );
}