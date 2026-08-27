"use client";

import Container from "./Container";

const services = [
  {
    icon: "/moto/intermotor/services/1.png",
    title: "OE-Quality Components",
    description: "Premium automotive parts built to OE standards.",
  },
  {
    icon: "/moto/intermotor/services/2.png",
    title: "Global Manufacturing",
    description: "Reliable production and global supply.",
  },
  {
    icon: "/moto/intermotor/services/3.png",
    title: "Engineering Support",
    description: "Premium automotive parts built to OE standards.",
  },
  {
    icon: "/moto/intermotor/services/4.png",
    title: "Trusted Brands",
    description: "Quality solutions from trusted brands.",
  },
];

export default function Services() {
  return (
    <section
      className="relative w-full py-16 md:py-24 bg-white overflow-hidden font-[family-name:var(--font-inter)]"
      id="services"
    >
      <Container>
        <div className="flex flex-col items-center text-center mb-14" data-aos="fade-up">
          <h2 className="heading mb-4">Our Services</h2>
          <p className="content max-w-[900px]">
            At Intermotor Group, we provide more than automotive components. Our OE expertise,
            advanced manufacturing, technical support, and global distribution deliver reliable
            solutions with consistent quality and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[55fr_45fr] gap-8 items-stretch">
          {/* Service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center" data-aos="fade-right">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex bg-white min-h-[194px] border border-[#EAEAEA] shadow-[0_4px_20px_rgba(0,0,0,0.06)] rounded-xl p-6 text-center flex flex-col items-center justify-center"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img src={service.icon} alt="" className="w-7 h-7 object-contain shrink-0" />
                  <h3 className="subheading">{service.title}</h3>
                </div>
                <p className="content">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="w-full h-full" data-aos="fade-left">
            <img
              src="/moto/intermotor/services/services.png"
              alt="Intermotor Group exhibition stand"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
