"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Discover() {
  const videoBoxRef = useRef<HTMLDivElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const [textScale, setTextScale] = useState(1);

  useLayoutEffect(() => {
    function fit() {
      const videoEl = videoBoxRef.current;
      const wrapperEl = textWrapperRef.current;
      if (!videoEl || !wrapperEl) return;

      const isRow = window.innerWidth >= 1024;
      if (!isRow) {
        wrapperEl.style.setProperty("--text-scale", "1");
        setTextScale(1);
        return;
      }

      const videoHeight = videoEl.offsetHeight;
      const targetHeight = Math.max(videoHeight - 2, 0);

      let lo = 0.5;
      let hi = 1.5;
      let best = 1;

      for (let i = 0; i < 20; i++) {
        const mid = (lo + hi) / 2;
        wrapperEl.style.setProperty("--text-scale", String(mid));
        const h = wrapperEl.scrollHeight;

        if (h > targetHeight) {
          hi = mid;
        } else {
          lo = mid;
          best = mid;
        }
      }

      wrapperEl.style.setProperty("--text-scale", String(best));
      setTextScale(best);
    }

    fit();

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(fit);
    }

    window.addEventListener("resize", fit);
    const ro = new ResizeObserver(fit);

    if (videoBoxRef.current) {
      ro.observe(videoBoxRef.current);
    }

    return () => {
      window.removeEventListener("resize", fit);
      ro.disconnect();
    };
  }, []);

  return (
    <section className="w-full overflow-hidden bg-[#F9F9F9] py-16 md:py-20 xl:py-[100px]">
      <div className="custom-container">
        <div className="mb-12 w-full">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[45px]">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="order-1 w-full min-w-0 lg:flex-1"
            >
              <div
                ref={videoBoxRef}
                className="relative w-full overflow-hidden rounded-[24px] aspect-[1048.53/565.15]"
              >
                <DynamicVideoPlayer
                  type="short-1"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="order-2 w-full min-w-0 lg:w-[510px] lg:max-w-[510px]"
            >
              <div
                ref={textWrapperRef}
                style={{ ["--text-scale" as string]: textScale }}
              >
                <p className="section-label mb-4 text-[#003344]">
                  About Gasket
                </p>

                <h2 className="section-title-lg mb-6 text-[#111111] leading-[1.25]">
                  Advanced Gasket Technology Designed for Maximum Engine
                  Protection
                </h2>

                <p className="body-text mb-6 text-[#444444] leading-[1.6]">
                  Automotive gaskets play a vital role in maintaining engine
                  integrity by creating leak-proof seals between critical
                  engine components. AXIOM manufactures high-performance
                  gaskets using advanced composite materials, multi-layer
                  steel technology, and precision molding processes that
                  withstand high temperatures, pressure, oil, coolant, and
                  fuel exposure.
                </p>

                <p className="body-text text-[#444444] leading-[1.6]">
                  Our gasket solutions are engineered for exceptional sealing
                  performance, reduced maintenance, and longer engine life.
                  Every product is carefully tested to meet demanding
                  automotive standards, ensuring reliable operation even in the
                  harshest environments.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <hr className="border-t border-[#DDDDDD]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between"
        >
          <p className="body-text w-full max-w-[786px] text-[#444444]">
            Designed for passenger cars, commercial vehicles, and heavy-duty
            applications, our radiators ensure consistent cooling efficiency
            while reducing engine stress and overheating risks.
          </p>

          <div className="flex-shrink-0">
            <Button href="#" bgColor="#003344" textColor="#FFFFFF">
              Discover Our Solutions
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}