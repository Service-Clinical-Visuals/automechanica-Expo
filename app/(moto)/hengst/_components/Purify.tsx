"use client";
import Container from "./Container";

const items = [
  {
    icon: "/moto/hengst/purify/leaf.png",
    title: "Sustainable",
    description:
      "We make the planet cleaner with our products. We also make the journey there as clean as possible.",
  },
  {
    icon: "/moto/hengst/purify/bulb.png",
    title: "Innovative",
    description:
      "We develop the filtration solutions of the future. For our customers and for society.",
  },
  {
    icon: "/moto/hengst/purify/chart.png",
    title: "Efficient",
    description:
      "Our focus is on energy efficiency. This helps the environment and saves costs.",
  },
];

export default function Purify() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <img
        src="/moto/hengst/purify/bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />

      <Container className="relative z-10">
        <h2 className="heading-white text-center mb-16" data-aos="fade-up">
          Purifying our planet
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="flex flex-row gap-4 items-center"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <img src={item.icon} alt="" className="w-16 h-16" />
              <div className="flex flex-col gap-4">
                <h3 className="heading-white text-[24px]! font-semibold!">{item.title}</h3>
                <p className="content-white">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
