"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";

export default function VisionMission() {
  return (
    <section className="w-full pt-8 pb-16 sm:pt-10 sm:pb-20 md:pt-12 md:pb-24 ">
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
            Vision & Mission
          </h2>

          <p className="mx-auto mt-4 max-w-[900px] font-rubik text-[16px] font-normal leading-[150%] text-[#4B5563] md:text-[18px]">
            Driven by quality and engineering excellence, Güneş Motor
            Supapları develops high-performance engine components while
            focusing on innovation, customer satisfaction, and long-term
            reliability.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
          className="h-full w-full bg-[#E4E4E4]"
        />

        {/* Image + Vision/Mission */}
        <div className="mt-10 flex flex-col items-center gap-10 xl:mt-12 xl:flex-row gap-8 xl:gap-10">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full shrink-0 xl:w-1/2"
          >
            <div className="group relative h-full  w-full overflow-hidden rounded-[10px] border border-[#E4E4E4]">
              <img
                src="/moto/gunesmotor/vm.png"
                alt="Güneş engine valve products"
                className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.06] p-4"
              />
            </div>
          </motion.div>

          {/* Vision / Mission content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.18, delayChildren: 0.1 },
              },
            }}
            className="flex w-full flex-col gap-8 xl:w-1/2"
          >
            {/* Vision */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ x: 4 }}
              className="flex items-center gap-4 sm:gap-5"
            >
              <Image
                src="/moto/gunesmotor/vision.png"
                alt="Vision icon"
                width={60}
                height={60}
                className="h-[60px] w-[60px] shrink-0 object-contain"
              />

              <div className="flex flex-col">
                <h3 className="font-oswald text-[22px] font-semibold leading-[150%] text-[#272727] md:text-[24px]">
                  Our Vision
                </h3>

                <p className="mt-2 font-rubik text-[16px] font-normal leading-[150%] text-[#4B5563] md:text-[18px]">
                  To tirelessly and persistently strive to offer the most
                  suitable products that meet customer needs and expectations,
                  until we become a leading and widely respected company in the
                  global automotive supply industry.
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ x: 4 }}
              className="flex items-center gap-4 sm:gap-5"
            >
              <Image
                src="/moto/gunesmotor/mission.png"
                alt="Mission icon"
                width={60}
                height={60}
                className="h-[60px] w-[60px] shrink-0 object-contain"
              />

              <div className="flex flex-col">
                <h3 className="font-oswald text-[22px] font-semibold leading-[150%] text-[#272727] md:text-[24px]">
                  Our Mission
                </h3>

                <p className="mt-2 font-rubik text-[16px] font-normal leading-[150%] text-[#4B5563] md:text-[18px]">
                  A corporate company that maintains the highest level of
                  dialogue with its customers and employees, embraces
                  continuous improvement as a core principle, never loses its
                  sensitivity to the environment, and accurately understands
                  and interprets customer needs and expectations.
                </p>
              </div>
            </motion.div>

            {/* Button */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="inline-block"
              >
                <Button label="Learn More" href="/institutional" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}