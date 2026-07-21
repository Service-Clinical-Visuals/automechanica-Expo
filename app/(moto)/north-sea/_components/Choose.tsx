import { Check } from "lucide-react";
import Container from "./Container";
import Button from "./Button";

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
    <section className="relative py-16 lg:py-24 bg-white">
      <Container>
        <div className="relative w-full">
          <div className="absolute top-0 left-0 right-0 lg:h-[250px] xl:h-[300px] bg-[#004A94] rounded-[24px] hidden xl:block" />
          <div className="absolute inset-0 bg-[#004A94] rounded-[24px] xl:hidden" />

          <div className="relative grid xl:grid-cols-12 gap-8 xl:gap-14 items-stretch xl:px-6 z-10">
            {/* Left: floating white card */}
            <div
              className="xl:col-span-7 xl:mt-40 xl:-mb-6"
              data-aos="fade-right"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 h-full flex flex-col justify-center border border-gray-100">
                <h2 className="text-[#333333] section-title font-bold leading-tight mb-4">
                  Premium Lubrication, Global Performance
                </h2>
                <p className="text-gray-500 section-text! font-normal leading-relaxed mb-8">
                  North Sea Lubricants is an independent lubricating oil brand based in the Netherlands.
                  From our plant in the Port of Rotterdam, we offer a wide selection of the highest quality
                  European manufactured lubricants. All of our products are &lsquo;MADE IN HOLLAND&rsquo; and
                  delivered to more than 65 countries worldwide. In today&apos;s developing market, we give
                  you the power! By partnering with North Sea Lubricants, you benefit from trusted quality,
                  reliable performance, and innovative lubrication solutions for a wide range of automotive
                  and industrial applications.
                </p>

                <div className="space-y-4 mb-10">
                  {BENEFITS.map((benefit) => (
                    <div key={benefit.label} className="flex items-start gap-3">
                      <span className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#FFD700] mt-0.5">
                        <Check size={14} strokeWidth={3} className="text-white" />
                      </span>
                      <p className="text-gray-500 section-text! font-normal leading-relaxed">
                        <span className="text-primary! font-bold">{benefit.label}</span> – {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <Button text="Why Choose Us" showIcon variant="secondary" />
                </div>
              </div>
            </div>

            {/* Right: heading + product shot */}
            <div
              className="xl:col-span-5 flex flex-col justify-between h-full relative"
              data-aos="fade-left"
              data-aos-delay="150"
            >
              <div className="xl:text-right pt-15 xl:pt-25 px-4 xl:px-0">
                <h3 className="text-white section-title font-bold leading-[1.3]">
                  Why Work With North Sea Lubricants?
                  <br />
                  There&apos;s No Reason Not To.
                </h3>
                <div className="h-[2px] w-28 bg-[#FFD700] mt-5 xl:ml-auto" />
              </div>

              <div className="w-full max-w-[500px] 3xl:max-w-[00px] mx-auto xl:mx-0 xl:ml-auto mt-12 xl:mt-auto relative z-20">
                <img
                  src="/moto/north-sea/why_work_2.png"
                  alt="North Sea Lubricants product range"
                  className="w-full h-auto object-contain xl:translate-y-8"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
