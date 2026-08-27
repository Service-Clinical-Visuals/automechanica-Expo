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
        <div className="text-center px-6 mb-10 flex flex-col items-center" data-aos="fade-up">
          <h2 className="heading mb-4">About InterCar</h2>
          <p className="content max-w-[1100px]">
            The Company was born at the end of the 60s, when the founder VITTORIO PALAZZANI bought the
            first warehouse for the storage of mechanical spare parts in Palazzolo Milanese. In 1971 the
            warehouse has been moved in Cazzago San Martino, near Brescia city centre, becoming the new
            factory of CAR S.P.A. The Company improved its production from 200.000 to 5.000.000 of car
            brake discs.
          </p>
        </div>

        <hr className="border-t border-gray-200 mb-12" />

        {/* Two-column content */}
        <div className="flex flex-col xl:flex-row gap-10 items-center">
          {/* Left: image */}
          <div className="w-full xl:w-1/2 shrink-0" data-aos="fade-right">
            <img
              src="/moto/intercar/about.png"
              alt="InterCar brake disc manufacturing"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right: content */}
          <div className="w-full xl:w-1/2" data-aos="fade-left" data-aos-delay="150">
            <p className="content mb-6">
              For over five decades, InterCar has been driven by a passion for innovation, quality, and
              precision in brake disc manufacturing. From its humble beginnings in the late 1960s to
              becoming one of the industry's leading manufacturers, the company has continuously expanded
              its production capabilities and technological expertise. Today, InterCar delivers premium
              brake discs for both OEM and aftermarket applications, offering complete end-to-end
              manufacturing solutions that meet the highest international standards.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 border border-gray-200 rounded-md p-5 shadow-md"
                >
                  <span className="shrink-0 w-5 h-5 mt-0.5 rounded-full bg-[#00913F] flex items-center justify-center">
                    <Check size={13} strokeWidth={3} className="text-white" />
                  </span>
                  <p className="content text-[15px]! leading-[150%]!">{feature}</p>
                </div>
              ))}
            </div>

            <button className="bg-secondary navlink text-white! text-[16px]! font-medium rounded-md px-6 py-2.5 flex items-center gap-2 hover:bg-secondary-hover transition-colors">
              <span>Learn More</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
