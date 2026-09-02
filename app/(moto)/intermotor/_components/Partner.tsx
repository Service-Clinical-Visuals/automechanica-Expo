"use client";

import Container from "./Container";

const brands = [
  { image: "/moto/intermotor/partners/1.png", name: "Lemark" },
  { image: "/moto/intermotor/partners/2.png", name: "Lucas" },
  { image: "/moto/intermotor/partners/3.png", name: "Intermotor" },
  { image: "/moto/intermotor/partners/4.png", name: "FuelParts" },
];

export default function Partner() {
  return (
    <section
      className="relative w-full py-16 md:py-24 bg-white overflow-hidden font-[family-name:var(--font-inter)]"
      id="partner"
    >
      <Container>
        <div className="flex flex-col items-center text-center mb-12" data-aos="fade-up">
          <h2 className="heading mb-4">Driven by Trusted Brands</h2>
          <p className="content max-w-[750px]">
            Intermotor Group brings together leading automotive brands&mdash;including Intermotor,
            Lucas, Fuel Parts, and Lemark&mdash;to provide OE-quality components, comprehensive
            product coverage, and reliable aftermarket solutions trusted worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6" data-aos="fade-up">
          {brands.map((brand) => (
            <img
              key={brand.name}
              src={brand.image}
              alt={brand.name}
              className="w-full h-auto object-contain"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
