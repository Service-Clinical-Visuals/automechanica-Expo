"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const features = [
  "High-Temperature & Corrosion Resistant Materials",
  "Nitrided, Chrome-Plated & Hardened Valve Treatments",
  "Wear-Resistant Valve Guide & Bushing Alloys",
  "Reliable Engine Sealing",
];

export default function Materials() {
  return (
    <section className="w-full bg-[#f3f5f7] py-16 sm:py-20 md:py-24 xl:py-[100px]">
      <div className="container">
        {/* Top: text + video */}
        <div className="flex w-full flex-col gap-10 xl:flex-row xl:items-center gap:8  xl:gap-10">
          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15, delayChildren: 0.1 },
              },
            }}
            className="flex w-full flex-col xl:w-5/12"
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-oswald text-[26px] font-semibold leading-[150%] text-[#272727] sm:text-[28px] md:text-[32px]"
            >
              Advanced Materials for Performance
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-6 font-rubik text-[16px] font-normal leading-[150%] text-[#4B5563] md:text-[18px]"
            >
              Engine valves, valve guides, and bushings are manufactured using
              specialized alloys to deliver reliable performance under
              demanding engine conditions. Designed to withstand high
              temperatures, friction, corrosion, and mechanical stress, they
              ensure efficient operation and long-lasting durability.
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-6 font-rubik text-[16px] font-normal leading-[150%] text-[#4B5563] md:text-[18px]"
            >
              Advanced treatments enhance component strength, minimize wear,
              improve corrosion resistance, and provide reliable sealing
              performance. These processes help extend service life while
              ensuring consistent engine performance under demanding
              operating conditions.
            </motion.p>

            <motion.ul
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.08 },
                },
              }}
              className="mt-8 flex flex-col gap-4"
            >
              {features.map((feature) => (
                <motion.li
                  key={feature}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3"
                >
                  <Image
                    src="/moto/gunesmotor/tick.png"
                    alt=""
                    width={21}
                    height={21}
                    className="h-[21px] w-[21px] shrink-0 object-contain"
                  />

                  <span className="font-rubik text-[16px] font-normal leading-[150%] text-[#4B5563] md:text-[18px]">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex w-full shrink-0 xl:w-7/12 xl:items-stretch"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#E9EBEF] xl:h-auto">
              <div className="absolute inset-0 z-0 ">
                           <DynamicVideoPlayer type="short-1" />
                         </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
          className="mt-12 mb-8 h-px w-full bg-[#4B5563] md:mt-16 md:mb-10 xl:mt-[80px] xl:mb-12"
        />

        {/* Bottom: centered text + button */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto flex max-w-[1186px] flex-col items-center text-center"
        >
          <p className="font-rubik text-[16px] font-normal leading-[150%] text-[#4B5563] md:text-[18px]">
            Engineered with advanced alloys and specialized surface
            treatments, our components provide excellent wear resistance,
            corrosion protection, and reliable sealing. Designed to withstand
            demanding engine conditions, they ensure extended service life,
            consistent performance, and enhanced durability across various
            applications.
          </p>

          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="mt-8"
          >
            <Button label="Explore" href="/products" className="w-[144px]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}