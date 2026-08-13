"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";

const stats = [
  {
    icon: "/moto/gunesmotor/Vector1.png",
    value: "50+",
    label: "Years of Experience",
  },
  {
    icon: "/moto/gunesmotor/Vector2.png",
    value: "250+",
    label: "Expert Team",
  },
  {
    icon: "/moto/gunesmotor/Vector3.png",
    value: "3000+",
    label: "Product Range",
  },
];

export default function About() {
  return (
    <section className="w-full px-0 py-16 md:py-20 xl:py-[100px]">
      <div className="container">
        <div className="flex flex-col gap-10 xl:flex-row xl:items-stretch gap:8 xl:gap-10">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex w-full xl:w-1/2 xl:self-stretch order-2 xl:order-1"
          >
            <div className="group relative h-[220px] w-full overflow-hidden rounded-[12px] sm:h-[280px] md:h-[360px] xl:h-full">
              <Image
                src="/moto/gunesmotor/about.png"
                alt="Güneş Motor Supapları"
                fill
                priority
                className="scale-[1.08] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.15]"
              />
            </div>
          </motion.div>

          {/* Content */}
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
            className="flex w-full flex-col xl:w-1/2 order-1 xl:order-2"
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-oswald text-[26px] font-semibold leading-[150%] text-[#272727] sm:text-[28px] md:text-[32px]"
            >
              Engineering Excellence Since 1972
            </motion.h2>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-6 font-rubik text-[16px] font-normal leading-[150%] text-[#4B5563] md:text-[18px]"
            >
              <span className="font-bold">Güneş</span> Motor Supapları is a
              leading manufacturer of high-quality intake and exhaust valves
              for gasoline and diesel engines. Combining decades of
              experience with advanced manufacturing technologies, the
              company delivers precision-engineered products that meet the
              demanding requirements of the global automotive industry.
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-6 font-rubik text-[16px] font-normal leading-[150%] text-[#4B5563] md:text-[18px]"
            >
              Driven by innovation, continuous improvement, and a strong
              commitment to quality, Güneş Supap invests in modern production
              facilities, skilled professionals, and advanced engineering.
              This dedication enables the company to provide reliable,
              high-performance engine valve solutions while strengthening its
              presence in domestic and international markets.
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-6 font-rubik text-[16px] font-normal leading-[150%] text-[#4B5563] md:text-[18px]"
            >
              With a customer-focused approach and a commitment to continuous
              development, Güneş Supap delivers dependable engine valve
              solutions that combine durability, precision, and consistent
              performance for automotive markets worldwide.
            </motion.p>

            {/* Button */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-8 flex justify-center xl:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <Button label="Know About Us" href="/about-us" />
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.12 },
                },
              }}
              className="mt-10 flex flex-wrap justify-center gap-8 sm:gap-10 xl:justify-start"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-3"
                >
                  <Image
                    src={stat.icon}
                    alt=""
                    width={40}
                    height={52}
                    className="h-[52px] w-auto shrink-0 object-contain"
                  />

                  <div className="flex flex-col">
                    <span className="font-oswald text-[32px] font-semibold leading-[150%] text-[#D9000D] sm:text-[40px] md:text-[48px]">
                      {stat.value}
                    </span>

                    <span className="font-oswald text-[16px] font-semibold leading-[150%] text-[#272727] md:text-[18px]">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}