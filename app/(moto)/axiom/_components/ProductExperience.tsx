"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function ProductExperience() {
  return (
    <section className="relative w-full h-auto md:h-auto xl:h-[978.94px] py-16 md:py-20 xl:py-0 overflow-hidden flex items-center">
      <img
        src="/moto/axiom/bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      <div className="custom-container relative z-10 flex flex-col items-center text-center mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="section-title text-white max-w-[649px] min-[1920px]:max-w-[800px] min-[2560px]:max-w-[1000px] mt-6 mb-6"
        >
          Precision Manufacturing in Every Component
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="body-text text-white max-w-[886px] min-[1920px]:max-w-[1100px] min-[2560px]:max-w-[1350px] mb-10"
        >
          Behind every AXIOM product lies an advanced manufacturing process
          powered by cutting-edge machinery, automated production lines, and
          highly experienced engineers. Every gasket and radiator is
          manufactured using precision-controlled processes that ensure
          consistent quality from raw materials to finished products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="relative w-full max-w-[1115px] min-[1920px]:max-w-[1400px] min-[2560px]:max-w-[1700px] h-[400px] md:h-[500px] xl:h-[601px] min-[1920px]:h-[700px] min-[2560px]:h-[850px] rounded-3xl overflow-hidden mb-10"
        >
          <DynamicVideoPlayer
            type="360"
            className="absolute aspect-video inset-0 w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mb-4"
        >
          <Button
            href="#"
            bgColor="#FFFFFF"
            textColor="#003344"
            className="!font-semibold"
          >
            Explore All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
}