"use client";

import Container from "./Container";
import Button from "./Button";

export default function About() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="px-4 sm:px-8 md:px-10 lg:px-[40px]">

          {/* Heading + intro copy */}
          <div className="flex flex-col items-center text-center gap-4 mb-10" data-aos="fade-up">
            <h2 className="heading">The Euroricambi Group</h2>
            <p className="content max-w-4xl">
              Motor Valley, located right in the heart of the Emilia Romagna region, is home to a group
              which was established through the merger of two long-standing production brands. As a
              result, it combines the best mechanical tradition with state-of-the-art technologies and a
              worldwide sales network. Spanning from heavy commercial vehicles, trucks and buses, to
              earthmoving and mining machines, passenger cars and light and medium commercial vehicles,
              a complete range of spare parts to meet every market&apos;s demand.
            </p>
          </div>

          {/* Two images side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div data-aos="fade-right">
              <img
                src="/moto/euroricambi/about1.png"
                alt="Euroricambi production facility"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div data-aos="fade-left" data-aos-delay="150">
              <img
                src="/moto/euroricambi/about2.png"
                alt="Euroricambi team"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Closing copy + CTA */}
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-6" data-aos="fade-up">
            <p className="content max-w-[1100px]">
              Built on a legacy of engineering excellence, we deliver a comprehensive range of
              high-quality automotive components designed for reliability, performance, and global
              market demands across diverse industries.
            </p>
            <div className="hidden navlink text-white! lg:flex items-center">
              <Button
                text="Discover More"
                variant="secondary"
                showIcon
                className="rounded-sm px-5 py-2.5 font-medium!"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
