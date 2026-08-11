"use client";

import { motion } from "framer-motion";
import Button from "./Button";

export default function Categories() {
  return (
    <section className="w-full py-16 md:py-20 xl:py-[100px]">
      <div className="custom-container flex flex-col xl:flex-row items-center gap-10 xl:gap-[45px]">
        {/* Left: text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full xl:w-[511px] flex-shrink-0"
        >
          <p className="section-label text-[#003344] mb-4">Categories</p>
          <h2 className="section-title text-[#111111] mb-6">
            Explore Our Product Categories
          </h2>
          <p className="body-text text-[#444444] mb-8">
            Whether you need engine sealing solutions or advanced cooling
            systems, AXIOM delivers precision-engineered components
            manufactured to international standards. Every product undergoes
            strict inspections to ensure superior durability, dimensional
            accuracy, and long service life.
          </p>
          <Button href="#" bgColor="#003344" textColor="#FFFFFF">
            Explore All Products
          </Button>
        </motion.div>

        {/* Right: category cards */}
        <div className="w-full flex flex-col sm:flex-row gap-6 xl:gap-[45px]">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full sm:w-1/2 h-[300px] xl:h-[440px] overflow-hidden"
          >
            <img
              src="/moto/axiom/prod2.png"
              alt="Gasket"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center text-center px-4">
              <h3 className="card-title text-2xl text-white mb-3">Gasket</h3>
              <p className="body-text text-white">
                Engine sealing solutions for maximum leak protection.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="relative w-full sm:w-1/2 h-[300px] xl:h-[440px] overflow-hidden"
          >
            <img
              src="/moto/axiom/prod1.jpg"
              alt="Radiator"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center text-center px-4">
              <h3 className="card-title text-2xl text-white mb-3">Radiator</h3>
              <p className="body-text text-white">
                Efficient heat dissipation for optimal engine temperature.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}