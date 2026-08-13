"use client";

import Container from "./Container";
import Button from "./Button";

export default function FullRange() {
  return (
    <section className="py-16 bg-[#F2F2F2]">
      <Container>
        <div className="px-4 sm:px-8 md:px-14 lg:px-[100px]">
          <div className="text-center max-w-[1200px] mx-auto mb-12" data-aos="fade-up">
            <h2 className="heading mb-4">A Full Range</h2>
            <p className="content">
              The drive to be better and continuously improve is at the core of everything we do.
              Through constant innovation, advanced engineering, and uncompromising quality standards,
              we develop products that deliver exceptional performance and unmatched reliability.
              Every solution is designed to meet the evolving demands of modern vehicles while
              ensuring durability, safety, and customer satisfaction.
            </p>
          </div>

          <div className="mb-12" data-aos="fade-up" data-aos-delay="100">
            <img
              src="/moto/euroricambi/fullrange.png"
              alt="Full range of vehicles serviced by Euroricambi"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="flex justify-center" data-aos="fade-up" data-aos-delay="200">
            <Button className="navlink text-white! text-[18px]! font-semibold!" text="Learn More" variant="secondary" showIcon />
          </div>
        </div>
      </Container>
    </section>
  );
}
