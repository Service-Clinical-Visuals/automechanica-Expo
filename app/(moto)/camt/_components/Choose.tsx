"use client";

import Container from "./Container";

const reasons = [
  {
    number: "01",
    icon: "/moto/camt/choose/1.png",
    title: "Industry-Leading Technology",
    description: "Advanced sensor technology for precise and reliable NOx emission monitoring.",
  },
  {
    number: "02",
    icon: "/moto/camt/choose/2.png",
    title: "Rigorous Quality Control",
    description: "Comprehensive testing ensures accuracy, durability, and long-term performance.",
  },
  {
    number: "03",
    icon: "/moto/camt/choose/3.png",
    title: "Proven Track Record",
    description: "Engineered for consistent operation across demanding automotive applications.",
  },
  {
    number: "04",
    icon: "/moto/camt/choose/4.png",
    title: "Optimised Fuel Efficiency",
    description: "Supports cleaner emissions and improved fuel efficiency.",
  },
];

export default function Choose() {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden" id="choose">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
          <h2 className="heading mb-4">Why Choose CAMT NOx Sensors?</h2>
          <p className="content">
            CAMT NOx sensors deliver accurate emission monitoring, improved vehicle efficiency,
            and reliable performance through advanced sensor technology, precision manufacturing,
            and rigorous quality testing. Designed for modern automotive systems, they provide
            consistent operation and long-lasting durability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6" data-aos="fade-up">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="relative border border-[#EAEAEA] rounded-xl p-6"
            >
              <div className="flex justify-between mb-8">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shrink-0 self-end">
                  <img src={reason.icon} alt="" className="w-10 h-10 object-contain" />
                </div>
                <span className="content font-semibold! text-[128px]! text-gray-300! leading-none select-none">
                  {reason.number}
                </span>
              </div>

              <h3 className="subheading mb-6">{reason.title}</h3>
              <p className="content">{reason.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
