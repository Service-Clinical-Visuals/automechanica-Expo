"use client";

import Container from "./Container";

const cards = [
  {
    icon: "/moto/sasic/chart.png",
    title: "14,000 References",
    text: "More than 14,000 references, and more than 60,000 vehicle applications for French, German and Asian vehicle brands.",
  },
  {
    icon: "/moto/sasic/spanner.png",
    title: "95 Years of Expertise",
    text: "As an original equipment manufacturer, SASIC offers premium quality products, developed in France.",
  },
  {
    icon: "/moto/sasic/certificate.png",
    title: "ISO 9001 Quality Certification",
    text: "All SASIC range references undergo final inspection, based on original equipment part requirements.",
  },
];

export default function About() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="px-4 sm:px-8 md:px-14 lg:px-[100px]">

          {/* Top: image + text */}
          <div className="flex flex-col lg:flex-row gap-10 items-center mb-15">
            {/* Left image */}
            <div className="w-full lg:w-1/2 shrink-0 items-center" data-aos="fade-right">
              <img
                src="/moto/sasic/about.png"
                alt="SASIC team"
                className="w-full h-full object-cover"
                style={{ minHeight: 320 }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.background = "#cbd5e1";
                }}
              />
            </div>

            {/* Right content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center gap-1 self-center" data-aos="fade-left" data-aos-delay="150">
              <span className="block h-[3px] w-14 bg-primary" />
              <h2 className="heading -mt-1">Who We Are</h2>

              <p className="content text-justify mt-2">
                Leveraging our extensive experience in manufacturing, SASIC proudly distributes a vast
                selection of nearly 14,000 premium quality products. We ensure that every SASIC product
                meets our stringent specifications and undergoes thorough quality control processes to
                maintain the highest standards.
              </p>

              <p className="content text-justify mt-2">
                We apply our own specifications and rigorous quality control to all SASIC products.
              </p>

              <p className="content text-justify mt-2">
                With nearly 95 years of experience, SASIC&apos;s quality, certified ISO 9001, is recognized in
                over 80 countries.
              </p>

              <p className="content text-justify mt-2">
                SASIC offers products for OES, OEM and aftermarket.
              </p>

              <div className="mt-6">
                <button
                  className="inline-flex items-center justify-center bg-[#F7C41F] hover:bg-[#e09a2c] transition-colors px-9 py-2.5"
                  style={{ clipPath: "polygon(18px 0, 100% 0, calc(100% - 18px) 100%, 0 100%)" }}
                >
                  <span className="heading text-[#1A1A1A] text-[20px]! uppercase">
                    Learn More About Us
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom: info cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map(({ icon, title, text }, i) => (
              <div
                key={i}
                className="border border-[#E2E8F0] rounded-lg px-6 py-10 flex flex-col items-center text-center gap-4"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <img src={icon} alt="" className="h-24 w-auto object-contain" />
                <h3 className="heading text-[28px]! uppercase">{title}</h3>
                <p className="content">{text}</p>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
