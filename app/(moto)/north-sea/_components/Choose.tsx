import { ArrowUpRight, Check } from "lucide-react";
import Container from "./Container";

const BENEFITS = [
  {
    label: "Made in Holland",
    description:
      "Manufactured using advanced production processes and strict quality standards to ensure consistent performance and long-lasting reliability.",
  },
  {
    label: "Exceptional Price-to-Quality Ratio",
    description:
      "Delivers premium lubrication solutions that combine outstanding performance with excellent value for a wide range of applications.",
  },
  {
    label: "Comprehensive Product Portfolio",
    description:
      "Offers engine oils, transmission fluids, greases, and specialty lubricants for automotive, commercial, industrial, and agricultural sectors.",
  },
];

export default function Choose() {
  return (
    <section className="relative py-16">
      <Container>
        <div className="relative bg-[#004A94] rounded-[32px] px-4 md:px-10 py-10 md:py-14 overflow-hidden">
          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left: floating white card */}
            <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-10" data-aos="fade-right">
              <h2 className="text-primary! text-2xl md:text-[28px] font-bold leading-tight mb-4">
                Premium Lubrication, Global Performance
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                North Sea Lubricants is an independent lubricating oil brand based in the Netherlands.
                From our plant in the Port of Rotterdam, we offer a wide selection of the highest quality
                European manufactured lubricants. All of our products are &lsquo;MADE IN HOLLAND&rsquo; and
                delivered to more than 65 countries worldwide. In today&apos;s developing market, we give
                you the power! By partnering with North Sea Lubricants, you benefit from trusted quality,
                reliable performance, and innovative lubrication solutions for a wide range of automotive
                and industrial applications.
              </p>

              <div className="space-y-3 mb-8">
                {BENEFITS.map((benefit) => (
                  <div key={benefit.label} className="flex items-start gap-2.5">
                    <span className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-yellow-400 mt-0.5">
                      <Check size={12} strokeWidth={3} className="text-white" />
                    </span>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <span className="text-primary! font-semibold">{benefit.label}</span> – {benefit.description}
                    </p>
                  </div>
                ))}
              </div>

              <button className="group inline-flex items-center gap-1.5 bg-primary text-white rounded-md font-semibold text-sm px-6 py-2.5 hover:bg-primary-hover transition-colors">
                Why Choose Us
                <ArrowUpRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Right: heading + product shot */}
            <div className="relative flex flex-col items-start lg:items-end gap-8" data-aos="fade-left" data-aos-delay="150">
              <div className="lg:text-right">
                <h3 className="heading-white text-2xl md:text-[28px]! leading-[140%]!">
                  Why Work With North Sea Lubricants?
                  <br />
                  There&apos;s No Reason Not To.
                </h3>
                <div className="h-[2px] w-28 bg-yellow-400 mt-4 lg:ml-auto" />
              </div>

              <div className="w-full max-w-md mx-auto lg:mx-0">
                <img
                  src="/moto/north-sea/why_work_2.png"
                  alt="North Sea Lubricants product range"
                  className="w-full h-auto object-contain mix-blend-multiply"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
