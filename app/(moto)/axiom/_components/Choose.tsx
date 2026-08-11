"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "/moto/axiom/premium.png",
    title: "Premium Quality",
    description:
      "Built with advanced manufacturing technology and precision production processes.",
  },
  {
    icon: "/moto/axiom/inc.png",
    title: "International Quality Standards",
    description:
      "Ensuring dependable products for worldwide automotive markets.",
  },
];

export default function Choose() {
  return (
    <section className="w-full py-16 md:py-20 xl:py-[100px]">
      <div className="custom-container flex flex-col xl:flex-row gap-10 xl:gap-[45px] items-center">
        {/* text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full xl:w-[510px] xl:max-w-[510px] flex-shrink-0"
        >
          <p className="section-label text-[#003344] mb-4">Why Choose Us</p>
          <h2 className="section-title-lg text-[#111111] mb-6">
            Why Global Customers Choose AXIOM
          </h2>
          <p className="body-text text-[#444444] mb-8">
            Automotive gaskets play a vital role in maintaining engine
            integrity by creating leak-proof seals between critical engine
            components. AXIOM manufactures high-performance gaskets using
            advanced composite materials.
          </p>

          <div className="flex flex-col gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15, ease: "easeOut" }}
                className="border border-[#003344] rounded-2xl shadow-sm p-5 flex items-start gap-4"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12 flex-shrink-0 object-contain"
                />
                <div className="flex flex-col gap-[5px]">
                  <h3 className="card-title text-[#111111]">{feature.title}</h3>
                  <p className="body-text text-[#444444]">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* image block — flex-1 so it fills all remaining container width at any screen size */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="relative w-full xl:flex-1 min-w-0 h-[350px] md:h-[450px] xl:h-[600px] min-[1920px]:h-[560px] min-[2560px]:h-[720px] rounded-2xl overflow-hidden"
        >
          <img
            src="/moto/axiom/prod2.png"
            alt="AXIOM automotive components"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}