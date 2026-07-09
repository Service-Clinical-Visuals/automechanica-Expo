import { Check, ArrowRight } from "lucide-react";
import Container from "./Container";

const features = [
  "Production Capacity Increased from 200,000 to 5 Million Brake Discs",
  "Offering end-to-end services, from product design and engineering to manufacturing and inspection.",
  "Flexible private label, personalized packaging, and branding solutions tailored to customer needs.",
  "Streamlined logistics ensure timely and dependable deliveries worldwide.",
];

export default function About() {
  return (
    <section className="bg-white py-16">
      <Container>
        {/* Top heading */}
        <div className="mb-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between" data-aos="fade-up">
          <h2 className="heading mb-4 max-w-[620px] text-[36px]! text-center lg:text-left leading-[150%]!">Engineering High-Performance Solutions for Every Industry</h2>
          <div className="flex flex-col items-center lg:items-end gap-4">
            <p className="content text-primary! font-bold text-right">Engineered for Superior Performance</p>
            <button
              type="button"
              aria-label="Search"
              className="flex heading-white hover:text-primary! max-w-[200px] font-medium! rounded-br-[24px] rounded-tl-[24px] text-[20px]! items-center bg-primary justify-center px-8 py-2 text-white hover:bg-black/10 transition-colors"
            >
              About SAS
              <ArrowRight size={24} className="ml-1" />
            </button>
          </div>
        </div>

        <hr className="border-t border-[#00000040] mb-12" />

        {/* Two-column content */}
        <div className="flex flex-col xl:flex-row gap-10 items-center">
          {/* Left: image */}
          <div className="w-full xl:w-[55%] shrink-0" data-aos="fade-right">
            <img
              src="/moto/seld-production/about.png"
              alt="InterCar brake disc manufacturing"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right: content */}
          <div className="w-full xl:w-[45%]" data-aos="fade-left" data-aos-delay="150">
            <h2 className="heading text-[30px]! mb-6 leading-[130%]!">
              Advanced Fuel Additive Solutions for Superior Engine Performance & Protection
            </h2>
            <p className="content mb-6">
              Our premium Fuel Additives are engineered to deliver outstanding performance, protection, and efficiency across a wide range of industries and applications. From passenger cars and commercial vehicles to heavy industrial equipment, motorsport, public works machinery, agricultural vehicles, marine engines, transport fleets, and ski lift systems, our solutions are designed to meet the demands of the most challenging operating environments.
            </p>
            <p className="content mb-6">
              Developed using advanced chemical technology, our additives help improve fuel efficiency, reduce engine deposits, minimize wear, protect critical fuel system components, and enhance overall engine reliability. Whether used for routine maintenance or high-performance applications, they provide consistent results and long-lasting protection. Our products and formulations are in accordance with the regulations and meet the strictest expectations and obligations. Our formulas and labeling comply with CLP and REACH regulations.            </p>
            <p className="content mb-6">
              All our products are developed, produced and packed by using ISO 9001 certified system of quality assurance, SELD is certified, by DNV Certification, since 2005.            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
