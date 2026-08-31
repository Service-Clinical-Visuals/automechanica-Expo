"use client";

import Link from "next/link";
import Container from "./Container";

const features = [
  {
    icon: "/moto/intermotor/performance/1.png",
    title: "Premium Materials",
    description: "Built with quality materials for reliable performance.",
  },
  {
    icon: "/moto/intermotor/performance/2.png",
    title: "Quality Tested",
    description: "Tested for reliable and consistent operation.",
  },
  {
    icon: "/moto/intermotor/performance/3.png",
    title: "Vehicle Compatibility",
    description: "Built with quality materials for reliable performance.",
  },
  {
    icon: "/moto/intermotor/performance/4.png",
    title: "Long Service Life",
    description: "Quality materials for reliable performance.",
  },
];

export default function Performance() {
  return (
    <section
      className="relative w-full py-16 md:py-24 bg-white overflow-hidden font-[family-name:var(--font-inter)]"
      id="performance"
    >
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-14 items-center mb-14">
          {/* Text content */}
          <div data-aos="fade-right">
            <h2 className="heading mb-5">Engineered for Reliable Performance</h2>

            <div className="flex flex-col gap-4 mb-8">
              <p className="content">
                Every NOx Sensor is manufactured using premium materials and advanced precision
                manufacturing processes to deliver reliable performance, accurate operation, and
                long-lasting durability. Designed with advanced engineering standards, each sensor
                ensures consistent functionality and dependable results across a wide range of
                vehicle applications.
              </p>
              <p className="content">
                Each sensor undergoes rigorous quality testing under strict standards to ensure
                durability, accuracy, and dependable performance in demanding driving conditions.
                Through comprehensive validation and inspection processes, our NOx Sensors are
                tested to maintain consistent operation, withstand challenging environments, and
                deliver reliable results throughout their service life.
              </p>
              <p className="content">
                Designed for replacement and maintenance applications, our NOx Sensors provide
                long service life and compatibility with a wide range of European and Asian
                vehicle applications.
              </p>
            </div>

            <Link
              href="#"
              className="navlink inline-block text-white! font-semibold! bg-primary hover:bg-primary-hover px-6 py-2.5 rounded-md transition-colors whitespace-nowrap"
            >
              Know More
            </Link>
          </div>

          {/* Image */}
          <div className="w-full" data-aos="fade-left">
            <img
              src="/moto/intermotor/performance/performance..png"
              alt="NOx sensor components on display"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6" data-aos="fade-up">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white border border-[#EAEAEA] shadow-[0_4px_20px_rgba(0,0,0,0.06)] rounded-xl p-6 text-center flex flex-col items-center"
            >
              <div className="flex items-center gap-3 mb-3">
                <img src={feature.icon} alt="" className="w-8 h-8 object-contain shrink-0" />
                <h3 className="subheading">{feature.title}</h3>
              </div>
              <p className="content">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
