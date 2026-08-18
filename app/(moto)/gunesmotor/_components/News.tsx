"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";

const newsItems = [
  {
    image: "/moto/gunesmotor/news1.png",
    date: "May 19-22, 2026",
    location: "TÜYAP, Istanbul",
    title: "We will also be taking our place at Automechanika Istanbul 2026.",
    description:
      "GÜNEŞ Engine Valves is proud to participate in Automechanika Istanbul 2026. Join us at Hall 7, Stand A110 from May 19–22, 2026 to explore our latest engine valve solutions, meet our technical experts, and discuss new business opportunities.",
  },
  {
    image: "/moto/gunesmotor/news2.png",
    date: "June 12–15, 2025",
    location: "TÜYAP, Istanbul",
    title: "We'll be meeting you at Automechanika Istanbul 2025!",
    description:
      "GÜNEŞ Engine Valves proudly participated in Automechanika Istanbul 2025. Visitors joined us at Hall 11A, Stand A135 from June 12–15, 2025 to explore our engine valve solutions, learn about our manufacturing processes, and connect with our team.",
  },
];

function CalendarIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="16"
        rx="2"
        stroke="#D9000D"
        strokeWidth="1.5"
      />
      <path d="M3 9H21" stroke="#D9000D" strokeWidth="1.5" />
      <path
        d="M8 3V7M16 3V7"
        stroke="#D9000D"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M12 21C12 21 19 14.5 19 9.5C19 5.91 15.87 3 12 3C8.13 3 5 5.91 5 9.5C5 14.5 12 21 12 21Z"
        stroke="#D9000D"
        strokeWidth="1.5"
      />
      <circle
        cx="12"
        cy="9.5"
        r="2.5"
        stroke="#D9000D"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function News() {
  return (
    <section className="w-full pt-4 pb-16 sm:pt-6 sm:pb-20 md:pt-8 md:pb-24 xl:pt-[40px] xl:pb-[100px]">
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
            Latest News
          </h2>

          <p className="mx-auto mt-4 max-w-[900px] font-rubik text-[16px] font-normal leading-[150%] text-[#4B5563] md:text-[18px]">
            Stay updated with GÜNEŞ Engine Valves&apos; latest innovations,
            company developments, and industry highlights, showcasing new
            advancements, achievements, and milestones.
          </p>
        </motion.div>

        {/* News cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.18 },
            },
          }}
          className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:gap-10"
        >
          {newsItems.map((item) => (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="group/card relative flex flex-col overflow-hidden rounded-[10px] border border-[#E4E4E4] bg-white transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] xl:flex-row"
            >
              {/* Image */}
              <div className="relative aspect-[396/431] w-full shrink-0 overflow-hidden rounded-[10px] xl:w-1/2">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover/card:scale-[1.06]"
                />
              </div>

              {/* Content */}
              <div className="flex w-full flex-col pb-[75px] pl-5 pr-5 pt-9 md:pb-[80px] md:pl-6 md:pr-6 md:pt-10 xl:w-1/2">
                {/* Date + Location */}
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <CalendarIcon />

                    <span className="font-rubik text-[16px] leading-[150%] text-[#4B5563] md:text-[18px]">
                      {item.date}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <LocationIcon />

                    <span className="font-rubik text-[16px] leading-[150%] text-[#4B5563] md:text-[18px]">
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-4 font-oswald text-[20px] font-semibold leading-[150%] text-[#272727] md:text-[24px]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 font-rubik text-[16px] font-normal leading-[150%] text-[#4B5563] md:text-[18px]">
                  {item.description}
                </p>
              </div>

              {/* Arrow */}
              <motion.button
                type="button"
                aria-label={`Read more: ${item.title}`}
                whileHover={{ scale: 1.1, rotate: 8 }}
                whileTap={{ scale: 0.92 }}
                transition={{ duration: 0.2 }}
                className="group absolute bottom-0 right-0 flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#D9000D] bg-white transition-colors hover:bg-[#D9000D]"
              >
                <svg
                  viewBox="0 0 17 15"
                  fill="none"
                  className="h-[21px] w-[21px]"
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

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mt-10 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <Button label="View All" href="/media" className="w-[153px]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}