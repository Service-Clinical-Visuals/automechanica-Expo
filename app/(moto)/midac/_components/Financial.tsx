"use client";

import Container from "./Container";

const stats = [
  {
    value: "227M €",
    title: "Turn Over in 2023",
    description:
      "Demonstrating strong market presence with consistent revenue growth and sustained business performance.",
  },
  {
    value: "20M €",
    title: "Share Capital",
    description:
      "Backed by a solid financial structure that ensures stability, scalability, and long-term business confidence.",
  },
  {
    value: "150M €",
    title: "Invested in 2025",
    description:
      "Significant investments driving innovation, expansion, and future-ready technologies.",
  },
];

export default function Financial() {
  return (
    <section
      className="relative w-full bg-white py-16 md:py-24 overflow-hidden font-[family-name:var(--font-inter)]"
      id="financial"
    >
      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center mb-14" data-aos="fade-up">
          <span className="inline-block text-primary text-[18px] font-semibold border border-primary rounded-full px-6 py-1 mb-6">
            Financial Highlights
          </span>

          <h2 className="heading leading-[150%]! max-w-[1200px]">
            Strong financial performance supported by steady growth, solid capital, and strategic
            investments.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E5E7EB]">
          {stats.map((stat) => (
            <div key={stat.title} className="flex flex-col items-center text-center px-8 py-8 md:py-0" data-aos="fade-up">
              <div className="font-[family-name:var(--font-poppins)] text-[32px] md:text-[36px] font-semibold text-[#009879] mb-4">
                {stat.value}
              </div>
              <h3 className="subheading mb-3">
                {stat.title}
              </h3>
              <p className="content">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
