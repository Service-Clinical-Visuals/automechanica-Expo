"use client";

import Link from "next/link";
import Container from "./Container";

export default function Partner() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden" id="partner">
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-[43fr_57fr] gap-12 items-center">
          {/* Left: Text content */}
          <div data-aos="fade-right">
            <div className="flex items-start gap-3 mb-5">
              <span className="w-3.5 h-3.5 bg-secondary shrink-0 mt-2" />
              <h2 className="heading uppercase leading-[100%]!">
                Zimmermann &ndash; A Partner Where Quality Is Added Value.
              </h2>
            </div>

            <p className="content mb-8">
              Zimmermann proudly supports the &quot;Quality is Added Value&quot; initiative,
              promoting premium replacement parts that meet automotive industry standards.
              Precision-engineered, legally compliant, and backed by manufacturer responsibility,
              these components ensure reliable performance, safety, and long-term value.
            </p>

            <Link
              href="#"
              className="inline-block bg-secondary hover:bg-secondary-hover text-white! heading text-[16px]! tracking-[1px]! leading-[20px]! uppercase px-6 py-3 rounded transition-colors"
            >
              View Our Certifications
            </Link>
          </div>

          {/* Right: Product image */}
          <div className="w-full" data-aos="fade-left">
            <img
              src="/moto/zimmermann/partner.png"
              alt="Zimmermann brake discs and pads product range"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
