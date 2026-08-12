"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Quality() {
  return (
    <section className="w-full bg-[#f3f5f7] py-16 sm:py-20 md:py-24 xl:py-[100px]">
      <div className="container">
        {/* Text + Video */}
        <div className="flex w-full flex-col items-center gap-10 xl:flex-row gap-8 xl:gap-10">
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
            className="flex w-full flex-col xl:w-1/2"
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-oswald text-[26px] font-semibold leading-[150%] text-[#272727] sm:text-[28px] md:text-[32px]"
            >
              Quality Assurance & Testing
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-6 font-rubik text-[16px] font-normal leading-[150%] text-[#4B5563] md:text-[18px]"
            >
              Every finished product undergoes 100% quality inspection in
              GÜNEŞ&apos;s advanced testing laboratory, where modern inspection
              equipment ensures precision, reliability, and compliance with
              strict automotive standards. After successful testing, each
              component is securely packaged and prepared for safe shipment.
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-6 font-rubik text-[16px] font-normal leading-[150%] text-[#4B5563] md:text-[18px]"
            >
              Quality is integrated into every stage of the process—from raw
              material selection and precision manufacturing to final
              inspection, sales, and after-sales support. Operating under the
              IATF 16949 Automotive Quality Management System, GÜNEŞ is
              committed to continuous improvement, consistent product quality,
              and delivering reliable solutions that ensure long-term customer
              satisfaction.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-8"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  label="Explore"
                  href="/quality"
                  className="w-[144px]"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex w-full shrink-0 xl:w-1/2"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[#E9EBEF] ">
              <div className="absolute inset-0 z-0 ">
                           <DynamicVideoPlayer type="short-2" />
                         </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}