import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowUpRight, Check } from "lucide-react";
import Container from "./Container";

const FEATURES = [
  {
    title: "Advanced Wear Protection",
    description: "Minimizes friction and engine wear.",
  },
  {
    title: "Outstanding Engine Cleanliness",
    description: "Prevents sludge and deposits.",
  },
  {
    title: "OEM-Compliant Formulations",
    description: "Meets leading manufacturer specifications.",
  },
  {
    title: "Long-Lasting Engine Protection",
    description: "Supports extended service life.",
  },
];

export default function Premium() {
  return (
    <section className="relative py-16 overflow-hidden">
      <Container>
        <div className="relative bg-primary rounded-3xl px-6 md:px-10 py-10 md:py-12">
          {/* Top row: heading + CTA */}
          <div className="relative flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8" data-aos="fade-up">
            <div className="max-w-[70%] md:max-w-[60%]">
              <h2 className="heading-white mb-3">Premium Engine Oil Solutions</h2>
              <p className="content-white">
                North Sea Lubricants develops premium engine oils that deliver outstanding protection,
                enhanced performance, and long-lasting reliability for modern gasoline and diesel engines.
                Manufactured in the Netherlands using advanced lubricant technology, our products help
                maximize engine life while meeting the latest OEM and international standards.
              </p>
            </div>
            <div className="shrink-0">
              <button className="group inline-flex items-center gap-1.5 bg-white text-primary! rounded-full font-semibold text-sm px-6 py-2.5 hover:bg-gray-100 transition-colors">
                Explore Products
                <ArrowUpRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          <hr className="border-t border-white/20 mb-10" />

          {/* Two-column content */}
          <div className="relative flex flex-col lg:flex-row gap-10 items-center">
            {/* Left: image */}
            <div className="w-full lg:w-[72%] shrink-0" data-aos="fade-right">
              <div className="w-full bg-[#f0f0f0] aspect-[4/3] md:aspect-video rounded flex items-center justify-center border border-gray-100 overflow-hidden relative">
                <DynamicVideoPlayer type="360" />
              </div>
            </div>

            {/* Right: key features */}
            <div className="w-full lg:w-[28%] space-y-4" data-aos="fade-left" data-aos-delay="150">
              <h3 className="heading-white text-[26px]!">Key Features</h3>

              <div className="space-y-3">
                {FEATURES.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex items-start gap-3 border border-white/25 rounded-lg px-4 py-5"
                  >
                    <span className="shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-yellow-400 mt-0.5">
                      <Check size={13} strokeWidth={3} className="text-white" />
                    </span>
                    <p className="content-white text-[18px]! leading-[150%]!">
                      <span className="font-semibold">{feature.title}</span> – {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
