"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden flex flex-col justify-end">
      <div className="absolute inset-0 z-0">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="custom-container relative z-10 pb-16 md:pb-20 xl:pb-[113.86px]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hero-title text-white max-w-[441px] mb-6"
        >
          Your partner for all kinds of car parts!
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <Button
            href="#"
            bgColor="transparent"
            textColor="#FFFFFF"
            className="border border-white"
          >
            Explore Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
}