"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
        relative
        h-[calc(100dvh-100px)]
        w-full
        overflow-hidden

        max-[1279px]:h-[calc(100dvh-90px)]
        max-[768px]:h-[calc(100dvh-80px)]
        max-[480px]:h-[calc(100dvh-72px)]
      ">
      {/* Background video */}
      <div className="absolute inset-0 z-0 ">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover object-fill"
        />
      </div>

      {/* Content */}
      <div
        className="
          container
          relative
          z-10
          flex
          h-full
          flex-col
          justify-end
          pb-[40px]

          sm:pb-[55px]
          md:pb-[65px]
          xl:pb-[80px]
          xl:pb-[90px]
        ">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="
            font-oswald
            text-[28px]
            font-semibold
            leading-[150%]
            text-white

            sm:whitespace-nowrap
            sm:text-[26px]
            md:text-[32px]
            xl:text-[38px]
            xl:text-[44px]
            2xl:text-[48px]
          ">
          Brake Discs for Superior Performance
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="
            mt-[16px]
            max-w-[665px]
            font-rubik
            text-[15px]
            font-normal
            leading-[150%]
            text-white

            sm:text-[16px]
            md:text-[17px]
            xl:text-[18px]
          ">
          Reliable brake discs delivering consistent performance, heat control,
          and durability for safe braking.
        </motion.p>
      </div>
    </section>
  );
}
